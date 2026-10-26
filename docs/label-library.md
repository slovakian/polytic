# Label library (source-of-truth asset)

The label library is the curated catalog of political labels that Result Cards anchor to.
Political thinkers have spent a very long time naming the many distinct kinds of
politics; Polytic draws on that established vocabulary rather than reinventing it. It is
authored intentionally and versioned in this repo, alongside `dimension-taxonomy.md`.

## The model: library-anchored, narrative-flexible

- **Anchored.** A Result Card's _primary_ labels must come from this curated library, with
  evidence from the user's answers. This keeps Result Cards consistent across runs and
  comparable across people.
- **Flexible.** The surrounding description is free prose, and the AI may coin phrasing
  that best fits an individual — but only as flavor. Coined terms never replace the
  canonical library label.
- **Why anchored matters.** Alignment scoring (comparing a user to thinkers,
  politicians, personalities) only works if everyone is described in the _same_
  vocabulary. Pure free coinage would make comparison impossible.

## What each label entry should carry

What a Label is, and how a person is matched to it, is defined in `framework.md`.

- The term and a clear definition.
- Whether it is thick, thin-centered, or a Foundation label.
- Its Positions on the Dimensions it cares about (links to `dimension-taxonomy.md`).
- Which of those Dimensions are central to it.
- How it reasons: how it understands the contested concepts it relies on.
- Relationships to neighboring labels (parent/child, adjacent, opposed).

## Status: TODO — compile the real catalog

The actual catalog is **not yet written**. It should be compiled from the established
political-science vocabulary (e.g. the long list of -isms and named tendencies) by the
project owner. Agents should frame and structure it, not fabricate the canonical set.

When compiled, this file (or a structured data file it points to) becomes the canonical
source of truth, and is also the substrate later used to tag thinkers/politicians for
alignment scoring.
