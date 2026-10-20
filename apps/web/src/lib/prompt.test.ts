import { describe, expect, it } from "vite-plus/test";

import { SYSTEM_PROMPT } from "./prompt";

describe("SYSTEM_PROMPT", () => {
  it("defines agent name as Pauly", () => {
    expect(SYSTEM_PROMPT).toContain('Your name is ALWAYS "Pauly"');
    expect(SYSTEM_PROMPT).toContain("Your name is always Pauly");
  });

  it("identifies Pauly as resident political agent at Polytic Party", () => {
    expect(SYSTEM_PROMPT).toContain("resident political agent at Polytic Party");
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
});
