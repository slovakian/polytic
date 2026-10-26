import type { Chapter, GrillingTension, WorldviewResult } from "./types";

export const SAMPLE_TENSION: GrillingTension = {
  id: "tension-speech-autonomy",
  dimension: "Speech vs. Harm & Public Order",
  statementA: "“Individual autonomy over personal expression and conscience is absolute and inviolable by any authority.”",
  statementB: "“The state must criminally penalize severe hate speech and misinformation because psychological harm is real violence.”",
  dilemma:
    "You grounded bodily and expressive autonomy as an absolute barrier against state control, yet you also want the state to enforce criminal penalties when speech causes collective harm. How do you reconcile these?",
  status: "unresolved",
};

export const INITIAL_CHAPTERS: Chapter[] = [
  {
    id: "chap-1",
    number: 1,
    title: "1. Heat & The Autonomy Principle",
    phase: "anchor",
    summary: "Seeded on individual bodily autonomy and free inquiry against corporate and state overreach.",
    principleBridge: "Absolute personal sovereignty as the primary moral baseline.",
    status: "completed",
    messages: [
      {
        id: "m-1-1",
        role: "user",
        content: "I want to be grilled on where I stand. I'm sick of left-vs-right labels. I believe an individual owns their own body and conscience, period. The state has no business telling people what to ingest, who to love, or what thoughts they can express.",
        timestamp: "10:14 AM",
      },
      {
        id: "m-1-2",
        role: "assistant",
        content:
          "Let's test how far that rule reaches when autonomy collides with social consequence. Suppose a biotech firm synthesizes a cheap, non-addictive cognitive enhancement. Should the state allow employers to require it for safety-critical workers like pilots or surgeons, or does the individual's right to bodily purity override workplace safety mandates?",
        timestamp: "10:14 AM",
        reasoning: "User asserts an absolute bodily autonomy principle. Testing against an employer mandate in a safety-critical public hazard counterfactual.",
        suggestions: [
          "Autonomy strictly overrides safety mandates",
          "Steelman the public safety argument",
          "Unpack the trade-offs in employment contracts",
        ],
      },
      {
        id: "m-1-3",
        role: "user",
        content:
          "Bodily autonomy overrides it completely. No employer and no government has the right to compel anyone to alter their biology or take chemicals as a condition of earning a living. If safety requires it, the company must redesign the plane or the operating room, not forcibly modify the worker.",
        timestamp: "10:16 AM",
      },
    ],
  },
  {
    id: "chap-2",
    number: 2,
    title: "2. Economic Scale & Subsidiarity",
    phase: "subsidiarity",
    summary: "Testing whether autonomy applies to property and economic scale.",
    principleBridge: "Testing if non-domination extends from bodily choices to market power.",
    status: "completed",
    messages: [
      {
        id: "m-2-1",
        role: "assistant",
        content:
          "So for you, sovereignty against coercion is unconditional. Let's see if that same principle applies to economic scale.\n\nConsider a rural utility cooperative. A multinational conglomerate buys up all surrounding water rights through voluntary contracts with willing sellers, then triples prices for the town. If all transactions were voluntary exercises of property rights, does the state have legitimate authority to break up that monopoly?",
        timestamp: "10:17 AM",
        reasoning: "Bridging the anti-coercion rule into the economic domain: market contracts vs systemic domination.",
        suggestions: [
          "Break it up — private monopolies coerce people too",
          "Steelman property rights vs anti-trust",
          "Push me harder on economic power",
        ],
      },
      {
        id: "m-2-2",
        role: "user",
        content:
          "Yes, break it up immediately. Private monopolies are just as coercive as tyrannical states. When one company controls the water, your contract isn't voluntary—it's signed under threat of dehydration. Real freedom requires decentralized ownership.",
        timestamp: "10:19 AM",
      },
      {
        id: "m-2-3",
        role: "assistant",
        content:
          "Understood: your underlying standard is non-domination rather than pure laissez-faire property rights. Coercion is illegitimate whether its author wears a badge or a corporate suit.",
        timestamp: "10:20 AM",
        suggestions: [
          "Ready for the next topic",
          "Unpack the distinction between public and private coercion",
        ],
      },
    ],
  },
  {
    id: "chap-3",
    number: 3,
    title: "3. Coherence Test: Speech vs Harm",
    phase: "tension",
    summary: "Testing the boundary where expressive freedom collides with hate speech bans.",
    principleBridge: "Testing whether speech that inflicts psychological harm justifies state intervention.",
    status: "active",
    messages: [
      {
        id: "m-3-1",
        role: "assistant",
        content:
          "Now let's test where that anti-coercion rule meets public speech. A political faction rents public billboards in a minority neighborhood, putting up targeted slogans that demean residents' heritage and dignity. Residents report acute distress and fear leaving their homes.\n\nShould the municipal council have legal authority to prohibit that speech, or must it remain protected under individual expression?",
        timestamp: "10:22 AM",
        reasoning: "Diagnostic dilemma: Absolute expressive liberty vs protecting vulnerable communities from psychic injury and intimidation.",
        suggestions: [
          "The council must ban it to protect residents",
          "Protected expression — offensive speech is still free speech",
          "Unpack the legal trade-offs",
        ],
      },
      {
        id: "m-3-2",
        role: "user",
        content:
          "The council should ban it and criminalize that kind of targeted harassment. Psychological harm and public terrorization are forms of violence. You can't let malicious groups terrorize people in their own neighborhoods under the guise of free speech.",
        timestamp: "10:25 AM",
      },
      {
        id: "m-3-3",
        role: "assistant",
        content:
          "We have reached a significant fault line in your framework.\n\nEarlier in Chapter 1, you asserted that individual autonomy over conscience and expression is an absolute barrier that no authority may breach. Yet here, you grant the state power to decide which speech qualifies as violence and censor it.\n\nDoes this fit together under a deeper rule you hold, or are you torn between two genuine commitments?",
        timestamp: "10:26 AM",
        reasoning: "Tension detected between absolute expressive autonomy and criminalization of psychological harm through state speech regulation.",
        tension: SAMPLE_TENSION,
        suggestions: [
          "Unpack both sides of this tension",
          "I'm genuinely torn on this",
          "Steelman the free expression side",
        ],
      },
    ],
  },
  {
    id: "chap-4",
    number: 4,
    title: "4. Checkpoint & Worldview Map",
    phase: "result",
    summary: "First pass complete (11 turns). Diagnostic yield high across 7 core dimensions.",
    principleBridge: "Worldview synthesized into stable political coordinates and reference thinkers.",
    status: "future",
    messages: [
      {
        id: "m-4-1",
        role: "assistant",
        content:
          "We have mapped your positions across 11 turns: establishing your anchor in individual non-domination, your willingness to curb private economic concentration, and your active tension between expressive liberty and civil protection.\n\nYour first-pass Political Map is ready for review.",
        timestamp: "10:28 AM",
        isCheckpoint: true,
        suggestions: [
          "Show my Result",
          "Push me on one more dilemma first",
        ],
      },
    ],
  },
];

