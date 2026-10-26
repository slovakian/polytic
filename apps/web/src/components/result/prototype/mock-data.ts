import type { WorldviewResult } from "./types";

export const PERSONA_LEFT_LIBERTARIAN: WorldviewResult = {
  id: "res-01-left-libertarian",
  personaKey: "left-libertarian",
  personaName: "Left-Libertarian Autonomist",
  headline: "Non-Domination & Decentralist Autonomy",
  narrative:
    "You locate the primary threat to human freedom not merely in coercive state edicts, but in arbitrary hierarchical power across both public and private life. Your political instinct combines radical decentralization with uncompromising individual bodily autonomy, rejecting top-down moral perfectionism while insisting that true liberty requires insulation from economic servitude.",
  turnCount: 11,
  sessionDuration: "14m 20s",
  labels: [
    {
      name: "Libertarian Socialist",
      type: "Main",
      confidence: "Strong",
      description:
        "Rejection of centralized state and corporate domination in favor of decentralized, self-managing associations.",
      centralDimensions: ["Liberty: Non-Domination", "Scale of Authority: Subsidiarity"],
    },
    {
      name: "Epistemic Fallibilist",
      type: "Area",
      confidence: "Strong",
      description:
        "Belief that centralized authorities possess neither the knowledge nor moral clarity to direct complex social systems.",
      centralDimensions: ["Moral Epistemics: Pluralism"],
    },
    {
      name: "Moral Pluralist",
      type: "Foundation",
      confidence: "Strong",
      description:
        "Conviction that fundamental human goods are irreducible, plural, and incommensurable.",
      centralDimensions: ["Moral Epistemics: Pluralism vs Monism"],
    },
    {
      name: "Decentralist Autonomist",
      type: "Thin",
      confidence: "Moderate",
      description:
        "Thin-centered commitment to devolution of political, technological, and economic power to voluntary federations.",
      centralDimensions: ["Economic Organization: Market Self-Management"],
    },
  ],
  thinkers: [
    {
      name: "Isaiah Berlin",
      era: "1909–1997",
      alignment: 92,
      lineage: "Value Pluralism & Negative Liberty",
      matchReason:
        "Shared insistence that core human values genuinely collide and cannot be subsumed under a single master virtue.",
      divergence: {
        dimension: "Subsidiarity vs. Universal Welfare",
        description:
          "You favor structural worker ownership and material baselines where Berlin remained cautious about positive state intervention.",
      },
    },
    {
      name: "Hannah Arendt",
      era: "1906–1975",
      alignment: 86,
      lineage: "Civic Republicanism & Public Freedom",
      matchReason:
        "Shared definition of freedom as participatory action and relentless skepticism toward technocratic administration.",
      divergence: {
        dimension: "State Neutrality vs. Civic Obligation",
        description:
          "Arendt demanded active public citizenship, while you prioritize private exit rights and personal autonomy.",
      },
    },
    {
      name: "Robert Nozick",
      era: "1938–2002",
      alignment: 64,
      lineage: "Entitlement Theory & Self-Ownership",
      matchReason:
        "Shared antipathy toward moralistic legislation and paternalistic state control of personal choice.",
      divergence: {
        dimension: "Property Rights vs. Non-Domination",
        description:
          "Nozick treated property rights as absolute negative liberties, whereas you view concentrated private capital as a primary engine of domination.",
      },
    },
  ],
  tensions: [
    {
      id: "ten-01",
      title: "Civil Libertarianism vs. Collective Environmental Restraint",
      status: "Reconciled",
      statedBeliefA: "Near-absolute freedom of individual bodily choice and voluntary association",
      statedBeliefB: "Mandatory zero-emission restrictions on energy and industrial emissions",
      bridge:
        "You distinguish purely self-regarding actions from unconsented cross-boundary harm: ecological pollution is treated as direct physical aggression against unconsenting third parties.",
      aiStressTest:
        "How far does non-harm extend into collective systemic risk before the state must preemptively monitor private consumption?",
      drilldownDilemma:
        "If heating one's home with wood fires contributes incrementally to regional particulate asthma, at what threshold does private fuel choice become actionable aggression?",
    },
    {
      id: "ten-02",
      title: "Decentralized Subsidiarity vs. Universal Civil Rights Enforcement",
      status: "Unresolved",
      statedBeliefA: "Power must default to municipalities, communes, and local councils",
      statedBeliefB:
        "Uncompromising federal enforcement of minority protections against local majorities",
      bridge: null,
      aiStressTest:
        "If a regional majority democratically votes to outlaw reproductive clinics or restrict curricular history, does a higher authority possess legitimate jurisdiction to overrule them?",
      drilldownDilemma:
        "When local autonomy produces reactionary exclusion, what institutional mechanism breaks the deadlock without resurrecting the coercive centralized state?",
    },
    {
      id: "ten-03",
      title: "Open-Source Technological Proliferation vs. Biosecurity Precaution",
      status: "Not yet discussed",
      statedBeliefA: "Democratization of frontier scientific tools and open-weight models",
      statedBeliefB: "Absolute prevention of dual-use biological pathogen synthesis",
      bridge: null,
      aiStressTest:
        "Can radical decentralization survive the asymmetry of modern destructive technologies?",
      drilldownDilemma:
        "Should high-throughput DNA synthesis hardware require cryptographically locked hardware licenses managed by an international oversight authority?",
    },
  ],
  dimensions: [
    {
      id: "dim-01",
      name: "Liberty: Non-Domination vs. Non-Interference",
      layer: "Political",
      poleA: "Non-Domination (Freedom from arbitrary power)",
      poleB: "Non-Interference (Freedom from coercion)",
      pullA: 96,
      pullB: 35,
      position: -72,
      status: "Settled",
      coverage: "Solid",
      reasons:
        "Arbitrary private employer power is just as coercive as bureaucratic state decrees.",
      evidence:
        "You stated: 'A worker with zero emergency savings and no healthcare alternative is not free to say no to exploitation.'",
    },
    {
      id: "dim-02",
      name: "Moral Epistemics: Value Pluralism vs. Monism",
      layer: "Foundation",
      poleA: "Value Pluralism (Goods collide)",
      poleB: "Value Monism (One supreme good)",
      pullA: 92,
      pullB: 18,
      position: -82,
      status: "Settled",
      coverage: "Solid",
      reasons: "Explicitly rejected utilitarian or single-metric welfare calculations.",
      evidence:
        "You rejected sacrificing individual civil liberties for aggregate societal happiness metrics.",
    },
    {
      id: "dim-03",
      name: "Authority Scale: Subsidiarity vs. Centralization",
      layer: "Political",
      poleA: "Decentralized Subsidiarity",
      poleB: "Centralized Harmonization",
      pullA: 90,
      pullB: 85,
      position: -8,
      status: "Torn",
      coverage: "Solid",
      reasons:
        "Deeply cross-pressured between local self-determination and the necessity of universal human rights guarantees.",
      evidence:
        "You championed neighborhood councils in zoning but demanded federal judicial supremacy against discriminatory local laws.",
    },
    {
      id: "dim-04",
      name: "Economic Structure: Democratic Self-Management vs. State Dirigisme",
      layer: "Political",
      poleA: "Worker Cooperatives & Mutualism",
      poleB: "State Planning & Regulation",
      pullA: 84,
      pullB: 32,
      position: -62,
      status: "Settled",
      coverage: "Solid",
      reasons: "Preference for market mechanisms without capitalist ownership hierarchies.",
      evidence:
        "You argued markets work well for price discovery if enterprise equity is distributed equally to workers.",
    },
    {
      id: "dim-05",
      name: "Agency & Desert: Structural Determinism vs. Moral Desert",
      layer: "Foundation",
      poleA: "Structural Determinism",
      poleB: "Individual Moral Desert",
      pullA: 78,
      pullB: 72,
      position: -12,
      status: "Torn",
      coverage: "Solid",
      reasons:
        "Torn between recognizing socio-economic lottery effects and maintaining moral accountability for violence.",
      evidence:
        "You argued poverty explains criminality, but insisted victims have an innate right to moral restitution.",
    },
    {
      id: "dim-06",
      name: "Change Tempo: Incremental Pragmatism vs. Systemic Rupture",
      layer: "Political",
      poleA: "Incremental Pragmatism",
      poleB: "Systemic Transformation",
      pullA: 64,
      pullB: 48,
      position: -25,
      status: "Settled",
      coverage: "Solid",
      reasons:
        "Institutional fragility makes rapid revolutionary upheavals dangerously prone to authoritarian capture.",
      evidence:
        "You advocated testing pilot universal basic asset programs prior to nationwide structural overhauls.",
    },
    {
      id: "dim-07",
      name: "Human Nature: Plasticity vs. Constrained Realism",
      layer: "Foundation",
      poleA: "Malleable & Socially Shaped",
      poleB: "Evolutionary Constraints",
      pullA: 58,
      pullB: 50,
      position: -10,
      status: "Settled",
      coverage: "Solid",
      reasons:
        "Cultural institutions heavily influence behavior, but tribal in-group biases require structural checks.",
      evidence:
        "You noted human solidarity flourishes in small groups but degrades into factionalism at mass scale.",
    },
    {
      id: "dim-08",
      name: "State Neutrality vs. Perfectionist Cultivation",
      layer: "Political",
      poleA: "Strict State Neutrality",
      poleB: "Perfectionist Civic Virtue",
      pullA: 52,
      pullB: 24,
      position: -46,
      status: "Settled",
      coverage: "Thin",
      reasons:
        "The state should not endorse or subsidize any singular conception of the good life.",
      evidence:
        "One passing exchange: 'The state should neither forbid vices nor mandate virtues.'",
    },
    {
      id: "dim-09",
      name: "Ecology: Anthropocentric Stewardship vs. Biocentric Equality",
      layer: "Foundation",
      poleA: "Anthropocentric Flourishing",
      poleB: "Biocentric Intrinsic Value",
      pullA: 45,
      pullB: 40,
      position: 8,
      status: "Settled",
      coverage: "Thin",
      reasons: "Touched briefly: ecosystems have worth beyond their immediate utility to humans.",
      evidence: "Mentioned climate responsibility in relation to intergenerational justice.",
    },
    {
      id: "dim-10",
      name: "Borders & Community: Universal Cosmopolitanism vs. Civic Demarcation",
      layer: "Political",
      poleA: "Universal Freedom of Movement",
      poleB: "Democratic Civic Boundaries",
      pullA: 0,
      pullB: 0,
      position: 0,
      status: "Open",
      coverage: "Not asked",
      reasons: "Not addressed during the initial 11-turn grilling pass.",
      evidence: null,
    },
    {
      id: "dim-11",
      name: "Epistemic Authority: Mass Deliberation vs. Technocratic Expertise",
      layer: "Political",
      poleA: "Direct Citizen Assemblies",
      poleB: "Epistemic Technocracy",
      pullA: 0,
      pullB: 0,
      position: 0,
      status: "Open",
      coverage: "Not asked",
      reasons: "Not addressed during the initial 11-turn grilling pass.",
      evidence: null,
    },
    {
      id: "dim-12",
      name: "Teleology: Immanent Materialism vs. Transcendent Order",
      layer: "Foundation",
      poleA: "Immanent Secular Materialism",
      poleB: "Transcendent Moral Order",
      pullA: 0,
      pullB: 0,
      position: 0,
      status: "Open",
      coverage: "Not asked",
      reasons: "Not addressed during the initial 11-turn grilling pass.",
      evidence: null,
    },
    {
      id: "dim-13",
      name: "Justice: Restorative Harm Reduction vs. Retributive Proportion",
      layer: "Political",
      poleA: "Restorative Harm Reduction",
      poleB: "Retributive Proportion",
      pullA: 0,
      pullB: 0,
      position: 0,
      status: "Open",
      coverage: "Not asked",
      reasons: "Not addressed during the initial 11-turn grilling pass.",
      evidence: null,
    },
    {
      id: "dim-14",
      name: "Intergenerational Justice: Present Living Consent vs. Deep Futures",
      layer: "Foundation",
      poleA: "Present Democratic Sovereignty",
      poleB: "Deep Future Guardianship",
      pullA: 0,
      pullB: 0,
      position: 0,
      status: "Open",
      coverage: "Not asked",
      reasons: "Not addressed during the initial 11-turn grilling pass.",
      evidence: null,
    },
  ],
  offMapBeliefs: [
    {
      title: "Extraterritorial Cryptographic Panarchy",
      reasons:
        "You reject physical geography as the sole legitimate anchor of political sovereignty, arguing voluntary internet-native communities should form legally binding digital polities.",
      evidence:
        "You stated: 'People should be able to subscribe to opt-in legal jurisdictions rather than being bound to the laws of the dirt they happen to be born on.'",
      traditionalEcho: "Echoes Paul-Émile de Puydt's 1860 theory of Panarchy.",
    },
  ],
  unexploredAreas: [
    "Cross-border migration criteria & regional resource claims",
    "Allocation of catastrophic risk in synthetic biology & AI",
    "Judicial legitimacy vs direct citizen recall assemblies",
  ],
};

