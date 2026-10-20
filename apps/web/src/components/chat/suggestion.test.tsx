// @vitest-environment jsdom
import { Suggestion, Suggestions } from "@polytic/ui/components/suggestion";
import { render } from "@testing-library/react";
import { expect, test } from "vite-plus/test";

test("Suggestions renders with horizontal overflow classes by default", () => {
  const { container } = render(
    <Suggestions>
      <Suggestion>Item 1</Suggestion>
    </Suggestions>,
  );

  const el = container.querySelector('[data-slot="suggestions"]');
  expect(el?.className).toContain("overflow-x-auto");
  expect(el?.className).toContain("scroll-fade-x");
  expect(el?.className).not.toContain("flex-wrap");
});

test("Suggestions renders with flex-wrap and no overflow scroll when wrap is true", () => {
  const { container } = render(
    <Suggestions wrap className="justify-center">
      <Suggestion>Item 1</Suggestion>
    </Suggestions>,
  );

  const el = container.querySelector('[data-slot="suggestions"]');
  expect(el?.className).toContain("flex-wrap");
  expect(el?.className).toContain("justify-center");
  expect(el?.className).not.toContain("overflow-x-auto");
  expect(el?.className).not.toContain("scroll-fade-x");
});
