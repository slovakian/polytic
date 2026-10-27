# Polytic

Canonical domain language for Polytic: what it measures, how it interacts with users,
and the artifacts it produces. Use these words, with these meanings, in docs, code, and
UI copy. Keep this file free of implementation mechanics; the model behind the
worldview terms is explained in `framework.md`.

## Core Domain Language

**Polytic**:
The product and brand for high-resolution political self-understanding, comparative
mapping, and structured discourse.

**Polytic Party**:
The full product name and domain (polytic.party).

**Worldview**:
A person's enduring system of political values, conceptual definitions, epistemic
commitments, and institutional principles — the underlying object Polytic maps, as
distinct from ephemeral party loyalty or current-cycle candidate preferences.
_Avoid_: Partisan affiliation, voting intention

**Clinical Agnosticism**:
Polytic's persona and epistemic stance: that of a stoic, friendly academic or clinician
with no personal morals or partisan bias, who never judges or excludes any belief while
objectively naming the structural, moral, and epistemic properties (including
irrationality or anti-empiricism) of political philosophies without defensive
"both-sides" relativism.
_Avoid_: Neutrality hedging, both-sidesism, safety alignment

**Personal Mirror**:
The first half of Polytic's core payoff: articulating a user's own scattered intuitions,
priorities, and tensions back to them with surgical clarity.

**Intellectual Bridge**:
The second half of Polytic's core payoff: connecting a user's personal worldview to the
established vocabulary, traditions, and thinkers of political philosophy and political
science.

## Elicitation

**Elicitation Mode**:
An interaction format through which Polytic draws out evidence of a user's **Worldview**
— decoupled from the **Worldview Model** so multiple formats (starting with **Socratic
Grilling**, and later dilemma decks, claim reactions, or debates) can feed the same
model.

**Socratic Grilling**:
Polytic's primary **Elicitation Mode**: a live, clinically neutral conversation anchored
by concrete **Diagnostic Dilemmas** that opens on a topic the user cares about, bridges
across Dimensions using the user's own stated principles, and probes for coherence.
Informally, "the grill."
_Avoid_: Quiz, survey, debate

**Diagnostic Dilemma**:
A concrete, real-world policy flashpoint or counterfactual trade-off used as an
instrument to stress-test where a user's abstract political principles hold or collide
in practice.
_Avoid_: Quiz item, survey question, ballot endorsement

**Issue**:
A concrete, often country-specific topic (abortion, guns, drugs, youth gender medicine)
where several Dimensions collide. Issues are probed with Diagnostic Dilemmas and
recorded on the Dimensions they test; they are never Dimensions themselves.
_Avoid_: Topic dimension, policy axis

**Micro-Mirror**:
A crisp, one-sentence reflection delivered as the AI transitions between topics,
articulating the exact principle, dividing line, or tension the user just expressed
without assigning a premature ideological label.

**Session**:
A single grilling conversation — either an initial broad diagnostic or a focused
follow-up deep dive — that probes the user's worldview and produces or updates their
Result and Living Profile.
_Avoid_: Quiz attempt, survey run

## The Worldview Model

**Worldview Model**:
Polytic's record of a person's Worldview — their Beliefs, Off-map Beliefs, and Tensions
— independent of the Elicitation Mode that produced it.

**Dimension**:
One fixed axis of the shared map, defined as a trade-off between two Poles. Every
Dimension is either a Foundation Dimension or a Political Dimension.
_Avoid_: Axis (in canonical text), scale, slider

**Pole**:
One end of a Dimension.

**Core Dimension**:
One of the small set of Dimensions a first visit's skeleton sweep works through, so that
any two maps share enough Dimensions to compare. Every other Dimension is equally fixed
and shared, reached when the person raises it or deepens.
_Avoid_: Main Dimension, required question

**Foundation Dimension**:
A Dimension about the philosophy beneath politics (what the person takes to be real,
knowable, or good, including their own ethic for living). It exists to explain the
person's Political Dimensions.

**Political Dimension**:
A Dimension about what society should do, collectively or by law.

**Belief**:
A person's record on one Dimension: their Position, the Pull of each Pole, their
Epistemic State, the Coverage behind it, their Reasons, and the Evidence. A Belief may
split into an in-principle and an in-practice reading joined by a Bridge.
_Avoid_: Finding, answer, score

