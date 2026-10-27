# docs/ — how to use this folder

This folder holds Polytic's **product vision, principles, and conceptual
source-of-truth assets**. It is the long-form companion to the brief root
`AGENTS.md`. README owns setup/stack/commands; `docs/` owns _what Polytic is and
why_.

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

| File                    | Purpose                                                                    |
| ----------------------- | -------------------------------------------------------------------------- |
| `vision.md`             | The thesis and north star, long form.                                      |
| `principles.md`         | The inviolable design laws, expanded with rationale.                       |
| `grilling-protocol.md`  | The core user experience and the Socratic Grilling protocol.               |
| `dimension-taxonomy.md` | Polytic's Foundation and Political Dimensions (source-of-truth asset).     |
| `label-library.md`      | The model for the label catalog Results anchor to (source-of-truth asset). |
| `roadmap.md`            | Stage 1 (current focus) through Stage 3.                                   |
| `framework.md`          | The model of a belief system: Dimensions, Beliefs, Tensions, Labels.       |
| `architecture.md`       | How a grilling session runs behind the scenes (mermaid diagrams).          |
| `glossary.md`           | Canonical terms (Worldview, Dimension, Belief, Tension, Result, …).        |
| `adrs/`                 | Architecture decision records, `NNNN-slug.md`. Commitments only.           |
| `research/`             | Literature surveys feeding decisions. Input, not decisions.                |

If you add a doc, add a row here too.
