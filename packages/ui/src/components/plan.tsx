"use client";

import * as React from "react";
import { CircleCheckIcon, CircleDotIcon, CircleIcon, RouteIcon } from "lucide-react";
import { cn } from "@polytic/ui/lib/utils";

import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@polytic/ui/components/trace";

export type PlanStepStatus = "done" | "running" | "pending";

export interface PlanStepItem {
  title: string;
  status: PlanStepStatus;
}

export interface PlanProps extends React.ComponentProps<typeof Trace> {
  title?: string;
  steps: PlanStepItem[];
  defaultOpen?: boolean;
}

export function Plan({
  title = "Plan",
  steps,
  defaultOpen = true,
  className,
  ...props
}: PlanProps) {
  if (!steps || steps.length === 0) return null;

  const completedCount = steps.filter((s) => s.status === "done").length;

  return (
    <Trace className={className} {...props}>
      <TraceCollapsible defaultOpen={defaultOpen}>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <RouteIcon className="text-(--hue-2)" />
            </TraceIcon>
            <TraceTitle>
              {title} ({completedCount}/{steps.length})
            </TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent className="space-y-1 pt-1">
          <Trace className="gap-1">
            {steps.map((step, index) => {
              const isDone = step.status === "done";
              const isRunning = step.status === "running";

              return (
                <TraceLine key={index} status={isRunning ? "running" : undefined}>
                  <TraceIcon>
                    {isDone ? (
                      <CircleCheckIcon className="text-emerald-500" />
                    ) : isRunning ? (
                      <CircleDotIcon className="text-primary animate-pulse" />
                    ) : (
                      <CircleIcon className="text-muted-foreground" />
                    )}
                  </TraceIcon>
                  <TraceTitle className={cn(isDone && "line-through opacity-70")}>
                    {step.title}
                  </TraceTitle>
                </TraceLine>
              );
            })}
          </Trace>
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  );
}
