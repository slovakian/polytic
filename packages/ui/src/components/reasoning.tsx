"use client";

import * as React from "react";
import { BrainIcon } from "lucide-react";
import { cn } from "@polytic/ui/lib/utils";

import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@polytic/ui/components/trace";

export interface ReasoningLineProps extends React.ComponentProps<typeof TraceLine> {
  running?: boolean;
  duration?: number | string;
  icon?: React.ReactNode;
  title?: string;
}

export function ReasoningLine({
  running = false,
  duration,
  icon,
  title,
  className,
  ...props
}: ReasoningLineProps) {
  const defaultTitle = running ? "Thinking…" : "Thought";
  const displayTitle = title ?? defaultTitle;

  return (
    <TraceLine status={running ? "running" : undefined} className={className} {...props}>
      <TraceIcon>{icon ?? <BrainIcon className="text-(--hue-5)" />}</TraceIcon>
      <TraceTitle className={cn(running && "shimmer")}>{displayTitle}</TraceTitle>
      {duration && !running ? <TraceDescription>{duration}</TraceDescription> : null}
    </TraceLine>
  );
}

export interface ReasoningProps extends Omit<React.ComponentProps<typeof Trace>, "children"> {
  text: string;
  running?: boolean;
  defaultOpen?: boolean;
  duration?: number | string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  icon?: React.ReactNode;
  title?: string;
}

export function Reasoning({
  text,
  running = false,
  defaultOpen = false,
  duration,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  icon,
  title,
  className,
  ...props
}: ReasoningProps) {
  const [internalOpen, setInternalOpen] = React.useState<boolean>(defaultOpen);

  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      setInternalOpen(nextOpen);
      setControlledOpen?.(nextOpen);
    },
    [setControlledOpen],
  );

  const isOpen = controlledOpen ?? internalOpen;

  const line = <ReasoningLine running={running} duration={duration} icon={icon} title={title} />;

  if (!text) {
    return (
      <Trace className={className} {...props}>
        {line}
      </Trace>
    );
  }

  return (
    <Trace className={className} {...props}>
      <TraceCollapsible open={isOpen} onOpenChange={handleOpenChange}>
        <TraceCollapsibleTrigger>{line}</TraceCollapsibleTrigger>
        <TraceCollapsibleContent className="text-muted-foreground max-h-72 overflow-y-auto whitespace-pre-wrap">
          {text}
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  );
}
