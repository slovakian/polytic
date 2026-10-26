import { Button } from "@polytic/ui/components/button";
import {
  Compaction,
  CompactionLine,
  type CompactionDetails,
} from "@polytic/ui/components/compaction";
import { Confirmation } from "@polytic/ui/components/confirmation";
import { Message, MessageContent, MessageFooter } from "@polytic/ui/components/message";
import { Reasoning, ReasoningLine } from "@polytic/ui/components/reasoning";
import { Sources } from "@polytic/ui/components/sources";
import { Tool } from "@polytic/ui/components/tool";
import { Tooltip, TooltipContent, TooltipTrigger } from "@polytic/ui/components/tooltip";
import { Trace } from "@polytic/ui/components/trace";
import type { UIMessage } from "@tanstack/ai-react";
import { TextPart } from "@tanstack/ai-react/ui";
import { CheckIcon, CopyIcon, RefreshCwIcon } from "lucide-react";
import { type ComponentProps, useEffect, useState } from "react";

import { parseMessageSuggestions } from "../../lib/suggestions";
import { getToolLabel } from "../../lib/tool-labels";

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
  const text = messageText(message);

  return (
    <Message align="end">
      <MessageContent className="items-end">
        <div
          title={text}
          className="user-message-clamped font-serif max-w-xl text-right text-base leading-relaxed text-foreground"
        >
          {text}
        </div>
      </MessageContent>
    </Message>
  );
}

export interface MessageCompactionState extends CompactionDetails {
  status: "idle" | "running" | "done";
  tokensSaved?: number;
}

export function AssistantMessage({
  message,
  streaming,
  onRetry,
  onToolApproval,
  compaction,
}: {
  message: UIMessage;
  streaming: boolean;
  onRetry?: () => void;
  onToolApproval?: (id: string, approved: boolean) => void;
  compaction?: MessageCompactionState;
}) {
  const text = messageText(message);

  const textStarted = message.parts.some(
    (part) => part.type === "text" && parseMessageSuggestions(part.content).text,
  );

  const hasVisibleParts = message.parts.some(
    (part) =>
      (part.type === "thinking" && part.content) ||
      (part.type === "text" && part.content) ||
      part.type === "tool-call" ||
      part.type === "tool-result",
  );

  if (streaming && !hasVisibleParts) {
    return (
      <Message>
        <MessageContent className="gap-3">
          <Trace>
            {compaction?.status === "running" ? (
              <CompactionLine running />
            ) : (
              <ReasoningLine running />
            )}
          </Trace>
        </MessageContent>
      </Message>
    );
  }

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
        {compaction && compaction.status !== "idle" ? (
          <Compaction
            running={compaction.status === "running"}
            details={compaction}
            tokensSaved={compaction.tokensSaved}
          />
        ) : null}
        {sources.length > 0 ? <Sources sources={sources} /> : null}

        {message.parts.map((part, index) => {
          if (part.type === "thinking") {
            const hasNextParts = index < message.parts.length - 1;
            const isRunning = streaming && !textStarted && !hasNextParts;

            return (
              <Reasoning key={index} text={part.content} running={isRunning} defaultOpen={false} />
            );
          }

          if (part.type === "tool-call") {
            const result = toolResults.get(part.id);
            const approval = "approval" in part ? part.approval : undefined;
            const needsApproval = approval?.needsApproval;
            const approvalState = approval?.approved;
            const label = getToolLabel(part.name);

            // If approval is requested and not yet answered, render Confirmation prompt
            if (needsApproval && approvalState === undefined) {
              return (
                <Confirmation
                  key={part.id || index}
                  toolName={part.name}
                  toolLabel={label}
                  status="pending"
                  onApprove={onToolApproval ? () => onToolApproval(approval.id, true) : undefined}
                  onDeny={onToolApproval ? () => onToolApproval(approval.id, false) : undefined}
                />
              );
            }

            // If approval was denied, render denied confirmation trace
            if (needsApproval && approvalState === false) {
              return (
                <Confirmation
                  key={part.id || index}
                  toolName={part.name}
                  toolLabel={label}
                  status="denied"
                />
              );
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
                label={label}
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
                className="chat-markdown typeset"
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

export function PendingMessage({ isCompacting = false }: { isCompacting?: boolean }) {
  return (
    <Message>
      <MessageContent>
        <Trace>{isCompacting ? <CompactionLine running /> : <ReasoningLine running />}</Trace>
      </MessageContent>
    </Message>
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
