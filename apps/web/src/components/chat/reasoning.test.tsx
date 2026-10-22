// @vitest-environment jsdom
import { Reasoning, ReasoningLine } from "@polytic/ui/components/reasoning";
import { fireEvent, render } from "@testing-library/react";
import { expect, test } from "vite-plus/test";

test("ReasoningLine applies shimmer class and Thinking… label while running", () => {
  const { container, rerender } = render(<ReasoningLine running={true} />);

  const title = container.querySelector("[data-slot=trace-title]");
  const line = container.querySelector("[data-slot=trace-line]");

  expect(title?.textContent).toBe("Thinking…");
  expect(title?.classList.contains("shimmer")).toBe(true);
  expect(line?.getAttribute("data-status")).toBe("running");

  rerender(<ReasoningLine running={false} />);

  expect(title?.textContent).toBe("Thought");
  expect(title?.classList.contains("shimmer")).toBe(false);
  expect(line?.getAttribute("data-status")).toBeNull();
});

test("Reasoning is collapsed by default when not running", () => {
  const { container } = render(
    <Reasoning text="Thinking about economic policies..." running={false} />,
  );

  const trigger = container.querySelector("[data-slot=trace-collapsible-trigger]");
  expect(trigger?.getAttribute("aria-expanded")).toBe("false");

  const panel = container.querySelector("[data-slot=trace-collapsible-content]");
  // Panel is unmounted or hidden when closed
  expect(panel === null || panel.hasAttribute("hidden")).toBe(true);
});

test("Reasoning is collapsed by default while running and remains collapsed after completion", () => {
  const { container, rerender } = render(
    <Reasoning text="Thinking about economic policies..." running={true} />,
  );

  const trigger = container.querySelector("[data-slot=trace-collapsible-trigger]");
  expect(trigger?.getAttribute("aria-expanded")).toBe("false");

  const panel = container.querySelector("[data-slot=trace-collapsible-content]");
  expect(panel === null || panel.hasAttribute("hidden")).toBe(true);

  const title = container.querySelector("[data-slot=trace-title]");
  expect(title?.textContent).toBe("Thinking…");
  expect(title?.classList.contains("shimmer")).toBe(true);

  // Transition running from true to false (reasoning finished)
  rerender(<Reasoning text="Thinking about economic policies..." running={false} />);

  expect(trigger?.getAttribute("aria-expanded")).toBe("false");
  expect(title?.textContent).toBe("Thought");
  expect(title?.classList.contains("shimmer")).toBe(false);
});

test("Reasoning can be expanded manually while running", () => {
  const { container } = render(
    <Reasoning text="Thinking about economic policies..." running={true} />,
  );

  const trigger = container.querySelector("[data-slot=trace-collapsible-trigger]");
  expect(trigger?.getAttribute("aria-expanded")).toBe("false");

  // User clicks to expand while still thinking
  fireEvent.click(trigger!);
  expect(trigger?.getAttribute("aria-expanded")).toBe("true");

  const panel = container.querySelector("[data-slot=trace-collapsible-content]");
  expect(panel?.textContent).toContain("Thinking about economic policies...");

  // User clicks to collapse
  fireEvent.click(trigger!);
  expect(trigger?.getAttribute("aria-expanded")).toBe("false");
});

test("Reasoning can be toggled manually after completion", () => {
  const { container } = render(
    <Reasoning text="Thinking about economic policies..." running={false} />,
  );

  const trigger = container.querySelector("[data-slot=trace-collapsible-trigger]");

  expect(trigger).not.toBeNull();
  expect(trigger?.getAttribute("aria-expanded")).toBe("false");

  // User clicks to expand
  fireEvent.click(trigger!);
  expect(trigger?.getAttribute("aria-expanded")).toBe("true");

  // User clicks to collapse
  fireEvent.click(trigger!);
  expect(trigger?.getAttribute("aria-expanded")).toBe("false");
});

test("Reasoning respects defaultOpen={true}", () => {
  const { container } = render(
    <Reasoning text="Thinking about economic policies..." running={true} defaultOpen={true} />,
  );

  const trigger = container.querySelector("[data-slot=trace-collapsible-trigger]");
  expect(trigger?.getAttribute("aria-expanded")).toBe("true");
});
