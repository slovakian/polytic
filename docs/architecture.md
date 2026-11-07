# Architecture

How a v1 grilling session runs behind the scenes. Decided in
[Decide how a grilling session runs behind the scenes](https://github.com/slovakian/polytic/issues/32);
the core commitment is ADR-0010. Terms are defined in `glossary.md`; what is recorded
about a person is defined in `framework.md`; the conversation's shape is in
`grilling-protocol.md`.

## The idea in one paragraph

Two small AIs share every turn, and **code directs**. A **Note-taker** reads the
person's latest answer and records what it showed as a list of changes. Code replays
those changes into the **Case File**, works out where the session stands, and checks
the Note-taker's suggested next move against the moves it allows. An **Interviewer**
then receives a one-line **Turn Brief** and only writes the words. Nothing is stored on
our servers: the notes travel inside the conversation, which lives in the browser.

The binding constraint is the shared free quota (1,000 model calls a day,
`docs/research/free-model-live-testing.md`). Every model call is budgeted: about **2 per
turn** and **2 per Result**, so roughly 26–30 per first visit and 33–38 first visits a
day. Anything that adds a call per turn (model-chosen tool loops, skill loading, a
per-turn checker) has to earn it. How that quota is shared out, and how a person can
bring their own key past it, is in "Limits and quota protection" below (ADR-0011).

## One turn

```mermaid
sequenceDiagram
    actor P as Person
    participant B as Browser (useChat + session engine)
    participant S as Server (chat() with subagents)
    participant N as Note-taker
    participant I as Interviewer

    P->>B: answers
    B->>S: conversation (notes included)
    S->>S: session engine replays notes → Case File, phase, allowed moves
    S->>N: latest exchange + compact Case File + index of all Dimensions
    N-->>S: changes + suggested move (structured output)
    S->>S: check move is allowed, else default; build Turn Brief
    S-->>B: changes (custom event)
    S->>I: Turn Brief + last ~3 exchanges + referenced Case File items
    I-->>B: reply (streamed)
    B->>B: store changes in the conversation; show buttons for the new state
```

- **Note-taker first, then Interviewer.** Protocol moves (raise a Tension, mark Open and
  advance, bridge once a principle is clear) have to happen on the turn they arise.
  A "thinking" indicator covers the 1–3 second wait.
- **Clicks skip the Note-taker.** Every button maps to a known action ("Skip" records
  Open and advances; "Push me harder" asks for a harder probe), so code builds the Turn
  Brief directly and the turn costs one call.

## Notes and the Case File

- The Note-taker writes **changes**, never a fresh copy of the notes: "add a Belief on
  _Markets vs. planning_", "set Pull", "open a Tension between X and Y", "record an
  Off-map Belief". A small model rewriting twenty Beliefs every turn would silently drop
  one.
- The changes are stored **inside the conversation**, attached to the turn that produced
  them. The **Case File** (Beliefs, Tensions, Off-map Beliefs, Coverage) is never saved
  on its own; it is always rebuilt by replaying the changes in order. One stored thing
  cannot drift out of sync with another, deepening extends the same conversation,
  dropping a turn drops its notes, and every Belief points back to the turn holding its
  Evidence.
- **Each AI sees a view built for its job**, never the whole conversation by default:

  | Role          | Sees                                                                                   |
  | ------------- | -------------------------------------------------------------------------------------- |
  | Note-taker    | Latest exchange, compact Case File, short index of all Dimensions, focus handbooks     |
  | Interviewer   | Turn Brief, last ~3 exchanges verbatim, Case File items the brief names, its handbooks |
  | Label Judge   | Shortlisted Label cards, the person's Reasons and Evidence                             |
  | Result Writer | Chosen Labels, code's Closest Thinker results, Case File with the Evidence it needs    |

  The Case File is the AIs' long-term memory, which keeps turn 30 as sharp as turn 3
  and sends less of the person's text to third-party models. The browser still holds
  and shows the full conversation.

## Code directs: the session engine

The **session engine** is one pure module, the same file in browser and server:
notes → Case File → phase, allowed moves, buttons, Result unlock. Because it is a
calculation over the conversation, there is nothing to store or sync, and browser and
server cannot disagree. The server recomputes it from what the browser sends; forged
notes could only change the forger's own Result.

**Phases**: Anchor → Sweep (Core first) → Result → Deepening, as in
`grilling-protocol.md`.

**Moves** (one per turn): probe with a Diagnostic Dilemma; Micro-Mirror and bridge to a
Dimension; raise a Tension; mark Open and advance; unpack or steelman on request; offer
the Result. Code lists the allowed moves for the current state, the Note-taker suggests
one (bridging needs judgement code can't make), code checks it and falls back to a
default, and the Interviewer gets the resulting Turn Brief. Small models never hold the
structure.

**Anchor**: the country comes from a searchable picker rendered in the chat flow, with
"Prefer not to say" (dilemmas then stay generic). The opening thread is free text in the
person's own words, with fixed topic-name buttons ("the economy", "immigration") as a
fallback. The first model call happens after both.

**Result unlock** (starting values, tuned on real sessions):

- unlocks at **≥ 10 turns and ≥ 8 of the 19 Core Dimensions at Solid Coverage**. A
  Dimension where the person is Open still counts: Coverage measures the asking, not
  whether they had a view;
- **soft cap** around turn 16: the Result is offered even if coverage is short;
- **"Give me my Result now"** always works, and the Result is honest about what was
  not covered (Thin and Not asked are already excluded from Labels and Closest Thinkers).

**Deepening** runs for as long as the person wants. Once the chosen Dimension or Tension
is covered, a "Back to my Result" button appears and the Interviewer offers it once.
The Result rebuilds only on return.

**Screen state** is separate. What the person can do right now (type, wait, stream,
choose-only for the picker or Tension triage, retry after an error) is event-driven, so
it is an XState machine in the browser only, never part of the session engine.

## Buttons

Every clickable control comes from a **fixed list we wrote and reviewed** (ADR-0007),
chosen by the session engine from the phase and Turn Brief, with Dimension and Tension
names filled in from the Case File. The AI never writes buttons, so ADR-0007's
forbidden suggestions are impossible by construction and cost no calls. When the Turn
Brief raises a Tension, the triage card (_fits, because…_ / _I'm torn_ / _not now_)
replaces the usual buttons.

## Reference material as skills

The Dimension taxonomy, protocol moves, tone rules, and Label cards are too large for a
small model's prompt. Each is written **in skill format**: one handbook per Dimension,
per move, per Label, and one for tone and Clinical Agnosticism. In v1 **code chooses**
which handbooks to load from the Turn Brief, which costs no calls and can't be
forgotten. Because they are real skills, any of them can later be handed to a model to
open itself (`@tanstack/ai-skills`) without rewriting the content.

The handbooks live in `docs/handbooks/<name>/SKILL.md`, one folder each, with `name` and
`description` frontmatter
([Write the grill's move and tone handbooks](https://github.com/slovakian/polytic/issues/51)):

| Handbook                                                                                                                       | Loaded for                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| `tone`                                                                                                                         | The Interviewer, every turn                       |
| `move-probe`, `move-mirror-and-bridge`, `move-raise-tension`, `move-mark-open-and-advance`, `move-unpack`, `move-offer-result` | The Interviewer, the one the Turn Brief names     |
| `note-taker`                                                                                                                   | The Note-taker, every turn                        |
| `dimension-<slug>`                                                                                                             | Either role, for the Dimensions the turn is about |

So an Interviewer prompt is the tone handbook, one move handbook, and the Dimension
handbooks the brief names. The Note-taker's handbook also fixes two scales the
framework leaves open: **Pull** per Pole is None, Weak, Moderate, or Strong, and a
Belief reaches **Solid Coverage** once the person has faced a case where its Poles
collide and given a Position and a Reason, or was asked directly and answered Open,
Torn, or Indifferent.

Each Dimension handbook carries 2–3 **Dilemma Skeletons**: the two Poles that collide,
a country-free scenario, the strongest case for each side written evenly, and any
special rules (_Force in domestic politics_ stays historical or abstract; the fixed
abortion and medical-transition-for-minors dilemmas in the taxonomy are used as
written). The Interviewer only localises a skeleton to the person's country; it never
invents the collision or either side's best argument. The template, the writing and
localising rules are in `dilemma-skeletons.md`; the skeletons are in the
`dimension-<slug>` handbooks.

## The Result

| Part                         | Code                                                              | AI                                                                          |
| ---------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Dimensions ordered by Pull   | All of it                                                         |                                                                             |
| Labels                       | Score Positions, rule out central-Dimension misses, shortlist ~10 | **Label Judge**: do the Reasons fit? Main / Area / Thin / Foundation / none |
| Closest Thinkers, Divergence | Pull-weighted closeness, top 2–3, each Divergence                 | Phrase why they align and the Divergence                                    |
| Headline and narrative       |                                                                   | **Result Writer** (may name Unlisted Traditions)                            |
| Tensions, Off-map Beliefs    | Read from the Case File                                           |                                                                             |

The Label Judge runs before the Result Writer so the narrative describes the Labels
actually chosen. The two-step Label funnel is the one `label-library.md` is built for.
The same pipeline reruns after each round of deepening.

## Models

One config table maps each role to an ordered list of models and settings, so swapping
a model (including for a cheap paid open-source one, which ADR-0003 allows) is a
config change.

| Role          | Model                                | Reasoning | Why                                        |
| ------------- | ------------------------------------ | --------- | ------------------------------------------ |
| Note-taker    | `nvidia/nemotron-3.5-lightning:free` | off       | Fills a form; the person is waiting        |
| Interviewer   | `nvidia/nemotron-3.5-lightning:free` | off       | The thinking happened in the Turn Brief    |
| Label Judge   | `nvidia/nemotron-3.5-lightning:free` | on        | Once per Result; hard judgement            |
| Result Writer | `nvidia/nemotron-3.5-lightning:free` | on        | Once per Result; the writing is the payoff |

On failure: retry once, then `google/gemma-4-31b-it:free`, then
`google/gemma-4-26b-a4b-it:free`, then an honest "busy, try again in a minute".
**Never `openrouter/free`**: it breaks strict forms and means we wouldn't know which
model is talking (ADR-0003). Reasoning-on roles need `max_tokens ≥ 2500`.

## Limits and quota protection

Decided in
[Decide v1 abuse limits and free-quota protection](https://github.com/slovakian/polytic/issues/33);
the core commitment is ADR-0011. v1 runs **only on our free quota**. There is no paid
fallback. All numbers below are starting values in config.

**Getting in.** Limits count Sessions, not requests. A Session gets in at its first
model call, after the country picker and the opening thread:

1. An invisible **Cloudflare Turnstile** check runs. Most people never see it; Cloudflare
   challenges only traffic it's unsure about.
2. The **per-IP limit** is checked: 1 first pass per IP per 24 hours, counted in a
   Durable Object keyed by a salted hash of the IP. The counter holds only a count,
   expires within 24 hours, and is never linked to anything the person said. A
   browser-side count is a soft first check.
3. The day's budget must have room to **reserve 42 calls**: the worst-case first pass,
   20 turns × 2 calls plus 2 for the Result.
4. The server issues a **signed Session token**, which every later call must carry.

Whoever gets in is guaranteed to reach their Result. Unused reserved calls go back to
the pool when the Result is built, after **30 minutes idle** (coming back after that
means getting in again, continuing the same conversation), or when the person switches
to their own key.

**Caps on every Session**, whoever's key it runs on:

- First pass: the Result is offered at the soft cap (~turn 16) and built automatically
  at **turn 20**.
- **2,000 characters per message.** A circular progress ring appears in the composer at
  80% of the limit, fills as you type, and turns red with Send disabled when you're over.
  There is no character count, and text is never silently cut. The server enforces the
  same limit.
- A maximum conversation size the server will accept, and `max_tokens` per role.

Because the server writes every prompt and the Interviewer only carries out a Turn
Brief, the chat is worth little as a free general-purpose model; these caps close the
remaining gaps (huge inputs, forged histories).

**Deepening** runs only on what's left over. It's allowed while the day's uncommitted
budget is above a **reserve of 250 calls** (about 6 new Sessions). Each Session gets up
to **2 rounds of 6 turns** plus a Result rebuild. When it's closed, the Result's
deepening entry points say so ("deepening opens again tomorrow") rather than disappearing.

**Counting.** A Durable Object counts every model call on our key, including retries and
fallbacks, and holds the reservations. Every 5 minutes it's reconciled with OpenRouter's
`GET /api/v1/key`, which wins when they disagree. Preview and dev deployments share the
production key, so they use **mocked models by default**. Live calls there are opt-in
and capped at 100 a day in a separate counter, so production always keeps at least 900.

**Per-minute limit.** OpenRouter allows about 20 free requests a minute per account.
v1 has no cap on how many Sessions run at once: retry briefly with backoff behind the
"thinking" indicator, then show "busy, try again in a minute". Revisit if real traffic
shows otherwise.

**When we're full**, honest screens, never a waitlist or an email form:

- Daily budget used: "Polytic is full for today. It opens again at HH:MM" (the quota's
  UTC reset, in local time), with one line explaining it runs on free models.
- Per-IP limit: "you've had today's Session; it opens again at HH:MM". Their Result is
  still in their browser.
- Each of these screens offers bringing your own key prominently.

## Bring your own key

Anyone can switch a Session to **their own OpenRouter key** at any time, through a quiet
link that never sits in front of the first message.

- **Connecting:** "Sign in with OpenRouter" (OAuth) is the main option; "paste an
  existing key" is a secondary link.
- **The key** lives only in that tab's memory (TanStack AI BYOK, no passkey storage). It
  is sent in an `x-byok-openrouter` header, used for one call, and never stored on our
  servers. Closing the tab forgets it; a refresh means signing in again.
- **Models:** the same free models and fallback order, on the person's own free limits
  (50 calls a day on an account that has never bought credits, which the picker notes),
  or one of a **curated list of 2–3 paid models**. People can't name any other model.
  The chosen model runs **all four roles**, so each listed model is one tested setup.
- **Every listed paid model** passes the neutrality test bench and the structured-output
  check, and both re-run weekly after any prompt, handbook, or model change; a model that
  fails is hidden from the picker until it passes (ADR-0012). Paid requests set
  OpenRouter's `provider.data_collection: "deny"`, and a model is listed only if a
  provider meets it.
- **The picker** shows one plain privacy line per option. Free: "free · lower daily
  limits · the provider may log or train on your conversation". Paid: "billed to your
  OpenRouter account · providers don't keep your conversation". The disclosure follows
  the selection.
- **Limits:** the quota protections (reservation, per-IP limit, deepening reserve,
  Turnstile) don't apply. The caps on every Session do.
- **Failures:** a chosen paid model that fails is retried once, then the person picks:
  try again, pick another model, or continue on free models with their key. We never
  switch models silently and never fall back to our key. Quota or credit errors name
  the person's own account ("your OpenRouter free quota is used up for today"), never
  our "full" screen. If the account's privacy settings block the free providers, the
  error says which setting does.
- **Switching partway through** continues the same conversation, since the notes travel
  with it. Switching back to our key counts as getting in again. Switching models
  mid-Session is allowed, and the Result's small print names the models used.

## Holding Clinical Agnosticism

- **Structure first.** The Interviewer only carries out a narrow Turn Brief; dilemmas
  and steelmen come from reviewed skeletons; the tone handbook is always loaded.
- **A neutrality test bench gates every change.** Before any prompt, handbook, or model
  change ships, all four roles run on frozen **Mirror Pairs** (pole flips, group swaps,
  and radical vs mainstream), and the outputs are compared for equal treatment. Code
  compares what it can, and calibrated strong models judge the rest. Model lean is
  systematic, so testing catches it better than runtime checks. The design is in
  `neutrality-test-bench.md` (ADR-0012).
- **A code tripwire at runtime.** The Interviewer's reply is released a sentence at a
  time, and a sentence matching a high-precision list of banned forms (praise openers,
  lecture preambles) is dropped and counted by date, role, model, and pattern only. No AI
  checker per turn: it would cost a call per turn, block streaming, and a small model
  judging neutrality is itself unreliable.

## Built on TanStack AI

Each role is a `defineAgent` subagent. The session engine is the `chat({ subagents,
router })` **router**, so code, not a model, decides which agent runs. The Note-taker
and Label Judge use structured output. Changes reach the browser as custom stream
events and are saved into the conversation. The country picker and Tension triage are
interrupts or browser-side tools. The client uses `useChat` with browser persistence;
middleware handles model fallback and the tripwire.

Browser-side tools are not used for reading or writing notes: the browser already sends
the whole conversation, and a model deciding when to fetch or save is the failure this
design removes.

New roles later (a debate moderator in Stage 3) are new agents plus a router rule.

**First build step:** a one-turn spike proving Note-taker → code → Interviewer end to
end on these primitives, including how the router hands the Note-taker's result to the
Interviewer. If a detail doesn't fit, keep this shape and add the smallest glue for
that gap.

## Not decided here

- Which 2–3 paid models fill the bring-your-own-key list:
  [Choose the paid models for the bring-your-own-key list](https://github.com/slovakian/polytic/issues/55).
- The privacy disclosure for Nvidia and Google logging prompts (ADR-0004).
- Exact formulas (Label position scoring, Closest Thinker closeness) and the Note-taker's
  change types: implementation, bound by `framework.md`.
