import { Button } from "@polytic/ui/components/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@polytic/ui/components/input-group";
import { Suggestion, Suggestions } from "@polytic/ui/components/suggestion";
import { cn } from "@polytic/ui/lib/utils";
import {
  ArrowRightIcon,
  ArrowUpIcon,
  BookOpenIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CompassIcon,
  FlameIcon,
  LayersIcon,
  ScaleIcon,
  SparklesIcon,
} from "lucide-react";
import { type FormEvent, useRef, useState } from "react";

import { ModelPicker } from "../model-picker";
import { ResultPreview } from "./result-preview";
import type { useGrillingSession } from "./use-grilling-session";

export function VariantA({ session }: { session: ReturnType<typeof useGrillingSession> }) {
  const {
    chapters,
    activeChapterIndex,
    viewedChapterIndex,
    currentViewedChapter,
    isViewingHistory,
    isFirstChapter,
    isLastChapter,
    draft,
    setDraft,
    activeTension,
    showResultOverlay,
    resultData,
    goToChapter,
    jumpToActive,
    sendMessage,
    triageTension,
    setShowResultOverlay,
    returnToChatWithTopic,
  } = session;

  const [model, setModel] = useState<any>("openrouter/free");
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
      {/* 1. Top Chapter Breadcrumb Stepper */}
      <div className="z-10 flex shrink-0 items-center justify-between border-b border-border/40 bg-background/95 px-4 py-2.5 backdrop-blur-md">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <Button
            variant="ghost"
            size="icon-xs"
            disabled={isFirstChapter}
            onClick={() => goToChapter(viewedChapterIndex - 1)}
            aria-label="Previous Chapter"
          >
            <ChevronLeftIcon className="size-4" />
          </Button>

          <div className="flex items-center gap-1.5">
            {chapters.map((chap, idx) => {
              const isViewed = idx === viewedChapterIndex;
              const isActive = idx === activeChapterIndex;

              return (
                <button
                  key={chap.id}
                  onClick={() => goToChapter(idx)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-serif transition-colors",
                    isViewed
                      ? "bg-foreground text-background font-semibold shadow-sm"
                      : isActive
                        ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 font-medium"
                        : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  <span>{chap.title}</span>
                  {isActive ? (
                    <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                  ) : null}
                </button>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="icon-xs"
            disabled={isLastChapter}
            onClick={() => goToChapter(viewedChapterIndex + 1)}
            aria-label="Next Chapter"
          >
            <ChevronRightIcon className="size-4" />
          </Button>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-muted-foreground shrink-0 pl-2">
          <span>Page {viewedChapterIndex + 1} of {chapters.length}</span>
        </div>
      </div>

      {/* 2. Main Chat Flow Area (Clean Serif E-Reader) */}
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto px-4 py-6 sm:px-6">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
          {/* Chapter Header Banner */}
          <div className="flex flex-col gap-1 border-b border-border/30 pb-4">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              <BookOpenIcon className="size-3 text-muted-foreground" />
              <span>Chapter {currentViewedChapter.number} · {currentViewedChapter.phase}</span>
              {isViewingHistory && (
                <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-amber-500 font-semibold">
                  Read-Only Archive
                </span>
              )}
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
              {currentViewedChapter.title}
            </h2>
            {currentViewedChapter.summary && (
              <p className="font-serif text-xs sm:text-sm text-muted-foreground">
                {currentViewedChapter.summary}
              </p>
            )}
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-6">
            {currentViewedChapter.messages.map((message) => {
              const isUser = message.role === "user";

              return (
                <div
                  key={message.id}
                  className={cn(
                    "flex flex-col gap-1.5 max-w-2xl",
                    isUser ? "ml-auto items-end" : "mr-auto items-start",
                  )}
                >
                  <span className="text-[10px] font-mono text-muted-foreground/60 px-1">
                    {isUser ? "You" : "Pauly (Polytic Arbiter)"} · {message.timestamp}
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

                  {/* Result Handoff Milestone Card */}
                  {message.isCheckpoint && (
                    <div className="mt-3 flex w-full flex-col items-center gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-center animate-in zoom-in-95 duration-300">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-500">
                        <SparklesIcon className="size-5" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-serif font-bold text-lg text-foreground">
                          Your Political Map is Ready
                        </h3>
                        <p className="font-serif text-xs sm:text-sm text-muted-foreground max-w-md">
                          11 turns evaluated. Your core principles, active value tensions, and closest historical thinkers are locked.
                        </p>
                      </div>
                      <Button
                        onClick={() => setShowResultOverlay(true)}
                        className="font-serif gap-2 px-6 bg-amber-500 hover:bg-amber-600 text-black font-semibold shadow-md"
                      >
                        <CompassIcon className="size-4" />
                        Reveal Your Result →
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Floating Controls & Input (Nothing sits below input!) */}
      <div className="shrink-0 border-t border-border/40 bg-background/95 p-4 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
          {/* If viewing history, show Return-to-Active banner instead of composer controls */}
          {isViewingHistory ? (
            <div className="flex items-center justify-between rounded-xl border border-border/70 bg-muted/40 px-4 py-3">
              <div className="flex items-center gap-2 text-xs font-serif text-muted-foreground">
                <LayersIcon className="size-4 text-amber-500" />
                <span>You are browsing Chapter {currentViewedChapter.number} (Archive). Live chat happens on Chapter {activeChapterIndex + 1}.</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={jumpToActive}
                className="font-serif text-xs gap-1.5 shrink-0"
              >
                <span>Jump to Live Chapter</span>
                <ArrowRightIcon className="size-3.5" />
              </Button>
            </div>
          ) : (
            <>
              {/* Floating Active Tension Triage Shelf */}
              {activeTension && activeTension.status === "unresolved" && (
                <div className="flex flex-col gap-2.5 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-3.5 shadow-sm animate-in slide-in-from-bottom-2 duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      <ScaleIcon className="size-3.5" />
                      Active Tension Detected: {activeTension.dimension}
                    </div>
                    <span className="text-[10px] text-muted-foreground font-mono">1-Click Triage</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-serif text-muted-foreground bg-background/60 rounded-xl p-2.5 border border-border/40">
                    <div>
                      <strong className="text-foreground">Stance A:</strong> {activeTension.statementA}
                    </div>
                    <div>
                      <strong className="text-foreground">Stance B:</strong> {activeTension.statementB}
                    </div>
                  </div>

                  {/* The 3 ADR-0007 Triage Affordances */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => triageTension("fits")}
                      className="font-serif text-xs gap-1.5 border-amber-500/40 hover:bg-amber-500/15"
                    >
                      <span className="font-semibold text-foreground">Fits, because…</span>
                      <span className="text-[10px] text-muted-foreground">(fill reasoning)</span>
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => triageTension("torn")}
                      className="font-serif text-xs gap-1.5 border-amber-500/40 hover:bg-amber-500/15"
                    >
                      <FlameIcon className="size-3 text-amber-500" />
                      <span>I&apos;m torn</span>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => triageTension("shelved")}
                      className="font-serif text-xs text-muted-foreground hover:text-foreground"
                    >
                      Not now (skip)
                    </Button>
                  </div>
                </div>
              )}

              {/* Steering Suggestions floating above input */}
              {latestSuggestions.length > 0 && (
                <Suggestions className="w-full justify-start overflow-x-auto no-scrollbar py-0.5">
                  {latestSuggestions.map((suggestion) => (
                    <Suggestion
                      key={suggestion}
                      variant="outline"
                      size="sm"
                      className="font-serif text-xs shrink-0"
                      onClick={() => {
                        if (suggestion === "Show my Result") {
                          setShowResultOverlay(true);
                        } else {
                          sendMessage(suggestion);
                        }
                      }}
                    >
                      {suggestion}
                    </Suggestion>
                  ))}
                </Suggestions>
              )}

              {/* Textarea Composer (derived directly from current chat view) */}
              <form ref={formRef} onSubmit={onSubmit} className="flex w-full flex-col gap-2">
                <InputGroup variant="ghost" className="font-serif pt-2">
                  <InputGroupTextarea
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder="Say what you believe, or clarify your distinction…"
                    aria-label="Message"
                    className={cn(
                      "font-serif text-base leading-relaxed max-h-40 min-h-12 p-0 placeholder:text-muted-foreground/50 focus:outline-none focus-visible:outline-none focus:ring-0",
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

      {/* Result Page Overlay Modal/Screen */}
      {showResultOverlay && (
        <ResultPreview
          result={resultData}
          onClose={() => setShowResultOverlay(false)}
          onContinueGrilling={returnToChatWithTopic}
        />
      )}
    </div>
  );
}
