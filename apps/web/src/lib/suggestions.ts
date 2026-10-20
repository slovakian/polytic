export interface ParsedMessageSuggestions {
  text: string;
  suggestions: string[];
}

const CODE_BLOCK_REGEX = /```(?:suggestions|suggestion)\s*([\s\S]*?)(?:```|$)/i;
const XML_BLOCK_REGEX = /<suggestions>([\s\S]*?)(?:<\/suggestions>|$)/i;
const XML_ITEM_REGEX = /<suggestion>([\s\S]*?)<\/suggestion>/gi;

function cleanItem(raw: string): string {
  return raw
    .trim()
    .replace(/^[-*+]\s+/, "")
    .replace(/^\d+\.\s+/, "")
    .replace(/^["'“”](.*)["'“”]$/, "$1")
    .trim();
}

function parseBlockContent(content: string): string[] {
  const trimmed = content.trim();

  if (!trimmed) return [];

  // Try JSON array format first (e.g., ["Option 1", "Option 2"])
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    try {
      const parsed = JSON.parse(trimmed);

      if (Array.isArray(parsed)) {
        return parsed.map((item) => cleanItem(String(item))).filter((item) => item.length > 0);
      }
    } catch {
      // Fall through to line-based parsing
    }
  }

  // Try XML <suggestion> items
  if (/<suggestion>/i.test(trimmed)) {
    const items: string[] = [];
    let match: RegExpExecArray | null;
    const regex = new RegExp(XML_ITEM_REGEX.source, XML_ITEM_REGEX.flags);

    while ((match = regex.exec(trimmed)) !== null) {
      const cleaned = cleanItem(match[1]);

      if (cleaned) items.push(cleaned);
    }

    if (items.length > 0) return items;
  }

  // Fall back to line-by-line list parsing (bullets or numbered items)
  return trimmed
    .split(/\r?\n/)
    .map(cleanItem)
    .filter((item) => item.length > 0);
}

/**
 * Extracts suggestion chips from a raw assistant message and returns
 * clean text without raw suggestion syntax along with an array of suggestions.
 */
export function parseMessageSuggestions(raw: string): ParsedMessageSuggestions {
  if (!raw) {
    return { text: "", suggestions: [] };
  }

  const codeMatch = CODE_BLOCK_REGEX.exec(raw);
  const xmlMatch = XML_BLOCK_REGEX.exec(raw);

  const match = codeMatch || xmlMatch;
  const rawSuggestions = match ? parseBlockContent(match[1]) : [];

  // Deduplicate and cap to at most 4 suggestions
  const suggestions = Array.from(new Set(rawSuggestions)).slice(0, 4);

  // Strip suggestion blocks from displayed text (including unclosed blocks while streaming)
  const text = raw
    .replace(/```(?:suggestions|suggestion)\s*[\s\S]*?(?:```|$)/gi, "")
    .replace(/<suggestions>[\s\S]*?(?:<\/suggestions>|$)/gi, "")
    .trimEnd();

  return { text, suggestions };
}