export const PERSONA_COMMUNITARIAN: WorldviewResult = {
  id: "res-02-communitarian",
  personaKey: "communitarian",
  personaName: "Communitarian Traditionalist",
  headline: "Rooted Subsidiarity & Moral Cohesion",
  narrative:
    "You view human beings as inherently socially constituted rather than unencumbered autonomous atoms. You prioritize the preservation of intermediate civic institutions — family, town, guild, and place — over both unchecked market commodification and overreaching bureaucratic homogenization.",
  turnCount: 12,
  sessionDuration: "16m 05s",
  labels: [
    {
      name: "Civic Communitarian",
      type: "Main",
      confidence: "Strong",
      description:
        "Commitment to shared moral practices, intermediate civic institutions, and resistance to market atomization.",
      centralDimensions: [
        "State Neutrality vs. Perfectionist Cultivation",
        "Authority Scale: Subsidiarity",
      ],
    },
    {
      name: "Constitutive Epistemologist",
      type: "Foundation",
      confidence: "Strong",
      description:
        "Belief that human reasoning is rooted in inherited traditions, language, and moral communities.",
      centralDimensions: ["Moral Epistemics: Embedded Tradition"],
    },
    {
      name: "Distributist",
      type: "Thin",
      confidence: "Moderate",
      description:
        "Belief that private property is best secured when productive capital is widely dispersed among families.",
      centralDimensions: ["Economic Structure: Distributed Ownership"],
    },
  ],
  thinkers: [
    {
      name: "Michael Sandel",
      era: "1953–present",
      alignment: 91,
      lineage: "Communitarianism & Moral Economy",
      matchReason:
        "Shared critique of the 'unencumbered self' and skepticism of moral neutrality in public policy.",
      divergence: {
        dimension: "Change Tempo: Tradition vs. Democratic Renewal",
        description:
          "Sandel embraces progressive deliberative democracy, while you maintain stronger deference to historical religious and civic heritage.",
      },
    },
    {
      name: "Edmund Burke",
      era: "1729–1797",
      alignment: 84,
      lineage: "Philosophical Conservatism",
      matchReason:
        "Deep respect for the 'little platoons' of society and profound skepticism toward abstract utopian schemas.",
      divergence: {
        dimension: "Economic Protectionism vs. Market Freedom",
        description:
          "Burke aligned with Adam Smith's commercial trade, whereas you favor energetic regional protectionism to defend local towns.",
      },
    },
    {
      name: "Alasdair MacIntyre",
      era: "1929–present",
      alignment: 79,
      lineage: "Virtue Ethics & Tradition-Constituted Inquiry",
      matchReason:
        "Shared view that moral concepts cannot be divorced from telos and community practices.",
      divergence: {
        dimension: "State Authority vs. Local Guilds",
        description:
          "MacIntyre renounces the modern nation-state entirely, whereas you believe national law must protect family wage structures.",
      },
    },
  ],
  tensions: [
    {
      id: "ten-c-01",
      title: "Strong National Cohesion vs. Local Institutional Autonomy",
      status: "Unresolved",
      statedBeliefA:
        "National state must defend the domestic manufacturing base and cultural boundaries",
      statedBeliefB:
        "Intermediate local associations (church, family, town) must retain sovereign authority",
      bridge: null,
      aiStressTest:
        "When national economic consolidation overrides local municipal ordinances, which authority takes precedence?",
      drilldownDilemma:
        "Should a federal industrial plan be permitted to mandate factory construction in a historic town that votes against it?",
    },
  ],
  dimensions: [
    {
      id: "dim-c-01",
      name: "State Neutrality vs. Perfectionist Cultivation",
      layer: "Political",
      poleA: "Strict State Neutrality",
      poleB: "Perfectionist Moral Cultivation",
      pullA: 20,
      pullB: 94,
      position: 78,
      status: "Settled",
      coverage: "Solid",
      reasons: "Law inherently teaches and reinforces what a culture deems good and honorable.",
      evidence:
        "You stated: 'A government that claims to be neutral between virtue and vice is merely enabling decay.'",
    },
    {
      id: "dim-c-02",
      name: "Authority Scale: Subsidiarity vs. Centralization",
      layer: "Political",
      poleA: "Decentralized Subsidiarity",
      poleB: "Centralized Harmonization",
      pullA: 92,
      pullB: 45,
      position: -65,
      status: "Settled",
      coverage: "Solid",
      reasons:
        "Highest decisions should be handled by the smallest, least centralized competent authority.",
      evidence: "Defended local control of schools and municipal civic charters.",
    },
    {
      id: "dim-c-03",
      name: "Economic Structure: Distributism vs. Corporate Oligopoly",
      layer: "Political",
      poleA: "Dispersed Family Ownership",
      poleB: "Corporate Mega-Capitalism",
      pullA: 88,
      pullB: 20,
      position: -75,
      status: "Settled",
      coverage: "Solid",
      reasons:
        "Widespread private property distribution prevents both socialism and corporate monopoly.",
      evidence:
        "Advocated antitrust breakups of retail and tech monopolies to preserve main street merchants.",
    },
    {
      id: "dim-c-04",
      name: "Human Nature: Plasticity vs. Constrained Realism",
      layer: "Foundation",
      poleA: "Malleable & Socially Shaped",
      poleB: "Fixed Evolutionary Constraints",
      pullA: 30,
      pullB: 85,
      position: 68,
      status: "Settled",
      coverage: "Solid",
      reasons:
        "Human nature contains immutable fallen or flawed tendencies requiring cultural restraint.",
      evidence: "Stated that utopian social engineering inevitably creates tyranny.",
    },
  ],
  offMapBeliefs: [],
  unexploredAreas: [
    "Immigration rate integration and linguistic thresholds",
    "Digital privacy rights vs communal surveillance norms",
  ],
};

