export interface ProjectInfo {
  name: string;
  url?: string;
  summary: string;
  capabilities?: string[];
}

export interface CreatorFacts {
  overview: {
    name: string;
    role: string;
    age: number;
    location: string;
    website: string;
    email: string;
    summary: string;
  };
  polytic_party: {
    what_it_is: string;
    why_it_was_created: string;
    mission: string;
    philosophy_on_labels: string;
    nature: string;
  };
  projects: ProjectInfo[];
  philosophy: {
    core_values: string[];
    approach_to_beliefs: string;
  };
  interests: {
    outdoors: string[];
    gaming: string[];
    general: string[];
  };
  contact: {
    email: string;
    website: string;
    boundaries: string;
  };
}

export const CREATOR_FACTS: CreatorFacts = {
  overview: {
    name: "Jason Procka",
    role: "Full-stack software engineer / web developer and independent software creator",
    age: 26,
    location: "North Dakota",
    website: "https://notai.so",
    email: "jasonprocka@gmail.com",
    summary:
      "Full-stack software engineer and web developer living in North Dakota. Creator of Polytic Party, Notai, Opul, and other software projects. Passionate about human creativity, human history, rock climbing, and the outdoors.",
  },
  polytic_party: {
    what_it_is:
      "An AI chat tool that maps people's personal and political beliefs and philosophies to help them better understand what they believe and identify contradictions or tensions.",
    why_it_was_created:
      "To contribute to reducing political polarization and inspire people to think more deeply about what they believe and why.",
    mission:
      "Aims to change how people approach politics and their beliefs rather than attempting to change what they believe.",
    philosophy_on_labels:
      "Believes rigid party labels (like Democrat or Republican) reduce what people actually believe and cause people to blindly align with a party, putting them in a box. Recognizes that very few people—including Jason himself—have neatly defined, rigid political ideologies, but everyone believes something that warrants deeper, thoughtful examination.",
    nature: "An altruistic public tool.",
  },
  projects: [
    {
      name: "Polytic Party",
      url: "https://polytic.party",
      summary:
        "An AI chat tool that maps people's personal and political beliefs and philosophies to help them understand their views and discover contradictions.",
    },
    {
      name: "Opul",
      summary:
        "A super simple macOS download manager for web video, streaming audio, media extraction, web files, and distributed transfers.",
      capabilities: [
        "Streaming media and online video extraction",
        "Audio stream extraction and downloads",
        "Direct web file downloads",
        "Distributed / torrent peer-to-peer file transfers",
      ],
    },
    {
      name: "Notai",
      url: "https://notai.so",
      summary: "A public domain web library (spelled Notai).",
    },
    {
      name: "WageSav3",
      summary:
        "A Chrome browser extension that converts product prices into the number of hours of work required to afford them (converts price to time).",
    },
    {
      name: "catLounge",
      url: "https://catLounge.org",
      summary: "A free music lounge and public chat.",
    },
    {
      name: "prisma-ltree",
      summary:
        "A Prisma 8 PostgreSQL Ltree extension that brings hierarchical ltree path querying functionality to Prisma.",
    },
  ],
  philosophy: {
    core_values: [
      "Deeply passionate about the value of human creativity.",
      "Deeply passionate about the value of human history.",
      "Resisting ideological reductionism and tribal categorization.",
    ],
    approach_to_beliefs:
      "If people are going to be politically engaged, they should venture deeper than surface-level party labels. Nuance and internal consistency matter more than conforming to a pre-packaged partisan identity.",
  },
  interests: {
    outdoors: [
      "Rock climbing ('loves touching rock')",
      "Hiking and exploring the outdoors",
      "Traveler and all-around adventurer",
    ],
    gaming: ["The Finals", "Minecraft"],
    general: ["Human history", "Creative computing and independent software development"],
  },
  contact: {
    email: "jasonprocka@gmail.com",
    website: "https://notai.so",
    boundaries:
      "Only public developer facts, project URLs, and the public email (jasonprocka@gmail.com) are shared. No physical or street addresses, phone numbers, or private personal details are provided.",
  },
};

export type CreatorCategory =
  | "all"
  | "overview"
  | "polytic_party"
  | "projects"
  | "philosophy"
  | "interests"
  | "contact";

export function getCreatorFacts(
  category: CreatorCategory = "all",
): Partial<CreatorFacts> | CreatorFacts {
  if (category === "all") {
    return CREATOR_FACTS;
  }

  return {
    [category]: CREATOR_FACTS[category],
  };
}
