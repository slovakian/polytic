# Survey of Political Science and Psychology Models of Belief Systems and Multi-Axis Taxonomies

> **Wayfinder Research Ticket:** [Survey political science and psychology models of belief systems and multi-axis taxonomies](https://github.com/slovakian/polytic/issues/14)
> **Parent Map:** [Polytic greenfield vision, framework, and v1 product specification](https://github.com/slovakian/polytic/issues/12)

## Executive Summary

How do individuals actually hold political beliefs, and how should an interactive system structure, probe, and classify those beliefs without reducing people to crude cartoons? Across sixty years of empirical political science, conceptual political theory, and moral psychology, four major modeling paradigms have emerged:

1. **Belief-System Structure & Coherence Models** (Converse, Zaller, Lakoff, Jost; refined by Federico, Malka, Johnston, and Lavine) demonstrate that ordinary citizens rarely possess monolithic, textbook ideologies. Instead, individuals hold *domain-specific* convictions ("issue publics"), experience genuine internal *ambivalence* across competing considerations, and vary dramatically in how they package underlying psychological dispositions into concrete policy stances.
2. **Morphological & Conceptual Models of Ideology** (Gallie, Freeden) reject the view of ideologies as scalar points or rigid dogmas. Instead, an ideology is a *modular configuration* of essentially contested concepts (`liberty`, `equality`, `authority`, `democracy`, `nation`) arranged into **core**, **adjacent**, and **peripheral** tiers, where each ideology is defined by how it **decontests** (specifies the meaning of) these shared terms by linking them to neighboring concepts.
3. **Values & Moral Psychology Foundations** (Rokeach, Schwartz, Haidt & Graham) locate political disagreement upstream of policy in trans-situational motivational goals (Schwartz's circular continuum of 10/19 basic values; Rokeach's terminal vs. instrumental values) and intuitive moral receptors (Haidt & Graham's six Moral Foundations). These frameworks explain *why* a belief feels non-negotiable, though they struggle to predict concrete institutional or policy choices in isolation.
4. **Spatial & Multi-Dimensional Empirical Taxonomies** (Downs, Rabinowitz & Macdonald, MARPOR/RILE, CHES/GAL-TAN, V-Dem, Inglehart–Welzel WVS, Pew Political Typology, and public multi-axis instruments like 8values, 9Axes, Vote Compass, and Filteries) provide comparable coordinate spaces and empirical typologies. While essential for cross-person comparison and alignment math, static spatial quizzes suffer from fatal structural flaws: Likert-scale ambiguity (conflating indifference with high-salience ambivalence), conflation of *justification* with *conclusion*, and the "nonsense combination" problem when assigning ideological labels via pure geometric distance.

**Core Recommendation for Polytic:**
A single-paradigm model cannot satisfy Polytic's requirements. Pure spatial models flatten the *why* and misclassify coincidental coordinate matches; pure values models miss concrete institutional politics; pure morphological models lack a shared coordinate space for alignment scoring. Polytic should adopt a **Layered Morphological–Spatial Hybrid**:
- **Fixed Dimensional Skeleton (Spatial Coordinate Layer):** A curated multi-axis coordinate system grounded in comparative political science (economic organization, state authority/liberty, socio-cultural GAL-TAN, national/cosmopolitan boundary, institutional/epistemic governance, change tempo, and ecology) that tracks **position, salience, confidence, and directional intensity**.
- **Vertical Justification Chain (Values → Principles/Decontestations → Policy Positions):** Every finding links a concrete stance to how the user *decontests* contested concepts (Freeden) and which underlying values or moral foundations they prioritize when forced into trade-offs (Schwartz/Rokeach).
- **Morphological Label Matching:** Political labels in the label library are modeled not merely as bounding boxes in $N$-dimensional space, but as **core + adjacent + peripheral conceptual configurations** with explicit decontestation signatures. Verdicts surface both the user's primary ideological home(s) and their unresolved **tensions** (ambivalence and cross-pressures) as first-class features of their political portrait.

---

## 1. Belief-System Structure, Constraint, and Coherence

Before designing a taxonomy of political axes, we must account for how human beings cognitively store, retrieve, and organize political attitudes. The foundational literature in public opinion and political psychology centers on a sixty-year debate over whether citizens hold structured belief systems at all.

### 1.1 Philip Converse (1964): Constraint, Levels of Conceptualization, Non-Attitudes, and Issue Publics

In his foundational chapter **"The Nature of Belief Systems in Mass Publics"** (published in David E. Apter, ed., *Ideology and Discontent*, Free Press, 1964, pp. 206–261), Philip E. Converse defined a **belief system** as:

> *"a configuration of ideas and attitudes in which the elements are bound together by some form of constraint or functional interdependence."* (Converse, 1964, p. 207)

Converse distinguished between two forms of **constraint**:
- **Static constraint:** The success with which we can predict an individual's position on one issue (e.g., market regulation) given their initial position on another (e.g., civil rights or foreign intervention).
- **Dynamic constraint:** The probability that a change in the perceived status of one belief element psychologically forces a compensating change in other elements within the configuration.

Analyzing panel data from the University of Michigan Survey Research Center (1956–1960 American National Election Studies), Converse established four empirical pillars that remain central to political behavior research:

1. **The Elite–Mass Chasm in Constraint:** Political elites (congressional candidates, party activists) exhibited high inter-item correlations across domestic and foreign policy domains ($\bar{\tau} \approx 0.53$), whereas the mass public exhibited near-zero cross-domain constraint ($\bar{\tau} \approx 0.11$). Knowing a citizen's stance on one issue provided virtually no leverage for predicting their stance on another.
2. **The Five Levels of Conceptualization:** Using open-ended evaluations of the political parties and candidates, Converse (1964, pp. 215–219; building on Campbell, Converse, Miller, & Stokes, *The American Voter*, 1960) classified the electorate into five cognitive strata:
   - **Level A — Ideologues (~2.5–3.5% of electorate):** Actively rely on a relatively abstract and far-reaching conceptual dimension (such as the liberal–conservative continuum) as a yardstick to evaluate political objects and connect disparate issues ("what goes with what").
   - **Level B — Near-Ideologues (~9–12%):** Mention abstract ideological concepts or labels peripherally, but do not rely on them systematically or show a tenuous grasp of their broader implications.
   - **Level C — Group Interest (~42–45%):** The modal category. Evaluate politics not through abstract philosophy, but through concrete social groups ("good for working people," "favors big business," "helps farmers").
   - **Level D — Nature of the Times (~22–24%):** Evaluate parties and leaders through immediate, tangible conditions (war, inflation, prosperity, personal economic luck) without programmatic or group-based abstraction.
   - **Level E — No Issue Content (~17.5–22.5%):** Party loyalty or candidate evaluation driven entirely by personal traits, celebrity, habit, or zero discernible policy content.
3. **Non-Attitudes and Response Instability:** Across the 1956–1958–1960 panel waves, individual responses to identical policy questions fluctuated so wildly that Converse modeled the population via a "black-and-white" turnover model: a small fraction of citizens held perfectly stable convictions, while the remainder possessed **non-attitudes**—inventing random, polite doorstep answers on the spot to satisfy survey interviewers.
4. **Issue Publics:** Crucially, Converse did *not* argue that ordinary citizens are irrational or incapable of coherent thought. Instead, he introduced **issue publics** (Converse, 1964, pp. 245–246): because information costs are high, individuals only invest cognitive effort in the narrow subset of policy domains that directly touch their lives, livelihoods, or core identities. Within their personal issue publics, citizens exhibit high stability, deep factual grounding, and tight internal coherence—even if they lack global constraint across the entire elite agenda.

### 1.2 John Zaller (1992): Ambivalence, Considerations, and the Receive–Accept–Sample (RAS) Model

Where Converse interpreted response instability as the absence of attitudes ("non-attitudes"), John R. Zaller offered a fundamental cognitive reformulation in ***The Nature and Origins of Mass Opinion*** (Cambridge University Press, 1992; see also Zaller & Feldman, 1992, *American Journal of Political Science*, 36(3), 579–616).

Zaller's central premise is that **most citizens are internally ambivalent**, not empty-headed. Instead of holding a single pre-computed "true attitude" on each political question, individuals store a loose repertoire of **considerations**—Defined as *"any reason that might induce an individual to decide a political issue one way or the other"* (Zaller, 1992, p. 40), combining cognition and affect. Because human beings hold multiple, often conflicting values (e.g., valuing both individual privacy and collective security, or both earned merit and humanitarian aid), their mental storehouse contains opposing considerations on most complex topics.

Zaller formalized how elites, media discourse, and individual predispositions interact via **Four Axioms of the Receive–Accept–Sample (RAS) Model** (Zaller, 1992, pp. 42–51):

- **A1 — The Reception Axiom:** *"The greater a person's level of cognitive engagement with an issue, the more likely he or she is to be exposed to and comprehend—in a word, to receive—political messages concerning that issue."*
- **A2 — The Resistance Axiom:** *"People tend to resist arguments that are inconsistent with their political predispositions, but they do so only to the extent that they possess the contextual information necessary to perceive a relationship between the message and their predispositions."*
- **A3 — The Accessibility Axiom:** *"The more recently a consideration has been called to mind or thought about, the less time it takes to retrieve that consideration and related considerations from memory and bring them to the top of the head for use."*
- **A4 — The Response Axiom:** *"Individuals answer survey questions by averaging across the considerations that happen to be immediately salient or accessible to them."*

**Implications for Static Surveys vs. Interactive Grilling:**
In Zaller's framework, a fixed multiple-choice survey question does not measure a fixed latent trait; it captures a stochastic **"top-of-the-head" snapshot** biased heavily by the framing of the question itself and whichever considerations were most recently primed. However, when an interviewer actively introduces counter-considerations, probes trade-offs, and asks the respondent to weigh competing reasons together, the respondent is forced to move from passive top-of-the-head sampling to **active integration and reconciliation** of their underlying considerations.

### 1.3 George Lakoff (1996 / 2002): Conceptual Metaphors and Moral Worldviews

In ***Moral Politics: How Liberals and Conservatives Think*** (University of Chicago Press, 1996; 2nd ed. 2002), cognitive linguist George Lakoff challenged Converse's view that cross-issue packages are merely arbitrary elite conventions. Asking why seemingly unrelated positions (e.g., opposing environmental regulation, supporting strict criminal sentencing, opposing progressive taxation, and favoring traditional gender roles) co-occur reliably in American conservatism—and why their opposites co-occur in liberalism—Lakoff argued that political ideologies are organized around **unconscious conceptual metaphors of moral authority**.

Specifically, Lakoff identified the **Nation-as-Family metaphor**, which maps governance onto two competing models of idealized family life:

1. **The Strict Father Morality (Conservative Worldview):**
   - **Core Assumptions:** The world is inherently dangerous and competitive; children are born undisciplined and must be made moral through clear rules, legitimate authority, and punishment/reward that builds internal **self-discipline** and **self-reliance**.
   - **Moral Hierarchy:** Moral strength (self-control against internal desires and external threats) is the supreme virtue. Once children reach adulthood, the parent does not meddle; rewards in a free market reflect moral discipline, while state welfare is viewed as "coddling" that destroys moral character and fosters dependency.
2. **The Nurturant Parent Morality (Progressive/Liberal Worldview):**
   - **Core Assumptions:** Children become responsible and self-disciplined not through fear of punishment, but through being cared for, respected, and nourished by empathetic parents, which teaches them to empathize with and care for others.
   - **Moral Priority:** Empathy, open two-way communication, protection from systemic harm (pollution, exploitation, poverty, disease), and human fulfillment are the foundational duties of legitimate authority.

Crucially for Polytic, Lakoff also introduced the concept of **"Biconceptuals"** (expanded in *The Political Mind*, 2008): most citizens are not pure Strict Fathers or pure Nurturant Parents. Instead, they possess *both* neural/conceptual circuits and apply them to different domains—for instance, applying Strict Father logic to fiscal policy or criminal justice while applying Nurturant Parent logic to healthcare, education, or environmental stewardship. What looks like "incoherence" on a 1D left–right line is often domain-specific biconceptualism.

### 1.4 John Jost et al. (2003) and the Motivated Social Cognition Debate

In a landmark meta-analysis across 88 samples from 12 countries ($N = 22,818$), John T. Jost, Jack Glaser, Arie W. Kruglanski, and Frank J. Sulloway (**"Political Conservatism as Motivated Social Cognition,"** *Psychological Bulletin*, 2003, 129(3), 339–375) synthesized personality and social psychology research to explain why individuals gravitate toward left- or right-wing belief systems.

Jost et al. decomposed ideological orientation into two functional components that historically bundle together on the left–right spectrum:
1. **Attitudes toward change:** *Advocating vs. resisting social and institutional change (tradition).*
2. **Attitudes toward inequality:** *Rejecting vs. accepting/justifying hierarchy and inequality.*

Under their **Motivated Social Cognition** framework, ideological beliefs serve underlying psychological needs across three domains (further elaborated in Jost, Federico, & Napier, 2009, *Annual Review of Political Science*, 12, 307–337):
- **Epistemic motives:** Need for cognitive closure, intolerance of ambiguity, preference for order and structure, vs. openness to experience and cognitive complexity.
- **Existential motives:** Threat sensitivity, loss aversion, fear of social breakdown, and management of mortality/security anxieties.
- **Relational motives:** Desire for shared reality, in-group solidarity, and system justification.

**The Contextualist Critique (Malka, Federico, Johnston, & Lavine):**
Subsequent political psychology has sharply refined Jost et al.'s asymmetry thesis, proving that psychological dispositions do *not* map onto economic policy in a universal, context-free way:
- **Christopher D. Johnston, Howard G. Lavine, & Christopher M. Federico** (***Open versus Closed: Personality, Identity, and the Politics of Redistribution***, Cambridge University Press, 2017) and **Ariel Malka, CJ Soto, Michael Inzlicht, & Yphtach Lelkes** (2014, *Journal of Personality and Social Psychology*, 106(6), 1031–1051; see also Federico & Malka, 2018, *Advances in Political Psychology*, 39, 3–48) demonstrated that high need for security and certainty consistently predicts **cultural conservatism** (tradition, order, national cohesion).
- However, among the majority of citizens with low-to-moderate political engagement, those same security/certainty needs naturally predict **left-wing, protectionist economic views** (support for social insurance, economic redistribution, and state safety nets against market precarity).
- Only among **highly engaged partisans** in Anglo-American party systems—where conservative elites bundle cultural traditionalism with free-market capitalism—do citizens with "closed" psychological dispositions adopt right-wing laissez-faire economics, and they do so as an expressive act of partisan identity rather than a natural expression of their need for security.

---

## 2. Morphological & Conceptual Models of Ideology

While behavioral political science (Converse, Zaller) studies how attitudes correlate in surveys, conceptual political theory asks: *What is an ideology made of, and how do established political traditions like liberalism, socialism, conservatism, libertarianism, or green politics relate to one another?* The definitive framework in contemporary political theory is **Michael Freeden's Morphological Approach**.

### 2.1 W. B. Gallie (1956): Essentially Contested Concepts

Freeden builds upon philosopher W. B. Gallie's classic lecture, **"Essentially Contested Concepts"** (*Proceedings of the Aristotelian Society*, New Series, Vol. 56, 1955–1956, pp. 167–198). Gallie demonstrated that foundational normative concepts in politics—such as `democracy`, `social justice`, `liberty`, `equality`, `power`, and `authority`—possess seven structural features that guarantee perpetual dispute:

1. They are **appraisive** (normatively valued achievements).
2. They are **internally complex** (comprising multiple competing sub-criteria).
3. They are **variously describable** (reasonable actors rank the sub-criteria in fundamentally different orders).
4. They are **open** in texture (modifying their application as historical circumstances change).
5. They are used both aggressively and defensively across rival camps, each recognizing that its own usage is contested by others.

Because `liberty` simultaneously contains sub-components like *absence of coercion* (negative liberty; Isaiah Berlin, 1958), *collective self-government*, and *material capability to act* (positive/republican liberty), no purely logical or dictionary definition can ever settle which sub-component is the "true" meaning of liberty.

### 2.2 Michael Freeden (1996): Core, Adjacent, and Peripheral Concepts & Decontestation

In ***Ideologies and Political Theory: A Conceptual Approach*** ( Clarendon Press / Oxford University Press, 1996; see also *Ideology: A Very Short Introduction*, 2003, and Freeden, Sargent, & Stears, eds., *The Oxford Handbook of Political Ideologies*, 2013), Michael Freeden revolutionized the study of ideology by modeling ideologies as **modular, morphological configurations of political concepts**.

#### The Mechanism of Decontestation
Because political concepts are essentially contested (Gallie) and structurally indeterminate, human communities cannot make concrete political decisions unless they temporarily freeze or narrow those meanings. Freeden terms this **decontestation**:

> *"An ideology attempts to end the inevitable contention over concepts tier by tier, by decontesting them—by removing their meanings from contest... [saying:] 'This is what justice means; that is what efficiency entails.'"* (Freeden, 2003, p. 54; 1996, pp. 75–77)

Crucially, an ideology does not decontest a concept in isolation; it decontests a concept by **placing it in a specific spatial and relational proximity to other concepts**:
- **Classical Liberalism / Right-Libertarianism** decontests `liberty` by placing it immediately adjacent to `self-ownership`, `private property`, and `non-interference`, which restricts `equality` to formal legal equality.
- **Social Democracy / Left-Liberalism** decontests `liberty` by placing it adjacent to `human flourishing`, `capability`, and `social welfare`, arguing that formal non-interference without material security is an empty shell.
- **Civic Republicanism** decontests `liberty` as `non-domination` (absence of arbitrary master-power; Philip Pettit, 1997) rather than mere non-interference, placing it adjacent to `civic virtue`, `constitutional mixed government`, and `public duty`.

#### The Three-Tier Morphological Architecture
Freeden compares an ideology to a furnished room with modular furniture: the same pieces (`liberty`, `equality`, `authority`, `community`, `property`, `tradition`, `progress`) appear in almost every room, but their identity as a distinct ideology is determined by which pieces sit at the center and how they are arranged across three tiers (Freeden, 1996, pp. 77–88):

| Morphological Tier | Structural Role in the Ideology | Examples Across Ideological Families |
| :--- | :--- | :--- |
| **1. Core Concepts** | **Ineliminable, structural anchors** sitting at the center of the configuration. Removing or inverting a core concept transforms the ideology into a different family altogether. Always present across all historical variants of that family. | **Liberalism:** Individual liberty, human rationality, meliorism/progress, constitutionalism.<br>**Conservatism:** Organic change, extra-human/historical origins of social order, tradition.<br>**Socialism:** Group/social nature of humans, egalitarianism, work as creative/cooperative, welfare. |
| **2. Adjacent Concepts** | **Interpretive & directional routing layer** surrounding the core. Adjacent concepts constrain how the core concepts may be decontested and differentiate major sub-families (e.g., social liberalism vs. classical liberalism; democratic socialism vs. Marxist-Leninism). | Surrounding Liberalism's core of `liberty`:<br>• *Classical branch:* `private property`, `free-market contract`.<br>• *New/Social Liberal branch (Hobhouse, Rawls):* `social welfare`, `positive capability`, `distributive fairness`.<br>Surrounding Socialism's core:<br>• `democratic participation` vs. `vanguard state ownership`. |
| **3. Peripheral Concepts** | **Context-specific, historical, and policy interface layer** on the outer boundary, where abstract morphology meets concrete time, place, and policy debates. Highly fluid; ideas can enter at the periphery and migrate toward the core over decades. | Specific tax brackets, tariff rates, nuclear vs. renewable energy mixes, municipal zoning rules, section-230 platform liability, universal basic income vs. job guarantee. |

**Why Freeden's Morphology Is Transformative for Polytic:**
1. **Solves the "Why vs. What" Gap:** Two users can endorse the exact same peripheral policy (e.g., opposing a state speech regulation or favoring a carbon tariff) from completely opposite core/adjacent morphologies. Spatial quizzes score them identically; morphological probing inspects *which adjacent concepts* the user invokes to justify the policy.
2. **Explains "Thin-Centered" Ideologies:** Freeden (1996, ch. 13; 1998) introduced the distinction between **thick** ideologies (liberalism, socialism, conservatism—which offer answers across the entire socio-economic spectrum) and **thin-centered** ideologies (**populism**, **nationalism**, **ecologism/green politics**, **feminism**), which have a restricted core (e.g., *the pure people vs. the corrupt elite* for populism, as formalized by Cas Mudde, 2004) and must attach themselves to a host morphology to answer broader economic or institutional questions.

---

## 3. Values & Moral Psychology Foundations

If Freeden maps the *conceptual grammar* of political arguments, values and moral psychology map the *motivational and intuitive engines* that make certain concepts feel sacred or urgent to an individual.

### 3.1 Milton Rokeach (1973): Terminal vs. Instrumental Values and the Two-Value Political Model

In ***The Nature of Human Values*** (Free Press, 1973), Milton Rokeach established the modern psychological study of values, defining a value as *"an enduring belief that a specific mode of conduct or end-state of existence is personally or socially preferable to an opposite or converse mode of conduct or end-state of existence"* (Rokeach, 1973, p. 5).

Rokeach made two lasting structural contributions:

1. **Terminal vs. Instrumental Separation:**
   - **Terminal Values (18 end-states of existence):** Ultimate goals a person wants to see realized (personal or social), such as *A World at Peace*, *Freedom*, *Equality*, *Family Security*, *National Security*, *Salvation*, *Wisdom*, and *A Comfortable Life*.
   - **Instrumental Values (18 modes of conduct):** Preferred behavioral means and character virtues for pursuing those ends, such as being *Honest*, *Ambitious*, *Obedient*, *Independent*, *Intellectual*, *Compassionate*, or *Self-Controlled*.
   - *Key insight for political interviewing:* Many political conflicts are **instrumental disagreements** (disputes over the means/mechanisms, such as market vs. state delivery) masquerading as **terminal disagreements**—or vice versa.
2. **The Two-Value Model of Political Ideology (`Freedom` × `Equality`):**
   In Chapters 6–7 of *The Nature of Human Values* (pp. 165–211), Rokeach performed quantitative content analysis on writings by Lenin (communism), Norman Thomas & Erich Fromm (socialism), Hitler (fascism), and Barry Goldwater (capitalism/conservatism), and validated the resulting matrix on mass publics:
   - **High Freedom + High Equality:** Democratic Socialism / Left-Liberalism.
   - **High Freedom + Low Equality:** Pro-Market Conservatism / Classical Liberalism.
   - **Low Freedom + High Equality:** Authoritarian State Communism.
   - **Low Freedom + Low Equality:** Fascism / Authoritarian Nationalism.
   Because nearly every citizen rates both "freedom" and "equality" positively on an unconstrained Likert scale, Rokeach insisted on **ipsative / trade-off ranking**: a value is only revealed when a person must choose which terminal end gives way when the two collide.

### 3.2 Shalom H. Schwartz (1992 / 2012): The Circular Theory of Basic Human Values

Building on Rokeach, Shalom H. Schwartz developed the most rigorously cross-culturally validated value taxonomy in psychology (**"Universals in the Content and Structure of Values,"** *Advances in Experimental Social Psychology*, Vol. 25, 1992, pp. 1–65; **"An Overview of the Schwartz Theory of Basic Values,"** *Online Readings in Psychology and Culture*, 2(1), 2012; and Schwartz, Cieciuch, Vecchione, Davidov, et al., **"Refining the Theory of Basic Individual Values,"** *Journal of Personality and Social Psychology*, 103(4), 2012, pp. 663–688, validated across $N = 6,059$ in 10 countries).

#### The Dynamic Motivational Circle (2 Bipolar Super-Dimensions, 10 Original / 19 Refined Values)
Unlike ad-hoc lists of values, Schwartz proved that human values form a **circular motivational continuum** organized around two fundamental, orthogonal trade-offs:

1. **Openness to Change vs. Conservation** (conflicts between individual autonomy/novelty and order/preservation/self-restriction):
   - *Openness to Change pole:*
     - **Self-Direction – Thought** (freedom to cultivate one's own ideas and abilities)
     - **Self-Direction – Action** (freedom to determine one's own actions)
     - **Stimulation** (excitement, novelty, change)
     - **Hedonism** (pleasure and sensuous gratification)
   - *Conservation pole:*
     - **Security – Personal** (safety in one's immediate environment)
     - **Security – Societal** (safety and stability in the wider society/state)
     - **Tradition** (maintaining cultural, family, or religious customs)
     - **Conformity – Rules** (compliance with laws, rules, and formal authority)
     - **Conformity – Interpersonal** (avoiding upsetting or harming others)
     - **Humility** (recognizing one's insignificance in the larger scheme)

2. **Self-Transcendence vs. Self-Enhancement** (conflicts between concern for the welfare of others/nature and pursuit of personal/hierarchical dominance and success):
   - *Self-Transcendence pole:*
     - **Universalism – Concern** (commitment to equality, justice, and protection for *all* people, including out-groups)
     - **Universalism – Nature** (preservation of the natural environment)
     - **Universalism – Tolerance** (acceptance and understanding of those who are different)
     - **Benevolence – Caring** (devotion to the welfare of *in-group* members)
     - **Benevolence – Dependability** (being a reliable, trustworthy member of the in-group)
   - *Self-Enhancement pole:*
     - **Achievement** (personal success according to social standards of competence)
     - **Power – Dominance** (power through exercising control over people)
     - **Power – Resources** (power through control of material and social resources)
     - **Face** (security and power through maintaining public image and avoiding humiliation)

**Empirical Links to Political Ideology (Caprara et al., 2006; Piurko, Schwartz, & Davidov, 2011):**
Cross-national studies (*Political Psychology*, 2006, 27(1), 1–28; 2011, 32(4), 537–561) show why the 19-value refinement is critical for politics:
- **Benevolence vs. Universalism:** Both liberals and conservatives score high on **Benevolence** (caring for family, neighbors, and immediate community). What sharply divides the egalitarian left from the hierarchical or nationalist right is **Universalism-Concern** and **Universalism-Tolerance** (extending moral obligation equally to distant strangers, out-groups, and the global biosphere).
- **The Two Orthogonal Value Axes Map Directly onto the 2D Political Space:**
  - *Self-Transcendence (Universalism) vs. Self-Enhancement (Power/Achievement)* strongly underpins the **Economic Redistribution / Equality vs. Market Hierarchy** dimension.
  - *Openness to Change (Self-Direction) vs. Conservation (Security-Societal, Tradition, Conformity-Rules)* strongly underpins the **Civil/Cultural Liberty vs. Authority/Tradition (GAL–TAN)** dimension.

### 3.3 Jonathan Haidt & Jesse Graham (2009 / 2012): Moral Foundations Theory (MFT)

Rooted in evolutionary psychology, cultural anthropology (Richard Shweder's "three ethics" of autonomy, community, and divinity), and social intuitionism, **Moral Foundations Theory** (Graham, Haidt, & Nosek, **"Liberals and Conservatives Rely on Different Sets of Moral Foundations,"** *Journal of Personality and Social Psychology*, 96(5), 2009, pp. 1029–1046; Jonathan Haidt, ***The Righteous Mind***, Pantheon, 2012; Iyer, Koleva, Graham, Ditto, & Haidt, **"Understanding Libertarian Morality,"** *PLOS ONE*, 7(8), 2012, e42366; Zakharin & Bates, 2023, Moral Foundations Questionnaire-2 / MFQ-2) posits that human moral reasoning is mostly post-hoc rationalization ("the rider") of rapid, intuitive moral gut reactions ("the elephant") triggered by **six innate, culturally tuned moral foundations**:

1. **Care / Harm:** Sensitivity to suffering, cruelty, and vulnerability; virtues of compassion and protection.
2. **Fairness / Cheating:** Sensitivity to cheating, free-riding, and injustice. Notably, in *The Righteous Mind* (2012) and MFQ-2 (Atari et al., *Journal of Personality and Social Psychology*, 2023), this foundation is explicitly split into:
   - **Equality:** Equal treatment and equalized outcomes.
   - **Proportionality (Equity/Merit):** Rewards and burdens proportional to contribution/effort, with zero tolerance for free-riders.
3. **Loyalty / Betrayal (In-group):** Devotion to one's coalition, nation, or team; vigilance against traitors and self-sacrifice for the group.
4. **Authority / Subversion:** Respect for legitimate hierarchy, institutional role-obligations, leadership, and social order.
5. **Sanctity / Degradation (Purity):** Disgust and reverence mechanisms protecting the body, sacred symbols, nature, or spiritual order from contamination and profanation.
6. **Liberty / Oppression:** Visceral reactance against bullies, tyrants, and illegitimate domination (split into *Economic/Property Liberty* and *Lifestyle/Personal Autonomy Liberty* in Iyer et al., 2012).

**Empirical Signature Profiles Across Ideologies:**
- **Progressives / Social Liberals:** Rely heavily on the **Individualizing Foundations** (**Care**, **Equality-Fairness**, and **Lifestyle Liberty**), while assigning low or even negative moral weight to Loyalty, Authority, and Sanctity.
- **Social Conservatives:** Rely on a broader six-foundation palate, placing high moral weight on the **Binding Foundations** (**Loyalty**, **Authority**, **Sanctity**) alongside **Proportionality-Fairness**.
- **Libertarians (Iyer et al., 2012, $N = 11,994$ self-identified libertarians):** Exhibit a unique signature—scoring relatively low on *both* Care/Harm (empathy) and the Binding foundations (Loyalty, Authority, Sanctity), while spiking dramatically on **Liberty/Oppression** and **Proportionality-Fairness**, paired with a strongly cerebral/cognitive (rather than affective) decision-making style.

---

## 4. Spatial & Multi-Dimensional Empirical Taxonomies

How does empirical political science measure, scale, and compare political actors (voters, parties, thinkers, and regimes) across space and time? Here we survey both formal academic scaling instruments and public-facing multi-axis tools.

### 4.1 Formal Spatial Theory: Downsian Proximity vs. Rabinowitz–Macdonald Directional Models

1. **The Downsian Proximity Model (Anthony Downs, ***An Economic Theory of Democracy***, Harper & Row, 1957; Otto A. Davis, Melvin J. Hinich, & Peter C. Ordeshook, 1970, *American Political Science Review*):**
   - Models political competition in an $N$-dimensional Euclidean metric space $\mathbb{R}^N$.
   - Each citizen $i$ has an **ideal point** $\mathbf{x}_i \in \mathbb{R}^N$ and a **salience weight matrix** $\mathbf{W}_i$, evaluating any political actor or ideology $\mathbf{p}_j \in \mathbb{R}^N$ via a weighted quadratic loss function:
     $$U_i(\mathbf{p}_j) = - \sum_{k=1}^{N} w_{ik} (x_{ik} - p_{jk})^2$$
   - Under pure proximity logic, every policy axis has ordered, concrete quantities (e.g., a 35% vs. 50% vs. 70% top marginal tax rate), and a voter penalizes *both* an actor who is too moderate and an actor who is more extreme than their ideal point.

2. **The Directional Model (George Rabinowitz & Stuart Elaine Macdonald, **"A Directional Theory of Issue Voting,"** *American Political Science Review*, 83(1), 1989, pp. 93–121):**
   - Challenges the Euclidean ideal-point assumption for symbolic, value-laden politics. Most voters do not hold a precise quantitative ideal point on complex axes; instead, they experience an issue as a **diffuse directional commitment** (which *side* of the neutral status-quo point $\mathbf{0}$ they favor, and with what emotional/cognitive **intensity**).
   - Utility is modeled via the scalar **dot product** around a neutral center ($0$), bounded by a "region of acceptability" beyond which an actor appears unhinged or extremist:
     $$U_i(\mathbf{p}_j) = \sum_{k=1}^{N} (x_{ik} - 0)(p_{jk} - 0) - \text{Penalty}_{\text{extremity}}(\mathbf{p}_j)$$
   - **Why both matter for Polytic (Merrill & Grofman, *A Unified Theory of Voting*, Cambridge University Press, 1999):** On pragmatic/institutional mechanisms, users reason by **proximity** (seeking a specific calibrated balance); on core moral/constitutional commitments, users reason **directionally** (identifying with thinkers who forcefully articulate their side of a principle). Tracking both **ideal position** and **directional intensity/salience** prevents Polytic from confusing a mild technocratic preference with an intense ideological commitment.

### 4.2 Comparative Party & Regime Taxonomies (MARPOR, CHES, V-Dem)

#### 1. The Manifesto Project (MARPOR / formerly MRG & CMP) and the RILE Scale
- **Primary Sources:** Ian Budge, Hans-Dieter Klingemann, Andrea Volkens, Judith Bara, & Eric Tanenbaum, ***Mapping Policy Preferences: Estimates for Parties, Electors, and Governments 1945–1998*** (Oxford University Press, 2001); Volkens et al., ***Mapping Policy Preferences from Texts*** (OUP, 2013); Will Lowe, Kenneth Benoit, Slava Mikhaylov, & Michael Laver, **"Scaling Policy Preferences from Coded Political Texts,"** *Legislative Studies Quarterly*, 36(1), 2011, pp. 123–155.
- **Structure:** Codes party manifestos across 50+ countries into **56 standard categories** grouped into 7 domains (*External Relations, Freedom and Democracy, Political System, Economy, Welfare and Quality of Life, Fabric of Society, Social Groups*).
- **The RILE (Right–Left) Index:** Aggregates 13 "Right" categories (e.g., *Free Enterprise, Economic Orthodoxy, Welfare State Limitation, National Way of Life: Positive, Traditional Morality: Positive, Law and Order, Military: Positive*) minus 13 "Left" categories (e.g., *Market Regulation, Economic Planning, Protectionism: Positive, Controlled Economy, Nationalization, Welfare State Expansion, Labor Groups: Positive, Military: Negative*).
- **Methodological Lesson (Salience vs. Position & the Lowe et al. Logit Critique):** Because manifestos emphasize issues a party "owns" (saliency theory), simple additive percentage differences ($R - L$) suffer from compositional bounds and conflate *how much a person talks about an issue* (salience) with *how extreme their position is*. Lowe et al. (2011) demonstrated that scaling positions via empirical **log-odds ratios** ($\theta = \log \frac{R + 0.5}{L + 0.5}$) and separating **issue salience** from **positional extremity** yields far more valid multi-dimensional maps (separating Economic Left–Right from Social Liberal–Conservative).

#### 2. Chapel Hill Expert Survey (CHES) and the `GAL–TAN` Axis
- **Primary Sources:** Liesbet Hooghe, Gary Marks, & Carole J. Wilson, **"Does Left/Right Structure Party Positions on European Integration?"** *Comparative Political Studies*, 35(8), 2002, pp. 965–989; Ryan Bakker, Liesbet Hooghe, Seth Jolly, Gary Marks, Jonathan Polk, et al., **"Measuring Party Positions in Europe: The Chapel Hill Expert Survey Trend File, 1999–2010,"** *Party Politics*, 21(1), 2015, pp. 143–152; Seth Jolly et al., **"Chapel Hill Expert Survey Trend File, 1999–2019,"** *Electoral Studies*, 75, 2022, 102420.
- **Structure:** CHES proved that modern Western politics cannot be captured by a single Left–Right axis or even a simple "economic vs. social liberty" 2x2 compass. Instead, CHES orthogonalizes party competition into:
  1. **Economic Left–Right (`LRECON`):** Role of the state in the economy, privatization vs. public ownership, redistribution, market regulation, and welfare state generosity.
  2. **Socio-Cultural `GAL–TAN` (Green / Alternative / Libertarian vs. Traditional / Authoritarian / Nationalist):**Introduced by Hooghe, Marks, & Wilson (2002), `GAL–TAN` captures the bundled post-industrial "new politics" cleavage combining ecological sustainability, lifestyle/bodily autonomy, participatory democracy, and cosmopolitanism (`GAL`) against religious/traditional morality, deference to state/police order, and ethno-cultural national sovereignty (`TAN`).
  3. **Transnational / Supranational Integration & Sovereignty:** Whether authority should be pooled in international/supranational institutions or guarded at the nation-state level, alongside specific sub-axes for immigration, multiculturalism vs. assimilation, urban–rural cleavage, and anti-elite rhetoric.

#### 3. Varieties of Democracy (V-Dem & V-Party)
- **Primary Sources:** Michael Coppedge, John Gerring, David Altman, Michael Bernhard, Steven Fish, Allen Hicken, Matthew Kroenig, Staffan I. Lindberg, Kelly McMann, Pamela Paxton, Holli A. Semetko, Svend-Erik Skaaning, Jeffrey Staton, & Jan Teorell, **"Conceptualizing and Measuring Democracy: A New Approach,"** *Perspectives on Politics*, 9(2), 2011, pp. 247–267; Coppedge et al., ***Varieties of Democracy: Measuring Two Centuries of Political Change*** (Cambridge University Press, 2020); Staffan I. Lindberg et al., **V-Party Dataset** (2022).
- **Structure:** V-Dem applies Freeden/Gallie's insight directly to institutional governance: because `democracy` is an essentially contested concept, V-Dem refuses to collapse governance into a single "democratic vs. authoritarian" number. Instead, it measures **five distinct high-level normative conceptions of governance**:
  1. **Electoral (Polyarchy; Robert Dahl, 1971):** Clean, competitive elections, universal suffrage, freedom of association and expression.
  2. **Liberal:** Constitutionalism, rule of law, civil liberties, minority rights, and judicial/legislative checks on executive power (preventing tyranny of the majority).
  3. **Participatory:** Direct citizen rule (referenda, initiatives), active civil society, and decentralized local self-government (skepticism of purely delegated representation).
  4. **Deliberative:** Decisions reached through public reason, expertise, institutional consultation, and common-good justification rather than raw interest aggregation or populist emotion.
  5. **Egalitarian:** Material and social equality of resources, health, education, and group power as a prerequisite for formal political rights to have real meaning.
- **V-Party Anti-Pluralism vs. Populism:** V-Party cleanly separates **Populism** (anti-elite, people-centric rhetoric) from **Illiberalism / Anti-Pluralism** (rejecting the legitimacy of political opponents, minority rights, or constitutional rules of the game). This distinction is critical for Polytic's non-partisan principle: a user can be fiercely anti-elitist or participatory/populist without being authoritarian or illiberal.

### 4.3 Mass Cultural & Cluster Typologies (Inglehart–Welzel WVS, Pew Political Typology)

1. **Inglehart–Welzel World Values Survey Cultural Map:**
   - **Primary Sources:** Ronald Inglehart, ***Culture Shift in Advanced Industrial Society*** (Princeton University Press, 1990) and ***The Silent Revolution*** (1977); Ronald Inglehart & Christian Welzel, ***Modernization, Cultural Change, and Democracy: The Human Development Sequence*** (Cambridge University Press, 2005); Christian Welzel, ***Freedom Rising: Human Empowerment and the Quest for Emancipation*** (Cambridge University Press, 2013).
   - **Two Empirical Super-Axes (explaining >70% of cross-national variance in WVS):**
     - **Traditional vs. Secular-Rational Values:** Contrasts societies/individuals anchoring authority in religion, traditional family roles, deference to authority, and national pride against secular, bureaucratic, scientific-rationalist conceptions of authority.
     - **Survival vs. Self-Expression (Emancipative) Values:** Driven by existential security (materialist vs. post-materialist shift), contrasting a focus on physical and economic survival, conformity, and out-group distrust against individual agency, voice, gender/LGBTQ+ equality, cosmopolitan tolerance, and environmental protection.

2. **Pew Research Center Political Typology ("Beyond Red vs. Blue"):**
   - **Primary Source:** Pew Research Center, ***Beyond Red vs. Blue: The Political Typology*** (November 2021, $N = 10,221$ U.S. adults; building on eight waves since 1987).
   - **Methodology & Findings:** Uses latent class / cluster analysis across dozens of value and policy items to identify **9 empirical coalition clusters** (*Progressive Left, Establishment Liberals, Democratic Mainstays, Outsider Left, Stressed Sideliners, Ambivalent Right, Populist Right, Committed Conservatives, Faith and Flag Conservatives*).
   - **Key Takeaway for Polytic:** Pew proves that **cross-pressured clusters** (such as the *Populist Right*, who combine strong cultural/national conservatism with deep hostility toward corporate power and big business, or *Democratic Mainstays*, who combine pro-labor welfare stances with moderate/traditional cultural views and strong institutional patriotism) make up a massive share of the real population, yet are erased by 1D Left–Right scales. However, because Pew is tied to current U.S. partisan coalitions, its cluster names (*"Democratic Mainstays"*) are parochial rather than anchored in timeless political theory.

### 4.4 Public Multi-Axis Quizzes & Simulators (8values, 9Axes, Vote Compass, Filteries)

| Instrument | Core Structure & Axes | Primary Strengths | Fatal Structural Failure Modes |
| :--- | :--- | :--- | :--- |
| **Political Compass** (Pace News Ltd., 2001; rooted in Eysenck, 1954 & Nolan Chart, 1971) | **2 Axes:**<br>1. Economic (Left ↔ Right)<br>2. Social (Libertarian ↔ Authoritarian) | Broke the 1D Left–Right monopoly in popular consciousness; easy 2D quadrant visualization. | **Conflates distinct axes:** Bundles cultural traditionalism, state police power, nationalism, and foreign intervention into a single "Authoritarian" score. Infamously biased, double-barreled Likert prompts that push moderate respondents into the "Left-Libertarian" quadrant. |
| **8values** (2017 open-source community quiz; ~70 Likert items) & **SapplyValues** | **4 Axes (8 poles):**<br>1. Economic: *Equality ↔ Markets*<br>2. Diplomatic: *Nation ↔ World*<br>3. Civil: *Liberty ↔ Authority*<br>4. Societal: *Tradition ↔ Progress* | Cleanly decouples **Civil Liberty vs. State Authority** from **Cultural Tradition vs. Progress** and **Nationalism vs. Cosmopolitanism**—a major upgrade over the 2D Compass. | **Fixed Likert reductionism:** 5-point Agree/Disagree items cannot tell *why* a user agreed. Additive scoring treats neutral/unsure and deeply torn responses identically (50/50 centrist). Label matching uses rigid geometric thresholds. |
| **9Axes** (Open-source expansion of 8values; up to 216 items) | **9 Axes:**<br>1. *Federal ↔ Unitary*<br>2. *Democratic ↔ Authoritarian*<br>3. *Globalist ↔ Isolationist*<br>4. *Militarist ↔ Pacifist*<br>5. *Security ↔ Freedom*<br>6. *Equality ↔ Markets*<br>7. *Secular ↔ Religious*<br>8. *Progressive ↔ Traditional*<br>9. *Assimilationist ↔ Multiculturalist* | High dimensional resolution; separates state structure (*Federal/Unitary*), foreign force (*Militarist/Pacifist*), and religion (*Secular/Religious*). | **Survey fatigue & the "Nonsense Combination" Problem:** 216 static questions exhaust users without ever asking a follow-up. Because axes are scored independently with no morphological coherence check, users can produce mutually contradictory coordinate vectors without the system ever probing the tension. |
| **Vote Compass** (Vox Pop Labs; Clifton van der Linden, 2011–present; academic VAA) | **2D/3D Election-Specific Spatial Map** (Economic, Social/Cultural, plus country-specific cleavage) calibrated via party manifestos & expert coding. | Rigorous academic Voting Advice Application (VAA) methodology; allows users to weight **issue salience**; grounds questions in real policy choices. | **Ephemeral & parochial:** Bound to the immediate legislative menu of a single country's upcoming election rather than enduring political philosophy. Proximity math still collapses philosophical reasons into surface policy agreement. |
| **Filteries Political Simulator** (`filteries.com/politics`) | **Interactive Budget & Policy Simulator** mapping fiscal/regulatory sliders onto Economic, Social, and Pragmatic/Fiscal balances. | **Enforces budget and trade-off constraints:** Unlike Likert quizzes where a user can demand 0% taxes and 100% universal welfare simultaneously, a simulator forces trade-offs. | **Technocratic & non-conversational:** Measures slider mechanics rather than normative political reasoning, conceptual definitions, or underlying human values. |

---

## 5. Synthesis & Comparative Evaluation for Polytic

### 5.1 Side-by-Side Comparison of the Four Model Families

| Model Family | Primary Unit of Analysis | How It Explains *What* Someone Supports | How It Explains *Why* They Support It | How It Handles Tensions & Contradictions | How It Anchors to Political Labels | How It Supports Comparison / Alignment | Primary Failure Mode if Used Alone |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Spatial / Dimensional**<br>*(Downs, Rabinowitz–Macdonald, MARPOR, CHES, V-Dem, 8values)* | Coordinate vector $\mathbf{x} \in \mathbb{R}^N$ + salience weights $\mathbf{w}$ + confidence intervals | Directly places the user along explicit policy/institutional axes (e.g., *Economic Organization*, *Civil Liberty vs. Authority*). | **Weak / Opaque.** Two people with completely different philosophies can land on the same coordinate score. | **Silent cancellation.** Opposing views within one axis average out to a misleading "50% centrist" score unless ambivalence is tracked separately from indifference (Zaller, 1992). | **Geometric bounding boxes / nearest-neighbor centroids** in $N$-space. Fast and deterministic, but misses conceptual nuance. | **Strongest.** Shared axes enable weighted Euclidean proximity, directional dot-products, and visual maps across users and thinkers. | **Shallow reductionism:** Reduces political philosophy to a barometer reading; misses the conceptual and moral reasons behind a stance. |
| **2. Values & Moral Psychology**<br>*(Schwartz 19-Value Circle, Haidt & Graham MFT, Rokeach, Lakoff)* | Moral foundation profile & value-priority hierarchy | Indirectly—predicts broad ideological predisposition, but cannot reliably predict specific institutional or policy mechanisms. | **Strongest on psychological roots.** Explains *what moral intuitions* (Care, Proportionality, Loyalty, Authority, Sanctity, Liberty, Universalism) drive gut reactions. | **Value trade-offs (Rokeach / Schwartz):** Reveals when two cherished values collide in a concrete dilemma (e.g., *Universalism-Nature* vs. *Benevolence-Care* for working families). | **Poor.** Psychological profiles ("High Care, High Liberty") are not political-science labels; translating them directly into *-isms* invents pop-psychology labels. | **Moderate.** Can compare moral/value similarity, but two people with similar moral foundations can disagree sharply on institutional design or economics. | **Policy indeterminacy & "psychologizing" politics:** Risks grading or psychoanalyzing the user rather than mapping their political philosophy. |
| **3. Morphological / Conceptual**<br>*(Freeden 1996, Gallie 1956)* | Constellation of **core**, **adjacent**, and **peripheral** concepts + how each concept is **decontested** | Maps how the user defines and links core political concepts (*liberty, equality, justice, democracy, nation, property, authority*). | **Strongest on philosophical reasoning.** Captures *what the user means* when they invoke a contested word like "freedom" or "fairness." | **Logical/conceptual friction:** Surfaces when a user's decontestation of one core concept (e.g., absolute property rights) clashes with another (e.g., equal starting conditions). | **Gold standard for labels.** Ideological traditions (*social democracy, classical liberalism, civic republicanism, distributism*) are literally defined by their conceptual morphology. | **Hard to quantify alone.** Comparing two rich conceptual graphs requires projecting them onto a shared structural skeleton. | **Unbounded complexity:** Pure conceptual graphs without fixed coordinate axes are hard to visualize at a glance or compute alignment scores over. |
| **4. Mass-Belief & Cognitive Realism**<br>*(Converse 1964, Zaller 1992, Jost 2009)* | **Issue publics** (high-salience/high-constraint domains) vs. **unsettled / ambivalent / non-attitude** domains | Distinguishes crystalized, high-conviction commitments from off-the-cuff impressions ("top-of-the-head" sampling). | Explains *where* a person actually has a structured ideology versus where they are cross-pressured or undecided. | **Explicitly models ambivalence vs. indifference:** Separates "I haven't thought about this" (low salience/open) from "I feel torn between two competing principles" (high ambivalence/tension). | Prevents **false over-labeling**: stops the system from forcing a tidy *-ism* onto domains where the user is genuinely eclectic or unsettled. | Prevents noisy alignment math by weighting high-salience, settled dimensions more heavily than unsettled ones. | **Descriptive rather than normative-taxonomic:** Tells us *how* beliefs are held (salience, constraint, ambivalence), not *what* the political axes or labels are. |

---

### 5.2 Key Architectural Takeaways for Polytic's Framework Decision ([Choose the political framework: how beliefs, dimensions, and labels work](https://github.com/slovakian/polytic/issues/17))

When resolving [Choose the political framework: how beliefs, dimensions, and labels work](https://github.com/slovakian/polytic/issues/17), the literature points strongly toward a **Layered Morphological–Spatial Hybrid** rather than choosing a single family in isolation:

1. **Separate Positonal Coordinates from Conceptual Justification (Spatial + Morphological):**
   - A **fixed set of orthogonal dimensions** (informed by CHES `LRECON` + decoupled `GAL–TAN` sub-axes, V-Dem governance principles, and Inglehart–Welzel/8values separation of *State Authority/Liberty*, *Cultural Tradition/Progress*, *Nationalism/Cosmopolitanism*, *Institutional Change/Order*, and *Ecology/Growth*) provides the **shared coordinate skeleton** required for visual mapping and thinker/user alignment.
   - Within each dimension, probing **how the user decontests core concepts** (Freeden, 1996) and **which moral/value trade-offs they prioritize when principles collide** (Schwartz, 2012; Rokeach, 1973; Haidt, 2012) provides the **philosophical flesh** that explains *why* they hold that position and anchors them accurately to established political-science labels.

2. **Never Conflate Position, Salience, Confidence, and Ambivalence (Converse + Zaller + Lowe et al.):**
   - Every dimension or finding in a user's profile must distinguish at least four properties:
     - **Position / Direction:** Where the user stands on the axis.
     - **Salience / Centrality:** Is this a core "issue public" for the user (Converse, 1964; Freeden core vs. peripheral), or a peripheral concern?
     - **Epistemic State / Confidence:** Is the view **settled** (survives Socratic stress-testing), **ambivalent / cross-pressured** (torn between competing considerations, Zaller 1992), or **open / unformed** (Converse non-attitude)?
     - **Decontested Reasoning & Evidence:** Which values or conceptual definitions justify the position, backed by what the user actually said.

3. **Why Static Quizzes Fail—and Where Interactive Probing Wins:**
   - Static Likert scales (Political Compass, 8values, 9Axes) violate Converse (1964), Zaller (1992), and Freeden (1996) simultaneously: they manufacture fake attitudes on low-salience items, average out deep internal tensions into bland "centrist" scores, and cannot tell *how* a respondent is interpreting a contested word.
   - An interactive system that **forces trade-offs** (like Filteries/Rokeach) and **probes conceptual tensions** (like a Socratic interviewer guided by Freeden's morphology) solves the exact methodological flaw that has plagued political psychometrics since 1964.
