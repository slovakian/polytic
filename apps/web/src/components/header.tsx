import { Button } from "@polytic/ui/components/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@polytic/ui/components/tooltip";
import { Link } from "@tanstack/react-router";
import { SquarePenIcon } from "lucide-react";

import { useChatActions } from "./chat/chat-context";

export default function Header() {
  const { canReset, busy, reset } = useChatActions();

  return (
    <header className="relative flex items-center justify-between px-4 pt-3 pb-1.5">
      <Link to="/" className="flex items-center gap-2 text-base font-semibold tracking-tight">
        Polytic
        <span className="text-muted-foreground font-normal">Party</span>
      </Link>
      <div className="flex items-center gap-2">
        <Link
          to="/result"
          search={{ variant: "A", persona: "left-libertarian" }}
          className="text-xs font-mono rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/20 px-2.5 py-1 transition-colors"
        >
          Result Prototype →
        </Link>
        {canReset ? (
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="New chat"
                  disabled={busy}
                  onClick={reset}
                />
              }
            >
              <SquarePenIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>New chat</p>
            </TooltipContent>
          </Tooltip>
        ) : null}
      </div>
    </header>
  );
}
