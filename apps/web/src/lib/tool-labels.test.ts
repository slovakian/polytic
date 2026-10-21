import { describe, expect, it } from "vite-plus/test";

import { CREATOR_TOOL_LABEL, CREATOR_TOOL_NAME } from "./creator-tool";
import { formatToolFallbackName, getToolLabel, TOOL_LABELS } from "./tool-labels";

describe("tool-labels", () => {
  it("maps get_creator_info to creator info", () => {
    expect(TOOL_LABELS[CREATOR_TOOL_NAME]).toBe(CREATOR_TOOL_LABEL);
    expect(getToolLabel("get_creator_info")).toBe("creator info");
  });

  it("handles fallback formatting for snake_case and kebab-case", () => {
    expect(formatToolFallbackName("fetch_user_profile")).toBe("fetch user profile");
    expect(formatToolFallbackName("search-web-archive")).toBe("search web archive");
    expect(getToolLabel("query_tax_brackets")).toBe("query tax brackets");
  });

  it("handles fallback formatting for camelCase", () => {
    expect(formatToolFallbackName("fetchUserData")).toBe("fetch user data");
    expect(getToolLabel("inspectProfileSummary")).toBe("inspect profile summary");
  });

  it("handles empty or undefined tool names gracefully", () => {
    expect(getToolLabel("")).toBe("");
    expect(getToolLabel(undefined)).toBe("");
    expect(formatToolFallbackName("")).toBe("");
    expect(formatToolFallbackName(undefined)).toBe("");
  });
});
