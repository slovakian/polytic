# Survey (second pass): a comprehensive candidate set of Political Dimensions

> **Research ticket:** [Survey the literature for a comprehensive set of Political Dimensions](https://github.com/slovakian/polytic/issues/19)
> **Feeds:** [Lock the Dimension set: Foundation and Political](https://github.com/slovakian/polytic/issues/21)
> **Sibling ticket:** #20 (Foundation Dimensions). Foundation candidates are left out of this document; boundary cases are flagged.
> **Builds on:** `docs/framework.md`, and the prior survey `docs/research/belief-system-models.md` (branch `research/belief-system-models`).

> **Second pass.** Two sessions resolved this ticket independently and in parallel. The first pass is
> [`political-dimensions.md`](political-dimensions.md) (33 candidates). This file is the second (45 candidates), kept
> alongside it so the lock ticket can compare both. They overlap heavily but diverge in places:
> the first pass adds private power, historical injustice, paternalism, and political authority; this one adds
> land and natural resources, moral limits of markets, reciprocity in support, domestic force, and a wider
> non-Western stress-test.

**Status: candidates only.** This is a menu for the project owner to choose from in #21.
It is not the canonical taxonomy, and `docs/dimension-taxonomy.md` is unchanged.

## How to read this

- **What a Political Dimension is here.** Per `framework.md`, a Political Dimension asks
  _"what should society, collectively or by law, do?"_ It is a trade-off between two
  **Poles**, and both Poles must be something a thoughtful person could genuinely want.
  A person's own ethic for living belongs to the Foundation layer (#20).
- **Pole order carries no meaning.** Pole A is not "left" or "right", and it is not the
  "default" or the "better" side. The order is deliberately mixed across Dimensions so
  that no left/right pattern builds up down the list. Any display should keep that.
- **Steelman rule.** Each entry states the best case for _both_ Poles. Neither Pole is a
  pejorative. Where the usual name for a Pole is loaded (e.g. "ethnic nationalism",
  "paternalism"), a neutral name is used and the loaded term is mentioned only as
  literature vocabulary.
- **Lineage.** Each entry cites canonical texts and well-cited empirical work, plus the
  measurement instruments that already operationalise the Dimension where they exist
  (CHES, MARPOR, V-Dem/V-Party, ANES, WVS, ESS, ISSP, and specialist scales). Citation
  details I could not confirm are marked _(verify)_.
- **Comprehensive, not minimal.** The framework asks for coverage over parsimony. Where
  two candidates overlap, the entry says so and gives a merge/split recommendation, but
  the decision is the owner's.

### Instruments referenced (verified where noted)

- **CHES** (Chapel Hill Expert Survey). Party-position variables confirmed from the 2019
  and 2024 data files: `lrecon`, `galtan`, `eu_position`, `immigrate_policy`,
  `multiculturalism`, `redistribution`, `environment`, `spendvtax`, `deregulation`,
  `econ_interven` (2019), `civlib_laworder`, `sociallifestyle` (2019), `religious_principles`,
  `ethnic_minorities`, `nationalism`, `urban_rural`, `protectionism`, `regions`,
  `people_vs_elite` (2019) / `people_v_elite` (2024); new in 2024: `climate_change`,
  `womens_rights`, `lgbtq_rights`, `samesex_marriage`, `executive_power`,
  `judicial_independence`. Source: CHES data releases at chesdata.eu.
- **MARPOR** (Manifesto Project). Category codes such as per401 Free Market Economy,
  per404 Economic Planning, per503 Equality: Positive, per603 Traditional Morality:
  Positive, per605 Law and Order: Positive. Codes are from the standard MARPOR coding
  scheme (Volkens et al.); individual codes are cited from memory _(verify against the
  current codebook)_.
- **V-Dem / V-Party.** V-Dem's electoral, liberal, participatory, deliberative and
  egalitarian components of democracy (Coppedge et al. 2011, 2020). V-Party's
  Anti-Pluralism Index (low commitment to democratic process, demonising opponents,
  encouraging violence, disrespect for minority rights) and its populism measure built
  from anti-elitism and people-centrism (Lührmann et al., V-Party dataset; confirmed in
  V-Dem publications, variable codes not cited).
- **WVS** (World Values Survey). Item wordings are paraphrased. The "strong leader who
  does not have to bother with parliament and elections" item is confirmed; the
  "experts, not government, make decisions" item, the environment-vs-growth item, and the
  revolution/reform/defend-society item are cited from memory _(verify wording and
  codes)_.

---

## Summary table

45 candidates, grouped into seven families. **(D)** marks the two candidates the framework
already decided to include. **(S)** marks candidates added during the gap stress-test
(see "Stress-testing the set").

| #   | Dimension                                  | Pole A ↔ Pole B                                                                  | Key lineage                                                                                    | What it distinguishes                                                                                      |
| --- | ------------------------------------------ | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
|     | **A. Economic life**                       |                                                                                  |                                                                                                |                                                                                                            |
| A1  | Distribution                               | Market entitlement ↔ Egalitarian redistribution                                  | Aristotle, Rawls 1971, Nozick 1974, Hayek 1976, Dworkin 1981, Frankfurt 1987, Bobbio 1994      | Libertarians and classical liberals from social democrats; Rawlsians from Nozickians                       |
| A2  | Economic coordination                      | Public direction ↔ Market coordination                                           | Mises 1920, Lange 1936, Hayek 1945, Polanyi 1944, Hall & Soskice 2001                          | Democratic socialists from social democrats; developmental states from free-market nationalists            |
| A3  | Property in capital and goods              | Robust private ownership ↔ Socially conditioned ownership                        | Locke 1689, Nozick 1974, Rerum Novarum 1891, Duguit, Murphy & Nagel 2002                       | Libertarians from Catholic social teaching and Christian democrats; market socialists from social democrats |
| A4  | Land and natural resources **(S)**         | Common inheritance ↔ Private appropriation                                       | Locke's proviso, Paine 1797, George 1879, Steiner 1994, Ostrom 1990                            | Georgists and left-libertarians from both right-libertarians and socialists; land reformers                 |
| A5  | Economic scale and concentration           | Scale and efficiency ↔ Dispersed ownership and small scale                       | Brandeis 1914, Belloc 1912, Eucken 1952, Schumacher 1973, Bork 1978, Khan 2017                 | Distributists, ordoliberals and neo-Brandeisians from Chicago-school liberals _and_ state socialists        |
| A6  | Moral limits of markets **(S)**            | Protected non-market spheres ↔ Markets without fixed limits                      | Titmuss 1970, Walzer 1983, Radin 1996, Satz 2010, Sandel 2012, Brennan & Jaworski 2016         | Communitarians and Christian democrats from market liberals; splits the left on sex work and surrogacy      |
| A7  | Welfare and social insurance               | Self-reliance and voluntary provision ↔ Public social insurance                  | Beveridge 1942, Marshall 1950, Esping-Andersen 1990, Friedman 1962, Murray 1984                | Welfare regimes; social democrats from libertarians; with E1, Christian democracy from social democracy    |
| A8  | Reciprocity in support **(S)**             | Unconditional support ↔ Conditional (reciprocal) support                         | Rawls 1988, Van Parijs 1991/1995, Mead 1986, White 2003                                         | Blue Labour and workfare left from basic-income left; basic-income right from workfare right              |
| A9  | Workplace governance                       | Worker voice and self-management ↔ Owner and managerial authority                | Webbs 1897, Pateman 1970, Dahl 1985, Anderson 2017 / Coase 1937, Jensen & Meckling 1976        | Syndicalists, guild socialists, co-determinationists from libertarians and from redistributive-only left    |
| A10 | Trade and economic openness                | Open exchange ↔ Economic protection and self-reliance                            | Smith 1776, Ricardo 1817 / Hamilton 1791, List 1841, Prebisch 1950, Rodrik 2011                | National-populists, developmentalists and swadeshi from free-traders; free-trade nationalists exist        |
| A11 | Money and public finance                   | Discretion and active management ↔ Rules and fiscal discipline                   | Keynes 1936, Lerner 1943 / Simons 1936, Kydland & Prescott 1977, Buchanan & Wagner 1977        | Ordoliberals and hard-money liberals from Keynesians and MMT; classical liberals from spending populists    |
|     | **B. Nature, technology, the future**      |                                                                                  |                                                                                                |                                                                                                            |
| B1  | Environmental protection                   | Prosperity and development first ↔ Ecological protection first                  | Leopold 1949, Carson 1962, Dryzek 1997, Nordhaus 2008, UN Right to Development 1986            | Greens from productivists of left and right; Global South developmentalists from Northern greens           |
| B2  | Growth                                     | Sufficiency and limits ↔ Growth and abundance                                    | Mill 1848, Meadows et al. 1972, Daly 1977, Jackson 2009 / Simon 1981, Friedman 2005            | Degrowthers, Gandhians, some eco-conservatives from ecomodernists, accelerationists, developmentalists      |
| B3  | Technology and risk                        | Proaction ↔ Precaution                                                           | Bacon 1627, More 2005, Thierer 2014 / Jonas 1979, Collingridge 1980, Rio Principle 15          | Accelerationists (right and left) from precautionary greens, Burkeans, Gandhians, AI-risk-minded people    |
| B4  | Future generations                         | Present people's claims ↔ Future people's claims                                 | Burke 1790, Rawls §44, Parfit 1984, Stern 2007 vs. Nordhaus 2007, Gardiner 2011                | Burkeans, greens, longtermists, fiscal hawks from presentists                                              |
| B5  | Animals                                    | Legal protection of animal interests ↔ Human priority in using animals           | Bentham 1789, Singer 1975, Regan 1983, Donaldson & Kymlicka 2011 / Kant, Carruthers 1992       | Animal-rights and welfare traditions (secular and ahimsa-based) from human-priority views                  |
|     | **C. The state and the good life**         |                                                                                  |                                                                                                |                                                                                                            |
| C1  | Neutrality vs. perfectionism **(D)**       | State neutrality ↔ State perfectionism                                           | Rawls 1993, Dworkin 1978, Larmore 1987, Quong 2011 / Raz 1986, Sher 1997, Chan 2014            | Political liberals from Razian liberals, integralists, Confucian perfectionists, formative republicans      |
| C2  | Regulation of personal conduct             | Protective and moral regulation ↔ Self-sovereignty (harm principle)              | Mill 1859, Hart 1963, Feinberg 1984–88 / Devlin 1965, G. Dworkin 1972, Thaler & Sunstein 2008  | Millian liberals and libertarians from nudge-technocrats, legal moralists, public-health left              |
| C3  | Life and body                              | Bodily and reproductive autonomy ↔ Protection of human life and dignity          | Thomson 1971, R. Dworkin 1993 / Finnis 1973, Marquis 1989, Kass 1997, Habermas 2003            | Pro-choice from pro-life of all stripes; consistent-life-ethic progressives; bioconservatives              |
| C4  | Family, sex and gender                     | Upholding inherited family and sex roles ↔ Equalising and diversifying them      | Aristotle, Hegel 1820, Girgis et al. 2012 / Mill 1869, Okin 1989, Fraser 1994, Brake 2012      | Social-conservative socialists, familialist Christian democrats, liberal and radical feminisms             |
| C5  | Religion and state                         | Public role for religion ↔ Secular public order                                  | Locke 1689, Madison 1785, Dignitatis Humanae 1965, Kuru 2009, Bhargava 1998, An-Na'im 2008      | Christian/Islamic democrats from secular liberals; integralists from Christian democrats; laïcité from US   |
| C6  | Speech and expression                      | Maximal expressive freedom ↔ Protection from harmful expression                  | Milton 1644, Mill 1859, Meiklejohn 1948 / Matsuda 1989, MacKinnon 1993, Waldron 2012           | US-style free-speech liberals from European dignity liberals, multiculturalists, social conservatives      |
|     | **D. Order, security, justice**            |                                                                                  |                                                                                                |                                                                                                            |
| D1  | Security and civil liberties               | Civil liberties and due process ↔ Collective security and order                  | Hobbes 1651, Packer 1964, Wilson & Kelling 1982 / Blackstone, Westin 1967, Solove 2007          | Civil libertarians of left and right from law-and-order conservatives and security-first social democrats  |
| D2  | Punishment                                 | Desert and deterrence ↔ Rehabilitation and restoration                           | Kant 1797, Beccaria 1764, von Hirsch 1976 / Braithwaite 1989, Zehr 1990, Garland 2001          | Retributivists from restorative and abolitionist traditions; libertarians split internally                 |
| D3  | Rule of law vs. discretion                 | Judgment for the case at hand ↔ Rule by general, fixed rules                     | Aristotle Pol. III, Confucius vs. Han Feizi, Dicey 1885, Hayek 1960, Fuller 1964, Schmitt 1922 | Hayekians and formalists from virtue-rule Confucians, common-good constitutionalists, decisionists         |
|     | **E. Who decides: authority and democracy** |                                                                                  |                                                                                                |                                                                                                            |
| E1  | Subsidiarity **(D)**                       | Smallest capable unit ↔ Larger, more central unit                                | Althusius 1603, Quadragesimo Anno 1931, Tiebout 1956, Oates 1972, Ostrom 1990, TEU Art. 5(3)   | Catholic social teaching, distributists, localists, federalists from Jacobin centralists                   |
| E2  | Sovereignty vs. pooled governance          | Pooled, rule-bound international governance ↔ Sovereign self-government          | Bodin 1576, Kant 1795, Haas 1958, Milward 1992, Hooghe & Marks 2009, Rodrik 2011               | Sovereigntists of left and right from federalists, liberal internationalists, regional integrationists     |
| E3  | Popular sovereignty vs. constitutional constraint | Entrenched rights and judicial review ↔ Popular / legislative supremacy  | Rousseau 1762, Thayer 1893, Waldron 2006 / Federalist 78, Kelsen, Ely 1980, R. Dworkin 1996    | Westminster parliamentarians and populists from legal constitutionalists                                   |
| E4  | Majoritarian vs. consensus                 | Clear majority rule and accountability ↔ Power-sharing and broad consensus       | Schumpeter 1942, Riker 1982, Powell 2000 / Lijphart 1977, 1999; Wiredu 1995                    | Westminster majoritarians from consociationalists, Swiss-style and African consensus traditions            |
| E5  | Representation vs. participation           | Direct and participatory self-rule ↔ Representative, trustee government          | Burke 1774, Madison, Schumpeter, Achen & Bartels 2016 / Rousseau, Pateman 1970, Barber 1984    | Trustee and elite democrats from participatory, deliberative, council and direct democrats                 |
| E6  | Popular judgment vs. expertise             | Rule by the knowledgeable ↔ Equal popular judgment                               | Plato, Mill 1861, Lippmann 1922, Brennan 2016, Bell 2015 / Dewey 1927, Estlund 2008, Landemore 2013 | Confucian meritocrats, technocrats, epistocrats from radical democrats and populists                  |
| E7  | Pluralism vs. unity                        | Legitimate pluralism and opposition ↔ Unified common purpose                     | Madison, Dahl 1971, Müller 2016 / Rousseau 1762, Washington 1796, Schmitt, Lenin, Mudde 2004   | Liberal pluralists from populists, vanguardists, corporatists, non-party consensus democrats               |
| E8  | Leadership                                 | Strong, decisive leadership ↔ Dispersed, checked authority                       | Machiavelli, Hamilton Fed. 70, Weber 1919 / Montesquieu 1748, Madison Fed. 51, Linz 1990        | Gaullists, Bonapartists, Hamiltonians, Singapore-model developmentalists from Madisonians                  |
| E9  | Social hierarchy                           | Equality of status ↔ Ordered rank and deference                                  | Rousseau 1755, Ambedkar 1936, Anderson 1999 / Burke 1791, Confucius, Dumont 1966, Bell & Wang 2020 | Traditionalists, monarchists, Confucians from egalitarians; libertarians from traditionalist conservatives |
| E10 | Citizenship: rights vs. duties             | Citizenship as shared obligation ↔ Citizenship as protected liberty              | Machiavelli 1531, Rousseau, Sandel 1996, Dagger 1997 / Constant 1819, Nozick, Brennan 2011     | Civic republicans and communitarians from liberals and libertarians                                        |
|     | **F. Membership and the world**            |                                                                                  |                                                                                                |                                                                                                            |
| F1  | Compatriot priority vs. global impartiality | Special obligations to compatriots ↔ Impartial concern for all people           | Mencius vs. Mozi, Godwin 1793, Singer 1972, Beitz 1979, Pogge 2002 / Miller 1995, Nagel 2005   | Liberal nationalists and communitarians from cosmopolitans and global egalitarians                         |
| F2  | Basis of nationhood                        | Shared civic principles ↔ Shared heritage and culture                            | Herder, Renan 1882, Kohn 1944, Brubaker 1992, Smith 1991, Habermas 1992, Hazony 2018           | Civic republicans and creedal nationalists from cultural and national conservatives                       |
| F3  | Immigration and borders                    | Community control over membership ↔ Freedom of movement                          | Walzer 1983, Wellman 2008, Miller 2016 / Carens 1987, Abizadeh 2008, Huemer 2010               | Open-borders libertarians and cosmopolitan left from labour-protection left and national conservatives     |
| F4  | Group difference                           | Group-differentiated recognition ↔ Difference-blind common rules                 | Taylor 1992, Kymlicka 1995, Young 1990, Fraser 1995 / Barry 2001, Okin 1999, Joppke 2004       | Multiculturalists from French-republican universalists, class-first socialists, colour-blind conservatives |
| F5  | Use of force                               | Readiness to use force ↔ Reluctance to use force                                 | Vegetius, Clausewitz 1832, Schelling 1966, Walzer 1977 / Kant 1795, Tolstoy 1894, Wittkopf 1990 | Hawks from doves and pacifists; with F6 and E2, Mead's four schools                                        |
| F6  | Foreign-policy aims                        | Universal values ↔ National interest                                             | Thucydides, Carr 1939, Morgenthau 1948, Waltz 1979 / Kant 1795, Wilson 1918, Doyle 1983        | Realists from liberal internationalists and neoconservatives                                               |
|     | **G. Political change**                    |                                                                                  |                                                                                                |                                                                                                            |
| G1  | Tempo of change                            | Fundamental transformation ↔ Incremental reform                                  | Burke 1790, Oakeshott 1956, Popper 1945, Lindblom 1959 / Paine 1791, Marx & Engels 1848, Unger 1987 | Burkeans from reactionaries; Fabians from revolutionaries; direction-neutral                          |
| G2  | Design vs. evolved order                   | Evolved, spontaneous order ↔ Deliberate design                                   | Ferguson 1767, Hayek 1973, Oakeshott 1947, Scott 1998 / Bentham, Condorcet 1795, Neurath       | Hayekian radicals from rationalist planners; Burkeans from rationalist conservatives                       |
| G3  | Channels of change                         | Within institutions ↔ Beyond institutions                                        | Hobbes, Kant / Locke ch. 19, Thoreau 1849, King 1963, Rawls TJ §§55–59, Delmas 2018            | Institutionalists from civil disobedients, direct-action anarchists, general-strike syndicalists           |
| G4  | Force in domestic politics **(S)**         | Permissible force against injustice ↔ Principled nonviolence                     | Tolstoy, Gandhi 1909, King, Sharp 1973, Chenoweth & Stephan 2011 / Locke, 1776 Declaration, Fanon 1961 | Gandhian and Kingian nonviolence from armed-struggle and armed-self-defence traditions              |

---

## Detailed entries

Each entry gives: **Poles**, **definition** (the trade-off), **steelmen**, **lineage**,
**measurement**, **distinguishes**, **overlap and recommendation**, and **sub-facets**. A
**Foundation boundary** note appears where the candidate could belong to either layer.

### A. Economic life

#### A1. Distribution

- **Poles:** Market entitlement ↔ Egalitarian redistribution.
- **Definition:** Should the law leave the distribution of income and wealth as fair
  exchange produces it, or reshape it toward greater equality?
- **Steelmen.** _Entitlement:_ what people earn and exchange freely is theirs. Imposing
  a pattern means continually overriding free choices, weakens incentives, and treats
  people's efforts as a common pool. _Redistribution:_ market outcomes reflect luck of
  birth, talent and circumstance as much as effort. Large inequalities corrode equal
  citizenship, and a fair society shares the gains of cooperation.
- **Lineage.** Aristotle, _Nicomachean Ethics_ V (distributive justice as proportion to
  merit); Rawls, _A Theory of Justice_ (1971), difference principle; Nozick, _Anarchy,
  State, and Utopia_ (1974), entitlement theory and "Wilt Chamberlain"; Hayek, _Law,
  Legislation and Liberty_ vol. 2, _The Mirage of Social Justice_ (1976); Dworkin, "What
  is Equality?" (_Philosophy & Public Affairs_ 1981); G. A. Cohen, _Rescuing Justice and
  Equality_ (2008); Frankfurt, "Equality as a Moral Ideal" (_Ethics_ 1987, sufficiency);
  Parfit, "Equality or Priority?" (Lindley Lecture 1991; _Ratio_ 1997); Anderson, "What
  Is the Point of Equality?" (_Ethics_ 1999); Bobbio, _Left and Right_ (1994), equality
  as the core left–right distinction; Piketty, _Capital in the Twenty-First Century_
  (2014). On merit: M. Young, _The Rise of the Meritocracy_ (1958); Sandel, _The Tyranny
  of Merit_ (2020).
- **Measurement.** CHES `redistribution`, `lrecon`; ESS `gincdif` ("government should
  reduce differences in income levels"); WVS income-equality vs. incentives item; ANES
  guaranteed job and income scale; MARPOR per503 Equality: Positive; Feldman (1988,
  _AJPS_) on equal opportunity and economic individualism as core beliefs.
- **Distinguishes.** Libertarians and classical liberals from social democrats and
  socialists; Rawlsian liberals from Nozickian libertarians; sufficientarians from strict
  egalitarians (as Reasons).
- **Overlap and recommendation.** Correlates with A7 (welfare), but A1 is about the
  _shape_ of the distribution, A7 about _insurance against risk_. Many people want
  generous insurance and accept large inequality, or the reverse. **Keep separate.**
- **Sub-facets.** Tax progressivity; wealth and inheritance taxes; which metric (equality,
  priority, sufficiency); desert and meritocracy; formal vs. fair equality of
  opportunity; executive pay.

#### A2. Economic coordination

- **Poles:** Public direction ↔ Market coordination.
- **Definition:** Should the economy be coordinated mainly through prices and
  competition, or through deliberate public direction (ownership, planning, industrial
  policy, heavy regulation)?
- **Steelmen.** _Public direction:_ markets underprovide public goods, misprice long-term
  and social costs, and leave strategic sectors to short-term profit. Coordinated
  investment built many of the fastest-growing economies. _Market coordination:_ prices
  carry dispersed knowledge no planner can gather. Competition disciplines waste, and
  decentralised choice respects people's own priorities.
- **Lineage.** Mises, "Economic Calculation in the Socialist Commonwealth" (1920); Lange,
  "On the Economic Theory of Socialism" (_Review of Economic Studies_ 1936–37); Hayek,
  "The Use of Knowledge in Society" (_AER_ 1945); Polanyi, _The Great Transformation_
  (1944); Keynes, _General Theory_ (1936); Friedman, _Capitalism and Freedom_ (1962);
  Kornai, _Economics of Shortage_ (1980); Johnson, _MITI and the Japanese Miracle_ (1982);
  Hall & Soskice, _Varieties of Capitalism_ (2001); Mazzucato, _The Entrepreneurial State_
  (2013).
- **Measurement.** CHES `econ_interven`, `deregulation`, `lrecon`; MARPOR per401, per403,
  per404, per412, per413; WVS private vs. state ownership item.
- **Distinguishes.** Nordic social democrats (markets plus redistribution) from democratic
  socialists (public ownership); East Asian developmental-state nationalists from
  free-market nationalists; ordoliberals (markets inside a strong legal frame) from
  laissez-faire.
- **Overlap and recommendation.** Separable from A3: Roemer's _A Future for Socialism_
  (1994) pairs social ownership with markets. Separable from A1: a planner need not be an
  egalitarian. **Keep.**
- **Sub-facets.** Ownership of key sectors; industrial policy; price controls; regulatory
  intensity; public vs. private delivery of services.

#### A3. Property in capital and goods

- **Poles:** Robust private ownership ↔ Socially conditioned ownership.
- **Definition:** Are property rights mostly prior to the state, so that the law should
  protect them and rarely redraw them? Or are they conventions the community defines and
  may condition on social purposes?
- **Steelmen.** _Robust ownership:_ secure property is the material basis of
  independence, planning and resistance to power. If the state can redefine it at will,
  every holding becomes a permission. _Social conditioning:_ ownership is a bundle of
  rights the law creates. It can and should carry obligations ("property entails
  obligations", German Basic Law Art. 14(2)), because no one's holdings exist apart from
  the social order that secures them.
- **Lineage.** Locke, _Second Treatise_ ch. 5 (1689); Nozick (1974); Waldron, _The Right to
  Private Property_ (1988); Honoré, "Ownership" (1961), the bundle of incidents; Proudhon,
  _What Is Property?_ (1840); Marx; Leo XIII, _Rerum Novarum_ (1891) and Pius XI,
  _Quadragesimo Anno_ (1931) on the "social character" of ownership; Duguit, property as
  social function (early 1910s; _(verify exact work)_); Brazilian Constitution 1988 Art.
  5 XXIII; Murphy & Nagel, _The Myth of Ownership_ (2002); Gandhi's "trusteeship".
- **Measurement.** No dedicated mass item; partly captured by MARPOR per413
  (nationalisation) and WVS ownership item.
- **Distinguishes.** Libertarians from Catholic social teaching and Christian democrats
  (both pro-private-property, but differing on its social function); market socialists
  from social democrats (with A2).
- **Overlap and recommendation.** Overlaps A1 (is taxation a taking?) and A2 (ownership).
  The stress-test shows it must not also carry land and natural resources (see A4).
  **Keep, restricted to produced goods and capital**, or merge into A1 if the owner
  prefers fewer economic Dimensions.
- **Sub-facets.** Takings and eminent domain; regulation as taking; inheritance;
  intellectual property; property and taxation.
- **Foundation boundary.** Whether there are natural (pre-political) rights at all is a
  Foundation question for #20. A3 asks only what the law should do with property.

#### A4. Land and natural resources (S)

- **Poles:** Common inheritance ↔ Private appropriation.
- **Definition:** Should land and natural resources be treated like any other owned
  good, or as a common inheritance whose value belongs to everyone (through public
  ownership, community commons, or equal shares of rent)?
- **Steelmen.** _Common inheritance:_ nobody made the land. Its rising value is created by
  the community, so private capture of that rent is unearned, and taxing or sharing it is
  fair and efficient. _Private appropriation:_ secure, tradable title is what makes land
  productive and protects smallholders. Formal title has lifted the poor (de Soto), and
  "commons" often degrade or are captured by states.
- **Lineage.** Locke's proviso ("enough and as good"); Paine, _Agrarian Justice_ (1797);
  Mill, _Principles of Political Economy_ (1848), "unearned increment"; George, _Progress
  and Poverty_ (1879); Steiner, _An Essay on Rights_ (1994); Vallentyne & Steiner (eds.),
  _Left-Libertarianism and Its Critics_ (2000); Otsuka, _Libertarianism without
  Inequality_ (2003); Hardin, "The Tragedy of the Commons" (_Science_ 1968); Ostrom,
  _Governing the Commons_ (1990); de Soto, _The Mystery of Capital_ (2000); UN General
  Assembly Res. 1803 (1962), permanent sovereignty over natural resources; Nyerere,
  _Ujamaa_ (1967); Lipton, _Land Reform in Developing Countries_ (2009).
- **Measurement.** No standard cross-national item _(gap)_.
- **Distinguishes.** Georgists and Steiner–Vallentyne left-libertarians (land common,
  produced goods private) from right-libertarians (both private) and socialists (both
  public); resource nationalists; land reformers; Ostrom-style commoners (community, not
  state).
- **Overlap and recommendation.** Without A4, a Georgist's Position on A3 averages
  "fully private" and "fully common" into a meaningless middle. **Keep** (added by the
  stress-test).
- **Sub-facets.** Land value tax; land reform; ownership of oil, minerals and water, and
  sovereign wealth funds (e.g. the Alaska Permanent Fund dividend); commons governance;
  indigenous land title (see F4); housing and zoning (see E1).

#### A5. Economic scale and concentration

- **Poles:** Scale and efficiency ↔ Dispersed ownership and small scale.
- **Definition:** Should the law tolerate large firms and concentrated ownership when
  they deliver efficiency and low prices, or should it break up concentrations and favour
  widely held, small-scale property?
- **Steelmen.** _Scale:_ large firms fund research, cut prices and compete globally.
  Antitrust should protect consumers, not competitors (Bork), and big firms drive
  innovation (Schumpeter 1942). _Dispersal:_ concentrated economic power is political
  power. A society of owners (farmers, shopkeepers, worker-owners) is freer and more
  self-governing than one of employees and dependants.
- **Lineage.** Jefferson's agrarian republic; Brandeis, _Other People's Money_ (1914);
  Belloc, _The Servile State_ (1912); Chesterton, _The Outline of Sanity_ (1926); Eucken,
  _Grundsätze der Wirtschaftspolitik_ (1952), ordoliberal anti-monopoly; Meade (1964) and
  Rawls, _Justice as Fairness: A Restatement_ (2001), "property-owning democracy";
  Schumacher, _Small Is Beautiful_ (1973); Chandler, _The Visible Hand_ (1977); Bork, _The
  Antitrust Paradox_ (1978); Khan, "Amazon's Antitrust Paradox" (_Yale Law Journal_ 2017);
  Wu, _The Curse of Bigness_ (2018).
- **Measurement.** No standard mass item _(gap)_.
- **Distinguishes.** Distributists, neo-Brandeisians, ordoliberals and agrarians from
  _both_ Chicago-school liberals and state socialists, who are both comfortable with
  scale. Ordoliberals from the Chicago school. No other candidate separates these.
- **Overlap and recommendation.** Touches A9 (employee ownership) and E1 (localism).
  **Keep.**
- **Sub-facets.** Antitrust standard; support for small firms and family farms; wide
  asset ownership (baby bonds, employee ownership); platform and big-tech power; media
  ownership.

#### A6. Moral limits of markets (S)

- **Poles:** Protected non-market spheres ↔ Markets without fixed limits.
- **Definition:** Should some goods be kept out of the market by law, such as bodies,
  organs, sex, surrogacy, votes, citizenship, or school places? Or should voluntary
  exchange be allowed wherever it is otherwise permissible?
- **Steelmen.** _Protected spheres:_ putting a price on some goods changes what they are
  and corrodes the norms around them (blood donation, Titmuss). Desperation makes some
  "consent" hollow. Money should not buy what other spheres of life distribute by other
  rules (Walzer). _No fixed limits:_ if you may give something away, you may sell it
  (Brennan & Jaworski). Bans push trade underground and deny the poor options, and
  "repugnance" has a poor historical record as a guide to law.
- **Lineage.** Titmuss, _The Gift Relationship_ (1970); Walzer, _Spheres of Justice_
  (1983), "blocked exchanges"; Anderson, _Value in Ethics and Economics_ (1993); Radin,
  _Contested Commodities_ (1996); Satz, _Why Some Things Should Not Be for Sale_ (2010);
  Sandel, _What Money Can't Buy_ (2012); Roth, "Repugnance as a Constraint on Markets"
  (_JEP_ 2007); Becker, _The Economic Approach to Human Behavior_ (1976); Landes & Posner,
  "The Economics of the Baby Shortage" (_J. Legal Studies_ 1978); Brennan & Jaworski,
  _Markets Without Limits_ (2016).
- **Measurement.** None standard _(gap)_.
- **Distinguishes.** Communitarians, Christian democrats, many socialists and many social
  conservatives (for different Reasons) from libertarians and market liberals. It also
  splits the left on sex work and commercial surrogacy.
- **Overlap and recommendation.** Overlaps C2 (sex work), C3 (organs, surrogacy) and A2.
  It is distinct because the question is _commodification_, not coercion or life. A
  person can permit unpaid surrogacy and forbid paid surrogacy. **Keep** (added by the
  stress-test).
- **Sub-facets.** Organ and blood markets; commercial surrogacy; sex work; paid
  citizenship and visas; money in politics (see C6); for-profit provision of public
  goods (prisons, schools).

#### A7. Welfare and social insurance

- **Poles:** Self-reliance and voluntary provision ↔ Public social insurance.
- **Definition:** How far should the community, through the state, insure people against
  sickness, old age, unemployment and disability? How much should be left to
  individuals, families, markets and voluntary mutual aid?
- **Steelmen.** _Self-reliance:_ voluntary and mutual provision (friendly societies,
  churches, family) keeps responsibility and solidarity personal. It avoids dependency
  and leaves people their own money. _Public insurance:_ risks like illness and old age
  hit everyone and markets insure them badly. Universal pooling gives security as a right
  of citizenship, not a charity.
- **Lineage.** Bismarck's social insurance (1880s); Beveridge Report (1942); Marshall,
  "Citizenship and Social Class" (1950); Titmuss, _Essays on 'the Welfare State'_ (1958);
  Esping-Andersen, _The Three Worlds of Welfare Capitalism_ (1990); Korpi & Palme, "The
  Paradox of Redistribution" (_ASR_ 1998), universal vs. targeted; Hayek, _The
  Constitution of Liberty_ (1960) ch. 19 (accepting a minimum); Friedman (1962), negative
  income tax; Murray, _Losing Ground_ (1984); Beito, _From Mutual Aid to the Welfare
  State_ (2000).
- **Measurement.** ANES government services/spending and government health insurance
  scales; ISSP Role of Government modules; ESS welfare-attitudes modules (2008, 2016);
  CHES `spendvtax`; MARPOR per504/per505.
- **Distinguishes.** Liberal, conservative-corporatist and social-democratic welfare
  regimes. Combined with E1, it separates Christian democracy (generous, but delivered
  through family, church and occupational funds) from social democracy (generous and
  state-delivered).
- **Overlap and recommendation.** Overlaps A1 and A8; see those entries. **Keep.**
- **Sub-facets.** Universal vs. means-tested; cash vs. services; public vs. private
  delivery (vouchers); pensions; health-care model; basic income.

#### A8. Reciprocity in support (S)

- **Poles:** Unconditional support ↔ Conditional (reciprocal) support.
- **Definition:** Should public support be conditional on contribution (work, job search,
  training, community service)? Or should it be given unconditionally as a right?
- **Steelmen.** _Unconditional:_ conditions are humiliating and costly to police. They
  miss unpaid care work and push people into bad jobs, and real freedom needs a floor no
  one can take away (Van Parijs). _Reciprocal:_ a fair scheme of cooperation asks
  everyone able to contribute to do so. Support without reciprocity erodes the solidarity
  that sustains it (White's "civic minimum").
- **Lineage.** Rawls, "The Priority of Right and Ideas of the Good" (_PPA_ 1988), the
  Malibu surfers remark; Van Parijs, "Why Surfers Should Be Fed" (_PPA_ 1991) and _Real
  Freedom for All_ (1995); Mead, _Beyond Entitlement_ (1986); White, _The Civic Minimum_
  (2003); Gilens, _Why Americans Hate Welfare_ (1999); van Oorschot, "Who Should Get What,
  and Why?" (_Policy & Politics_ 2000), deservingness criteria; Murray, _In Our Hands_
  (2006), a basic income from the right.
- **Measurement.** Deservingness and conditionality items in ESS welfare modules
  _(verify)_.
- **Distinguishes.** Blue Labour, workfare social democrats and many Christian democrats
  from the basic-income left. On the right, Friedman/Murray basic-income libertarians
  from workfare conservatives. Without A8, these pairs collapse on A7.
- **Overlap and recommendation.** Close to E10 (civic duties); the "duty to work" could
  live there. **Keep separate** (added by the stress-test), or merge into E10 if the owner
  prefers.
- **Sub-facets.** Work requirements; benefit sanctions; basic income; treatment of care
  work; contributory vs. tax-funded entitlement.

#### A9. Workplace governance

- **Poles:** Worker voice and self-management ↔ Owner and managerial authority.
- **Definition:** Should firms be governed by their owners and managers? Or should the
  people who work in them have a binding say, through unions, co-determination or
  self-management?
- **Steelmen.** _Worker voice:_ the workplace is where most adults are governed day to
  day. Unaccountable authority there is a form of private government (Anderson), and
  democracy should not stop at the factory gate (Dahl). _Managerial authority:_ owners
  bear the residual risk and need clear control to coordinate production and attract
  capital. Workers already choose their employer, and investor ownership dominates for
  good efficiency reasons (Hansmann).
- **Lineage.** S. & B. Webb, _Industrial Democracy_ (1897); _Rerum Novarum_ (1891) on
  unions; G. D. H. Cole, _Guild Socialism Restated_ (1920); Rocker, _Anarcho-Syndicalism_
  (1938); Coase, "The Nature of the Firm" (1937); Alchian & Demsetz (_AER_ 1972); Jensen &
  Meckling (_J. Financial Economics_ 1976); Pateman, _Participation and Democratic Theory_
  (1970); Friedman, "The Social Responsibility of Business Is to Increase Its Profits"
  (_NYT Magazine_ 1970); Freeman & Medoff, _What Do Unions Do?_ (1984); R. E. Freeman,
  _Strategic Management: A Stakeholder Approach_ (1984); Dahl, _A Preface to Economic
  Democracy_ (1985); Hansmann, _The Ownership of Enterprise_ (1996); Ferreras, _Firms as
  Political Entities_ (2017); Anderson, _Private Government_ (2017); German
  Co-determination Act (1976).
- **Measurement.** MARPOR per701/per702 (labour groups); ISSP Work Orientations; union
  approval items.
- **Distinguishes.** Anarcho-syndicalists, guild socialists, the co-operative movement,
  co-determining Christian democrats and civic republicans from libertarians, and also
  from social democrats who redistribute but leave workplace hierarchy intact.
- **Overlap and recommendation.** Touches A5 and A2. **Keep.**
- **Sub-facets.** Union rights and bargaining; board-level co-determination;
  co-operatives and employee ownership; employment protection; shareholder vs.
  stakeholder governance; minimum wage.

#### A10. Trade and economic openness

- **Poles:** Open exchange ↔ Economic protection and self-reliance.
- **Definition:** Should goods, capital and investment flow freely across borders, or
  should a community protect and build its own productive base?
- **Steelmen.** _Open exchange:_ trade lets everyone specialise, lowers prices (especially
  for the poor), spreads technology and ties nations together peacefully. _Protection:_
  today's rich countries industrialised behind tariffs ("kicking away the ladder").
  Sudden import shocks devastate communities, and a nation that cannot make essentials is
  not free.
- **Lineage.** Smith, _Wealth of Nations_ (1776); Ricardo, _Principles_ (1817); Hamilton,
  _Report on Manufactures_ (1791); List, _The National System of Political Economy_
  (1841); Prebisch, _The Economic Development of Latin America and Its Principal Problems_
  (ECLA, 1950); Gandhi, _Hind Swaraj_ (1909), swadeshi; Bhagwati, _In Defense of
  Globalization_ (2004); Chang, _Kicking Away the Ladder_ (2002); Rodrik, _The
  Globalization Paradox_ (2011); Autor, Dorn & Hanson, "The China Syndrome" (_AER_ 2013).
- **Measurement.** CHES `protectionism`; MARPOR per406/per407.
- **Distinguishes.** National-populists, Latin American developmentalists, swadeshi
  Gandhians, food-sovereignty agrarians and parts of the old left from free-trade liberals.
  Free-trade nationalists show A10 is separate from F1.
- **Overlap and recommendation.** Correlates with F1 and E2 but is separable. **Keep.**
- **Sub-facets.** Tariffs and industrial protection; capital controls; foreign
  investment screening; food and energy self-sufficiency; trade agreements.

#### A11. Money and public finance

- **Poles:** Discretion and active management ↔ Rules and fiscal discipline.
- **Definition:** Should money and budgets be governed by firm rules (stable money,
  balanced budgets, debt limits)? Or should governments and central banks actively manage
  demand and use deficits?
- **Steelmen.** _Discretion:_ recessions waste lives and output, and a state that issues
  its own currency can and should spend to keep people employed (Keynes, Lerner). Rigid
  rules turn downturns into depressions. _Rules:_ discretion invites inflation and
  political business cycles, and rules make policy credible (Kydland & Prescott).
  Deficits shift costs to people who cannot vote (Buchanan & Wagner).
- **Lineage.** Simons, "Rules versus Authorities in Monetary Policy" (_JPE_ 1936);
  Keynes (1936); Lerner, "Functional Finance and the Federal Debt" (_Social Research_
  1943); Friedman & Schwartz, _A Monetary History of the United States_ (1963); Hayek,
  _Denationalisation of Money_ (1976); Buchanan & Wagner, _Democracy in Deficit_ (1977);
  Kydland & Prescott, "Rules Rather than Discretion" (_JPE_ 1977); Kelton, _The Deficit
  Myth_ (2020). Populist monetary traditions: Bryan's "Cross of Gold" speech (1896);
  Douglas's Social Credit.
- **Measurement.** MARPOR per409 (Keynesian demand management), per414 (economic
  orthodoxy); CHES `spendvtax` (partly).
- **Distinguishes.** Ordoliberals, fiscal conservatives and hard-money libertarians from
  Keynesians and MMT. It separates classical liberals from spending populists of left and
  right, and (with E2 and E6) classical liberals from "neoliberals" (see stress-test).
- **Overlap and recommendation.** Partly A2 (macro management) and E6 (central-bank
  independence is an expertise question). **Keep tentatively; candidate for demotion to a
  facet of A2** (open question).
- **Sub-facets.** Debt and deficit rules; central-bank mandate and independence; gold or
  hard money vs. fiat; inflation vs. unemployment priority.

### B. Nature, technology, the future

#### B1. Environmental protection

- **Poles:** Prosperity and development first ↔ Ecological protection first.
- **Definition:** When protecting ecosystems and the climate costs jobs, growth or cheap
  energy, which should give way?
- **Steelmen.** _Prosperity first:_ poverty kills now. Cheap energy and growth fund
  health, and poorer countries have a right to develop as rich ones did. Cost-benefit
  analysis should set environmental ambition (Nordhaus). _Protection first:_ ecosystems
  and a stable climate are the base of all future prosperity, and damage is often
  irreversible. Those who bear the harm (the poor, the future, other species) are not at
  the table.
- **Lineage.** Leopold, _A Sand County Almanac_ (1949); Carson, _Silent Spring_ (1962);
  Hardin (1968); Passmore, _Man's Responsibility for Nature_ (1974); Dobson, _Green
  Political Thought_ (1990); Eckersley, _Environmentalism and Political Theory_ (1992);
  Dryzek, _The Politics of the Earth_ (1997); Lomborg, _The Skeptical Environmentalist_
  (2001); Nordhaus, _A Question of Balance_ (2008); UN Declaration on the Right to
  Development (1986); UNFCCC (1992), "common but differentiated responsibilities".
- **Measurement.** WVS environment vs. economic growth item; CHES `environment`, 2024
  `climate_change`; MARPOR per501; New Ecological Paradigm scale (Dunlap & Van Liere 1978;
  Dunlap et al. 2000).
- **Distinguishes.** Greens from productivists of both left and right; Global South
  developmentalists from Northern greens.
- **Overlap and recommendation.** Distinct from B2: green-growth advocates are high on
  protection _and_ pro-growth. **Keep.**
- **Sub-facets.** Climate-policy stringency; conservation and land use; energy mix (see
  B3 for nuclear); climate burden-sharing (see F1); rights of nature.
- **Foundation boundary.** Anthropocentrism vs. ecocentrism (Naess, "The Shallow and the
  Deep" 1973) is a value-theory question for #20. Its political expressions (Stone,
  "Should Trees Have Standing?" 1972; Ecuador's 2008 constitutional rights of nature)
  stay here as a sub-facet.

#### B2. Growth

- **Poles:** Sufficiency and limits ↔ Growth and abundance.
- **Definition:** Should society aim for continued economic growth and material
  abundance, or deliberately aim for a stable, sufficient economy within limits?
- **Steelmen.** _Sufficiency:_ endless growth on a finite planet is impossible. Beyond a
  point, more consumption doesn't make people happier, and a steady state frees time for
  what matters (Mill's "stationary state"). _Abundance:_ growth is how humanity escaped
  mass poverty. Human ingenuity keeps expanding resources (Simon), and growth makes
  societies more tolerant and generous (B. Friedman).
- **Lineage.** Mill, _Principles_ (1848) Bk IV ch. 6; Meadows et al., _The Limits to
  Growth_ (1972); Schumacher (1973); Daly, _Steady-State Economics_ (1977); Kumarappa,
  _Economy of Permanence_ (1945); Jackson, _Prosperity without Growth_ (2009); Kallis,
  _Degrowth_ (2018); Hickel, _Less Is More_ (2020); Simon, _The Ultimate Resource_ (1981);
  B. Friedman, _The Moral Consequences of Economic Growth_ (2005); OECD, _Towards Green
  Growth_ (2011); Asafu-Adjaye et al., _An Ecomodernist Manifesto_ (2015); Cowen, _Stubborn
  Attachments_ (2018); Klein & Thompson, _Abundance_ (2025).
- **Measurement.** MARPOR per410 (growth positive), per416 (anti-growth economy).
- **Distinguishes.** Degrowthers, Gandhians and some eco-conservatives from ecomodernists,
  accelerationists, developmentalists and mainstream left and right.
- **Overlap and recommendation.** Partly B1 and B3. **Keep; merge into B1 is the
  fallback** if the owner wants one ecology Dimension, at the cost of collapsing green
  growth and degrowth.
- **Sub-facets.** GDP as a goal; working time and post-work; consumption limits;
  housing and infrastructure "abundance".

#### B3. Technology and risk

- **Poles:** Proaction ↔ Precaution.
- **Definition:** When a powerful new technology has uncertain risks, should society let
  it proceed and fix problems as they appear? Or should it require proof of safety
  first?
- **Steelmen.** _Proaction:_ the costs of delay are real but invisible (cures not found,
  energy not built). Most feared technologies proved benign, and progress itself is the
  best safety strategy. _Precaution:_ some harms are irreversible or catastrophic.
  Technologies are hardest to control once entrenched (Collingridge), and our power now
  outruns our foresight (Jonas).
- **Lineage.** Bacon, _New Atlantis_ (1627); Condorcet, _Sketch_ (1795); Ellul, _The
  Technological Society_ (1954); Mumford, _The Myth of the Machine_ (1967); Jonas, _Das
  Prinzip Verantwortung_ (1979; Eng. 1984); Collingridge, _The Social Control of
  Technology_ (1980); Winner, "Do Artifacts Have Politics?" (_Daedalus_ 1980); Rio
  Declaration (1992) Principle 15; Wingspread Statement (1998); Bostrom, "Existential
  Risks" (_J. Evolution & Technology_ 2002); More, "The Proactionary Principle" (c.
  2004–05, _(verify date)_); Sunstein, _Laws of Fear_ (2005); Thierer, _Permissionless
  Innovation_ (2014); Srnicek & Williams, _Inventing the Future_ (2015).
- **Measurement.** Issue-specific items (GMOs, nuclear, AI) in Eurobarometer and Pew;
  no general scale _(gap)_.
- **Distinguishes.** Tech-accelerationists (right and left) from precautionary greens,
  Burkean conservatives, Gandhians and AI-risk-focused people. It cuts across left and
  right.
- **Overlap and recommendation.** Touches B2 and C3 (gene editing). **Keep.**
- **Sub-facets.** AI governance; biotech and GMOs; nuclear power; human enhancement;
  automation and work; surveillance technology (see D1).

#### B4. Future generations

- **Poles:** Present people's claims ↔ Future people's claims.
- **Definition:** How much should today's policy sacrifice for people not yet born, for
  example in climate, debt, pensions and long-term risk?
- **Steelmen.** _Present claims:_ people alive now, especially the poor, have urgent and
  certain needs. Future people will probably be richer, and heavy sacrifice for an
  uncertain future is hard to justify. _Future claims:_ the unborn will far outnumber us
  and cannot vote. Society is a partnership "between those who are living, those who are
  dead, and those who are to be born" (Burke).
- **Lineage.** Burke, _Reflections_ (1790); Rawls (1971) §44, just savings; Parfit,
  _Reasons and Persons_ (1984); Weiss, _In Fairness to Future Generations_ (1989); Stern
  Review (2006/2007) vs. Nordhaus, "A Review of the Stern Review" (_JEL_ 2007) on
  discounting; Thompson, "Representing Future Generations" (_CRISPP_ 2010); Gardiner, _A
  Perfect Moral Storm_ (2011); González-Ricoy & Gosseries (eds.), _Institutions for Future
  Generations_ (2016); MacAskill, _What We Owe the Future_ (2022); Wales's Well-being of
  Future Generations Act (2015).
- **Measurement.** None standard _(gap)_.
- **Distinguishes.** Burkean conservatives, greens, longtermists and fiscal hawks (on
  debt) from presentists. It cuts across left and right.
- **Overlap and recommendation.** Partly B1. **Keep.**
- **Sub-facets.** Social discount rate; public debt; pension promises; climate;
  existential risk; institutions representing the future.
- **Foundation boundary.** Population ethics and the non-identity problem (Parfit) belong
  in #20.

#### B5. Animals

- **Poles:** Legal protection of animal interests ↔ Human priority in using animals.
- **Definition:** How far should the law protect animals' interests when they conflict
  with human uses such as food, research, entertainment and land?
- **Steelmen.** _Protection:_ animals can suffer, and "the question is not, Can they
  reason? … but, Can they suffer?" (Bentham). A just society should not inflict large
  avoidable suffering. _Human priority:_ human welfare, livelihoods and cultural
  practices come first. Duties to animals are real but indirect or limited, and they don't
  amount to rights against human use (Kant, Carruthers, Scruton).
- **Lineage.** Kant, _Lectures on Ethics_ (indirect duties); Bentham, _Introduction to the
  Principles of Morals and Legislation_ (1789) ch. 17 note; Singer, _Animal Liberation_
  (1975); Regan, _The Case for Animal Rights_ (1983); Carruthers, _The Animals Issue_
  (1992); Scruton, _Animal Rights and Wrongs_ (1996); Nussbaum, _Frontiers of Justice_
  (2006); Donaldson & Kymlicka, _Zoopolis_ (2011); Cochrane, _Animal Rights Without
  Liberation_ (2012); Garner, _A Theory of Justice for Animals_ (2013). Non-Western: Jain
  and Buddhist _ahimsa_; India's Constitution Art. 48 (cattle protection).
- **Measurement.** Eurobarometer animal-welfare surveys; Animal Attitude Scale (Herzog,
  Betchart & Pittman 1991).
- **Distinguishes.** Animal-rights and welfarist traditions (secular and religious) from
  human-priority views.
- **Overlap and recommendation.** Minimal overlap. **Keep.**
- **Sub-facets.** Factory farming; animal research; hunting and blood sports; religious
  slaughter (see F4); wildlife and land use.
- **Foundation boundary.** Animals' moral status is #20 territory; B5 asks what the law
  should do.

### C. The state and the good life

#### C1. Neutrality vs. perfectionism (D)

- **Poles:** State neutrality ↔ State perfectionism.
- **Definition:** Should law and policy stay neutral among citizens' ideas of the good
  life? Or may the state promote ways of living it judges genuinely valuable?
- **Steelmen.** _Neutrality:_ citizens reasonably disagree about the good. Using shared
  coercive power to favour one view disrespects the others, and legitimacy needs reasons
  all can accept (Rawls's public reason). _Perfectionism:_ every policy shapes how people
  live anyway. A state that refuses to judge value abandons citizens to whatever forces
  remain, and an autonomous life needs a rich set of good options the state can sustain
  (Raz).
- **Lineage.** Aristotle, _Politics_; Rawls, _Political Liberalism_ (1993); R. Dworkin,
  "Liberalism" (1978); Ackerman, _Social Justice in the Liberal State_ (1980); Larmore,
  _Patterns of Moral Complexity_ (1987); Quong, _Liberalism without Perfection_ (2011);
  Raz, _The Morality of Freedom_ (1986); Hurka, _Perfectionism_ (1993); George, _Making Men
  Moral_ (1993); Sher, _Beyond Neutrality_ (1997); Wall, _Liberalism, Perfectionism and
  Restraint_ (1998); Sandel, _Democracy's Discontent_ (1996), the "formative project";
  Chan, _Confucian Perfectionism_ (2014); Deneen, _Why Liberalism Failed_ (2018);
  Vermeule, _Common Good Constitutionalism_ (2022).
- **Measurement.** No direct mass or expert instrument _(gap)_; MARPOR per603/per604
  touch it.
- **Distinguishes.** Political liberals from perfectionist liberals (Raz), integralists,
  Confucian perfectionists, Aristotelian communitarians and formative civic republicans.
  Perfectionism is not only conservative: Marxian flourishing and green critiques of
  consumerism are perfectionist too.
- **Overlap and recommendation.** C1 is about _promoting_ the good (funding, education,
  incentives, messaging). C2 is about _coercively restricting_ self-regarding conduct.
  Raz is perfectionist but endorses the harm principle, which is why they must stay
  apart. **Keep (decided).**
- **Sub-facets.** Public funding of arts, culture and religion; curriculum content;
  promoting marriage; public-health lifestyle campaigns; "sin" taxes (with C2).
- **Foundation boundary.** This is the framework's own example: a person's own ethic is
  Foundation, and whether the state should promote one is Political.

#### C2. Regulation of personal conduct

- **Poles:** Protective and moral regulation ↔ Self-sovereignty (harm principle).
- **Definition:** May the law restrict conduct that mainly affects the person themselves
  or consenting adults? It could do so to protect them from themselves (paternalism) or
  to uphold shared morality (legal moralism).
- **Steelmen.** _Regulation:_ people predictably harm themselves (addiction, short-term
  bias), and a caring society protects them, sometimes with mere nudges. A society's
  shared morality is part of what holds it together (Devlin). _Self-sovereignty:_ "over
  himself, over his own body and mind, the individual is sovereign" (Mill). Adults must be
  free to make their own mistakes, and morals laws punish harmless difference.
- **Lineage.** Mill, _On Liberty_ (1859); Hart, _Law, Liberty, and Morality_ (1963); Devlin,
  _The Enforcement of Morals_ (1965); G. Dworkin, "Paternalism" (_The Monist_ 1972);
  Feinberg, _The Moral Limits of the Criminal Law_ (4 vols, 1984–88), harm, offence,
  paternalism and moralism as distinct liberty-limiting principles; J. Q. Wilson,
  "Against the Legalization of Drugs" (_Commentary_ 1990); Husak, _Drugs and Rights_
  (1992); George (1993); Thaler & Sunstein, _Nudge_ (2008); Conly, _Against Autonomy_
  (2013).
- **Measurement.** WVS "justifiable" items (e.g. prostitution); CHES `sociallifestyle`
  (2019, partly); MARPOR per603/per604.
- **Distinguishes.** Millian liberals and libertarians from nudge-technocrats, legal
  moralists, the public-health left and radical feminists on pornography and sex work.
  Reasons separate these: welfare-based, morality-based or equality-based.
- **Overlap and recommendation.** Overlaps C1, C3 and A6. **Keep as one Dimension**, with
  the reason (paternalism vs. moralism) recorded in Reasons. Splitting into two is the
  alternative (open question).
- **Sub-facets.** Drugs and alcohol; gambling; sex work; pornography; public decency and
  offence; compulsory safety rules; sin taxes and nudges.

#### C3. Life and body

- **Poles:** Bodily and reproductive autonomy ↔ Protection of human life and dignity.
- **Definition:** In questions at the edges of life and about the body (abortion,
  assisted dying, reproductive technology, human enhancement), should the law defer to the
  individual's choice? Or should it protect human life and dignity even against that
  choice?
- **Steelmen.** _Autonomy:_ no one should be forced to use their body to sustain another
  (Thomson), or to die in a way they find degrading. These are the most personal
  decisions there are (Dworkin, _Life's Dominion_). _Protection:_ the law's first duty is
  to protect human life, above all the most vulnerable. Some choices (killing, selling or
  redesigning humans) wrong others or dignity itself, and "consent" can be pressured.
- **Lineage.** Thomson, "A Defense of Abortion" (_PPA_ 1971); Finnis, "The Rights and
  Wrongs of Abortion" (_PPA_ 1973); Marquis, "Why Abortion Is Immoral" (_J. Phil._ 1989);
  R. Dworkin, _Life's Dominion_ (1993); Dworkin et al., "Assisted Suicide: The
  Philosophers' Brief" (_NYRB_ 1997); Kass, "The Wisdom of Repugnance" (1997); Asch,
  "Prenatal Diagnosis and Selective Abortion" (_AJPH_ 1999), disability critique;
  Savulescu, "Procreative Beneficence" (_Bioethics_ 2001); Keown, _Euthanasia, Ethics and
  Public Policy_ (2002); Habermas, _The Future of Human Nature_ (2003); Sandel, _The Case
  Against Perfection_ (2007); Harris, _Enhancing Evolution_ (2007); Bernardin's
  "consistent ethic of life" (1983).
- **Measurement.** ANES abortion item; WVS abortion and euthanasia "justifiable" items.
- **Distinguishes.** Pro-choice from pro-life of all stripes. It also captures cross-pressured
  positions: consistent-life-ethic progressives (anti-abortion, anti-death-penalty,
  pro-welfare), secular pro-lifers, libertarians split on abortion, and disability-rights
  critics of assisted dying.
- **Overlap and recommendation.** Overlaps C2 (but a third party may be involved, which C2
  excludes) and A6. **Keep.**
- **Sub-facets.** Abortion; assisted dying; IVF, embryo research and surrogacy; gene
  editing and enhancement; organ donation rules (with A6).
- **Foundation boundary.** Personhood and the moral status of the fetus, and the sanctity
  of life, are #20 matters.

#### C4. Family, sex and gender

- **Poles:** Upholding inherited family and sex roles ↔ Equalising and diversifying
  family and gender arrangements.
- **Definition:** Should law and policy uphold and privilege a traditional family form and
  sex roles? Or should it equalise between the sexes and treat diverse family forms and
  gender identities alike?
- **Steelmen.** _Upholding:_ the family built around marriage is society's basic school of
  care and the best-evidenced setting for raising children. Policy that ignores
  differences between the sexes, or treats marriage as one lifestyle among many, weakens
  what most people rely on, and many women freely prefer home-centred lives (Hakim).
  _Equalising:_ traditional roles have rested on women's economic dependence (Okin).
  Justice must reach inside the family, and the law should not rank loving relationships
  or force anyone into a role because of sex.
- **Lineage.** Aristotle, _Politics_ I; Confucian filial piety (_Analects_; _Classic of
  Filial Piety_); Hegel, _Philosophy of Right_ (1820); Mill, _The Subjection of Women_
  (1869); Engels, _The Origin of the Family_ (1884); Firestone, _The Dialectic of Sex_
  (1970); Lasch, _Haven in a Heartless World_ (1977); Pateman, _The Sexual Contract_ (1988);
  Okin, _Justice, Gender, and the Family_ (1989); Fraser, "After the Family Wage"
  (_Political Theory_ 1994); Esping-Andersen, _Social Foundations of Postindustrial
  Economies_ (1999), familialism vs. defamilialisation; Hakim, _Work-Lifestyle Choices in
  the 21st Century_ (2000), preference theory; Girgis, Anderson & George, _What Is
  Marriage?_ (2012); Brake, _Minimizing Marriage_ (2012); Norris & Inglehart, _Cultural
  Backlash_ (2019).
- **Measurement.** ANES women's equal role scale; WVS gender-role items; ISSP Family and
  Changing Gender Roles modules; CHES `sociallifestyle` (2019), `womens_rights`,
  `lgbtq_rights`, `samesex_marriage` (2024).
- **Distinguishes.** Social-conservative socialists, familialist Christian democrats,
  Nordic gender-egalitarian social democrats, liberal feminists and libertarians who want
  the state out of marriage. That last group is a neutral middle, distinguished by Reasons.
- **Overlap and recommendation.** Overlaps C1 and C2, and E1 (the family as a tier).
  **Keep. Possible split** into "sex and gender roles" and "family form and parental
  authority" (open question), because some people are egalitarian on one and traditional
  on the other.
- **Sub-facets.** Marriage law; same-sex relationships; gender identity in law; family
  policy (childcare vs. homemaker support); natalism; sex education; parental rights vs.
  the child's independent interests (Feinberg, "The Child's Right to an Open Future"
  1980; _Wisconsin v. Yoder_ 1972; Gutmann, _Democratic Education_ 1987).

#### C5. Religion and state

- **Poles:** Public role for religion ↔ Secular public order.
- **Definition:** Should public institutions be kept free of religion? Or should the
  state recognise, support or be guided by religion?
- **Steelmen.** _Public role:_ religion is a main source of a people's moral life and
  identity. A state that excludes it imposes a secular creed of its own, and established
  or cooperative arrangements can coexist with full freedom of worship. _Secular order:_
  only a state that takes no side in matters of faith can treat believers of all kinds,
  and unbelievers, as equals. Fusing religion and power corrupts both (Roger Williams,
  Madison).
- **Lineage.** Roger Williams, _The Bloudy Tenent of Persecution_ (1644); Locke, _A Letter
  Concerning Toleration_ (1689); Madison, _Memorial and Remonstrance_ (1785); Jefferson,
  Danbury letter (1802); Leo XIII, _Immortale Dei_ (1885); Vatican II, _Dignitatis
  Humanae_ (1965); French law of 1905 on separation (laïcité); Rawls (1993), public
  reason; Audi & Wolterstorff, _Religion in the Public Square_ (1997); Bhargava (ed.),
  _Secularism and Its Critics_ (1998), "principled distance"; Norris & Inglehart, _Sacred
  and Secular_ (2004); Taylor, _A Secular Age_ (2007); Fox, _A World Survey of Religion and
  the State_ (2008); An-Na'im, _Islam and the Secular State_ (2008); Kuru, _Secularism and
  State Policies toward Religion_ (2009), assertive vs. passive secularism; Maclure &
  Taylor, _Secularism and Freedom of Conscience_ (2011); Lipset & Rokkan (1967), the
  state–church cleavage; Qutb, _Milestones_ (1964) and Mawdudi on God's sovereignty.
- **Measurement.** Religion and State (RAS) project (Fox); CHES `religious_principles`;
  WVS items on religious leaders influencing government.
- **Distinguishes.** Christian and Islamic democrats from secular liberals; integralists
  from Christian democrats (_Dignitatis Humanae_ is a dividing line); French laïcité and
  Kemalism (assertive) from US separation (passive); Indian "principled distance".
- **Overlap and recommendation.** Separate from C1: there are secular perfectionists
  (Raz) and religious neutralists (Baptist separationists). **Keep.** The Pole runs as an
  ordered scale: assertive secularism, passive secularism, principled distance or
  accommodation, establishment, religious law as a source of legislation, theocracy.
- **Sub-facets.** Establishment and funding; religious schools; religious symbols in
  public institutions; religious exemptions (with F4); blasphemy (with C6); religious law
  in family matters.

#### C6. Speech and expression

- **Poles:** Maximal expressive freedom ↔ Protection from harmful expression.
- **Definition:** Should expression be protected even when it is offensive, hateful or
  false? Or may the law restrict speech that harms dignity, equality, public order or
  public reasoning?
- **Steelmen.** _Maximal freedom:_ the remedy for bad speech is more speech. Censorship
  powers end up used against minorities and dissenters, and truth is found only through
  open contest (Mill). _Protection:_ hate speech attacks its targets' standing as equal
  members of society (Waldron). Unchecked lies and incitement degrade the democratic
  debate that free speech exists to serve, and most democracies limit speech without
  tyranny.
- **Lineage.** Milton, _Areopagitica_ (1644); Mill (1859) ch. 2; Holmes, _Abrams v. United
  States_ dissent (1919); Meiklejohn, _Free Speech and Its Relation to Self-Government_
  (1948); _Brandenburg v. Ohio_ (1969); Matsuda, "Public Response to Racist Speech"
  (_Michigan Law Review_ 1989); MacKinnon, _Only Words_ (1993); Waldron, _The Harm in Hate
  Speech_ (2012); Post, _Citizens Divided_ (2014); Strossen, _Hate_ (2018); ECHR Art. 10(2).
- **Measurement.** Stouffer, _Communism, Conformity, and Civil Liberties_ (1955);
  Sullivan, Piereson & Marcus, _Political Tolerance and American Democracy_ (1982),
  "least-liked group"; GSS civil-liberties items.
- **Distinguishes.** US-style free-speech liberals and libertarians from European dignity
  liberals, multiculturalists, social conservatives (blasphemy, obscenity) and security
  hawks (sedition).
- **Overlap and recommendation.** Overlaps D1, C2 and F4. **Keep.**
- **Sub-facets.** Hate speech; blasphemy; obscenity; misinformation and platform
  moderation; campaign finance and political spending; academic freedom.

### D. Order, security, justice

#### D1. Security and civil liberties

- **Poles:** Civil liberties and due process ↔ Collective security and order.
- **Definition:** When protecting the public from crime, terrorism or disorder conflicts
  with individual rights (privacy, fair trial, freedom from search), which should give way?
- **Steelmen.** _Civil liberties:_ "better that ten guilty persons escape than that one
  innocent suffer" (Blackstone). Powers granted for emergencies outlast them and fall on
  the powerless, and privacy is a condition of freedom (Westin, Solove). _Security:_
  safety is the first liberty. Without order the vulnerable suffer most, and rights mean
  little in a neighbourhood ruled by crime (Wilson & Kelling).
- **Lineage.** Hobbes, _Leviathan_ (1651); Blackstone, _Commentaries_ (1769); Weber,
  "Politics as a Vocation" (1919), the monopoly of legitimate force; Packer, "Two Models
  of the Criminal Process" (_U. Penn. Law Review_ 1964); Westin, _Privacy and Freedom_
  (1967); Wilson & Kelling, "Broken Windows" (_Atlantic_ 1982); Waldron, "Security and
  Liberty: The Image of Balance" (_J. Political Philosophy_ 2003); Ackerman, "The
  Emergency Constitution" (_Yale LJ_ 2004); Agamben, _State of Exception_ (2005); Posner,
  _Not a Suicide Pact_ (2006); Solove, "'I've Got Nothing to Hide'" (_San Diego Law Review_
  2007); Zuboff, _The Age of Surveillance Capitalism_ (2019).
- **Measurement.** CHES `civlib_laworder`; MARPOR per605; Pew surveillance trade-off items.
- **Distinguishes.** Civil libertarians on left and right from law-and-order
  conservatives and security-first social democrats.
- **Overlap and recommendation.** This merges Packer's crime-control vs. due-process
  models with security vs. privacy. They share the same trade-off (state power vs.
  individual protections) and diverge rarely. **Keep as one; punishment split out as D2.**
- **Sub-facets.** Surveillance and data retention; policing powers; trial and evidence
  rights; emergency and counter-terror powers; torture; armed citizenry vs. the state's
  monopoly of force (Machiavelli's citizen militia; the US Second Amendment). Gun rights
  are a facet here, since as a standalone Dimension they are not globally portable.

#### D2. Punishment

- **Poles:** Desert and deterrence ↔ Rehabilitation and restoration.
- **Definition:** Should punishment mainly give offenders what they deserve and deter
  others? Or should it mainly repair harm and return offenders to society?
- **Steelmen.** _Desert and deterrence:_ taking crime seriously means proportionate
  punishment that expresses society's condemnation and respects offenders as responsible
  agents (Kant, von Hirsch). Credible penalties protect potential victims. _Rehabilitation
  and restoration:_ most offenders return to society, so punishment that hardens them
  makes everyone less safe. Repairing harm to victims and communities serves justice
  better than inflicting pain (Braithwaite, Zehr).
- **Lineage.** Beccaria, _On Crimes and Punishments_ (1764); Bentham (1789); Kant,
  _Metaphysics of Morals_ (1797); J. Q. Wilson, _Thinking About Crime_ (1975); von Hirsch,
  _Doing Justice_ (1976); Braithwaite, _Crime, Shame and Reintegration_ (1989); Zehr,
  _Changing Lenses_ (1990); Moore, _Placing Blame_ (1997); Duff, _Punishment,
  Communication, and Community_ (2001); Garland, _The Culture of Control_ (2001); Davis,
  _Are Prisons Obsolete?_ (2003).
- **Measurement.** GSS/ANES death-penalty items; ESS and ISSP items on sentencing
  severity _(verify codes)_.
- **Distinguishes.** Retributivists from restorative-justice and abolitionist traditions.
  Libertarians split (retributive on violence, lenient on victimless crime), and
  consistent-life-ethic Christians oppose the death penalty.
- **Overlap and recommendation.** Separate from D1: a civil libertarian may still be
  retributive. **Keep.**
- **Sub-facets.** Death penalty; sentence length; prison vs. alternatives; restorative
  justice; juvenile justice; prison abolition.
- **Foundation boundary.** Free will and desert (the framework's own example) are #20.
  D2 is where they bite.

#### D3. Rule of law vs. discretion

- **Poles:** Judgment for the case at hand ↔ Rule by general, fixed rules.
- **Definition:** Should public power act through general, prospective rules applied
  alike to all? Or through the trained judgment of officials who can respond to each case
  and to emergencies?
- **Steelmen.** _Judgment:_ no rule foresees every case. Wise, accountable rulers or
  officials can do justice where rigid rules do injustice (Aristotle on equity), and
  emergencies need prerogative (Locke). Government by virtue cultivates citizens better
  than government by penalty (Confucius, _Analects_ 2.3). _Fixed rules:_ only known rules
  let people plan their lives and stop officials from ruling by whim (Dicey, Hayek,
  Fuller). The rule of law is a precondition of freedom whatever else one wants.
- **Lineage.** Aristotle, _Politics_ III.15–16 (rule of law vs. rule of the best man);
  Confucius vs. Han Feizi (virtue and ritual vs. Legalist codified law); Locke, _Second
  Treatise_ ch. 14 (prerogative); Dicey, _Introduction to the Study of the Law of the
  Constitution_ (1885); Schmitt, _Political Theology_ (1922), "sovereign is he who
  decides on the exception"; Hayek, _The Road to Serfdom_ (1944) ch. 6 and _The
  Constitution of Liberty_ (1960); Fuller, _The Morality of Law_ (1964); Raz, "The Rule of
  Law and Its Virtue" (_Law Quarterly Review_ 1977); Kaplow, "Rules versus Standards"
  (_Duke LJ_ 1992); Tamanaha, _On the Rule of Law_ (2004); Posner & Vermeule, _The
  Executive Unbound_ (2010); Vermeule (2022).
- **Measurement.** CHES 2024 `judicial_independence` (partly); V-Dem rule-of-law index
  (institutional, not attitudinal).
- **Distinguishes.** Hayekian classical liberals and legal formalists from Confucian
  virtue-rule, common-good constitutionalists, defenders of administrative discretion, and
  Schmittian decisionists. Note that Legalists are rule-bound _and_ authoritarian, which
  shows D3 is not E8.
- **Overlap and recommendation.** Close to E8 (leadership) and E6 (agency discretion).
  **Keep separate; merging D3 and E8 into "constraint on rulers" is the fallback.**
- **Sub-facets.** Emergency powers; judicial formalism vs. purposivism; administrative
  discretion; mercy and pardon; rules vs. standards.

### E. Who decides: authority and democracy

#### E1. Subsidiarity (D)

- **Poles:** Smallest capable unit ↔ Larger, more central unit.
- **Definition:** When something must be done, should the default be the closest level
  (individual, family, voluntary association, locality), with higher levels acting only
  when lower ones cannot? Or should it be the larger unit that can act uniformly, pool
  risk and guarantee equal standards?
- **Steelmen.** _Smallest unit:_ people closest to a problem know it best. Small units
  let people govern themselves and experiment, and "it is an injustice … to assign to a
  greater and higher association what lesser and subordinate organizations can do"
  (_Quadragesimo Anno_ §79). _Larger unit:_ equal citizens deserve equal services wherever
  they live. Small units can be captured by local majorities or elites (Madison's
  "extended republic", Federalist 10), and many problems spill over boundaries.
- **Lineage.** Aristotle (household, village, polis); Aquinas; Althusius, _Politica_
  (1603, rev. 1614); Tocqueville, _Democracy in America_ (1835/1840); Proudhon, _The
  Principle of Federation_ (1863); Leo XIII (1891); Pius XI, _Quadragesimo Anno_ (1931)
  §79; Kropotkin, _Mutual Aid_ (1902); Nisbet, _The Quest for Community_ (1953); Tiebout,
  "A Pure Theory of Local Expenditures" (_JPE_ 1956); Riker, _Federalism_ (1964); Oates,
  _Fiscal Federalism_ (1972); V. Ostrom, _The Political Theory of a Compound Republic_
  (1971); Berger & Neuhaus, _To Empower People_ (1977), "mediating structures"; E. Ostrom
  (1990), polycentric governance; Weingast, "Market-Preserving Federalism" (_JLEO_ 1995);
  Maastricht Treaty (1992), now TEU Art. 5(3) and Protocol No. 2; Italian Constitution
  Art. 118 (2001 reform), horizontal subsidiarity _(verify paragraph)_; Gandhi's _gram
  swaraj_.
- **Measurement.** CHES `regions`; MARPOR per301/per302; Regional Authority Index (Hooghe,
  Marks & Schakel 2010, 2016), institutional.
- **Distinguishes.** Catholic social teaching, distributists, communitarians, localist
  greens, federalists and anarchists from Jacobin republican centralists and from
  centralising, uniform-standards social democrats.
- **Overlap and recommendation.** The decided candidate bundles three questions that
  people answer differently:
  - **(a) horizontal:** civil society and family vs. public authority;
  - **(b) vertical:** local and regional vs. national;
  - **(c) upward:** national vs. supranational.

  Catholic federalists favour all three lower tiers _and_ the EU (subsidiarity is an EU
  principle). Jacobins oppose both decentralisation and the EU, and Scottish nationalists
  favour devolution and the EU. **Recommendation:** keep E1 for (a) and (b), and move (c)
  to E2 to avoid double counting. Whether (a) and (b) should split is an open question.
- **Sub-facets.** Family and church vs. state provision; local vs. national standards in
  schools, policing and health; fiscal federalism; secession and self-determination
  (Buchanan, _Secession_ 1991); housing and zoning control.

#### E2. Sovereignty vs. pooled governance

- **Poles:** Pooled, rule-bound international governance ↔ Sovereign self-government.
- **Definition:** Should authority be pooled in international and supranational bodies
  (unions, courts, treaties), or kept with the self-governing nation-state?
- **Steelmen.** _Pooled governance:_ trade, climate, security and migration cross
  borders. Shared rules and courts tame power politics (Kant's federation of free states),
  and pooling lets small states shape what they could not control alone. _Sovereignty:_
  self-government means a people can make and unmake its own laws. Distant bodies escape
  democratic accountability, and Rodrik's trilemma says deep integration, national
  democracy and sovereignty cannot all coexist.
- **Lineage.** Bodin, _Six Books of the Commonwealth_ (1576); Vattel, _The Law of Nations_
  (1758); Kant, _Perpetual Peace_ (1795); Mitrany, _A Working Peace System_ (1943); Haas,
  _The Uniting of Europe_ (1958); Milward, _The European Rescue of the Nation-State_ (1992);
  Held, _Democracy and the Global Order_ (1995); Moravcsik, _The Choice for Europe_ (1998);
  Krasner, _Sovereignty: Organized Hypocrisy_ (1999); Hooghe & Marks, "A Postfunctionalist
  Theory of European Integration" (_BJPolS_ 2009); Rodrik (2011); Slobodian, _Globalists_
  (2018); Wittkopf, _Faces of Internationalism_ (1990), cooperative internationalism;
  Bandung (1955) and Non-Alignment; Nkrumah, _Africa Must Unite_ (1963).
- **Measurement.** CHES `eu_position`; MARPOR per107/per109, per108/per110; Wittkopf's
  cooperative-internationalism items.
- **Distinguishes.** Gaullists and sovereigntists (left and right) from European
  federalists, liberal internationalists and neoliberal "encasement" (Slobodian);
  pan-regionalists (pan-Africanism) from both.
- **Overlap and recommendation.** Takes over E1's supranational tier and absorbs
  "multilateralism vs. unilateralism". **Keep.**
- **Sub-facets.** Regional integration; international courts and human-rights
  jurisdiction; trade-rule bodies; collective security and alliances; global
  institutions (UN, climate treaties).

#### E3. Popular sovereignty vs. constitutional constraint

- **Poles:** Entrenched rights and judicial review ↔ Popular / legislative supremacy.
- **Definition:** Should basic rights and rules be put beyond ordinary majorities and
  enforced by courts? Or should the people and their elected legislature have the final
  word?
- **Steelmen.** _Entrenchment:_ majorities can trample minorities and the rules of fair
  competition itself. Independent courts protecting entrenched rights are what keep
  democracy democratic (Ely, Dworkin, Kelsen). _Legislative supremacy:_ citizens disagree
  in good faith about what rights require. Letting a few unelected judges settle those
  disagreements disrespects everyone else's equal voice (Waldron).
- **Lineage.** Rousseau, _The Social Contract_ (1762); Bentham, "Anarchical Fallacies"
  (c. 1796); Federalist 78 (1788); _Marbury v. Madison_ (1803); Thayer (_Harvard Law
  Review_ 1893); the Kelsen–Schmitt debate (c. 1929–31) on "who should be guardian of the
  constitution"; Bickel, _The Least Dangerous Branch_ (1962); Ely, _Democracy and Distrust_
  (1980); R. Dworkin, _Freedom's Law_ (1996); Waldron, _Law and Disagreement_ (1999) and
  "The Core of the Case Against Judicial Review" (_Yale LJ_ 2006); Tushnet, _Taking the
  Constitution Away from the Courts_ (1999); Hirschl, _Towards Juristocracy_ (2004);
  Bellamy, _Political Constitutionalism_ (2007); Gardbaum, _The New Commonwealth Model of
  Constitutionalism_ (2013).
- **Measurement.** CHES 2024 `judicial_independence`; V-Dem judicial constraints on the
  executive (institutional).
- **Distinguishes.** Westminster parliamentarians, Waldron-style democratic socialists and
  populists from legal constitutionalists. Islamic constitutionalists who treat sharia as
  higher law are a religious form of entrenchment (with C5).
- **Overlap and recommendation.** Different from E4: the UK is majoritarian with weak
  review, Switzerland consensual with weak review, the US majoritarian elections with
  strong review. **Keep.**
- **Sub-facets.** Strength of judicial review; bills of rights; how hard amendment is;
  referendums vs. courts; non-elected guardian bodies.

#### E4. Majoritarian vs. consensus

- **Poles:** Clear majority rule and accountability ↔ Power-sharing and broad consensus.
- **Definition:** Should the winning majority govern alone and be clearly accountable? Or
  should power be shared so that most groups have a say in government?
- **Steelmen.** _Majority rule:_ voters can see who is responsible and throw them out.
  Decisive governments can act, and power-sharing breeds backroom deals and blocks
  reform (Powell, Riker). _Consensus:_ in divided societies winner-takes-all leaves large
  minorities permanently shut out. Broad inclusion gives decisions legitimacy and
  stability (Lijphart; Wiredu's consensus tradition).
- **Lineage.** Locke, _Second Treatise_ ch. 8; Calhoun, _A Disquisition on Government_
  (1851), "concurrent majority"; Schumpeter, _Capitalism, Socialism and Democracy_ (1942);
  W. A. Lewis, _Politics in West Africa_ (1965); Lijphart, _Democracy in Plural Societies_
  (1977) and _Patterns of Democracy_ (1999; 2nd ed. 2012); Riker, _Liberalism Against
  Populism_ (1982); Horowitz, _Ethnic Groups in Conflict_ (1985), critique; Powell,
  _Elections as Instruments of Democracy_ (2000); Wiredu, "Democracy and Consensus in
  African Traditional Politics: A Plea for a Non-Party Polity" (1995; reprinted in
  _Cultural Universals and Particulars_, 1996).
- **Measurement.** Lijphart's executives–parties dimension (institutional); attitude items
  on electoral systems.
- **Distinguishes.** Westminster majoritarians from consociationalists, Swiss-style
  consensus democrats, Wiredu's non-party consensus and proportional-representation
  advocates.
- **Overlap and recommendation.** Touches E3, E7 and F4 (consociational group
  guarantees). **Keep.**
- **Sub-facets.** Electoral system; coalition vs. single-party government; minority
  vetoes; supermajority rules; bicameralism.

#### E5. Representation vs. participation

- **Poles:** Direct and participatory self-rule ↔ Representative, trustee government.
- **Definition:** Should citizens mostly choose representatives who use their own
  judgment? Or should they decide and deliberate directly, through referendums,
  assemblies and local self-government?
- **Steelmen.** _Participation:_ people become capable citizens by governing (Pateman).
  Representation turns them into spectators, and direct and deliberative forms produce
  decisions people own. _Representation:_ most people do not want to spend their lives
  in meetings (Hibbing & Theiss-Morse). Representatives can weigh evidence and compromise,
  and they owe constituents "their judgment" (Burke), not mere obedience.
- **Lineage.** Rousseau (1762); Burke, Speech to the Electors of Bristol (1774); Madison,
  Federalist 10; Jefferson's "ward republics" (letter to Kercheval, 1816); Mill,
  _Considerations on Representative Government_ (1861); Lippmann, _Public Opinion_ (1922);
  Schumpeter (1942); Arendt, _On Revolution_ (1963), the council system; Pitkin, _The
  Concept of Representation_ (1967); Pateman (1970); Barber, _Strong Democracy_ (1984); J.
  Cohen, "Deliberation and Democratic Legitimacy" (1989); Fishkin, _Democracy and
  Deliberation_ (1991); Habermas, _Between Facts and Norms_ (1992; Eng. 1996); Hibbing &
  Theiss-Morse, _Stealth Democracy_ (2002); Kriesi, _Direct Democratic Choice_ (2005);
  Achen & Bartels, _Democracy for Realists_ (2016); Landemore, _Open Democracy_ (2020).
- **Measurement.** V-Dem participatory and deliberative components; Neblo et al., "Who
  Wants to Deliberate — and Why?" (_APSR_ 2010); process-preference items (Hibbing &
  Theiss-Morse; Bengtsson & Mattila, _West European Politics_ 2009).
- **Distinguishes.** Burkean trustees and Schumpeterian elite democrats from participatory
  democrats, council communists, Swiss-style direct democrats and populists.
- **Overlap and recommendation.** Deliberative vs. aggregative decision-making is a
  sub-facet. **Keep.**
- **Sub-facets.** Referendums and initiatives; citizens' assemblies and sortition; recall;
  participatory budgeting; party vs. citizen control of candidate selection.
- **Foundation boundary.** Whether politics is at bottom reasoned agreement (Habermas) or
  ineliminable conflict (Schmitt, _The Concept of the Political_ 1932; Mouffe, _The
  Democratic Paradox_ 2000) is a view of the political for #20.

#### E6. Popular judgment vs. expertise

- **Poles:** Rule by the knowledgeable ↔ Equal popular judgment.
- **Definition:** Should political decisions, or the selection of those who make them,
  give special weight to knowledge and competence? Or should every citizen's judgment
  count equally?
- **Steelmen.** _Knowledge:_ policy is complex and voters are often badly informed
  (Brennan). We trust experts in medicine and engineering, and meritocratic selection has
  governed well in some societies (Bell). Insulating central banks and regulators protects
  long-run goods from short-run politics (Majone). _Popular judgment:_ every citizen has
  an equal stake. Experts have their own blind spots and interests, diverse crowds often
  out-reason experts (Landemore), and no group's claim to wisdom is beyond reasonable
  rejection (Estlund).
- **Lineage.** Plato, _Republic_; Confucian and Mencian rule by the worthy; Mill (1861),
  plural voting; Lippmann (1922) and _The Phantom Public_ (1925) vs. Dewey, _The Public and
  Its Problems_ (1927); Majone, _Regulating Europe_ (1996); Estlund, _Democratic Authority_
  (2008); Landemore, _Democratic Reason_ (2013); Bell, _The China Model_ (2015); Jiang
  Qing, _A Confucian Constitutional Order_ (2012); Brennan, _Against Democracy_ (2016);
  Caramani, "Will vs. Reason" (_APSR_ 2017); Tucker, _Unelected Power_ (2018); Bai
  Tongdong, _Against Political Equality_ (2019); Bertsou & Caramani, "People Haven't Had
  Enough of Experts" (_AJPS_ 66(1), 2022).
- **Measurement.** Bertsou & Caramani technocratic-attitudes scale (expertise, elitism,
  anti-politics); WVS "experts, not government, make decisions" item _(verify)_; CHES
  `people_vs_elite` (partly).
- **Distinguishes.** Confucian meritocrats, technocrats, epistocrats and vanguardists from
  radical democrats and populists.
- **Overlap and recommendation.** Two facets: (a) _ultimate authority_ (epistocracy,
  plural votes, meritocratic selection) and (b) _delegation_ to independent bodies within a
  democracy. **Keep as one; split is an option.** Caramani's finding that technocrats and
  populists share hostility to party politics shows why E7 must be separate.
- **Sub-facets.** Central-bank and regulator independence; qualified or weighted
  franchise; meritocratic selection of officials; role of scientific advice.
- **Foundation boundary.** Trust in experts as knowers is epistemology (#20). E6 asks who
  should hold political authority.

#### E7. Pluralism vs. unity

- **Poles:** Legitimate pluralism and opposition ↔ Unified common purpose.
- **Definition:** Is politics rightly a lasting contest among many legitimate interests,
  parties and identities, none of which speaks for the whole? Or should it express and
  pursue one common will or common good of the people?
- **Steelmen.** _Pluralism:_ free people will always disagree. Legitimate opposition,
  competing parties and protected minorities are how a society governs its disagreements
  without oppression (Madison, Dahl). _Unity:_ a people with a shared purpose can act.
  Factions and parties put part above whole, entrench elites and produce gridlock;
  Washington's Farewell Address (1796) warned against "the spirit of party".
- **Lineage.** Madison, Federalist 10; Rousseau (1762), the general will; Washington,
  Farewell Address (1796); Mill (1859); Schmitt, _The Crisis of Parliamentary Democracy_
  (1923); Lenin, _What Is to Be Done?_ (1902); Loewenstein, "Militant Democracy and
  Fundamental Rights" (_APSR_ 1937); Dahl, _Who Governs?_ (1961) and _Polyarchy_ (1971);
  Galston, _Liberal Pluralism_ (2002); Mudde, "The Populist Zeitgeist" (_Government and
  Opposition_ 2004); Laclau, _On Populist Reason_ (2005); Rosenblum, _On the Side of the
  Angels_ (2008); Müller, _What Is Populism?_ (2016); Levitsky & Ziblatt, _How Democracies
  Die_ (2018); Confucian "harmony without sameness" (_Analects_ 13.23), which complicates
  any easy mapping.
- **Measurement.** V-Party Anti-Pluralism Index and populism (anti-elitism,
  people-centrism); Akkerman, Mudde & Zaslove populist-attitudes scale (_CPS_ 2014); CHES
  `people_vs_elite`.
- **Distinguishes.** Liberal pluralists from populists (left and right), vanguardists,
  corporatists, Rousseauian republicans and non-party consensus democrats (Wiredu).
- **Overlap and recommendation.** Populism is best treated as a **Thin Label** (per the
  framework) configured on E7 (unity), E6 (popular judgment), E5 (direct) and E3 (popular
  supremacy), not as its own Dimension. **Keep E7.**
- **Sub-facets.** Legitimacy of opposition; parties vs. non-party politics (Wiredu shows
  these can come apart); "people vs. elite" framing; corporatist functional
  representation; banning anti-system parties (militant democracy).
- **Foundation boundary.** Value pluralism (Berlin, "Two Concepts of Liberty" 1958) is
  #20; E7 is about political institutions.

#### E8. Leadership

- **Poles:** Strong, decisive leadership ↔ Dispersed, checked authority.
- **Definition:** Should executive power be concentrated in a strong leader able to act
  decisively? Or should it be divided and checked so that no one can act alone?
- **Steelmen.** _Strong leadership:_ "energy in the executive is a leading character in the
  definition of good government" (Hamilton, Federalist 70). Crises, development and reform
  need someone who can act, and accountability is clearer when one person decides. _Checks:_
  "ambition must be made to counteract ambition" (Madison, Federalist 51). Concentrated
  power is eventually abused, however good the first holder (Acton, Montesquieu).
- **Lineage.** Machiavelli, _The Prince_ (1532); Hobbes (1651); Montesquieu, _The Spirit of
  the Laws_ (1748); Federalist 51 and 70 (1788); Carlyle, _On Heroes_ (1841); Acton, letter
  to Creighton (1887); Weber (1919), plebiscitary leader democracy; Schmitt, _Die Diktatur_
  (1921); Mansfield, _Taming the Prince_ (1989); Linz, "The Perils of Presidentialism"
  (_J. Democracy_ 1990). Dispositional work (Stenner, _The Authoritarian Dynamic_ 2005;
  Hetherington & Weiler 2009) is background toolkit only, per the framework.
- **Measurement.** WVS "strong leader who does not have to bother with parliament and
  elections" (confirmed); CHES 2024 `executive_power`; V-Dem horizontal accountability.
- **Distinguishes.** Gaullists, Bonapartists, Hamiltonians, Peronists and Singapore-model
  developmentalists from Madisonians and parliamentary consensus democrats.
- **Overlap and recommendation.** Close to D3 and E3. **Keep; merge with D3 is the
  fallback.**
- **Sub-facets.** Presidential vs. parliamentary systems; term limits; executive decree
  powers; monarchy as an executive (with E9).

#### E9. Social hierarchy

- **Poles:** Equality of status ↔ Ordered rank and deference.
- **Definition:** Should society and its institutions recognise ranks of status, honour
  and authority that command deference (by role, age, office, lineage or merit)? Or
  should they treat everyone as equals in social standing?
- **Steelmen.** _Equality of status:_ a just society is one where no one has to bow, and
  status hierarchies breed domination and contempt (Anderson's relational equality;
  Ambedkar against caste). _Ordered rank:_ well-ordered roles give people a place,
  responsibilities and models to emulate. Some hierarchies are just and necessary (Bell &
  Wang), and a "natural aristocracy" of the experienced guides society (Burke).
- **Lineage.** Plato; Aristotle; Confucius, _Analects_ 12.11 ("let the ruler be a
  ruler…"); Rousseau, _Discourse on Inequality_ (1755); Burke, _Appeal from the New to the
  Old Whigs_ (1791); Tocqueville (equality of conditions); Nietzsche, _Beyond Good and
  Evil_ (1886); Ambedkar, _Annihilation of Caste_ (1936); Kirk, _The Conservative Mind_
  (1953); Dumont, _Homo Hierarchicus_ (1966); Anderson (1999); Scheffler, "What Is
  Egalitarianism?" (_PPA_ 2003); Bell & Wang, _Just Hierarchy_ (2020).
- **Measurement.** None standard _(gap)_. Social dominance orientation (Pratto et al. 1994)
  is psychological toolkit only, not a Dimension.
- **Distinguishes.** Traditionalist conservatives, monarchists and Confucians from
  egalitarians. Libertarians accept economic inequality but reject status hierarchy, so
  E9 separates them from traditionalist conservatives where A1 cannot.
- **Overlap and recommendation.** Bobbio would fold this into one "equality" axis with A1.
  **Keep separate**, because material and status equality diverge.
- **Sub-facets.** Monarchy and hereditary offices; honours and titles; caste and status
  law; elder and parental authority; deference in schools and institutions; ascriptive
  vs. merit-based hierarchy.

#### E10. Citizenship: rights vs. duties

- **Poles:** Citizenship as shared obligation ↔ Citizenship as protected liberty.
- **Definition:** Is citizenship mainly a set of protected freedoms, including the freedom
  not to take part? Or does it carry enforceable obligations to serve and participate
  (national service, compulsory voting, jury duty, civic education)?
- **Steelmen.** _Obligation:_ freedom is kept only by citizens willing to sustain it
  (Machiavelli, Rousseau). Shared duties build solidarity across class and region, and
  rights without responsibilities hollow out the community (Etzioni). _Protected liberty:_
  the "liberty of the moderns" is to live one's own life (Constant). Compelled service
  and participation treat people as resources of the state, and there is no general duty
  to vote (Brennan).
- **Lineage.** Aristotle, _Politics_ III; Machiavelli, _Discourses on Livy_ (1531); Rousseau
  (1762); Constant, "The Liberty of the Ancients Compared with That of the Moderns"
  (1819); Marshall (1950); Nozick (1974); Janowitz, _The Reconstruction of Patriotism_
  (1983); Etzioni, _The Spirit of Community_ (1993); Kymlicka & Norman, "Return of the
  Citizen" (_Ethics_ 1994); Sandel (1996); Dagger, _Civic Virtues_ (1997); Lijphart,
  "Unequal Participation" (_APSR_ 1997), compulsory voting; Levi, _Consent, Dissent, and
  Patriotism_ (1997); Dalton, _The Good Citizen_ (2008); Brennan, _The Ethics of Voting_
  (2011).
- **Measurement.** ISSP Citizenship modules (2004, 2014); Dalton's duty-based vs. engaged
  citizenship norms.
- **Distinguishes.** Civic republicans and communitarians from liberals and libertarians;
  national-service advocates across left and right.
- **Overlap and recommendation.** Close to A8 (duty to work). **Keep.**
- **Sub-facets.** Conscription and national service; compulsory voting; jury duty; civic
  and patriotic education; duties of contribution (see A8).

### F. Membership and the world

#### F1. Compatriot priority vs. global impartiality

- **Poles:** Special obligations to compatriots ↔ Impartial concern for all people.
- **Definition:** In law and policy, may a political community put its own members first?
  Or should it weigh the interests of all people equally, wherever they live?
- **Steelmen.** _Compatriot priority:_ shared institutions, history and mutual commitment
  create real special obligations, as families do. Solidarity on which the welfare state
  depends needs bounded community (Miller, Tamir). _Impartial concern:_ where one is born
  is morally arbitrary. A child drowning far away matters as much as one nearby (Singer),
  and the global order itself creates obligations of justice (Beitz, Pogge).
- **Lineage.** Mozi's _jian ai_ (impartial care) vs. Mencius's graded love; Godwin,
  _Enquiry Concerning Political Justice_ (1793); Singer, "Famine, Affluence, and Morality"
  (_PPA_ 1972); Beitz, _Political Theory and International Relations_ (1979); MacIntyre,
  "Is Patriotism a Virtue?" (Lindley Lecture 1984); Goodin, "What Is So Special about Our
  Fellow Countrymen?" (_Ethics_ 1988); Tamir, _Liberal Nationalism_ (1993); Nussbaum,
  "Patriotism and Cosmopolitanism" (_Boston Review_ 1994); Miller, _On Nationality_ (1995)
  and _National Responsibility and Global Justice_ (2007); Rawls, _The Law of Peoples_
  (1999); Scheffler, _Boundaries and Allegiances_ (2001); Blake, "Distributive Justice,
  State Coercion, and Autonomy" (_PPA_ 2001); Pogge, _World Poverty and Human Rights_ (2002);
  Nagel, "The Problem of Global Justice" (_PPA_ 2005); Appiah, _Cosmopolitanism_ (2006).
- **Measurement.** de Wilde, Koopmans, Merkel, Strijbis & Zürn (eds.), _The Struggle Over
  Borders: Cosmopolitanism and Communitarianism_ (2019); foreign-aid items; ISSP National
  Identity modules.
- **Distinguishes.** Liberal nationalists and communitarians from cosmopolitans and
  effective altruists; statists from global egalitarians.
- **Overlap and recommendation.** **Global justice is merged in here** (see "Rejected and
  merged"). Correlates with F3 and A10 but is separable. **Keep.**
- **Sub-facets.** Foreign aid and global redistribution; scope of distributive justice;
  welfare eligibility for non-citizens (welfare chauvinism); climate burden-sharing;
  priority for national workers.
- **Foundation boundary.** Impartialism vs. agent-relative partiality as a personal moral
  outlook is #20; F1 is its political application.

#### F2. Basis of nationhood

- **Poles:** Shared civic principles ↔ Shared heritage and culture.
- **Definition:** What should make someone a full member of the nation: allegiance to
  shared political principles and institutions, or a shared culture, language, history and
  way of life?
- **Steelmen.** _Civic principles:_ a nation is a "daily plebiscite" (Renan). Anyone who
  embraces its principles can belong, which is both fairer and more open to newcomers
  (constitutional patriotism). _Heritage:_ people are bound by more than abstract
  principles, which every democracy shares. A thick common culture and memory sustain
  trust and sacrifice, and peoples have a legitimate interest in continuing their way of
  life (Herder, Hazony, Scruton). In the literature this Pole is often called "ethnic"
  nationalism; its steelman is cultural continuity, not descent-based exclusion.
- **Lineage.** Herder; Fichte, _Addresses to the German Nation_ (1808); Mazzini; Renan,
  "What Is a Nation?" (1882); Kohn, _The Idea of Nationalism_ (1944); Gellner, _Nations and
  Nationalism_ (1983); B. Anderson, _Imagined Communities_ (1983); A. D. Smith, _The Ethnic
  Origins of Nations_ (1986) and _National Identity_ (1991); Brubaker, _Citizenship and
  Nationhood in France and Germany_ (1992); Habermas, "Citizenship and National Identity"
  (1992); Miller (1995); Huntington, _Who Are We?_ (2004); J.-W. Müller, _Constitutional
  Patriotism_ (2007); Hazony, _The Virtue of Nationalism_ (2018).
- **Measurement.** ISSP National Identity "what makes someone truly [national]" battery
  (birth, ancestry, religion, language, respect for laws), the standard civic/ethnic
  instrument; CHES `nationalism`.
- **Distinguishes.** French-style republicans and American creedalists from cultural and
  national conservatives, with liberal nationalists in between. Hindu nationalism and
  Kemalism show the Pole is not a Western-only distinction.
- **Overlap and recommendation.** Distinct from F1 (how much to prioritise members) and
  F3 (how many to admit). **Keep.**
- **Sub-facets.** Citizenship by descent vs. birthplace vs. naturalisation; official
  language policy; national history and symbols; integration expectations (with F4);
  minority nations within states.

#### F3. Immigration and borders

- **Poles:** Community control over membership ↔ Freedom of movement.
- **Definition:** Should a political community decide who and how many may enter and
  settle? Or do people have a strong claim to move and live where they choose?
- **Steelmen.** _Control:_ self-determination includes deciding who joins (Walzer,
  Wellman). Rapid large-scale migration can strain wages, services and social trust, and
  citizens are owed a say over their community's future. _Freedom of movement:_ borders
  restrict the opportunities of people who did nothing to deserve their birthplace
  (Carens). Coercing people at the border requires justifying it to them too (Abizadeh),
  and migration is among the strongest anti-poverty tools there is.
- **Lineage.** Walzer (1983) ch. 2; Carens, "Aliens and Citizens" (_Review of Politics_
  1987) and _The Ethics of Immigration_ (2013); Kukathas, "The Case for Open Immigration"
  (2005); Abizadeh, "Democratic Theory and Border Coercion" (_Political Theory_ 2008);
  Wellman, "Immigration and Freedom of Association" (_Ethics_ 2008); Huemer, "Is There a
  Right to Immigrate?" (2010); Collier, _Exodus_ (2013); Borjas, _We Wanted Workers_
  (2016); Miller, _Strangers in Our Midst_ (2016); Caplan & Weinersmith, _Open Borders_
  (2019).
- **Measurement.** CHES `immigrate_policy`; ESS immigration items (e.g. whether immigrants
  make the country a better place); ANES immigration items.
- **Distinguishes.** Open-borders libertarians and the cosmopolitan left from the
  labour-protection left, national conservatives and paleolibertarians; skill-selective
  liberals in between.
- **Overlap and recommendation.** Often held as in-principle vs. in-practice ("ideally no
  borders, but…"), which is exactly the framework's split example. **Keep.**
- **Sub-facets.** Levels; selection criteria (skills, family, culture); asylum and
  refugees; enforcement; guest workers; path to citizenship.

#### F4. Group difference

- **Poles:** Group-differentiated recognition ↔ Difference-blind common rules.
- **Definition:** Should the law recognise and accommodate cultural, religious, ethnic and
  indigenous groups with group-specific rights, exemptions or remedies? Or should one set
  of rules apply to every citizen alike, with culture a private matter?
- **Steelmen.** _Recognition:_ "neutral" rules are built around the majority's culture,
  and equal treatment of unequally placed groups entrenches disadvantage (Young). Minority
  and indigenous cultures need protection to give their members meaningful options
  (Kymlicka). _Difference-blind:_ equal citizenship means the same rights for all.
  Group-based law freezes identities, empowers group leaders over vulnerable members
  (Okin), and distracts from class inequalities that cut across groups (Barry).
- **Lineage.** Young, _Justice and the Politics of Difference_ (1990); Taylor, "The Politics
  of Recognition" (1992); Honneth, _The Struggle for Recognition_ (1992; Eng. 1995);
  Waldron, "Superseding Historic Injustice" (_Ethics_ 1992); Fraser, "From Redistribution
  to Recognition?" (_New Left Review_ 1995) and Fraser & Honneth, _Redistribution or
  Recognition?_ (2003); Kymlicka, _Multicultural Citizenship_ (1995); Okin, _Is
  Multiculturalism Bad for Women?_ (1999); Parekh, _Rethinking Multiculturalism_ (2000);
  Barry, _Culture and Equality_ (2001); Kukathas, _The Liberal Archipelago_ (2003); Joppke,
  "The Retreat of Multiculturalism" (_BJS_ 2004); Sowell, _Affirmative Action Around the
  World_ (2004); Modood, _Multiculturalism_ (2007); Laborde, _Critical Republicanism_
  (2008); Coates, "The Case for Reparations" (_Atlantic_ 2014); India's Constitution Arts.
  15(4), 16(4) (reservations), designed under Ambedkar; UNDRIP (2007).
- **Measurement.** CHES `multiculturalism`, `ethnic_minorities`; Banting & Kymlicka
  Multiculturalism Policy Index (institutional); MARPOR per607/per608; ANES aid to Black
  Americans item.
- **Distinguishes.** Liberal multiculturalists and intersectional progressives from
  French-republican universalists, class-first socialists (Barry; Michaels, _The Trouble
  with Diversity_ 2006), colour-blind conservatives and libertarians, and assimilationist
  nationalists. Hindu nationalists back a uniform civil code for reasons very different
  from secular liberals', so they share a Position with different Reasons.
- **Overlap and recommendation.** **Recognition vs. redistribution is merged here.** Its
  substance (group-conscious vs. universal remedies) is this Dimension, and its priority
  question is Pull on F4 vs. A1. **Keep.**
- **Sub-facets.** Affirmative action and reservations; minority-language and cultural
  rights; indigenous self-government and land (with A4); religious exemptions and
  personal-status law (with C5); reparations for historical injustice; consociational
  guarantees (with E4); integration model (assimilation, integration, multiculturalism).

#### F5. Use of force

- **Poles:** Readiness to use force ↔ Reluctance to use force.
- **Definition:** In dealing with other states and armed groups, how ready should a
  country be to build up, threaten and use military force, as opposed to diplomacy,
  restraint and de-escalation?
- **Steelmen.** _Readiness:_ "if you want peace, prepare for war". Credible strength
  deters aggression (Schelling), and refusing to use force can abandon allies and victims.
  _Reluctance:_ wars are easy to start and hard to end. Their costs fall on soldiers and
  civilians, and diplomacy and restraint have prevented more catastrophes than shows of
  strength. At the pole, violence is never justified (Tolstoy).
- **Lineage.** Thucydides; Augustine and Aquinas on just war; Vegetius; Clausewitz, _On
  War_ (1832); Kant, _Perpetual Peace_ (1795); Tolstoy, _The Kingdom of God Is Within You_
  (1894); Schelling, _Arms and Influence_ (1966); Walzer, _Just and Unjust Wars_ (1977);
  Hurwitz & Peffley, "How Are Foreign Policy Attitudes Structured?" (_APSR_ 1987); Holsti &
  Rosenau, "The Structure of Foreign Policy Attitudes among American Leaders" (_J.
  Politics_ 1990); Wittkopf (1990), militant internationalism; Mearsheimer, _The Tragedy of
  Great Power Politics_ (2001); Posen, _Restraint_ (2014).
- **Measurement.** ANES defence-spending scale; Wittkopf militant-internationalism items;
  Chicago Council surveys; MARPOR per104/per105/per106.
- **Distinguishes.** Hawks from doves and pacifists. Together with F6 and E2 it reproduces
  Walter Russell Mead's four schools (_Special Providence_ 2001): Jacksonian, Jeffersonian,
  Hamiltonian, Wilsonian.
- **Overlap and recommendation.** Wittkopf's empirical finding of two separate foreign
  policy dimensions (militant vs. cooperative internationalism) supports keeping F5 apart
  from E2. **Keep.**
- **Sub-facets.** Defence spending; nuclear deterrence and disarmament; alliances and
  forward presence; arms exports; humanitarian intervention (with F6).

#### F6. Foreign-policy aims

- **Poles:** Universal values ↔ National interest.
- **Definition:** Should foreign policy pursue the nation's security and interests, or
  also promote values such as democracy and human rights abroad?
- **Steelmen.** _Universal values:_ human rights do not stop at borders, and democracies
  rarely fight each other (Doyle). A world order built on shared values serves everyone,
  and indifference to atrocity is complicity. _National interest:_ states operate in an
  anarchic system where power, not ideals, keeps them safe (Morgenthau, Waltz). Crusades
  for values breed overreach and backlash, and prudence is the highest political virtue in
  foreign affairs.
- **Lineage.** Thucydides, Melian dialogue; Machiavelli; Kant (1795); Wilson, Fourteen
  Points (1918); Carr, _The Twenty Years' Crisis_ (1939); Morgenthau, _Politics Among
  Nations_ (1948); Kennan, _American Diplomacy_ (1951); Waltz, _Theory of International
  Politics_ (1979); Doyle, "Kant, Liberal Legacies, and Foreign Affairs" (_PPA_ 1983);
  Kissinger, _Diplomacy_ (1994); Kristol & Kagan, "Toward a Neo-Reaganite Foreign Policy"
  (_Foreign Affairs_ 1996); Rawls (1999); ICISS, _The Responsibility to Protect_ (2001);
  Ikenberry, _Liberal Leviathan_ (2011); Mearsheimer, _The Great Delusion_ (2018); Zhao
  Tingyang, _All under Heaven_ (Eng. 2021), a non-Western world-order vision.
- **Measurement.** Chicago Council foreign-policy goals items (promoting democracy and
  human rights); Holsti & Rosenau leadership surveys.
- **Distinguishes.** Realists from liberal internationalists and neoconservatives.
  Neoconservatives and liberal hawks share F6 and F5 but differ on E2.
- **Overlap and recommendation.** **Keep.**
- **Sub-facets.** Democracy promotion; human-rights conditionality and sanctions; R2P;
  relations with autocracies; motives for aid (with F1).
- **Foundation boundary.** Whether human rights are universal or civilisationally
  particular (Bauer & Bell (eds.), _The East Asian Challenge for Human Rights_ 1999) is
  partly metaethics (#20).

### G. Political change

#### G1. Tempo of change

- **Poles:** Fundamental transformation ↔ Incremental reform.
- **Definition:** When society needs to change, should it change step by step, testing
  and keeping what works? Or should it change fundamentally and quickly? This is
  direction-neutral: one can be an incremental progressive or a radical restorationist.
- **Steelmen.** _Transformation:_ some injustices are built into the system and cannot be
  reformed away piece by piece (Marx, Unger). Incrementalism often means indefinite delay
  for those who suffer now, and big windows for change are rare. _Incremental reform:_
  society is a complex inheritance no one fully understands. Small, reversible steps let
  us learn from mistakes (Popper's piecemeal engineering), and revolutions have often
  devoured their own aims (Burke).
- **Lineage.** Burke (1790); Paine, _Rights of Man_ (1791); Marx & Engels, _The Communist
  Manifesto_ (1848); Popper, _The Open Society and Its Enemies_ (1945) and _The Poverty of
  Historicism_ (1957); Oakeshott, "On Being Conservative" (1956); Lindblom, "The Science of
  'Muddling Through'" (_PAR_ 1959); Arendt, _On Revolution_ (1963); Unger, _False
  Necessity_ (1987); Hirschman, _The Rhetoric of Reaction_ (1991); Wright, _Envisioning
  Real Utopias_ (2010); Lilla, _The Shipwrecked Mind_ (2016), on reactionary radicalism.
- **Measurement.** WVS item offering "radical change by revolutionary action / gradual
  improvement by reforms / defend present society against subversive forces" _(verify
  wording)_.
- **Distinguishes.** Burkean conservatives from reactionaries and the radical right;
  Fabians and social democrats from revolutionary socialists; accelerationists from
  gradualists.
- **Overlap and recommendation.** **Keep.** G2 and G3 are distinct (see below).
- **Sub-facets.** Speed; scope (piecemeal vs. systemic); reversibility.
- **Foundation boundary.** Trust in inherited wisdom and risk attitudes are #20.

#### G2. Design vs. evolved order

- **Poles:** Evolved, spontaneous order ↔ Deliberate design.
- **Definition:** When building or reforming institutions, should society extend practices
  and orders that evolved without a designer? Or should it design them deliberately from
  principles and evidence?
- **Steelmen.** _Evolved order:_ much that works (language, markets, common law) is "the
  result of human action, but not the execution of any human design" (Ferguson). It
  embodies knowledge no planner has, and grand schemes that ignore local knowledge fail
  (Scott). _Design:_ inherited institutions often encode past power and accident, not
  wisdom. Reason and evidence can do better, and most of modernity's gains (public
  health, constitutions, welfare states) were designed.
- **Lineage.** Plato; Mandeville, _The Fable of the Bees_ (1714); Ferguson, _An Essay on the
  History of Civil Society_ (1767); Smith; Bentham; Condorcet (1795); Saint-Simon; Neurath;
  Oakeshott, "Rationalism in Politics" (1947; collected 1962); J. Jacobs, _The Death and
  Life of Great American Cities_ (1961); Hayek, _Law, Legislation and Liberty_ vol. 1
  (1973); Scott, _Seeing Like a State_ (1998).
- **Measurement.** None _(gap)_.
- **Distinguishes.** Hayekian libertarians, who are radical in tempo but against design,
  from rationalist planners; Burkeans from rationalist conservatives; it separates "evidence-based
  design" technocrats from evolutionary liberals.
- **Overlap and recommendation.** Not G1: Hayek wanted fast change toward an undesigned
  order. Partly A2. **Strong Foundation boundary:** this may belong in #20 as social
  epistemology. **Keep provisionally; owner to decide its layer** (open question).
- **Sub-facets.** Common law vs. codification; planned cities and charter cities;
  evidence-based policy and RCT governance; constitution-writing vs. evolved constitutions.

#### G3. Channels of change

- **Poles:** Within institutions ↔ Beyond institutions.
- **Definition:** Should people pursue political change only through lawful institutional
  channels (elections, courts, petitions)? Or is action outside them (civil disobedience,
  political strikes, blockades, revolution) legitimate when institutions fail?
- **Steelmen.** _Within institutions:_ democracy asks losers to accept outcomes so they can
  win next time. Breaking the rules for one's own cause licenses everyone else to break
  them for theirs, and the rule of law protects the weak most. _Beyond institutions:_
  institutions can be captured or closed to some groups. Many rights were won by people
  who broke unjust laws (Thoreau, King), and there is a duty to resist injustice (Delmas).
- **Lineage.** Hobbes (no right of resistance); Locke, _Second Treatise_ ch. 19 (right of
  revolution); Kant, _Metaphysics of Morals_ (1797), against rebellion; Thoreau, "Civil
  Disobedience" (1849); King, "Letter from Birmingham Jail" (1963); Rawls (1971) §§55–59;
  Arendt, "Civil Disobedience" (1970); Barnes & Kaase, _Political Action_ (1979),
  unconventional participation; Brownlee, _Conscience and Conviction_ (2012); Delmas, _A
  Duty to Resist_ (2018).
- **Measurement.** Barnes & Kaase approval of unconventional action; ESS/WVS protest
  approval items _(verify)_.
- **Distinguishes.** Institutionalists from civil disobedients, direct-action anarchists,
  general-strike syndicalists and revolutionary movements.
- **Overlap and recommendation.** The stress-test showed that one "means" Dimension
  averages Gandhi (extra-institutional, strictly nonviolent) with Fanon
  (extra-institutional, violence permitted), so **split into G3 and G4.**
- **Sub-facets.** Civil disobedience; political strikes; blockades and property damage;
  tax resistance; obedience to unjust laws.

#### G4. Force in domestic politics (S)

- **Poles:** Permissible force against injustice ↔ Principled nonviolence.
- **Definition:** Is force ever a legitimate means of political change or resistance
  within a society, for example against tyranny or oppression? Or must political action
  always be nonviolent?
- **Steelmen.** _Permissible force:_ peoples have a right to resist tyranny, by arms if
  necessary (Locke; the 1776 Declaration). Some regimes leave no peaceful path, as Mandela
  argued at Rivonia (1964). _Nonviolence:_ violence corrupts the cause and invites
  repression. Nonviolent campaigns have succeeded more often than violent ones (Chenoweth
  & Stephan), and means shape ends (Gandhi).
- **Lineage.** Locke ch. 19; US Declaration of Independence (1776); Tolstoy (1894); Sorel,
  _Reflections on Violence_ (1908); Gandhi, _Hind Swaraj_ (1909); Fanon, _The Wretched of
  the Earth_ (1961); Mandela, Rivonia trial statement (1964); Arendt, _On Violence_ (1970);
  Sharp, _The Politics of Nonviolent Action_ (1973); Chenoweth & Stephan, _Why Civil
  Resistance Works_ (2011).
- **Measurement.** None standard; V-Party's "encouragement of political violence"
  indicator (party-level).
- **Distinguishes.** Gandhian and Kingian nonviolence from anti-colonial armed struggle,
  Leninist revolution and armed-self-defence traditions.
- **Overlap and recommendation.** Could merge with F5 into one "Force" Dimension, but many
  people are hawkish abroad and nonviolent at home, or the reverse. **Keep separate**
  (added by the stress-test). Polytic's principles allow mapping this view but forbid
  incitement, so seed dilemmas should be historical or abstract (e.g. the Rivonia
  choice, the American Revolution, the Salt March).
- **Sub-facets.** Right of revolution; armed self-defence; political assassination and
  tyrannicide in history; property sabotage (with G3).

---

## Stress-testing the set

**Method.** For each well-known eclectic or cross-pressured position, I list the
Dimensions it is most distinctive on and check whether its Positions (plus Reasons, where
the framework says Reasons should carry the distinction) separate it from its nearest
neighbours. "Gap" means the position could not be described distinctly with the set as
first drafted; the fix is noted, and four fixes are already in the set above.

| Position                                         | Distinctive on (Position)                                                                                          | Distinct? | Note / fix                                                                                                    |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------- |
| Christian democracy                              | A3 social, A7 generous, A9 co-determination, E1 strong horizontal + pro-E2, C4 familial, C5 public role, E4 consensus | Yes       | Needs E1's horizontal/vertical facets kept apart from E2; otherwise its "subsidiarity + pro-EU" looks contradictory |
| Blue Labour / left-conservatism                  | A1 egalitarian, A9 voice, A8 reciprocal, F3 control, F1 compatriot, C4 traditional, E1 localist, E10 duties         | Yes, after fix | **Gap fixed by A8.** Without it, Blue Labour and the basic-income left are identical on A7               |
| Georgism                                         | A4 common, A3 robust, A10 open, A2 market                                                                         | Yes, after fix | **Gap fixed by A4.** With a single Property Dimension, Georgists average to a meaningless middle          |
| Steiner–Vallentyne left-libertarianism           | A4 common, A3 robust (self-ownership), C2 self-sovereign                                                           | Yes, after fix | Same fix as Georgism (A4); self-ownership itself is a #20 Foundation matter                               |
| Distributism                                     | A5 dispersal, A3 social, E1 smallest unit, C4 familial, C1 perfectionist, A9 guilds                                | Yes       | A5 is what separates distributists from socialists (both "anti-capitalist")                                   |
| Neo-Brandeisians vs. ordoliberals vs. Chicago school | A5 (dispersal / dispersal / scale), A11, D3                                                                   | Yes       | Validates A5                                                                                                  |
| Bleeding-heart libertarians (Tomasi 2012)        | A2 market, A3 robust, A7 moderate floor, C2 self-sovereign                                                         | Mostly    | Differs from standard libertarians mainly in Reasons (social justice as a justification), which the framework allows |
| Eco-conservatives / Burkean environmentalists (Scruton, _Green Philosophy_ 2012) | B1 protect, B4 future, G1 incremental, E1 localist, F2 heritage, A2 market, B3 precaution | Yes  |                                                                                                               |
| National-populism (Eatwell & Goodwin 2018)       | E7 unity, E6 popular, F3 control, A10 protection, E2 sovereign, E3 popular supremacy, A7 generous + F1 compatriot (welfare chauvinism) | Yes | Welfare chauvinism is a combination, with the eligibility rule as an F1 sub-facet               |
| Social-conservative socialism                    | A1/A2 left, C4/C2 traditional, F2 heritage                                                                         | Yes       |                                                                                                               |
| Communitarianism (Sandel, Walzer, Etzioni, MacIntyre) | A6 protected spheres, E10 duties, C1 perfectionist-leaning, E1, F1 compatriot                                 | Yes, after fix | **Gap fixed by A6.** Walzer's "blocked exchanges" and Sandel's anti-commodification had nowhere to go     |
| Civic republicanism (Pettit, Skinner, Sandel)    | E10 duties, A9 voice, A5 dispersal, E5 participatory/contestatory, D3 rules                                         | Yes       | Liberty as non-domination lives in Reasons; its policy bite shows on A9, A5 and E10                           |
| Post-liberalism / integralism                    | C1 strong perfectionism, C5 establishment, D3 discretion, C4/C2 traditional, A9 pro-labour                         | Yes       | _Dignitatis Humanae_ on C5 separates integralists from Christian democrats                                    |
| Classical liberals vs. "neoliberals"             | Both A2 market, A10 open; neoliberals pro-E2 rule-bound supranational, E6 delegation, A11 rules                   | Yes, narrowly | Only E2, E6 and A11 separate them, which justifies keeping A11. "Neoliberal" is a contested and often pejorative label; the Label library should define it carefully |
| Liberaltarians (Lindsey 2006)                    | A2 market, C2/C4 liberal, A7 moderate                                                                              | Yes       |                                                                                                               |
| Tech-accelerationists (right e/acc; left accelerationism) | B3 proaction, B2 abundance; right: A2 market; left: A2 public direction, A8 unconditional               | Yes       |                                                                                                               |
| Anarcho-syndicalism (Rocker 1938)                | A9 self-management, E1 smallest unit, G3 beyond institutions, A2 federated non-market                              | Mostly    | "No state at all" is only the far end of E1; see open question on political obligation                       |
| Anarcho-capitalism                               | A3 robust, A2 market, E1 voluntary end, C2 self-sovereign                                                          | Mostly    | Same open question                                                                                            |
| Islamic democracy (Ghannouchi, "From Political Islam to Muslim Democracy", _Foreign Affairs_ 2016) | C5 public role, E7 pluralism, C4 familial, C1 moderate | Yes | Positionally close to Christian democracy; Reasons distinguish, which is correct per the framework   |
| Islamism (Qutb 1964; Mawdudi)                    | C5 religious law, E3 entrenched (divine law as higher law), E7 unity, C1 strong                                     | Yes       |                                                                                                               |
| Confucian meritocracy (Bell 2015; Jiang 2012; Bai 2019) | E6 knowledge, E9 ordered rank, D3 virtue/discretion, C1 perfectionist, C4 filial, E8 strong-ish            | Yes       |                                                                                                               |
| Gandhian / swadeshi / sarvodaya                  | A10 self-reliance, A5 village scale, B2 sufficiency, B3 precaution, E1 gram swaraj, G3 beyond + G4 nonviolence, B5 ahimsa, A3 trusteeship, C5 equal respect | Yes, after fix | **Gap fixed by the G3/G4 split.** A single "means" Dimension put Gandhi next to Fanon |
| Fanonist anti-colonial revolution                | G3 beyond, G4 force, G1 transformation, E2 sovereign                                                               | Yes, after fix | Same fix                                                                                                      |
| Latin American developmentalism (Prebisch, CEPAL; Vargas, Perón) | A2 public direction, A10 protection, E2 sovereign, E8 strong (Peronism), E7 unity/corporatist | Yes      |                                                                                                               |
| East Asian developmental state (Johnson 1982)    | A2 direction, E6 bureaucratic expertise, A7 lean, A10 strategic protection                                         | Yes       |                                                                                                               |
| Ubuntu / African communitarianism; Wiredu's non-party polity | E4 consensus, E7 non-party but voice-plural, A4 communal land, F1 kin and community partiality | Mostly    | **Minor gap:** E7 must separate "legitimacy of dissent" from "party competition" as sub-facets, or Wiredu is mis-read as anti-pluralist |
| Nyerere's _ujamaa_                               | A4 common land, A2 direction, E7 one-party unity, B2 sufficiency                                                   | Yes       |                                                                                                               |
| Hindu nationalism (Savarkar 1923)                | F2 heritage, C5 cultural-majoritarian, F4 difference-blind (uniform civil code)                                     | Yes       | Shows the difference-blind Pole is not owned by liberals                                                      |
| Kemalism                                         | C5 assertive secular, G1 transformation, G2 design, E8 strong, F2 contested civic/heritage                         | Yes       |                                                                                                               |
| Liberation theology (Gutiérrez 1971)             | A1 egalitarian, C5 public role, G3 beyond institutions                                                             | Yes       |                                                                                                               |
| Pan-Africanism (Nkrumah 1963)                    | E2 pooled (regional), A10 protection, F6 anti-imperial interest                                                    | Mostly    | "Integration with whom" lives in Reasons; acceptable                                                         |
| Civilisational-state / "Asian values" / Eurasianism | E2 sovereign, F6 interest, E8 strong, E7 unity                                                                   | Mostly    | Its core claim (rights are not universal) is metaethical; route to #20                                       |
| Effective altruism / longtermism                 | F1 impartial, B4 future, B5 protection, E6 expertise                                                               | Yes       |                                                                                                               |
| Market socialism (Roemer 1994)                   | A2 market, A3 social                                                                                               | Yes       | Validates the A2/A3 split                                                                                     |
| Marxism–Leninism                                 | A2 direction, A3 social, E7 unity (vanguard), E6 knowledge, G1 transformation, G4 force                            | Yes       |                                                                                                               |
| Fascism / corporatism                            | E7 unity, E8 strong, E9 rank, F2 heritage, F5 readiness, G4 force, A2 directed private ownership, C1 perfectionist | Yes       | Polytic maps it with the same dispassion as any other tradition                                               |
| Paleoconservatism / paleolibertarianism          | F5 reluctance, E2 sovereign, F3 control, A10 protection (paleocons), A2 market                                     | Yes       |                                                                                                               |
| Neoconservatism                                  | F6 values, F5 readiness, domestic moderate                                                                         | Yes       |                                                                                                               |
| Mead's four schools                              | Jacksonian: F5 readiness, F6 interest, E2 sovereign. Jeffersonian: F5 reluctance, E2 sovereign. Hamiltonian: F6 interest, A10 open. Wilsonian: F6 values, E2 pooled | Yes | Validates F5/F6/E2                                                   |
| Radical feminism vs. social conservatism on pornography and sex work | Same on C2, C6, A6; differ on C4, C5                                                          | Yes       | Shared Positions, different Reasons; working as designed                                                      |
| Consistent life ethic                            | C3 protection, D2 rehabilitation (anti-death-penalty), F5 reluctance, A7 generous                                  | Yes       |                                                                                                               |
| Agrarian populism / food sovereignty (Via Campesina) | A4 land reform, A5 small scale, A10 protection, E1 local                                                       | Yes       |                                                                                                               |
| Social Credit (Douglas)                          | A11 monetary reform, C1/C4 often traditional                                                                       | Yes       |                                                                                                               |
| Liberal vs. Razian vs. Rawlsian liberals         | C1 (neutral / perfectionist), C2 (both self-sovereign)                                                             | Yes       | Validates keeping C1 and C2 separate                                                                          |

### Gaps found and fixes

1. **Land and natural resources (A4).** Georgists and left-libertarians hold "produced
   goods private, land common". A single Property Dimension averages that into a false
   middle. **Fixed by adding A4.**
2. **Commodification (A6).** Walzer, Sandel, Satz and Titmuss on keeping goods out of the
   market had no home. C2 is about coercion and A2 about economic organisation, and
   neither fits. **Fixed by adding A6.**
3. **Reciprocity (A8).** Blue Labour and Christian-democratic "something for something"
   could not be told apart from the basic-income left on A7, nor Murray's basic income from
   workfare conservatism. **Fixed by adding A8** (merging into E10 is the alternative).
4. **Means of change (G3/G4).** One "means" Dimension put Gandhi next to Fanon. **Fixed by
   splitting into channels (G3) and force (G4).**
5. **Subsidiarity's tiers (E1).** Christian democracy (local _and_ EU), Jacobin
   republicanism (neither) and Scottish nationalism (devolution _and_ EU) can't be
   described on one subsidiarity Position. **Partly fixed** by moving the supranational
   tier to E2. Whether to split horizontal (civil society vs. state) from vertical (local
   vs. central) is an open question.
6. **Non-party pluralism (E7).** Wiredu's consensus polity rejects parties but not
   dissent. **Fix:** record "legitimacy of dissent" and "party competition" as separate
   E7 sub-facets, or split E7 if this recurs.
7. **Anarchism and political obligation (unresolved).** "There should be no state" is
   only the far end of E1 and A2. If the owner wants anarchists described as a position
   rather than an extreme, add a Dimension on the **legitimacy of state authority**
   (Wolff, _In Defense of Anarchism_ 1970; Simmons, _Moral Principles and Political
   Obligations_ 1979; Nozick 1974 on the minimal state) or treat political obligation as
   Foundation (#20).
8. **Anti-elitism (partial).** Populism is describable as a configuration (E7, E6, E5,
   E3). Its "corrupt elite" claim is partly an empirical judgment rather than a trade-off,
   so it belongs in Reasons and the Thin Label rather than a new Dimension. Flagged as an
   open question.
9. **Universality of rights (route to #20).** Civilisational-state and "Asian values"
   positions are only partly captured (F6, E2). Their core is metaethical.

---

## Rejected and merged candidates

| Candidate                                                          | Decision                    | Why                                                                                                                                                                                                                 |
| ------------------------------------------------------------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Single left–right (Downs 1957; Bobbio 1994)                        | Reject as Dimension         | A summary that can be derived from the set, not a trade-off. Collapsing it is exactly what Polytic rejects                                                                                                         |
| Political Compass "authoritarian–libertarian"                      | Reject (bundle)             | Bundles D1, C2, C6, E8, F2 and F5. Split into those                                                                                                                                                                |
| GAL–TAN as one axis (Hooghe, Marks & Wilson 2002)                  | Reject as Dimension         | An empirical bundle of party positions. Its parts are B1, C2, C4, D1, E5, F2, F3, F4. Useful as a validation lens for Reference Figures                                                                           |
| "Tradition ↔ Progress" (8values)                                   | Reject (bundle)             | Direction-laden and bundled. Decomposed into G1, C2, C4, C5, F2. Trust in tradition as a guide is Foundation (#20)                                                                                                 |
| Liberty conceptions (Berlin 1958; MacCallum 1967; Pettit 1997; Sen 1999) | Move to Reasons        | How a person decontests "liberty" is a Reason (Freeden), per the framework. Its policy bite appears on A7, A9, A5, E10 and C2                                                                                     |
| Recognition vs. redistribution (Fraser 1995)                       | Merge into F4               | Substance (group-conscious vs. universal remedies) is F4; relative priority is Pull on F4 vs. A1                                                                                                                  |
| Global justice (Beitz, Pogge, Nagel)                               | Merge into F1               | The same question: does justice stop at the border?                                                                                                                                                                |
| "Size of government"                                               | Reject (composite)          | Composite of A1, A2, A7, A11                                                                                                                                                                                       |
| Generic "authority vs. liberty"                                    | Reject (bundle)             | Decomposed into D1, C2, C6, E8                                                                                                                                                                                     |
| Isolationism vs. internationalism                                  | Reject (bundle)             | Decomposed into F5, F6 and E2, following Wittkopf's two-dimension finding                                                                                                                                          |
| Inglehart's materialist/post-materialist; WVS traditional/secular-rational and survival/self-expression | Toolkit / validation | Value orientations, not policy trade-offs                                                                                                                                                        |
| Moral Foundations, Schwartz values, RWA (Altemeyer 1981), SDO, authoritarian disposition (Feldman 2003; Stenner 2005; Feldman & Johnston 2014 on structure) | Toolkit only | The framework says psychological scores are never Dimensions. Feldman & Johnston's evidence that ideology is multidimensional does support a large set |
| Cleavages as social bases (Lipset & Rokkan 1967: centre–periphery, state–church, urban–rural, owner–worker; Kriesi et al. 2008 integration–demarcation) | Not Dimensions themselves | They are social bases; their normative content is carried by E1, C5, A9, A10, F3. Kriesi's demarcation pole maps onto A10, F3, E2, F1 |
| Valence issues (Stokes 1963): anti-corruption, competence, prosperity | Reject                   | No one defends the other Pole, so there's no trade-off. Particularist ethics of patronage and kin obligation (Rothstein & Teorell 2008 on impartiality) can be recorded as Off-map Beliefs |
| Deliberative vs. agonistic democracy (Habermas vs. Mouffe; Schmitt) | Facet of E5 / Foundation   | Institutional bite is an E5 facet; the view of what politics _is_ belongs in #20                                                                                                                                   |
| Anti-elitism                                                       | Thin Label / open question  | See gap 8                                                                                                                                                                                                          |
| Gun rights                                                         | Facet of D1                 | Not globally portable as its own Dimension                                                                                                                                                                         |
| Education policy                                                   | Split across facets         | Who controls schools (E1), curriculum values (C1), parental rights (C4), selection (A1)                                                                                                                             |
| Monarchy vs. republic                                              | Facet of E9 / E8            | A configuration of status hierarchy and executive form                                                                                                                                                             |
| Ethnic or racial hierarchy as a Dimension                          | Reject                      | Such views are describable through F2, F3, F4 and E9 Positions plus Reasons; a separate axis would be redundant and would bake in a framing                                                                       |
| "Order vs. justice" in international society (Bull, _The Anarchical Society_ 1977) | Merge into F6 | Same trade-off as interests and stability vs. values                                                                                                                                                              |
| Housing and urbanism (YIMBY vs. NIMBY)                             | Facets of A4, E1, B2        | An emerging cleavage, but it runs through land, local control and abundance                                                                                                                                       |
| Ecocentrism; moral status of animals; fetal personhood; free will and desert; population ethics; value pluralism; moral universalism | Route to #20 | Foundation matters; their political application is in B1, B5, C3, D2, B4, E7, F1/F6                                                                                                                      |

---

## Foundation boundary cases (for coordination with #20)

| Political candidate | Foundation question beneath it                                    |
| ------------------- | ----------------------------------------------------------------- |
| A3, A4              | Natural rights vs. conventionalism; self-ownership                |
| B1                  | Anthropocentric vs. ecocentric value of nature                    |
| B3, G1              | Attitudes to risk and uncertainty; trust in inherited practice    |
| B4                  | Population ethics; non-identity problem                           |
| B5                  | Moral status of animals                                           |
| C1, C2              | The person's own ethic for living (the framework's example)       |
| C3                  | Personhood; sanctity of life                                      |
| C5                  | Personal faith and its claims                                     |
| D2                  | Free will and desert (the framework's example)                    |
| E5, E7              | Agonism vs. consensus as the nature of politics; value pluralism  |
| E6                  | Epistemic authority of experts                                    |
| E9                  | Fundamental human equality vs. natural rank                       |
| F1, F6              | Impartialism vs. partiality; universality of moral claims         |
| G2                  | Social epistemology (could be wholly Foundation)                  |
| (open)              | Political obligation / legitimacy of the state                    |

---

## Open questions for the project owner (#21)

1. **How many Dimensions per session?** 45 Dimensions is comprehensive, as the framework
   asks, but no session will reach Solid Coverage on all of them. Should #21 name a
   **core** subset for a first broad session and treat the rest as extended (still fixed
   and shared, reached when the conversation goes there)? Comparison already excludes
   Thin Coverage, so this is about grilling design, not the model.
2. **Subsidiarity's shape (E1).** Keep one Dimension, or split horizontal (civil society
   vs. state) and vertical (local vs. central)? Confirm that the supranational tier moves
   to E2.
3. **Borderline merges.** Decide each pair: A3 into A1? A11 into A2? B2 into B1? D3 with
   E8? A8 into E10? E6 split into authority and delegation? C2 split into paternalism and
   moralism? C4 split into gender roles and family form?
4. **Layer of G2 (design vs. evolved order).** Political or Foundation?
5. **Domestic force (G4).** Include it, given the principle that Polytic refuses only
   incitement? If yes, seed dilemmas should be historical or abstract.
6. **Anarchism.** Add a "legitimacy of state authority" Dimension, or route political
   obligation to #20 and leave anarchists at the far end of E1?
7. **Anti-elitism.** Confirm that populism is a Thin Label built from E3, E5, E6 and E7
   rather than a Dimension.
8. **Pole orientation and naming.** Adopt a rule that Pole order and display never line
   up into a hidden left/right axis, and that Pole names stay non-pejorative (for example
   "shared heritage" rather than "ethnic"; "protective regulation" rather than
   "paternalism").
9. **Measurement gaps.** C1, A4, A5, A6, B4, E9 and G2 have no standard instrument.
   Reference Figures will have to be hand-encoded from texts on these, which may be
   uneven.
10. **Global portability check.** Some Dimensions have low salience in some places (E2 is
    European-heavy; A4 and F4 are central in post-colonial states). The framework handles
    this through Pull and localised dilemmas. Should #21 also require each Dimension to
    have at least one non-Western lineage source? Most entries above already do.

---

## Sources and caveats

- Sources are cited inline by author, title and year, and are mostly canonical texts and
  well-known empirical works. Items marked _(verify)_ are details I recalled but did not
  confirm: exact MARPOR codes, some WVS item wordings and codes, the paragraph of Italian
  Constitution Art. 118, Duguit's exact work, and the date of More's "Proactionary
  Principle".
- Confirmed during this research: CHES 2019 and 2024 variable names (from the published
  data files at chesdata.eu); Bertsou & Caramani, _AJPS_ 66(1), 2022, pp. 5–23; the WVS
  "strong leader" item; V-Party Anti-Pluralism Index components and the two-question
  populism measure; Wiredu's consensus essay as a 1995 publication (book chapter, reprinted
  in _Cultural Universals and Particulars_, 1996; original venue not confirmed).
- This document is a candidate menu. It deliberately does not rank traditions or Poles.
