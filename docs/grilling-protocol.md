# The grilling protocol (v1)

The v1 product is a **distributable grilling skill**: a prompt installed via the
skills CLI or copy-pasted into any AI agent. It interviews the user and delivers a
verdict on their politics. This doc describes how it should behave.

## Install

Published from the public skills repo (not this private app repo):

```bash
npx skills add slovakian/polytik-party
```

Source in this monorepo: `skills/polytik-party/`. Maintainer notes: `skills/README.md`.

## Shape

- **Full sweep, then verdict.** The skill grills across the dimensions, *then*
  delivers the verdict at the end. It does **not** announce "you fall into this camp"
  between rounds — the payoff is the considered verdict after the user has been
  properly examined. (See open questions for why this might change.)
- **Fixed skeleton, adaptive flesh.** The skill walks the deliberate dimension
  taxonomy (`dimension-taxonomy.md`) as its skeleton, but within each dimension it
  probes whatever issues, edge-cases, and contradictions actually surface. The map is
  shared and comparable across people; the conversation is bespoke.
- **Challenge for coherence.** When answers conflict or stay vague, the AI asks
  *"why this and not that?"* — testing consistency, never pushing a direction (see
  `principles.md`).

## The verdict

- **Library-anchored, narrative-flexible.** Primary labels are drawn from the curated
  `label-library.md` so verdicts stay consistent and comparable. The surrounding
  description is free prose, and the AI may coin phrasing that genuinely fits the
  individual — as flavor, never replacing the canonical label.
- **Evidence-backed.** The verdict should point to what the user actually said, so the
  result feels earned rather than asserted.

## Open questions (not resolved for v1)

These are real, unsolved, and recorded honestly so future work doesn't treat them as
settled:

- **Long-session fragility.** Genuinely fleshing out someone's politics may take many
  questions. Turn-based agents vary in how well they handle long, stateful
  conversations — some may forget, truncate, or drop the thread. We have not yet
  observed how target agents behave. This is the biggest v1 risk.
- **Progressive verdicts.** Interim, resumable reads (dimension-by-dimension) could
  defuse the long-session problem, but risk the "you're in this camp" anti-pattern the
  owner wants to avoid. **Parked, not rejected** — revisit if length proves to bite.
- **Structured output for the future app.** Eventually the verdict may need a
  machine-readable form so the first-party platform can seed profiles from a session.
  Not required in v1.

## How this connects forward

On the future platform (`roadmap.md`), grilling moves in-app and gains memory: each
user accumulates a store of their raw answers *and* the AI's interpretations of those
answers, which the AI retrieves to refine their profile over time.
