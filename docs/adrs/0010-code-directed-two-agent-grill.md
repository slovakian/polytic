---
status: accepted
---

# Code directs the grill; a Note-taker and an Interviewer share each turn

A v1 grilling turn uses two small models and code in between. A **Note-taker** reads the
person's latest answer and records what it showed as a **list of changes**, which are
stored inside the conversation itself. Code replays them into the **Case File**, works
out the phase and allowed moves, and checks the Note-taker's suggested move. An
**Interviewer** then receives a one-line **Turn Brief** and only writes the reply. The
Result is made by code plus a Label Judge and a Result Writer. Details are in
`docs/architecture.md`.

We chose this because v1 runs on small free models under a shared quota of 1,000 calls
a day. Small models fail quietly when they juggle talking with note-taking, hold the
session's structure, or decide when to fetch reference material. Giving each model one
narrow job, and giving all structure to code, makes the grill reliable at about two
calls a turn.

## Considered options

- **One model talks and records through tools.** About the same call cost, since a tool
  press plus a reply is two calls, but one small model doing two hard jobs does both
  worse.
- **A manager model routing to many specialists** (dilemma writer, Tension spotter,
  neutrality checker). 4–6 calls a turn, roughly 10–15 grills a day, and slower turns.
- **The model directs the session.** The most natural feel, and exactly what small
  models get wrong: they wander, skip Dimensions, and never offer the Result.
- **Notes as a separately stored file, or rewritten whole each turn.** Two stored things
  drift apart; rewriting twenty Beliefs every turn silently drops one.
- **The model opens skills and calls browser tools for notes itself.** Each costs a call
  and relies on the model remembering; code picks the handbooks instead, and they are
  written as skills so a model can open them later.

## Consequences

The Note-taker's notes are the AIs' only long-term memory, so its reliability is the
system's reliability. Reference material must be authored as skills, including 2–3
Dilemma Skeletons per Dimension. Neutrality is held by structure plus a test bench that
gates every change, not by a per-turn checker.
