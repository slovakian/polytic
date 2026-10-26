import { SKILL_INSTALL_COMMAND } from "@polytic/skills";
import { Button } from "@polytic/ui/components/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@polytic/ui/components/tooltip";
import { Link } from "@tanstack/react-router";
import { SquarePenIcon, TerminalIcon } from "lucide-react";
import { toast } from "sonner";

import { useChatActions } from "./chat/chat-context";

export default function Header() {
  const { canReset, busy, reset } = useChatActions();

  return (
    <header className="relative flex items-center justify-between border-b border-border px-4 py-3">
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
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  void navigator.clipboard
                    .writeText(SKILL_INSTALL_COMMAND)
                    .then(() => toast.success("Install command copied"));
                }}
              />
            }
          >
            <TerminalIcon data-icon="inline-start" />
            Use your own AI
          </TooltipTrigger>
          <TooltipContent>
            <p>
              Copy <code>{SKILL_INSTALL_COMMAND}</code>
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
    </header>
  );
}
