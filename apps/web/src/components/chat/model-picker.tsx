import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@polytic/ui/components/dropdown-menu";
import { InputGroupButton } from "@polytic/ui/components/input-group";
import { cn } from "@polytic/ui/lib/utils";
import { ChevronDownIcon } from "lucide-react";

import { CHAT_MODELS, type ChatModelId, chatModelIdSchema } from "@/lib/models";

export function ModelPicker({
  value,
  onValueChange,
  className,
}: {
  value: ChatModelId;
  onValueChange: (value: ChatModelId) => void;
  className?: string;
}) {
  const current = CHAT_MODELS.find((model) => model.id === value) ?? CHAT_MODELS[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <InputGroupButton
            size="sm"
            variant="ghost"
            aria-label={`Model: ${current.name}`}
            className={cn("font-sans", className)}
          />
        }
      >
        <span className="font-sans">{current.name}</span>
        <ChevronDownIcon className="text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" side="top" className="w-72 font-sans">
        <DropdownMenuGroup className="font-sans">
          <DropdownMenuRadioGroup
            value={value}
            onValueChange={(next) => {
              const parsed = chatModelIdSchema.safeParse(next);

              if (parsed.success) {
                onValueChange(parsed.data);
              }
            }}
          >
            {CHAT_MODELS.map((model) => (
              <DropdownMenuRadioItem
                key={model.id}
                value={model.id}
                closeOnClick
                className="font-sans"
              >
                <div className="flex min-w-0 flex-col gap-0.5 font-sans">
                  <span className="font-sans">
                    {model.name}
                    <span className="text-muted-foreground font-normal"> · {model.lab}</span>
                  </span>
                  <span className="text-muted-foreground text-xs font-normal">
                    {model.description}
                  </span>
                </div>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
