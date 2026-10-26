"use client";

import * as React from "react";
import { FoldVerticalIcon } from "lucide-react";
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
import { Marker, MarkerContent, MarkerIcon } from "@polytic/ui/components/marker";

export interface CompactionLineProps extends React.ComponentProps<typeof TraceLine> {
  running?: boolean;
  tokensSaved?: number;
  duration?: number | string;
  icon?: React.ReactNode;
  title?: string;
}

export function CompactionLine({
  running = false,
  tokensSaved,
  duration,
  icon,
  title,
  className,
  ...props
}: CompactionLineProps) {
  const defaultTitle = running ? "Compacting conversation…" : "Compacted context";
  const displayTitle = title ?? defaultTitle;

  return (
    <TraceLine status={running ? "running" : undefined} className={className} {...props}>
      <TraceIcon>{icon ?? <FoldVerticalIcon className="text-muted-foreground" />}</TraceIcon>
      <TraceTitle className={cn(running && "shimmer")}>{displayTitle}</TraceTitle>
      {tokensSaved !== undefined && !running ? (
        <TraceDescription>{`-${tokensSaved.toLocaleString()} tokens`}</TraceDescription>
      ) : duration && !running ? (
        <TraceDescription>{duration}</TraceDescription>
      ) : null}
    </TraceLine>
  );
}

export interface CompactionDetails {
  before?: number;
  after?: number;
  messagesBefore?: number;
  messagesAfter?: number;
  reusedCheckpoint?: boolean;
  maxTokens?: number;
  durationMs?: number;
  strategyKey?: string;
  reason?: string;
}

export interface CompactionProps extends Omit<React.ComponentProps<typeof Trace>, "children"> {
  running?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  details?: CompactionDetails;
  tokensSaved?: number;
  duration?: number | string;
  icon?: React.ReactNode;
  title?: string;
}

export function Compaction({
  running = false,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  details,
  tokensSaved: explicitTokensSaved,
  duration: explicitDuration,
  icon,
  title,
  className,
  ...props
}: CompactionProps) {
  const [internalOpen, setInternalOpen] = React.useState<boolean | undefined>(defaultOpen);

  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      setInternalOpen(nextOpen);
      setControlledOpen?.(nextOpen);
    },
    [setControlledOpen],
  );

  const isOpen = controlledOpen ?? internalOpen ?? defaultOpen;

  const calculatedTokensSaved =
    explicitTokensSaved ??
    (details?.before !== undefined && details?.after !== undefined
      ? details.before - details.after
      : undefined);

  const calculatedDuration =
    explicitDuration ?? (details?.durationMs ? `${details.durationMs}ms` : undefined);

  const hasDetails =
    details &&
    (details.before !== undefined ||
      details.messagesBefore !== undefined ||
      Boolean(details.strategyKey));

  const line = (
    <CompactionLine
      running={running}
      tokensSaved={calculatedTokensSaved}
      duration={calculatedDuration}
      icon={icon}
      title={title}
    />
  );

  if (running || !hasDetails) {
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
        <TraceCollapsibleContent className="pt-1.5">
          <div className="rounded-lg border border-border/50 bg-muted/30 p-2.5 text-xs">
            <div className="flex flex-col gap-1.5 font-mono text-[11px]">
              {details.before !== undefined && details.after !== undefined ? (
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted-foreground">Tokens</span>
                  <span className="tabular-nums">
                    {details.before.toLocaleString()} → {details.after.toLocaleString()}{" "}
                    {calculatedTokensSaved && calculatedTokensSaved > 0 ? (
                      <span className="font-semibold text-foreground">
                        (-{calculatedTokensSaved.toLocaleString()})
                      </span>
                    ) : null}
                  </span>
                </div>
              ) : null}
              {details.messagesBefore !== undefined && details.messagesAfter !== undefined ? (
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted-foreground">Messages</span>
                  <span className="tabular-nums">
                    {details.messagesBefore} → {details.messagesAfter}
                  </span>
                </div>
              ) : null}
              {details.strategyKey ? (
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted-foreground">Strategy</span>
                  <span className="truncate text-foreground/80">{details.strategyKey}</span>
                </div>
              ) : null}
            </div>
          </div>
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  );
}

export function CompactionMarker({
  label = "Older conversation history compacted to fit model context",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <Marker variant="separator" className={className}>
      <MarkerIcon>
        <FoldVerticalIcon className="text-muted-foreground" />
      </MarkerIcon>
      <MarkerContent>{label}</MarkerContent>
    </Marker>
  );
}
