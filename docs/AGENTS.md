# docs/ — how to use this folder

This folder holds Polytik's **product vision, principles, and conceptual
source-of-truth assets**. It is the long-form companion to the brief root
`AGENTS.md`. README owns setup/stack/commands; `docs/` owns *what Polytik is and
why*.

## Rules for agents

- **Do not dump random markdown here.** Every file in `docs/` has a defined purpose
  (see the map below). If your content fits an existing file, edit it. If it
  genuinely doesn't, propose a new file to the user before creating it.
- **One concern per file.** Keep each doc focused; cross-link rather than duplicate.
- **Vision and principles, not mechanics.** Setup, commands, and stack details
  belong in `README.md`, not here.
- **The two source-of-truth assets** (`dimension-taxonomy.md`, `label-library.md`)
  are authored deliberately by the project owner. Do not invent the actual
  dimensions or labels — frame the model and mark real content as TODO unless the
  user explicitly asks you to author it.
- **Respect the principles.** Nothing in `docs/` may contradict the inviolable
  principles in `principles.md` / root `AGENTS.md`.

## Structure

| File | Purpose |
| --- | --- |
| `vision.md` | The thesis and north star, long form. |
| `principles.md` | The inviolable design laws, expanded with rationale. |
| `grilling-protocol.md` | How the v1 grilling skill works and the open questions. |
| `dimension-taxonomy.md` | The model for Polytik's political axes (source-of-truth asset). |
| `label-library.md` | The model for the label catalog verdicts anchor to (source-of-truth asset). |
| `roadmap.md` | Phases 0–4. v1 is Phase 0 only. |

If you add a doc, add a row here too.
