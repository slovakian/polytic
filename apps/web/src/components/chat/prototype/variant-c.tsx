import { Button } from "@polytic/ui/components/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@polytic/ui/components/input-group";
import { cn } from "@polytic/ui/lib/utils";
import {
  AlertCircleIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  ChevronUpIcon,
  CompassIcon,
  FlameIcon,
  MessageSquareIcon,
  ShieldAlertIcon,
} from "lucide-react";
import { type FormEvent, useRef, useState } from "react";

import { ModelPicker } from "../model-picker";
import { ResultPreview } from "./result-preview";
import type { useGrillingSession } from "./use-grilling-session";

export function VariantC({ session }: { session: ReturnType<typeof useGrillingSession> }) {
  const {
    chapters,
    activeChapterIndex,
    viewedChapterIndex,
    currentViewedChapter,
    isViewingHistory,
    draft,
    setDraft,
    activeTension,
    resultUnlocked,
    resultData,
    goToChapter,
    jumpToActive,
    sendMessage,
    triageTension,
    returnToChatWithTopic,
  } = session;

  const [model, setModel] = useState<any>("openrouter/free");
  const [triageDrawerOpen, setTriageDrawerOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"chat" | "result">("chat");
  const formRef = useRef<HTMLFormElement>(null);
  const hasText = draft.trim().length > 0;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (hasText && !isViewingHistory) {
      sendMessage(draft);
    }
  };

  const latestSuggestions =
    currentViewedChapter.messages.at(-1)?.suggestions ?? [];

  return (
    <div className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-background">
      {/* 1. Cockpit Header Mode Switcher (Grilling Stage vs Result Card) */}
      <div className="z-10 flex shrink-0 items-center justify-between border-b border-border/40 bg-background/95 px-4 py-2 backdrop-blur-md">
        <div className="flex items-center gap-1 rounded-xl bg-muted/70 p-1">
          <button
            onClick={() => setActiveTab("chat")}
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-3 py-1 font-serif text-xs transition-colors",
              activeTab === "chat"
                ? "bg-background text-foreground font-semibold shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <MessageSquareIcon className="size-3.5" />
            <span>Grilling Stage ({activeChapterIndex + 1}/{chapters.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("result")}
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-3 py-1 font-serif text-xs transition-colors",
              activeTab === "result"
                ? "bg-amber-500 text-black font-semibold shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <CompassIcon className="size-3.5" />
            <span>Result Map</span>
            {resultUnlocked && (
              <span className="flex size-2 rounded-full bg-amber-400 animate-ping" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-2">
          {activeTension && activeTension.status === "unresolved" && (
            <button
              onClick={() => setTriageDrawerOpen(!triageDrawerOpen)}
              className="flex items-center gap-1.5 rounded-full border border-amber-500/50 bg-amber-500/10 px-2.5 py-1 text-[11px] font-mono font-semibold text-amber-600 dark:text-amber-400 hover:bg-amber-500/20"
            >
              <AlertCircleIcon className="size-3 text-amber-500" />
              <span>1 Active Tension</span>
              {triageDrawerOpen ? <ChevronDownIcon className="size-3" /> : <ChevronUpIcon className="size-3" />}
            </button>
          )}
        </div>
      </div>

      {activeTab === "result" ? (
        <ResultPreview
          result={resultData}
          onClose={() => setActiveTab("chat")}
          onContinueGrilling={(topic) => {
            setActiveTab("chat");
            returnToChatWithTopic(topic);
          }}
        />
      ) : (
        <div className="flex min-h-0 min-w-0 flex-1 overflow-hidden">
          {/* 2. Left Stage Navigator Sidebar (Desktop) */}
          <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border/40 bg-card/30 p-4">
            <div className="flex items-center justify-between pb-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <span>Diagnostic Pipeline</span>
              <span className="font-semibold">{chapters.length} Stages</span>
            </div>

            <div className="flex flex-col gap-2 overflow-y-auto">
              {chapters.map((chap, idx) => {
                const isViewed = idx === viewedChapterIndex;
                const isActive = idx === activeChapterIndex;
                const isDone = idx < activeChapterIndex;

                return (
                  <button
                    key={chap.id}
                    onClick={() => goToChapter(idx)}
                    className={cn(
                      "flex flex-col gap-1 rounded-xl border p-3 text-left transition-all",
                      isViewed
                        ? "border-foreground/60 bg-background shadow-sm"
                        : "border-transparent bg-transparent hover:bg-muted/50",
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase text-muted-foreground">
                        Stage 0{chap.number}
                      </span>
                      {isDone ? (
                        <CheckCircle2Icon className="size-3.5 text-emerald-500" />
                      ) : isActive ? (
                        <span className="size-2 rounded-full bg-amber-500" />
                      ) : null}
                    </div>
                    <span className="font-serif text-xs font-semibold text-foreground truncate">
                      {chap.title}
                    </span>
                    <span className="font-serif text-[11px] text-muted-foreground line-clamp-1">
                      {chap.summary}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* 3. Center Chat Flow Stage */}
          <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
            {/* Mobile Top Stage Selector */}
            <div className="flex lg:hidden items-center gap-1.5 overflow-x-auto border-b border-border/30 bg-muted/20 px-3 py-2 no-scrollbar">
              {chapters.map((chap, idx) => (
                <button
                  key={chap.id}
                  onClick={() => goToChapter(idx)}
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-serif shrink-0",
                    idx === viewedChapterIndex
                      ? "bg-foreground text-background font-semibold"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  <span>Stage {chap.number}</span>
                </button>
              ))}
            </div>

            {/* Messages Scroll Area */}
            <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto px-4 py-6 sm:px-6">
              <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
                {/* Stage Header Info */}
                <div className="flex items-center justify-between border-b border-border/30 pb-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[10px] uppercase text-muted-foreground">
                      Stage {currentViewedChapter.number} · {currentViewedChapter.phase}
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-foreground">
                      {currentViewedChapter.title}
                    </h2>
                  </div>
                  {isViewingHistory && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={jumpToActive}
                      className="font-serif text-xs gap-1.5 text-amber-500 border-amber-500/40"
                    >
                      <span>Return to Live Stage</span>
                      <ArrowRightIcon className="size-3.5" />
                    </Button>
                  )}
                </div>

                {/* Messages list */}
                <div className="flex flex-col gap-5">
                  {currentViewedChapter.messages.map((message) => {
                    const isUser = message.role === "user";

                    return (
                      <div
                        key={message.id}
                        className={cn(
                          "flex flex-col gap-1.5 max-w-xl",
                          isUser ? "ml-auto items-end" : "mr-auto items-start",
                        )}
                      >
                        <span className="text-[10px] font-mono text-muted-foreground/60 px-1">
                          {isUser ? "You" : "Pauly"} · {message.timestamp}
                        </span>

                        <div
                          className={cn(
                            "font-serif text-base leading-relaxed px-4 py-3 rounded-2xl whitespace-pre-wrap",
                            isUser
                              ? "bg-muted/70 text-foreground text-right"
                              : "bg-background text-foreground border border-border/40 shadow-sm",
                          )}
                        >
                          {message.content}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 4. Bottom Diagnostic HUD & Input Area */}
            <div className="shrink-0 border-t border-border/40 bg-background/95 p-4 backdrop-blur-md">
              <div className="mx-auto flex w-full max-w-2xl flex-col gap-3">
                {isViewingHistory ? (
                  <div className="flex items-center justify-between rounded-xl border border-border/70 bg-muted/40 p-3">
                    <span className="text-xs font-serif text-muted-foreground">
                      Inspecting historical Stage {currentViewedChapter.number}. Inputs are locked to active stage.
                    </span>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={jumpToActive}
                      className="font-serif text-xs gap-1.5"
                    >
                      Resume Live Stage →
                    </Button>
                  </div>
                ) : (
                  <>
                    {/* Collapsible Tension Triage HUD Drawer */}
                    {activeTension &&
                      activeTension.status === "unresolved" &&
                      triageDrawerOpen && (
                        <div className="flex flex-col gap-2 rounded-xl border border-amber-500/50 bg-amber-500/10 p-3 text-xs animate-in slide-in-from-bottom-2">
                          <div className="flex items-center justify-between font-mono font-semibold text-amber-600 dark:text-amber-400 text-[11px]">
                            <span className="flex items-center gap-1.5">
                              <ShieldAlertIcon className="size-3.5" />
                              UNRESOLVED TENSION: {activeTension.dimension}
                            </span>
                            <button
                              onClick={() => setTriageDrawerOpen(false)}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              Hide
                            </button>
                          </div>

                          <div className="text-foreground font-serif leading-snug">
                            {activeTension.dilemma}
                          </div>

                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => triageTension("fits")}
                              className="font-serif text-xs gap-1 border-amber-500/40"
                            >
                              <span>Fits, because…</span>
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => triageTension("torn")}
                              className="font-serif text-xs gap-1 border-amber-500/40"
                            >
                              <FlameIcon className="size-3 text-amber-500" />
                              <span>I&apos;m torn</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => triageTension("shelved")}
                              className="font-serif text-xs text-muted-foreground"
                            >
                              Shelve for now
                            </Button>
                          </div>
                        </div>
                      )}

                    {/* Categorized Steering Suggestion Chips */}
                    {latestSuggestions.length > 0 && (
                      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                        {latestSuggestions.map((suggestion) => (
                          <button
                            key={suggestion}
                            onClick={() => {
                              if (suggestion === "Show my Result") {
                                setActiveTab("result");
                              } else {
                                sendMessage(suggestion);
                              }
                            }}
                            className="rounded-full border border-border/80 bg-card/60 px-3 py-1 font-serif text-xs text-muted-foreground hover:text-foreground hover:border-foreground/40 shrink-0"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Minimalist Input Form */}
                    <form ref={formRef} onSubmit={onSubmit} className="flex w-full flex-col gap-2">
                      <InputGroup variant="ghost" className="font-serif pt-1">
                        <InputGroupTextarea
                          value={draft}
                          onChange={(e) => setDraft(e.target.value)}
                          placeholder="Respond to dilemma…"
                          aria-label="Message"
                          className={cn(
                            "font-serif text-base leading-relaxed max-h-36 min-h-12 p-0 placeholder:text-muted-foreground/50 focus:outline-none focus-visible:outline-none focus:ring-0",
                            hasText ? "opacity-100" : "opacity-70",
                          )}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                              e.preventDefault();
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
                            {hasText && (
                              <InputGroupButton
                                type="submit"
                                variant="ghost"
                                size="icon-sm"
                                aria-label="Send"
                                className="transition-opacity duration-150 animate-in fade-in-0"
                              >
                                <ArrowUpIcon />
                              </InputGroupButton>
                            )}
                          </div>
                        </InputGroupAddon>
                      </InputGroup>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
