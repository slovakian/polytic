---
status: accepted
---

# The in-app chat is v1

v1 was originally Phase 0: a showcase site that handed out the grilling skill and made
no first-party LLM calls. We replaced that. **v1 is now a simple in-app chat** that grills
the user and delivers a verdict, because the best experience needs a session we run
ourselves. The distributable skill stays, as the way to use Polytic with your own agent,
but the app is the primary product.

v1 is deliberately minimal:

- **Free-text answers only.** Suggested or predetermined answers are wanted eventually,
  but their design is open (they risk turning the grill back into a quiz).
- **Verdict at the end, as a chat message.** The final message follows the skill's
  `verdict-format.md`, styled as a distinct card, with copy and download. No dedicated
  result view, typed verdict schema, or share links yet; those get designed together with
  profiles once the framework theory is settled (`docs/framework.md`).
- **No live view of what the AI has learned** and no progress indicator in v1.
- **Site shape.** The home page is a short pitch with a prominent Start button and the
  privacy disclosure (ADR-0004). The chat lives on its own route. Skill install is a
  secondary "use it with your own AI" section.

Architecture beyond "one chat endpoint and a system prompt" (tool-recorded notes, a
code-enforced state machine, tool groups) is intentionally **not** decided here. It is
recorded as direction under consideration in `docs/architecture.md`.
