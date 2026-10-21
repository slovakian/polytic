import { describe, expect, it } from "vite-plus/test";

import { CREATOR_FACTS, getCreatorFacts } from "./creator-facts";
import { creatorCategorySchema, creatorTool } from "./creator-tool";

describe("CREATOR_FACTS", () => {
  it("contains accurate overview information", () => {
    expect(CREATOR_FACTS.overview.name).toBe("Jason Procka");
    expect(CREATOR_FACTS.overview.age).toBe(26);
    expect(CREATOR_FACTS.overview.location).toBe("North Dakota");
    expect(CREATOR_FACTS.overview.email).toBe("jasonprocka@gmail.com");
    expect(CREATOR_FACTS.overview.website).toBe("https://notai.so");
    expect(CREATOR_FACTS.overview.role).toContain("Full-stack software engineer");
  });

  it("distinguishes what Polytic Party is from why it was created", () => {
    // What it is: an AI chat tool mapping beliefs and finding contradictions
    expect(CREATOR_FACTS.polytic_party.what_it_is).toContain(
      "AI chat tool that maps people's personal and political beliefs and philosophies",
    );
    expect(CREATOR_FACTS.polytic_party.what_it_is).toContain("identify contradictions");

    // Why it was created: altruistic depolarization and deeper thinking
    expect(CREATOR_FACTS.polytic_party.why_it_was_created).toContain(
      "reducing political polarization",
    );
    expect(CREATOR_FACTS.polytic_party.mission).toContain(
      "change how people approach politics and their beliefs",
    );
    expect(CREATOR_FACTS.polytic_party.philosophy_on_labels).toContain("putting them in a box");
    expect(CREATOR_FACTS.polytic_party.nature).toContain("altruistic");
  });

  it("lists all required software projects with accurate descriptions", () => {
    const projectNames = CREATOR_FACTS.projects.map((p) => p.name);
    expect(projectNames).toContain("Polytic Party");
    expect(projectNames).toContain("Opul");
    expect(projectNames).toContain("Notai");
    expect(projectNames).toContain("WageSav3");
    expect(projectNames).toContain("catLounge");
    expect(projectNames).toContain("prisma-ltree");

    const opul = CREATOR_FACTS.projects.find((p) => p.name === "Opul");
    expect(opul).toBeDefined();
    expect(opul?.summary).toContain("download manager");
    expect(opul?.capabilities).toContain("Streaming media and online video extraction");
    expect(opul?.capabilities).toContain("Distributed / torrent peer-to-peer file transfers");
    // Explicit rule: do not name yt-dlp or qbittorrent
    expect(JSON.stringify(opul)).not.toContain("yt-dlp");
    expect(JSON.stringify(opul)).not.toContain("qbittorrent");

    const notai = CREATOR_FACTS.projects.find((p) => p.name === "Notai");
    expect(notai?.url).toBe("https://notai.so");
    expect(notai?.summary).toContain("public domain web library");

    const wageSav3 = CREATOR_FACTS.projects.find((p) => p.name === "WageSav3");
    expect(wageSav3?.summary).toContain("converts price to time");

    const catLounge = CREATOR_FACTS.projects.find((p) => p.name === "catLounge");
    expect(catLounge?.url).toBe("https://catLounge.org");

    const prismaLtree = CREATOR_FACTS.projects.find((p) => p.name === "prisma-ltree");
    expect(prismaLtree?.summary).toContain("Prisma 8 PostgreSQL Ltree extension");
  });

  it("captures core philosophy and values", () => {
    const coreValues = CREATOR_FACTS.philosophy.core_values.join(" ");
    expect(coreValues).toContain("human creativity");
    expect(coreValues).toContain("human history");
    expect(coreValues).toContain("Resisting ideological reductionism");
  });

  it("captures outdoor hobbies and video games", () => {
    const outdoors = CREATOR_FACTS.interests.outdoors.join(" ");
    expect(outdoors).toContain("Rock climbing");
    expect(outdoors).toContain("loves touching rock");
    expect(outdoors).toContain("adventurer");

    expect(CREATOR_FACTS.interests.gaming).toContain("The Finals");
    expect(CREATOR_FACTS.interests.gaming).toContain("Minecraft");
  });

  it("enforces clear privacy boundaries on contact info", () => {
    expect(CREATOR_FACTS.contact.email).toBe("jasonprocka@gmail.com");
    expect(CREATOR_FACTS.contact.website).toBe("https://notai.so");
    expect(CREATOR_FACTS.contact.boundaries).toContain("No physical or street addresses");
  });
});

describe("getCreatorFacts", () => {
  it("returns full facts when category is 'all' or omitted", () => {
    expect(getCreatorFacts("all")).toEqual(CREATOR_FACTS);
    expect(getCreatorFacts()).toEqual(CREATOR_FACTS);
  });

  it("returns category-specific slice when requested", () => {
    const projects = getCreatorFacts("projects");
    expect(projects).toEqual({ projects: CREATOR_FACTS.projects });

    const polytic = getCreatorFacts("polytic_party");
    expect(polytic).toEqual({ polytic_party: CREATOR_FACTS.polytic_party });

    const interests = getCreatorFacts("interests");
    expect(interests).toEqual({ interests: CREATOR_FACTS.interests });
  });
});

describe("creatorTool", () => {
  it("is defined as a server tool with name get_creator_info", () => {
    expect(creatorTool.name).toBe("get_creator_info");
    expect(creatorTool.description).toContain("Jason Procka");
    expect(creatorTool.__toolSide).toBe("server");
  });

  it("parses valid category in schema with default to 'all'", () => {
    expect(creatorCategorySchema.parse(undefined)).toBe("all");
    expect(creatorCategorySchema.parse("projects")).toBe("projects");
    expect(creatorCategorySchema.parse("contact")).toBe("contact");
  });

  it("executes tool on server returning facts", async () => {
    expect(creatorTool.execute).toBeDefined();

    const allResult = await creatorTool.execute?.({ category: "all" });
    expect(allResult).toEqual(CREATOR_FACTS);

    const projectsResult = await creatorTool.execute?.({ category: "projects" });
    expect(projectsResult).toEqual({ projects: CREATOR_FACTS.projects });

    const defaultResult = await creatorTool.execute?.({});
    expect(defaultResult).toEqual(CREATOR_FACTS);
  });
});
