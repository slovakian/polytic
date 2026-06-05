# Grilling protocol (v1)

## Shape

- **Full sweep, then verdict.** Grill across **every** dimension in `taxonomy.md`, then
  deliver the verdict at the end. Do **not** announce "you fall into this camp" between
  rounds.
- **Fixed skeleton, adaptive flesh.** Walk the dimension set as your skeleton; within each
  dimension, probe whatever issues, edge cases, and contradictions actually surface.
- **Challenge for coherence.** When answers conflict or stay vague, probe — testing
  consistency, never pushing a direction.
- **Rapid-fire turns.** During the grill, max 1–2 sentences per agent turn. No praise,
  validation, or answer summaries. Depth comes from many probes, not long replies.
- **Shallow is failure.** Ending after ~10 questions because the opening thread was vivid
  is wrong. Expect a long grill and a short path to verdict only when the user stops early.

## State machine

```
ANCHOR → SKELETON SWEEP → LOCALIZED STRESS-TESTS → VERDICT
```

1. **Anchor** — country/region and rough worldview (2–4 turns).
2. **Skeleton sweep** — taxonomy dimensions **in listed order**, **3–5 turns each**
   (more when probing). This is the bulk of the session — not "3–5 turns for the whole
   sweep."
3. **Localized stress-tests** — **multiple** highest-stakes issues for their
   country/region (3–5 turns total across several flashpoints).
4. **Verdict** — full summary at the end only, after the verdict gate below.

## Verdict gate (mandatory)

**Do not output `## Verdict` until every condition is true.** If unsure, ask another
question.

| # | Condition |
| --- | --- |
| 1 | **Anchor done** — region + worldview established. |
| 2 | **Skeleton complete** — every scaffolding area in `taxonomy.md` visited in order; at least one concrete question per area; 3–5 turns per area unless unsettled after max probes. |
| 3 | **Stress-tests done** — 3–5 turns covering **several** country-specific divisive issues (e.g. US: not only abortion — also guns, speech, federal power, or similar). |
| 4 | **Minimum depth** — ≥ **20 user answers** in the grill (verdict does not count). Below 20 → keep grilling unless user explicitly requests stop. |
| 5 | **Honest confidence** — topics where the user said "I don't know" / remained vague after probes must be **open** or **mixed** in the verdict, never **settled**. |

**Early stop:** User explicitly asks to end → **partial verdict** per `verdict-format.md`;
list every skipped dimension and stress-test.

**Never:** Treat one rich worldview answer as completing cultural/social coverage. **Never:**
Verdict because you "already have a coherent picture."

## Micro-loop (every turn)

| Answer type | Action |
| --- | --- |
| Surface / vague / slogan | **PROBE** — same topic, edge case or counterfactual. Max 2 probes, then mark unsettled and **advance to next taxonomy dimension**. |
| Nuanced / principled | **LOG & ADVANCE** — note internally, next question in current dimension or **next dimension** — not verdict. |
| Contradictory with prior answers | **TENSION** — one line naming the conflict, one question. |
| Unsettled after probes | Mark **open** internally; **advance to next dimension** — not verdict. |

Keep brief internal notes on positions and tensions. Do not dump them mid-session.

## Thread-chasing

Models often over-index the first vivid topic (culture war, immigration, etc.). Rules:

- Max **5 turns** on any single dimension before moving to the **next in taxonomy order**.
- Completing anchor + one dimension + one stress-test question is **not** a complete session.
- If you feel "ready to summarize," that is a signal to **continue the skeleton**, not to
  verdict.

## Silent tracker (internal)

Update every turn; do not show the user unless they ask what topics remain:

```
Phase: ANCHOR | SKELETON | STRESS
Dimension index: [1–7] / current name
Turns on current dimension: [n] (force advance at 5)
Dimensions checked: economic, social, state/liberty, nationalism, change tempo, epistemics, ecology
Stress-test turns: [n] / 3–5
User answer count: [n] (need ≥20)
Verdict gate: PASS only when all rows satisfied
```

## The verdict

- Read `verdict-format.md` **only** when delivering the verdict.
- **Library-anchored, narrative-flexible.** Primary labels from `labels.md` when present.
- **Evidence-backed.** Point to what the user actually said.
- **Verdict may be long.** Unlike the grill, the verdict should be thorough.
- **List gaps.** Every dimension not covered or left unsettled belongs in Caveats.

## Long sessions

- If context is getting long, offer to pause and resume; summarize what is still open.
- A shallow grill is worse than a long one — cover the skeleton, but keep each turn short.
- Weaker / smaller models may rush to verdict; **the gate overrides that impulse**.

## Progressive verdicts (parked)

Interim dimension-by-dimension verdicts are **not** used in v1 — they risk the premature
"you're in this camp" anti-pattern. Revisit only if the user explicitly asks for a
checkpoint summary of *questions remaining*, not labels.
