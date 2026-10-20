import type { TextPart } from "@tanstack/ai-react/ui";
import {
  Children,
  type ComponentProps,
  createElement,
  isValidElement,
  type ReactNode,
} from "react";

type MarkdownComponents = NonNullable<ComponentProps<typeof TextPart>["components"]>;

const segmenter = new Intl.Segmenter(undefined, { granularity: "word" });
const VISIBLE = /\S/;

const TEXT_TAGS = [
  "p",
  "li",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "strong",
  "em",
  "del",
  "a",
  "td",
  "th",
];

function fadeWords(text: string) {
  return Array.from(segmenter.segment(text), ({ segment }, index) =>
    VISIBLE.test(segment) ? (
      <span key={`${index}:${segment}`} className="fade-segment">
        {segment}
      </span>
    ) : (
      segment
    ),
  );
}

function fadeText(children: ReactNode) {
  return Children.map(children, (child) =>
    child == null || isValidElement(child) ? child : fadeWords(String(child)),
  );
}

function fadeTag(tag: string) {
  return function FadeTag({ children, ...props }: { children?: ReactNode }) {
    return createElement(tag, props, fadeText(children));
  };
}

export const fadeMarkdownComponents: MarkdownComponents = Object.fromEntries(
  TEXT_TAGS.map((tag) => [tag, fadeTag(tag)]),
);
