import { readFileSync } from "node:fs";
import { relative } from "node:path";

const MAX_TOKENS = 5_000;
const BYTES_PER_TOKEN = 4;
const MAX_BYTES = MAX_TOKENS * BYTES_PER_TOKEN;

// Files agents don't author: lockfiles, codegen, migrations, vendored code, installed skills.
const IGNORED_PATHS = [
  /(^|\/)bun\.lockb?$/,
  /(^|\/)(package-lock\.json|pnpm-lock\.yaml|yarn\.lock|skills-lock\.json)$/,
  /\.gen\.[cm]?[jt]sx?$/,
  /(^|\/)cloudflare-env\.d\.ts$/,
  /^packages\/db\/prisma\/(generated|migrations)\//,
  /(^|\/)vendor\//,
  /^\.agents\//,
];

const SPLIT_INSTRUCTIONS = `How to split an oversized file:

  1. Find the seams. List the file's distinct responsibilities (components,
     hooks, helpers, types, constants, sections of prose). Each becomes a file.

  2. TypeScript / React:
     - One exported component per file. Move each subcomponent to its own
       sibling file named after it (e.g. chat-panel.tsx -> chat-panel-header.tsx).
     - Move hooks to use-<name>.ts, pure helpers to <feature>-utils.ts, shared
       types to <feature>-types.ts, large constant tables to <feature>-data.ts.
     - Keep the original path as the entry point for the main export so
       callers don't break. Import the new files directly; do not add an
       index.ts barrel that re-exports everything.

  3. Markdown / docs / skills:
     - Split on top-level (##) headings into separate files in a folder
       named after the original (e.g. docs/protocol.md -> docs/protocol/*.md).
     - Leave the original file as a short overview that links to each part
       with relative links.
     - For skills, keep SKILL.md lean and move detail into references/*.md.

  4. JSON / data: split into multiple files by top-level key or category and
     load them where they're used.

  5. Re-stage the new files (git add) and commit again.

Do not shrink the file by minifying, deleting comments, or shortening names.
If the file is generated or third-party, add its path to IGNORED_PATHS in
tools/hooks/check-file-tokens.ts instead.`;

function isBinary(contents: Buffer): boolean {
  return contents.subarray(0, 8_000).includes(0);
}

function formatCount(value: number): string {
  return value.toLocaleString("en-US");
}

const violations: string[] = [];

for (const file of process.argv.slice(2)) {
  const path = relative(process.cwd(), file);

  if (IGNORED_PATHS.some((pattern) => pattern.test(path))) {
    continue;
  }

  const contents = readFileSync(file);

  if (contents.byteLength <= MAX_BYTES || isBinary(contents)) {
    continue;
  }

  const tokens = Math.ceil(contents.byteLength / BYTES_PER_TOKEN);
  const excess = tokens - MAX_TOKENS;

  violations.push(
    `  ${path}: ~${formatCount(tokens)} tokens (${formatCount(contents.byteLength)} bytes), ${formatCount(excess)} over`,
  );
}

if (violations.length > 0) {
  console.error(
    `\n✖ ${violations.length} staged file(s) exceed ${formatCount(MAX_TOKENS)} tokens (tokens = bytes / ${BYTES_PER_TOKEN}, max ${formatCount(MAX_BYTES)} bytes):\n`,
  );
  console.error(violations.join("\n"));
  console.error(`\n${SPLIT_INSTRUCTIONS}\n`);
  process.exit(1);
}
