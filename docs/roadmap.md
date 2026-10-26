# Roadmap

Polytic's evolution follows three concentric stages — moving from solo political self-understanding (with built-in thinker comparison and shareable results) to multiplayer comparison and structured discourse.

**Our current focus is purely Stage 1.** Later stages are captured here to ensure Stage 1's domain model and Living Profile foundation never paint us into a corner.

## v1: the first build (the anonymous first visit)

v1 is the first slice of Stage 1: one visit, done very well, with nothing about the person stored on our servers (ADR-0009, ADR-0004). Decided in [Lock the v1 scope boundary and product requirements](https://github.com/slovakian/polytic/issues/18).

**Access**

- No login. Anyone starts grilling straight away.
- Free for the person, running on free models via OpenRouter (ADR-0003), with light limits so no one exhausts the shared free quotas.
- English only, open to any country. Diagnostic Dilemmas use the person's own country.

**The grill**

- Socratic Grilling as specified in `grilling-protocol.md`, with text input only.
- Two kinds of clickable controls: steering suggestions (ADR-0007) and one-click Tension triage (_fits, because…_ / _I'm torn_ / _not now_).
- Nothing ever sits below the text input. Controls float above it or appear in the chat flow; exactly where is a UI design decision.
- Not in v1: the Off-map confirm/edit notice (Off-map Beliefs still appear on the Result) and any live view of Beliefs during the grill.

**The Result**

- After the first pass (~10–12 turns) the person unlocks their **Result**: a page, not a chat message. It's animated and visually rich, built for the reveal, and designed to be screenshotted. It is designed for phones first.
- It is a highlight, not an exhaustive report. It shows Labels, a short narrative, key Tensions, Closest Thinkers (top 2–3, why they align, and the Divergence), and every Dimension.
- **The Dimension breakdown** lists every Dimension. It is ordered by strongest Pull first (Settled and Torn alike), then weaker Pull, then Thin Coverage (marked as such), then Not asked (lower opacity, last). It starts collapsed to the top few, with the rest one tap away.
- Unexplored areas and Off-map Beliefs appear as quieter extras.
- Unasked Dimensions and Tensions are entry points to another round of grilling in the same tab, after which the Result updates.
- The Result stays in the browser until the person starts over, and a "Save as image" button exports the whole page as one image.
- Built from shadcn/ui components and renderable on the server (no browser-only visuals).

**After v1, still Stage 1:** accounts and claiming a Living Profile, return sessions and belief freshness, private/public profiles, shareable Result links, and a longer AI-written summary beyond the Result.

## Stage 1: Solo Diagnostic, Result & Living Profile (Current Focus)

- **Zero-wall first session:** Anyone can start a grilling session immediately without logging in and receive a full **Result** at the end.
- **Result with Closest Thinkers:** Delivers anchored political labels, narrative synthesis, key tensions, and a **Closest Thinkers** breakdown comparing the user against a comprehensive, hand-encoded catalog of **Reference Figures** (highlighting why they match and their #1 point of disagreement).
- **Claimable Living Profile:** At the end of a session, users can create an account to save their session into a persistent **Living Profile**.
- **Private by default, encouraged public:** Living Profiles are private by default to protect complete honesty during grilling, paired with a clear prompt encouraging users to make their profile public or share their Result link.
- **Follow-up topic deep-dives & belief freshness:** Returning users pick up where they left off (zooming into specific topics, testing new real-world dilemmas, or challenging parts of their map). When a user's view shifts, the new position becomes the **Current Belief** while the superseded position is preserved as a **Stale Belief** (excluded by default when agents query active beliefs).

## Stage 2: Multiplayer Comparison & Automated Thinker Research (Later)

- **1-on-1 and group profile comparison:** Compare your Living Profile directly with a friend's link or any public profile to see where your worldviews overlap and the exact root premises where you diverge.
- **Agent-researched Reference Figure expansion:** Use research agents to routinely expand and update the catalog of historical and contemporary thinkers, politicians, and public figures on the shared framework.

## Stage 3: AI-Arbitrated Deliberative Discourse (Later)

- **Structured cross-divide discussions and debates:** Two or more users with mapped profiles enter asynchronous or live discussions on a contested topic, moderated by Polytic's clinically neutral arbiter — which uses their mapped profiles to pinpoint root premise disagreements and keep discourse anchored to substance.
