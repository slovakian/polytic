# The framework

Polytic's model of a political belief system: what we record about a person, how their
views relate to established political vocabulary, and what makes two people comparable.
It sits above `dimension-taxonomy.md` and `label-library.md`: those hold _which_
Dimensions and Labels exist; this file defines what they are and how they work. Terms
are defined in `glossary.md`.

Decided in [Choose the political framework: how beliefs, dimensions, and labels work](https://github.com/slovakian/polytic/issues/17),
building on the literature survey in
[`docs/research/belief-system-models.md`](https://github.com/slovakian/polytic/blob/research/belief-system-models/docs/research/belief-system-models.md)
(branch `research/belief-system-models`). The core commitment is recorded in
`adrs/0008-layered-dimensional-belief-model.md`.

## The model in one paragraph

A person is mapped on a **fixed, shared set of Dimensions** in two layers: **Foundation
Dimensions** (the philosophy beneath politics) and **Political Dimensions** (what
society should do). On each Dimension they hold a **Belief**: where they land when the
two Poles collide, how hard each Pole pulls them, why, and what they said. **Tensions**
between Beliefs are recorded with the person's own reconciliation, not graded.
**Off-map Beliefs** catch what no Dimension fits. **Labels** match on both positions
and reasoning, are scoped to the part of the map they describe, and are never forced.
**Reference Figures** are encoded with the same model, so closeness is computed on what
matters most to the person.

This is the "layered morphological–spatial hybrid" the survey pointed to: spatial
Dimensions (Downs, CHES, V-Dem, MARPOR) for comparability; Freeden's morphology for
Reasons and Labels; Converse and Zaller for Epistemic State and ambivalence.

## Dimensions

- **Fixed and shared.** Everyone is measured on the same Dimensions; that is what makes
  comparison and Closest Thinkers possible. The Dimensions are the skeleton; Reasons are
  the flesh.
- **Comprehensive, not minimal.** The set is not kept small for simplicity. It should
  cover the established distinctions in political science, political theory, and
  political philosophy, so that eclectic and cross-pressured people are describable.
- **Academically grounded.** Every Dimension cites the literature it comes from.
- **Two layers.** Foundation Dimensions exist to explain Political Dimensions. They earn
  their place by bearing on politics (e.g. free will bears on desert, punishment, and
  market outcomes), which makes coherence probes and the Intellectual Bridge possible.
  Polytic is not a general philosophy test.
- **A Dimension is a trade-off between two Poles**, so it records which Pole wins when
  they collide _and_ how hard each pulls (see Beliefs).
- **Global skeleton, local flesh.** Dimensions are globally portable; the dilemmas that
  probe them adapt to the person's country and context.

Which Dimensions exist, in both layers, is **not yet decided**; it is authored with
dedicated research (`dimension-taxonomy.md`).

### "For me" vs. "for society"

A person's own ethic for living is a Foundation Belief. Political Dimensions always mean
"what should society, collectively or by law, do?" Whether the state should promote one
idea of the good life is itself a Political Dimension (Rawlsian neutrality vs.
perfectionism, e.g. Raz), and who should act (individual, community, state) is another
(subsidiarity). So "I'd never drink, but alcohol should be legal" is described
precisely, without tagging every Belief with a level.

## Beliefs

Each Belief records:

| Part                | What it captures                                                        |
| ------------------- | ----------------------------------------------------------------------- |
| **Position**        | Where the person lands when the two Poles collide.                      |
| **Pull**            | How strongly each Pole draws them, recorded separately for each Pole.   |
| **Epistemic State** | Settled, Torn, Indifferent, or Open — a fact about the person.          |
| **Coverage**        | Not asked, Thin, or Solid — a fact about the session, never the person. |
| **Reasons**         | What they mean by the contested concepts, and which values win.         |
| **Evidence**        | What they actually said. No Evidence, no Belief.                        |

**Why Pull is separate from Position.** Two people can land at the same Position, one
torn between two things they care about deeply and one indifferent to both. A single
slider makes them identical and averages real conflict into a fake centrist score
(Zaller 1992 on ambivalence; Cacioppo & Berntson's evaluative space model on positive
and negative evaluation as separate measures). How much a Dimension matters to someone
is its Pull; there is no separate salience field.

**Why Epistemic State is separate from Coverage.** A faint mark can mean "this person is torn or
indifferent" or "the session barely asked." Conflating them misrepresents the person in
one direction or wastes a real finding in the other.

### In principle vs. in practice

By default a Belief has one reading. When the person draws the distinction themselves,
it splits into an **in-principle** and an **in-practice** reading, joined by the
**Bridge** that makes them coherent (e.g. "determinism is true, but we must act as if we
choose"; "ideally no borders, but in this world we need them"). This is ideal vs.
non-ideal theory in politics, and the practical standpoint or pragmatism in
foundations. The grill tests whether the Bridge holds. Splits are never prompted on
every Dimension, because that would manufacture distinctions people don't hold.

## Tensions

When two Beliefs appear to conflict, the AI records a Tension and puts it to the person.
It ends in one of three states:

- **Reconciled**: the person gave a Bridge. It is recorded, named if it is a known
  position, and any objection the grill raised that went unanswered is noted without
  judgment.
- **Unresolved**: the person holds both and feels the pull. Recorded as a fact about
  them, never as a failure.
- **Not yet discussed**: spotted, but not taken up (including when the person chose
  "not now").

The person decides the status; the AI's job is to test the reconciliation, never to
overrule it. **There is no coherence score**: that would grade the person.

Raising a Tension must cost almost nothing: the person triages it in one click (fits,
because… / torn / not now), with free text for the reason. The "because" is always in
the person's own words.

## Off-map Beliefs

However comprehensive the Dimensions, some views will fit none of them. Forcing them
onto the nearest Dimension flattens them; inventing a Dimension for one person breaks
comparability. Instead they are recorded as **Off-map Beliefs**, in the person's own
words with Reasons and Evidence, shown on the Result Card (named when they are a known
tradition), and **excluded from comparison**. The Dimension set grows only by deliberate
revision by the project owner, never on the fly.

The AI records an Off-map Belief without interrupting, and surfaces it in a notice that
doesn't block the conversation and can be confirmed or corrected in one click, until the
person opts out ("don't ask again"). It stops to ask only when it genuinely can't tell
what the person meant, the same rule as for any Belief.

## Values and moral psychology

Moral Foundations (Haidt & Graham), Schwartz's basic values, and Rokeach are a
**toolkit behind the scenes**: they help design dilemmas that make values collide and
help describe Reasons in plain words. They are **never scored or shown** as a profile.
Value trade-offs already live in the Dimensions as Pull; psychological scores would
describe gut intuitions rather than articulated views, carry partisan baggage, and read
as diagnosis, which breaks "map, don't grade."

## Labels

A **Label** is a recognizable configuration, in Freeden's sense:

- its Positions on the Dimensions it cares about,
- which of those Dimensions are **central** to it (its core concepts),
- how it **reasons**: how it decontests the contested concepts (liberty as
  non-interference, as non-domination, as capability…).

A person matches a Label only when both positions and reasons fit: two people opposing
the same law for different reasons belong to different traditions. Matching positions
is arithmetic; matching reasons is AI judgment against the Label's written definition.

A person carries a **small, scoped set** of Labels, never one forced onto them:

- **Main**: fits their overall shape, only if one genuinely does. If none does, the
  Result Card says so plainly; that is itself an insight.
- **Area**: fits one region of their map.
- **Thin**: a thin-centered tradition (populism, nationalism, ecologism, feminism…)
  layered on a host.
- **Foundation**: fits a Foundation Dimension (e.g. compatibilism, pragmatism).

Which Labels exist is authored in `label-library.md`. How many appear and how they are
laid out is a Result Card design question.

## Comparison

Reference Figures are encoded with exactly the same model as users. Closeness between a
person and a Reference Figure:

- compares Positions Dimension by Dimension, **weighted by the person's Pull**, so what
  matters most to them counts most;
- **excludes guesses**: a Dimension counts only where both sides have more than Thin
  Coverage;
- **rewards shared Reasons**: the same Position for the same reasons is closer than the
  same Position for different reasons;
- compares **in-practice** readings by default where either side splits, noting a shared
  principle as a secondary insight;
- ignores Off-map Beliefs.

The **Divergence** shown for each Closest Thinker is the Dimension both care most about
where they are furthest apart. The exact formula is an implementation decision.

## Still open

- The Foundation and Political Dimension sets, and each one's lineage
  (`dimension-taxonomy.md`).
- The label library and the Reference Figure catalog, which depend on the Dimensions.
- How Beliefs, Tensions, and Labels are laid out on the Result Card and in a live view.
