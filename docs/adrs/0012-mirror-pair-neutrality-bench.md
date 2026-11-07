---
status: accepted
---

# Neutrality is tested on frozen Mirror Pairs, judged by calibrated strong models

Every prompt, handbook, and model change runs all four AI roles on **Mirror Pairs**:
frozen inputs that differ in one controlled way (a pole flip, a group swap, or radical vs
mainstream), run through the real prompt assembly. Code compares everything it can. Two
strong models from different labs judge what's left, after proving on planted pairs that
they can detect bias in both directions. A change fails if rules are broken too often, if
too few pairs are treated equally, or if unequal pairs run one way. At runtime, a
code-only tripwire drops banned forms a sentence at a time and counts them anonymously.
Details are in `docs/neutrality-test-bench.md`.

We chose this because model lean is systematic and shows up as a difference in treatment,
which can only be measured when the inputs are provably matched. Frozen pairs are the only
option that gives that control at a cost we can run on every change.

## Considered options

- **An AI playing each persona through a live Session.** More realistic, but the persona
  model's own lean enters the measurement, and that lean is what we're trying to detect.
- **Scripted whole Sessions.** Once two versions get different questions, a fixed script
  no longer answers what was asked.
- **Left-wing and right-wing personas.** Reads well, but rebuilds the axis Polytic rejects
  and can't catch group favouritism or softening around repugnant views. Whole ideologies
  also differ in too many ways to tell what caused a difference.
- **Testing the Interviewer only.** Cheapest, but the Note-taker can cause unequal grilling
  behind clean prose, and the Result Writer is the least constrained role.
- **A free or small model as judge.** Free to run, but `docs/architecture.md` already rules
  out small models judging neutrality.
- **A human reading every pair.** The most trusted, but it won't happen on every change.
- **Retrying a turn when the tripwire trips.** Costs a call per trip against a fully
  reserved budget, and can't replace text the person has already seen.
- **A second OpenRouter account for free quota.** OpenRouter says extra accounts don't
  add capacity. A separate paid account is used only to keep bench spending apart.

## Consequences

The project now has a small running cost: about $4 a Full Run, capped at $20 a month, on a
separate account. ADR-0011's "we never pay for model calls" still holds for serving
people. This ADR amends ADR-0011 on one point: listed paid models are re-tested weekly when
something has changed, not per change, because per-change runs would use up the cap after
one or two changes. Routine gating runs on a paid twin of the free model, which the first
baseline must validate and a weekly run on the real free endpoint keeps checking. The bench
can't see drift across a whole Session, and free fallback models get full judging only when
adopted. A test-only tag names the side chat models are documented or suspected to favour;
it never reaches the app and scores no person. Sentence-at-a-time release makes the
Interviewer's stream slightly less smooth.
