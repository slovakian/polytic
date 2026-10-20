import { Alert, AlertAction, AlertDescription, AlertTitle } from "@polytic/ui/components/alert";
import { Button } from "@polytic/ui/components/button";
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
import { Tooltip, TooltipContent, TooltipTrigger } from "@polytic/ui/components/tooltip";
import { fetchServerSentEvents, localStoragePersistence, useChat } from "@tanstack/ai-react";
import {
  ArrowUpIcon,
  CompassIcon,
  MessageCircleQuestionIcon,
  ScaleIcon,
  SquareIcon,
  SquarePenIcon,
  SwordsIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { type FormEvent, useMemo, useRef, useState } from "react";

import { type ChatModelId, DEFAULT_CHAT_MODEL } from "@/lib/models";

import { AssistantMessage, PendingMessage, UserMessage } from "./chat-message";
import { ModelPicker } from "./model-picker";

const connection = fetchServerSentEvents("/api/chat");
const persistence = localStoragePersistence();

const STARTERS = [
  { icon: SwordsIcon, hue: "text-(--hue-1)", text: "Grill me on my politics" },
  { icon: CompassIcon, hue: "text-(--hue-3)", text: "Where do I fit beyond left and right?" },
  { icon: ScaleIcon, hue: "text-(--hue-4)", text: "Steelman the view I disagree with most" },
  {
    icon: MessageCircleQuestionIcon,
    hue: "text-(--hue-6)",
    text: "What separates a liberal from a libertarian?",
  },
];

export function Chat() {
  const [model, setModel] = useState<ChatModelId>(DEFAULT_CHAT_MODEL);
  const [draft, setDraft] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const body = useMemo(() => ({ model }), [model]);

  const {
    messages,
    sendMessage,
    stop,
    reload,
    clear,
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
  });

  const busy = status === "submitted" || status === "streaming";
  const canSend = draft.trim().length > 0 && !busy;
  const last = messages.at(-1);

  function send(text: string) {
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
      <InputGroup className="bg-card shadow-lg shadow-black/20">
        <InputGroupTextarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Say what you believe, or ask to be grilled…"
          aria-label="Message"
          className="max-h-48 min-h-14 p-4"
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
              event.preventDefault();
              formRef.current?.requestSubmit();
            }
          }}
        />
        <InputGroupAddon align="block-end" className="pt-1">
          {messages.length > 0 ? (
            <Tooltip>
              <TooltipTrigger
                render={
                  <InputGroupButton
                    type="button"
                    size="icon-sm"
                    aria-label="New chat"
                    disabled={busy}
                    onClick={clear}
                  />
                }
              >
                <SquarePenIcon />
              </TooltipTrigger>
              <TooltipContent>
                <p>New chat</p>
              </TooltipContent>
            </Tooltip>
          ) : null}
          <ModelPicker value={model} onValueChange={setModel} />
          {busy ? (
            <InputGroupButton
              type="button"
              variant="secondary"
              size="icon-sm"
              className="ml-auto"
              aria-label="Stop"
              onClick={stop}
            >
              <SquareIcon className="fill-current" />
            </InputGroupButton>
          ) : (
            <InputGroupButton
              type="submit"
              variant="default"
              size="icon-sm"
              className="ml-auto"
              aria-label="Send"
              disabled={!canSend}
            >
              <ArrowUpIcon />
            </InputGroupButton>
          )}
        </InputGroupAddon>
      </InputGroup>
      <p className="text-muted-foreground px-2 text-center text-xs">
        Polytic doesn&apos;t store your chats. Messages go to free third-party AI models, some of
        which may log them.
      </p>
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
      <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden px-4 py-10">
        <div
          aria-hidden
          className="bg-aurora pointer-events-none absolute inset-x-0 top-0 h-2/3 opacity-60"
        />
        <div className="relative flex w-full max-w-2xl flex-col items-center gap-8">
          <Empty className="p-0">
            <EmptyHeader className="max-w-md">
              <EmptyMedia variant="icon" className="bg-spectrum text-background">
                <CompassIcon />
              </EmptyMedia>
              <EmptyTitle className="text-3xl font-semibold tracking-tight sm:text-4xl">
                What do you <span className="text-spectrum">actually</span> believe?
              </EmptyTitle>
              <EmptyDescription className="text-base">
                Polytic asks, challenges, and reasons with you until your politics have words. It
                maps where you stand and never tells you where to stand.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
          {composer}
          <Suggestions className="w-full justify-center">
            {STARTERS.map((starter) => (
              <Suggestion
                key={starter.text}
                variant="outline"
                size="sm"
                onClick={() => send(starter.text)}
              >
                <starter.icon data-icon="inline-start" className={starter.hue} />
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
      <div className="flex min-h-0 flex-1 flex-col">
        <MessageScroller className="flex-1">
          <MessageScrollerViewport>
            <MessageScrollerContent
              aria-busy={busy}
              className="mx-auto w-full max-w-3xl gap-8 px-4 py-10"
            >
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
                  <PendingMessage />
                </MessageScrollerItem>
              ) : null}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-4 pb-4">
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
          {composer}
        </div>
      </div>
    </MessageScrollerProvider>
  );
}
