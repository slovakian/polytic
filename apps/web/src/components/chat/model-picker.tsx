import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@polytic/ui/components/dropdown-menu";
import { InputGroupButton } from "@polytic/ui/components/input-group";
import { ChevronDownIcon, SparklesIcon } from "lucide-react";

import { CHAT_MODELS, type ChatModelId, chatModelIdSchema } from "@/lib/models";

export function ModelPicker({
  value,
  onValueChange,
}: {
  value: ChatModelId;
  onValueChange: (value: ChatModelId) => void;
}) {
  const current = CHAT_MODELS.find((model) => model.id === value) ?? CHAT_MODELS[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <InputGroupButton size="sm" variant="ghost" aria-label={`Model: ${current.name}`} />
        }
      >
        <SparklesIcon className="text-muted-foreground" />
        {current.name}
        <ChevronDownIcon className="text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="top" className="w-72">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Free models</DropdownMenuLabel>
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
              <DropdownMenuRadioItem key={model.id} value={model.id} closeOnClick>
                <div className="flex min-w-0 flex-col gap-0.5">
                  <span>
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
