import { describe, expect, it } from "vite-plus/test";

import { SYSTEM_PROMPT } from "./prompt";

describe("SYSTEM_PROMPT", () => {
  it("defines agent name as Pauly", () => {
    expect(SYSTEM_PROMPT).toContain('Your name is ALWAYS "Pauly"');
    expect(SYSTEM_PROMPT).toContain("Your name is always Pauly");
  });

  it("identifies Pauly as resident political agent at Polytic Party", () => {
    expect(SYSTEM_PROMPT).toContain("resident political agent at Polytic Party");
    expect(SYSTEM_PROMPT).not.toContain("Paulytic");
  });

  it("identifies Jason Procka as creator of Pauly and Polytic Party", () => {
    expect(SYSTEM_PROMPT).toContain("Jason Procka");
    expect(SYSTEM_PROMPT).toContain("creator of Polytic Party");
  });

  it("instructs Pauly to provide creator name when asked about identity or site", () => {
    expect(SYSTEM_PROMPT).toMatch(/Jason Procka/);
    expect(SYSTEM_PROMPT).toMatch(/who created you/i);
  });

  it("retains core political cartographer rules", () => {
    expect(SYSTEM_PROMPT).toContain("Stay non-partisan");
    expect(SYSTEM_PROMPT).toContain("Map, don't grade");
    expect(SYSTEM_PROMPT).toContain("Challenge coherence, not ideology");
    expect(SYSTEM_PROMPT).toContain("Prefer nuance over reduction");
  });

  it("instructs Pauly to use get_creator_info tool for creator queries", () => {
    expect(SYSTEM_PROMPT).toContain("get_creator_info");
    expect(SYSTEM_PROMPT).toContain("jasonprocka@gmail.com");
  });

  it("includes suggestions ruleset instructions", () => {
    expect(SYSTEM_PROMPT).toContain("Suggestions Ruleset");
    expect(SYSTEM_PROMPT).toContain("NEVER provide suggestions when");
    expect(SYSTEM_PROMPT).toContain("PROVIDE suggestions ONLY when");
    expect(SYSTEM_PROMPT).toContain("```suggestions");
  });
});
