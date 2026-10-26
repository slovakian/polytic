import { Button } from "@polytic/ui/components/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@polytic/ui/components/input-group";
import { cn } from "@polytic/ui/lib/utils";
import {
  ArrowUpIcon,
  ChevronDownIcon,
  CompassIcon,
  CornerDownRightIcon,
  FlameIcon,
  HelpCircleIcon,
  ScaleIcon,
  SparklesIcon,
} from "lucide-react";
import { type FormEvent, useRef, useState } from "react";

import { ModelPicker } from "../model-picker";
import { ResultPreview } from "./result-preview";
import type { useGrillingSession } from "./use-grilling-session";

export function VariantB({ session }: { session: ReturnType<typeof useGrillingSession> }) {
  const {
    chapters,
    activeChapterIndex,
    draft,
    setDraft,
    activeTension,
    showResultOverlay,
    resultData,
    sendMessage,
    triageTension,
    setShowResultOverlay,
    returnToChatWithTopic,
  } = session;

  const [model, setModel] = useState<any>("openrouter/free");
  // Which prior folios are manually expanded by the user
  const [expandedFolios, setExpandedFolios] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const hasText = draft.trim().length > 0;

  const toggleFolio = (folioId: string) => {
    setExpandedFolios((prev) => ({ ...prev, [folioId]: !prev[folioId] }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (hasText) {
      sendMessage(draft);
    }
  };

  return (
    <div className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-background">
      {/* Top Folio Header Indicator */}
      <div className="z-10 flex shrink-0 items-center justify-between border-b border-border/40 bg-background/95 px-4 py-2.5 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-sm text-foreground">
            Socratic Grilling Monograph
          </span>
          <span className="text-xs text-muted-foreground/60 font-mono">·</span>
          <span className="text-xs text-muted-foreground font-serif">
            Continuous Folio Flow
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="rounded bg-muted/80 px-2 py-0.5 text-foreground font-semibold">
            Folio {activeChapterIndex + 1} of {chapters.length}
          </span>
        </div>
      </div>

      {/* Main Continuous Document Stream */}
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto px-4 py-6 sm:px-6">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 pb-10">
          {chapters.map((chapter, chapterIdx) => {
            const isCompleted = chapterIdx < activeChapterIndex;
            const isActive = chapterIdx === activeChapterIndex;
            const isExpanded = expandedFolios[chapter.id] ?? false;

            // Folded prior chapter rendering
            if (isCompleted && !isExpanded) {
              return (
                <div
                  key={chapter.id}
                  className="flex items-center justify-between rounded-xl border border-border/50 bg-card/40 px-4 py-2.5 transition-all hover:bg-card/70"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-secondary px-2 py-0.5 font-mono text-[10px] uppercase text-muted-foreground">
                      Folio {chapter.number}
                    </span>
                    <span className="font-serif text-sm font-semibold text-foreground">
                      {chapter.title}
                    </span>
                    <span className="hidden sm:inline-block font-serif text-xs text-muted-foreground/80">
                      ({chapter.messages.length} exchanges)
                    </span>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFolio(chapter.id)}
                    className="font-serif text-xs gap-1 text-muted-foreground hover:text-foreground h-7"
                  >
                    <span>Read Archive</span>
                    <ChevronDownIcon className="size-3.5" />
                  </Button>
                </div>
              );
            }

            // Expanded or active chapter
            return (
              <div
                key={chapter.id}
                className={cn(
                  "flex flex-col gap-6 rounded-2xl transition-all",
                  isCompleted && "border border-border/50 bg-card/20 p-5",
                )}
              >
                {/* Folio Divider / Header */}
                <div className="flex items-center justify-between border-b border-border/30 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                      Folio {chapter.number} · {chapter.phase}
                    </span>
                    {isActive ? (
                      <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-mono text-amber-500 font-semibold">
                        Live Edge
                      </span>
                    ) : (
                      <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                        Archived
                      </span>
                    )}
                  </div>

                  {isCompleted && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFolio(chapter.id)}
                      className="font-serif text-xs text-muted-foreground h-6 px-2"
                    >
                      Fold Folio
                    </Button>
                  )}
                </div>

                {/* Messages inside this folio */}
                <div className="flex flex-col gap-6">
                  {chapter.messages.map((message) => {
                    const isUser = message.role === "user";

                    const isLastMessage =
                      chapter.messages[chapter.messages.length - 1] === message;

                    return (
                      <div
                        key={message.id}
                        className={cn(
                          "flex flex-col gap-2 max-w-2xl",
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

                        {/* In-Flow Tension Triage Callout Component */}
                        {message.tension && activeTension?.status === "unresolved" && (
                          <div className="my-2 flex w-full flex-col gap-3 rounded-2xl border-2 border-amber-500/40 bg-amber-500/5 p-4 sm:p-5 shadow-sm">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                                <ScaleIcon className="size-4" />
                                In-Flow Tension Triage: {message.tension.dimension}
                              </div>
                              <span className="text-[10px] text-muted-foreground font-mono">
                                In-Situ Resolution
                              </span>
                            </div>

                            <p className="font-serif text-xs sm:text-sm text-foreground/90 italic">
                              {message.tension.dilemma}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-xl border border-border/50 bg-background/80 p-3 text-xs font-serif">
                              <div className="border-l-2 border-amber-500/60 pl-2">
                                <div className="text-[10px] font-mono uppercase text-muted-foreground">Prior Rule</div>
                                <div className="text-foreground mt-0.5">{message.tension.statementA}</div>
                              </div>
                              <div className="border-l-2 border-amber-500 pl-2">
                                <div className="text-[10px] font-mono uppercase text-muted-foreground">Colliding Position</div>
                                <div className="text-foreground mt-0.5">{message.tension.statementB}</div>
                              </div>
                            </div>

                            {/* In-Flow 1-Click Triage Actions */}
                            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-amber-500/20">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => triageTension("fits")}
                                className="font-serif text-xs gap-1.5 border-amber-500/50 hover:bg-amber-500/10"
                              >
                                <CornerDownRightIcon className="size-3.5 text-amber-500" />
                                <span className="font-semibold text-foreground">Fits, because…</span>
                                <span className="text-[10px] text-muted-foreground">(state distinction)</span>
                              </Button>

                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => triageTension("torn")}
                                className="font-serif text-xs gap-1.5 border-amber-500/50 hover:bg-amber-500/10"
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

                        {/* In-Flow Steering Suggestions (attached directly to AI message) */}
                        {!isUser && isLastMessage && message.suggestions && (
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            <span className="text-[10px] font-mono text-muted-foreground/70 mr-1 flex items-center gap-1">
                              <HelpCircleIcon className="size-3" />
                              Steering:
                            </span>
                            {message.suggestions.map((suggestion) => (
                              <button
                                key={suggestion}
                                onClick={() => {
                                  if (suggestion === "Show my Result") {
                                    setShowResultOverlay(true);
                                  } else {
                                    sendMessage(suggestion);
                                  }
                                }}
                                className="rounded-full border border-border/70 bg-background px-3 py-1 font-serif text-xs text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* In-Flow Checkpoint Milestone */}
                        {message.isCheckpoint && (
                          <div className="my-4 flex w-full flex-col items-center gap-3 rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 p-6 text-center">
                            <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-500">
                              <SparklesIcon className="size-6" />
                            </div>
                            <h3 className="font-serif font-bold text-xl text-foreground">
                              Political Worldview Checkpoint
                            </h3>
                            <p className="font-serif text-xs sm:text-sm text-muted-foreground max-w-md">
                              Your answers across 11 turns have locked your personal coordinates, closest thinkers, and unresolved tensions.
                            </p>
                            <Button
                              onClick={() => setShowResultOverlay(true)}
                              className="font-serif gap-2 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md mt-1"
                            >
                              <CompassIcon className="size-4" />
                              Examine Your Political Map →
                            </Button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pristine Minimalist Bottom Composer (No floating cards hover over it!) */}
      <div className="shrink-0 border-t border-border/40 bg-background/95 p-4 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-2">
          <form ref={formRef} onSubmit={onSubmit} className="flex w-full flex-col gap-2">
            <InputGroup variant="ghost" className="font-serif pt-1">
              <InputGroupTextarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Reply in your own words…"
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
        </div>
      </div>

      {/* Result Page Overlay Modal */}
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
