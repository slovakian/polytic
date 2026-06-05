import { useState } from "react";

import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@polytik/ui/lib/utils";

async function copyText(text: string) {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to legacy path
  }
  try {
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    return true;
  } catch {
    return false;
  }
}

export function useCopied() {
  const [copied, setCopied] = useState(false);
  const copy = async (text: string) => {
    const ok = await copyText(text);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };
  return { copied, copy };
}

export function CopyButton({
  text,
  label = "Copy",
  className,
  withIcon = false,
}: {
  text: string;
  label?: string;
  className?: string;
  withIcon?: boolean;
}) {
  const { copied, copy } = useCopied();
  return (
    <button
      type="button"
      onClick={() => copy(text)}
      aria-label={copied ? "Copied to clipboard" : label}
      className={cn(
        "inline-flex h-7 shrink-0 items-center gap-1.5 rounded-md border border-border bg-background px-2.5 text-xs font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        className,
      )}
    >
      {withIcon ? (
        <HugeiconsIcon
          icon={copied ? Tick02Icon : Copy01Icon}
          strokeWidth={2}
          className="size-3.5"
          aria-hidden
        />
      ) : null}
      {copied ? "Copied" : label}
    </button>
  );
}
