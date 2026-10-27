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
per-turn checker) has to earn it.

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

Each Dimension handbook carries 2–3 **Dilemma Skeletons**: the two Poles that collide,
a country-free scenario, the strongest case for each side written evenly, and any
special rules (_Force in domestic politics_ stays historical or abstract; the fixed
abortion and medical-transition-for-minors dilemmas in the taxonomy are used as
written). The Interviewer only localises a skeleton to the person's country; it never
invents the collision or either side's best argument.

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

## Holding Clinical Agnosticism

- **Structure first.** The Interviewer only carries out a narrow Turn Brief; dilemmas
  and steelmen come from reviewed skeletons; the tone handbook is always loaded.
- **A neutrality test bench gates every change.** Before any prompt, handbook, or model
  change ships, a fixed set of personas from across the spectrum gives matching answers,
  and the outputs are compared for equal pushback, no praise, no one-sided disclaimers,
  and equally strong steelmen. Model lean is systematic, so testing catches it better
  than runtime checks.
- **A code tripwire at runtime**, pattern-matching the protocol's banned forms (praise
  openers, lecture preambles). No AI checker per turn: it would cost a call per turn,
  block streaming, and a small model judging neutrality is itself unreliable. With
  nothing stored server-side, a trip can only be counted anonymously or the turn
  retried.

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

- Abuse limits and quota protection:
  [Decide v1 abuse limits and free-quota protection](https://github.com/slovakian/polytic/issues/33).
- The privacy disclosure for Nvidia and Google logging prompts (ADR-0004).
- Exact formulas (Label position scoring, Closest Thinker closeness) and the Note-taker's
  change types: implementation, bound by `framework.md`.