**Position**:
Where a person lands on a Dimension when its two Poles collide.

**Pull**:
How strongly one Pole of a Dimension draws a person. How much a Dimension matters to
someone is the Pull on it, not a separate measure.
_Avoid_: Salience, weight (as user-facing terms)

**Epistemic State**:
What a Belief says about the person: **Settled** (strong Pull to one Pole), **Torn**
(strong Pull to both; cross-pressured), **Indifferent** (considered, and matters
little), or **Open** (no view formed yet).
_Avoid_: Centrist average, neutral score, Ambivalent (use Torn)

**Issue Public**:
A region of a person's map where their Beliefs are Settled with strong Pull — where
they hold crystallized, internally constrained convictions.

**Coverage**:
How well the session has established a Belief: **Not asked**, **Thin**, or **Solid**.
It describes the session, never the person.
_Avoid_: Confidence

**Reason**:
Why a person holds a Belief: what they mean by the contested concepts it involves, and
which values win when they collide.

**Evidence**:
What the user actually said that supports a Belief: a quote or close paraphrase. A
Belief without Evidence does not exist.

**Off-map Belief**:
A view no Dimension captures, recorded in the person's own words with its Reasons and
Evidence. It is described, never compared.

**Tension**:
Two of a person's Beliefs that appear to conflict under pressure — surfaced and named
by Polytic without nudging the user toward a resolution. Its status is **Reconciled**
(the person gave a Bridge), **Unresolved** (the person holds both and feels the
conflict), or **Not yet discussed**.
_Avoid_: Clash, contradiction, error, wrong answer, inconsistency penalty

**Bridge**:
The person's reason that two things which look opposed fit together: the in-principle
and in-practice readings of a Belief, or the two sides of a Reconciled Tension.

## Lifecycle & Artifacts

**Result**:
The page a person gets from a session: a striking, shareable picture of their
Worldview built to be screenshotted, presenting their Labels, a short narrative,
key Tensions, and Closest Thinkers. It is a highlight, not an exhaustive report. The
first time it plays is "the reveal", which is a moment, not a separate thing.
_Avoid_: Result Card, Verdict, score report, badge

**Living Profile**:
A user's persistent, evolving political map accumulated across sessions. It is claimed
optionally after a user's first session, is private by default (with an explicit
invitation to make it public), and always reflects the user's Current Beliefs while
retaining Stale Beliefs as historical memory.
_Avoid_: Static profile, immutable snapshot

**Current Belief**:
A person's freshest Belief on a Dimension. Only Current Beliefs are used by default when
evaluating a user's active worldview or when agents query the user's beliefs.

**Stale Belief**:
A Belief superseded by a newer, conflicting or updated Belief in a later session. Stale
Beliefs are preserved in the user's history to track intellectual evolution but are
excluded by default from active profile queries.
_Avoid_: Deleted belief, overwritten answer

## Vocabulary & Comparison

**Label**:
An established term from the label library, defined by its Positions on the Dimensions
it cares about, which of those are central to it, and how it reasons. Each Label has one
fixed **type**: **Ideology** (a full tradition that can describe a whole map), **Thin** (a
thin-centered tradition that rides on a host Ideology), or **Foundation** (a named
position on Foundation Dimensions). On a person's Result an Ideology Label is held as
**Main** (it fits their overall shape, only if one genuinely does) or **Area** (it fits
one region of their map); that scope belongs to the match, not to the Label. Thin and
Foundation Labels are never Main.
_Avoid_: Tag, type (for Main/Area), quadrant, thick (say Ideology)

**Unlisted Tradition**:
An established political tradition the AI recognizes in a person but that is not in the
label library. The Result's narrative may name it, marked as the AI's suggestion rather
than Polytic's. It is never shown as a Label and is excluded from comparison. It must be
a real, established term, never a coinage presented as a tradition.
_Avoid_: Custom label, coined label, AI label

**Reference Figure**:
A historical or contemporary political thinker, philosopher, or public figure whose
worldview is encoded with the same Worldview Model as a user (hand-encoded in Stage 1,
agent-researched and expanded in later stages) so users can see their Closest Thinkers.
_Avoid_: Celebrity match, mascot

**Closest Thinkers**:
The Reference Figures nearest a person, shown on the Result with why they align
and their Divergence.

**Divergence**:
The Dimension that a person and a Reference Figure both care most about where their
Positions are furthest apart.
