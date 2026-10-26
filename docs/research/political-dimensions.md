# Survey of the Literature for a Comprehensive Set of Political Dimensions

> **Wayfinder Research Ticket:** [Survey the literature for a comprehensive set of Political Dimensions](https://github.com/slovakian/polytic/issues/19)
> **Parent Map:** [Polytic greenfield vision, framework, and v1 product specification](https://github.com/slovakian/polytic/issues/12)
> **Builds on:** [`docs/research/belief-system-models.md`](https://github.com/slovakian/polytic/blob/research/belief-system-models/docs/research/belief-system-models.md) (branch `research/belief-system-models`), which surveyed _how_ beliefs are held. This file surveys _which_ Political Dimensions the literature supports. It does not repeat that survey.
> **Feeds:** [Lock the Dimension set: Foundation and Political](https://github.com/slovakian/polytic/issues/21). Foundation Dimensions are covered by the sibling ticket [Survey the literature for Foundation Dimensions that bear on politics](https://github.com/slovakian/polytic/issues/20); this file only flags candidates for it.

This is research input, not a decision. Per `docs/AGENTS.md`, the Dimension set is
authored by the project owner; the "recommended candidate set" below is a starting
point for the grilling ticket, not Polytic's taxonomy.

## Executive summary

`docs/framework.md` requires Political Dimensions to be **fixed, comprehensive (not
minimal), academically grounded, and framed as a genuine trade-off between two Poles**,
each meaning "what should society, collectively or by law, do?"

Read against that bar, the literature yields three findings:

1. **The popular axes are composites, not Dimensions.** Economic left–right, GAL–TAN,
   and "libertarian vs. authoritarian" each bundle several separable trade-offs. The
   datasets that built them already measure the parts separately: the Chapel Hill
   Expert Survey (CHES) asks experts to place parties on more than 15 distinct issue
   scales beneath `LRECON` and `GALTAN`, and the Manifesto Project codes 56 categories
   across 7 domains. Mass-public research finds the same: belief systems are
   multidimensional even where elite rhetoric is one-dimensional (Treier & Hillygus
   2009; Feldman & Johnston 2014). Decomposing the composites gives most of the set.
2. **Political theory adds trade-offs that no survey instrument measures**, and these
   are the ones that tell established traditions apart: neutrality vs. perfectionism,
   legal moralism vs. paternalism, legal vs. political constitutionalism, equal
   political voice vs. competence-weighted rule, entitlement vs. equalization,
   private power, historical rectification, and political authority itself
   (anarchism).
3. **Several famous "axes" are not Dimensions at all.** The concepts of liberty
   (negative, positive, republican), "equality of what," and models of democracy are
   _decontestations_ (Freeden 1996): they belong in a Belief's **Reasons**, not on a
   separate axis. Populism, nationalism, feminism, and ecologism are _thin-centred_
   ideologies (Freeden 1998; Mudde 2004): they are **Thin Labels** riding on several
   Dimensions, not Dimensions of their own. Valence issues (corruption, competence)
   have no second Pole anyone defends (Stokes 1963) and are excluded.

The result is a **candidate set of 33 Political Dimensions in seven families**
(table in [§5](#5-recommended-candidate-set)), including both already-decided
candidates: state neutrality vs. perfectionism, and subsidiarity (locus of authority).
Stress-testing against 25 eclectic and cross-pressured positions found every one
describable once three gaps are closed: **private power** (needed for distributists,
ordoliberals, postliberals, Brandeisians, and the anti-corporate populist right),
**historical injustice** (needed for the decolonial left and, surprisingly, for
Nozickian rectification), and **paternalism split from legal moralism** (needed for
libertarian paternalists and the public-health left). Smaller gaps are handled as
facets: exit/secession, sortition, military guardianship, consensus vs. adversarial
decision cultures, monarchy, and sex vs. gender identity.

The biggest open question for the lock is **not which Dimensions exist but how a
10–12 turn session can say anything about 33 of them** (see [§6](#6-open-questions-for-lock-the-dimension-set)).

---

## 1. Method and what counts as a Political Dimension

### 1.1 Sources mined

| Source family                            | Primary sources                                                                                                                                                                                             | What it contributes                                                                                                                                                                          |
| :--------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Comparative party measurement**        | CHES 2019 codebook (Jolly et al. 2022 trend file); Manifesto Project coding scheme (MARPOR, standard scheme v5, 56 categories in 7 domains); V-Dem and V-Party (Coppedge et al. 2011; Lührmann et al. 2020) | Issue scales experts can reliably place parties on, cross-nationally. The most empirically validated list of _what parties disagree about_.                                                  |
| **Cleavage theory**                      | Lipset & Rokkan 1967; Kitschelt 1994; Kriesi et al. 2006; Hooghe & Marks 2018                                                                                                                               | Which conflicts have structured party systems historically (centre–periphery, state–church, land–industry, owner–worker) and recently (integration–demarcation, the transnational cleavage). |
| **Mass belief structure**                | Treier & Hillygus 2009; Feldman & Johnston 2014; Wittkopf 1990                                                                                                                                              | Evidence that the public's views split along more than one or two dimensions, including in foreign policy.                                                                                   |
| **Analytic political philosophy**        | Rawls, Nozick, Raz, Dworkin, Sen, Cohen, Anderson, Pettit, Waldron, Kymlicka, Miller, Carens, Brennan, Estlund and others (cited per Dimension)                                                             | The trade-offs that separate _traditions_, not just parties, and the vocabulary they are argued in.                                                                                          |
| **History of political thought**         | Burke, Mill, Tocqueville, Althusius, Oakeshott, Hayek, Popper, Marx, Kropotkin, papal social teaching                                                                                                       | Lineage for the oldest trade-offs and the traditions Labels will anchor to.                                                                                                                  |
| **Non-Western and post-colonial theory** | Bell 2015; Jiang 2013; Abou El Fadl 2004; An-Na'im 2008; Bhargava 1998; Wiredu 1996; Gyekye 1997; Mignolo 2011                                                                                              | Global portability check: does the skeleton describe positions that don't grow out of Western party systems?                                                                                 |

### 1.2 Admission test

A candidate is admitted as a **Political Dimension** only if it passes four tests,
derived from `framework.md`:

1. **Political, not personal.** It asks what society or law should do. A person's own
   ethic for living is a Foundation question.
2. **A genuine trade-off.** Both Poles name something a reasonable person values, so
   the Dimension records which wins when they collide and how hard each pulls. A
   "Pole" nobody defends (corruption, incompetence) fails; that is a valence issue
   (Stokes 1963, "Spatial Models of Party Competition," _APSR_ 57(2)).
3. **Not a decontestation.** If two people can share a Position for different
   meanings of the same word ("freedom," "equality," "democracy"), the word belongs in
   their Reasons; the Dimension is the trade-off underneath.
4. **Distinguishes established traditions** that other candidates fail to separate.
   If two candidates never separate any tradition, they merge.

Candidates that fail become **facets** of a Dimension, **Reasons vocabulary**,
**Thin Labels**, **Foundation** candidates, or **local flesh** (issues probed under a
Dimension, localized per `framework.md`'s "global skeleton, local flesh").

Pole order is arbitrary throughout. Nothing here implies one Pole is left, right,
progressive, or correct.

---

## 2. Decomposing the popular composites

Before listing candidates, here is where each familiar axis goes. This is the
evidence that the composites hide real trade-offs.

| Popular axis                                                            | What it bundles (verified against the source's own definition)                                                                                                                                                                                                                                                                                                                                                               | Where it lands in the candidate set                                                                                                                                             |
| :---------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Economic left–right** (CHES `LRECON`; MARPOR RILE economic items)     | CHES sub-scales: `ECON_INTERVEN` (state intervention), `DEREGULATION`, `REDISTRIBUTION`, `SPENDVTAX` (public services vs. tax cuts), `PROTECTIONISM`. MARPOR: Free Market Economy (401), Market Regulation (403), Economic Planning (404), Corporatism/Mixed Economy (405), Protectionism (406/407), Controlled Economy (412), Nationalisation (413), Welfare State Expansion/Limitation (504/505), Labour Groups (701/702). | P1 Economic coordination, P2 Ownership, P3 Private power, P4 Distribution, P5 Social provision, P6 Trade.                                                                       |
| **GAL–TAN** (CHES `GALTAN`)                                             | CHES defines it as "expanded personal freedoms, for example, abortion rights, divorce, and same-sex marriage" vs. "order, tradition, and stability, believing that the government should be a firm moral authority on social and cultural issues." Sub-scales: `SOCIALLIFESTYLE`, `RELIGIOUS_PRINCIPLES`, `CIVLIB_LAWORDER`, `NATIONALISM`, `MULTICULTURALISM`, `IMMIGRATE_POLICY`, `ETHNIC_MINORITIES`, `ENVIRONMENT`.      | P7 Ecology, P11 Neutrality/perfectionism, P12 Legal moralism, P14 Religion & state, P15 Life & death, P16 Family & gender, P18 Liberty vs. security, P21–P24 Membership family. |
| **Libertarian ↔ authoritarian** (Political Compass "social" axis)       | State power over the individual, cultural traditionalism, police power, nationalism, and foreign hawkishness in one score (see prior survey §4.4).                                                                                                                                                                                                                                                                           | Split across P12, P13, P17, P18, P25 Political authority, P31 Concentration of power. Cultural traditionalism goes to P32 Change and the moral-order Dimensions.                |
| **Nation ↔ World** (8values "diplomatic")                               | Whom we owe, who governs, who may enter, what culture is shared, and whether to use force abroad.                                                                                                                                                                                                                                                                                                                            | P21 Scope of obligation, P22 Borders, P23 Integration & diversity, P27 Sovereignty, P33 Use of force.                                                                           |
| **Tradition ↔ Progress** (8values "societal")                           | Content (which morals) and method (how fast, how planned). Mannheim ("Conservative Thought," 1927) and Lilla (_The Shipwrecked Mind_, 2016) show the two separate: reactionaries want radical change backward.                                                                                                                                                                                                               | Content to P12/P14/P16; method to P32 Change.                                                                                                                                   |
| **Integration ↔ demarcation** (Kriesi et al. 2006; Hooghe & Marks 2018) | Globalization "winners vs. losers": trade, migration, European integration, cultural openness.                                                                                                                                                                                                                                                                                                                               | P6, P22, P23, P27.                                                                                                                                                              |

The empirical case for decomposing is direct: Treier & Hillygus (2009, _POQ_ 73(4))
find that "many respondents hold liberal views on one dimension and conservative views
on another" and that these cross-pressured people tend to call themselves "moderate"
or answer "don't know" on the single liberal–conservative scale. Feldman & Johnston
(2014, _Political Psychology_ 35(3)) argue two dimensions are the _minimum_ for
domestic policy and that each has different determinants. Wittkopf (1990, _Faces of
Internationalism_) finds foreign-policy opinion splits along two independent
dimensions, cooperative and militant internationalism. A counterpoint worth knowing:
Hare ("Constrained Citizens?," _BJPolS_ 52(4), 2022) finds US mass attitudes have
increasingly fit a single left–right dimension over 1980–2016. That is evidence about how _US partisans sort_, which Polytic's principles
say not to mistake for the structure of a worldview.

---

## 3. Candidate Political Dimensions

Seven families. Each entry gives the Poles, a definition framed as a trade-off, its
lineage, which traditions it separates, overlaps, and a recommendation.

### Family A — Economy and distribution

#### P1. Economic coordination

- **Poles:** _Market coordination_ ↔ _Collective direction_ (planning, regulation, state steering).
- **Trade-off:** Decentralized prices and voluntary exchange (dispersed knowledge, liberty of contract, innovation) vs. deliberate collective direction of economic life (stability, public purposes markets underprovide, protection from market outcomes).
- **Lineage:** Smith, _Wealth of Nations_ (1776); Mises, "Economic Calculation in the Socialist Commonwealth" (1920); Lange, "On the Economic Theory of Socialism" (_RES_, 1936–37); Hayek, "The Use of Knowledge in Society" (_AER_ 35(4), 1945); Polanyi, _The Great Transformation_ (1944); Hall & Soskice, _Varieties of Capitalism_ (2001) on liberal vs. coordinated market economies. Measured: CHES `ECON_INTERVEN`, `DEREGULATION`; MARPOR 401, 403, 404, 412.
- **Separates:** Classical liberals and libertarians from social democrats and socialists; also developmental-state nationalists (List, _The National System of Political Economy_, 1841; Johnson, _MITI and the Japanese Miracle_, 1982) from free-trade conservatives.
- **Facets:** industrial policy; monetary regime (rules/hard money vs. discretion, MARPOR 409 Keynesian Demand Management vs. 414 Economic Orthodoxy); **coordination by organized interests** (corporatism, MARPOR 405; Schmitter, "Still the Century of Corporatism?", _Review of Politics_ 36(1), 1974), which is neither market nor state and is central to Christian democracy, Nordic tripartism, and fascist corporatism alike.
- **Overlaps:** P2 (who owns) and P3 (private power) are often run together with it, but market socialism (market coordination, social ownership) and ordoliberalism (market coordination, strong anti-monopoly state) prove they come apart.
- **Recommendation:** **Keep.**

#### P2. Ownership

- **Poles:** _Private ownership_ ↔ _Social or common ownership_ (public, cooperative, worker, commons).
- **Trade-off:** Private title (incentive, independence, liberty to use and dispose) vs. common or social title (shared benefit of shared resources, democratic control of productive assets).
- **Lineage:** Locke, _Second Treatise_ (1689), ch. 5; Proudhon, _What Is Property?_ (1840); Marx, _Capital_ vol. 1 (1867); Nozick, _Anarchy, State, and Utopia_ (1974); Meade, _Efficiency, Equality and the Ownership of Property_ (1964); Rawls, _Justice as Fairness: A Restatement_ (2001), §§41–42 on property-owning democracy vs. welfare-state capitalism; O'Neill & Williamson (eds.), _Property-Owning Democracy: Rawls and Beyond_ (2012). Measured: MARPOR 413 Nationalisation.
- **Separates:** Socialists and anarcho-communists from capitalists of all kinds; and within the egalitarian left, property-owning democrats and market socialists from welfare-state social democrats.
- **Facets:** productive capital; **land and natural resources** (George, _Progress and Poverty_, 1879; Steiner, _An Essay on Rights_, 1994; Vallentyne & Steiner (eds.), _Left-Libertarianism and Its Critics_, 2000), without which Georgists and left-libertarians are indescribable; **dispersal vs. concentration of private ownership** (Belloc, _The Servile State_, 1912; Chesterton, _The Outline of Sanity_, 1926), without which distributists are indescribable.
- **Overlaps:** P4 (distribution of income/wealth). Ownership is about _who holds title to productive assets_, distribution about _shares of what is produced_; Rawls' property-owning democracy is exactly the case where they diverge.
- **Recommendation:** **Keep**, with the land and dispersal facets. Self-ownership (Cohen, _Self-Ownership, Freedom, and Equality_, 1995) is flagged for Foundation.

#### P3. Private power

- **Poles:** _Private ordering_ (freedom of contract, managerial authority, firm size as earned) ↔ _Checks on private power_ (antitrust, labour power, workplace voice, limits on concentrated wealth in politics).
- **Trade-off:** Leaving voluntary arrangements and their resulting hierarchies alone vs. treating concentrated private power as a threat to freedom that the public must check.
- **Lineage:** Brandeis, _Other People's Money_ (1914); Eucken, _Grundsätze der Wirtschaftspolitik_ (1952) and the Freiburg school; Pettit, _Republicanism_ (1997) on domination by non-state actors; Anderson, _Private Government: How Employers Rule Our Lives_ (2017), which calls workplace authority "a particular sort of constitution of government, under which its subjects are unfree"; codetermination as Christian-democratic and social-democratic practice. Measured: MARPOR 701/702 Labour Groups; CHES `DEREGULATION` in part.
- **Separates:** It is the Dimension that most often cuts across the economic left–right. Ordoliberals and Brandeisians (pro-market, anti-concentration) from laissez-faire libertarians; distributists, postliberals, and the "populist right" cluster (Pew 2021: culturally conservative, hostile to big business) from free-market conservatives; republicans from liberals.
- **Overlaps:** P1 and P2. Not redundant: the traditions above hold one Position on P1/P2 and the opposite on P3.
- **Recommendation:** **Keep. This is a gap in every popular quiz and closes several stress-test failures (§4).**

#### P4. Distribution

- **Poles:** _Entitlement_ (holdings that arise justly are owed to their holders) ↔ _Equalization_ (society should reduce inequality of holdings or outcomes).
- **Trade-off:** Respecting what people earn, inherit, and exchange vs. correcting the distribution those processes produce.
- **Lineage:** Rawls, _A Theory of Justice_ (1971); Nozick (1974), the entitlement theory and the Wilt Chamberlain argument; Miller, _Principles of Social Justice_ (1999), on desert, need, and equality as plural principles; Frankfurt, "Equality as a Moral Ideal" (_Ethics_ 98(1), 1987), sufficientarianism; Parfit, "Equality and Priority" (_Ratio_ 10(3), 1997), prioritarianism. Measured: CHES `REDISTRIBUTION`, `SPENDVTAX`; MARPOR 503 Equality: Positive.
- **Separates:** Libertarians from social democrats; and, via Reasons, sufficientarian "bleeding-heart" libertarians (Tomasi, _Free Market Fairness_, 2012) from egalitarians who land at a similar Position.
- **Reasons vocabulary, not separate Dimensions:** "Equality of what?" (Sen, Tanner Lecture 1980: capabilities; Dworkin, "What is Equality?" Parts 1–2, _PPA_ 10, 1981: resources; Cohen, "On the Currency of Egalitarian Justice," _Ethics_ 99(4), 1989: access to advantage; Anderson, "What Is the Point of Equality?," _Ethics_ 109(2), 1999: democratic/relational equality) and the distributive pattern (strict equality, priority, sufficiency, desert). These decontest the egalitarian Pole; they don't add Poles.
- **Recommendation:** **Keep.** Record the distributive principle in Reasons. Desert depends on Foundation views about free will and responsibility (flag for ticket 20).

#### P5. Social provision

- **Poles:** _Self-reliance_ (individuals, families, mutual aid, and charity carry life's risks) ↔ _Collective provision_ (public insurance and services as of right).
- **Trade-off:** Responsibility, independence, and intermediate institutions vs. security, universality, and freedom from dependence on private benevolence.
- **Lineage:** Esping-Andersen, _The Three Worlds of Welfare Capitalism_ (1990): liberal, conservative-corporatist, and social-democratic regimes; Beveridge Report (1942); Bismarck's social insurance; Berger & Neuhaus, _To Empower People_ (1977), on mediating structures. Measured: MARPOR 504/505 Welfare State Expansion/Limitation, 506/507 Education; CHES `SPENDVTAX`.
- **Separates:** Christian democrats, whose conservative-corporatist welfare state provides heavily but preserves status differences and routes provision through family and occupation, from social democrats, who provide heavily _and_ equalize. Also welfare chauvinists (provision for members only; Andersen & Bjørklund, "Structural Changes and New Cleavages," _Acta Sociologica_ 33(3), 1990).
- **Overlaps:** P4. They usually move together, which makes this a **merge candidate**. The case for keeping it: Esping-Andersen's whole point is that the Bismarckian regime insures without equalizing, and that difference is what separates Christian democracy from social democracy.
- **Recommendation:** **Keep, flagged as merge candidate with P4.** The "who provides" facet (family, civil society, state) is shared with P26 subsidiarity.

#### P6. Trade and economic openness

- **Poles:** _Openness_ (free trade, capital mobility) ↔ _Economic sovereignty_ (protection of domestic producers, controls on capital).
- **Trade-off:** Gains from exchange and consumer welfare vs. national economic security, communities tied to particular industries, and democratic control of the economy.
- **Lineage:** Ricardo, _Principles_ (1817), comparative advantage; List (1841); Rodrik, _The Globalization Paradox_ (2011), the trilemma of hyperglobalization, national sovereignty, and democracy; Kriesi et al. (2006) on globalization "winners and losers." Measured: CHES `PROTECTIONISM`; MARPOR 406/407.
- **Separates:** Free-trade liberals and libertarians from paleoconservatives, the protectionist left, and national developmentalists. Cuts across left–right.
- **Overlaps:** P27 Sovereignty (political) is distinct from economic sovereignty; a person can favour the EU and protectionism, or Brexit and free trade.
- **Recommendation:** **Keep.**

### Family B — Ecology, the future, and technology

#### P7. Growth and ecological limits

- **Poles:** _Growth and human use of nature_ ↔ _Ecological limits_ (protection even at a cost to growth).
- **Trade-off:** Prosperity, poverty reduction, and human flourishing through material growth vs. preserving ecosystems and staying within limits.
- **Lineage:** Meadows et al., _The Limits to Growth_ (1972); Daly, _Beyond Growth_ (1996); Jackson, _Prosperity Without Growth_ (2009); Dobson, _Green Political Thought_ (1990), environmentalism vs. ecologism; Asafu-Adjaye et al., _An Ecomodernist Manifesto_ (2015); Scruton, _Green Philosophy_ (2012). Measured: CHES `ENVIRONMENT` (0 = "supports environmental protection even at the cost of economic growth"; 10 = "supports economic growth even at the cost of environmental protection"), the cleanest trade-off framing in any instrument; MARPOR 410 Economic Growth, 416 Anti-Growth Economy and Sustainability, 501 Environmental Protection.
- **Separates:** Degrowth ecologists from ecomodernists (who share concern but reject the trade-off); green conservatives from market environmentalists; eco-socialists from growth socialists.
- **Recommendation:** **Keep.** Ecologism as an ideology is a **Thin Label** over P7, P8, P10 (Freeden 1996, ch. 13).

#### P8. Intergenerational obligation

- **Poles:** _Present claims_ ↔ _Future claims_.
- **Trade-off:** The interests of people alive now vs. obligations to people who don't yet exist: discounting, public debt, savings, resource depletion, long-lived risks.
- **Lineage:** Burke, _Reflections on the Revolution in France_ (1790), society as a partnership "between those who are living, those who are dead, and those who are to be born"; Rawls (1971), §44 just savings; Parfit, _Reasons and Persons_ (1984), Part IV and the non-identity problem; the Stern–Nordhaus discounting debate (Stern, _The Economics of Climate Change_, 2007; Nordhaus, "A Review of the Stern Review," _JEL_ 45(3), 2007); Gosseries & Meyer (eds.), _Intergenerational Justice_ (2009).
- **Separates:** It cross-cuts left–right: Burkean conservatives and fiscal hawks share the future Pole with climate activists; growth-now developmentalists and some welfare expansionists share the present Pole.
- **Overlaps:** P7. Most people encounter it through climate, so it may correlate in practice, but the debt and pension cases show it is distinct.
- **Recommendation:** **Keep, flagged as merge candidate with P7.**

#### P9. Technology and risk

- **Poles:** _Proaction_ (innovate unless harm is shown) ↔ _Precaution_ (restrain until safety is shown).
- **Trade-off:** Benefits of innovation and the cost of forgone progress vs. avoiding catastrophic or irreversible harm and protecting human or natural integrity.
- **Lineage:** Jonas, _The Imperative of Responsibility_ (1979; Eng. 1984); Sunstein, _Laws of Fear: Beyond the Precautionary Principle_ (2005); More, "The Proactionary Principle" (2005); Thierer, _Permissionless Innovation_ (2014); Fukuyama, _Our Posthuman Future_ (2002) on bioconservatism; Winner, "Do Artifacts Have Politics?" (_Daedalus_ 109(1), 1980). Measured (partly): MARPOR 411 Technology and Infrastructure.
- **Separates:** Techno-libertarians, accelerationists, and ecomodernists from precautionary greens _and_ bioconservative traditionalists, who share a Pole from opposite directions.
- **Overlaps:** P7 (environmental precaution) and P32 (change). Distinct: precaution about a new technology is not caution about institutional change.
- **Recommendation:** **Keep.** It is weakly represented in party data but increasingly salient (AI, gene editing, nuclear).

#### P10. Standing of animals and nature

- **Poles:** _Human-centred_ ↔ _Extended standing_ (animals, ecosystems, rights of nature).
- **Trade-off:** Human interests and uses vs. legal protection for non-human beings at a cost to human interests.
- **Lineage:** Singer, _Animal Liberation_ (1975); Regan, _The Case for Animal Rights_ (1983); Stone, "Should Trees Have Standing?" (_S. Cal. L. Rev._ 45, 1972); Donaldson & Kymlicka, _Zoopolis_ (2011); Cochrane, _Animals and Political Theory_ (2012).
- **Separates:** Animal-rights and deep-ecology positions from all mainstream families; cuts across left–right.
- **Overlaps:** The underlying question of who has moral standing is a **Foundation** matter (flag for ticket 20). The Political Dimension is whether law should protect them.
- **Recommendation:** **Keep** as Political, paired with a Foundation "moral standing" Dimension.

### Family C — The good life and the law

#### P11. State neutrality vs. perfectionism _(already decided as a candidate)_

- **Poles:** _Neutrality_ (the state should not favour one conception of the good life) ↔ _Perfectionism_ (the state may or should promote objectively valuable ways of life).
- **Trade-off:** Fairness to citizens who disagree about the good, and legitimacy that doesn't depend on any one worldview, vs. the state's ability to cultivate excellence, virtue, and a good common life.
- **Lineage:** Neutrality: Dworkin, "Liberalism" (1978); Ackerman, _Social Justice in the Liberal State_ (1980); Larmore, _Patterns of Moral Complexity_ (1987); Rawls, _Political Liberalism_ (1993). Perfectionism: Raz, _The Morality of Freedom_ (1986); Hurka, _Perfectionism_ (1993); Sher, _Beyond Neutrality_ (1997); Wall, _Liberalism, Perfectionism and Restraint_ (1998). The SEP entry "Perfectionism in Moral and Political Philosophy" frames perfectionist politics as "the protection and promotion of objective goods." Non-liberal perfectionisms: Aristotle's _Politics_; Vermeule, _Common Good Constitutionalism_ (2022); Confucian virtue politics (Bell 2015; Jiang 2013).
- **Separates:** Political liberals from liberal perfectionists (Raz), civic republicans (Sandel, _Democracy's Discontent_, 1996), communitarians, integralists, and Confucian meritocrats.
- **Overlaps:** P12 Legal moralism. They must stay separate: perfectionism concerns what the state may _aim at and justify by_; legal moralism concerns what it may _coerce_. Raz is a perfectionist who accepts the harm principle and rejects coercing harmless conduct, so he sits at one end of P11 and the other end of P12. P14 (religion) is one species of perfectionism, but it separates traditions P11 cannot (see P14).
- **Recommendation:** **Keep.** Facet: _which_ goods (virtue, autonomy, religion, culture, national identity) lives in Reasons.

#### P12. Legal moralism

- **Poles:** _Liberty of self-regarding conduct_ ↔ _Enforcement of shared morality_.
- **Trade-off:** Freedom to live by your own lights where no one else is harmed vs. the law's role in upholding a community's moral fabric (sexual morality, drugs, gambling, obscenity, marriage law).
- **Lineage:** Mill, _On Liberty_ (1859), the harm principle; Devlin, _The Enforcement of Morals_ (1965); Hart, _Law, Liberty, and Morality_ (1963); Feinberg, _The Moral Limits of the Criminal Law_ (4 vols., 1984–88); George, _Making Men Moral_ (1993). Measured: CHES `SOCIALLIFESTYLE`; MARPOR 603/604 Traditional Morality.
- **Separates:** Libertarians and social liberals from social conservatives and natural-law traditionalists.
- **Recommendation:** **Keep, split from P13.**

#### P13. Paternalism

- **Poles:** _Choice_ (including the freedom to harm oneself) ↔ _Protection_ (the state may restrict or steer choices for a person's own good).
- **Trade-off:** Self-determination vs. welfare, especially where choices are impaired, addictive, or poorly informed (seatbelts, drugs, sugar and tobacco taxes, nudges, assisted dying safeguards).
- **Lineage:** Mill (1859); G. Dworkin, "Paternalism" (_The Monist_ 56(1), 1972); Feinberg, _Harm to Self_ (1986); Thaler & Sunstein, _Nudge_ (2008), "libertarian paternalism."
- **Separates:** It is why P12 must be split: the public-health left is paternalist but anti-moralist; some social conservatives are moralist but anti-paternalist about, say, firearms or diet; libertarians reject both; libertarian paternalists sit between on means.
- **Recommendation:** **Keep. A gap in every popular quiz.**

#### P14. Religion and the state

- **Poles:** _Secular state_ (religion kept out of law and public institutions) ↔ _Religious foundation_ (religion as a source of law, identity, or public authority).
- **Trade-off:** Equal standing for all faiths and none, and freedom of conscience, vs. public recognition of the religious truths and traditions a society is built on.
- **Lineage:** Lipset & Rokkan, _Party Systems and Voter Alignments_ (1967), the state–church cleavage; Kuru, _Secularism and State Policies toward Religion_ (2009), passive (US) vs. assertive (France, Turkey) secularism; Stepan, "Religion, Democracy, and the 'Twin Tolerations'" (_Journal of Democracy_ 11(4), 2000); Bhargava, "What Is Secularism For?" in _Secularism and Its Critics_ (1998), "principled distance"; Taylor, _A Secular Age_ (2007); An-Na'im, _Islam and the Secular State_ (2008); Crean & Fimister, _Integralism_ (2020). Measured: CHES `RELIGIOUS_PRINCIPLES`.
- **Separates:** Laïcité republicans from American-style separationists (both secular, opposite on public religious expression: the Kuru facet); Christian democrats from integralists; Muslim democrats (Ghannouchi, "From Political Islam to Muslim Democracy," _Foreign Affairs_ 95(5), 2016) from Islamists who seek religious law as positive law.
- **Facets:** establishment; religious law as positive law; clerical authority; assertive vs. passive secularism; principled distance.
- **Overlaps:** P11. Kept separate because many people are neutralists about the good life yet favour a symbolic establishment, and assertive secularism is itself non-neutral.
- **Recommendation:** **Keep, with facets.** It is essential for global portability.

#### P15. Life and death

- **Poles:** _Self-determination over life and death_ ↔ _Protection of life_.
- **Trade-off:** Bodily autonomy and control over one's death vs. protecting life at its edges (abortion, euthanasia and assisted dying, embryo research, and, for the consistent-life position, capital punishment).
- **Lineage:** Thomson, "A Defense of Abortion" (_PPA_ 1(1), 1971); R. Dworkin, _Life's Dominion_ (1993); Finnis, _Natural Law and Natural Rights_ (1980); Bernardin, "A Consistent Ethic of Life" (Fordham lecture, 1983).
- **Separates:** Pro-life progressives and consistent-life Catholics from pro-life conservatives who support capital punishment; and pro-choice libertarians from paternalist progressives on assisted dying.
- **Why not fold into P12:** the pro-life position is usually argued as harm to another (the fetus), not moralism about self-regarding conduct. Where a person lands depends on the fetus's standing, a Foundation question (flag for ticket 20).
- **Recommendation:** **Keep.**

#### P16. Family and gender order

- **Poles:** _Inherited family and sex roles_ (marriage, complementary roles, the family as society's basic unit) ↔ _Egalitarian and plural forms_ (gender equality, diverse family structures, the state neutralizing or transforming gendered roles).
- **Trade-off:** The stability and meaning of an inherited family order vs. equal freedom for people within and outside it.
- **Lineage:** Wollstonecraft, _A Vindication of the Rights of Woman_ (1792); Mill & Taylor Mill, _The Subjection of Women_ (1869); Okin, _Justice, Gender, and the Family_ (1989); Finnis (1980); Confucian family ethics (Bell 2015). Measured: CHES `SOCIALLIFESTYLE` (named examples: "rights for homosexuals, gender equality").
- **Separates:** Feminists (liberal and radical) from social conservatives; Confucian and many religious traditions from liberal individualism.
- **Facets:** **sex vs. gender identity in law**, where gender-critical feminists and trans-inclusive feminists both sit at the egalitarian Pole but disagree sharply, so the facet is needed to describe either; family policy (marriage incentives, child benefits).
- **Overlaps:** P12 (sexual morality) and P11. Kept separate because it carries its own established tradition (feminism, as a Thin Label) and its own non-Western variants.
- **Recommendation:** **Keep, with the sex/gender-identity facet.**

#### P17. Speech and expression

- **Poles:** _Expansive protection_ ↔ _Regulation for dignity, harm, or cohesion_ (hate speech, misinformation, blasphemy, obscenity).
- **Trade-off:** The search for truth, self-government, and individual autonomy vs. protecting groups' standing, public order, and an information environment people can trust.
- **Lineage:** Milton, _Areopagitica_ (1644); Mill (1859), ch. 2; Meiklejohn, _Free Speech and Its Relation to Self-Government_ (1948); Scanlon, "A Theory of Freedom of Expression" (_PPA_ 1(2), 1972); Waldron, _The Harm in Hate Speech_ (2012). Measured (partly): MARPOR 201 Freedom and Human Rights.
- **Separates:** US-style free-speech absolutists (left and right) from European-style dignity regimes; religious traditionalists who favour blasphemy law from secular regulators who favour hate-speech law (same Pole, different Reasons).
- **Overlaps:** P18 (state power) and P12 (obscenity). Kept separate because its divisions currently cut across both parties' coalitions.
- **Recommendation:** **Keep.**

### Family D — Security and justice

#### P18. Liberty and security

- **Poles:** _Civil liberties and due process_ ↔ _Security and crime control_.
- **Trade-off:** Protecting individuals from state error and abuse (presumption of innocence, privacy, limits on surveillance and policing) vs. protecting the public from crime and threats efficiently.
- **Lineage:** Packer, "Two Models of the Criminal Process" (_U. Pa. L. Rev._ 113(1), 1964), the due-process vs. crime-control models, described as "two separate value systems that compete for priority"; Solove, _Nothing to Hide_ (2011) on privacy and security. Measured: CHES `CIVLIB_LAWORDER` (0 = "strongly favors civil liberties"; 10 = "strongly favors tough measures to fight crime"); MARPOR 605 Law and Order.
- **Separates:** Civil libertarians (left and right) from law-and-order conservatives and security-state liberals.
- **Facets:** policing; surveillance and privacy; emergency powers; gun ownership (where the trade-off is personal self-defence vs. public safety).
- **Recommendation:** **Keep.**

#### P19. Punishment

- **Poles:** _Retribution and incapacitation_ ↔ _Rehabilitation and restoration_ (at the far end, abolition of prisons).
- **Trade-off:** Giving offenders what they deserve and protecting the public vs. reintegrating offenders, repairing harm, and limiting state violence.
- **Lineage:** Kant, _Metaphysics of Morals_ (1797); Bentham, _Introduction to the Principles of Morals and Legislation_ (1789); Braithwaite, _Crime, Shame and Reintegration_ (1989); Davis, _Are Prisons Obsolete?_ (2003).
- **Overlaps:** P18. **Merge candidate.** P18 concerns state power _before and during_ adjudication; P19 the purpose and severity of sanction _after_ guilt. Some people are due-process maximalists and retributivists. Desert ties P19 to Foundation views about free will (flag for ticket 20).
- **Recommendation:** **Keep, flagged as merge candidate with P18.**

#### P20. Historical injustice

- **Poles:** _Forward-looking_ (past wrongs are superseded; justice concerns present and future arrangements) ↔ _Rectification_ (past wrongs create present obligations: reparations, restitution, return of land).
- **Trade-off:** Stability, settled expectations, and not holding the living responsible for the dead vs. making whole those whose present position flows from past injustice.
- **Lineage:** Nozick (1974), the principle of rectification; Waldron, "Superseding Historic Injustice" (_Ethics_ 103(1), 1992); Táíwò, _Reconsidering Reparations_ (2022); Fanon, _The Wretched of the Earth_ (1961); MARPOR 103 Anti-Imperialism and 607.3 Indigenous Rights.
- **Separates:** The decolonial left and indigenous-rights movements from forward-looking egalitarians (who may support equalization now but reject reparations as a frame). It also produces an instructive cross-pressure: Nozick's entitlement theory requires rectification in principle.
- **Recommendation:** **Add. No popular quiz has it; the decolonial and indigenous positions in §4 are indescribable without it.**

### Family E — Membership and identity

#### P21. Scope of obligation

- **Poles:** _Compatriot priority_ (special obligations to fellow members) ↔ _Impartial or global obligation_ (equal concern for all people regardless of nationality).
- **Trade-off:** The value of bounded solidarity and national self-determination vs. the equal moral worth of distant strangers (foreign aid, global redistribution).
- **Lineage:** Miller, _On Nationality_ (1995); Tamir, _Liberal Nationalism_ (1993); Singer, "Famine, Affluence, and Morality" (_PPA_ 1(3), 1972); Pogge, "Cosmopolitanism and Sovereignty" (_Ethics_ 103(1), 1992); Nussbaum, "Patriotism and Cosmopolitanism" (_Boston Review_, 1994). Measured: CHES `NATIONALISM` (cosmopolitan vs. nationalist "conceptions of society"), in part.
- **Separates:** Liberal nationalists and social-democratic nationalists from cosmopolitan egalitarians; welfare chauvinists (P5 × P21) from universalists.
- **Recommendation:** **Keep.** Nationalism as an ideology is a **Thin Label** spanning P21, P23, and P27, not a Dimension.

#### P22. Borders and migration

- **Poles:** _Open borders_ ↔ _Controlled membership_.
- **Trade-off:** Freedom of movement, the claims of migrants, and economic gains vs. a political community's right to control its composition, wages, cohesion, and public goods.
- **Lineage:** Carens, "Aliens and Citizens: The Case for Open Borders" (_Review of Politics_ 49(2), 1987); Walzer, _Spheres of Justice_ (1983), ch. 2; Wellman, "Immigration and Freedom of Association" (_Ethics_ 119(1), 2008); Miller, _Strangers in Our Midst_ (2016). Measured: CHES `IMMIGRATE_POLICY`; MARPOR 601.2/602.2; the core of Kriesi et al. (2006) and Hooghe & Marks' (2018) transnational cleavage.
- **Separates:** Libertarian and cosmopolitan open-borders positions from nationalist and labour-protectionist restrictionists. The restrictionist Pole holds both the national right and the "Blue Labour" left.
- **Recommendation:** **Keep.**

#### P23. Integration and diversity

- **Poles:** _Common culture_ (integration into a shared national culture, assimilation) ↔ _Recognized diversity_ (multiculturalism, group-differentiated rights, accommodation).
- **Trade-off:** Social cohesion, trust, and a shared public identity vs. recognition of minority cultures and protection from pressure to assimilate.
- **Lineage:** Taylor, "The Politics of Recognition" (1992); Kymlicka, _Multicultural Citizenship_ (1995); Parekh, _Rethinking Multiculturalism_ (2000); Barry, _Culture and Equality_ (2001); Kukathas, _The Liberal Archipelago_ (2003); Lijphart, _Democracy in Plural Societies_ (1977), consociationalism. Measured: CHES `MULTICULTURALISM`, `ETHNIC_MINORITIES`; MARPOR 607/608 Multiculturalism.
- **Facets:** **civic vs. ethnocultural membership** (Kohn, _The Idea of Nationalism_, 1944; Brubaker, _Citizenship and Nationhood in France and Germany_, 1992); **group-differentiated rights** (language rights, self-government for national minorities and indigenous peoples). A separate "individual vs. group rights" candidate was considered and **merged here**: it never separated a tradition this Dimension didn't.
- **Recommendation:** **Keep.**

#### P24. Equal treatment

- **Poles:** _Identity-blind_ (formal equality: the law and institutions ignore race, sex, caste, and similar categories) ↔ _Group-conscious_ (substantive equality: remedial treatment of disadvantaged groups).
- **Trade-off:** Treating each person as an individual under neutral rules vs. correcting persistent group disadvantage that neutral rules leave in place.
- **Lineage:** R. Dworkin, _Taking Rights Seriously_ (1977), ch. 9; Young, _Justice and the Politics of Difference_ (1990); Sowell, _Affirmative Action Around the World_ (2004); Anderson, _The Imperative of Integration_ (2010). India's reservation system and Malaysia's bumiputera policy are non-Western cases.
- **Separates:** Classical liberals and colour-blind conservatives from anti-racist and caste-reservation positions; within the left, universalist class-first socialists from identity-conscious progressives.
- **Overlaps:** P20 (rectification is one rationale for group-conscious policy, but not the only one) and P23 (recognition of culture is not remediation of disadvantage).
- **Recommendation:** **Keep.**

### Family F — Authority and institutions

#### P25. Political authority

- **Poles:** _Legitimate state authority_ ↔ _Voluntary order_ (no ruler: anarchism).
- **Trade-off:** The order, coordination, and protection a state with a monopoly on coercion provides vs. the claim that no one has a general right to rule others without their consent.
- **Lineage:** Hobbes, _Leviathan_ (1651); Wolff, _In Defense of Anarchism_ (1970); Simmons, _Moral Principles and Political Obligations_ (1979); Huemer, _The Problem of Political Authority_ (2013); Kropotkin, _The Conquest of Bread_ (1892); Rothbard, _For a New Liberty_ (1973); D. Friedman, _The Machinery of Freedom_ (1973).
- **Separates:** Anarchists of all kinds (market and communist) from minarchists and every statist tradition. Without it, market anarchists collapse onto libertarians and anarcho-communists onto socialists.
- **Overlaps:** P26 (taken to the individual, subsidiarity approaches anarchism), but anarcho-communists favour the commune, not the individual.
- **Recommendation:** **Keep.** It may be close to Foundation, since political obligation is a question in political philosophy, but it asks directly whether society should have a state, which is political.

#### P26. Locus of authority (subsidiarity) _(already decided as a candidate)_

- **Poles:** _Local and civil-society authority_ (decisions at the lowest competent level: family, association, municipality, region) ↔ _Central authority_ (uniform national standards, central coordination).
- **Trade-off:** Self-government, local knowledge, and diversity of experiments vs. equal standards across a country, economies of scale, and protection of minorities from local majorities.
- **Lineage:** Althusius, _Politica_ (1603); Tocqueville, _Democracy in America_ (1835–40); Pius XI, _Quadragesimo Anno_ (1931), §79, the classic statement of subsidiarity; Nisbet, _The Quest for Community_ (1953); Riker, _Federalism_ (1964); Tiebout, "A Pure Theory of Local Expenditures" (_JPE_ 64(5), 1956); Ostrom, _Governing the Commons_ (1990); Hooghe & Marks, "Unraveling the Central State, but How? Types of Multi-level Governance" (_APSR_ 97(2), 2003); Hooghe, Marks et al., _Measuring Regional Authority_ (2016); Treaty on European Union, Art. 5(3). Measured: CHES `REGIONS` (decentralization to regions/localities); MARPOR 301/302.
- **Separates:** Christian democrats, US federalists and localists, and communitarians from centralizing Jacobin republicans and national-standard social democrats; regionalist movements from unitary nationalists.
- **Facets:** **vertical** (central vs. regional vs. local government); **horizontal** (state vs. civil society, family, and church: "who should act" in `framework.md`'s phrasing); **exit and secession** (Hirschman, _Exit, Voice, and Loyalty_, 1970; Tiebout 1956; charter cities and the "network state"), which techno-libertarians need.
- **Overlaps:** Subsidiarity _upward_ (pooling sovereignty in supranational bodies) behaves differently from subsidiarity _downward_: Scottish and Catalan nationalists favour devolution and the EU; some centralists oppose both. Wittkopf's two-dimensional finding on foreign opinion points the same way. **Recommendation: split upward into P27**, leaving P26 for downward and horizontal.
- **Recommendation:** **Keep (downward and horizontal), with P27 taking the upward direction.** Note that subsidiarity is a _principle_ (the lowest competent level), so the Poles above name the trade-off it resolves, not the principle itself.

#### P27. Sovereignty and international order

- **Poles:** _National self-determination_ ↔ _Pooled and multilateral authority_ (supranational institutions, international law, cooperation).
- **Trade-off:** Democratic self-rule by a nation that answers to no one above it vs. solving shared problems through binding cooperation.
- **Lineage:** Morgenthau, _Politics Among Nations_ (1948); Keohane, _After Hegemony_ (1984); Wittkopf (1990), "cooperative internationalism"; Mead, _Special Providence_ (2001), Wilsonian vs. Jeffersonian/Jacksonian schools; Rodrik (2011). Measured: CHES `EU_POSITION` and related; MARPOR 107/109 Internationalism, 108/110 European Integration.
- **Separates:** Liberal internationalists and federalist Europeans from sovereigntists and isolationists; cuts across left–right (left-wing Euroscepticism, right-wing Atlanticism).
- **Recommendation:** **Keep.**

#### P28. The final say (legal vs. political constitutionalism)

- **Poles:** _Legal constitutionalism_ (entrenched rights enforced by courts against majorities) ↔ _Political constitutionalism_ (elected legislatures have the last word).
- **Trade-off:** Protecting fundamental rights and minorities from majorities vs. political equality and self-government when citizens reasonably disagree about what rights require.
- **Lineage:** Madison, _Federalist_ 10 and 51 (1787–88); Ely, _Democracy and Distrust_ (1980); R. Dworkin, _Freedom's Law_ (1996); Waldron, "The Core of the Case Against Judicial Review" (_Yale LJ_ 115(6), 2006); Bellamy, _Political Constitutionalism_ (2007); Lijphart, _Patterns of Democracy_ (1999), majoritarian vs. consensus democracy. Measured: V-Dem's liberal vs. electoral components; MARPOR 203/204 Constitutionalism.
- **Separates:** Rights-based liberals from Westminster parliamentarians, democratic socialists sceptical of courts, and majoritarian populists. Waldron and Bellamy show the political-constitutionalist Pole is not illiberal.
- **Recommendation:** **Keep.**

#### P29. Participation

- **Poles:** _Direct and participatory_ (referendums, citizens' initiatives, assemblies) ↔ _Representative and delegated_ (elected representatives decide).
- **Trade-off:** Citizens' own voice and engagement vs. the judgment, coherence, and accountability of representatives.
- **Lineage:** Rousseau, _The Social Contract_ (1762); Burke, Speech to the Electors of Bristol (1774), the trustee model; Schumpeter, _Capitalism, Socialism and Democracy_ (1942); Pateman, _Participation and Democratic Theory_ (1970); Barber, _Strong Democracy_ (1984). Measured: CHES `PEOPLE_VS_ELITE` ("the people" vs. "elected representatives should make the most important political decisions"); MARPOR 202.3/202.4; V-Dem participatory component.
- **Facets:** **sortition** (Van Reybrouck, _Against Elections_, 2016; Landemore, _Open Democracy_, 2020), which is participatory but not majoritarian; party democracy (CHES `MEMBERS_VS_LEADERSHIP`).
- **Recommendation:** **Keep.**

#### P30. Epistemic authority

- **Poles:** _Equal political voice_ ↔ _Competence-weighted rule_ (epistocracy, technocracy, meritocracy).
- **Trade-off:** Equal standing of every citizen in collective decisions vs. better decisions by those with more knowledge or virtue.
- **Lineage:** Plato, _Republic_; Mill, _Considerations on Representative Government_ (1861), plural voting; Estlund, _Democratic Authority_ (2008); Landemore, _Democratic Reason_ (2013); Brennan, _Against Democracy_ (2016); Bell, _The China Model: Political Meritocracy and the Limits of Democracy_ (2015), "democracy at the bottom, experimentation in the middle, and meritocracy at the top"; Caramani, "Will vs. Reason: The Populist and Technocratic Forms of Political Representation" (_APSR_ 111(1), 2017), where technocracy "stresses responsibility" and entrusts authority to experts and populism "stresses responsiveness"; Akkerman, Mudde & Zaslove, "How Populist Are the People?" (_CPS_ 47(9), 2014), whose three attitude scales are populist, pluralist, and elitist.
- **Separates:** Confucian meritocrats, epistocrats, and technocrats from radical democrats and populists.
- **Overlaps:** P29 is about the _mechanism_ (direct vs. representative); P30 is about _whose judgment should count_. A technocrat and a Burkean both favour delegation; a populist and a participatory democrat both favour direct voice. Akkerman et al.'s three-way structure suggests P29 and P30 together approximate it. **Merge candidate**, but keeping both describes the technocrat–populist–pluralist triangle without forcing it onto one line.
- **Facets:** regime form (monarchy, including the symbolic monarch in Jiang 2013 and the argument in Hoppe, _Democracy: The God That Failed_, 2001), which is otherwise Off-map.
- **Recommendation:** **Keep, flagged as merge candidate with P29.**

#### P31. Concentration of power

- **Poles:** _Dispersed and contested power_ (checks and balances, legitimate opposition, pluralism) ↔ _Concentrated, unified authority_ (decisive leadership, executive strength, unity over faction).
- **Trade-off:** Safety from abuse and the legitimacy of disagreement vs. the capacity to act decisively and the value of national unity.
- **Lineage:** Montesquieu, _The Spirit of the Laws_ (1748); Madison, _Federalist_ 51; Schmitt, _The Concept of the Political_ (1932); Linz, "The Perils of Presidentialism" (_Journal of Democracy_ 1(1), 1990); V-Party's anti-pluralism index (Lührmann et al. 2020), which separates rejecting opponents' legitimacy from populism; MARPOR 305.3 Political Authority: Strong Government.
- **Separates:** This is the "authoritarian" Pole proper, detached from cultural traditionalism (which the Political Compass bundles with it). Liberal constitutionalists from Caesarist, Bonapartist, and vanguard traditions; and illiberal populists from pluralist populists.
- **Facets:** executive power; legitimacy of opposition; **military role in politics** (Huntington, _The Soldier and the State_, 1957; Finer, _The Man on Horseback_, 1962), essential in much of the world.
- **Open issue:** **consensus vs. adversarial decision culture.** Wiredu's non-party "consensual democracy" (_Cultural Universals and Particulars_, 1996) and Confucian "harmony" reject adversarial party competition _without_ favouring concentrated power. Lijphart's consensus democracy is similar within liberal democracy. Forcing these onto P31 misdescribes them. The lock should decide between a facet and a separate Dimension.
- **Recommendation:** **Keep.**

### Family G — Change and force

#### P32. Change

- **Poles:** _Inherited institutions and incremental reform_ ↔ _Deliberate redesign and rupture_.
- **Trade-off:** The accumulated wisdom and stability of existing institutions vs. the chance to fix deep injustice or dysfunction by remaking them.
- **Lineage:** Burke (1790); Oakeshott, "On Being Conservative" and "Rationalism in Politics" in _Rationalism in Politics_ (1962); Popper, _The Open Society and Its Enemies_ (1945) and _The Poverty of Historicism_ (1957), piecemeal vs. utopian social engineering; Hayek, _Law, Legislation and Liberty_ vol. 1 (1973), spontaneous order; Marx & Engels, _Communist Manifesto_ (1848); Jost et al. (2003), "advocating vs. resisting social change" as one of two components of left–right (see prior survey §1.4).
- **Separates:** It is _direction-neutral_, which is why it matters: Burkean conservatives and Popperian liberals share the incremental Pole; revolutionary socialists, radical reactionaries (Lilla 2016), and some accelerationists share the rupture Pole.
- **Facets:** means of change, including civil disobedience and the legitimacy of extra-legal action (Rawls 1971, §§55–59).
- **Overlaps:** The underlying epistemic question (how far reason can redesign society vs. inherited knowledge) is a **Foundation** candidate (flag for ticket 20). It must stay separate from the _content_ of tradition (P12, P14, P16).
- **Recommendation:** **Keep.**

#### P33. Use of force abroad

- **Poles:** _Restraint_ (non-intervention, pacifism at the far end) ↔ _Intervention_ (willingness to use force for security, allies, or humanitarian ends).
- **Trade-off:** The costs of war and respect for other states' sovereignty vs. deterring aggression and protecting people from atrocity.
- **Lineage:** Walzer, _Just and Unjust Wars_ (1977); Morgenthau (1948); Wittkopf (1990), "militant internationalism" (independent of cooperative internationalism, P27; the two cross into hard-liners, internationalists, accommodationists, and isolationists); Mead (2001), Jacksonian force used "rarely, but then with overwhelming force." Measured: MARPOR 104/105 Military, 106 Peace.
- **Separates:** Neoconservatives and liberal interventionists (same Pole, different Reasons) from realists, paleoconservative restrainers, and anti-war leftists.
- **Recommendation:** **Keep.**

---

## 4. Stress test: eclectic and cross-pressured positions

Each position was checked for whether it can be described on P1–P33 plus Reasons,
with no forced placement. ✓ = describable; ◐ = describable only with the facet or
addition noted; ✗ = not describable (none remain after the additions above).

| Position (primary source)                                                                                                                                   | Distinctive configuration                                                                                                                                                                               | Describable?                                                                                                                              |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **Christian democracy** (Kalyvas, _The Rise of Christian Democracy in Europe_, 1996; van Kersbergen, _Social Capitalism_, 1995)                             | High collective provision without equalization (P5 ≠ P4); corporatist coordination (P1 facet); subsidiarity downward _and_ pooling upward (P26 ≠ P27); moderate perfectionism and religious foundation. | ◐ needs P5 kept separate from P4, the corporatism facet, and the P26/P27 split.                                                           |
| **Left-libertarianism / Georgism** (Steiner 1994; George 1879)                                                                                              | Self-ownership and market coordination with common ownership of land and natural resources.                                                                                                             | ◐ needs the land facet of P2.                                                                                                             |
| **Distributism** (Belloc 1912; Chesterton 1926)                                                                                                             | Private property, widely dispersed; hostile to both big business and the state.                                                                                                                         | ◐ needs P3 and the dispersal facet of P2.                                                                                                 |
| **Ordoliberalism** (Eucken 1952)                                                                                                                            | Market coordination with a strong state policing concentration.                                                                                                                                         | ◐ needs P3.                                                                                                                               |
| **Paleoconservatism** (Gottfried & Fleming, _The Conservative Movement_, 1988)                                                                              | Protection (P6), restraint abroad (P33), sovereignty (P27), controlled borders (P22), moral order (P12), localism (P26).                                                                                | ✓                                                                                                                                         |
| **Postliberalism / "Blue Labour"** (Deneen, _Why Liberalism Failed_, 2018; Glasman et al. (eds.), _The Labour Tradition and the Politics of Paradox_, 2011) | Checks on private power and codetermination, common culture, controlled borders, perfectionism, incremental change.                                                                                     | ◐ needs P3.                                                                                                                               |
| **Eco-socialism vs. ecofascism** (Kovel & Löwy, _An Ecosocialist Manifesto_, 2001)                                                                          | Both at the ecological-limits Pole of P7; they diverge sharply on P4, P21–P23, and P31.                                                                                                                 | ✓ shows P7 alone cannot place ecologism, which is why it is a Thin Label.                                                                 |
| **Catholic integralism** (Vermeule 2022; Crean & Fimister 2020)                                                                                             | Maximal perfectionism and religious foundation; the "two powers" subordination of temporal to spiritual authority.                                                                                      | ✓ positions; the two-powers structure goes in Reasons.                                                                                    |
| **Market anarchism** (Rothbard 1973; D. Friedman 1973)                                                                                                      | No state (P25) with private ownership and markets.                                                                                                                                                      | ◐ needs P25.                                                                                                                              |
| **Anarcho-communism** (Kropotkin 1892)                                                                                                                      | No state with common ownership.                                                                                                                                                                         | ◐ needs P25.                                                                                                                              |
| **Social-democratic nationalism / welfare chauvinism** (Andersen & Bjørklund 1990)                                                                          | High provision and equalization for members (P4, P5), compatriot priority (P21), controlled borders (P22).                                                                                              | ✓ (P5 × P21).                                                                                                                             |
| **Techno-libertarianism** (Thierer 2014)                                                                                                                    | Proaction (P9), markets, personal liberty, exit and competing jurisdictions.                                                                                                                            | ◐ needs P9 and the exit facet of P26.                                                                                                     |
| **Liberaltarian / bleeding-heart libertarian** (Lindsey, "Liberaltarians," _The New Republic_, 2006; Tomasi 2012)                                           | Markets and personal liberty with a sufficientarian safety net.                                                                                                                                         | ✓ Position on P4 plus the sufficientarian principle in Reasons.                                                                           |
| **Libertarian paternalism** (Thaler & Sunstein 2008)                                                                                                        | Anti-moralist, mildly paternalist through choice architecture.                                                                                                                                          | ◐ needs P13 split from P12.                                                                                                               |
| **Public-health progressive**                                                                                                                               | Anti-moralist, strongly paternalist.                                                                                                                                                                    | ◐ needs P13 split from P12.                                                                                                               |
| **Consistent-life ethic** (Bernardin 1983)                                                                                                                  | Protection of life including opposition to capital punishment, often with high provision.                                                                                                               | ◐ needs P15 separate from P12 and P19.                                                                                                    |
| **Decolonial left** (Fanon 1961; Mignolo, _The Darker Side of Western Modernity_, 2011; Táíwò 2022)                                                         | Rectification (P20), group-conscious treatment (P24), anti-imperial sovereignty (P27). The epistemic-decolonization claim is a Foundation matter.                                                       | ◐ needs P20.                                                                                                                              |
| **Gender-critical feminism**                                                                                                                                | Egalitarian on P16 but sex-based in law.                                                                                                                                                                | ◐ needs the sex/gender-identity facet of P16.                                                                                             |
| **Islamic democracy / Muslim democrats** (Abou El Fadl 2004; Ghannouchi 2016)                                                                               | Religion as a source of public values with constitutional democracy and rights.                                                                                                                         | ◐ needs the P14 facets (religion as source of values vs. religious law as positive law vs. clerical authority).                           |
| **Confucian meritocracy** (Bell 2015; Jiang, _A Confucian Constitutional Order_, 2013)                                                                      | Competence-weighted rule at the top (P30), local democracy (P26), virtue perfectionism (P11), family ethics (P16), harmony over contestation.                                                           | ◐ P30 and P26 cover the structure; "harmony" needs the consensus open issue under P31; Jiang's three sources of legitimacy go in Reasons. |
| **African communitarian consensus democracy** (Wiredu 1996; Gyekye, _Tradition and Modernity_, 1997)                                                        | Non-party consensus, dispersed power, communal obligations.                                                                                                                                             | ◐ needs the consensus open issue under P31; relational personhood is Foundation.                                                          |
| **Communitarianism** (Sandel, _Liberalism and the Limits of Justice_, 1982; MacIntyre, _After Virtue_, 1981; Etzioni, _The Spirit of Community_, 1993)      | Perfectionism, horizontal subsidiarity, common culture.                                                                                                                                                 | ✓ positions; the core claim about the embedded self is Foundation.                                                                        |
| **Developmental state** (Johnson 1982; List 1841)                                                                                                           | State-directed industrial policy, protection, growth now.                                                                                                                                               | ✓                                                                                                                                         |
| **Fascism / corporatist nationalism**                                                                                                                       | Concentrated power (P31), nation (P21, P23), corporatist coordination (P1 facet), force (P33), rupture (P32).                                                                                           | ◐ needs the corporatism facet; described like any other position, per Clinical Agnosticism.                                               |
| **Hindu or other ethno-religious nationalism** (Savarkar, _Hindutva_, 1923)                                                                                 | Religious-cultural foundation of national identity (P14, P23 ethnocultural facet).                                                                                                                      | ✓                                                                                                                                         |

**Gaps found and the fixes adopted above:**

1. **Private power (P3)**: added. Five positions were indescribable without it.
2. **Historical injustice (P20)**: added. The decolonial and indigenous-rights positions were indescribable without it.
3. **Paternalism (P13)**: split from legal moralism. Two positions require the split.
4. **Political authority (P25)**: added. Without it anarchists collapse into their nearest statist neighbours.
5. **Subsidiarity split (P26 / P27)**: Christian democrats and regional nationalists need upward and downward separate.
6. **Facets rather than Dimensions:** corporatism (P1), land and dispersal (P2), sex vs. gender identity (P16), religion facets (P14), exit/secession (P26), sortition (P29), monarchy (P30), military role (P31).
7. **Unresolved:** consensus vs. adversarial decision culture (P31 open issue).

### 4.1 Global portability

- **The instruments are Euro-centric.** CHES covers European parties (with smaller
  regional spin-offs); the Manifesto Project's dimension names
  carry European history (e.g., 108 "European Community/Union or Latin America
  Integration"). Lipset & Rokkan's cleavages are West European. Treat them as
  evidence that a trade-off is real, not as a list of what matters everywhere.
- **What changes outside the West** is usually the facets, not the Dimensions:
  religion and state needs "principled distance" (Bhargava 1998) and Islamic
  facets; equal treatment needs caste and ethnic-quota cases; locus of authority
  needs ethnic federalism and consociationalism; concentration of power needs
  military guardianship; family needs extended kin and filial obligation.
- **Two places the skeleton may genuinely miss something:** consensus vs. adversarial
  politics (Wiredu, Confucian harmony), and the legitimacy sources Jiang Qing names
  (Heaven, history and culture, and the people), which don't reduce to consent. The
  first is the P31 open issue; the second probably belongs in Foundation (sources of
  legitimacy).
- **V-Dem is the most portable source**, being designed for every polity since 1789;
  its five principles of democracy map to P28–P31 and to Reasons.

---

## 5. Recommended candidate set

33 candidates. "Merge?" marks pairs the lock should test; "split" marks where a
popular axis or required candidate was divided.

| #   | Dimension                    | Pole A                       | Pole B                         | Key lineage                                               | Measured in                                                  | Note                                         |
| :-- | :--------------------------- | :--------------------------- | :----------------------------- | :-------------------------------------------------------- | :----------------------------------------------------------- | :------------------------------------------- |
| P1  | Economic coordination        | Market coordination          | Collective direction           | Hayek 1945; Lange 1936; Polanyi 1944; Hall & Soskice 2001 | CHES `ECON_INTERVEN`, `DEREGULATION`; MARPOR 401–404, 412    | Facets: corporatism, monetary regime         |
| P2  | Ownership                    | Private                      | Social or common               | Locke; Marx; Meade 1964; Rawls 2001                       | MARPOR 413                                                   | Facets: land, dispersal                      |
| P3  | Private power                | Private ordering             | Checks on private power        | Brandeis 1914; Eucken 1952; Anderson 2017                 | MARPOR 701/702                                               | **Added**: gap in quizzes                    |
| P4  | Distribution                 | Entitlement                  | Equalization                   | Rawls 1971; Nozick 1974; Miller 1999                      | CHES `REDISTRIBUTION`                                        | Merge? with P5                               |
| P5  | Social provision             | Self-reliance                | Collective provision           | Esping-Andersen 1990                                      | MARPOR 504/505; CHES `SPENDVTAX`                             | Merge? with P4                               |
| P6  | Trade                        | Openness                     | Economic sovereignty           | Ricardo; List; Rodrik 2011                                | CHES `PROTECTIONISM`; MARPOR 406/407                         |                                              |
| P7  | Growth and ecology           | Growth                       | Ecological limits              | Meadows 1972; Daly; Dobson 1990                           | CHES `ENVIRONMENT`; MARPOR 410, 416, 501                     | Merge? with P8                               |
| P8  | Intergenerational obligation | Present claims               | Future claims                  | Burke; Rawls §44; Parfit 1984                             | —                                                            | Merge? with P7                               |
| P9  | Technology and risk          | Proaction                    | Precaution                     | Jonas 1979; Sunstein 2005                                 | MARPOR 411 (partial)                                         |                                              |
| P10 | Animals and nature           | Human-centred                | Extended standing              | Singer 1975; Donaldson & Kymlicka 2011                    | —                                                            | Foundation partner: moral standing           |
| P11 | Neutrality vs. perfectionism | Neutrality                   | Perfectionism                  | Rawls 1993; Raz 1986; Wall 1998                           | —                                                            | **Decided candidate**                        |
| P12 | Legal moralism               | Self-regarding liberty       | Enforced shared morality       | Mill 1859; Devlin 1965; Hart 1963                         | CHES `SOCIALLIFESTYLE`; MARPOR 603/604                       | **Split** from P13                           |
| P13 | Paternalism                  | Choice                       | Protection                     | G. Dworkin 1972; Thaler & Sunstein 2008                   | —                                                            | **Split** from P12                           |
| P14 | Religion and state           | Secular state                | Religious foundation           | Kuru 2009; Stepan 2000; Bhargava 1998                     | CHES `RELIGIOUS_PRINCIPLES`                                  | Facets: establishment, law, clergy           |
| P15 | Life and death               | Self-determination           | Protection of life             | Thomson 1971; R. Dworkin 1993                             | —                                                            | Foundation partner: moral standing           |
| P16 | Family and gender            | Inherited roles              | Egalitarian and plural         | Okin 1989; Finnis 1980                                    | CHES `SOCIALLIFESTYLE`                                       | Facet: sex vs. gender identity               |
| P17 | Speech                       | Expansive protection         | Regulation for dignity/harm    | Mill 1859; Meiklejohn 1948; Waldron 2012                  | MARPOR 201 (partial)                                         |                                              |
| P18 | Liberty and security         | Civil liberties              | Crime control                  | Packer 1964                                               | CHES `CIVLIB_LAWORDER`; MARPOR 605                           | Merge? with P19                              |
| P19 | Punishment                   | Retribution                  | Rehabilitation and restoration | Kant; Bentham; Braithwaite 1989                           | —                                                            | Merge? with P18                              |
| P20 | Historical injustice         | Forward-looking              | Rectification                  | Nozick 1974; Waldron 1992                                 | MARPOR 103, 607.3                                            | **Added**: gap in quizzes                    |
| P21 | Scope of obligation          | Compatriot priority          | Impartial or global            | Miller 1995; Singer 1972; Pogge 1992                      | CHES `NATIONALISM` (partial)                                 |                                              |
| P22 | Borders                      | Open                         | Controlled                     | Carens 1987; Walzer 1983; Miller 2016                     | CHES `IMMIGRATE_POLICY`                                      |                                              |
| P23 | Integration and diversity    | Common culture               | Recognized diversity           | Taylor 1992; Kymlicka 1995; Barry 2001                    | CHES `MULTICULTURALISM`, `ETHNIC_MINORITIES`; MARPOR 607/608 | Absorbs group rights                         |
| P24 | Equal treatment              | Identity-blind               | Group-conscious                | R. Dworkin 1977; Young 1990                               | —                                                            |                                              |
| P25 | Political authority          | Legitimate state             | Voluntary order                | Simmons 1979; Huemer 2013                                 | —                                                            | **Added**: anarchism                         |
| P26 | Locus of authority           | Local and civil society      | Central                        | Althusius; _Quadragesimo Anno_; Hooghe & Marks 2003       | CHES `REGIONS`; MARPOR 301/302                               | **Decided candidate**; downward + horizontal |
| P27 | Sovereignty                  | National self-determination  | Pooled and multilateral        | Keohane 1984; Wittkopf 1990                               | CHES `EU_POSITION`; MARPOR 107–110                           | **Split** from P26                           |
| P28 | Final say                    | Courts and entrenched rights | Legislature                    | Waldron 2006; Bellamy 2007; Ely 1980                      | MARPOR 203/204; V-Dem liberal                                |                                              |
| P29 | Participation                | Direct                       | Representative                 | Pateman 1970; Barber 1984; Burke 1774                     | CHES `PEOPLE_VS_ELITE`; MARPOR 202.3/202.4                   | Merge? with P30                              |
| P30 | Epistemic authority          | Equal voice                  | Competence-weighted            | Brennan 2016; Estlund 2008; Bell 2015                     | —                                                            | Merge? with P29                              |
| P31 | Concentration of power       | Dispersed and contested      | Concentrated and unified       | Madison; Linz 1990; V-Party                               | MARPOR 305.3                                                 | Open issue: consensus                        |
| P32 | Change                       | Incremental                  | Redesign and rupture           | Burke; Oakeshott; Popper                                  | —                                                            | Direction-neutral                            |
| P33 | Use of force abroad          | Restraint                    | Intervention                   | Walzer 1977; Wittkopf 1990                                | MARPOR 104–106                                               |                                              |

### 5.1 Reclassified candidates (not Political Dimensions)

| Candidate                                                                                                      | Reclassified as                                                  | Why                                                                                                                  |
| :------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| Economic left–right, GAL–TAN, libertarian–authoritarian, Nation–World, Tradition–Progress                      | **Derived composites** (optional display projections)            | Each bundles several Dimensions above (§2). They may be worth computing for familiarity, never as the model.         |
| Concepts of liberty (negative, positive, non-domination: Berlin, "Two Concepts of Liberty," 1958; Pettit 1997) | **Reasons vocabulary**                                           | Decontestations of a shared concept; they change _why_ a Position is held across many Dimensions (P3, P4, P12, P31). |
| "Equality of what?" (Sen, Dworkin, Cohen, Anderson)                                                            | **Reasons vocabulary** on P4 and P24                             | Same reason.                                                                                                         |
| Models of democracy (electoral, liberal, participatory, deliberative, egalitarian: V-Dem)                      | **Split across P28–P31**, with deliberative democracy in Reasons | V-Dem itself treats them as distinct principles, not poles of one axis.                                              |
| Populism (Mudde, "The Populist Zeitgeist," _Government and Opposition_ 39(4), 2004)                            | **Thin Label**                                                   | Thin-centred; its institutional content is P29/P30, its host varies.                                                 |
| Nationalism, feminism, ecologism                                                                               | **Thin Labels** over P21/P23/P27, P16/P24, and P7/P8/P10         | Thin-centred (Freeden 1996, 1998).                                                                                   |
| Corruption, governmental efficiency (MARPOR 303/304; CHES `CORRUPT_SALIENCE`)                                  | **Excluded** (valence)                                           | No one defends the other Pole (Stokes 1963). Probing them yields no information.                                     |
| Urban vs. rural interests (CHES `URBAN_RURAL`)                                                                 | **Local flesh**                                                  | An interest cleavage, not a principled trade-off; probe it under P5, P6, P26.                                        |
| Education, healthcare, housing, guns, drugs, abortion, etc.                                                    | **Issues (local flesh)** under the Dimensions they test          | Issues are where Dimensions collide in a given country; they are not Dimensions themselves.                          |
| Individual vs. group rights                                                                                    | **Merged into P23**                                              | Never separated a tradition P23 didn't.                                                                              |

### 5.2 Flags for the Foundation survey (ticket 20)

Only flagged here, not surveyed. Each one explains a Political Dimension above:

- **Moral standing** (who counts: fetuses, animals, nature, future people): explains P8, P10, P15.
- **Free will and desert**: explains P4 (desert) and P19 (retribution).
- **Self-ownership** (Cohen 1995): explains P2 and P25.
- **Human nature and perfectibility** (Sowell, _A Conflict of Visions_, 1987, "constrained vs. unconstrained" visions): explains P32, P30, P31.
- **Social epistemology: reason vs. inherited knowledge** (Hayek's knowledge problem; Oakeshott's critique of rationalism): explains P1, P32.
- **The self: atomistic vs. embedded** (Sandel 1982; Taylor, "Atomism," 1985; Gyekye 1997): explains communitarian positions on P11, P23, P26.
- **Value monism vs. pluralism** (Berlin): explains P11.
- **Sources of political legitimacy** (consent, benefit, virtue, tradition, the divine; Jiang 2013): explains P25, P30, P14.
- **Religious and metaphysical commitments**: explains P14, P15, P16.
- **Empirical beliefs** about how society works (e.g., what markets or prisons actually do) are not Foundation philosophy, but they drive many Positions. Polytic should record them as Reasons and Evidence, and a grill that challenges coherence may need to tell value disagreement from factual disagreement.

---

## 6. Open questions for "Lock the Dimension set"

1. **Breadth vs. a 10–12 turn session.** 33 Dimensions in one first session means
   most will have **Thin or no Coverage**. `framework.md` excludes Dimensions where
   either side is Thin from comparison, so Closest Thinkers would rest on a handful of
   Dimensions. Options: a small **core** swept every session plus an extended set
   reached by user-seeded entry and deepening; or Dimension families as the sweep unit,
   with individual Dimensions reached only when a family pulls. This affects
   `grilling-protocol.md`'s skeleton sweep.
2. **Merge candidates to settle:** P4/P5, P7/P8, P18/P19, P29/P30. The case for
   each split is in its entry; the cost is session breadth.
3. **Facet or Dimension?** P12/P13 (recommended split), P26/P27 (recommended
   split), consensus vs. adversarial culture under P31 (unresolved), and the
   sex/gender-identity facet under P16.
4. **Are all trade-offs bipolar?** Several literatures are three- or four-sided:
   Akkerman et al.'s populist/pluralist/elitist attitudes; Esping-Andersen's three
   regimes; Mead's four schools; theories of punishment. The Pull-per-Pole model
   assumes two Poles. Choose between keeping bipolar Dimensions with Reasons and
   facets, or allowing a small number of three-Pole Dimensions.
5. **Derived composites:** should Polytic compute familiar summaries (economic
   left–right, GAL–TAN) from the Dimensions for display, given users will arrive
   expecting them? If yes, how is that squared with "never collapse a person into a
   single axis"?
6. **A controlled Reasons vocabulary.** Label matching on reasoning (`framework.md`)
   will be more reliable if the decontestations in §5.1 (liberty concepts, equality
   of what, distributive patterns, democracy models) are a fixed list rather than free
   text. Decide whether this belongs with the Dimension set or the label library.
7. **Pole naming.** Several Poles are hard to name without sounding loaded
   ("authoritarian," "open borders," "protection"). Each needs names both sides would
   accept for their own view. This review tried; the lock should test each with
   someone who holds that Pole.
8. **Versioning.** The map's "Not yet specified" already notes the Dimension set will
   be revised. Merges and splits above are the likely first revisions; decide now
   whether Dimension IDs are stable across revisions so stored Beliefs survive.

---

## 7. Notes on the stale taxonomy and verification

### 7.1 Stale `docs/dimension-taxonomy.md`

Its illustrative list (economic organization, social order/tradition, state authority
vs. liberty, nationalism vs. cosmopolitanism, change tempo, epistemics/expertise,
ecology, state neutrality vs. perfectionism, subsidiarity) is consistent with this
survey but coarser. Mapping: economic organization → P1–P6; social order/tradition →
P12, P14, P16, P32; state authority vs. liberty → P13, P17, P18, P25, P31;
nationalism vs. cosmopolitanism → P21–P23, P27; change tempo → P32;
epistemics/expertise → P30; ecology → P7–P10; neutrality → P11; subsidiarity → P26
(and P27).

### 7.2 What was verified, and how

- **Checked directly against primary documents this session:** the CHES 2019
  codebook (every CHES variable and Pole quoted above, from
  `chesdata.github.io` release `2019_CHES_codebook.pdf`); the Manifesto Project
  coding scheme v5 category list (`manifesto-project.wzb.eu/coding_schemes/mp_v5`);
  the SEP entry on perfectionism (works cited for P11 and the quoted definition).
- **Checked against publisher, journal, or catalogue records this session:** Wittkopf
  1990 (two dimensions, four types); Caramani 2017 (_APSR_ 111(1), 54–67); Packer
  1964 (_U. Pa. L. Rev._ 113(1)); Kuru 2009; Stepan 2000 (_JoD_ 11(4), 37–57); Hooghe
  & Marks 2003 (_APSR_ 97(2), 233–243) and 2018 (_JEPP_ 25(1), 109–135); Kriesi et
  al. 2006 (_EJPR_ 45(6), 921–956); Feldman & Johnston 2014 (_Pol. Psych._ 35(3),
  337–358); Treier & Hillygus 2009 (_POQ_ 73(4), 679–703); Akkerman, Mudde &
  Zaslove 2014 (_CPS_ 47(9), 1324–1353); Bell 2015; Jiang 2013 (Princeton; the
  English edition is 2013, not 2012); Mead 2001; Lindsey 2006; Anderson 2017;
  Abou El Fadl 2004; Hare 2022 (_BJPolS_ 52(4), 1602–1621); V-Dem's five principles and index names; Lipset & Rokkan 1967.
- **Cited from standard bibliographies without re-fetching:** canonical works in
  political philosophy and the history of thought (Rawls, Nozick, Raz, Mill, Burke,
  Hayek, etc.) and the remaining journal articles. Their bibliographic details are
  standard but were not individually re-checked here.
- **Not verified:** the exact framing of Kriesi et al.'s "integration vs. demarcation"
  labels (the search confirmed the article and argument, not the labels' wording);
  the full text of Stepan 2000 (summarized from catalogue and secondary
  descriptions).
