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
