import { useState } from "react";

import { ArrowDown01Icon, FileCodeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { CopyButton } from "@/components/copy-button";

/**
 * A code-block previewer for the inlined grilling skill. The full source is
 * always rendered into the DOM (so it stays SSR-friendly, copyable, and
 * indexable even without JS); collapsing is purely a max-height clip with a
 * fade at the bottom. Expanding reveals the rest, scrolling if it overflows.
 */
export function SkillPreview({
  source,
  filename = "SKILL.md",
}: {
  source: string;
  filename?: string;
}) {
  // Collapsed by default — a deterministic initial value, so the server and the
  // first client render agree (no hydration mismatch).
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl bg-linear-to-br from-fuchsia-500/40 via-sky-400/30 to-emerald-400/40 p-px shadow-sm">
      <div className="overflow-hidden rounded-[calc(var(--radius)+7px)] bg-card">
        {/* Toolbar: window dots, filename, copy */}
        <div className="flex items-center gap-3 border-b border-border/60 bg-linear-to-r from-fuchsia-500/[0.07] via-transparent to-sky-500/[0.07] px-4 py-2.5">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="size-3 rounded-full bg-linear-to-br from-rose-400 to-red-500" />
            <span className="size-3 rounded-full bg-linear-to-br from-amber-300 to-yellow-500" />
            <span className="size-3 rounded-full bg-linear-to-br from-emerald-400 to-green-500" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <HugeiconsIcon icon={FileCodeIcon} strokeWidth={2} className="size-3.5" aria-hidden />
            <span className="font-mono">{filename}</span>
          </div>
          <CopyButton text={source} label="Copy prompt" withIcon className="ml-auto" />
        </div>

        {/* Body */}
        <div className="relative">
          <pre
            id="skill-source"
            className={
              "overflow-auto px-4 py-4 font-mono text-xs leading-relaxed text-muted-foreground transition-[max-height] duration-300 ease-in-out motion-reduce:transition-none " +
              (open ? "max-h-[32rem]" : "max-h-64")
            }
          >
            {source}
          </pre>

          {/* Fade — only while collapsed, and never eats pointer events */}
          {open ? null : (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-card via-card/80 to-transparent"
            />
          )}
        </div>

        {/* Toggle */}
        <div className="border-t border-border/60 p-2">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="skill-source"
            className="flex w-full items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            {open ? "Collapse" : "Expand the full prompt"}
            <HugeiconsIcon
              icon={ArrowDown01Icon}
              strokeWidth={2}
              aria-hidden
              className={
                "size-3.5 transition-transform duration-300 motion-reduce:transition-none " +
                (open ? "rotate-180" : "rotate-0")
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}
