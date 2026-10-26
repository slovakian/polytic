"use client";

import * as React from "react";
import { ArrowUpRightIcon, GlobeIcon } from "lucide-react";

import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@polytic/ui/components/trace";

export interface SourceItem {
  url: string;
  title?: string;
}

export interface SourcesProps extends React.ComponentProps<typeof Trace> {
  sources: SourceItem[];
  defaultOpen?: boolean;
}

export function Sources({ sources, defaultOpen = false, className, ...props }: SourcesProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <Trace className={className} {...props}>
      <TraceCollapsible defaultOpen={defaultOpen}>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <GlobeIcon className="text-muted-foreground" />
            </TraceIcon>
            <TraceTitle>
              Used {sources.length} {sources.length === 1 ? "source" : "sources"}
            </TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent className="pt-1">
          <Trace className="gap-1.5">
            {sources.map((source, index) => {
              let hostname = "";

              try {
                hostname = new URL(source.url).hostname;
              } catch {
                hostname = source.url;
              }

              const displayTitle = source.title || hostname;

              return (
                <a
                  key={`${source.url}-${index}`}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <TraceLine className="hover:text-foreground">
                    <TraceTitle className="truncate">
                      {displayTitle}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </TraceTitle>
                    <TraceIcon>
                      <ArrowUpRightIcon className="size-3 text-muted-foreground" />
                    </TraceIcon>
                  </TraceLine>
                </a>
              );
            })}
          </Trace>
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  );
}
