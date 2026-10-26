# Core User Experience & Grilling Protocol

This document specifies Polytic's primary user experience and interaction mechanics, resolved in [Determine the core user experience and interaction mechanics](https://github.com/slovakian/polytic/issues/15).

## 1. Architectural Separation: Worldview Model vs. Elicitation Modes

Polytic strictly separates **what it knows/infers about a user's politics** from **how it draws that evidence out**:

- **The Worldview Model (Underlying Brain):** Stores and updates the user's dimensional positions, conceptual definitions, value trade-offs, active **Tensions**, and **Epistemic States** (`Settled`, `Torn`, `Indifferent`, `Open`; see `framework.md`).
- **Elicitation Modes (Interaction Formats):** Pluggable interaction mechanics that gather evidence and feed it into the shared Worldview Model.
  - **Primary Mode (v1): Structured Socratic Grilling Anchored by Diagnostic Dilemmas.** A live, clinically neutral cross-examination where the AI drops the user into concrete dilemmas where values collide, probes _why_ they hold their stance, and tests internal coherence across dimensions.
  - **Future Extensibility:** Because the Worldview Model is decoupled from chat transcripts, future elicitation modes (such as rapid dilemma decks, reacting to real-world claims/essays, or structured multi-person discourse) plug into the exact same underlying model without re-architecting the core.

## 2. Delivery Surface: First-Party Web App Only

Polytic lives exclusively in the first-party web application (`polytic.party`).

- **No distributable agent skill:** We do not maintain a standalone markdown skill (`skills/polytic-party`) for third-party chat clients. Owning the full delivery surface in the web app ensures complete control over model selection, RLHF de-biasing (**Clinical Agnosticism**), structured state tracking, TanStack AI suggestions, and interactive checkpoint **Result Cards**.

## 3. Session Flow & User Steering: "Follow the Heat, Then Bridge the Skeleton"

A grilling session balances **user energy** (starting where the user actually cares) with **structural completeness** (mapping across the full dimension taxonomy):

```
ANCHOR & HEAT → PRINCIPLE-BRIDGED SKELETON SWEEP → CHECKPOINT RESULT CARD → OPT-IN DEEPENING
```

1. **Anchor & Open with Heat (User-Seeded Entry):**
   - Establish the user's country/political context (so **Diagnostic Dilemmas** use locally relevant institutions and flashpoints).
   - Invite the user to start with a political question, frustration, or principle they care deeply about right now (or pick an opening thread).
2. **Principle-Bridged Skeleton Sweep:**
   - Rather than marching down a numbered list of dimensions (`1 → 2 → 3...`) like a bureaucracy form, the AI extracts the core normative principle or rule the user relied on in their opening thread and **uses that principle as a bridge into the next dimension** (_"You argued that individual autonomy is sacred in healthcare — let's test whether that same rule holds when we look at economic regulation..."_).
   - Under the hood, the system tracks coverage across the canonical dimension taxonomy so blind spots and cross-domain contradictions are systematically tested.
3. **Explicit User Steering Valves:**
   - At any moment, the user controls the session's direction: they can ask the AI to unpack the trade-offs of an unfamiliar topic, ask to be pushed harder on the current topic, switch topics, or skip a topic they haven't thought about (which is immediately logged as **Open** rather than forcing a fabricated opinion).

## 4. The Micro-Loop: Turn Length, Tone, and Probing Depth

### Turn Length Principle: "Zero Ceremony, Proportional Substance"

- **Zero Ceremony (Always Banned):** The AI never praises the user (_"That's a thoughtful point!"_), never repeats or summarizes the user's answer back to them as filler, and never lectures or hedges.
- **Proportional Substance:**
  - **Default Fast Probe (1–3 sentences):** When the issue is clear and the user is moving briskly, keep turns short and surgical — pose the **Diagnostic Dilemma** or surface the **Tension**, and ask one sharp question.
  - **Unpacking / Steelmanning Mode (1–2 paragraphs when needed or requested):** When a dilemma requires concrete context so it isn't a caricature, when the user asks _"Explain the trade-offs"_ or _"What's the argument for the other side?"_, or when the user writes a deep multi-paragraph reflection, the AI takes the space needed to steelman the competing sides in plain language before asking its question.

### Probing Depth Principle: "Follow Diagnostic Yield & User Pull, Not a Fixed Counter"

