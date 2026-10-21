import { CREATOR_TOOL_LABEL, CREATOR_TOOL_NAME } from "./creator-tool";

/**
 * Succinct, user-friendly labels for chat tools.
 * Avoids exposing raw programmatic identifiers or underscores in the chat UI.
 */
export const TOOL_LABELS = {
  [CREATOR_TOOL_NAME]: CREATOR_TOOL_LABEL,
} as const satisfies Record<string, string>;

export type KnownToolName = keyof typeof TOOL_LABELS;

function isKnownToolName(name: string): name is KnownToolName {
  return Object.prototype.hasOwnProperty.call(TOOL_LABELS, name);
}

/**
 * Fallback formatter for tool names not in the registry.
 * Converts snake_case, kebab-case, or camelCase identifiers into human-readable words.
 */
export function formatToolFallbackName(name?: string): string {
  if (!name) {
    return "";
  }

  return name
    .replace(/[_-]+/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .trim();
}

/**
 * Resolves a reader-friendly label for any tool by its programmatic name.
 */
export function getToolLabel(name?: string): string {
  if (!name) {
    return "";
  }

  if (isKnownToolName(name)) {
    return TOOL_LABELS[name];
  }

  return formatToolFallbackName(name);
}
