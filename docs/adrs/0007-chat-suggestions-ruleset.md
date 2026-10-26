---
status: accepted
---

# Chat suggestions and their ruleset

While clickable suggestions in a chat interface reduce navigation friction, naive suggestions risk collapsing Socratic grilling back into a shallow multiple-choice quiz and anchoring the user's answers.

We resolve that tension with a strict ruleset rendered natively via TanStack AI's suggestions capability:

## Core Principle

**Substantive political beliefs, values, and justifications must always come from the user's own words.** Suggestions are used to **steer the interviewer** (unpacking context, controlling depth, skipping unformed areas, or branching between dimensions), never to answer a political question _for_ the user.

## The Ruleset

1. **Forbidden (never provide as suggestions):**
   - **Pre-packaged political stances or dilemma choices:** Never offer multiple-choice positions on a policy or moral dilemma (e.g., `"Prioritize individual liberty"`, `"Prioritize social order"`).
   - **Pre-packaged compromises on contradictions:** When confronting a **Tension** between two of the user's statements, never offer an easy out or synthetic middle ground.
   - **Ideologically leading framing:** Suggestions must never nudge the user toward a political camp or label.

2. **Permitted (meta-steering, unpacking, and navigation):**
   - **Context & trade-off unpacking:** Requesting deeper context before answering (`"Unpack the trade-offs here"`, `"Steelman both sides"`, `"Give me a concrete example"`).
   - **Epistemic honesty & skipping:** Expressing genuine ambivalence or marking a topic as unformed (`"I'm genuinely torn on this"`, `"Haven't thought much about this — skip"`).
   - **Depth & pacing control:** Adjusting how hard the AI probes (`"Push me harder on this"`, `"Ready for the next topic"`, `"Show my Result Card"`).
   - **Dimension & post-Result-Card branching:** Choosing which **Open** dimension or active **Tension** to explore next from the Result Card or at a transition point.
