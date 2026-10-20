"use client";

import * as React from "react";
import { cn } from "@polytic/ui/lib/utils";

import { Button } from "@polytic/ui/components/button";

export interface SuggestionsProps extends React.ComponentProps<"div"> {
  wrap?: boolean;
}

export function Suggestions({ className, wrap, ...props }: SuggestionsProps) {
  const isWrapped = wrap ?? className?.includes("flex-wrap");

  return (
    <div
      data-slot="suggestions"
      className={cn(
        "flex gap-2 py-1",
        isWrapped
          ? "flex-wrap items-center"
          : "min-w-0 scroll-fade-x scrollbar-none overflow-x-auto overscroll-x-contain",
        className,
      )}
      {...props}
    />
  );
}

export interface SuggestionProps extends Omit<React.ComponentProps<typeof Button>, "onClick"> {
  suggestion?: string;
  onClick?: (suggestion: string) => void;
  children?: React.ReactNode;
}

export function Suggestion({
  suggestion,
  children,
  onClick,
  variant = "outline",
  size = "sm",
  className,
  ...props
}: SuggestionProps) {
  const content = children ?? suggestion;

  return (
    <Button
      data-slot="suggestion"
      variant={variant}
      size={size}
      className={cn("shrink-0 rounded-full", className)}
      onClick={() => {
        if (onClick && suggestion !== undefined) {
          onClick(suggestion);
        } else if (onClick && Object.prototype.toString.call(content) === "[object String]") {
          onClick(String(content));
        }
      }}
      {...props}
    >
      {content}
    </Button>
  );
}
