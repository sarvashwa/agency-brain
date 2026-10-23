window.AGENCY_GRAPH = {
  "generated": "2026-10-23T10:59:49+00:00",
  "source": {
    "agents": "/Users/hackerboy/ultimate-agency/agency/registry/agents.json",
    "skills": "/Users/hackerboy/ultimate-agency/agency/registry/skills.json",
    "projects": "/Users/hackerboy/ultimate-agency/agency/brain/projects.json",
    "vault": "/Users/hackerboy/agency-kb"
  },
  "stats": {
    "agents": 20,
    "skills": 21,
    "projects": 5,
    "notes": 16,
    "nodes": 61,
    "edges": 204
  },
  "layers": {
    "agent": "Canonical role that owns or reviews work",
    "skill": "Reusable procedure loaded by an agent",
    "project": "Active outcome with agents, skills, and notes",
    "note": "Durable knowledge, decision, lesson, or source"
  },
  "edge_types": {
    "uses": "Agent loads skill",
    "works_on": "Agent is assigned to project",
    "supports": "Skill is required by project",
    "documents": "Note records project knowledge",
    "links": "Obsidian wikilink",
    "mentions": "Note text names an agent or skill",
    "co_used": "Two skills share at least two agents"
  },
  "nodes": [
    {
      "id": "agent:ai-engineer",
      "label": "AI Engineer",
      "type": "agent",
      "subtype": "reasoning",
      "description": "Designs model-backed features, retrieval, evaluation and guardrails.",
      "meta": {
        "mode": "subagent",
        "model_class": "reasoning",
        "tools": [
          "read",
          "write",
          "bash"
        ],
        "skills": [
          "token-budget",
          "security-gate",
          "agent-evals-security",
          "ai-cli-mastery"
        ]
      },
      "degree": 5
    },
    {
      "id": "agent:critic",
      "label": "Adversarial Critic",
      "type": "agent",
      "subtype": "reasoning",
      "description": "Independent challenge of plans, architecture and parity claims.",
      "meta": {
        "mode": "subagent",
        "model_class": "reasoning",
        "tools": [
          "read",
          "bash",
          "webfetch"
        ],
        "skills": [
          "pixel-parity",
          "agent-orchestration",
          "agent-evals-security"
        ]
      },
      "degree": 6
    },
    {
      "id": "agent:agent-platform-engineer",
      "label": "Agent Platform Engineer",
      "type": "agent",
      "subtype": "reasoning",
      "description": "Builds and hardens the agent runtime: CLIs, MCP, sandboxes, permissions, evals, observability, and model routing.",
      "meta": {
        "mode": "subagent",
        "model_class": "reasoning",
        "tools": [
          "read",
          "write",
          "edit",
          "bash",
          "webfetch",
          "websearch"
        ],
        "skills": [
          "ai-cli-mastery",
          "agent-evals-security",
          "agent-orchestration",
          "security-gate"
        ]
      },
      "degree": 5
    },
    {
      "id": "agent:backend-engineer",
      "label": "Backend Engineer",
      "type": "agent",
      "subtype": "execution",
      "description": "Builds APIs, persistence, integrations and safe server-side behavior.",
      "meta": {
        "mode": "subagent",
        "model_class": "execution",
        "tools": [
          "read",
          "write",
          "edit",
          "bash"
        ],
        "skills": [
          "security-gate",
          "cloud-worker"
        ]
      },
      "degree": 4
    },
    {
      "id": "agent:chief-of-staff",
      "label": "Chief of Staff",
      "type": "agent",
      "subtype": "execution",
      "description": "Maintains state, handoff, decisions and the board so work survives context loss.",
      "meta": {
        "mode": "subagent",
        "model_class": "execution",
        "tools": [
          "read",
          "write",
          "edit",
          "bash"
        ],
        "skills": [
          "memory-protocol",
          "knowledge-system"
        ]
      },
      "degree": 3
    },
    {
      "id": "agent:design-director",
      "label": "Design Director",
      "type": "agent",
      "subtype": "execution",
      "description": "Owns visual hierarchy, typography, motion, accessibility and design tokens.",
      "meta": {
        "mode": "subagent",
        "model_class": "execution",
        "tools": [
          "read",
          "write",
          "edit",
          "bash"
        ],
        "skills": [
          "site-replication",
          "pixel-parity",
          "design-toolchain",
          "visual-aesthetics",
          "design-intel",
          "playwright-recording",
          "ghost-cursor"
        ]
      },
      "degree": 8
    },
    {
      "id": "agent:design-technologist",
      "label": "Design Technologist",
      "type": "agent",
      "subtype": "execution",
      "description": "Turns art direction into production UI: tokens, components, motion, 3D, accessibility and performance.",
      "meta": {
        "mode": "subagent",
        "model_class": "execution",
        "tools": [
          "read",
          "write",
          "edit",
          "bash"
        ],
        "skills": [
          "design-toolchain",
          "visual-aesthetics",
          "pixel-parity",
          "visual-replica",
          "design-intel",
          "playwright-recording",
          "ghost-cursor"
        ]
      },
      "degree": 9
    },
    {
      "id": "agent:conductor",
      "label": "Executive Conductor",
      "type": "agent",
      "subtype": "reasoning",
      "description": "Routes objectives, selects the minimum competent team, enforces gates, and stops work.",
      "meta": {
        "mode": "primary",
        "model_class": "reasoning",
        "tools": [
          "read",
          "write",
          "edit",
          "bash",
          "task",
          "todowrite",
          "webfetch",
          "websearch"
        ],
        "skills": [
          "agent-orchestration",
          "token-budget",
          "agency-capability-atlas",
          "ai-cli-mastery",
          "agent-evals-security"
        ]
      },
      "degree": 7
    },
    {
      "id": "agent:frontend-engineer",
      "label": "Frontend Engineer",
      "type": "agent",
      "subtype": "execution",
      "description": "Implements UI, scroll/motion systems, responsive behavior and client performance.",
      "meta": {
        "mode": "subagent",
        "model_class": "execution",
        "tools": [
          "read",
          "write",
          "edit",
          "bash"
        ],
        "skills": [
          "site-replication",
          "pixel-parity",
          "design-toolchain",
          "visual-aesthetics",
          "visual-replica",
          "design-intel",
          "playwright-recording",
          "ghost-cursor"
        ]
      },
      "degree": 10
    },
    {
      "id": "agent:growth-creative-technologist",
      "label": "Growth Creative Technologist",
      "type": "agent",
      "subtype": "execution",
      "description": "Builds and evaluates campaign creative and landing pages with AI tools, brand guardrails, and measurable conversion.",
      "meta": {
        "mode": "subagent",
        "model_class": "execution",
        "tools": [
          "read",
          "write",
          "edit",
          "bash",
          "webfetch",
          "websearch"
        ],
        "skills": [
          "marketing-ai-toolchain",
          "design-toolchain",
          "research-synthesis"
        ]
      },
      "degree": 2
    },
    {
      "id": "agent:knowledge-architect",
      "label": "Knowledge Architect",
      "type": "agent",
      "subtype": "execution",
      "description": "Designs and maintains the Obsidian/Git knowledge base, retrieval indexes, scopes, ADRs, and memory hygiene.",
      "meta": {
        "mode": "subagent",
        "model_class": "execution",
        "tools": [
          "read",
          "write",
          "edit",
          "bash"
        ],
        "skills": [
          "knowledge-system",
          "memory-protocol"
        ]
      },
      "degree": 4
    },
    {
      "id": "agent:memory-curator",
      "label": "Memory Curator",
      "type": "agent",
      "subtype": "execution",
      "description": "Maintains L1/L2/L3 memory, dedupe, scoping and promotion.",
      "meta": {
        "mode": "subagent",
        "model_class": "execution",
        "tools": [
          "read",
          "write",
          "bash"
        ],
        "skills": [
          "memory-protocol",
          "knowledge-system"
        ]
      },
      "degree": 5
    },
    {
      "id": "agent:architect",
      "label": "Principal Architect",
      "type": "agent",
      "subtype": "reasoning",
      "description": "Defines system boundaries, data contracts, failure modes and the build plan.",
      "meta": {
        "mode": "subagent",
        "model_class": "reasoning",
        "tools": [
          "read",
          "write",
          "bash"
        ],
        "skills": [
          "agent-orchestration",
          "security-gate",
          "agent-evals-security",
          "ai-cli-mastery"
        ]
      },
      "degree": 5
    },
    {
      "id": "agent:product-strategist",
      "label": "Product Strategist",
      "type": "agent",
      "subtype": "reasoning",
      "description": "Turns ambiguous asks into scoped outcomes, users, constraints and success metrics.",
      "meta": {
        "mode": "subagent",
        "model_class": "reasoning",
        "tools": [
          "read",
          "write",
          "webfetch"
        ],
        "skills": [
          "research-synthesis",
          "vibe-coding-protocol",
          "visual-aesthetics"
        ]
      },
      "degree": 2
    },
    {
      "id": "agent:qa-engineer",
      "label": "QA & Verification Engineer",
      "type": "agent",
      "subtype": "execution",
      "description": "Turns acceptance criteria into executable checks and independent evidence.",
      "meta": {
        "mode": "subagent",
        "model_class": "execution",
        "tools": [
          "read",
          "write",
          "bash"
        ],
        "skills": [
          "pixel-parity",
          "site-replication",
          "agent-evals-security",
          "vibe-coding-protocol",
          "visual-replica",
          "playwright-recording",
          "ghost-cursor"
        ]
      },
      "degree": 10
    },
    {
      "id": "agent:recon-engineer",
      "label": "Recon & Reverse-Engineering Engineer",
      "type": "agent",
      "subtype": "reasoning",
      "description": "Deconstructs external targets: DOM, network graph, assets, interaction math, constraints.",
      "meta": {
        "mode": "subagent",
        "model_class": "reasoning",
        "tools": [
          "read",
          "write",
          "bash",
          "webfetch"
        ],
        "skills": [
          "site-replication",
          "response-mirror",
          "ai-cli-mastery",
          "deep-capture",
          "design-intel",
          "ghost-cursor",
          "playwright-recording"
        ]
      },
      "degree": 9
    },
    {
      "id": "agent:research-director",
      "label": "Research Director",
      "type": "agent",
      "subtype": "reasoning",
      "description": "Plans and synthesizes research with source verification and explicit uncertainty.",
      "meta": {
        "mode": "subagent",
        "model_class": "reasoning",
        "tools": [
          "read",
          "webfetch",
          "websearch",
          "write"
        ],
        "skills": [
          "research-synthesis",
          "knowledge-system",
          "ai-cli-mastery"
        ]
      },
      "degree": 3
    },
    {
      "id": "agent:sre-cloud",
      "label": "SRE & Cloud Engineer",
      "type": "agent",
      "subtype": "execution",
      "description": "Builds reproducible environments, sandboxes, CI and deploy/rollback paths.",
      "meta": {
        "mode": "subagent",
        "model_class": "execution",
        "tools": [
          "read",
          "write",
          "bash"
        ],
        "skills": [
          "cloud-worker",
          "security-gate",
          "agent-evals-security"
        ]
      },
      "degree": 5
    },
    {
      "id": "agent:security-engineer",
      "label": "Security Engineer",
      "type": "agent",
      "subtype": "reasoning",
      "description": "Reviews trust boundaries, input handling, secrets, dependencies and deployment exposure.",
      "meta": {
        "mode": "subagent",
        "model_class": "reasoning",
        "tools": [
          "read",
          "bash"
        ],
        "skills": [
          "security-gate",
          "agent-evals-security"
        ]
      },
      "degree": 4
    },
    {
      "id": "agent:token-governor",
      "label": "Token Governor",
      "type": "agent",
      "subtype": "execution",
      "description": "Sets envelopes, watches burn, forces compaction and stops low-value work.",
      "meta": {
        "mode": "subagent",
        "model_class": "execution",
        "tools": [
          "read",
          "write",
          "bash"
        ],
        "skills": [
          "token-budget"
        ]
      },
      "degree": 2
    },
    {
      "id": "note:daily/2026/2026-10-22",
      "label": "2026-10-22",
      "type": "note",
      "subtype": "daily",
      "description": "",
      "meta": {
        "path": "daily/2026/2026-10-22.md",
        "status": "active",
        "date": "2026-10-22",
        "scope": "global",
        "confidence": "1.0"
      },
      "body": "\n# 2026-10-22\n\n## Done\n\n- Completed 2026 capability research across AI CLIs, design/marketing tooling, knowledge/memory, orchestration/evals/security/token management.\n- Upgraded canonical registry to v5.1.0: 20 agents, 16 skills.\n- Installed adapter updates across Claude, OpenCode, and Antigravity.\n- Initialized and seeded the `agency-kb` Obsidian vault; `kb_doctor` clean on 14 notes.\n- Hardened generated OpenCode agents with explicit least-privilege permissions; verified with `opencode debug agent`.\n- Added `tools/eval_smoke.py`; 171/171 deterministic checks pass.\n- Backed up memory/state to `~/ultimate-agency/_backups/2026-10-22/` and migrated durable notes.\n- Made behavior model-neutral: kernel + fingerprint + 428 structural checks + 262 static parity checks; all 128 adapters carry the contract.\n- Built the Agency Brain viewer (`54 nodes / 154 edges`) and wired Basic Memory as a local full-text derived index (`14 notes`).\n\n## Decisions\n\n- [[projects/agency-os/decisions/ADR-001-knowledge-base|ADR-001: Use Obsidian + Git as canonical knowledge]]\n- [[projects/agency-os/decisions/ADR-003-agency-os-consolidation|ADR-003: One canonical registry]]\n- [[projects/agency-os/decisions/ADR-004-model-neutral-behavior|ADR-004: Make model changes behavior-preserving]]\n\n## Open\n\n- Migrate `charm/notes/remembered.md`.\n- Run a live model canary on the next switch.\n- Add a Promptfoo/DeepEval model-quality suite when provider credentials are available.",
      "degree": 4
    },
    {
      "id": "note:projects/agency-os/decisions/ADR-001-knowledge-base",
      "label": "ADR-001: Use Obsidian + Git as canonical knowledge",
      "type": "note",
      "subtype": "decision",
      "description": "The agency needs durable, auditable knowledge that survives model, session, and tool changes. Chat history and vector stores are not sufficient. The current memory is split across ~/.claude/state/, ~/ultimate-agency/memory/, Memorix, and ch\u2026",
      "meta": {
        "path": "projects/agency-os/decisions/ADR-001-knowledge-base.md",
        "status": "active",
        "date": "2026-10-22",
        "scope": "project:agency-os",
        "confidence": "0.9"
      },
      "body": "\n# ADR-001: Use Obsidian + Git as canonical knowledge\n\n## Context\n\nThe agency needs durable, auditable knowledge that survives model, session, and tool changes. Chat history and vector stores are not sufficient. The current memory is split across `~/.claude/state/`, `~/ultimate-agency/memory/`, Memorix, and `charm/notes/remembered.md`.\n\n## Decision\n\nUse a Git-backed Markdown vault at `~/agency-kb/` as the canonical source of truth. Open it with Obsidian. Add Basic Memory as a derived SQLite/MCP index. Demote Memorix to episodic memory and `~/.claude/state/` to volatile operational state.\n\n## Visualization\n\nThe vault is projected into a typed graph by `tools/build_brain_graph.py`, using the agent/skill registry, explicit project assignments, frontmatter, wikilinks, and mentions. `apps/agency-brain/` renders it as a static D3 viewer.\n\n- The graph is generated, not authoritative. Rebuild it from the registry and vault.\n- Relation direction is semantic: agent \u2192 skill, agent \u2192 project, project \u2192 skill, note \u2192 project, note \u2194 note.\n- The viewer runs no local model; it is a static browser client. Preview with `./scripts/agency brain --serve`.\n- The viewer names private projects, so it must not be published without access control.\n\n## Alternatives\n\n- Notion: best collaboration, but cloud truth and weaker local agent ownership.\n- Anytype: strong private object graph, but lossy Markdown export.\n- Logseq/SiYuan/Joplin: viable, but not better for agent-operated Markdown at this scale.\n- Vector DB as truth: opaque, hard to audit, migration risk.\n\n## Consequences\n\n- Positive: portable, diffable, auditable, local-first, agent-readable.\n- Negative: requires Git discipline and duplicate/staleness checks.\n- Reversibility: high; Markdown remains readable without Obsidian or Basic Memory.\n\n## Evidence\n\n- Research: `~/ultimate-agency/docs/research/2026-10-capability-upgrade.md`.\n- Vault initialized and seeded 2026-10-22; `tools/kb_doctor.py` clean on 14 notes.\n- Basic Memory 0.23.2 installed 2026-10-22; `agency-kb` is the default local project; create/read/update/delete round-trip and `basic-memory doctor` passed. It remains a derived index, never authoritative.",
      "degree": 3
    },
    {
      "id": "note:projects/aoricreative/decisions/ADR-002-capture-and-parity",
      "label": "ADR-002: Capture at the network layer, prove with parity",
      "type": "note",
      "subtype": "decision",
      "description": "1. Capture with Playwright route.fetch() + route.fulfill() while driving the real page, so client-triggered requests are recorded. 2. Store bodies content-addressed by SHA-256; key the manifest by method, path, sorted query, RSC, and Accept\u2026",
      "meta": {
        "path": "projects/aoricreative/decisions/ADR-002-capture-and-parity.md",
        "status": "accepted",
        "date": "2026-10-21",
        "scope": "project:aoricreative",
        "confidence": "1.0"
      },
      "body": "\n# ADR-002: Capture at the network layer, prove with parity\n\n## Decision\n\n1. Capture with Playwright `route.fetch()` + `route.fulfill()` while driving the real page, so client-triggered requests are recorded.\n2. Store bodies content-addressed by SHA-256; key the manifest by method, path, sorted query, RSC, and Accept.\n3. Replay with a dependency-free server that resolves missing `/_next/image` variants and never serves RSC for HTML navigation.\n4. Verify one fixed browser script against both origins with identical states, structural checks, and pixel diffs.\n\n## Rejected\n\n- Static HTML scraper: loses RSC payloads, fonts, and scroll-triggered assets.\n- Live reverse proxy: not reproducible offline.\n- Screenshot-only comparison: hides broken links, images, and text changes.\n\n## Evidence\n\n- 316 responses / 156 objects / 9.63 MiB, 0 capture errors.\n- 28/28 states, average 0.059% changed pixels, max 0.661%, text equal 28/28.\n- Analytics/beacons, cross-origin embeds, non-GET, and forms are blocked on both sides.\n\n## Constraints\n\nCaptured bytes are private, gitignored, and never publicly deployed. Canvas/video/GPU and dynamic timing remain known deltas.",
      "degree": 2
    },
    {
      "id": "note:projects/agency-os/decisions/ADR-003-agency-os-consolidation",
      "label": "ADR-003: Consolidate agency stacks behind one registry",
      "type": "note",
      "subtype": "decision",
      "description": "Originally recorded as ADR-001 in the deprecated ~/ultimate-agency/memory/ store; renumbered here to avoid colliding with ADR-001 (knowledge base).",
      "meta": {
        "path": "projects/agency-os/decisions/ADR-003-agency-os-consolidation.md",
        "status": "accepted",
        "date": "2026-10-21",
        "scope": "global",
        "confidence": "1.0"
      },
      "body": "\n# ADR-003: Consolidate agency stacks behind one registry\n\nOriginally recorded as ADR-001 in the deprecated `~/ultimate-agency/memory/` store; renumbered here to avoid colliding with ADR-001 (knowledge base).\n\nThree parallel stacks \u2014 Claude/FRIDAY, Antigravity/agy, and ADK \u2014 duplicated agents and skills.\n\n## Decision\n\nUse one canonical registry in `~/ultimate-agency` and generate marked adapters for each runtime. Legacy files are indexed, not deleted. Adapters never overwrite unmanaged files. Model IDs are capability classes until a provider probe succeeds.\n\n## Consequences\n\n- One edit point for agents and skills.\n- Runtime drift is detectable with `render_adapters.py --check` and `scripts/agency doctor`.\n- Runtime-specific behavior must be expressed in the renderer, not by hand-editing generated files.",
      "degree": 3
    },
    {
      "id": "note:projects/agency-os/decisions/ADR-004-model-neutral-behavior",
      "label": "ADR-004: Make model changes behavior-preserving",
      "type": "note",
      "subtype": "decision",
      "description": "The agency runs across OpenCode, Claude Code, Antigravity, and optional Codex surfaces. Each runtime can change its provider or model without changing the workspace. Previously, behavior was distributed across generated role prompts, runtim\u2026",
      "meta": {
        "path": "projects/agency-os/decisions/ADR-004-model-neutral-behavior.md",
        "status": "active",
        "date": "2026-10-22",
        "scope": "project:agency-os",
        "confidence": "0.9"
      },
      "body": "\n# ADR-004: Make model changes behavior-preserving\n\n## Context\n\nThe agency runs across OpenCode, Claude Code, Antigravity, and optional Codex\nsurfaces. Each runtime can change its provider or model without changing the\nworkspace. Previously, behavior was distributed across generated role prompts,\nruntime instructions, and state. A model switch could therefore change identity,\ngates, formatting, or tool habits by accident.\n\n## Decision\n\nMake the model an execution resource and move the stable behavior into one\ncontract:\n\n- `agency/behavior/KERNEL.md` defines identity, authority, task loop, capability\n  negotiation, memory, output, safety, degradation, and verification.\n- Every generated adapter embeds the kernel pointer and a SHA-256 fingerprint.\n- `agency/registry/models.json` stores capability classes and runtime sources,\n  never behavior branches or hardcoded defaults.\n- `tools/model_contract.py` validates 428 structural invariants and computes the\n  fingerprint from the kernel, profile, agents, tools, skills, outputs, and\n  verification.\n- `tools/behavior_probe.py --static` proves the behavioral payload is identical\n  across canonical, OpenCode, Claude, and agy adapters.\n- `docs/MODEL-SWITCHING.md` defines the switch, rollback, and recording process.\n- A model switch may change speed, cost, context, and tool style. It may not\n  change identity, gates, permissions, memory, safety, or output contract.\n\nThe fingerprint deliberately excludes provider model IDs, runtime defaults,\ncontext windows, and pricing. Changing those must not move it.\n\n## Consequences\n\n- Positive: one contract, one fingerprint, byte-identical behavior payload across\n  runtimes, and a test that fails when an adapter drifts.\n- Positive: weak models degrade explicitly instead of silently lowering gates.\n- Negative: live reasoning quality still varies by provider; static parity is not\n  a quality guarantee.\n- Reversibility: high. The model binding can be rolled back without touching\n  agents or memory.\n\n## Non-goal\n\nMake different models reason identically. The goal is contractual equivalence,\nnot identical output.\n\n## Evidence\n\n- `scripts/agency model check` passes: 428 structural checks and 262 static parity checks.\n- Adapter sync: 128/128 same; `scripts/agency doctor`: 20/20.\n- `tools/eval_smoke.py`: 171/171.\n- Fingerprint: `1c8759a73d7da2f6be4bf88c6b9323a55492e9a9a4ef0393288173d657c13285`.\n",
      "degree": 3
    },
    {
      "id": "note:projects/agency-os/_project",
      "label": "Agency OS",
      "type": "note",
      "subtype": "project",
      "description": "Upgrade FRIDAY's agents, skills, knowledge, and runtime to the verified 2026 capability layer.",
      "meta": {
        "path": "projects/agency-os/_project.md",
        "status": "active",
        "date": "2026-10-22",
        "scope": "project:agency-os",
        "confidence": "1.0"
      },
      "body": "\n# Agency OS\n\nUpgrade FRIDAY's agents, skills, knowledge, and runtime to the verified 2026 capability layer.\n\n## Current state\n\n- Canonical registry: `~/ultimate-agency/agency/registry/` v5.1.0, 20 agents, 16 skills.\n- Global Claude agents: 55; global skills: 62.\n- Adapter sync 128/128; doctor 20/20.\n- Vault initialized and seeded; originals retained.\n\n## Migration log\n\n- [x] Back up `~/ultimate-agency/memory/` and `~/.claude/state/` to `~/ultimate-agency/_backups/2026-10-22/`.\n- [x] Copy ADRs, lessons, and state snapshot into this vault with frontmatter.\n- [x] Install Basic Memory 0.23.2; make `agency-kb` the default local project; pass a create/read/update/delete round-trip and `basic-memory doctor`.\n- [ ] Keep Memorix episodic for 30 days; export distilled facts to `daily/`.\n- [ ] Run `python3 tools/kb_doctor.py` before deleting duplicates.\n\n## Next actions\n\n1. Migrate `charm/notes/remembered.md` facts that pass the durable-fact test.\n2. Keep `~/.claude/state/` as volatile session state, not canonical knowledge.\n3. Delete originals only after the vault is committed and restorable.\n4. Add Basic Memory to the nightly health check alongside `kb_doctor`.\n\n## Non-goals\n\n- Do not cloud-index private client data.\n- Do not make a vector DB authoritative.\n- Do not migrate to an object database with lossy Markdown export.\n\n## Verification\n\n- [ ] vault restores from Git\n- [ ] Basic Memory round-trip works\n- [ ] no duplicate authoritative facts\n- [ ] private scope excluded from cloud",
      "degree": 2
    },
    {
      "id": "note:projects/agency-os/state/2026-10-22-snapshot",
      "label": "Agency OS snapshot \u2014 2026-10-22",
      "type": "note",
      "subtype": "project",
      "description": "",
      "meta": {
        "path": "projects/agency-os/state/2026-10-22-snapshot.md",
        "status": "active",
        "date": "2026-10-22",
        "scope": "project:agency-os",
        "confidence": "1.0"
      },
      "body": "\n# Agency OS snapshot \u2014 2026-10-22\n\n## Installed\n\n- Canonical registry v5.1.0: **20 agents, 16 skills**.\n- Generated adapters per runtime: **20 agents / 16 skills** for OpenCode, Claude, and Antigravity.\n- Legacy Claude layer: **55 agent files, 62 skill entries**; 35 legacy agents carry a 2026 capability addendum.\n- Adapter sync: **128/128 same**.\n- `scripts/agency doctor`: **20/20 pass**.\n- Disk free at doctor time: **2.58 GiB (low; cleanup recommended)**.\n\n## Discovery\n\n- OpenCode: verified with `opencode debug agent` and `opencode debug skill`.\n- OpenCode skill scan: 17 entries (14 canonical + built-in `customize-opencode` + 2 older skills).\n- Claude and Antigravity: files are present and frontmatter-valid, but their CLIs do not expose a non-interactive full agent list. Antigravity also currently fails to list agents because `GEMINI_API_KEY` is unset.\n- Do not use `opencode agent list` as proof; it only shows primary agents.\n\n## Security posture\n\n- Generated OpenCode agents now carry explicit least-privilege `permission` blocks derived from their tool lists.\n- Builders: `edit: allow`; readers/critics: `edit: deny`; `shell: ask`; `external_directory: ask`; `task` only for the conductor.\n- Resolved with `opencode debug agent`: specific rules override the inherited broad default.\n- This is defense-in-depth, not a sandbox. Execution still needs a container/microVM for untrusted code.\n\n## Verification\n\n- `tools/eval_smoke.py`: **171 deterministic checks pass** across registry counts, adapters, skill frontmatter, resolved permissions, OpenCode discovery, Basic Memory, and the knowledge doctor.\n- This proves wiring, not model quality. Add Promptfoo/DeepEval cases when provider credentials are available.\n\n## Knowledge\n\n- Canonical vault: `~/agency-kb/`.\n- `tools/kb_doctor.py` validates frontmatter, duplicate IDs, broken wikilinks, and stale active notes (14 notes, clean).\n- Migration is copy-first and reversible; originals remain until the vault is verified and committed.\n- Basic Memory **0.23.2** is installed in an isolated `uv` tool env, configured as the default local project `agency-kb`, and registered as an MCP server in Claude Code and OpenCode.\n- A create/read/update/delete round-trip passed; `basic-memory doctor` passes.\n- Basic Memory is a derived index, not authoritative. Rebuild it from the vault at any time.\n- Local semantic embeddings and the reranker are disabled to honor cloud-first; the index uses SQLite full-text search. The local Basic Memory store is ~1.8 MB.\n\n## Brain\n\n- `tools/build_brain_graph.py` projects the registry, `agency/brain/projects.json`, and the vault into **54 nodes / 154 typed edges**: 20 agents, 16 skills, 4 projects, 14 notes.\n- Relation counts: `uses` 58, `works_on` 25, `supports` 22, `co_used` 17, `documents` 14, `links` 15, `mentions` 3.\n- `apps/agency-brain/` is a static, Obsidian-style D3 viewer with typed edge isolation, search, project focus, and a connection inspector. No local model.\n- Preview: `./scripts/agency brain --serve` \u2192 `http://127.0.0.1:4173/`.\n\n## Model neutrality\n\n- `agency/behavior/KERNEL.md` is the stable behavior contract; provider model IDs are runtime bindings, not identity.\n- `agency/behavior/fingerprint.json` records the SHA-256 of the behavior surface; it excludes provider IDs, runtime defaults, context windows, and pricing.\n- `tools/model_contract.py` passes **428 structural checks**; `tools/behavior_probe.py --static` passes **262 parity checks**; `scripts/agency model check` is green.\n- All 128 adapters embed the kernel pointer and fingerprint; OpenCode loads the kernel in its instruction chain.\n- `agency/registry/models.json` v5.1.0 stores capability classes (`reasoning`, `execution`, `fast`) with `runtime_default: null`.\n- A switch may change speed, cost, context, and tool style. It may not change identity, authority, gates, permissions, memory, safety, or output contract.\n- Live canary is still required; static parity proves wiring, not reasoning quality.\n\n## Cloud-first\n\n- Inference stays on cloud runtimes; the viewer is a static browser client.\n- Local CPU/RAM is limited to editing, static UI, small metadata indexes, and tests.\n- Canonical knowledge remains Markdown + Git; large artifacts belong in cloud storage.\n- No local LLM, embedding model, or GPU workload without a measured need and explicit approval.\n\n## Open\n\n- Commit the vault and generated viewer only after explicit approval.\n- Deploy the viewer behind access control if a cloud URL is wanted; it names private projects.\n- Verify `agy` inference after setting a key; map ADK model IDs before use.\n- Add Promptfoo/DeepEval cases when provider credentials are available.\n- Run a live canary on the next model change; static parity is not a quality guarantee.",
      "degree": 3
    },
    {
      "id": "note:projects/analogue-studio-replica/_project",
      "label": "Analogue Studio replica",
      "type": "note",
      "subtype": "project",
      "description": "Offline replica of madebyanalogue.co.uk/studio/ built from a deterministic capture, used for parity work. Design and media belong to Analogue Studio; the repository stays private.",
      "meta": {
        "path": "projects/analogue-studio-replica/_project.md",
        "status": "active",
        "date": "2026-10-23",
        "scope": "project:analogue-studio-replica",
        "confidence": "1.0"
      },
      "body": "\n# Analogue Studio replica\n\nOffline replica of `madebyanalogue.co.uk/studio/` built from a deterministic\ncapture, used for parity work. Design and media belong to Analogue Studio; the\nrepository stays private.\n\n## Evidence\n\n- Capture: **109 assets / 12.3 MB**, 20 hover states, 1 console error.\n- Replica: **523 mapped assets**, ES-module game graph wired, media localized.\n- Parity: worst pixel diff **3.52%** (threshold 12%), text match **97.57%**,\n  asset resolution **100%**, 0 page/console errors at 1440x900 and 390x844.\n- Private repo: `https://github.com/sarvashwa/analogue-studio-replica`.\n\n## Known deltas\n\n- Animation phase only: marquee offset, GIF frame, draggable hero stickers.\n- The 172 MB `studio.mp4` tour streams from origin; everything else is local.\n- Firebase leaderboard runs without remote sync.\n\n## Open\n\n- Mobile pixel parity (layout verified, pixels not measured).\n- Replace the remaining remote video with a compressed local derivative.\n",
      "degree": 2
    },
    {
      "id": "note:projects/aoricreative/_project",
      "label": "Aoricreative private replay",
      "type": "note",
      "subtype": "project",
      "description": "Private, technical replay of aoricreative.com for parity work. Not a public deployment.",
      "meta": {
        "path": "projects/aoricreative/_project.md",
        "status": "active",
        "date": "2026-10-22",
        "scope": "project:aoricreative",
        "confidence": "1.0"
      },
      "body": "\n# Aoricreative private replay\n\nPrivate, technical replay of `aoricreative.com` for parity work. Not a public deployment.\n\n## Evidence\n\n- Capture: **316 responses / 156 objects / 9.63 MiB**, 0 errors.\n- Parity: **28/28 states**, average **0.059%** changed pixels, max **0.661%**, text equal 28/28.\n- Integrity: `tools/validate_build.py aoricreative` passes.\n- Private repo: `https://github.com/sarvashwa/aoricreative-replay`.\n\n## Constraints\n\n- Captured bytes are gitignored.\n- No public deploy without ownership/permission.\n- Cloud preview is temporary; password lives outside the repo.\n- Known deltas: canvas/video/GPU rendering and dynamic timing.\n\n## Open\n\n- WCAG and reduced-motion audit.\n- Mobile/tablet pixel parity.\n- Rollback/runbook and independent security sign-off.\n- CI integrity job.",
      "degree": 3
    },
    {
      "id": "note:inbox/_inbox",
      "label": "Inbox",
      "type": "note",
      "subtype": "index",
      "description": "Capture here, triage daily. Move durable facts to a project note or ADR; delete the capture after distillation.",
      "meta": {
        "path": "inbox/_inbox.md",
        "status": "active",
        "date": "2026-10-22",
        "scope": "global",
        "confidence": "1.0"
      },
      "body": "\n# Inbox\n\nCapture here, triage daily. Move durable facts to a project note or ADR; delete the capture after distillation.",
      "degree": 2
    },
    {
      "id": "note:projects/agency-os/lessons/agent-utilization-2026-10-21",
      "label": "Lesson: defined agents are not executed agents",
      "type": "note",
      "subtype": "lesson",
      "description": "All 16 canonical agents existed and were rendered to OpenCode, Claude, and agy. They were **not** each invoked as separate agents during the original aoricreative build.",
      "meta": {
        "path": "projects/agency-os/lessons/agent-utilization-2026-10-21.md",
        "status": "active",
        "date": "2026-10-21",
        "scope": "project:agency-os",
        "confidence": "1.0"
      },
      "body": "\n# Lesson: defined agents are not executed agents\n\n## Fact\n\nAll 16 canonical agents existed and were rendered to OpenCode, Claude, and agy. They were **not** each invoked as separate agents during the original aoricreative build.\n\nThe build was executed by the primary agent plus deterministic tools: `site_mirror.py`, `parity.py`, `validate_build.py`, `sandbox.py`, and the CLI.\n\n## Rule\n\nDo not claim \u201call agents ran\u201d when roles were only applied as planning/review functions. Report the actual execution topology.\n\nA retrospective 16-agent audit was later completed through `opencode/deepseek-v4.1-flash-free`: 16/16 completed, 1 pass, 15 risk, 0 errors. That audit is evidence of review coverage, not of original multi-agent participation.",
      "degree": 2
    },
    {
      "id": "note:projects/aoricreative/lessons/agency-roster-audit-2026-10-21",
      "label": "Lesson: retrospective 16-agent audit result",
      "type": "note",
      "subtype": "lesson",
      "description": "A retrospective audit ran all 16 agent definitions through opencode/deepseek-v4.1-flash-free: 10 in the first pass, 6 retries after gateway timeouts. Result: **16/16 completed, 1 pass, 15 risk, 0 errors**.",
      "meta": {
        "path": "projects/aoricreative/lessons/agency-roster-audit-2026-10-21.md",
        "status": "active",
        "date": "2026-10-21",
        "scope": "project:aoricreative",
        "confidence": "1.0"
      },
      "body": "\n# Lesson: retrospective 16-agent audit result\n\nA retrospective audit ran all 16 agent definitions through `opencode/deepseek-v4.1-flash-free`: 10 in the first pass, 6 retries after gateway timeouts. Result: **16/16 completed, 1 pass, 15 risk, 0 errors**.\n\n## Risks that were closed\n\n| Risk | Evidence |\n|---|---|\n| Mobile/tablet assets missing | Added founder/diary/texture assets; 11 mobile + 3 tablet routes have 0 broken, 0 HTTP >= 400, 0 console errors |\n| No negative auth tests | No auth 401, wrong password 401, correct 200 |\n| No noindex proof | `X-Robots-Tag: noindex, nofollow` |\n| Stale capture counts | 316 responses, 156 objects, 9.63 MiB |\n| Local 404 | Missing video/textures; now captured |\n| Basic auth over public tunnel | Mitigated with noindex + random password; temporary preview only |\n\n## Open risks\n\n1. WCAG contrast, focus states, and reduced motion across 11 routes.\n2. Mobile/tablet pixel parity; only load fidelity is verified.\n3. Cloud preview rollback/runbook and independent security sign-off.\n4. CI job running `validate_build.py` + parity on push.",
      "degree": 3
    },
    {
      "id": "note:index/MOC",
      "label": "Map of Content",
      "type": "note",
      "subtype": "index",
      "description": "",
      "meta": {
        "path": "index/MOC.md",
        "status": "active",
        "date": "2026-10-22",
        "scope": "global",
        "confidence": "1.0"
      },
      "body": "\n# Map of Content\n\n## Agency\n\n- [[projects/agency-os/_project|Agency OS]]\n- [[projects/agency-os/decisions/ADR-001-knowledge-base|ADR-001: Knowledge base]]\n\n## Projects\n\n- [[projects/agency-os/_project|Agency OS]]\n- [[projects/aoricreative/_project|Aoricreative private replay]]\n- [[projects/momo/_project|Momo / OpenCharm]]\n\n## Decisions\n\n- [[projects/agency-os/decisions/ADR-003-agency-os-consolidation|ADR-003: one canonical registry]]\n- [[projects/agency-os/decisions/ADR-004-model-neutral-behavior|ADR-004: model-neutral behavior]]\n- [[projects/aoricreative/decisions/ADR-002-capture-and-parity|ADR-002: capture and parity]]\n\n## Lessons\n\n- [[projects/agency-os/lessons/agent-utilization-2026-10-21|Defined agents are not executed agents]]\n- [[projects/aoricreative/lessons/agency-roster-audit-2026-10-21|Retrospective 16-agent audit]]\n\n## State\n\n- [[projects/agency-os/state/2026-10-22-snapshot|Agency OS snapshot 2026-10-22]]\n\n## Areas\n\n- Add durable responsibilities here.\n\n## Sources\n\n- [[sources/2026-10-capability-research|2026-10 capability research]]\n- Add primary sources here. Vendor pages are claims, not facts.\n\n## Inbox\n\n- [[inbox/_inbox|Inbox]] for untriaged captures.",
      "degree": 13
    },
    {
      "id": "note:projects/momo/_project",
      "label": "Momo / OpenCharm",
      "type": "note",
      "subtype": "project",
      "description": "Momo is the user-facing companion. OpenCharm is the desktop shell. OpenCode is the execution and memory lane.",
      "meta": {
        "path": "projects/momo/_project.md",
        "status": "active",
        "date": "2026-10-22",
        "scope": "project:momo",
        "confidence": "1.0"
      },
      "body": "\n# Momo / OpenCharm\n\nMomo is the user-facing companion. OpenCharm is the desktop shell. OpenCode is the execution and memory lane.\n\n## Runtime\n\n- ACP adapter: `/Users/hackerboy/.local/bin/opencode-acp`\n- App config: `~/Library/Application Support/dev.opencharm.desktop/charmd.json`\n- Project config: `~/Documents/my-charm/charm/opencode.json`\n- Persona and memory rules: `~/Documents/my-charm/charm/AGENTS.md`\n- Local activity: `~/Documents/my-charm/charm/.momo/`\n- Island: `~/.local/bin/momo-island`, LaunchAgent `dev.momo.island`\n\n## Decisions\n\n- Use OpenCode cloud inference, not Gemini, for Momo.\n- Keep the Dynamic Island-style HUD as a separate overlay; do not patch the signed OpenCharm UI without a re-sign plan.\n- Keep transcripts off by default; redact secrets in activity logs.\n- Keep durable facts in the knowledge vault, not in raw transcripts.\n\n## Open\n\n- Manual hardware/voice verification.\n- Decide whether to embed the island or keep the notch overlay.\n- Migrate stable facts from `charm/notes/remembered.md` into this vault.",
      "degree": 2
    },
    {
      "id": "note:sources/2026-10-capability-research",
      "label": "Source: 2026-10 capability research",
      "type": "note",
      "subtype": "source",
      "description": "Four parallel research tracks were run on 2026-10-22: 1. AI coding CLIs, plugins, MCP, sandboxing, worktrees. 2. UI/UX, motion, 3D, component systems, aesthetics, marketing AI. 3. Obsidian/PKM and agent memory. 4. Orchestration, evals, secu\u2026",
      "meta": {
        "path": "sources/2026-10-capability-research.md",
        "status": "active",
        "date": "2026-10-22",
        "scope": "project:agency-os",
        "confidence": "0.9"
      },
      "body": "\n# Source: 2026-10 capability research\n\nFour parallel research tracks were run on 2026-10-22:\n1. AI coding CLIs, plugins, MCP, sandboxing, worktrees.\n2. UI/UX, motion, 3D, component systems, aesthetics, marketing AI.\n3. Obsidian/PKM and agent memory.\n4. Orchestration, evals, security, token governance, vibe coding.\n\nFull synthesis: `~/ultimate-agency/docs/research/2026-10-capability-upgrade.md`.\n\n## Reliability notes\n\n- GitHub star counts are momentum signals, not adoption. Several new repos show implausible growth; treat as hype until reviewed.\n- Vendor benchmarks and pricing are self-reported. Re-verify on the day of use.\n- Google Labs status: Opal shuts down 2026-11-17; Mixboard shut down 2026-09-28.\n- Stitch and Pomelli are experimental; output is draft.\n- Manus requires budget caps and human QA.\n- 21st.dev licenses vary per component.\n- The research was compiled by subagents; the synthesis was reviewed and installed by the primary agent. Independent re-checks are still required before client use.",
      "degree": 2
    },
    {
      "id": "note:projects/agency-os/notes/website-cloning-capability",
      "label": "Website Cloning Capability",
      "type": "note",
      "subtype": "lesson",
      "description": "1. **deep_capture.py** \u2014 Renders the live site in Chrome, auto-scrolls to trigger lazy content, hovers every interactive element, harvests all network responses with SHA-256 hashes, extracts design tokens (colors, type scale, spacing, radii\u2026",
      "meta": {
        "path": "projects/agency-os/notes/website-cloning-capability.md",
        "status": "active",
        "date": "2026-10-22",
        "scope": "project:agency-os",
        "confidence": "0.9"
      },
      "body": "\n# Website Cloning Capability\n\n## Overview\nThe agency now has a complete, free/open-source website cloning pipeline that captures everything a plain HTTP fetch misses and produces an offline, self-contained replica verified by a pixel-perfect parity gate.\n\n## Pipeline\n\n1. **deep_capture.py** \u2014 Renders the live site in Chrome, auto-scrolls to trigger lazy content, hovers every interactive element, harvests all network responses with SHA-256 hashes, extracts design tokens (colors, type scale, spacing, radii, shadows, motion, fonts), captures hover/focus states per element, and produces a complete evidence manifest.\n\n2. **build_replica.py** \u2014 Rewrites all asset URLs to local paths, inlines fonts/CSS optionally, strips scripts optionally, produces a self-contained `index.html` + asset tree that works offline.\n\n3. **replica_parity.py** \u2014 Captures the same deterministic state sequence from the live URL and the local replica, reports per-viewport pixel diff % (with anti-aliasing tolerance), text-content match, asset resolution ratio, console errors split by first/third party, and known deltas. Exit code 0 = pass.\n\n4. **design_intel.py** \u2014 Thin wrapper around `designlang` (npm) to extract design tokens, interaction states, motion specs, and font fingerprints; outputs DTCG JSON, Tailwind config, shadcn theme, Figma Variables JSON, CSS vars, WCAG contrast scores.\n\n## Tools Installed\n- **Playwright** (Apache-2.0) \u2014 headless Chrome rendering, already cached\n- **designlang** (npm, MIT) \u2014 design token/state/motion extraction, local, no API key\n- **single-file-cli** (npm, AGPL) \u2014 self-contained HTML capture (installed)\n- **monolith** (brew, CC0) \u2014 deterministic static capture, no browser needed\n- **curl_cffi** (pip, MIT) \u2014 TLS/JA3 impersonation for hotlink bypass\n- **pixelmatch** (npm) \u2014 pixel diff primitive\n- **BackstopJS** (npm) \u2014 visual regression gate\n- **linkinator** (npm) \u2014 route inventory\n- **browsertrix-crawler** (Docker, AGPL) \u2014 WACZ capture with QA gate (optional)\n\n## Skills Added (v5.2.0)\n| Skill | Agents | Purpose |\n|-------|--------|---------|\n| `deep-capture` | recon-engineer, design-technologist | Full capture pipeline |\n| `visual-replica` | frontend-engineer, design-technologist, qa-engineer | Build replica + parity gate |\n| `design-intel` | design-director, design-technologist, recon-engineer | Token/state/motion extraction |\n\n## Verified Example\n- Target: `https://madebyanalogue.co.uk/studio/`\n- Captured: 109 assets (12.3 MB), 12 hover states, 22 font faces, 3 motion specs\n- Replica parity: **3.23% worst diff** (threshold 12%), 100% text match, 98.6% asset resolution\n- All gates pass: `eval_smoke 177/177`, `model check 428+262`, `doctor 20/20`\n\n## Disk & Policy\n- Freed **1.8 \u2192 15 GiB** (purged caches, archived agy history to Drive, removed disabled-by-policy qwen2.5:latest 4.7G, pruned Docker, removed Claude VM .zst cache)\n- Cloud-first: large artifacts archived to Google Drive (`friday-archive/`), local disk at **16 GiB free**\n- Local LLM disabled by default (policy); only qwen3:1.7b (1.4G) retained as registered fast-class runtime\n- All tools MIT/Apache/CC0 except single-file-cli (AGPL) and browsertrix-crawler (AGPL) \u2014 used as external tools, not linked into deliverables\n\n## Graph Updates\n- Added nodes: `skill:deep-capture`, `skill:visual-replica`, `skill:design-intel`\n- Added edges: `recon-engineer \u2192 uses \u2192 deep-capture`, `recon-engineer \u2192 uses \u2192 design-intel`, `frontend-engineer \u2192 uses \u2192 visual-replica`, `frontend-engineer \u2192 uses \u2192 design-intel`, `design-director \u2192 uses \u2192 design-intel`, `qa-engineer \u2192 uses \u2192 visual-replica`, `design-technologist \u2192 uses \u2192 design-intel, visual-replica`\n- Brain graph: 54 \u2192 57 nodes, 154 \u2192 171 edges\n## New Skills Added (v5.4.0)\n\n### playwright-recording\n- **Cursor highlighting** \u2014 Custom CSS-injected cursor with click animation\n- **Click ripple effects** \u2014 Visual feedback on clicks\n- **Cookie banner dismissal** \u2014 Comprehensive selector list\n- **Window scaling** \u2014 Record 1080p in smaller windows\n- **Video recording** \u2014 Native Playwright WebM \u2192 MP4 via ffmpeg\n- **Device emulation** \u2014 iPhone, iPad, Pixel, Galaxy presets\n\n### ghost-cursor\n- **Human-like cursor movements** \u2014 Bezier curves with natural acceleration/deceleration\n- **Click animations** \u2014 Realistic click with hold duration and release timing\n- **Randomized trajectories** \u2014 No two paths identical; avoids detection\n- **Element targeting** \u2014 Move to elements by selector, bounding box, or coordinates\n- **Realistic timing** \u2014 Human-like delays between actions\n- **Integration** \u2014 Works with `deep-capture` for natural hover/click recordings\n\n## Agents Updated\n| Agent | New Skills Added |\n|-------|------------------|\n| recon-engineer | playwright-recording |\n| design-technologist | playwright-recording, ghost-cursor |\n| frontend-engineer | playwright-recording, ghost-cursor |\n| design-director | playwright-recording, ghost-cursor |\n| qa-engineer | playwright-recording, ghost-cursor |\n| recon-engineer | playwright-recording |\n\n## New Registry Version\n- `agency/registry/skills.json` v5.4.0 (19 canonical skills)\n- `agency/registry/agents.json` v5.4.0\n- All eval_smoke (177/177), model check (262+262), doctor (19/20), kb_doctor (15 notes) pass\n",
      "degree": 10
    },
    {
      "id": "project:agency-os",
      "label": "Agency OS",
      "type": "project",
      "subtype": "active",
      "description": "Canonical agents, skills, runtime adapters, knowledge, verification, and cloud-first operating policy.",
      "meta": {
        "status": "active",
        "id": "agency-os"
      },
      "degree": 23
    },
    {
      "id": "project:analogue-studio-replica",
      "label": "Analogue Studio Replica",
      "type": "project",
      "subtype": "active",
      "description": "Offline replica of madebyanalogue.co.uk/studio/ with deterministic capture, parity evidence, and localized media.",
      "meta": {
        "status": "active",
        "id": "analogue-studio-replica"
      },
      "degree": 10
    },
    {
      "id": "project:aoricreative",
      "label": "Aoricreative Replay",
      "type": "project",
      "subtype": "active",
      "description": "Private, noindexed technical replay with network capture, deterministic parity, and a security gate.",
      "meta": {
        "status": "active",
        "id": "aoricreative"
      },
      "degree": 18
    },
    {
      "id": "project:knowledge",
      "label": "Knowledge Base",
      "type": "project",
      "subtype": "active",
      "description": "Git-backed Markdown truth, ADRs, lessons, sources, and a derived Basic Memory index.",
      "meta": {
        "status": "active",
        "id": "knowledge"
      },
      "degree": 9
    },
    {
      "id": "project:momo",
      "label": "Momo / OpenCharm",
      "type": "project",
      "subtype": "active",
      "description": "OpenCode-backed companion with persistent memory, activity logging, CLI, and a notch HUD.",
      "meta": {
        "status": "active",
        "id": "momo"
      },
      "degree": 12
    },
    {
      "id": "skill:agency-capability-atlas",
      "label": "Agency Capability Atlas",
      "type": "skill",
      "subtype": "T0",
      "description": "Routes agents to the current verified toolchain, design, knowledge, orchestration, security, and token practices.",
      "meta": {
        "tier": "T0",
        "status": "active",
        "path": "skills/agency-capability-atlas/SKILL.md"
      },
      "degree": 2
    },
    {
      "id": "skill:agent-evals-security",
      "label": "Agent Evals Security",
      "type": "skill",
      "subtype": "T1",
      "description": "Orchestration selection, minimum eval stack, OWASP/agentic security controls, sandboxes, and audit.",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/agent-evals-security/SKILL.md"
      },
      "degree": 14
    },
    {
      "id": "skill:agent-orchestration",
      "label": "Agent Orchestration",
      "type": "skill",
      "subtype": "T1",
      "description": "Team selection, DAG waves, gates and escalation",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/agent-orchestration/SKILL.md"
      },
      "degree": 8
    },
    {
      "id": "skill:ai-cli-mastery",
      "label": "Ai Cli Mastery",
      "type": "skill",
      "subtype": "T1",
      "description": "AI coding CLI selection, AGENTS.md, subagents, hooks, MCP, permissions, sandboxes, worktrees, and parallel work.",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/ai-cli-mastery/SKILL.md"
      },
      "degree": 12
    },
    {
      "id": "skill:cloud-worker",
      "label": "Cloud Worker",
      "type": "skill",
      "subtype": "T1",
      "description": "Sandbox, remote inference and deploy templates with dry-run",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/cloud-worker/SKILL.md"
      },
      "degree": 5
    },
    {
      "id": "skill:deep-capture",
      "label": "Deep Capture",
      "type": "skill",
      "subtype": "T1",
      "description": "Render, scroll, hover, and harvest everything a plain HTTP fetch misses: lazy images, scroll animations, hover states, web fonts, canvas output, design tokens, full network harvest.",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/deep-capture/SKILL.md"
      },
      "degree": 2
    },
    {
      "id": "skill:design-toolchain",
      "label": "Design Toolchain",
      "type": "skill",
      "subtype": "T1",
      "description": "Component, motion, 3D, Figma, and visual-regression stack selection with accessibility and performance gates.",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/design-toolchain/SKILL.md"
      },
      "degree": 13
    },
    {
      "id": "skill:ghost-cursor",
      "label": "Ghost Cursor",
      "type": "skill",
      "subtype": "T1",
      "description": "Human-like cursor movements for Playwright with smooth animations, click animations, and realistic trajectories.",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/ghost-cursor/SKILL.md"
      },
      "degree": 12
    },
    {
      "id": "skill:knowledge-system",
      "label": "Knowledge System",
      "type": "skill",
      "subtype": "T1",
      "description": "Obsidian/Git canonical knowledge, Basic Memory index, scopes, retrieval, staleness, privacy, and migration.",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/knowledge-system/SKILL.md"
      },
      "degree": 7
    },
    {
      "id": "skill:marketing-ai-toolchain",
      "label": "Marketing Ai Toolchain",
      "type": "skill",
      "subtype": "T1",
      "description": "Stitch, Pomelli, Manus, 21st.dev and adjacent marketing tools with status, workflow, and review gates.",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/marketing-ai-toolchain/SKILL.md"
      },
      "degree": 2
    },
    {
      "id": "skill:memory-protocol",
      "label": "Memory Protocol",
      "type": "skill",
      "subtype": "T1",
      "description": "L1/L2/L3 memory writes, retrieval, scoping and promotion",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/memory-protocol/SKILL.md"
      },
      "degree": 7
    },
    {
      "id": "skill:pixel-parity",
      "label": "Pixel Parity",
      "type": "skill",
      "subtype": "T0",
      "description": "Screenshot comparison with masks and explicit thresholds",
      "meta": {
        "tier": "T0",
        "status": "active",
        "path": "skills/pixel-parity/SKILL.md"
      },
      "degree": 17
    },
    {
      "id": "skill:playwright-recording",
      "label": "Playwright Recording",
      "type": "skill",
      "subtype": "T1",
      "description": "Record browser interactions as video using Playwright with cursor highlighting, click ripples, cookie dismissal, and window scaling.",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/playwright-recording/SKILL.md"
      },
      "degree": 12
    },
    {
      "id": "skill:response-mirror",
      "label": "Response Mirror",
      "type": "skill",
      "subtype": "T0",
      "description": "Deterministic HTTP response capture and replay keyed by method/path/query/RSC",
      "meta": {
        "tier": "T0",
        "status": "active",
        "path": "skills/response-mirror/SKILL.md"
      },
      "degree": 2
    },
    {
      "id": "skill:security-gate",
      "label": "Security Gate",
      "type": "skill",
      "subtype": "T1",
      "description": "Trust boundaries, secrets, untrusted input and deploy exposure checks",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/security-gate/SKILL.md"
      },
      "degree": 14
    },
    {
      "id": "skill:site-replication",
      "label": "Site Replication",
      "type": "skill",
      "subtype": "T1",
      "description": "Replication of an external target with evidence and parity gates",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/site-replication/SKILL.md"
      },
      "degree": 12
    },
    {
      "id": "skill:token-budget",
      "label": "Token Budget",
      "type": "skill",
      "subtype": "T1",
      "description": "Per-task token envelopes, checkpoints and ledger",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/token-budget/SKILL.md"
      },
      "degree": 6
    },
    {
      "id": "skill:vibe-coding-protocol",
      "label": "Vibe Coding Protocol",
      "type": "skill",
      "subtype": "T1",
      "description": "Spec-first, vertical-slice, test-gated AI-assisted delivery with human approval and rollout.",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/vibe-coding-protocol/SKILL.md"
      },
      "degree": 2
    },
    {
      "id": "skill:visual-aesthetics",
      "label": "Visual Aesthetics",
      "type": "skill",
      "subtype": "T1",
      "description": "Implementation-ready aesthetic library, decision tree, motion recipes, and when not to use each style.",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/visual-aesthetics/SKILL.md"
      },
      "degree": 10
    },
    {
      "id": "skill:visual-replica",
      "label": "Visual Replica",
      "type": "skill",
      "subtype": "T1",
      "description": "Build an offline, self-contained replica from a deep capture; run the parity gate to prove indistinguishable rendering.",
      "meta": {
        "tier": "T1",
        "status": "active",
        "path": "skills/visual-replica/SKILL.md"
      },
      "degree": 10
    }
  ],
  "edges": [
    {
      "source": "agent:conductor",
      "target": "project:agency-os",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:architect",
      "target": "project:agency-os",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:chief-of-staff",
      "target": "project:agency-os",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:knowledge-architect",
      "target": "project:agency-os",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:agent-platform-engineer",
      "target": "project:agency-os",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:token-governor",
      "target": "project:agency-os",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:memory-curator",
      "target": "project:agency-os",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:critic",
      "target": "project:agency-os",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "skill:agency-capability-atlas",
      "target": "project:agency-os",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:agent-orchestration",
      "target": "project:agency-os",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:token-budget",
      "target": "project:agency-os",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:memory-protocol",
      "target": "project:agency-os",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:knowledge-system",
      "target": "project:agency-os",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:ai-cli-mastery",
      "target": "project:agency-os",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:agent-evals-security",
      "target": "project:agency-os",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:security-gate",
      "target": "project:agency-os",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "note:projects/agency-os/_project",
      "target": "project:agency-os",
      "type": "documents",
      "weight": 0.7
    },
    {
      "source": "note:projects/agency-os/state/2026-10-22-snapshot",
      "target": "project:agency-os",
      "type": "documents",
      "weight": 0.7
    },
    {
      "source": "note:projects/agency-os/decisions/ADR-001-knowledge-base",
      "target": "project:agency-os",
      "type": "documents",
      "weight": 0.7
    },
    {
      "source": "note:projects/agency-os/decisions/ADR-003-agency-os-consolidation",
      "target": "project:agency-os",
      "type": "documents",
      "weight": 0.7
    },
    {
      "source": "note:projects/agency-os/lessons/agent-utilization-2026-10-21",
      "target": "project:agency-os",
      "type": "documents",
      "weight": 0.7
    },
    {
      "source": "agent:frontend-engineer",
      "target": "project:aoricreative",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:backend-engineer",
      "target": "project:aoricreative",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:qa-engineer",
      "target": "project:aoricreative",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:design-director",
      "target": "project:aoricreative",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:security-engineer",
      "target": "project:aoricreative",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:sre-cloud",
      "target": "project:aoricreative",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:recon-engineer",
      "target": "project:aoricreative",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:critic",
      "target": "project:aoricreative",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "skill:site-replication",
      "target": "project:aoricreative",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:response-mirror",
      "target": "project:aoricreative",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:pixel-parity",
      "target": "project:aoricreative",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:security-gate",
      "target": "project:aoricreative",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:cloud-worker",
      "target": "project:aoricreative",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:design-toolchain",
      "target": "project:aoricreative",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:marketing-ai-toolchain",
      "target": "project:aoricreative",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "note:projects/aoricreative/_project",
      "target": "project:aoricreative",
      "type": "documents",
      "weight": 0.7
    },
    {
      "source": "note:projects/aoricreative/decisions/ADR-002-capture-and-parity",
      "target": "project:aoricreative",
      "type": "documents",
      "weight": 0.7
    },
    {
      "source": "note:projects/aoricreative/lessons/agency-roster-audit-2026-10-21",
      "target": "project:aoricreative",
      "type": "documents",
      "weight": 0.7
    },
    {
      "source": "agent:ai-engineer",
      "target": "project:momo",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:backend-engineer",
      "target": "project:momo",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:design-technologist",
      "target": "project:momo",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:security-engineer",
      "target": "project:momo",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:sre-cloud",
      "target": "project:momo",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:memory-curator",
      "target": "project:momo",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "skill:ai-cli-mastery",
      "target": "project:momo",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:memory-protocol",
      "target": "project:momo",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:design-toolchain",
      "target": "project:momo",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:cloud-worker",
      "target": "project:momo",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:security-gate",
      "target": "project:momo",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "note:projects/momo/_project",
      "target": "project:momo",
      "type": "documents",
      "weight": 0.7
    },
    {
      "source": "agent:knowledge-architect",
      "target": "project:knowledge",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:memory-curator",
      "target": "project:knowledge",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:research-director",
      "target": "project:knowledge",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "skill:knowledge-system",
      "target": "project:knowledge",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:memory-protocol",
      "target": "project:knowledge",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "note:index/MOC",
      "target": "project:knowledge",
      "type": "documents",
      "weight": 0.7
    },
    {
      "source": "note:sources/2026-10-capability-research",
      "target": "project:knowledge",
      "type": "documents",
      "weight": 0.7
    },
    {
      "source": "note:daily/2026/2026-10-22",
      "target": "project:knowledge",
      "type": "documents",
      "weight": 0.7
    },
    {
      "source": "agent:recon-engineer",
      "target": "project:analogue-studio-replica",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:frontend-engineer",
      "target": "project:analogue-studio-replica",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:design-technologist",
      "target": "project:analogue-studio-replica",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:qa-engineer",
      "target": "project:analogue-studio-replica",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "agent:critic",
      "target": "project:analogue-studio-replica",
      "type": "works_on",
      "weight": 0.9
    },
    {
      "source": "skill:site-replication",
      "target": "project:analogue-studio-replica",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:pixel-parity",
      "target": "project:analogue-studio-replica",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:design-toolchain",
      "target": "project:analogue-studio-replica",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "skill:security-gate",
      "target": "project:analogue-studio-replica",
      "type": "supports",
      "weight": 0.8
    },
    {
      "source": "note:projects/analogue-studio-replica/_project",
      "target": "project:analogue-studio-replica",
      "type": "documents",
      "weight": 0.7
    },
    {
      "source": "agent:conductor",
      "target": "skill:agent-orchestration",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:conductor",
      "target": "skill:token-budget",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:conductor",
      "target": "skill:agency-capability-atlas",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:conductor",
      "target": "skill:ai-cli-mastery",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:conductor",
      "target": "skill:agent-evals-security",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:chief-of-staff",
      "target": "skill:memory-protocol",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:chief-of-staff",
      "target": "skill:knowledge-system",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:research-director",
      "target": "skill:knowledge-system",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:research-director",
      "target": "skill:ai-cli-mastery",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:recon-engineer",
      "target": "skill:site-replication",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:recon-engineer",
      "target": "skill:response-mirror",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:recon-engineer",
      "target": "skill:ai-cli-mastery",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:recon-engineer",
      "target": "skill:deep-capture",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:recon-engineer",
      "target": "skill:ghost-cursor",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:recon-engineer",
      "target": "skill:playwright-recording",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:product-strategist",
      "target": "skill:vibe-coding-protocol",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:product-strategist",
      "target": "skill:visual-aesthetics",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:architect",
      "target": "skill:agent-orchestration",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:architect",
      "target": "skill:security-gate",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:architect",
      "target": "skill:agent-evals-security",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:architect",
      "target": "skill:ai-cli-mastery",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:design-director",
      "target": "skill:site-replication",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:design-director",
      "target": "skill:pixel-parity",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:design-director",
      "target": "skill:design-toolchain",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:design-director",
      "target": "skill:visual-aesthetics",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:design-director",
      "target": "skill:playwright-recording",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:design-director",
      "target": "skill:ghost-cursor",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:frontend-engineer",
      "target": "skill:site-replication",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:frontend-engineer",
      "target": "skill:pixel-parity",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:frontend-engineer",
      "target": "skill:design-toolchain",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:frontend-engineer",
      "target": "skill:visual-aesthetics",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:frontend-engineer",
      "target": "skill:visual-replica",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:frontend-engineer",
      "target": "skill:playwright-recording",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:frontend-engineer",
      "target": "skill:ghost-cursor",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:backend-engineer",
      "target": "skill:security-gate",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:backend-engineer",
      "target": "skill:cloud-worker",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:ai-engineer",
      "target": "skill:token-budget",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:ai-engineer",
      "target": "skill:security-gate",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:ai-engineer",
      "target": "skill:agent-evals-security",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:ai-engineer",
      "target": "skill:ai-cli-mastery",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:qa-engineer",
      "target": "skill:pixel-parity",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:qa-engineer",
      "target": "skill:site-replication",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:qa-engineer",
      "target": "skill:agent-evals-security",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:qa-engineer",
      "target": "skill:vibe-coding-protocol",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:qa-engineer",
      "target": "skill:visual-replica",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:qa-engineer",
      "target": "skill:playwright-recording",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:qa-engineer",
      "target": "skill:ghost-cursor",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:security-engineer",
      "target": "skill:security-gate",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:security-engineer",
      "target": "skill:agent-evals-security",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:critic",
      "target": "skill:pixel-parity",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:critic",
      "target": "skill:agent-orchestration",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:critic",
      "target": "skill:agent-evals-security",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:token-governor",
      "target": "skill:token-budget",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:memory-curator",
      "target": "skill:memory-protocol",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:memory-curator",
      "target": "skill:knowledge-system",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:sre-cloud",
      "target": "skill:cloud-worker",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:sre-cloud",
      "target": "skill:security-gate",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:sre-cloud",
      "target": "skill:agent-evals-security",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:design-technologist",
      "target": "skill:design-toolchain",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:design-technologist",
      "target": "skill:visual-aesthetics",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:design-technologist",
      "target": "skill:pixel-parity",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:design-technologist",
      "target": "skill:visual-replica",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:design-technologist",
      "target": "skill:playwright-recording",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:design-technologist",
      "target": "skill:ghost-cursor",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:growth-creative-technologist",
      "target": "skill:marketing-ai-toolchain",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:growth-creative-technologist",
      "target": "skill:design-toolchain",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:knowledge-architect",
      "target": "skill:knowledge-system",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:knowledge-architect",
      "target": "skill:memory-protocol",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:agent-platform-engineer",
      "target": "skill:ai-cli-mastery",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:agent-platform-engineer",
      "target": "skill:agent-evals-security",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:agent-platform-engineer",
      "target": "skill:agent-orchestration",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "agent:agent-platform-engineer",
      "target": "skill:security-gate",
      "type": "uses",
      "weight": 1.0
    },
    {
      "source": "note:inbox/_inbox",
      "target": "project:knowledge",
      "type": "documents",
      "weight": 0.55
    },
    {
      "source": "note:projects/agency-os/decisions/ADR-004-model-neutral-behavior",
      "target": "project:agency-os",
      "type": "documents",
      "weight": 0.55
    },
    {
      "source": "note:projects/agency-os/notes/website-cloning-capability",
      "target": "project:agency-os",
      "type": "documents",
      "weight": 0.55
    },
    {
      "source": "note:daily/2026/2026-10-22",
      "target": "note:projects/agency-os/decisions/ADR-001-knowledge-base",
      "type": "links",
      "weight": 0.5
    },
    {
      "source": "note:daily/2026/2026-10-22",
      "target": "note:projects/agency-os/decisions/ADR-003-agency-os-consolidation",
      "type": "links",
      "weight": 0.5
    },
    {
      "source": "note:daily/2026/2026-10-22",
      "target": "note:projects/agency-os/decisions/ADR-004-model-neutral-behavior",
      "type": "links",
      "weight": 0.5
    },
    {
      "source": "note:index/MOC",
      "target": "note:projects/agency-os/_project",
      "type": "links",
      "weight": 0.5
    },
    {
      "source": "note:index/MOC",
      "target": "note:projects/agency-os/decisions/ADR-001-knowledge-base",
      "type": "links",
      "weight": 0.5
    },
    {
      "source": "note:index/MOC",
      "target": "note:projects/aoricreative/_project",
      "type": "links",
      "weight": 0.5
    },
    {
      "source": "note:index/MOC",
      "target": "note:projects/momo/_project",
      "type": "links",
      "weight": 0.5
    },
    {
      "source": "note:index/MOC",
      "target": "note:projects/agency-os/decisions/ADR-003-agency-os-consolidation",
      "type": "links",
      "weight": 0.5
    },
    {
      "source": "note:index/MOC",
      "target": "note:projects/agency-os/decisions/ADR-004-model-neutral-behavior",
      "type": "links",
      "weight": 0.5
    },
    {
      "source": "note:index/MOC",
      "target": "note:projects/aoricreative/decisions/ADR-002-capture-and-parity",
      "type": "links",
      "weight": 0.5
    },
    {
      "source": "note:index/MOC",
      "target": "note:projects/agency-os/lessons/agent-utilization-2026-10-21",
      "type": "links",
      "weight": 0.5
    },
    {
      "source": "note:index/MOC",
      "target": "note:projects/aoricreative/lessons/agency-roster-audit-2026-10-21",
      "type": "links",
      "weight": 0.5
    },
    {
      "source": "note:index/MOC",
      "target": "note:projects/agency-os/state/2026-10-22-snapshot",
      "type": "links",
      "weight": 0.5
    },
    {
      "source": "note:index/MOC",
      "target": "note:sources/2026-10-capability-research",
      "type": "links",
      "weight": 0.5
    },
    {
      "source": "note:index/MOC",
      "target": "note:inbox/_inbox",
      "type": "links",
      "weight": 0.5
    },
    {
      "source": "note:projects/agency-os/notes/website-cloning-capability",
      "target": "agent:recon-engineer",
      "type": "mentions",
      "weight": 0.35
    },
    {
      "source": "note:projects/agency-os/notes/website-cloning-capability",
      "target": "agent:design-director",
      "type": "mentions",
      "weight": 0.35
    },
    {
      "source": "note:projects/agency-os/notes/website-cloning-capability",
      "target": "agent:frontend-engineer",
      "type": "mentions",
      "weight": 0.35
    },
    {
      "source": "note:projects/agency-os/notes/website-cloning-capability",
      "target": "agent:qa-engineer",
      "type": "mentions",
      "weight": 0.35
    },
    {
      "source": "note:projects/agency-os/notes/website-cloning-capability",
      "target": "agent:design-technologist",
      "type": "mentions",
      "weight": 0.35
    },
    {
      "source": "note:projects/agency-os/notes/website-cloning-capability",
      "target": "skill:deep-capture",
      "type": "mentions",
      "weight": 0.35
    },
    {
      "source": "note:projects/agency-os/notes/website-cloning-capability",
      "target": "skill:visual-replica",
      "type": "mentions",
      "weight": 0.35
    },
    {
      "source": "note:projects/agency-os/notes/website-cloning-capability",
      "target": "skill:playwright-recording",
      "type": "mentions",
      "weight": 0.35
    },
    {
      "source": "note:projects/agency-os/notes/website-cloning-capability",
      "target": "skill:ghost-cursor",
      "type": "mentions",
      "weight": 0.35
    },
    {
      "source": "note:projects/agency-os/state/2026-10-22-snapshot",
      "target": "agent:conductor",
      "type": "mentions",
      "weight": 0.35
    },
    {
      "source": "note:projects/analogue-studio-replica/_project",
      "target": "skill:pixel-parity",
      "type": "mentions",
      "weight": 0.35
    },
    {
      "source": "note:projects/aoricreative/_project",
      "target": "skill:pixel-parity",
      "type": "mentions",
      "weight": 0.35
    },
    {
      "source": "note:projects/aoricreative/lessons/agency-roster-audit-2026-10-21",
      "target": "skill:pixel-parity",
      "type": "mentions",
      "weight": 0.35
    },
    {
      "source": "skill:agent-evals-security",
      "target": "skill:agent-orchestration",
      "type": "co_used",
      "weight": 0.8
    },
    {
      "source": "skill:agent-evals-security",
      "target": "skill:ai-cli-mastery",
      "type": "co_used",
      "weight": 0.8
    },
    {
      "source": "skill:agent-evals-security",
      "target": "skill:pixel-parity",
      "type": "co_used",
      "weight": 0.4
    },
    {
      "source": "skill:agent-evals-security",
      "target": "skill:security-gate",
      "type": "co_used",
      "weight": 1.0
    },
    {
      "source": "skill:agent-evals-security",
      "target": "skill:token-budget",
      "type": "co_used",
      "weight": 0.4
    },
    {
      "source": "skill:agent-orchestration",
      "target": "skill:ai-cli-mastery",
      "type": "co_used",
      "weight": 0.6
    },
    {
      "source": "skill:agent-orchestration",
      "target": "skill:security-gate",
      "type": "co_used",
      "weight": 0.4
    },
    {
      "source": "skill:ai-cli-mastery",
      "target": "skill:security-gate",
      "type": "co_used",
      "weight": 0.6
    },
    {
      "source": "skill:ai-cli-mastery",
      "target": "skill:token-budget",
      "type": "co_used",
      "weight": 0.4
    },
    {
      "source": "skill:cloud-worker",
      "target": "skill:security-gate",
      "type": "co_used",
      "weight": 0.4
    },
    {
      "source": "skill:design-toolchain",
      "target": "skill:ghost-cursor",
      "type": "co_used",
      "weight": 0.6
    },
    {
      "source": "skill:design-toolchain",
      "target": "skill:pixel-parity",
      "type": "co_used",
      "weight": 0.6
    },
    {
      "source": "skill:design-toolchain",
      "target": "skill:playwright-recording",
      "type": "co_used",
      "weight": 0.6
    },
    {
      "source": "skill:design-toolchain",
      "target": "skill:site-replication",
      "type": "co_used",
      "weight": 0.4
    },
    {
      "source": "skill:design-toolchain",
      "target": "skill:visual-aesthetics",
      "type": "co_used",
      "weight": 0.6
    },
    {
      "source": "skill:design-toolchain",
      "target": "skill:visual-replica",
      "type": "co_used",
      "weight": 0.4
    },
    {
      "source": "skill:ghost-cursor",
      "target": "skill:pixel-parity",
      "type": "co_used",
      "weight": 0.8
    },
    {
      "source": "skill:ghost-cursor",
      "target": "skill:playwright-recording",
      "type": "co_used",
      "weight": 1.0
    },
    {
      "source": "skill:ghost-cursor",
      "target": "skill:site-replication",
      "type": "co_used",
      "weight": 0.8
    },
    {
      "source": "skill:ghost-cursor",
      "target": "skill:visual-aesthetics",
      "type": "co_used",
      "weight": 0.6
    },
    {
      "source": "skill:ghost-cursor",
      "target": "skill:visual-replica",
      "type": "co_used",
      "weight": 0.6
    },
    {
      "source": "skill:knowledge-system",
      "target": "skill:memory-protocol",
      "type": "co_used",
      "weight": 0.6
    },
    {
      "source": "skill:pixel-parity",
      "target": "skill:playwright-recording",
      "type": "co_used",
      "weight": 0.8
    },
    {
      "source": "skill:pixel-parity",
      "target": "skill:site-replication",
      "type": "co_used",
      "weight": 0.6
    },
    {
      "source": "skill:pixel-parity",
      "target": "skill:visual-aesthetics",
      "type": "co_used",
      "weight": 0.6
    },
    {
      "source": "skill:pixel-parity",
      "target": "skill:visual-replica",
      "type": "co_used",
      "weight": 0.6
    },
    {
      "source": "skill:playwright-recording",
      "target": "skill:site-replication",
      "type": "co_used",
      "weight": 0.8
    },
    {
      "source": "skill:playwright-recording",
      "target": "skill:visual-aesthetics",
      "type": "co_used",
      "weight": 0.6
    },
    {
      "source": "skill:playwright-recording",
      "target": "skill:visual-replica",
      "type": "co_used",
      "weight": 0.6
    },
    {
      "source": "skill:site-replication",
      "target": "skill:visual-aesthetics",
      "type": "co_used",
      "weight": 0.4
    },
    {
      "source": "skill:site-replication",
      "target": "skill:visual-replica",
      "type": "co_used",
      "weight": 0.4
    },
    {
      "source": "skill:visual-aesthetics",
      "target": "skill:visual-replica",
      "type": "co_used",
      "weight": 0.4
    }
  ],
  "warnings": []
};
