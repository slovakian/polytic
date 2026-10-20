import { Bubble, BubbleContent } from "@polytic/ui/components/bubble";
import { Button } from "@polytic/ui/components/button";
import { Message, MessageContent, MessageFooter } from "@polytic/ui/components/message";
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

function messageText(message: UIMessage) {
  return message.parts.flatMap((part) => (part.type === "text" ? [part.content] : [])).join("\n\n");
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
}: {
  message: UIMessage;
  streaming: boolean;
  onRetry?: () => void;
}) {
  const text = messageText(message);
  const textStarted = message.parts.some((part) => part.type === "text" && part.content);

  return (
    <Message>
      <MessageContent className="gap-3">
        {message.parts.map((part, index) => {
          if (part.type === "thinking") {
            return (
              <Trace key={index}>
                <ReasoningRow text={part.content} running={streaming && !textStarted} />
              </Trace>
            );
          }

          if (part.type === "text" && part.content) {
            return <TextPart key={index} content={part.content} className="chat-markdown" />;
          }

          return null;
        })}
        {!streaming && text ? (
          <MessageFooter className="-ms-2 px-0">
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
