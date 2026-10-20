# Polytic

**Polytic helps people understand their own politics in high resolution.**

The political compass is too crude and left-vs-right is cruder still. Statistical
questionnaires are shallow and allow no nuance. Polytic's bet: an AI that _grills_
you — asks, challenges, and reasons with you — can put words to your politics far
more accurately than any fixed quiz, and place you in a rich, multi-dimensional
landscape using the language political thinkers have built over centuries.

## What we're building right now (v1)

**Polytic Party** (Polytic for short) at polytic.party.

1. A **simple in-app grilling chat** (this repo): free-text answers, a verdict at the
   end, models via OpenRouter, no server-side transcripts. See `docs/adrs/0001`.
2. The distributable **grilling skill**, kept alongside the app for people who want
   to use their own AI agent.

Profiles, live views, and alignment scoring come later; see `docs/roadmap.md`.
**Do not build ahead of v1.** Architecture ideas in `docs/architecture.md` under
"Direction under consideration" are not decisions.

## Polytic Party skill (public install)

The distributable skill lives in **`skills/polytic-party/`** and users install it straight
from this repo:

```bash
npx skills add slovakian/polytic
```

Changes reach users once they're merged to `main`; there is no separate publish step.
`skills/` is the first place the skills CLI looks, so keep `polytic-party` the only skill in
it — anything else added there shows up in every user's install picker. Full maintainer
notes: **`skills/README.md`**. Product behavior: **`docs/grilling-protocol.md`**.

## Database migrations (mandatory)

The schema lives in **`packages/db/prisma/schema/`**. Every deploy runs
`prisma migrate deploy` in CI (see `.github/workflows/deploy.yml`), which **only
replays committed migration files** — it never generates SQL from your schema and
never resets. A schema change without a matching migration ships broken.

Migrations run against the **direct, non-pooled** URL (`DATABASE_URL_DIRECT` on
prod; the direct Neon branch URL on PR previews) — Prisma needs a direct connection
for advisory locks. Each PR gets its own **ephemeral Neon branch** forked from prod
state (`pr-<number>`), so preview migrations run against a throwaway clone and are
torn down when the PR closes. Never point a migration at the pooled URL.

**Whenever you modify any `*.prisma` schema, you MUST, in the same change:**

1. **Generate the migration** — `bun run db:migrate` (`prisma migrate dev`)
   creates a timestamped folder under `packages/db/prisma/migrations/` and updates
   the client. Never hand-edit the schema and skip this step.
2. **Read the generated SQL.** Open the new `migration.sql` and verify it does what
   you intended. Reject anything that will fail or lose data in production:
   - A new non-nullable column with no default on a populated table → add a default
     or split into expand/backfill/contract steps.
   - Dropped or renamed columns/tables → confirm intentional; Prisma renames are
     drop+add and **destroy data** unless written by hand.
   - Type changes that don't cast cleanly.
3. **Keep migrations forward-only and additive where possible.** Production runs
   `migrate deploy` against a shared database; design so a migration is safe to
   apply _before_ the new code is live (expand → migrate → contract).
4. **Commit the migration files alongside the schema and code.** A PR that touches
   `schema/` but adds nothing under `migrations/` is incomplete — do not open it.

Run `bun run db:deploy` locally against a scratch database if you want to dry-run
exactly what CI will execute.

## Inviolable principles

These bind every feature, forever. If a change violates one, it's wrong.

- **Non-partisan.** The AI never reveals or pushes its own politics. It steelmans
  every side equally.
- **Map, don't grade.** Polytic describes where you are; it never judges where you
  should be.
- **Challenge coherence, not ideology.** Pushback tests the internal consistency of
  your views — never nudges you toward a position.
- **Nuance over reduction.** We add dimensions and resolution; we never collapse
  people into a crude axis.

## Source-of-truth assets

Two curated, versioned assets in `docs/` define Polytic's worldview and must stay
coherent: the **dimension taxonomy** (the axes we measure) and the **label library**
(the established political vocabulary verdicts are anchored to). The grilling uses a
_fixed skeleton, adaptive flesh_ model — fixed dimensions, free probing of issues —
and verdicts are _library-anchored but narrative-flexible_.

## Where to read more

Vision, principles, the grilling protocol, the taxonomy/label models, and the full
roadmap live in **`docs/`** — start at `docs/AGENTS.md`. Setup, stack, and commands
live in `README.md`. Keep this file brief; put detail in `docs/`.

<!-- intent-skills:start -->

## Skill Loading

Use the repository’s installed Intent. If it is unavailable, report the missing dependency instead of downloading a replacement.
Before editing files for a substantial task:

- Run `bunx --no-install --package @tanstack/intent intent list` from the workspace root to see available local skills.
- If a listed skill matches the task, run `bunx --no-install --package @tanstack/intent intent load <package>#<skill>` before changing files.
- Use the loaded `SKILL.md` guidance while making the change.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.

<!-- intent-skills:end -->
