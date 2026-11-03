# Reference Figure catalog (source-of-truth asset)

The curated, hand-encoded catalog of historical and contemporary thinkers, philosophers,
and public figures that powers **Closest Thinkers** on the v1 Result page. What a
Reference Figure is and how comparison works is defined in [`framework.md`](framework.md);
the Dimensions every figure is placed on are in [`dimension-taxonomy.md`](dimension-taxonomy.md);
established traditions and types are in [`label-library.md`](label-library.md); domain terms
are in [`glossary.md`](glossary.md).

Decided by the project owner in
[Choose and encode the starter Reference Figure catalog](https://github.com/slovakian/polytic/issues/28).
This file holds the **catalog rules**, the **comparison formula**, and the **starter roster
(48 figures)**. Each figure's complete card lives in a family file under
`reference-figures/`, written to the template below.

**Status.** The catalog rules, comparison formula, and starter roster of 48 figures are
locked. Three exemplar cards are fully authored as the quality bar across distinct
traditions:

- [John Locke](reference-figures/liberalism.md#john-locke) (Classical liberalism & natural rights)
- [Karl Marx](reference-figures/marxism.md#karl-marx) (Classical Marxism & historical materialism)
- [Adolf Hitler](reference-figures/radical-right.md#adolf-hitler) (National Socialism & racial totalitarianism; validating centered groups and Clinical Agnosticism)

Card authoring for the remaining figures is batched into follow-up task tickets by family.

---

## Core principles

1. **Exact same Worldview Model.** Reference Figures are encoded with the exact same
   model as users: Beliefs on Dimensions (Positions, Pull, Reasons, Evidence). They are not
   static personality archetypes, ideological caricatures, or quiz mascots.
2. **Clinical Agnosticism.** Stoic, dispassionate clinical realism ([`principles.md`](principles.md)).
   Every figure — whether celebrated liberal philosopher (Locke, Mill), revolutionary socialist
   (Marx, Lenin), religious reformer (Calvin, Aquinas), or notorious totalitarian dictator
   (Hitler, Stalin) — is encoded with identical clinical dispassion from their own published
   words, actions, and primary texts. Polytic never praises, condemns, scolds, or sanitizes.
   Any figure in the catalog can appear as a user's Closest Thinker if the user's positions
   and reasons align.
3. **Mandatory Core Coverage.** A v1 grilling session establishes at least 8 of the 19 Core
   Dimensions at Solid Coverage ([`architecture.md`](architecture.md), [`dimension-taxonomy.md`](dimension-taxonomy.md)).
   Comparison excludes Thin or unasked Dimensions. To guarantee meaningful overlap with any
   completed user Result, **every Reference Figure must be encoded with Solid Coverage on
   all 19 Core Dimensions** (7 Foundation, 12 Political), plus **6–12 signature non-core
   Dimensions** prominent in their thought.
4. **Epistemic honesty: no guessing.** Dimensions where a figure had no coherent view, or
   which they never addressed in their writings/record, are left unencoded. Polytic never
   extrapolates a fake position to pad numbers.
5. **Particularist traditions and centered groups.** Mirror-image particularist traditions
   (e.g. White nationalism and Black nationalism, Zionism and Pan-Arabism) share a structural
   shape on many Dimensions (community control over borders, in-group moral priority) but differ
   in their **centered group**. That group is recorded as an explicit Reason. Comparison
   weighs it as one, ensuring mirror-image figures do not false-match on spatial Positions alone.
6. **In-principle vs. in-practice splits.** When a thinker's foundational ideal diverged from
   their practical governance policy (e.g. Locke's universal natural rights vs. exclusion of
   atheists and Catholics from toleration), both are coded with a Bridge. Comparison compares
   in-practice positions by default ([`framework.md`](framework.md)).

---

## The card template

Each card lives under `reference-figures/<family>.md` and follows this exact structure:

```markdown
## <Full Name>

- **Id:** `<kebab-case-slug>`
- **Lifespan:** `<Birth–Death>` (or `<Birth– >` for living)
- **Tradition:** `<Tradition / School>`
- **Anchored Labels:** `<Primary Ideology Label>` (Ideology); `<Thin Label 1>`, `<Foundation Label 1>`
- **Centered group:** `<Named group>` (for particularists) or `—` (for universalists)
- **Portrait:** `<asset-slug>` (rendered as `size-16 rounded-2xl bg-secondary/70` in UI)

### Positions

| Dimension        | Position                         | Pull                     | Central  | Notes / Split                                |
| ---------------- | -------------------------------- | ------------------------ | -------- | -------------------------------------------- |
| <Dimension name> | Strongly / Leans <Pole> / Middle | Strong / Moderate / Mild | Yes / No | <optional in-principle / in-practice nuance> |

<!-- All 19 Core Dimensions required, plus 6–12 signature non-core Dimensions -->

### Reasons

**Self-understanding.** <2–4 paragraphs summarizing their overarching worldview, moral ontology,
and political logic in their own terms, steelmanned with clinical dispassion.>

**Key concepts.**

- **<Concept 1>:** <Decontested meaning per Freeden's morphology>
- **<Concept 2>:** <Decontested meaning>

**Primary source evidence.**

- **"<Quote 1>"** — _<Title of Work>_ (<Year>), <Location/Section>.
- **"<Quote 2>"** — _<Title of Work>_ (<Year>), <Location/Section>.
```

---

## Closest Thinkers comparison arithmetic

Closest Thinkers are computed deterministically by code before the Result Writer crafts
the narrative ([`architecture.md`](architecture.md)):

### 1. Dimension-by-Dimension Position distance

Let $S$ be the set of shared Dimensions where both the user $u$ and the figure $f$ hold
Solid Coverage:
$$S = \{ d \in \text{Dimensions} \mid \text{Coverage}_u(d) = \text{Solid} \land \text{Coverage}_f(d) = \text{Solid} \}$$

A valid comparison requires $|S| \ge 8$. For each dimension $d \in S$, position distance
is the absolute difference on the 5-point discrete scale ($0, 1, 2, 3, 4$ representing
Strongly A, Leans A, Middle, Leans B, Strongly B):
$$\delta(d) = \frac{|pos_u(d) - pos_f(d)|}{4} \in [0.0, 1.0]$$

Each dimension's distance is weighted by the **user's Pull** ($w_u(d) = 3$ for Strong,
$2$ for Moderate, $1$ for Mild):
$$D_{pos} = \frac{\sum_{d \in S} w_u(d) \cdot \delta(d)}{\sum_{d \in S} w_u(d)}$$

### 2. Centered group weighting (particularist filter)

If either the user or the figure holds a particularist Label that specifies a centered
group (e.g. White nationalism, Black nationalism, Zionism, Hindutva):

- If both centered groups match: factor $C = 1.0$.
- If either holds a particularist Label and the centered groups conflict (e.g. user holds
  Black nationalism or generic civic nationalism while figure holds Aryan/German
  nationalism): factor $C = 0.10$.
- If neither is particularist: factor $C = 1.0$.

### 3. Reason resonance bonus

When the user's articulated Reasons align with the figure's decontested Key Concepts on
their central Dimensions, code applies a resonance multiplier $R \in [1.0, 1.15]$.

### 4. Overall match score

$$\text{Score}(u, f) = \text{round}\left( 100 \times (1 - D_{pos}) \times C \times R \right)$$

The top 2–3 highest scoring figures are presented on the Result as **Closest Thinkers**.

### 5. Selecting the #1 Divergence

The **Divergence** shown on the Result is the single Dimension both care most about where
they are furthest apart:
$$d^* = \arg\max_{d \in S} \left( \delta(d) \times w_u(d) \times w_f(d) \right)$$
Ties are broken by the higher user Pull $w_u(d)$, then figure Pull $w_f(d)$.

---

## Families and card files

The Reference Figure cards live under `reference-figures/` grouped by Label family:

| Family Group                             | Card File                                 | Figures Count  |
| ---------------------------------------- | ----------------------------------------- | -------------- |
| Liberalism and libertarianism            | `reference-figures/liberalism.md`         | 5              |
| Conservatism                             | `reference-figures/conservatism.md`       | 3              |
| Socialism and social democracy           | `reference-figures/socialism.md`          | 3              |
| Marxism and communism                    | `reference-figures/marxism.md`            | 4              |
| Anarchism                                | `reference-figures/anarchism.md`          | 3              |
| Republicanism and communitarianism       | `reference-figures/republicanism.md`      | 4              |
| Fascism, the radical right, and reaction | `reference-figures/radical-right.md`      | 4              |
| National movements                       | `reference-figures/national-movements.md` | 4              |
| Religious political traditions           | `reference-figures/religious.md`          | 5              |
| Ecologism                                | `reference-figures/ecologism.md`          | 3              |
| Feminism and gender politics             | `reference-figures/feminism.md`           | 3              |
| Critical, liberation, and postcolonial   | `reference-figures/critical.md`           | 2              |
| Economic and developmental doctrines     | `reference-figures/economic-doctrines.md` | 3              |
| Democratic theory and governance         | `reference-figures/democratic-theory.md`  | 2              |
| Foreign policy and world order           | `reference-figures/world-order.md`        | 2              |
| Technology and contemporary tendencies   | `reference-figures/contemporary.md`       | 2              |
| Other Thin Labels and populism           | `reference-figures/thin.md`               | 2              |
| Non-Western and classical traditions     | `reference-figures/non-western.md`        | 5              |
| Foundation anchors                       | `reference-figures/foundation.md`         | 2              |
| **Total**                                | **19 files**                              | **48 figures** |

---

## The starter catalog roster (48 figures)

| Id                      | Name                  | Lifespan       | Primary Label                  | Centered Group    | Card Status  |
| ----------------------- | --------------------- | -------------- | ------------------------------ | ----------------- | ------------ |
| `john-locke`            | John Locke            | 1632–1704      | Classical liberalism           | —                 | **Exemplar** |
| `john-stuart-mill`      | John Stuart Mill      | 1806–1873      | Classical liberalism           | —                 | Pending      |
| `john-rawls`            | John Rawls            | 1921–2002      | Social liberalism              | —                 | Pending      |
| `robert-nozick`         | Robert Nozick         | 1938–2002      | Libertarianism                 | —                 | Pending      |
| `friedrich-hayek`       | Friedrich Hayek       | 1899–1992      | Neoliberalism                  | —                 | Pending      |
| `edmund-burke`          | Edmund Burke          | 1729–1797      | Traditional conservatism       | —                 | Pending      |
| `michael-oakeshott`     | Michael Oakeshott     | 1901–1990      | Skeptical conservatism         | —                 | Pending      |
| `roger-scruton`         | Roger Scruton         | 1944–2020      | Traditional conservatism       | —                 | Pending      |
| `eduard-bernstein`      | Eduard Bernstein      | 1850–1932      | Democratic socialism           | —                 | Pending      |
| `anthony-crosland`      | Anthony Crosland      | 1918–1977      | Social democracy               | —                 | Pending      |
| `olof-palme`            | Olof Palme            | 1927–1986      | Democratic socialism           | —                 | Pending      |
| `karl-marx`             | Karl Marx             | 1818–1883      | Classical Marxism              | —                 | **Exemplar** |
| `vladimir-lenin`        | Vladimir Lenin        | 1870–1924      | Marxism–Leninism               | —                 | Pending      |
| `joseph-stalin`         | Joseph Stalin         | 1878–1953      | Stalinism                      | —                 | Pending      |
| `antonio-gramsci`       | Antonio Gramsci       | 1891–1937      | Western Marxism                | —                 | Pending      |
| `mikhail-bakunin`       | Mikhail Bakunin       | 1814–1876      | Collectivist anarchism         | —                 | Pending      |
| `peter-kropotkin`       | Peter Kropotkin       | 1842–1921      | Anarcho-communism              | —                 | Pending      |
| `emma-goldman`          | Emma Goldman          | 1869–1940      | Anarcha-feminism               | —                 | Pending      |
| `niccolo-machiavelli`   | Niccolò Machiavelli   | 1469–1527      | Civic republicanism            | —                 | Pending      |
| `jean-jacques-rousseau` | Jean-Jacques Rousseau | 1712–1778      | Classical republicanism        | —                 | Pending      |
| `philip-pettit`         | Philip Pettit         | 1945–          | Neo-republicanism              | —                 | Pending      |
| `michael-sandel`        | Michael Sandel        | 1953–          | Communitarianism               | —                 | Pending      |
| `adolf-hitler`          | Adolf Hitler          | 1889–1945      | National Socialism             | German / Aryan    | **Exemplar** |
| `benito-mussolini`      | Benito Mussolini      | 1883–1945      | Fascism                        | —                 | Pending      |
| `carl-schmitt`          | Carl Schmitt          | 1888–1985      | Authoritarian conservatism     | —                 | Pending      |
| `julius-evola`          | Julius Evola          | 1898–1974      | Traditionalism                 | —                 | Pending      |
| `theodor-herzl`         | Theodor Herzl         | 1860–1904      | Zionism                        | Jewish people     | Pending      |
| `malcolm-x`             | Malcolm X             | 1925–1965      | Black nationalism              | Black diaspora    | Pending      |
| `frantz-fanon`          | Frantz Fanon          | 1925–1961      | Anti-colonialism               | Colonized peoples | Pending      |
| `mahatma-gandhi`        | Mahatma Gandhi        | 1869–1948      | Swaraj / Civic nationalism     | —                 | Pending      |
| `thomas-aquinas`        | Thomas Aquinas        | 1225–1274      | Christian political philosophy | —                 | Pending      |
| `john-calvin`           | John Calvin           | 1509–1564      | Reformed political theology    | —                 | Pending      |
| `ruhollah-khomeini`     | Ruhollah Khomeini     | 1902–1989      | Islamism                       | Ummah / Muslims   | Pending      |
| `dorothy-day`           | Dorothy Day           | 1897–1980      | Christian anarchism            | —                 | Pending      |
| `reinhold-niebuhr`      | Reinhold Niebuhr      | 1892–1971      | Christian realism              | —                 | Pending      |
| `aldo-leopold`          | Aldo Leopold          | 1887–1948      | Ecologism                      | —                 | Pending      |
| `arne-naess`            | Arne Næss             | 1912–2009      | Deep ecology                   | —                 | Pending      |
| `murray-bookchin`       | Murray Bookchin       | 1921–2006      | Social ecology                 | —                 | Pending      |
| `mary-wollstonecraft`   | Mary Wollstonecraft   | 1759–1797      | Liberal feminism               | —                 | Pending      |
| `simone-de-beauvoir`    | Simone de Beauvoir    | 1908–1986      | Existentialist feminism        | —                 | Pending      |
| `bell-hooks`            | bell hooks            | 1952–2021      | Intersectional feminism        | —                 | Pending      |
| `michel-foucault`       | Michel Foucault       | 1926–1984      | Post-structuralism             | —                 | Pending      |
| `paulo-freire`          | Paulo Freire          | 1921–1997      | Critical pedagogy              | —                 | Pending      |
| `adam-smith`            | Adam Smith            | 1723–1790      | Classical economics            | —                 | Pending      |
| `john-maynard-keynes`   | John Maynard Keynes   | 1883–1946      | Keynesianism                   | —                 | Pending      |
| `milton-friedman`       | Milton Friedman       | 1912–2006      | Free-market capitalism         | —                 | Pending      |
| `jurgen-habermas`       | Jürgen Habermas       | 1929–          | Deliberative democracy         | —                 | Pending      |
| `joseph-schumpeter`     | Joseph Schumpeter     | 1883–1950      | Elite democratic theory        | —                 | Pending      |
| `hans-morgenthau`       | Hans Morgenthau       | 1904–1980      | Realism                        | —                 | Pending      |
| `immanuel-kant`         | Immanuel Kant         | 1724–1804      | Liberal internationalism       | —                 | Pending      |
| `nick-land`             | Nick Land             | 1962–          | Landian accelerationism        | —                 | Pending      |
| `eliezer-yudkowsky`     | Eliezer Yudkowsky     | 1979–          | Techno-skepticism              | —                 | Pending      |
| `thomas-paine`          | Thomas Paine          | 1737–1809      | Radical populism               | —                 | Pending      |
| `leo-strauss`           | Leo Strauss           | 1899–1973      | Classical rationalism          | —                 | Pending      |
| `confucius`             | Confucius             | 551–479 BCE    | Confucianism                   | —                 | Pending      |
| `han-feizi`             | Han Feizi             | c. 280–233 BCE | Legalism                       | —                 | Pending      |
| `ibn-khaldun`           | Ibn Khaldun           | 1332–1406      | Classical realism              | —                 | Pending      |
| `kautilya`              | Kautilya              | c. 350–275 BCE | Realpolitik                    | —                 | Pending      |
| `sun-yat-sen`           | Sun Yat-sen           | 1866–1925      | Tridemism                      | —                 | Pending      |
| `baruch-spinoza`        | Baruch Spinoza        | 1632–1677      | Naturalism                     | —                 | Pending      |
| `friedrich-nietzsche`   | Friedrich Nietzsche   | 1844–1900      | Perspectivism                  | —                 | Pending      |
