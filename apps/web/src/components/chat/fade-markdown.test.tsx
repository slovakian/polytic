// @vitest-environment jsdom
import { TextPart } from "@tanstack/ai-react/ui";
import { render } from "@testing-library/react";
import { expect, test } from "vite-plus/test";

import { fadeMarkdownComponents } from "./fade-markdown";

function renderStream(content: string) {
  return <TextPart content={content} components={fadeMarkdownComponents} />;
}

test("wraps each streamed word in a fade segment and keeps markdown", () => {
  const { container } = render(renderStream("Hello **bold** world."));

  const segments = [...container.querySelectorAll(".fade-segment")].map((node) => node.textContent);

  expect(segments).toEqual(["Hello", "bold", "world", "."]);
  expect(container.querySelector("strong")?.textContent).toBe("bold");
  expect(container.textContent).toBe("Hello bold world.");
});

test("keeps existing words mounted so only new words fade in", () => {
  const { container, rerender } = render(renderStream("Markets are"));
  const before = [...container.querySelectorAll(".fade-segment")];

  rerender(renderStream("Markets are efficient"));
  const after = [...container.querySelectorAll(".fade-segment")];

  expect(after.slice(0, before.length)).toEqual(before);
  expect(after.at(-1)?.textContent).toBe("efficient");
});

test("remounts a word that grows so the completed word fades in", () => {
  const { container, rerender } = render(renderStream("Markets eff"));
  const partial = container.querySelectorAll(".fade-segment")[1];

  rerender(renderStream("Markets efficient"));
  const complete = container.querySelectorAll(".fade-segment")[1];

  expect(complete?.textContent).toBe("efficient");
  expect(complete).not.toBe(partial);
});