export const MOCK_RESULT: WorldviewResult = {
  labels: [
    {
      name: "Left-Libertarian",
      type: "Core",
      confidence: "High",
      summary: "Combines radical personal autonomy and suspicion of state paternalism with strong resistance to private corporate hierarchy and monopoly power.",
    },
    {
      name: "Civil Libertarian",
      type: "Secondary",
      confidence: "Moderate",
      summary: "Prioritizes individual conscience and bodily sovereignty against bureaucratic mandates, subject to an active tension around targeted harassment.",
    },
    {
      name: "Distributist / Decentralist",
      type: "Thin",
      confidence: "Forming",
      summary: "Prefers localized cooperative economic scale over both centralized state planning and transnational monopoly.",
    },
  ],
  narrative:
    "Your politics are organized around a demanding core rule: **non-domination**. You reject coercion regardless of its source—firmly opposing state mandates over the body while simultaneously rejecting laissez-faire property rights when they allow corporate scale to crush local autonomy. Where your framework experiences the greatest stress is the boundary between free expression and severe psychic harm, where your instinct to protect vulnerable communities collides with your suspicion of state censorship.",
  closestThinkers: [
    {
      name: "John Stuart Mill",
      era: "1806–1873 · Classical Utilitarian & Liberal",
      match: 91,
      alignment:
        "Shares your harm principle as the boundary of state authority and your distinction between personal vices and other-regarding harms.",
      divergence:
        "Mill defended state-enforced compulsory education and paternalistic interventions for backward societies, which your anti-paternalism rejects.",
    },
    {
      name: "Isaiah Berlin",
      era: "1909–1997 · Pluralist Philosopher",
      match: 86,
      alignment:
        "Aligns on negative liberty (freedom from interference) as fundamental and recognizes that cherished political values frequently collide without simple synthesis.",
      divergence:
        "Berlin was more pessimistic about decentralizing economic power without creating localized provincial tyranny.",
    },
    {
      name: "Elinor Ostrom",
      era: "1933–2012 · Institutional Economist",
      match: 82,
      alignment:
        "Mirrors your instinct that local commons and decentralized governance outperform both state centralization and private monopolization.",
      divergence:
        "Ostrom emphasizes community rule-enforcement and social monitoring, which may restrict individual deviance more than you tolerate.",
    },
  ],
  tensions: [
    {
      title: "Bodily Autonomy vs. Public Order",
      poleA: "Inviolable Bodily Sovereignty",
      poleB: "Collective Public Health & Safety",
      state: "Settled",
    },
    {
      title: "Expressive Freedom vs. Prevention of Harm",
      poleA: "Free Expression & Inquiry",
      poleB: "State Protection Against Harassment",
      state: "Torn",
    },
    {
      title: "Private Property vs. Anti-Monopoly Decentralization",
      poleA: "Voluntary Contract & Exchange",
      poleB: "Mandatory De-concentration of Power",
      state: "Settled",
    },
  ],
  dimensions: [
    {
      name: "Neutrality vs. Perfectionism",
      group: "The State & The Good Life",
      poleA: "State Neutrality",
      poleB: "State Perfectionism",
      position: -85,
      status: "Settled",
    },
    {
      name: "Regulation of Personal Conduct",
      group: "The State & The Good Life",
      poleA: "Individual Autonomy",
      poleB: "Moral Regulation",
      position: -90,
      status: "Settled",
    },
    {
      name: "Speech & Expression",
      group: "The State & The Good Life",
      poleA: "Expressive Liberty",
      poleB: "Harm Prevention",
      position: 15,
      status: "Torn",
    },
    {
      name: "Economic Scale & Concentration",
      group: "Economic Life",
      poleA: "Decentralized Scale",
      poleB: "Permissive Consolidation",
      position: -75,
      status: "Settled",
    },
    {
      name: "Subsidiarity",
      group: "Who Decides",
      poleA: "Local & Community Primary",
      poleB: "Centralized Authority",
      position: -70,
      status: "Settled",
    },
    {
      name: "Property in Capital & Goods",
      group: "Economic Life",
      poleA: "Dispersed Stakeholder",
      poleB: "Concentrated Private",
      position: -60,
      status: "Thin",
    },
    {
      name: "Environmental Protection & Risk",
      group: "Nature, Technology, Future",
      poleA: "Precautionary Protection",
      poleB: "Proactionary Growth",
      position: 0,
      status: "Not asked",
    },
    {
      name: "Sovereignty vs. Pooled Governance",
      group: "Membership & The World",
      poleA: "Supranational Integration",
      poleB: "National Sovereignty",
      position: 0,
      status: "Not asked",
    },
    {
      name: "Punishment & Justice",
      group: "Order, Security, Justice",
      poleA: "Restorative / Rehabilitation",
      poleB: "Retributive / Deterrence",
      position: 0,
      status: "Not asked",
    },
  ],
};
