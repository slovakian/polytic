"use client";

import * as React from "react";
import { CheckIcon, ShieldAlertIcon, XIcon } from "lucide-react";
import { cn } from "@polytic/ui/lib/utils";

import { Button } from "@polytic/ui/components/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@polytic/ui/components/item";
import { Trace, TraceIcon, TraceLine, TraceTitle } from "@polytic/ui/components/trace";

export type ConfirmationStatus = "pending" | "approved" | "denied";

export interface ConfirmationProps extends Omit<React.ComponentProps<typeof Item>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  toolName?: string;
  status?: ConfirmationStatus;
  onApprove?: () => void;
  onDeny?: () => void;
  approveLabel?: string;
  denyLabel?: string;
  icon?: React.ReactNode;
}

export function Confirmation({
  title,
  description,
  toolName,
  status = "pending",
  onApprove,
  onDeny,
  approveLabel = "Approve",
  denyLabel = "Deny",
  icon,
  className,
  ...props
}: ConfirmationProps) {
  const displayTitle = title ?? (toolName ? `Run ${toolName}?` : "Approval requested");

  const displayDescription =
    description ??
    (toolName ? `The tool "${toolName}" requires your confirmation to execute.` : undefined);

  if (status === "approved" || status === "denied") {
    const isApproved = status === "approved";

    return (
      <Trace className={className}>
        <TraceLine status={isApproved ? undefined : "error"}>
          <TraceIcon>
            {isApproved ? (
              <CheckIcon className="text-emerald-500" />
            ) : (
              <XIcon className="text-destructive" />
            )}
          </TraceIcon>
          <TraceTitle>
            {isApproved ? "Approved" : "Denied"} {toolName ?? "action"}
          </TraceTitle>
        </TraceLine>
      </Trace>
    );
  }

  return (
    <Item
      variant="outline"
      size="sm"
      className={cn("border-amber-500/30 bg-amber-500/5", className)}
      {...props}
    >
      <ItemMedia variant="icon" className="text-amber-500">
        {icon ?? <ShieldAlertIcon />}
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{displayTitle}</ItemTitle>
        {displayDescription ? <ItemDescription>{displayDescription}</ItemDescription> : null}
      </ItemContent>
      <ItemActions>
        {onDeny ? (
          <Button size="sm" variant="outline" onClick={onDeny}>
            {denyLabel}
          </Button>
        ) : null}
        {onApprove ? (
          <Button size="sm" variant="default" onClick={onApprove}>
            {approveLabel}
          </Button>
        ) : null}
      </ItemActions>
    </Item>
  );
}
