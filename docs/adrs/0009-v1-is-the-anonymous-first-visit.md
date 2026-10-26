---
status: accepted
supersedes: 0001
---

# v1 is the anonymous first visit, with nothing stored on our servers

Stage 1 (`docs/roadmap.md`) includes accounts, Living Profiles, return visits, belief
freshness, and shareable links. **v1, the first real build, is only the first visit
done very well:** anyone grills in the browser with no login and gets a Result. Every
other Stage 1 item comes after v1.

We drew the line here because the Result is the payoff, and v1 already has to author
the Dimensions, the label library, and a hand-encoded Reference Figure catalog before
the Result is worth having. Accounts would also mean storing people's political
Beliefs on our servers and rewriting the privacy promise, which is wasted work if the
first visit isn't good.

**No share links in v1**, even though they would help the product spread. A link needs
the Result stored on a server, and v1 keeps ADR-0004 exactly as it is: nothing about a
person is stored on our servers. The Result lives in the browser until the person
starts over, and it spreads by screenshot, so it ships with a "Save as image" button.

## Considered options

- **All of Stage 1 in v1.** Rejected: it takes much longer and puts sensitive data on
  our servers before the core experience is proven.
- **Store the Result only when the person clicks Share.** Rejected for v1. It is the
  likely design once share links arrive.
- **Encode the Result into the link itself.** Rejected: it gives ugly links with no
  preview image when pasted.

Supersedes ADR-0001, which described the earlier experiment (the Verdict sent as a
chat message, the distributable skill).
