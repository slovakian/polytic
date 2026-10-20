# The framework (research brief)

Polytic's method for figuring out someone's politics must be **theoretically sound and
understandable**: grounded in established political theory and psychology, and
explainable to a user in plain language. This file is where that theory will live. It is
currently a **research brief**: the questions below are deliberately open and are meant
to be answered by dedicated deep research before anything downstream is designed.

It sits above `dimension-taxonomy.md` and `label-library.md`: those define _what_ we
measure and _what we call it_; this file defines _what a political belief system is_ and
_why measuring it this way is valid_.

## Open research questions

### 1. What model of a political belief system do we build on?

Candidate families (illustrative, not exhaustive):

- **Spatial / dimensional.** A person is a point on N axes. Easy to compare people;
  shallow on _why_ they hold their views.
- **Values-first.** Map underlying moral or value foundations (e.g. Moral Foundations
  Theory, Schwartz's basic values). Explains _why_; weaker on concrete policy.
- **Morphological.** Michael Freeden: an ideology is a configuration of contested
  political concepts (liberty, equality, authority, nation…) arranged as core, adjacent,
  and peripheral, each "decontested" in a particular way. Labels emerge as recognizable
  configurations.
- **Layered hybrid.** Values → principles → positions, with dimensions as the comparable
  coordinate system and every claim traceable to what the user said.

The research should recommend one (or a principled combination), with sources, and
explain how it fits the inviolable principles (`principles.md`).

### 2. What is the scholarly lineage of each dimension?

The dimensions are authored by the project owner (`dimension-taxonomy.md`). Open: should
each dimension cite the literature it comes from, and which established work supports
the candidate axes?

## Decisions waiting on this research

- **What a Finding contains** (position, confidence, salience, evidence, …) and so the
  shape of the case file (`architecture.md`).
- **The live profile view**: how what the AI has learned is shown to the user in real
  time.
- **Profiles and sharing**: a theoretical model for presenting someone's politics
  publicly, including the shareable format and whether colour encodes dimensions
  (ADR-0006).
- **The typed verdict schema** and a dedicated result view (ADR-0001).
- **Alignment** with thinkers and politicians (`roadmap.md`).

## How the method works today

Until the research lands, the grill follows `grilling-protocol.md` and the skill's v0
scaffolding areas. That process is a workable interview method, not yet the theory.
