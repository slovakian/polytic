# Label library (source-of-truth asset)

The curated catalog of established political Labels that Results anchor to. What a
Label is, and how a person is matched to one, is defined in `framework.md`; the
Dimensions every Label is placed on are in `dimension-taxonomy.md`; terms are in
`glossary.md`.

Decided by the project owner in
[Author the label library](https://github.com/slovakian/polytic/issues/27), from the
candidate survey in [`research/label-candidates.md`](research/label-candidates.md)
(input, not decisions). This file holds the **rules** and the **list**. Each Label's
full definition, its **card**, lives in a family file under `labels/`, written to the
template below. The list changes only by deliberate revision by the project owner.

**Status.** The list is locked. Two cards are written as the quality bar
([Social democracy](labels/socialism.md#social-democracy),
[White nationalism](labels/radical-right.md#white-nationalism)); the rest are written
family by family in follow-up tickets on the
[map](https://github.com/slovakian/polytic/issues/12).

## Library-anchored, narrative-flexible

- **Anchored.** Every Label a Result shows comes from this library, with Evidence from
  the person's answers. Everyone is described in the same vocabulary, so Results are
  consistent across runs and comparable across people.
- **Flexible.** The narrative around the Labels is free prose, and the AI may use its
  own phrasing as flavor. That phrasing never replaces a Label.
- **Unlisted Traditions.** When the AI recognizes an established tradition that is not
  in the library, the narrative may name it, marked as the AI's suggestion and not
  Polytic's. It is never shown as a Label, is excluded from comparison, and must be a
  real, established term, never a coinage presented as a tradition. The library grows
  only by owner revision, not from these.
- **Never forced.** If no Label fits a person's overall shape, the Result says so
  plainly (`framework.md`).

## Types and scope

Each Label has one fixed **type**:

| Type           | What it is                                                                                 | Can be Main? |
| -------------- | ------------------------------------------------------------------------------------------ | ------------ |
| **Ideology**   | A full tradition that can describe a whole map (liberalism, Christian democracy).          | Yes          |
| **Thin**       | A thin-centered tradition that rides on a host Ideology (populism, nationalism, feminism). | No           |
| **Foundation** | A named position on Foundation Dimensions (compatibilism, moral realism).                  | No           |

**Main** and **Area** are not on the card. They describe how much of one person's map
an Ideology Label fits, and are decided when it is matched: libertarianism can be one
person's Main Label and only the economic Area of another's. Ideologies whose natural
scope is one region (economic doctrines, models of democracy, foreign-policy schools)
are marked "usually Area" in the list.

## What gets an entry

**Granularity.** A tradition gets its own entry only if all three hold:

1. It has an **established name and its own literature** (thinkers, texts), not only a
   critics' label.
2. It **differs from its parent in a way the map can see**: at least one different
   Position, or a central Reason a person would recognize themselves in.
3. A **living person could plausibly hold it** today, or a Reference Figure needs it.

Anything that fails is a **variant**: a name listed on its parent's card, which the
narrative may use as flavor. Every entry records its **parent**; when several Labels
in one branch fit, the Result shows the most specific one, and can say "Ordoliberalism,
a branch of Liberalism".

**Also in scope, on equal footing.** The library covers the full range of political
traditions, including the most reprehensible by conventional standards (fascism,
national socialism, Stalinism, White nationalism, Salafi-jihadism), each defined with
the same dispassion, steelmanned reasoning, and sourcing as any other (`principles.md`:
Clinical Agnosticism; Map, Don't Grade). Probes touching traditions defined by violent
strategy stay historical or abstract, never calls to action.

**Not in the library:**

- **Centrism.** "Between left and right" has no location on a map with no left–right
  line, and matching it would mean computing one. What self-described centrists mean
  shows on the map instead: an eclectic mix (and no Main Label), low Pull or Torn
  Beliefs, or a real Position on _Tempo of change_ and _Majoritarian vs. consensus_.
  Named centrist traditions with content (Third Way, Abundance liberalism) keep their
  own Labels.
- **Religions** ("Catholic", "Sunni"). A religion is a way of life, not a position on
  a Dimension; faith shows on _Transcendence_ and _Source of moral authority_. Political
  religious traditions (Christian democracy, integralism, Islamism) are Ideology Labels.
- **Purely historical traditions** with no living holder and no Reference Figure that
  needs them. They can be named as Unlisted Traditions.

## Particularist Labels: the centered group

Some traditions share a shape and differ in **which group or nation they center**:
Black nationalism and White nationalism, Zionism and Hindutva. The group is not a
trade-off between two Poles, so it is never a Dimension. Instead:

- Established particularist traditions with their own name and canon get their own
  entry, and their card names a **centered group**. A person matches only if they center
  that group, the same way they must share the tradition's Reasons.
- National movements without a distinct canon (Scottish, Catalan, Québécois) match a
  generic Thin Label (Civic nationalism, Ethnic nationalism, Stateless-nation
  nationalism), with the group named in the narrative.
- Because the centered group counts as a Reason, mirror-image traditions do not come out
  as each other's closest match on Positions alone.

## Names

- **Self-names.** Each Label is named as its adherents name it. Critics' and outsiders'
  terms go in an "also called" line, marked as such: Hereditarianism (also called "race
  realism" by some adherents, "scientific racism" by critics); Identity-conscious
  progressivism (critics: "woke").
- **Contested umbrella terms are split** into the self-named schools they point at.
  "Neoliberalism" is not a Label; Ordoliberalism, Chicago school, and Market liberalism
  each carry it as a critics' "also called".
- **Group names are capitalized symmetrically**: Black, White, Indigenous, Asian,
  Hispanic. A library that capitalized one nationalism and not its mirror image would
  break the same-dispassion rule.

## The card

Every card follows this template exactly, so it can later be converted into
structured data mechanically (ADR-0005; converting it is implementation work).

```markdown
## <Label>

- **Type:** Ideology | Thin | Foundation
- **Parent:** <Label> | —
- **Also called:** <other self-names>; <critics' terms, marked "critics:">
- **Variants:** <names that failed the granularity rule> | —
- **Centered group:** <particularist Labels only> | —

### Positions

| Dimension              | Range                   | Central  |
| ---------------------- | ----------------------- | -------- |
| <exact Dimension name> | <from step> – <to step> | Yes / No |

### Reasons

**Self-description.** <2–3 sentences, the steelman, as a thoughtful adherent would say it>

**Key concepts.**

- **<Contested concept>:** <how this tradition decontests it>

**Signature reasons.**

- "<a claim an adherent would actually make>" (3–5)

**Telling it apart.**

- **<Neighboring Label>:** <the concrete difference, naming the Dimension or Reason>

**Sources.** <key thinkers and texts>
```

**Positions are ranges on a five-step scale**, named by the Dimension's own Poles:

> Strongly _Pole A_ · Leans _Pole A_ · Middle · Leans _Pole B_ · Strongly _Pole B_

- A range is written in the scale's order, from the _Pole A_ end to the _Pole B_ end ("Middle – Leans _Pole B_"); a single step is written once.
- A card lists only the Dimensions the tradition cares about. **An unlisted Dimension
  means no fixed view**: any Position fits.
- A **central** Dimension is a dealbreaker: outside its range, the Label cannot be the
  person's Main or Area Label. A non-central Dimension only lowers the fit.
- Five named steps, not numbers: they are what a careful author can defend from
  sources, and what the owner can review.

**Reasons have a fixed shape** so that the AI's judgment has something concrete to
check. _Telling it apart_ matters most: neighbors are where matching goes wrong.

**Sources** follow the taxonomy's standard: standard reference works and the
tradition's own primary texts; the self-description is sourced to adherents, never to
critics.

## How matching uses the library (input to the session design)

Whether this is how matching runs is decided in
[Decide how a grilling session runs behind the scenes](https://github.com/slovakian/polytic/issues/32).
The card format is built for a two-step funnel, so a small model never has to read the
whole library:

1. **Code scores Positions.** Every card's ranges are compared with the person's Beliefs
   (weighted by Pull, excluding Thin Coverage); central Dimensions out of range rule a
   Label out. A shortlist of about ten survives.
2. **The AI judges Reasons** on the shortlist only, against each card's Reasons and the
   person's Evidence, and decides Main, Area, Thin, Foundation, or none.

## Families and card files

| Family                                            | Card file                      |
| ------------------------------------------------- | ------------------------------ |
| Liberalism and libertarianism                     | `labels/liberalism.md`         |
| Conservatism                                      | `labels/conservatism.md`       |
| Socialism and social democracy                    | `labels/socialism.md`          |
| Marxism and communism                             | `labels/marxism.md`            |
| Anarchism                                         | `labels/anarchism.md`          |
| Republicanism and communitarianism                | `labels/republicanism.md`      |
| Religious political traditions                    | `labels/religious.md`          |
| Fascism, the radical right, and reaction          | `labels/radical-right.md`      |
| National movements                                | `labels/national-movements.md` |
| Ecologism                                         | `labels/ecologism.md`          |
| Feminism and gender politics                      | `labels/feminism.md`           |
| Critical, liberation, and postcolonial traditions | `labels/critical.md`           |
| Economic and developmental doctrines              | `labels/economic-doctrines.md` |
| Democratic theory and governance                  | `labels/democratic-theory.md`  |
| Foreign policy and world order                    | `labels/world-order.md`        |
| Technology and contemporary tendencies            | `labels/contemporary.md`       |
| Other Thin Labels                                 | `labels/thin.md`               |
| Non-Western and classical traditions              | `labels/non-western.md`        |
| Foundation Labels                                 | `labels/foundation.md`         |

---

## The list (244 Labels)

One line per Label. The gist is a placeholder until the card is written; the card's
self-description supersedes it. Parents point only at Labels in this list; family is
given by the heading.

### Liberalism

| Label                    | Type                    | Parent                        | Gist                                                                                                                                                                                                                               |
| ------------------------ | ----------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Liberalism               | Ideology                | —                             | Individual liberty and equal rights secured by limited, accountable, consent-based government.                                                                                                                                     |
| Classical liberalism     | Ideology                | Liberalism                    | Markets, private property, free trade and the rule of law, with a state confined to securing rights. Includes Lockean natural-rights liberalism as a Reasons variant. _Variants:_ Utilitarian liberalism (philosophic radicalism). |
| Social liberalism        | Ideology                | Liberalism                    | Liberty needs real capacity, so the state should provide welfare, education and security against market misfortune. _Variants:_ LGBT equality liberalism.                                                                          |
| Egalitarian liberalism   | Ideology                | Social liberalism             | Justice as fairness: equal basic liberties and inequalities only where they benefit the worst off; includes Rawls's later "political liberalism" (public reason).                                                                  |
| Perfectionist liberalism | Ideology                | Liberalism                    | The state may promote autonomy and valuable options because autonomy is an objective good.                                                                                                                                         |
| Ordoliberalism           | Ideology                | Liberalism                    | A strong state must constitute and police a competitive market order against cartels and private power. _Variants:_ Social market economy.                                                                                         |
| Liberal internationalism | Ideology (usually Area) | Liberalism                    | Peace and prosperity through trade, international law and institutions, and support for democracy abroad.                                                                                                                          |
| Progressivism            | Ideology                | Liberalism / Social democracy | Reform through active government and expertise to correct market and social injustices; in current use, socially liberal and egalitarian.                                                                                          |
| Multicultural liberalism | Ideology                | Liberalism                    | Liberal autonomy requires secure cultural membership, so minority and national groups may hold group-differentiated rights.                                                                                                        |
| Abundance liberalism     | Ideology                | Liberalism                    | The binding constraint is scarcity caused by procedure and veto points; build housing, energy and infrastructure at scale. Covers YIMBYism.                                                                                        |
| Market liberalism        | Ideology                | Liberalism                    | Open trade, sound money, privatization and rule-bound international economic institutions as the path to prosperity; also called "neoliberalism" (mainly by critics) and the "Washington Consensus".                               |

### Libertarianism

| Label                                                   | Type     | Parent             | Gist                                                                                                                                      |
| ------------------------------------------------------- | -------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Libertarianism                                          | Ideology | —                  | Self-ownership and strong property rights limit what anyone, including the state, may do to a person.                                     |
| Minarchism                                              | Ideology | Libertarianism     | Only a night-watchman state (police, courts, defence) is legitimate.                                                                      |
| Anarcho-capitalism                                      | Ideology | Libertarianism     | All services, including law and defence, should be supplied by voluntary markets; the state has no right to rule.                         |
| Agorism                                                 | Ideology | Anarcho-capitalism | Reach a stateless society by building untaxed "counter-economics" rather than through politics.                                           |
| Objectivism                                             | Ideology | Libertarianism     | Rational egoism and objective reality justify laissez-faire capitalism as the only moral social system.                                   |
| Left-libertarianism (Steiner–Vallentyne)                | Ideology | Libertarianism     | Full self-ownership plus egalitarian shares in natural resources. Overlaps Georgism (ED9).                                                |
| Bleeding-heart libertarianism (neoclassical liberalism) | Ideology | Libertarianism     | Markets and property justified partly by their benefit to the poor, with a moderate safety net. Covers "liberaltarianism" (Lindsey 2006). |
| Paleolibertarianism                                     | Ideology | Libertarianism     | Libertarian economics joined to cultural traditionalism and anti-establishment populism.                                                  |

### Conservatism

| Label                                | Type                    | Parent       | Gist                                                                                                                                                                         |
| ------------------------------------ | ----------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Conservatism                         | Ideology                | —            | Preserve inherited institutions and change cautiously, because society holds wisdom no plan can reconstruct.                                                                 |
| Traditionalist conservatism          | Ideology                | Conservatism | Society is an inherited partnership across generations sustained by custom, religion, family and local loyalties. Covers Oakeshott's sceptical conservatism as an R variant. |
| One-nation conservatism              | Ideology                | Conservatism | The privileged owe duties to the whole nation; social reform keeps the nation united. Covers Red Toryism (Grant 1965; Blond 2010) as REG.                                    |
| Liberal conservatism                 | Ideology                | Conservatism | Market economics and liberal institutions defended on conservative grounds of continuity and prudence. _Variants:_ Fusionism.                                                |
| New Right                            | Ideology                | Conservatism | Free economy and strong state: deregulation and lower taxes with law, order, nation and family. _Variants:_ Supply-side economics.                                           |
| Neoconservatism                      | Ideology                | Conservatism | Democratic values defended at home against cultural decay and abroad with American power.                                                                                    |
| Paleoconservatism                    | Ideology                | Conservatism | Defend inherited, local, often religious community against mass immigration, free trade and foreign intervention.                                                            |
| Social conservatism                  | Ideology (usually Area) | Conservatism | Law and culture should uphold traditional morality, family, religion and the protection of life.                                                                             |
| Fiscal conservatism                  | Ideology (usually Area) | Conservatism | Balanced budgets, low debt and restrained spending.                                                                                                                          |
| National conservatism                | Ideology                | Conservatism | The independent nation-state, bound by shared heritage and religion, is the proper unit of political order.                                                                  |
| Post-liberalism                      | Ideology                | Conservatism | Liberalism's success corrodes the family, community and religion it depends on; politics should aim at the common good. Covers "common-good conservatism" (Vermeule 2022).   |
| Counter-revolutionary traditionalism | Ideology                | Conservatism | The Revolution's principles are false; restore throne, altar and ordered society. _Variants:_ Integral nationalism (Maurrassism).                                            |
| Gaullism                             | Ideology                | Conservatism | National independence, a strong executive above parties, and state-led modernisation.                                                                                        |

### Socialism and social democracy

| Label                                         | Type                    | Parent                      | Gist                                                                                                                                                                   |
| --------------------------------------------- | ----------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Socialism                                     | Ideology                | —                           | Productive wealth should be held or controlled in common so that economic life serves equality and solidarity. _Variants:_ Utopian socialism.                          |
| Democratic socialism                          | Ideology                | Socialism                   | Replace capitalism with social ownership by democratic, constitutional means. _Variants:_ Eurocommunism.                                                               |
| Social democracy                              | Ideology                | Socialism                   | Reform capitalism through a universal welfare state, strong unions and a mixed economy. Covers Bernsteinian revisionism and the "Nordic model". _Variants:_ Fabianism. |
| Third Way                                     | Ideology                | Social democracy            | Social justice through markets, social investment and reciprocal responsibilities rather than old-style state ownership.                                               |
| Market socialism                              | Ideology                | Socialism                   | Social or worker ownership of firms that compete in markets.                                                                                                           |
| Co-operativism                                | Ideology (usually Area) | Socialism                   | Enterprises owned and democratically run by their members.                                                                                                             |
| Blue Labour (left conservatism)               | Ideology                | Socialism / Post-liberalism | Labour politics of family, faith, work, place and reciprocity, sceptical of both market and state liberalism.                                                          |
| Libertarian socialism                         | Ideology                | Socialism / Anarchism       | Socialism through self-management and free association, without a ruling state or party. _Variants:_ Guild socialism.                                                  |
| African socialism (incl. Ujamaa)              | Ideology                | Socialism                   | Socialism rooted in African communal tradition: communal land, village self-reliance and one-party national unity.                                                     |
| Bolivarianism (socialism of the 21st century) | Ideology                | Socialism                   | Participatory, anti-imperialist socialism led by a strong popular leader and communal councils.                                                                        |

### Marxism and communism

| Label                                  | Type     | Parent           | Gist                                                                                                                                                                                                                                           |
| -------------------------------------- | -------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Marxism                                | Ideology | Socialism        | History is driven by class struggle over the means of production; capitalism will be superseded by communism. Covers Second International "orthodox" Marxism (Kautsky). _Variants:_ Western Marxism / critical theory, Historical materialism. |
| Marxism–Leninism                       | Ideology | Marxism          | A vanguard party organised by democratic centralism leads the proletariat to seize power and build socialism through a planned economy. _Variants:_ Yugoslav self-management socialism.                                                        |
| Stalinism                              | Ideology | Marxism–Leninism | Socialism in one country: rapid state-led industrialisation, collectivisation, and a party-state defended by intense vigilance against internal enemies.                                                                                       |
| Trotskyism                             | Ideology | Marxism–Leninism | Permanent, international revolution against both capitalism and bureaucratic degeneration of workers' states.                                                                                                                                  |
| Maoism                                 | Ideology | Marxism–Leninism | Peasant-based protracted people's war, the mass line, and continuing revolution against new elites.                                                                                                                                            |
| Socialism with Chinese characteristics | Ideology | Marxism–Leninism | Party-led socialism that uses markets and opening to develop productive forces under one-party rule.                                                                                                                                           |
| Juche                                  | Ideology | Marxism–Leninism | Self-reliance in thought, economy and defence under the guidance of the leader (suryong).                                                                                                                                                      |
| Council communism                      | Ideology | Marxism          | Workers' councils, not a party or state, should hold power. Covers Luxemburgism as a near neighbour.                                                                                                                                           |
| Autonomism (operaismo)                 | Ideology | Marxism          | Workers' self-activity and the refusal of work, outside parties and unions, drive change.                                                                                                                                                      |

### Anarchism

| Label                     | Type     | Parent                | Gist                                                                                                                                                          |
| ------------------------- | -------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Anarchism                 | Ideology | —                     | The state and other unjustified hierarchies should be replaced by voluntary co-operation.                                                                     |
| Philosophical anarchism   | Ideology | Anarchism             | No state has a general right to be obeyed, though abolishing states now may be unwise.                                                                        |
| Individualist anarchism   | Ideology | Anarchism             | The sovereign individual owes nothing to state or society (Stirner); free exchange among self-owners (Tucker).                                                |
| Mutualism                 | Ideology | Anarchism             | Free exchange among producers, mutual credit and possession by use instead of capitalist property.                                                            |
| Anarcho-communism         | Ideology | Anarchism             | A stateless, moneyless federation of communes: from each according to ability, to each according to need. Covers Bakunin's collectivism and platformism.      |
| Anarcho-syndicalism       | Ideology | Anarchism             | Revolutionary unions, through the general strike, become the organs of a self-managed society.                                                                |
| Insurrectionary anarchism | Ideology | Anarchism             | Informal affinity groups and direct attack, rejecting formal organisation and mediation.                                                                      |
| Christian anarchism       | Ideology | Anarchism             | The Sermon on the Mount, or principled nonviolence, forbids the coercion on which states rest.                                                                |
| Anarcho-primitivism       | Ideology | Anarchism             | Civilisation, agriculture and industrial technology are the root of domination; return to forager-like life.                                                  |
| Social ecology            | Ideology | Anarchism / Ecologism | Ecological crisis stems from social hierarchy; replace the state with confederated, directly democratic municipalities. _Variants:_ Democratic confederalism. |

### Republicanism and communitarianism

| Label                | Type     | Parent                                      | Gist                                                                                                                                                          |
| -------------------- | -------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Republicanism        | Ideology | —                                           | A free people governs itself through a mixed constitution and citizens' civic virtue. _Variants:_ Jeffersonian agrarian republicanism.                        |
| Civic republicanism  | Ideology | Republicanism                               | Freedom is non-domination: no one should be subject to another's arbitrary power, public or private.                                                          |
| French republicanism | Ideology | Republicanism                               | One indivisible, secular republic of equal citizens, with religion and group identity kept out of public institutions.                                        |
| Communitarianism     | Ideology | —                                           | The self is constituted by its communities; politics should sustain shared goods, not only individual rights. Covers Etzioni's "responsive communitarianism". |
| Distributism         | Ideology | Communitarianism / Catholic social teaching | Property should be widely held in family farms, small firms and guilds, avoiding both capitalism and socialism.                                               |

### Religious political traditions

| Label                                       | Type     | Parent                               | Gist                                                                                                                   |
| ------------------------------------------- | -------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Catholic social teaching                    | Ideology | —                                    | Human dignity, the common good, subsidiarity, solidarity and the universal destination of goods.                       |
| Christian democracy                         | Ideology | Catholic social teaching             | Personalist, centrist politics of family, subsidiarity, social market and European integration.                        |
| Neo-Calvinism                               | Ideology | —                                    | Family, church, school and business each have their own God-given sovereignty that the state must respect.             |
| Catholic integralism                        | Ideology | Catholic social teaching             | Temporal power should be ordered to the spiritual end, with the state recognising the Church.                          |
| Christian nationalism                       | Ideology | —                                    | The nation should be self-consciously Christian, with law and culture reflecting that heritage.                        |
| Christian reconstructionism (theonomy)      | Ideology | Christian nationalism                | Biblical law, including Old Testament civil law, should govern society, with a minimal, decentralised state.           |
| Christian socialism                         | Ideology | Socialism                            | The Gospel requires co-operation and social ownership against competitive individualism. Covers the US Social Gospel.  |
| Liberation theology                         | Ideology | Catholic social teaching / Socialism | God's preferential option for the poor demands transforming the structures of oppression.                              |
| Anabaptist political witness                | Ideology | —                                    | The church is a separate community of nonviolent discipleship that does not wield the sword.                           |
| Islamism                                    | Ideology | —                                    | Islam is a complete way of life; government should implement sharia under God's sovereignty.                           |
| Muslim democracy                            | Ideology | Islamism                             | Islamic values pursued through pluralist, electoral democracy and civil liberties. _Variants:_ Islamic modernism.      |
| Guardianship of the Jurist                  | Ideology | Islamism                             | In the Imam's absence, a qualified jurist should hold supreme political authority.                                     |
| Quietist Salafism                           | Ideology | Islamism                             | Return to the practice of the first Muslim generations, with obedience to rulers and avoidance of political agitation. |
| Salafi-jihadism                             | Ideology | Islamism                             | Armed jihad is obligatory to overthrow un-Islamic rulers and restore a caliphate governed by sharia.                   |
| Engaged Buddhism (incl. Buddhist economics) | Ideology | —                                    | Buddhist ethics of non-harm and right livelihood applied to social justice, sufficiency and nonviolence.               |

### Fascism, the radical right, and reaction

| Label                            | Type     | Parent              | Gist                                                                                                                                                                                                                      |
| -------------------------------- | -------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fascism                          | Ideology | —                   | A revolutionary nationalism seeking the nation's rebirth through a unified, mobilised people under one leader and party, as a "third way" beyond liberalism and Marxism. _Variants:_ Kokutai nationalism (Shōwa statism). |
| National Socialism               | Ideology | Fascism             | The nation is a community of descent (Volksgemeinschaft) whose survival requires racial unity, a leader-state and territorial expansion. Covers postwar neo-Nazism and Strasserism as REG/MERGE.                          |
| Falangism (national syndicalism) | Ideology | Fascism             | Catholic national-syndicalist state integrating employers and workers in vertical syndicates.                                                                                                                             |
| Conservative Revolution          | Ideology | —                   | Weimar-era current seeking a new, organic, hierarchical national order beyond both reaction and liberalism.                                                                                                               |
| Traditionalism                   | Ideology | —                   | Modernity is the dark end of a cycle of decline from a primordial sacred Tradition; restore spiritual hierarchy.                                                                                                          |
| European New Right               | Ideology | —                   | Defend the right of every people to its own culture (ethnopluralism) against liberal universalism, globalisation and Americanisation.                                                                                     |
| Identitarianism                  | Ideology | European New Right  | Activist movement to preserve Europe's ethnocultural identity against mass immigration.                                                                                                                                   |
| White nationalism                | Ideology | —                   | Peoples of European descent are a distinct group with a legitimate interest in preserving their own homelands and majorities. Covers White separatism. _Variants:_ Alt-right.                                             |
| National populism                | Ideology | —                   | Nativism, authoritarianism (strict order) and populism: the nation's native people versus elites and outsiders.                                                                                                           |
| Eurasianism                      | Ideology | —                   | Russia-Eurasia is a distinct civilisation; reject liberal universalism for a multipolar world of civilisational empires. Includes Dugin's "Fourth Political Theory".                                                      |
| Neoreaction                      | Ideology | —                   | Democracy is dysfunctional; replace it with accountable, CEO-like sovereign rule and freedom of exit between polities.                                                                                                    |
| Ecofascism                       | Ideology | Fascism / Ecologism | Ecological survival justifies authoritarian, nationalist control of population and territory.                                                                                                                             |

### National movements and national-developmental regimes

| Label               | Type     | Parent      | Gist                                                                                                                                                             |
| ------------------- | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Peronism            | Ideology | —           | Social justice, economic independence and political sovereignty through an organised community led by a popular leader and the unions.                           |
| Kemalism            | Ideology | —           | The six arrows: republicanism, nationalism, populism, laicism, statism, reformism; modernise from above.                                                         |
| Labour Zionism      | Ideology | Zionism     | Jewish national self-determination in the Land of Israel built through collective labour and socialist institutions.                                             |
| Revisionist Zionism | Ideology | Zionism     | A Jewish state requires military strength (the "iron wall") and a liberal-national, non-socialist economy.                                                       |
| Religious Zionism   | Ideology | Zionism     | Jewish return to the Land is a religious, redemptive event, joining Torah observance to national life.                                                           |
| Hindutva            | Ideology | —           | India is a Hindu nation (Hindu Rashtra) defined by shared civilisation and heritage, with a uniform civil code.                                                  |
| Black nationalism   | Ideology | —           | People of African descent should achieve self-determination through their own institutions, economy and, for some, homeland. Covers Black Power.                 |
| Zionism             | Thin     | Nationalism | The Jewish people is a nation with a right to self-determination in its historic homeland. Centered group: the Jewish people.                                    |
| Pan-Arabism         | Thin     | Nationalism | The Arab peoples form one nation that should unite politically against division and foreign domination. Centered group: Arabs. _Variants:_ Ba'athism, Nasserism. |

### Ecologism

| Label                     | Type     | Parent                   | Gist                                                                                                                                              |
| ------------------------- | -------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Green politics            | Ideology | Ecologism                | The four pillars: ecological wisdom, social justice, grassroots democracy and nonviolence. _Variants:_ Bioregionalism.                            |
| Deep ecology              | Ideology | Ecologism                | All living beings have intrinsic value; human population and consumption must shrink to let nature flourish.                                      |
| Eco-socialism             | Ideology | Ecologism / Socialism    | Capitalism's growth drive causes ecological crisis; only democratic social ownership can live within limits.                                      |
| Green liberalism          | Ideology | Ecologism / Liberalism   | Environmental protection pursued within liberal neutrality, rights and markets.                                                                   |
| Eco-conservatism          | Ideology | Ecologism / Conservatism | Love of home (oikophilia) and local stewardship, not global planning, protect the environment.                                                    |
| Degrowth                  | Ideology | Ecologism                | Rich economies should deliberately downscale material throughput for ecological and social well-being. Covers steady-state economics (Daly 1977). |
| Ecomodernism              | Ideology | Ecologism                | Decouple human welfare from nature through intensification and technology (nuclear, urbanisation) so nature can be spared.                        |
| Buen vivir (sumak kawsay) | Ideology | Ecologism                | Living well in harmony with community and Mother Earth, including constitutional rights of nature.                                                |

### Feminism and gender politics

| Label                    | Type | Parent               | Gist                                                                                                                         |
| ------------------------ | ---- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Liberal feminism         | Thin | Feminism             | Equal rights and opportunities for women through law, education and choice. _Variants:_ Equity feminism.                     |
| Radical feminism         | Thin | Feminism             | Patriarchy, rooted in sexual dominance, is the basic system of oppression and must be uprooted.                              |
| Socialist feminism       | Thin | Feminism / Socialism | Women's oppression is bound up with capitalism and unpaid reproductive labour.                                               |
| Difference feminism      | Thin | Feminism             | Women's distinct values and an ethic of care should be honoured, not assimilated to male norms. Covers maternalist feminism. |
| Intersectional feminism  | Thin | Feminism             | Race, sex, class and other systems of power interlock and must be analysed together. _Variants:_ Postcolonial feminism.      |
| Gender-critical feminism | Thin | Radical feminism     | Sex is real and politically salient; women's rights and single-sex spaces should be based on sex, not gender identity.       |
| Queer feminism           | Thin | Feminism             | Gender and sex are performed and socially constructed; liberation includes trans and gender-nonconforming people.            |
| Sex-positive feminism    | Thin | Feminism             | Sexual freedom, including pornography and sex work, is part of women's liberation.                                           |
| Ecofeminism              | Thin | Feminism / Ecologism | The domination of women and of nature are linked and must be overcome together.                                              |
| Islamic feminism         | Thin | Feminism             | Gender equality grounded in a re-reading of the Qur'an and Islamic tradition.                                                |
| Men's rights             | Thin | —                    | Men face neglected legal and social disadvantages (custody, conscription, suicide, sentencing) that politics should address. |

### Critical, liberation, and postcolonial traditions

| Label                             | Type                    | Parent                               | Gist                                                                                                                                                                               |
| --------------------------------- | ----------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Postcolonialism                   | Ideology (usually Area) | —                                    | Colonial power persists in knowledge, culture and economy; it must be exposed and undone.                                                                                          |
| Fanonist anti-colonial revolution | Ideology                | Postcolonialism                      | The colonised reclaim humanity and nationhood through revolutionary struggle, violence included.                                                                                   |
| Critical race theory              | Ideology (usually Area) | —                                    | Racism is structural and embedded in law and institutions, not only individual prejudice; colour-blind rules can entrench it.                                                      |
| Identity-conscious progressivism  | Ideology                | Progressivism / Critical race theory | Society is structured by interlocking identity-based oppressions; justice requires recognising identities and actively counteracting disparities. Covers Kendi-style "antiracism". |
| Indigenous resurgence             | Ideology                | —                                    | Indigenous peoples hold inherent sovereignty, land title and the right to their own laws and ways of life.                                                                         |
| Queer liberation                  | Thin                    | —                                    | Liberation from heteronormativity, not just inclusion in existing institutions.                                                                                                    |
| Ambedkarism                       | Ideology                | —                                    | Caste is a graded hierarchy that must be annihilated through constitutional democracy, reservations and, for many, conversion to Buddhism.                                         |
| Disability rights                 | Thin                    | —                                    | Disability is produced mainly by social barriers, not impairment; remove them and ensure self-representation.                                                                      |

### Economic and developmental doctrines

| Label                  | Type                    | Parent                                 | Gist                                                                                                                                               |
| ---------------------- | ----------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Keynesianism           | Ideology (usually Area) | Social liberalism / Social democracy   | Governments should manage aggregate demand, running deficits in slumps, to sustain employment.                                                     |
| Chicago school         | Ideology (usually Area) | Classical liberalism                   | Inflation is a monetary phenomenon; follow stable money-growth rules and leave the rest to markets.                                                |
| Austrian school        | Ideology (usually Area) | Classical liberalism / Libertarianism  | Prices carry dispersed knowledge no planner can gather; sound (often commodity) money and free markets.                                            |
| Modern Monetary Theory | Ideology (usually Area) | —                                      | A currency-issuing state is limited by inflation, not by solvency; spend for full employment (job guarantee).                                      |
| Economic nationalism   | Ideology (usually Area) | Nationalism                            | Protect infant industries and build national productive capacity (Hamilton, List); revived in current industrial policy. _Variants:_ Mercantilism. |
| Dependency theory      | Ideology (usually Area) | —                                      | Peripheral economies are locked into unequal exchange with the core; break it through import substitution and planning.                            |
| Developmental state    | Ideology (usually Area) | —                                      | An insulated, meritocratic bureaucracy guides private industry toward export-led growth.                                                           |
| Georgism               | Ideology                | Classical liberalism                   | Land value belongs to the community; replace other taxes with a single tax on land value. Covers geolibertarianism.                                |
| Neo-Brandeisianism     | Ideology (usually Area) | Progressivism / Civic republicanism    | Concentrated corporate power threatens democracy; antitrust should protect market structure, not just consumer prices.                             |
| Neo-corporatism        | Ideology (usually Area) | Christian democracy / Social democracy | Organised capital and labour bargain with the state over wages and policy. Distinct from state (fascist) corporatism.                              |

### Democratic theory and governance

| Label                   | Type                    | Parent                               | Gist                                                                                                                       |
| ----------------------- | ----------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Deliberative democracy  | Ideology (usually Area) | Liberalism / Republicanism           | Legitimacy comes from free and equal public reasoning, not only from vote-counting.                                        |
| Participatory democracy | Ideology (usually Area) | Democratic socialism / Republicanism | Citizens should take part directly in decisions, including at work.                                                        |
| Agonistic democracy     | Ideology (usually Area) | —                                    | Politics is irreducible conflict; democracy should channel it into contest between adversaries rather than seek consensus. |
| Direct democracy        | Ideology (usually Area) | —                                    | Citizens should decide major questions themselves by initiative and referendum.                                            |
| Consociationalism       | Ideology (usually Area) | —                                    | Divided societies are best governed by grand coalitions, proportionality, segmental autonomy and mutual vetoes.            |
| Epistocracy             | Ideology (usually Area) | —                                    | Political power should be weighted toward those with relevant knowledge.                                                   |
| Lottocracy              | Ideology (usually Area) | —                                    | Legislators or assemblies should be chosen by lot, not election.                                                           |
| Technocracy             | Ideology                | —                                    | Government by technical and scientific experts using rational planning.                                                    |
| Minimalist democracy    | Ideology (usually Area) | Liberalism                           | Democracy is competition between elites for the people's vote; citizens choose leaders, not policies.                      |
| Libertarian paternalism | Ideology (usually Area) | Liberalism                           | Steer choices for people's own good by choice architecture ("nudges") while preserving freedom to choose.                  |

### Foreign policy and world order

| Label            | Type                    | Parent                   | Gist                                                                                                                          |
| ---------------- | ----------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Realism          | Ideology (usually Area) | —                        | States pursue power and security in an anarchic world; foreign policy should serve the national interest, not moral crusades. |
| Restraint        | Ideology (usually Area) | Realism / Libertarianism | Avoid foreign wars and entangling alliances; defend the homeland. Covers "isolationism", mainly a pejorative.                 |
| Non-alignment    | Ideology (usually Area) | —                        | Newly independent states should stay outside great-power blocs and defend sovereignty and peaceful coexistence.               |
| World federalism | Ideology (usually Area) | Cosmopolitanism          | Replace international anarchy with a federal world government under law.                                                      |

### Technology and contemporary tendencies

| Label                     | Type     | Parent                | Gist                                                                                                                                                |
| ------------------------- | -------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Transhumanism             | Thin     | —                     | Humans should use technology to overcome biological limits on lifespan, intelligence and well-being. Covers democratic transhumanism (Hughes 2004). |
| Effective altruism        | Ideology | —                     | Use evidence and reason to do the most good, impartially, including for distant people and animals.                                                 |
| Longtermism               | Ideology | Effective altruism    | Positively influencing the long-term future, especially by reducing existential risk, is a key moral priority.                                      |
| Effective accelerationism | Ideology | —                     | Accelerate technological and economic growth, especially AI, as a moral and civilisational imperative; oppose precautionary regulation.             |
| Left accelerationism      | Ideology | Socialism             | Push automation and technology toward a post-work, post-scarcity socialism.                                                                         |
| Landian accelerationism   | Ideology | —                     | Capitalism's techno-commercial process should be intensified, not resisted, even beyond human control.                                              |
| Techno-libertarianism     | Ideology | Libertarianism        | The internet and cryptography can create spaces free of state control; covers crypto-anarchism.                                                     |
| Network state             | Ideology | Techno-libertarianism | Online communities can crowdfund territory and gain diplomatic recognition as new states.                                                           |

### Other Thin Labels

| Label                        | Type | Parent                   | Gist                                                                                                                             |
| ---------------------------- | ---- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Populism                     | Thin | —                        | Society is split into a pure people and a corrupt elite; politics should express the general will.                               |
| Left populism                | Thin | Populism                 | Build a "people" against oligarchy across diverse democratic demands.                                                            |
| Agrarian populism            | Thin | Populism                 | Small farmers and rural communities against financiers, monopolies and distant elites; land to those who work it.                |
| Nationalism                  | Thin | —                        | The nation is the primary political community and should be self-governing.                                                      |
| Civic nationalism            | Thin | Nationalism              | The nation is a community of citizens bound by shared political principles and institutions.                                     |
| Ethnic nationalism           | Thin | Nationalism              | The nation is a community of shared descent, culture and language, and should have its own state.                                |
| Liberal nationalism          | Thin | Nationalism / Liberalism | National cultures matter to people's freedom and identity, and can ground solidarity and welfare within liberal limits.          |
| Stateless-nation nationalism | Thin | Nationalism              | A minority nation within a state (Scotland, Catalonia, Quebec, Flanders…) seeks autonomy or independence.                        |
| Pan-Africanism               | Thin | Nationalism              | Unity and self-determination of Africa and the African diaspora against imperialism. _Variants:_ Négritude.                      |
| Ecologism                    | Thin | —                        | Human beings are part of nature; ecological limits should reshape politics, economy and ethics.                                  |
| Environmentalism             | Thin | Ecologism                | Protect the environment through reforms within existing economic and political arrangements.                                     |
| Feminism                     | Thin | —                        | Women are disadvantaged because of their sex, and this can and should be overcome.                                               |
| Multiculturalism             | Thin | —                        | Cultural diversity should be publicly recognised and accommodated, not assimilated.                                              |
| Cosmopolitanism              | Thin | —                        | All humans belong to a single moral community; borders have little moral weight.                                                 |
| Sovereigntism                | Thin | —                        | Oppose or limit European (or other supranational) integration in favour of national self-government.                             |
| European federalism          | Thin | —                        | Europe should unite in a federal political union.                                                                                |
| Pacifism                     | Thin | —                        | War, and for absolutists all violence, is wrong and should be refused.                                                           |
| Anti-imperialism             | Thin | —                        | Oppose domination of peoples by imperial powers, economic or military.                                                           |
| Monarchism                   | Thin | —                        | A hereditary monarch should be head of state, as a symbol of continuity or as a real ruler. _Variants:_ Divine-right absolutism. |
| Agrarianism                  | Thin | —                        | Farming life and the rural community are the moral backbone of society and deserve protection.                                   |
| Animal rights                | Thin | —                        | Animals' interests, or rights, must be protected in law, ending most human use of animals for some.                              |
| Alter-globalization          | Thin | —                        | "Another world is possible": oppose corporate-led globalisation in favour of global justice.                                     |

### Non-Western and classical traditions

| Label                          | Type     | Parent | Gist                                                                                                                                                         |
| ------------------------------ | -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Political Confucianism         | Ideology | —      | Rule by virtue and ritual, graded obligations, and a government legitimated by heaven, tradition and the people together. _Variants:_ Confucian meritocracy. |
| Legalism                       | Ideology | —      | Order comes from clear, publicised laws backed by certain rewards and punishments, not from virtue.                                                          |
| Three Principles of the People | Ideology | —      | Nationalism, democracy and people's livelihood, via staged tutelage to constitutional government.                                                            |
| Asian values                   | Ideology | —      | Community, family, order and consensus come before individual rights; development before liberal democracy.                                                  |
| Pancasila                      | Ideology | —      | Five principles: belief in one God, humanitarianism, national unity, consensus democracy and social justice.                                                 |
| Gandhism                       | Ideology | —      | Self-rule through nonviolence, village self-reliance, trusteeship of wealth and the welfare of all.                                                          |
| Ubuntu                         | Ideology | —      | A person is a person through other persons; politics should seek harmony and consensus.                                                                      |

### Foundation Labels

| Label                                  | Type       | Parent | Gist                                                                                                                                         |
| -------------------------------------- | ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Libertarian free will                  | Foundation | —      | Free choices are not fixed by prior causes; agents originate them.                                                                           |
| Compatibilism                          | Foundation | —      | Freedom and responsibility are compatible with determinism.                                                                                  |
| Free-will skepticism                   | Foundation | —      | No one has the control basic desert requires.                                                                                                |
| Meritocratic desert                    | Foundation | —      | People deserve the rewards of their talent and effort.                                                                                       |
| Luck egalitarianism                    | Foundation | —      | Inequalities from brute luck are unjust; those from choice may not be.                                                                       |
| Constrained vision                     | Foundation | —      | Human limits are permanent; institutions must work with them, not perfect people. Covers Augustinian and Hobbesian views.                    |
| Unconstrained vision                   | Foundation | —      | Reason and better institutions can substantially improve human beings.                                                                       |
| Christian realism                      | Foundation | —      | Sin makes collective life a realm of power, so justice needs balanced power, not idealism.                                                   |
| Social constructionism                 | Foundation | —      | Many human differences and categories are produced by social arrangements.                                                                   |
| Psychological nativism                 | Foundation | —      | Many individual differences have substantial biological, heritable bases.                                                                    |
| Hereditarianism                        | Foundation | —      | Race is a biological reality and average group differences in traits are partly genetic.                                                     |
| Racial constructivism                  | Foundation | —      | Race is a social construction; group differences are produced by history and environment.                                                    |
| Moral realism                          | Foundation | —      | Some moral claims are true independent of anyone's attitudes.                                                                                |
| Moral constructivism                   | Foundation | —      | Moral truths are what rational agents would construct or agree to from a proper standpoint.                                                  |
| Moral anti-realism                     | Foundation | —      | Moral claims express attitudes, are all false, or are true only relative to cultures.                                                        |
| Divine command theory                  | Foundation | —      | Moral obligation is constituted by God's commands.                                                                                           |
| Natural law                            | Foundation | —      | Morality follows from human nature and basic goods, knowable by reason.                                                                      |
| Social contract theory                 | Foundation | —      | Moral and political principles are those people would agree to.                                                                              |
| Utilitarianism                         | Foundation | —      | The right act produces the best overall outcome, usually the greatest well-being.                                                            |
| Deontology                             | Foundation | —      | Some acts are forbidden whatever the consequences; persons are never mere means. Covers threshold deontology and side-constraints.           |
| Virtue ethics                          | Foundation | —      | Ethics centres on character and flourishing rather than rules or outcomes.                                                                   |
| Value pluralism                        | Foundation | —      | Genuine values are many, conflicting and sometimes incommensurable.                                                                          |
| Impartialism                           | Foundation | —      | Everyone's interests count equally, wherever and whoever they are. _Variants:_ Mohism.                                                       |
| Moral partialism (special obligations) | Foundation | —      | We rightly owe more to family, friends, community and compatriots.                                                                           |
| Sentientism                            | Foundation | —      | All sentient beings have moral status in proportion to their capacity to suffer.                                                             |
| Anthropocentrism                       | Foundation | —      | Nature matters morally only for what it means to humans.                                                                                     |
| Stewardship                            | Foundation | —      | Humans hold creation in trust and owe care for it.                                                                                           |
| Ecocentrism                            | Foundation | —      | Ecosystems and species have value of their own. Covers biocentrism (P. Taylor 1986).                                                         |
| Sanctity of life                       | Foundation | —      | Every human life has inviolable worth from conception to natural death.                                                                      |
| Personhood view                        | Foundation | —      | Full moral status depends on capacities such as consciousness and self-awareness.                                                            |
| Natural hierarchy                      | Foundation | —      | People are naturally ranked by ability, virtue or role. Covers Nietzschean aristocratism as an R variant.                                    |
| Basic moral equality                   | Foundation | —      | All persons are fundamentally equal in worth.                                                                                                |
| Methodological individualism           | Foundation | —      | Social phenomena are explained by individuals' actions and interactions.                                                                     |
| Holism (organicism)                    | Foundation | —      | Communities, nations and classes are real wholes with goods of their own.                                                                    |
| Natural rights                         | Foundation | —      | People have rights, including over themselves, before any law.                                                                               |
| Rights conventionalism                 | Foundation | —      | Rights are what law and social convention create.                                                                                            |
| Evidentialism                          | Foundation | —      | It is wrong to believe anything on insufficient evidence.                                                                                    |
| Critical rationalism                   | Foundation | —      | Knowledge grows by conjecture and refutation; nothing is beyond criticism.                                                                   |
| Pragmatism                             | Foundation | —      | Beliefs are tools to be judged by their practical consequences in experience.                                                                |
| Fideism                                | Foundation | —      | Faith is a legitimate ground of belief independent of reason or evidence. Covers reformed epistemology as R.                                 |
| Standpoint epistemology                | Foundation | —      | Social position shapes knowledge; marginalised standpoints can see what others cannot.                                                       |
| Burkean traditionalism                 | Foundation | —      | Inherited practices hold tacit knowledge; change bears the burden of proof. Covers Hayek's evolutionary epistemology and Chesterton's fence. |
| Enlightenment rationalism              | Foundation | —      | Practices earn authority only by passing the test of explicit reason.                                                                        |
| Theism                                 | Foundation | —      | A personal God exists and grounds meaning and value. _Variants:_ Deism.                                                                      |
| Agnosticism                            | Foundation | —      | Whether a transcendent reality exists is unknown or unknowable.                                                                              |
| Naturalism                             | Foundation | —      | Nature is all there is; meaning and morality are human achievements.                                                                         |
| Progressive view of history            | Foundation | —      | History is broadly a story of moral and material progress.                                                                                   |
| Declinism                              | Foundation | —      | Civilisations rise and fall in cycles, or the present is a decline from better times.                                                        |
| Welfare subjectivism                   | Foundation | —      | A life goes well as it contains pleasure or satisfies the person's desires.                                                                  |
| Objective-list theory                  | Foundation | —      | Some goods (knowledge, friendship, achievement, virtue) are good for anyone.                                                                 |
| Existentialism                         | Foundation | —      | We are condemned to be free and must author our own commitments.                                                                             |
| Role ethics                            | Foundation | —      | The good life is the faithful fulfilment of roles and relationships one did not choose.                                                      |
| Ethical egoism                         | Foundation | —      | Each person ought to pursue their own interest.                                                                                              |
| Altruism                               | Foundation | —      | A person's life is owed, at least in part, to serving others (Comte's coinage; Christian and humanist ethics of service).                    |

---

## Ruled out of the candidate survey

From the 275 candidates in [`research/label-candidates.md`](research/label-candidates.md).

### Cut

- **Neoliberalism** — Split per the naming ruling: the self-named schools "neoliberal" points at are Ordoliberalism, Chicago school, and Market liberalism, each with "neoliberal" as a critics' "also called".
- **Centrism (incl. "radical centrism")** — No Centrism Label (Q8): defined only against a left–right line Polytic never draws. Named centrist traditions keep their own Labels.
- **Caesarism (Bonapartism)** — An analytic term almost no one self-applies; strong-leader views show on Leadership.
- **Social Credit** — Historical, with almost no living holders; can be named as an Unlisted Tradition.
- **Mead's four schools (Hamiltonian, Wilsonian, Jeffersonian, Jacksonian)** — US-specific typology of existing schools: Wilsonian is Liberal internationalism, Jeffersonian is Restraint, Hamiltonian is Realism; Jacksonian shows as National populism's foreign policy.
- **Daoist political thought** — Contested as a political tradition ("Daoist anarchism" is a modern reading); can be named as an Unlisted Tradition.

### Folded in as variants

- **Utilitarian liberalism (philosophic radicalism)** → variant of Classical liberalism. Historical (philosophic radicalism); differs from Classical liberalism mainly in its utilitarian Reasons.
- **Social market economy** → variant of Ordoliberalism. The policy programme ordoliberals and Christian democrats share, not a separate tradition.
- **Fusionism** → variant of Liberal conservatism. US-specific (Meyer); its traditionalist-plus-market shape is Liberal conservatism's.
- **Utopian socialism** → variant of Socialism. Historical (Owen, Fourier, Saint-Simon); few living holders.
- **Fabianism** → variant of Social democracy. British institutional variant; no visible difference from Social democracy.
- **Guild socialism** → variant of Libertarian socialism. Historical; its worker self-government is covered by Libertarian socialism and Workplace governance.
- **Yugoslav self-management socialism** → variant of Marxism–Leninism. Historical; self-management shows on Workplace governance.
- **Eurocommunism** → variant of Democratic socialism. Historical; positionally Democratic socialism.
- **Western Marxism / critical theory** → variant of Marxism. An intellectual school more than a political position; differs from Marxism mainly in method.
- **Historical materialism** → variant of Marxism. Historical materialism is Marxism's view of history, carried in its Reasons.
- **Democratic confederalism** → variant of Social ecology. Öcalan's adaptation of Bookchin; same configuration, with a Kurdish context in Reasons.
- **Jeffersonian agrarian republicanism** → variant of Republicanism. Historical and US-specific.
- **Islamic modernism** → variant of Muslim democracy. Historical precursor (Abduh, Iqbal); its living heirs are Muslim democrats.
- **Integral nationalism (Maurrassism)** → variant of Counter-revolutionary traditionalism. Historical (Maurras); integral nationalism is the French form of counter-revolutionary monarchism.
- **Alt-right** → variant of White nationalism. An era (2015–17) and a style more than a distinct configuration (Q10).
- **Divine-right absolutism** → variant of Monarchism. Historical; living absolutists are matched as Monarchism with Reasons.
- **Kokutai nationalism (Shōwa statism)** → variant of Fascism. Historical; listed among Fascism's regional forms.
- **Ba'athism** → variant of Pan-Arabism. Its living holders are few since the Syrian and Iraqi Ba'ath states fell; Ba'athism is the secular-socialist form of Pan-Arabism.
- **Nasserism** → variant of Pan-Arabism. Egyptian form of Pan-Arabism; no visible difference from it.
- **Bioregionalism** → variant of Green politics. Its localism shows on Local vs. central; no distinct configuration.
- **Postcolonial feminism** → variant of Intersectional feminism. Differs mainly in regional focus.
- **Equity feminism** → variant of Liberal feminism. Sommers's coinage for a strand of Liberal feminism.
- **Négritude** → variant of Pan-Africanism. Historical and mainly cultural.
- **LGBT equality liberalism** → variant of Social liberalism. LGBT equality inside a liberal frame is Social liberalism's Positions; no distinct configuration.
- **Supply-side economics** → variant of New Right. The economic programme of the New Right.
- **Mercantilism** → variant of Economic nationalism. Historical; living holders are matched as Economic nationalism.
- **Confucian meritocracy** → variant of Political Confucianism. The contemporary form of Political Confucianism (Bell, Jiang).
- **Mohism** → variant of Impartialism. Historical; Mozi's impartial care is the Foundation Label Impartialism.
- **Deism** → variant of Theism. Too few living holders to stand apart from Theism.

The survey's other "merge?" suggestions were weighed against the granularity rule and
kept where the tradition differs visibly from its parent (for example Agorism on
_Channels of change_, Stalinism on _Leadership_ and _Force in domestic politics_).

## Changes to the Dimension set made here

Testing the candidates against `dimension-taxonomy.md` found traditions it could not
place. A gap earns a new Dimension only if a living tradition cannot be told apart from
its neighbor, Reasons cannot honestly carry the difference, and it bears on politics.

- **Added** _Self-interest or duty to others_ (Foundation), so Objectivism and
  Stirnerian egoism are distinct from other small-state traditions.
- **Widened** _Economic coordination_'s "Public direction" Pole to collective direction
  by the state or by councils, communes, and federations, so anarcho-communism fits.
- **Added a facet** "exit and competing jurisdictions" to _Political authority_ (charter
  cities, network states, neoreaction).
- **Carried in Reasons or Off-map Beliefs**, no change: "rights aren't universal"
  (Eurasianism, Asian values), the transnational caliphate aim, Trotskyist
  internationalism, the metaphysics of primitivism, transhumanism, and Traditionalism,
  pragmatism's theory of truth, and populism's "corrupt elite".
