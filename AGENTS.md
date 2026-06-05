# Polytik

**Polytik helps people understand their own politics in high resolution.**

The political compass is too crude and left-vs-right is cruder still. Statistical
questionnaires are shallow and allow no nuance. Polytik's bet: an AI that *grills*
you — asks, challenges, and reasons with you — can put words to your politics far
more accurately than any fixed quiz, and place you in a rich, multi-dimensional
landscape using the language political thinkers have built over centuries.

## What we're building right now (v1 = Phase 0)

1. A distributable **grilling skill** — a prompt people install via the skills CLI
   or copy-paste into any AI agent, which interviews them and delivers a verdict
   on their politics.
2. A **showcase/distribution site** (this repo) that explains the thesis and hands
   out the skill. First-party in-app grilling, profiles, and alignment scoring come
   later — see `docs/roadmap.md`. **Do not build ahead of Phase 0.**

## Polytik Party skill (public install)

The distributable skill lives in **`skills/polytik-party/`** and publishes to
**[`slovakian/polytik-party`](https://github.com/slovakian/polytik-party)** via git subtree.
This private repo is the **source of truth**; the public repo is a read-only mirror.

```bash
npx skills add slovakian/polytik-party
```

### Keeping the public repo in sync (agents)

When you change anything under `skills/polytik-party/`:

1. **Edit only in the monorepo** — never treat the public repo as canonical.
2. **Commit** skill changes in this private repo.
3. **Publish** to the public mirror:
   ```bash
   bun run skills:publish
   ```
   (runs `git subtree push --prefix=skills/polytik-party polytik-party main`)
4. If `subtree push` fails on first publish or after history rewrites, bootstrap once:
   ```bash
   git subtree split --prefix=skills/polytik-party -b publish/polytik-party
   git push polytik-party publish/polytik-party:main
   git branch -D publish/polytik-party
   ```
5. **Rare reverse sync** (hotfix landed on GitHub):  
   `git subtree pull --prefix=skills/polytik-party polytik-party main --squash`

Remote name: `polytik-party` → `git@github.com:slovakian/polytik-party.git`. Full maintainer notes: **`skills/README.md`**. Product behavior: **`docs/grilling-protocol.md`**.

## Inviolable principles

These bind every feature, forever. If a change violates one, it's wrong.

- **Non-partisan.** The AI never reveals or pushes its own politics. It steelmans
  every side equally.
- **Map, don't grade.** Polytik describes where you are; it never judges where you
  should be.
- **Challenge coherence, not ideology.** Pushback tests the internal consistency of
  your views — never nudges you toward a position.
- **Nuance over reduction.** We add dimensions and resolution; we never collapse
  people into a crude axis.

## Source-of-truth assets

Two curated, versioned assets in `docs/` define Polytik's worldview and must stay
coherent: the **dimension taxonomy** (the axes we measure) and the **label library**
(the established political vocabulary verdicts are anchored to). The grilling uses a
*fixed skeleton, adaptive flesh* model — fixed dimensions, free probing of issues —
and verdicts are *library-anchored but narrative-flexible*.

## Where to read more

Vision, principles, the grilling protocol, the taxonomy/label models, and the full
roadmap live in **`docs/`** — start at `docs/AGENTS.md`. Setup, stack, and commands
live in `README.md`. Keep this file brief; put detail in `docs/`.

<!-- intent-skills:start -->
## Skill Loading

Before substantial work:
- Skill check: run `bunx @tanstack/intent@latest list`, or use skills already listed in context.
- Skill guidance: if one local skill clearly matches the task, run `bunx @tanstack/intent@latest load <package>#<skill>` and follow the returned `SKILL.md`.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.
<!-- intent-skills:end -->
