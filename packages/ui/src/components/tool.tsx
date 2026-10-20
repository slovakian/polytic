"use client";

import * as React from "react";
import { WrenchIcon, AlertCircleIcon, Loader2Icon } from "lucide-react";

import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@polytic/ui/components/trace";
import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockTitle,
  CodeBlockCopyButton,
  CodeBlockActions,
} from "@polytic/ui/components/code-block";

export type ToolState =
  | "running"
  | "output-available"
  | "output-error"
  | "approval-requested"
  | "output-denied";

export type ToolJsonPrimitive = string | number | boolean | null | undefined;

export type ToolJsonObject = { [key: string]: ToolJsonValue };

export type ToolJsonArray = ToolJsonValue[];

export type ToolJsonValue = ToolJsonPrimitive | ToolJsonObject | ToolJsonArray;

export interface ToolProps extends React.ComponentProps<typeof Trace> {
  name: string;
  state?: ToolState;
  input?: ToolJsonValue;
  output?: ToolJsonValue;
  errorText?: string;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
}

function formatPayload(value: ToolJsonValue): string {
  if (value === undefined || value === null) {
    return "";
  }

  if (Object.prototype.toString.call(value) === "[object String]") {
    return String(value);
  }

  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

export function Tool({
  name,
  state = "output-available",
  input,
  output,
  errorText,
  defaultOpen = false,
  icon,
  className,
  ...props
}: ToolProps) {
  const isRunning = state === "running";
  const isError = state === "output-error" || Boolean(errorText);
  const isDenied = state === "output-denied";

  const formattedInput = formatPayload(input);
  const formattedOutput = isError ? errorText : formatPayload(output);

  const statusLabel = isRunning ? "Running" : isError ? "Failed" : isDenied ? "Denied" : "Ran";

  const statusType: "running" | "error" | undefined = isRunning
    ? "running"
    : isError
      ? "error"
      : undefined;

  const defaultIcon = isRunning ? (
    <Loader2Icon className="animate-spin text-muted-foreground" />
  ) : isError ? (
    <AlertCircleIcon className="text-destructive" />
  ) : (
    <WrenchIcon className="text-(--hue-4)" />
  );

  const hasDetails = Boolean(formattedInput || formattedOutput);

  if (!hasDetails) {
    return (
      <Trace className={className} {...props}>
        <TraceLine status={statusType}>
          <TraceIcon>{icon ?? defaultIcon}</TraceIcon>
          <TraceTitle>
            {statusLabel} {name}
          </TraceTitle>
        </TraceLine>
      </Trace>
    );
  }

  return (
    <Trace className={className} {...props}>
      <TraceCollapsible defaultOpen={defaultOpen}>
        <TraceCollapsibleTrigger>
          <TraceLine status={statusType}>
            <TraceIcon>{icon ?? defaultIcon}</TraceIcon>
            <TraceTitle>
              {statusLabel} {name}
            </TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent className="flex flex-col gap-2 pt-1">
          {formattedInput ? (
            <CodeBlock size="sm">
              <CodeBlockHeader>
                <CodeBlockTitle>Input</CodeBlockTitle>
                <CodeBlockActions>
                  <CodeBlockCopyButton value={formattedInput} />
                </CodeBlockActions>
              </CodeBlockHeader>
              <CodeBlockContent wrap className="max-h-48 text-xs">
                {formattedInput}
              </CodeBlockContent>
            </CodeBlock>
          ) : null}

          {formattedOutput ? (
            <CodeBlock size="sm" variant={isError ? "destructive" : "default"}>
              <CodeBlockHeader>
                <CodeBlockTitle>{isError ? "Error" : "Output"}</CodeBlockTitle>
                <CodeBlockActions>
                  <CodeBlockCopyButton value={formattedOutput} />
                </CodeBlockActions>
              </CodeBlockHeader>
              <CodeBlockContent wrap className="max-h-60 text-xs">
                {formattedOutput}
              </CodeBlockContent>
            </CodeBlock>
          ) : null}
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  );
}

export { Tool as ToolCall };
