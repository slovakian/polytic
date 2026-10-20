"use client";

import * as React from "react";
import {
  ClockIcon,
  XIcon,
  CircleIcon,
  CircleDotIcon,
  CheckCircle2Icon,
  ListTodoIcon,
} from "lucide-react";
import { cn } from "@polytic/ui/lib/utils";

import { Button } from "@polytic/ui/components/button";
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@polytic/ui/components/trace";

export interface QueueMessageItem {
  id: string;
  text?: string;
  status?: "pending" | "processing" | "cancelled";
}

export interface QueueProps extends React.ComponentProps<typeof Trace> {
  items: ReadonlyArray<QueueMessageItem>;
  onCancel?: (id: string) => void;
  title?: string;
  defaultOpen?: boolean;
}

export function Queue({
  items,
  onCancel,
  title,
  defaultOpen = true,
  className,
  ...props
}: QueueProps) {
  if (!items || items.length === 0) return null;

  const count = items.length;
  const label = title ?? `${count} queued ${count === 1 ? "message" : "messages"}`;

  return (
    <Trace className={cn("w-full", className)} {...props}>
      <TraceCollapsible defaultOpen={defaultOpen}>
        <TraceCollapsibleTrigger>
          <TraceLine status="pending">
            <TraceIcon>
              <ListTodoIcon className="text-muted-foreground" />
            </TraceIcon>
            <TraceTitle className="text-xs font-medium text-muted-foreground">{label}</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent className="flex flex-col gap-1.5 pt-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-3 rounded-lg border border-border/50 bg-muted/30 px-3 py-2 text-xs"
            >
              <div className="flex min-w-0 items-center gap-2">
                <ClockIcon className="size-3.5 shrink-0 text-muted-foreground" />
                <span className="truncate text-foreground/80">
                  {item.text || "Pending message"}
                </span>
              </div>
              {onCancel ? (
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label="Cancel queued message"
                  className="size-5 shrink-0 text-muted-foreground hover:text-destructive"
                  onClick={() => onCancel(item.id)}
                >
                  <XIcon className="size-3" />
                </Button>
              ) : null}
            </div>
          ))}
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  );
}

export interface TodoItem {
  content: string;
  status: "pending" | "in_progress" | "completed";
}

export function TodoQueue({
  todos,
  streaming = false,
  className,
}: {
  todos: TodoItem[];
  streaming?: boolean;
  className?: string;
}) {
  const pending = todos.filter((t) => t.status !== "completed");
  const completed = todos.filter((t) => t.status === "completed");

  return (
    <Trace className={className}>
      {pending.length > 0 && (
        <TraceCollapsible defaultOpen>
          <TraceCollapsibleTrigger>
            <TraceLine>
              <TraceIcon>
                <ListTodoIcon />
              </TraceIcon>
              <TraceTitle>{pending.length} to do</TraceTitle>
            </TraceLine>
          </TraceCollapsibleTrigger>
          <TraceCollapsibleContent className="space-y-1 pt-1">
            {pending.map((todo) => (
              <TraceLine
                key={todo.content}
                status={streaming && todo.status === "in_progress" ? "running" : undefined}
              >
                <TraceIcon>
                  {todo.status === "in_progress" ? (
                    <CircleDotIcon className="text-primary animate-pulse" />
                  ) : (
                    <CircleIcon className="text-muted-foreground" />
                  )}
                </TraceIcon>
                <TraceTitle>{todo.content}</TraceTitle>
              </TraceLine>
            ))}
          </TraceCollapsibleContent>
        </TraceCollapsible>
      )}

      {completed.length > 0 && (
        <TraceCollapsible defaultOpen={false}>
          <TraceCollapsibleTrigger>
            <TraceLine>
              <TraceIcon>
                <CheckCircle2Icon className="text-emerald-500" />
              </TraceIcon>
              <TraceTitle>{completed.length} completed</TraceTitle>
            </TraceLine>
          </TraceCollapsibleTrigger>
          <TraceCollapsibleContent className="space-y-1 pt-1">
            {completed.map((todo) => (
              <TraceLine key={todo.content}>
                <TraceIcon>
                  <CheckCircle2Icon className="text-emerald-500" />
                </TraceIcon>
                <TraceTitle className="line-through opacity-70">{todo.content}</TraceTitle>
              </TraceLine>
            ))}
          </TraceCollapsibleContent>
        </TraceCollapsible>
      )}
    </Trace>
  );
}
