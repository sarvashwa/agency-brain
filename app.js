(async () => {
  "use strict";

  let G = null;
  try {
    const res = await fetch(`graph.json?v=${Date.now()}`, { cache: "no-store" });
    if (res.ok) G = await res.json();
  } catch {
    // file:// or offline: fall back to the generated graph.js
  }
  G = G || window.AGENCY_GRAPH;
  if (!G || !window.d3) {
    document.body.innerHTML =
      '<div style="padding:40px;font-family:system-ui;color:#e8eef8;background:#05070d;min-height:100vh">' +
      "<h1>Agency Brain could not load</h1><p>Missing graph.js or D3. Run <code>python3 tools/build_brain_graph.py</code> and reload.</p></div>";
    return;
  }

  const COLORS = {
    agent: "#5eead4",
    skill: "#fbbf24",
    project: "#f472b6",
    note: "#93c5fd",
  };

  const EDGE_COLORS = {
    uses: "#5eead4",
    works_on: "#f472b6",
    supports: "#fbbf24",
    documents: "#93c5fd",
    links: "#38bdf8",
    mentions: "#a78bfa",
    co_used: "#34d399",
  };

  const EDGE_LABELS = {
    uses: ["uses", "used by"],
    works_on: ["works on", "staffed by"],
    supports: ["supports", "supported by"],
    documents: ["documents", "documented by"],
    links: ["links to", "linked from"],
    mentions: ["mentions", "mentioned by"],
    co_used: ["co-used with", "co-used with"],
  };

  const TYPE_LABELS = {
    agent: "Agent",
    skill: "Skill",
    project: "Project",
    note: "Knowledge",
  };

  const LAYER_LABELS = {
    project: "Projects",
    agent: "Agents",
    skill: "Skills",
    note: "Knowledge",
  };

  const state = {
    hidden: new Set(),
    selected: null,
    focusMode: false,
    search: "",
    matches: new Set(),
    isolateEdge: null,
    hoverEdge: null,
  };

  const stage = document.querySelector(".stage");
  const svg = d3.select("#graph");
  const tooltip = document.getElementById("tooltip");
  const inspector = document.getElementById("inspector");
  const searchInput = document.getElementById("search");

  const nodeById = new Map(G.nodes.map((n) => [n.id, n]));
  const nodes = G.nodes.map((n) => ({ ...n }));
  const links = G.edges.map((e, i) => ({ ...e, _i: i }));
  const simNode = new Map(nodes.map((n) => [n.id, n]));

  const adjacency = new Map();
  for (const n of nodes) adjacency.set(n.id, { out: [], in: [] });
  for (const e of G.edges) {
    if (!adjacency.has(e.source) || !adjacency.has(e.target)) continue;
    adjacency.get(e.source).out.push(e);
    adjacency.get(e.target).in.push(e);
  }

  const defs = svg.append("defs");
  const glow = defs.append("filter").attr("id", "glow").attr("x", "-80%").attr("y", "-80%").attr("width", "260%").attr("height", "260%");
  glow.append("feGaussianBlur").attr("stdDeviation", "3.5").attr("result", "blur");
  const merge = glow.append("feMerge");
  merge.append("feMergeNode").attr("in", "blur");
  merge.append("feMergeNode").attr("in", "SourceGraphic");

  const root = svg.append("g");
  const linkLayer = root.append("g").attr("class", "links");
  const nodeLayer = root.append("g").attr("class", "nodes");

  for (const [type, color] of Object.entries(COLORS)) {
    const g = defs
      .append("radialGradient")
      .attr("id", `grad-${type}`)
      .attr("cx", "35%")
      .attr("cy", "30%")
      .attr("r", "78%");
    g.append("stop").attr("offset", "0%").attr("stop-color", d3.color(color).brighter(1.1).toString()).attr("stop-opacity", 0.6);
    g.append("stop").attr("offset", "58%").attr("stop-color", color).attr("stop-opacity", 0.26);
    g.append("stop").attr("offset", "100%").attr("stop-color", color).attr("stop-opacity", 0.1);
  }

  const zoom = d3
    .zoom()
    .scaleExtent([0.28, 4])
    .on("zoom", (event) => {
      root.attr("transform", event.transform);
      updateLabels(event.transform.k);
    });

  svg.call(zoom).on("dblclick.zoom", null);

  const sim = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance((l) => linkDistance(l.type))
        .strength((l) => linkStrength(l.type))
    )
    .force("charge", d3.forceManyBody().strength((d) => (d.type === "project" ? -520 : d.type === "agent" ? -180 : -130)))
    .force("collide", d3.forceCollide((d) => radius(d) + 9).iterations(2))
    .force("x", d3.forceX(0).strength(0.035))
    .force("y", d3.forceY(0).strength(0.045))
    .on("tick", ticked);

  const linkSel = linkLayer
    .selectAll("path")
    .data(links)
    .join("path")
    .attr("class", (d) => `edge ${d.type}`);

  const nodeSel = nodeLayer
    .selectAll("g")
    .data(nodes)
    .join("g")
    .attr("class", (d) => `node type-${d.type}`)
    .style("color", (d) => COLORS[d.type] || "#fff")
    .on("mouseenter", showTooltip)
    .on("mousemove", moveTooltip)
    .on("mouseleave", hideTooltip)
    .on("click", (event, d) => {
      if (event.defaultPrevented) return;
      event.stopPropagation();
      selectNode(d);
    })
    .call(dragBehavior());

  nodeSel
    .append("circle")
    .attr("class", "halo")
    .attr("r", (d) => radius(d) * 2.6)
    .attr("fill", (d) => COLORS[d.type]);

  nodeSel
    .append("path")
    .attr("class", "symbol")
    .attr("d", (d) => d3.symbol().type(symbolFor(d)).size(nodeArea(d))())
    .attr("fill", (d) => `url(#grad-${d.type})`)
    .attr("stroke", (d) => COLORS[d.type]);

  nodeSel
    .append("text")
    .attr("dy", (d) => radius(d) + 15)
    .text((d) => d.label);

  nodeSel
    .attr("opacity", 0)
    .transition()
    .delay((d, i) => i * 6)
    .duration(700)
    .ease(d3.easeCubicOut)
    .attr("opacity", 1);

  svg.on("click", (event) => {
    if (event.target === svg.node()) clearSelection();
  });

  buildSidebar();
  buildQuickLinks();
  updateLabels(0.9);
  applyVisibility();
  applyEmphasis();

  d3.select("#zoom-in").on("click", () => svg.transition().duration(220).call(zoom.scaleBy, 1.3));
  d3.select("#zoom-out").on("click", () => svg.transition().duration(220).call(zoom.scaleBy, 0.77));
  d3.select("#fit").on("click", resetLayout);
  d3.select("#all-layers").on("click", () => {
    state.hidden.clear();
    document.querySelectorAll("#layer-list input").forEach((el) => (el.checked = true));
    applyVisibility();
    applyEmphasis();
  });

  searchInput.addEventListener("input", () => {
    state.search = searchInput.value.trim().toLowerCase();
    state.matches = new Set();
    if (state.search) {
      for (const n of nodes) {
        const hay = [n.label, n.description, n.meta?.path, n.meta?.scope, n.subtype, n.type]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        if (hay.includes(state.search)) state.matches.add(n.id);
      }
    }
    if (state.selected) state.matches.add(state.selected.id);
    applyEmphasis();
  });

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && state.matches.size) {
      const first =
        nodes.find((n) => state.matches.has(n.id) && n.type === "project") ||
        nodes.find((n) => state.matches.has(n.id));
      if (first) selectNode(first);
    }
    if (event.key === "Escape") {
      searchInput.value = "";
      state.search = "";
      state.matches.clear();
      searchInput.blur();
      applyEmphasis();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== searchInput) {
      event.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    if (event.key === "Escape") {
      if (document.activeElement === searchInput) return;
      clearSelection();
    }
  });

  const initialHash = decodeURIComponent(location.hash.replace(/^#/, ""));
  if (initialHash && nodeById.has(initialHash)) {
    const d = simNode.get(initialHash);
    if (d) selectNode(d, { fromHash: true });
  }

  const resize = debounce(() => {
    const { width, height } = stage.getBoundingClientRect();
    svg.attr("width", width).attr("height", height);
    fit({ duration: 350 });
  }, 220);
  window.addEventListener("resize", resize);
  svg.attr("width", stage.clientWidth).attr("height", stage.clientHeight);
  setTimeout(() => {
    const { width, height } = stage.getBoundingClientRect();
    svg.call(zoom.transform, d3.zoomIdentity.translate(width / 2, height / 2).scale(0.9));
    setTimeout(() => fit({ duration: 650 }), 650);
    setTimeout(() => fit({ duration: 700 }), 1900);
  }, 30);

  function linkDistance(type) {
    return { uses: 84, works_on: 125, supports: 96, documents: 112, links: 82, mentions: 74, co_used: 62 }[type] || 95;
  }

  function linkStrength(type) {
    return { uses: 0.6, works_on: 0.48, supports: 0.4, documents: 0.35, links: 0.45, mentions: 0.22, co_used: 0.16 }[type] || 0.3;
  }

  function nodeArea(d) {
    if (d.type === "project") return 560 + d.degree * 8;
    if (d.type === "agent") return 150 + d.degree * 9;
    if (d.type === "skill") return 130 + d.degree * 6;
    return 95 + d.degree * 5;
  }

  function radius(d) {
    return Math.sqrt(nodeArea(d)) / 1.55;
  }

  function symbolFor(d) {
    if (d.type === "project") return d3.symbolDiamond;
    if (d.type === "skill") return d3.symbolSquare;
    return d3.symbolCircle;
  }

  function withAlpha(hex, alpha) {
    const c = d3.color(hex);
    if (!c) return hex;
    c.opacity = alpha;
    return c.toString();
  }

  function dragBehavior() {
    return d3
      .drag()
      .on("start", (event, d) => {
        if (!event.active) sim.alphaTarget(0.22).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) sim.alphaTarget(0);
        d.fx = event.x;
        d.fy = event.y;
      });
  }

  function ticked() {
    linkSel.attr("d", edgePath);
    nodeSel.attr("transform", (d) => `translate(${d.x},${d.y})`);
  }

  function edgePath(d) {
    const sx = d.source.x;
    const sy = d.source.y;
    const tx = d.target.x;
    const ty = d.target.y;
    const dx = tx - sx;
    const dy = ty - sy;
    const dist = Math.hypot(dx, dy) || 1;
    const bend = Math.min(46, dist * 0.14);
    const mx = (sx + tx) / 2 - (dy / dist) * bend;
    const my = (sy + ty) / 2 + (dx / dist) * bend;
    return `M${sx},${sy}Q${mx},${my} ${tx},${ty}`;
  }

  function visible(n) {
    return !state.hidden.has(n.type);
  }

  function buildSidebar() {
    const counts = {
      project: G.stats.projects,
      agent: G.stats.agents,
      skill: G.stats.skills,
      note: G.stats.notes,
    };
    const order = ["project", "agent", "skill", "note"];
    const layerList = document.getElementById("layer-list");
    layerList.innerHTML = order
      .map(
        (type) => `
      <label class="layer">
        <input type="checkbox" checked data-layer="${type}" />
        <span class="switch" aria-hidden="true"></span>
        <span class="dot" style="color:${COLORS[type]}"></span>
        <span class="name">${LAYER_LABELS[type]}</span>
        <span class="count">${counts[type]}</span>
      </label>`
      )
      .join("");
    layerList.querySelectorAll("input").forEach((el) => {
      el.addEventListener("change", () => {
        if (el.checked) state.hidden.delete(el.dataset.layer);
        else state.hidden.add(el.dataset.layer);
        applyVisibility();
        applyEmphasis();
      });
    });

    const edgeCounts = {};
    for (const e of G.edges) edgeCounts[e.type] = (edgeCounts[e.type] || 0) + 1;
    const edgeLegend = document.getElementById("edge-legend");
    edgeLegend.innerHTML = Object.keys(G.edge_types)
      .map((type) => {
        const dashed = ["works_on", "links", "mentions", "co_used"].includes(type);
        const dotted = ["links", "co_used"].includes(type);
        return `<div class="legend-row" data-edge="${type}" title="${escapeAttr(G.edge_types[type])}">
          <span class="legend-line ${dashed ? "dashed" : ""} ${dotted ? "dotted" : ""}" style="color:${EDGE_COLORS[type]}"></span>
          <span>${type.replace(/_/g, " ")}</span>
          <span class="legend-count">${edgeCounts[type] || 0}</span>
        </div>`;
      })
      .join("");
    edgeLegend.querySelectorAll(".legend-row").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        state.hoverEdge = el.dataset.edge;
        applyEdgeIsolation();
      });
      el.addEventListener("mouseleave", () => {
        state.hoverEdge = null;
        applyEdgeIsolation();
      });
      el.addEventListener("click", () => {
        state.isolateEdge = state.isolateEdge === el.dataset.edge ? null : el.dataset.edge;
        document.querySelectorAll(".legend-row").forEach((row) => row.classList.toggle("isolated", row.dataset.edge === state.isolateEdge));
        applyEdgeIsolation();
      });
    });

    const projectList = document.getElementById("project-list");
    projectList.innerHTML = G.nodes
      .filter((n) => n.type === "project")
      .sort((a, b) => b.degree - a.degree)
      .map((n) => {
        const neighbors = adjacency.get(n.id) || { out: [], in: [] };
        const count = new Set([...neighbors.out, ...neighbors.in].map((e) => (e.source === n.id ? e.target : e.source))).size;
        return `<button class="project-chip" data-project="${n.id}" type="button">
          <span class="dot" style="color:${COLORS.project}"></span>
          <span>${escapeHtml(n.label)}</span><span class="n">${count}</span>
        </button>`;
      })
      .join("");
    projectList.querySelectorAll("[data-project]").forEach((el) => {
      el.addEventListener("click", () => {
        const d = simNode.get(el.dataset.project);
        if (d) selectNode(d, { focus: true });
      });
    });

    document.getElementById("top-stats").innerHTML = `
      <span><b>${G.stats.agents}</b> agents</span>
      <span><b>${G.stats.skills}</b> skills</span>
      <span><b>${G.stats.projects}</b> projects</span>
      <span><b>${G.stats.notes}</b> notes</span>
      <span><b>${G.stats.edges}</b> relations</span>`;
  }

  function buildQuickLinks() {
    const quick = document.getElementById("quick-links");
    quick.innerHTML = G.nodes
      .filter((n) => n.type === "project")
      .map((n) => `<button type="button" data-quick="${n.id}">${escapeHtml(n.label)}</button>`)
      .join("");
    quick.querySelectorAll("[data-quick]").forEach((el) => {
      el.addEventListener("click", () => {
        const d = simNode.get(el.dataset.quick);
        if (d) selectNode(d, { focus: true });
      });
    });
  }

  function applyVisibility() {
    nodeSel.style("display", (d) => (visible(d) ? null : "none"));
    linkSel.style("display", (d) => {
      const source = simNode.get(idOf(d.source));
      const target = simNode.get(idOf(d.target));
      return source && target && visible(source) && visible(target) ? null : "none";
    });
  }

  function idOf(endpoint) {
    return typeof endpoint === "string" ? endpoint : endpoint?.id;
  }

  function applyEdgeIsolation() {
    const type = state.hoverEdge || state.isolateEdge;
    linkSel
      .classed("isolated", (d) => !!type && d.type === type)
      .classed("dimmed", (d) => !!type && d.type !== type);
    if (type) {
      const activeIds = new Set();
      for (const e of G.edges) {
        if (e.type !== type) continue;
        activeIds.add(e.source);
        activeIds.add(e.target);
      }
      nodeSel.classed("edge-dim", (d) => !activeIds.has(d.id));
    } else {
      nodeSel.classed("edge-dim", false);
    }
  }

  function applyEmphasis() {
    const selected = state.selected;
    const focus = state.focusMode && selected;
    const focusIds = new Set();
    if (focus) {
      focusIds.add(selected.id);
      const adj = adjacency.get(selected.id);
      for (const e of adj.out) focusIds.add(e.target);
      for (const e of adj.in) focusIds.add(e.source);
    }

    const hasSearch = !!state.search;
    nodeSel
      .classed("selected", (d) => !!selected && d.id === selected.id)
      .classed("dimmed", (d) => {
        if (!visible(d)) return true;
        if (focus && !focusIds.has(d.id)) return true;
        if (hasSearch && state.matches.size && !state.matches.has(d.id)) return true;
        return false;
      })
      .classed("highlighted", (d) => (hasSearch && state.matches.has(d.id)) || (focus && d.id === selected.id))
      .classed("search-match", (d) => hasSearch && state.matches.has(d.id));

    linkSel
      .classed("dimmed", (d) => {
        if (focus) return !(d.source.id === selected.id || d.target.id === selected.id);
        if (hasSearch && state.matches.size) return !(state.matches.has(d.source.id) && state.matches.has(d.target.id));
        return false;
      })
      .classed("highlighted", (d) => focus && (d.source.id === selected.id || d.target.id === selected.id));

    applyEdgeIsolation();
  }

  function updateLabels(zoomLevel) {
    const z = Number.isFinite(zoomLevel) ? zoomLevel : lastZoom();
    nodeSel.classed(
      "show-label",
      (d) =>
        d.type === "project" ||
        (state.selected && d.id === state.selected.id) ||
        (z >= 1.45 && d.degree >= 12) ||
        (z >= 1.9 && d.degree >= 7)
    );
  }

  function selectNode(d, opts = {}) {
    state.selected = d;
    if (opts.focus) state.focusMode = true;
    if (opts.fromHash) state.focusMode = false;
    renderInspector(d);
    applyEmphasis();
    updateLabels(lastZoom());
    if (!opts.fromHash) {
      history.replaceState(null, "", "#" + encodeURIComponent(d.id));
    }
    if (opts.focus) focusOn(d);
  }

  function clearSelection() {
    state.selected = null;
    state.focusMode = false;
    inspector.innerHTML = emptyInspector();
    buildQuickLinks();
    applyEmphasis();
    history.replaceState(null, "", location.pathname + location.search);
  }

  function emptyInspector() {
    return `<div class="inspector-empty">
      <div class="orb" aria-hidden="true"></div>
      <h2>Select a node</h2>
      <p>Start with a project to see the team and skills around it, or search for an agent.</p>
      <div class="quick" id="quick-links"></div>
    </div>`;
  }

  function renderInspector(d) {
    const adj = adjacency.get(d.id) || { out: [], in: [] };
    const groups = new Map();
    for (const e of adj.out) {
      const label = EDGE_LABELS[e.type]?.[0] || e.type.replace(/_/g, " ");
      const key = `${label}:out`;
      if (!groups.has(key)) groups.set(key, { label, arrow: "→", items: [] });
      groups.get(key).items.push({ id: e.target, type: e.type });
    }
    for (const e of adj.in) {
      const label = EDGE_LABELS[e.type]?.[1] || `← ${e.type.replace(/_/g, " ")}`;
      const key = `${label}:in`;
      if (!groups.has(key)) groups.set(key, { label, arrow: "←", items: [] });
      groups.get(key).items.push({ id: e.source, type: e.type });
    }

    const groupHtml = [...groups.values()]
      .map((group) => {
        group.items.sort((a, b) => (nodeById.get(a.id)?.label || "").localeCompare(nodeById.get(b.id)?.label || ""));
        return `<div class="conn-group">
          <h4>${escapeHtml(group.label)} <span style="color:var(--dim);font-weight:400">${group.items.length}</span></h4>
          ${group.items
            .map(({ id }) => {
              const n = nodeById.get(id);
              if (!n) return "";
              return `<button class="conn" type="button" data-target="${escapeAttr(id)}">
                <span class="dot" style="color:${COLORS[n.type]}"></span>
                <span class="label">${escapeHtml(n.label)}</span>
                <span class="arrow">${group.arrow}</span>
              </button>`;
            })
            .join("")}
        </div>`;
      })
      .join("");

    const meta = metaRows(d);
    const noteActions =
      d.type === "note" && d.meta?.path
        ? `<button type="button" id="open-obsidian">Open in Obsidian</button>`
        : "";
    const copyAction = `<button type="button" id="copy-id">Copy id</button>`;

    inspector.innerHTML = `
      <div class="kicker"><span class="dot" style="color:${COLORS[d.type]}"></span>${TYPE_LABELS[d.type]}${d.subtype ? " · " + escapeHtml(d.subtype) : ""}</div>
      <h2>${escapeHtml(d.label)}</h2>
      <p class="desc">${escapeHtml(d.description || "No description recorded.")}</p>
      <div class="actions">
        <button class="primary" type="button" id="focus-node">${state.focusMode ? "Exit focus" : "Focus neighborhood"}</button>
        ${noteActions}
        ${copyAction}
      </div>
      <dl class="meta-grid">${meta}</dl>
      <div class="section-title"><span>Connections</span><span>${adj.out.length + adj.in.length}</span></div>
      ${groupHtml || '<p class="micro">No connections in this graph.</p>'}
      ${d.type === "note" && d.body ? `<div class="note-body">${escapeHtml(d.body.slice(0, 2600))}${d.body.length > 2600 ? "\n\n…" : ""}</div>` : ""}
    `;

    inspector.querySelector("#focus-node")?.addEventListener("click", () => {
      state.focusMode = !state.focusMode;
      renderInspector(d);
      applyEmphasis();
      if (state.focusMode) focusOn(d);
    });
    inspector.querySelector("#copy-id")?.addEventListener("click", async (event) => {
      try {
        await navigator.clipboard.writeText(d.id);
        event.currentTarget.textContent = "Copied";
        setTimeout(() => (event.currentTarget.textContent = "Copy id"), 1200);
      } catch {
        event.currentTarget.textContent = "Copy failed";
      }
    });
    inspector.querySelector("#open-obsidian")?.addEventListener("click", () => {
      const file = encodeURIComponent(d.meta.path.replace(/\.md$/, ""));
      window.open(`obsidian://open?vault=agency-kb&file=${file}`, "_blank", "noopener");
    });
    inspector.querySelectorAll("[data-target]").forEach((el) => {
      el.addEventListener("click", () => {
        const n = simNode.get(el.dataset.target);
        if (n) selectNode(n);
      });
    });
  }

  function metaRows(d) {
    const rows = [];
    if (d.type === "agent") {
      rows.push(["Mode", d.meta.mode || "—"]);
      rows.push(["Model class", d.meta.model_class || "—"]);
      rows.push(["Skills", String((d.meta.skills || []).length)]);
      rows.push(["Tools", (d.meta.tools || []).join(", ") || "—"]);
    } else if (d.type === "skill") {
      rows.push(["Tier", d.meta.tier || "—"]);
      rows.push(["Status", d.meta.status || "—"]);
      rows.push(["Path", `<code>${escapeHtml(d.meta.path || "")}</code>`]);
    } else if (d.type === "project") {
      rows.push(["Status", d.meta.status || "—"]);
      rows.push(["Agents", String((G.edges.filter((e) => e.target === d.id && e.type === "works_on").length) || 0)]);
      rows.push(["Skills", String((G.edges.filter((e) => e.target === d.id && e.type === "supports").length) || 0)]);
    } else {
      rows.push(["Type", d.subtype || "note"]);
      rows.push(["Date", d.meta.date || "—"]);
      rows.push(["Scope", d.meta.scope || "—"]);
      rows.push(["Status", d.meta.status || "—"]);
      rows.push(["Path", `<code>${escapeHtml(d.meta.path || "")}</code>`]);
    }
    return rows.map(([k, v]) => `<dt>${escapeHtml(k)}</dt><dd>${v}</dd>`).join("");
  }

  function showTooltip(event, d) {
    tooltip.innerHTML = `<div class="tt-type">${TYPE_LABELS[d.type]}${d.subtype ? " · " + escapeHtml(d.subtype) : ""}</div>
      <div class="tt-title">${escapeHtml(d.label)}</div>
      <div class="tt-desc">${escapeHtml((d.description || "").slice(0, 150))}</div>`;
    tooltip.classList.add("visible");
    moveTooltip(event);
    nodeSel.classed("hovered", (n) => n.id === d.id);
  }

  function moveTooltip(event) {
    const rect = stage.getBoundingClientRect();
    let x = event.clientX - rect.left + 14;
    let y = event.clientY - rect.top + 14;
    const tw = tooltip.offsetWidth || 220;
    const th = tooltip.offsetHeight || 80;
    if (x + tw > rect.width - 8) x = event.clientX - rect.left - tw - 14;
    if (y + th > rect.height - 8) y = event.clientY - rect.top - th - 14;
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
  }

  function hideTooltip() {
    tooltip.classList.remove("visible");
    nodeSel.classed("hovered", false);
  }

  function focusOn(d) {
    const { width, height } = stage.getBoundingClientRect();
    const scale = Math.max(0.8, Math.min(1.7, lastZoom()));
    svg
      .transition()
      .duration(450)
      .call(zoom.transform, d3.zoomIdentity.translate(width / 2, height / 2).scale(scale).translate(-d.x, -d.y));
  }

  function fit(opts = {}) {
    const visibleNodes = nodes.filter((n) => visible(n) && Number.isFinite(n.x) && Number.isFinite(n.y));
    if (!visibleNodes.length) return;
    const { width, height } = stage.getBoundingClientRect();
    const xs = visibleNodes.map((n) => n.x);
    const ys = visibleNodes.map((n) => n.y);
    const x0 = Math.min(...xs);
    const x1 = Math.max(...xs);
    const y0 = Math.min(...ys);
    const y1 = Math.max(...ys);
    const pad = 90;
    const scale = Math.max(0.28, Math.min(2.2, Math.min((width - pad * 2) / Math.max(1, x1 - x0), (height - pad * 2) / Math.max(1, y1 - y0))));
    const cx = (x0 + x1) / 2;
    const cy = (y0 + y1) / 2;
    const transform = d3.zoomIdentity.translate(width / 2, height / 2).scale(scale).translate(-cx, -cy);
    if (opts.duration) svg.transition().duration(opts.duration).call(zoom.transform, transform);
    else svg.call(zoom.transform, transform);
  }

  function resetLayout() {
    nodes.forEach((n) => {
      n.fx = null;
      n.fy = null;
    });
    sim.alpha(1).restart();
    setTimeout(() => fit({ duration: 600 }), 700);
  }

  let lastZoomValue = 0.9;
  function lastZoom() {
    return lastZoomValue;
  }
  zoom.on("zoom", (event) => {
    lastZoomValue = event.transform.k;
    root.attr("transform", event.transform);
    updateLabels(event.transform.k);
  });

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, "&#96;");
  }

  function debounce(fn, ms) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), ms);
    };
  }
})();
