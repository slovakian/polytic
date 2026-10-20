---
status: accepted
---

# Chat suggestions and their ruleset

In ADR-0001, we noted that while suggestions or predetermined options were wanted eventually,
their design remained open because of the acute risk of collapsing the grilling experience back into
a superficial multiple-choice quiz and leading the witness.

We now resolve that design tension with a strict ruleset and an integrated parser:

## The Ruleset

Suggestions are permitted **only** when they aid conversational navigation or post-verdict exploration,
and are **strictly forbidden** during the interrogation core of the grill:

1. **Forbidden (never provide suggestions):**
   - **Open-ended probing:** When asking what the user believes, why they believe it, or what moral foundations justify their stance. Users must articulate beliefs in their own words.
   - **Challenging coherence & contradictions:** When confronting a tension between two statements, the AI must not offer pre-packaged compromises.
   - **Rapid-fire turns:** Standard 1–2 sentence probing turns must remain clean, direct questions.
   - **Ideologically leading framing:** Suggestions must never nudge the user toward a specific political camp or label.

2. **Permitted (2–4 short chips):**
   - **Dimension & topic branching:** Transitioning between taxonomy areas or choosing policy flashpoints.
   - **Post-verdict exploration:** Guiding the user on next steps after a verdict (stress-testing results, drilling into specific dimensions, steelmanning counter-positions).
   - **Concrete dilemma angles:** Neutral distinct stances in a concrete thought experiment, including a meta-choice (rejecting the premise).
   - **Session meta-navigation:** Pacing, steering, or topic skips.

## Protocol and UI Implementation

- **Protocol:** When appropriate, the agent emits 2–4 short suggestions at the very end of the response inside a ` ```suggestions ` block. If inappropriate, no block is emitted.
- **Client Parsing:** `apps/web/src/lib/suggestions.ts` strips the suggestions block from the rendered markdown (preventing raw code fences from flashing during streaming or appearing in message copy) and extracts clean suggestion strings.
- **UI Component:** Rendered using shadcn UI's `<Suggestions>` and `<Suggestion>` components (`@polytic/ui/components/suggestion`) placed directly above the composer in active chat when the assistant is the latest message and not busy.
- **Interaction:** Clicking a suggestion chip immediately sends it, clearing the suggestions and advancing the chat state without leaving stale button artifacts in the conversation history.
