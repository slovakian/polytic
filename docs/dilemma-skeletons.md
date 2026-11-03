# Dilemma Skeletons (source-of-truth asset)

The pre-written cores of the grill's **Diagnostic Dilemmas**, 2–3 per Dimension. Each
Dimension's skeletons live in its handbook, `handbooks/dimension-<slug>/SKILL.md`,
which code loads for the Interviewer and the Note-taker from the Turn Brief
(`architecture.md`, "Reference material as skills"). This file holds the template and
the rules every skeleton is written to. The Interviewer
only **localises** a skeleton to the person's country. It never invents the collision
or either side's best argument, so neutrality is decided here, in reviewed text, not
live by a small model.

Format settled in
[Write the Dilemma Skeletons for the Core Dimensions](https://github.com/slovakian/polytic/issues/50),
which also wrote the 57 Core skeletons and the fixed medical-transition dilemma. The
Dimensions, their Poles, and their facets are in `dimension-taxonomy.md`; terms are in
`glossary.md`.

## The skeleton

Every skeleton follows this template exactly, so it can later be converted into
structured data mechanically (ADR-0005; converting it is implementation work).

```markdown
### <Skeleton name>

- **Tests:** <exact Dimension name>: _<Pole>_ ↔ _<Pole>_
- **Also touches:** <exact Dimension names an answer may also reveal> | —
- **Facet:** <the facet or sub-question this skeleton probes>
- **Scenario:** <2–4 sentences, no country, no real people, ending in the question>
- **Localise:** <what may be swapped for local detail; what must never change>
- **Case for _<Pole>_:** <2–3 sentences: the holders' strongest argument>
- **Case for _<Pole>_:** <the same length and strength>
- **Turn the dial:**
  - **Toward _<Pole>_:** <a variant that makes this Pole more tempting>
  - **Toward _<Pole>_:** <a variant that makes the other Pole more tempting>
- **Rules:** <special handling> | —
```

What each field is for:

- **Tests** names the one Dimension the skeleton is for, with its Poles in the
  taxonomy's order (which means nothing, `dimension-taxonomy.md`).
- **Also touches** tells the Note-taker which other Dimensions an answer may reveal,
  so it records evidence there too. It is never a reason to switch topic.
- **Facet** spreads a Dimension's skeletons across its facets, so a second skeleton
  never re-asks the first.
- **Scenario** is the case put to the person. It must read as written when the person
  chose "Prefer not to say" in the country picker.
- **Localise** is the only freedom the Interviewer has (see "Localising" below).
- **The two Cases** are what the Interviewer draws on when the person asks for the
  other side or the trade-offs ("Steelman both sides", "Unpack the trade-offs"), or
  when an answer leans on a caricature. It paraphrases them; it never weakens one.
- **Turn the dial** gives two variants, one toward each Pole. They are the only
  source for "Push me harder", and they find a Position's threshold: where the person
  switches sides says more than a single answer. Use the variant that pushes
  _against_ the person's answer.
- **Rules** carries anything special: fixed dilemmas, how an answer is recorded across
  Dimensions, a standing rule from the taxonomy.

The template leaves out two things on purpose. **What an answer means** is the
Note-taker's job, from the Dimension's definition. **The opening question's wording**
is the Interviewer's.

## Writing rules

1. **Foundation skeletons ask what is true or deserved; Political ones ask what should
   be done.** A Foundation scenario asks for a judgement about a case (who deserves
   what, whether this being counts, what explains this outcome, whom you would trust)
   and contains no law, policy, or government action. A Political scenario asks what
   the law, state, or public institutions should do. This keeps each answer on its own
   layer, so Foundation-to-Political Tensions ("it's killing, but it should be legal")
   can show up (`framework.md`).
2. **Both sides must stay open.** The scenario's facts never settle the question: no
   stipulated failure, no villain, no detail that only one side can use. If a
   reasonable holder of either Pole would say "that's rigged", it is rewritten.
3. **Each Case is its holders' own best argument.** It is written in their vocabulary
   (the taxonomy's self-chosen Pole names, never critics' terms), states what that side
   is protecting, and owns the cost it accepts. The two Cases are the same length,
   within a sentence. A Case never answers or mocks the other.
4. **Every Pole gets its strongest case, however contested.** _Hierarchy is natural_,
   _Community control over membership_, and _Life itself is inviolable_ are steelmanned
   with the same care as their opposites (`principles.md` §1, §3). Polytic's own view
   never appears.
5. **No country, no real people, no current events.** Scenarios use generic
   institutions ("the central bank", "a city") and invented people. Historical
   reference is allowed only where a rule below says so.
6. **Three per Core Dimension, two or three for the rest.** A Dimension's skeletons
   probe different facets and settings. Where possible, one is close to ordinary life
   and one is at the hard edge.
7. **Direction-neutral where the Dimension is.** On _Tempo of change_ and any other
   Dimension the taxonomy calls direction-neutral, the skeletons mix directions (an
   incremental progressive, a radical restorationist), so speed is not confused with
   aim.
8. **Names are unique across the whole set**, short, and concrete ("The two siblings",
   not "Fortune dilemma 1"), so code and the Case File can name a skeleton and avoid
   reusing one in a Session.
9. **Dial variants change one thing.** Each adds one fact or raises one stake, and the
   two variants push in opposite directions by about the same amount.

## Localising

The Interviewer dresses a skeleton in the person's country, and nothing more.

- **May:** swap generic institutions, offices, places, currencies, amounts, and
  occupations for local equivalents; scale numbers to the country; mention, neutrally
  and as a fact, that the scenario echoes a real local debate or the country's current
  law.
- **May not:** change the collision; add, remove, or change a fact that one side
  relies on; change or weaken either Case; name a living politician, party, or
  movement as a side; or use either side's loaded terms.
- **Prefer not to say:** the skeleton is used as written.

## Fixed dilemmas

Two Issue dilemmas are fixed by name in `dimension-taxonomy.md` ("Diagnostic Dilemmas
written into the set") and are used as written there:

- **Abortion** is the skeleton _The unplanned pregnancy_ under _Life and body_
  (`handbooks/dimension-life-and-body/`).
- **Medical transition for minors** is the skeleton _The distressed fifteen-year-old_
  under _Sex and gender identity_ (`handbooks/dimension-sex-and-gender-identity/`). It
  is the one non-Core skeleton written in the Core batch. Its Rules make the grill reach
  it when gender comes up on either _Sex and gender_ (Foundation) or _Sex and gender
  identity_ (Political).

## Standing rules from the taxonomy

- **Force in domestic politics:** skeletons are historical or abstract, never calls to
  action (`principles.md` §1). They may name historical cases; their **Localise** is
  "—", because no skeleton is ever moved into the person's present-day country.

## Dimension handbooks

Skeletons live in each Dimension's handbook, `handbooks/dimension-<slug>/SKILL.md`, the
layout chosen in
[Write the grill's move and tone handbooks](https://github.com/slovakian/polytic/issues/51).
The slug is the exact Dimension name in lower case, with punctuation dropped ("vs."
becomes "vs") and spaces turned into hyphens: `dimension-popular-judgment-vs-expertise`.
Each handbook has, in order:

1. **Frontmatter:** `name` and a `description` that says when to load it.
2. **The Dimension:** its Poles, definition, facets, and note, copied from
   `dimension-taxonomy.md`, which wins on any difference.
3. **Using these skeletons:** the layer rule (Foundation or Political), the localising
   limits, and how to "Push me harder", plus any notes for this Dimension.
4. **Dilemma Skeletons:** the skeletons, each to the template above.

A handbook is self-contained, because a small model reads only what code loads and
cannot follow a link to this file.

**Written so far:** the 19 Core Dimensions, three skeletons each, plus _Sex and gender
identity_ with its fixed dilemma only. The non-Core skeletons are written in later
batches, to this format.
