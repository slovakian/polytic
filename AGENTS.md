# Polytic

**Polytic helps people understand their own politics in high resolution.**

The political compass is too crude and left-vs-right is cruder still. Statistical
questionnaires are shallow and allow no nuance. Polytic's bet: an AI that _grills_
you — asks, challenges, and reasons with you — can put words to your politics far
more accurately than any fixed quiz, and place you in a rich, multi-dimensional
landscape using the language political thinkers have built over centuries.

## What we're building right now (v1)

**Polytic Party** (Polytic for short) at polytic.party.

v1 is the **anonymous first visit**: no login, a grilling chat on free models via
OpenRouter, and an animated, screenshot-worthy **Result** page at the end. Nothing
about the person is stored on our servers, and there are no share links. Full
requirements: `docs/roadmap.md` ("v1: the first build"); decision: `docs/adrs/0009`.

The distributable skill below is being retired (`docs/adrs/0005`). Accounts, Living
Profiles, return sessions, and share links come after v1; see `docs/roadmap.md`.
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

The schema lives in **`packages/db/prisma/schema/`**. Alchemy owns the database:
`packages/infra/alchemy.run.ts` creates a **Neon project per stage** (prod, each PR
preview, each developer's `alchemy dev`), runs `prisma migrate deploy` against it,
then deploys the Worker bound to its pooled URL. `alchemy destroy` (run when a PR
closes) deletes that stage's project. `migrate deploy` **only replays committed
migration files** — it never generates SQL from your schema and never resets. A
schema change without a matching migration ships broken.

Migrations run against the project's **direct, non-pooled** URL, because Prisma
needs a direct connection for advisory locks. Never point a migration at the pooled
URL. Deploying needs `NEON_API_KEY` (a GitHub secret in CI, `packages/infra/.env`
locally).

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

`bun run dev` applies your migrations to your own dev stage's Neon project, which is
the dry run for what deploy will execute.

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
(the established political vocabulary Results are anchored to). The grilling uses a
_fixed skeleton, adaptive flesh_ model — fixed dimensions, free probing of issues —
and Results are _library-anchored but narrative-flexible_.

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