Instead of cutting off every topic after an arbitrary number of turns, the AI evaluates each turn across four response signals and continues only while **diagnostic yield** or **user pull** remains high:

| User Answer Signal                              | AI Action                                                                                                                                                                                                                                                                   |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Surface / Slogan / Dodge**                    | **Probe with a Diagnostic Dilemma:** Introduce a concrete edge case or counterfactual where their stated slogan collides with another value.                                                                                                                                |
| **Clear Principle + Justification**             | **Micro-Mirror & Bridge:** Articulate their dividing line in one crisp sentence and bridge to test that principle in a neighboring dimension.                                                                                                                               |
| **Contradiction with Prior Stance (`Tension`)** | **Surface the Tension:** Place the two statements side-by-side neutrally (_"Earlier you held X as a rule, yet here you accept Y — what distinguishes the two for you?"_). Give the user room either to draw a principled distinction or to acknowledge genuine ambivalence. |
| **Unformed / "I Don't Know" / Skip**            | **Mark `Open` & Advance:** Log the epistemic state as **Open** (or **Torn** if pulled between two principles) and move to the next dimension immediately without pressure.                                                                                                  |

- **When to move on fast (1–2 turns):** The user's underlying principle and dividing line are already clear, _or_ the user is **Open** (unsettled) and further probing would only manufacture a fake attitude.
- **When to stay and go deeper:** Two cherished principles are actively colliding and another surgical question will clarify the fault line, _or_ the user is actively leaning in (asking questions back, requesting pushback, or working through a live tension).

## 5. Input Mechanics & TanStack AI Suggestions Ruleset

- **Modality:** Text input in v1 (no voice input in v1).
- **Core Rule:** Substantive political beliefs, values, and justifications must **always** be articulated in the user's own words. Suggestions exist to steer the interviewer and reduce navigation friction — never to put political opinions in the user's mouth.

### Forbidden Suggestions (Never Render)

- Pre-packaged political stances or multiple-choice answers to a dilemma (e.g., `"Prioritize free speech"`, `"Prioritize public safety"`).
- Pre-baked compromises when confronting a **Tension** (e.g., `"Balance both case by case"`).
- Ideologically leading or biased framings.

### Permitted Suggestions (Rendered via TanStack AI)

1. **Context & Unpacking:** `"Unpack the trade-offs here"`, `"Steelman both sides"`, `"Give me a concrete example"`
2. **Epistemic Honesty & Skipping:** `"I'm genuinely torn on this"`, `"Haven't thought much about this — skip"`
3. **Depth & Pacing Control:** `"Push me harder on this"`, `"Ready for the next topic"`, `"Give me my Result Card now"`
4. **Dimension & Post-Result-Card Branching:** Selecting which **Open** dimension or active **Tension** to explore next.

## 6. Pacing & Payoff: Micro-Mirrors and Stepped Checkpoints

Polytic avoids both the **25-question black-box marathon** (where users get zero feedback until the very end) and **premature camp-labeling** (where live-updating ideological labels bias how the user answers subsequent questions):

1. **In-Session Feedback via `Micro-Mirrors` (Never Premature Labels):**
   - During the grill, Polytic never announces _"You sound like a Classical Liberal"_ or shows a live-updating ideological scoreboard.
   - Instead, when transitioning between topics, the AI delivers a **Micro-Mirror**: a single, surgical sentence reflecting the exact rule, trade-off priority, or tension the user just established (_"So for you, state intervention is justified to break monopolies, not to equalize outcomes — let's see if that rule holds on..."_). This delivers continuous proof of deep comprehension without anchoring the user to a camp.
2. **Stepped Checkpoint `Result Card` (~10–12 Turns) + Opt-In Chapter Deepening:**
   - After a focused initial pass (~10–12 turns covering the user's opening high-heat thread and core cross-cutting dilemmas), the user unlocks their initial **Result Card** (combining the **Personal Mirror** and **Intellectual Bridge**).
   - The Result Card explicitly distinguishes **Settled** convictions, active **Tensions**, and **Open / Unexplored** dimensions.
   - Directly from the Result Card, the user can click into any **Open** dimension (_"Grill me on foreign policy next"_) or any **Tension** (_"Stress-test this contradiction"_) to continue deepening their map in bite-sized chapters.