export const PERSONA_TECHNO_PRAGMATIST: WorldviewResult = {
  id: "res-03-techno-pragmatist",
  personaKey: "techno-pragmatist",
  personaName: "Liberal Techno-Pragmatist",
  headline: "State Neutrality & Dynamic Capability",
  narrative:
    "You view political institutions primarily through an epistemic and capability lens. You endorse fair Rawlsian rules of justice, state neutrality on moral visions, and rapid scientific acceleration channeled by targeted state capacity and pigouvian tax pricing.",
  turnCount: 10,
  sessionDuration: "12m 45s",
  labels: [
    {
      name: "Rawlsian Social Democrat",
      type: "Main",
      confidence: "Strong",
      description:
        "Commitment to maximum equal basic liberties and economic structures that maximize the welfare of the least advantaged.",
      centralDimensions: ["State Neutrality", "Distributive Justice"],
    },
    {
      name: "Scientific Epistemicist",
      type: "Area",
      confidence: "Strong",
      description:
        "Empirical, Bayesian approach to institutional design and technological development.",
      centralDimensions: ["Epistemic Authority: Technocratic Expertise"],
    },
    {
      name: "Accelerationist / State Capacity",
      type: "Thin",
      confidence: "Moderate",
      description:
        "Emphasis on building physical abundance and technological solutions rather than rationing scarcity.",
      centralDimensions: ["Change Tempo: Dynamic Innovation"],
    },
  ],
  thinkers: [
    {
      name: "John Rawls",
      era: "1921–2002",
      alignment: 94,
      lineage: "Liberal Egalitarianism & Political Liberalism",
      matchReason:
        "Shared belief in the 'veil of ignorance' and structural justice paired with rigorous state neutrality.",
      divergence: {
        dimension: "Technological Acceleration vs. Static Stability",
        description:
          "Rawls theorized a steady-state property-owning democracy; you prioritize exponential tech R&D and clean nuclear power.",
      },
    },
    {
      name: "Amartya Sen",
      era: "1933–present",
      alignment: 89,
      lineage: "Capability Approach & Social Choice",
      matchReason:
        "Shared view that freedom should be measured by actual real-world capabilities rather than purely formal legal permissions.",
      divergence: {
        dimension: "Expert Technocracy vs. Public Deliberation",
        description:
          "Sen relies on public deliberation; you place higher trust in expert regulatory bodies and market auction mechanisms.",
      },
    },
    {
      name: "Friedrich Hayek",
      era: "1899–1992",
      alignment: 72,
      lineage: "Classical Liberalism & Spontaneous Order",
      matchReason:
        "Deep respect for price mechanisms as distributed computing systems that no central ministry can replicate.",
      divergence: {
        dimension: "Universal Health & Asset Redistribution",
        description:
          "Hayek rejected systematic wealth redistribution; you endorse high inheritance taxes to guarantee equal opportunity.",
      },
    },
  ],
  tensions: [
    {
      id: "ten-t-01",
      title: "Democratic Deliberation vs. Scientific Epistemic Velocity",
      status: "Unresolved",
      statedBeliefA:
        "Democratic legitimacy requires universal public consent on major national transitions",
      statedBeliefB:
        "Complex technical choices (epidemic response, grid balancing, AI compute) must be insulated from populist polarization",
      bridge: null,
      aiStressTest:
        "If the voting public rejects grid-scale nuclear energy or mRNA vaccines based on moral intuition, does scientific consensus justify overriding them?",
      drilldownDilemma:
        "Should technical safety boards have final binding authority over energy infrastructure permitting?",
    },
  ],
  dimensions: [
    {
      id: "dim-t-01",
      name: "Liberty: Non-Domination vs. Non-Interference",
      layer: "Political",
      poleA: "Non-Domination (Freedom from arbitrary power)",
      poleB: "Non-Interference (Freedom from coercion)",
      pullA: 82,
      pullB: 70,
      position: -30,
      status: "Settled",
      coverage: "Solid",
      reasons: "Basic income and universal healthcare are prerequisites for real negative freedom.",
      evidence: "Quoted: 'Without material capability, legal rights are purely decorative.'",
    },
    {
      id: "dim-t-02",
      name: "State Neutrality vs. Perfectionist Cultivation",
      layer: "Political",
      poleA: "Strict State Neutrality",
      poleB: "Perfectionist Moral Cultivation",
      pullA: 95,
      pullB: 15,
      position: -88,
      status: "Settled",
      coverage: "Solid",
      reasons: "Pluralistic democracies cannot impose sectarian moral values through legislation.",
      evidence:
        "Emphasized that law must be justified by public reason accessible to all citizens.",
    },
    {
      id: "dim-t-03",
      name: "Epistemic Authority: Mass Deliberation vs. Technocratic Expertise",
      layer: "Political",
      poleA: "Direct Citizen Assemblies",
      poleB: "Epistemic Technocracy",
      pullA: 78,
      pullB: 85,
      position: 12,
      status: "Torn",
      coverage: "Solid",
      reasons: "Deeply torn between democratic legitimacy and technical competence in governance.",
      evidence:
        "Supported citizen juries for ethical guidelines but insisted technical modeling belongs to specialists.",
    },
  ],
  offMapBeliefs: [],
  unexploredAreas: [
    "Sovereignty limits in geoengineering deployment",
    "Digital rights for synthetic cognitive agents",
  ],
};

export const MOCK_PERSONAS = {
  "left-libertarian": PERSONA_LEFT_LIBERTARIAN,
  communitarian: PERSONA_COMMUNITARIAN,
  "techno-pragmatist": PERSONA_TECHNO_PRAGMATIST,
} satisfies Record<string, WorldviewResult>;
