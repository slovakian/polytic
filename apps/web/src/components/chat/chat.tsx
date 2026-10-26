import { Alert, AlertAction, AlertDescription, AlertTitle } from "@polytic/ui/components/alert";
import { Button } from "@polytic/ui/components/button";
import { CompactionMarker } from "@polytic/ui/components/compaction";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@polytic/ui/components/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@polytic/ui/components/input-group";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@polytic/ui/components/message-scroller";
import { Queue } from "@polytic/ui/components/queue";
import { Skeleton } from "@polytic/ui/components/skeleton";
import { Suggestion, Suggestions } from "@polytic/ui/components/suggestion";
import { cn } from "@polytic/ui/lib/utils";
import { fetchServerSentEvents, localStoragePersistence, useChat } from "@tanstack/ai-react";
import {
  ArrowUpIcon,
  CompassIcon,
  MessageCircleQuestionIcon,
  ScaleIcon,
  SquareIcon,
  SwordsIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { type FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  compactionEndedSchema,
  compactionStartedSchema,
  compactionStateSchema,
} from "@/lib/compaction";
import { type ChatModelId, DEFAULT_CHAT_MODEL } from "@/lib/models";
import { parseMessageSuggestions } from "@/lib/suggestions";

import { chatStore } from "./chat-context";
import {
  AssistantMessage,
  type MessageCompactionState,
  PendingMessage,
  UserMessage,
} from "./chat-message";
import { ModelPicker } from "./model-picker";

const connection = fetchServerSentEvents("/api/chat");
const persistence = localStoragePersistence();

const STARTERS = [
  { icon: SwordsIcon, text: "Grill me on my politics" },
  { icon: CompassIcon, text: "Where do I fit beyond left and right?" },
  { icon: ScaleIcon, text: "Steelman the view I disagree with most" },
  {
    icon: MessageCircleQuestionIcon,
    text: "What separates a liberal from a libertarian?",
  },
];

export function Chat() {
  const [model, setModel] = useState<ChatModelId>(DEFAULT_CHAT_MODEL);
  const [draft, setDraft] = useState("");

  const [compactionState, setCompactionState] = useState<MessageCompactionState>({
    status: "idle",
  });

  const formRef = useRef<HTMLFormElement>(null);
  const body = useMemo(() => ({ model }), [model]);

  const {
    messages,
    sendMessage,
    stop,
    reload: baseReload,
    clear: baseClear,
    error,
    status,
    isHydrating,
    queue,
    cancelQueued,
    addToolApprovalResponse,
  } = useChat({
    threadId: "polytic-chat",
    connection,
    persistence,
    body,
    onCustomEvent: (eventType, data) => {
      if (eventType === "compaction:started") {
        const parsed = compactionStartedSchema.safeParse(data);

        if (parsed.success) {
          const payload = parsed.data;

          setCompactionState({
            status: "running",
            before: payload.before,
            messagesBefore: payload.messagesBefore,
            maxTokens: payload.maxTokens,
            strategyKey: payload.strategyKey,
            reason: payload.reason,
          });
        }
      } else if (eventType === "compaction:state") {
        const parsed = compactionStateSchema.safeParse(data);

        if (parsed.success) {
          const payload = parsed.data;

          setCompactionState((prev) => {
            const before = payload.before ?? prev.before;
            const after = payload.after ?? prev.after;

            return {
              ...prev,
              status: "running",
              before,
              after,
              messagesBefore: payload.messagesBefore ?? prev.messagesBefore,
              messagesAfter: payload.messagesAfter ?? prev.messagesAfter,
              maxTokens: payload.maxTokens ?? prev.maxTokens,
              strategyKey: payload.strategyKey ?? prev.strategyKey,
              tokensSaved: before !== undefined && after !== undefined ? before - after : undefined,
            };
          });
        }
      } else if (eventType === "compaction:ended") {
        const parsed = compactionEndedSchema.safeParse(data);

        if (parsed.success) {
          const payload = parsed.data;

          setCompactionState((prev) => {
            const after = payload.after ?? prev.after;
            const before = prev.before;

            return {
              ...prev,
              status: "done",
              after,
              messagesAfter: payload.messagesAfter ?? prev.messagesAfter,
              durationMs: payload.durationMs ?? prev.durationMs,
              strategyKey: payload.strategyKey ?? prev.strategyKey,
              reason: payload.reason ?? prev.reason,
              tokensSaved: before !== undefined && after !== undefined ? before - after : undefined,
            };
          });
        }
      }
    },
  });

  const clear = useCallback(() => {
    setCompactionState({ status: "idle" });
    baseClear();
  }, [baseClear]);

  function reload() {
    setCompactionState({ status: "idle" });

    return baseReload();
  }

  const busy = status === "submitted" || status === "streaming";
  const hasText = draft.trim().length > 0;
  const canSend = hasText && !busy;
  const last = messages.at(-1);

  useEffect(() => {
    chatStore.setActions({
      canReset: messages.length > 0,
      busy,
      reset: clear,
    });
  }, [messages.length, busy, clear]);

  useEffect(() => {
    return () => {
      chatStore.setActions({
        canReset: false,
        busy: false,
        reset: () => {},
      });
    };
  }, []);

  const latestSuggestions = useMemo(() => {
    if (!last || last.role !== "assistant" || busy) {
      return [];
    }

    const raw = last.parts
      .flatMap((part) => (part.type === "text" ? [part.content] : []))
      .join("\n\n");

    return parseMessageSuggestions(raw).suggestions;
  }, [last, busy]);

  function send(text: string) {
    setCompactionState({ status: "idle" });
    void sendMessage(text);
    setDraft("");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (canSend) {
      send(draft.trim());
    }
  }

  const composer = (
    <form ref={formRef} onSubmit={onSubmit} className="flex w-full flex-col gap-2">
      <InputGroup variant="ghost" className="font-serif pt-3 sm:pt-4">
        <InputGroupTextarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Say what you believe, or ask to be grilled…"
          aria-label="Message"
          className={cn(
            "font-serif text-base md:text-base leading-relaxed max-h-48 min-h-14 p-0 placeholder:font-serif placeholder:text-muted-foreground/50 focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0",
            "transition-opacity duration-200 motion-reduce:transition-none",
            "group-hover/input-group:opacity-100 group-focus-within/input-group:opacity-100 group-has-[:focus-visible]/input-group:opacity-100 focus:opacity-100 focus-visible:opacity-100",
            hasText ? "opacity-100" : "opacity-60",
          )}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
              event.preventDefault();
              formRef.current?.requestSubmit();
            }
          }}
        />
        <InputGroupAddon
          align="block-end"
          className="relative flex w-full items-center justify-between px-0 pt-2 pb-0"
        >
          <div className="flex-1 min-w-0" aria-hidden="true" />
          <div className="flex shrink-0 items-center justify-center">
            <ModelPicker value={model} onValueChange={setModel} />
          </div>
          <div className="flex flex-1 items-center justify-end min-w-0">
            {busy ? (
              <InputGroupButton
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label="Stop"
                onClick={stop}
              >
                <SquareIcon className="fill-current" />
              </InputGroupButton>
            ) : hasText ? (
              <InputGroupButton
                type="submit"
                variant="ghost"
                size="icon-sm"
                aria-label="Send"
                disabled={!canSend}
                className="transition-opacity duration-150 animate-in fade-in-0"
              >
                <ArrowUpIcon />
              </InputGroupButton>
            ) : null}
          </div>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );

  if (isHydrating) {
    return (
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-10">
        <Skeleton className="h-10 w-2/3 self-end" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="relative flex min-h-0 min-w-0 flex-1 flex-col items-center justify-center overflow-hidden px-4 py-10">
        <div className="relative flex w-full max-w-2xl min-w-0 flex-col items-center gap-8">
          <Empty className="p-0">
            <EmptyHeader className="max-w-md">
              <EmptyMedia variant="icon" className="bg-muted text-foreground">
                <CompassIcon />
              </EmptyMedia>
              <EmptyTitle className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                What do you actually believe?
              </EmptyTitle>
              <EmptyDescription className="font-serif text-base">
                Polytic asks, challenges, and reasons with you until your politics have words. It
                maps where you stand and never tells you where to stand.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
          {composer}
          <Suggestions wrap className="w-full justify-center">
            {STARTERS.map((starter) => (
              <Suggestion
                key={starter.text}
                variant="outline"
                size="sm"
                className="font-serif"
                onClick={() => send(starter.text)}
              >
                <starter.icon data-icon="inline-start" className="text-muted-foreground" />
                {starter.text}
              </Suggestion>
            ))}
          </Suggestions>
        </div>
      </div>
    );
  }

  return (
    <MessageScrollerProvider autoScroll>
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <MessageScroller className="flex-1">
          <MessageScrollerViewport>
            <MessageScrollerContent
              aria-busy={busy}
              className="mx-auto w-full max-w-3xl gap-8 px-4 py-10"
            >
              {compactionState.messagesBefore !== undefined &&
              compactionState.messagesAfter !== undefined &&
              compactionState.messagesBefore > compactionState.messagesAfter ? (
                <MessageScrollerItem messageId="compaction-marker">
                  <CompactionMarker
                    label={`Earlier history (${compactionState.messagesBefore - compactionState.messagesAfter} messages) compacted to fit model context`}
                  />
                </MessageScrollerItem>
              ) : null}
              {messages.map((message) => (
                <MessageScrollerItem
                  key={message.id}
                  messageId={message.id}
                  scrollAnchor={message.role === "user"}
                >
                  {message.role === "user" ? (
                    <UserMessage message={message} />
                  ) : (
                    <AssistantMessage
                      message={message}
                      streaming={busy && message === last}
                      compaction={message === last ? compactionState : undefined}
                      onRetry={message === last ? () => void reload() : undefined}
                      onToolApproval={(id, approved) =>
                        void addToolApprovalResponse({ id, approved })
                      }
                    />
                  )}
                </MessageScrollerItem>
              ))}
              {status === "submitted" && last?.role === "user" ? (
                <MessageScrollerItem messageId="pending">
                  <PendingMessage isCompacting={compactionState.status === "running"} />
                </MessageScrollerItem>
              ) : null}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
        <div className="mx-auto flex w-full max-w-3xl min-w-0 flex-col gap-3 px-4 pb-4">
          {queue.length > 0 ? (
            <Queue
              items={queue.map((item) => ({
                id: item.id,
                text:
                  Object.prototype.toString.call(item.content) === "[object String]"
                    ? String(item.content)
                    : "Queued message",
                status: "pending",
              }))}
              onCancel={cancelQueued}
            />
          ) : null}
          {error ? (
            <Alert variant="destructive">
              <TriangleAlertIcon />
              <AlertTitle>The model didn&apos;t answer</AlertTitle>
              <AlertDescription>
                {error.message || "Something went wrong."} Try again or pick another model.
              </AlertDescription>
              <AlertAction>
                <Button variant="outline" size="sm" onClick={() => void reload()}>
                  Retry
                </Button>
              </AlertAction>
            </Alert>
          ) : null}
          {latestSuggestions.length > 0 ? (
            <Suggestions className="w-full">
              {latestSuggestions.map((suggestion) => (
                <Suggestion
                  key={suggestion}
                  variant="outline"
                  size="sm"
                  className="font-serif"
                  onClick={() => send(suggestion)}
                >
                  {suggestion}
                </Suggestion>
              ))}
            </Suggestions>
          ) : null}
          {composer}
        </div>
      </div>
    </MessageScrollerProvider>
  );
}
