import { SKILL_INSTALL_COMMAND } from "@polytic/skills";
import { Button } from "@polytic/ui/components/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@polytic/ui/components/tooltip";
import { Link } from "@tanstack/react-router";
import { TerminalIcon } from "lucide-react";
import { toast } from "sonner";

export default function Header() {
  return (
    <header className="relative flex items-center justify-between px-4 py-3">
      <Link to="/" className="flex items-center gap-2 text-base font-semibold tracking-tight">
        <span aria-hidden className="bg-spectrum size-3 rounded-full" />
        Polytic
        <span className="text-spectrum">Party</span>
      </Link>
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
      <div aria-hidden className="bg-spectrum absolute inset-x-0 bottom-0 h-px opacity-40" />
    </header>
  );
}
