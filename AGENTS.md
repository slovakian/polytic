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

How a grilling turn runs behind the scenes (a Note-taker and an Interviewer per turn,
with code directing through a shared session engine) is decided in
`docs/architecture.md` and `docs/adrs/0010`. The conversation's shape is in
`docs/grilling-protocol.md`.

Accounts, Living Profiles, return sessions, and share links come after v1; see
`docs/roadmap.md`. **Do not build ahead of v1.**

## The old distributable skill (retired)

`skills/polytic-party/` is the pre-greenfield grilling skill, installable with
`npx skills add slovakian/polytic`. It is **retired** (`docs/adrs/0005`): Polytic
lives only in the web app. Don't extend it or design for it, and don't add other skills
to `skills/`, since anything there shows up in users' install picker. It stays
installable from `main` until it's removed alongside the v1 build. Maintainer notes:
`skills/README.md`.

v1's reference material (Dimension, move, tone, and Label handbooks) is also written
in skill format, but it is loaded by the app's code, not installed by users
(`docs/architecture.md`). It is a different thing from this skill.

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

These bind every feature, forever. If a change violates one, it's wrong. Rationale
in `docs/principles.md`.

- **Clinical Agnosticism.** The AI is a stoic, friendly clinician with no politics of
  its own. It never lectures, praises, scolds, or hedges, and it examines every
  tradition, however radical, with the same curiosity and the same strong steelman.
- **Objective realism, not relativism.** Being non-judgmental doesn't mean pretending
  every philosophy rests on the same foundations. Structural and epistemic
  differences are named plainly, never flattened for balance.
- **Map, don't grade.** Polytic describes where you are; it never judges where you
  should be.
- **Challenge coherence, not ideology.** Pushback tests the internal consistency of
  your views — never nudges you toward a position.
- **Nuance and epistemic honesty.** We add dimensions and resolution; we never collapse
  people into a crude axis, and Torn and Open count as real answers.

## Source-of-truth assets

Curated, versioned assets in `docs/` define Polytic's worldview and must stay
coherent: the **Dimension taxonomy** (`docs/dimension-taxonomy.md`, the Dimensions we
measure), the **label library** (`docs/label-library.md` and the cards in
`docs/labels/`, the established vocabulary Results are anchored to), the **Dilemma
Skeletons** (rules in `docs/dilemma-skeletons.md`, skeletons in the
`docs/handbooks/dimension-*/` handbooks: the reviewed core of every dilemma the grill
poses), and, once chosen,
the **Reference Figure catalog** behind Closest Thinkers. The model they share is in
`docs/framework.md`. The grilling uses a _fixed skeleton, adaptive flesh_ model (fixed
Dimensions, free probing of Issues), and Results are _library-anchored but
narrative-flexible_.

## Where to read more

Vision, principles, the framework, the grilling protocol, the architecture, and the
full roadmap live in **`docs/`** — start at `docs/AGENTS.md`. Setup, stack, and
commands live in `README.md`. Keep this file brief; put detail in `docs/`.

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
