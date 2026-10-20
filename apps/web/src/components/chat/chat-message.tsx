import { Bubble, BubbleContent } from "@polytic/ui/components/bubble";
import { Button } from "@polytic/ui/components/button";
import { Confirmation } from "@polytic/ui/components/confirmation";
import { Message, MessageContent, MessageFooter } from "@polytic/ui/components/message";
import { Sources } from "@polytic/ui/components/sources";
import { Tool } from "@polytic/ui/components/tool";
import { Tooltip, TooltipContent, TooltipTrigger } from "@polytic/ui/components/tooltip";
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@polytic/ui/components/trace";
import type { UIMessage } from "@tanstack/ai-react";
import { TextPart } from "@tanstack/ai-react/ui";
import { BrainIcon, CheckIcon, CopyIcon, RefreshCwIcon } from "lucide-react";
import { type ComponentProps, useEffect, useState } from "react";

import { parseMessageSuggestions } from "@/lib/suggestions";

import { fadeMarkdownComponents } from "./fade-markdown";

function messageText(message: UIMessage) {
  return message.parts
    .flatMap((part) => (part.type === "text" ? [parseMessageSuggestions(part.content).text] : []))
    .join("\n\n");
}

function safeParse(text?: string) {
  if (!text) {
    return undefined;
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export function UserMessage({ message }: { message: UIMessage }) {
  return (
    <Message align="end">
      <MessageContent>
        <Bubble align="end" variant="muted">
          <BubbleContent className="whitespace-pre-wrap">{messageText(message)}</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  );
}

export function AssistantMessage({
  message,
  streaming,
  onRetry,
  onToolApproval,
}: {
  message: UIMessage;
  streaming: boolean;
  onRetry?: () => void;
  onToolApproval?: (id: string, approved: boolean) => void;
}) {
  const text = messageText(message);

  const textStarted = message.parts.some(
    (part) => part.type === "text" && parseMessageSuggestions(part.content).text,
  );

  const toolResults = new Map<string, { output?: unknown; errorText?: string; state?: string }>();

  for (const part of message.parts) {
    if (part.type === "tool-result") {
      const key = part.toolCallId || part.id;

      if (key) {
        toolResults.set(key, {
          output: part.content,
          errorText: part.error,
          state: part.state,
        });
      }
    }
  }

  const sources: Array<{ url: string; title?: string }> = [];

  for (const part of message.parts) {
    if ("url" in part && Object.prototype.toString.call(part.url) === "[object String]") {
      const title =
        "title" in part && Object.prototype.toString.call(part.title) === "[object String]"
          ? String(part.title)
          : undefined;

      sources.push({ url: String(part.url), title });
    }
  }

  return (
    <Message>
      <MessageContent className="gap-3">
        {sources.length > 0 ? <Sources sources={sources} /> : null}

        {message.parts.map((part, index) => {
          if (part.type === "thinking") {
            return (
              <Trace key={index}>
                <ReasoningRow text={part.content} running={streaming && !textStarted} />
              </Trace>
            );
          }

          if (part.type === "tool-call") {
            const result = toolResults.get(part.id);
            const approval = "approval" in part ? part.approval : undefined;
            const needsApproval = approval?.needsApproval;
            const approvalState = approval?.approved;

            // If approval is requested and not yet answered, render Confirmation prompt
            if (needsApproval && approvalState === undefined) {
              return (
                <Confirmation
                  key={part.id || index}
                  toolName={part.name}
                  status="pending"
                  onApprove={onToolApproval ? () => onToolApproval(approval.id, true) : undefined}
                  onDeny={onToolApproval ? () => onToolApproval(approval.id, false) : undefined}
                />
              );
            }

            // If approval was denied, render denied confirmation trace
            if (needsApproval && approvalState === false) {
              return <Confirmation key={part.id || index} toolName={part.name} status="denied" />;
            }

            const input = part.input ?? safeParse(part.arguments);
            const output = result?.output ?? part.output;
            const errorText = result?.errorText;

            const isError =
              result?.state === "error" || result?.state === "output-error" || Boolean(errorText);

            return (
              <Tool
                key={part.id || index}
                name={part.name}
                input={input}
                output={output}
                errorText={errorText}
                state={
                  isError
                    ? "output-error"
                    : result || output !== undefined
                      ? "output-available"
                      : streaming
                        ? "running"
                        : "output-available"
                }
              />
            );
          }

          if (part.type === "text" && part.content) {
            const cleanContent = parseMessageSuggestions(part.content).text;

            if (!cleanContent) {
              return null;
            }

            return (
              <TextPart
                key={index}
                content={cleanContent}
                className="chat-markdown"
                components={streaming ? fadeMarkdownComponents : undefined}
              />
            );
          }

          return null;
        })}
        {!streaming && text ? (
          <MessageFooter className="px-0">
            <CopyAction text={text} />
            {onRetry ? (
              <MessageAction label="Retry" onClick={onRetry}>
                <RefreshCwIcon />
              </MessageAction>
            ) : null}
          </MessageFooter>
        ) : null}
      </MessageContent>
    </Message>
  );
}

export function PendingMessage() {
  return (
    <Message>
      <MessageContent>
        <Trace>
          <ThinkingLine running />
        </Trace>
      </MessageContent>
    </Message>
  );
}

function ThinkingLine({ running }: { running: boolean }) {
  return (
    <TraceLine status={running ? "running" : undefined}>
      <TraceIcon>
        <BrainIcon className="text-(--hue-5)" />
      </TraceIcon>
      <TraceTitle>{running ? "Thinking" : "Thought"}</TraceTitle>
    </TraceLine>
  );
}

function ReasoningRow({ text, running }: { text: string; running: boolean }) {
  const [open, setOpen] = useState<boolean>();

  if (!text) {
    return <ThinkingLine running={running} />;
  }

  return (
    <TraceCollapsible open={open ?? running} onOpenChange={setOpen}>
      <TraceCollapsibleTrigger>
        <ThinkingLine running={running} />
      </TraceCollapsibleTrigger>
      <TraceCollapsibleContent className="text-muted-foreground max-h-72 overflow-y-auto whitespace-pre-wrap">
        {text}
      </TraceCollapsibleContent>
    </TraceCollapsible>
  );
}

function CopyAction({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = setTimeout(() => setCopied(false), 2000);

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <MessageAction
      label={copied ? "Copied" : "Copy"}
      onClick={() => {
        void navigator.clipboard.writeText(text).then(() => setCopied(true));
      }}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </MessageAction>
  );
}

function MessageAction({
  label,
  children,
  ...props
}: ComponentProps<typeof Button> & { label: string }) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={<Button variant="ghost" size="icon-sm" aria-label={label} {...props} />}
      >
        {children}
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}
