# Roadmap

> **v1 is the in-app chat** (ADR-0001). It replaced the original Phase 0 of a
> showcase-only site. Do not let later phases leak into v1 decisions. This roadmap is a
> living document and will be reordered as the project develops. Treat it as direction,
> not a contract.

Each phase is roughly a prerequisite for the next.

## v1: Simple chat + skill (build now)

- An in-app **grilling chat** on polytic.party: free-text answers, verdict delivered at
  the end, models via OpenRouter, no server-side transcripts (ADR-0001, 0003, 0004).
- A home page that pitches Polytic Party and starts the chat. The distributable
  **grilling skill** stays available as a secondary "use your own AI" option.
- The **framework research** (`framework.md`) and the versioned **dimension taxonomy**
  and **label library** assets.

## Phase 1: Structured sessions + profiles

- The direction in `architecture.md`: case file, code-enforced phases, tool groups.
- A **live view** of what the AI has learned, shown to the user as they chat.
- Login and saved **profiles** with the verdict and its reasoning.
- The persistent **answer + interpretation store**: each user accumulates their raw
  answers and the AI's interpretations, retrievable to refine their profile over time.

## Phase 2: Alignment

- Tag thinkers, politicians, and online personalities using the same label library.
- Show how closely a user's profile aligns with them on shared vocabulary.
- This is the highest-value, most viral demonstration of why Polytic beats the compass,
  intentionally ahead of the heavier social/community work.

## Phase 3: Social layer

- Public, shareable profiles, shareable grilling sessions, public prompts people respond
  to.

## Phase 4: Discourse

- AI-arbitrated asynchronous discussions coordinated by a neutral arbiter, eventually
  formal and live debates. AIs may draw on these (Community tools, `architecture.md`).
