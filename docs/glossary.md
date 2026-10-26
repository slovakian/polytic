# Glossary

Canonical terms for Polytic. Use these words, with these meanings, in docs, code, and UI
copy. The model behind the framework terms is explained in `framework.md`.

## Product

**Polytic**: The brand, and the short product name.

**Polytic Party**: The full product name and domain (polytic.party). Also the name of
the distributable skill.

**Skill**: The distributable prompt that runs the grill inside the user's own AI agent.

**Grill**: The interview itself: the AI asks, probes, and challenges the coherence of
the user's views. Also used as a verb ("grill me").

**Session**: One grill, from the first question to the Result Card (or until the user
stops).

**Case file**: Everything recorded about the user in a session: Beliefs, Off-map
Beliefs, Tensions, and Coverage.

**Result Card**: What the user receives at the end of a session: Labels, a narrative,
Tensions, and Closest Thinkers. A partial Result Card is delivered when the user ends
early.
_Avoid_: Verdict

**Living Profile**: A user's persistent political picture, built from their sessions over
time. Private by default.
_Avoid_: Profile (alone)

## The map of a person

**Dimension**: One fixed axis of the shared map, defined as a trade-off between two
Poles. Every Dimension is either a Foundation Dimension or a Political Dimension.
_Avoid_: Axis (in canonical text), scale, slider

**Pole**: One end of a Dimension.

**Foundation Dimension**: A Dimension about the philosophy beneath politics (what the
person takes to be real, knowable, or good, including their own ethic for living). It
exists to explain the person's Political Dimensions.

**Political Dimension**: A Dimension about what society should do, collectively or by
law.

**Belief**: A person's record on one Dimension: their Position, the Pull of each Pole,
their State, the Coverage behind it, their Reasons, and the Evidence. A Belief may split
into an in-principle and an in-practice reading joined by a Bridge.
_Avoid_: Finding, answer, score

**Position**: Where a person lands on a Dimension when its two Poles collide.

**Pull**: How strongly one Pole of a Dimension draws a person. How much a Dimension
matters to someone is the Pull on it, not a separate measure.
_Avoid_: Salience, weight (as user-facing terms)

**State**: What a Belief says about the person: **Settled** (strong Pull to one Pole),
**Torn** (strong Pull to both), **Indifferent** (considered, and matters little), or
**Open** (no view formed yet).

**Coverage**: How well the session has established a Belief: **Not asked**, **Thin**,
or **Solid**. It describes the session, never the person.
_Avoid_: Confidence

**Reason**: Why a person holds a Belief: what they mean by the contested concepts it
involves, and which values win when they collide.

**Evidence**: What the user actually said that supports a Belief: a quote or close
paraphrase. A Belief without Evidence does not exist.

**Current Belief**: A person's freshest Belief on a Dimension. The only kind treated as
active by default.

**Stale Belief**: A Belief superseded by a later one, kept in the person's history.

**Off-map Belief**: A view no Dimension captures, recorded in the person's own words with
its Reasons and Evidence. It is described, never compared.

**Tension**: Two Beliefs that appear to conflict. Its status is **Reconciled** (the
person gave a Bridge), **Unresolved** (the person holds both and feels the conflict), or
**Not yet discussed**.
_Avoid_: Clash, contradiction, inconsistency

**Bridge**: The person's reason that two things which look opposed fit together: the
in-principle and in-practice readings of a Belief, or the two sides of a Reconciled
Tension.

## Vocabulary and comparison

**Label**: An established term from the label library, defined by its Positions on the
Dimensions it cares about, which of those are central to it, and how it reasons. A
person carries Labels of four kinds: **Main** (fits their overall shape, only if one
genuinely does), **Area** (fits one region of their map), **Thin** (a thin-centered
tradition layered on top), and **Foundation** (fits a Foundation Dimension).
_Avoid_: Tag, type, quadrant

**Reference Figure**: A thinker or public figure encoded with the same model as a user,
so the two can be compared.
_Avoid_: Celebrity, persona

**Closest Thinkers**: The Reference Figures nearest a person, shown on the Result Card.

**Divergence**: The Dimension that a person and a Reference Figure both care most about
where their Positions are furthest apart.
