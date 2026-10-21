// @vitest-environment jsdom
import { Compaction, CompactionLine, CompactionMarker } from "@polytic/ui/components/compaction";
import { fireEvent, render } from "@testing-library/react";
import { expect, test } from "vite-plus/test";

test("CompactionLine renders running status with shimmer", () => {
  const { container, rerender } = render(<CompactionLine running={true} />);

  const title = container.querySelector("[data-slot=trace-title]");
  const line = container.querySelector("[data-slot=trace-line]");

  expect(title?.textContent).toBe("Compacting conversation…");
  expect(title?.classList.contains("shimmer")).toBe(true);
  expect(line?.getAttribute("data-status")).toBe("running");

  rerender(<CompactionLine running={false} tokensSaved={3500} />);

  expect(title?.textContent).toBe("Compacted context");
  expect(title?.classList.contains("shimmer")).toBe(false);
  expect(line?.getAttribute("data-status")).toBeNull();

  const desc = container.querySelector("[data-slot=trace-description]");
  expect(desc?.textContent).toBe("-3,500 tokens");
});

test("Compaction renders collapsible trace when details are present", () => {
  const details = {
    before: 12000,
    after: 7000,
    messagesBefore: 18,
    messagesAfter: 10,
    strategyKey: "clear-tool-results:2:evict-oldest",
  };

  const { container } = render(<Compaction details={details} />);

  const trigger = container.querySelector("[data-slot=trace-collapsible-trigger]");
  expect(trigger).not.toBeNull();
  expect(trigger?.getAttribute("aria-expanded")).toBe("false");

  const desc = container.querySelector("[data-slot=trace-description]");
  expect(desc?.textContent).toBe("-5,000 tokens");

  // Expand
  fireEvent.click(trigger!);
  expect(trigger?.getAttribute("aria-expanded")).toBe("true");

  expect(container.textContent).toContain("12,000 → 7,000");
  expect(container.textContent).toContain("-5,000");
  expect(container.textContent).toContain("18 → 10");
  expect(container.textContent).toContain("clear-tool-results:2:evict-oldest");
});

test("Compaction renders non-collapsible line when running", () => {
  const { container } = render(
    <Compaction running={true} details={{ before: 12000, messagesBefore: 18 }} />,
  );

  const trigger = container.querySelector("[data-slot=trace-collapsible-trigger]");
  expect(trigger).toBeNull();

  const line = container.querySelector("[data-slot=trace-line]");
  expect(line?.getAttribute("data-status")).toBe("running");

  const title = container.querySelector("[data-slot=trace-title]");
  expect(title?.textContent).toBe("Compacting conversation…");
});

test("CompactionMarker renders separator with fold icon and label", () => {
  const { container } = render(<CompactionMarker />);

  const marker = container.querySelector("[data-slot=marker]");
  expect(marker).not.toBeNull();
  expect(marker?.textContent).toContain(
    "Older conversation history compacted to fit model context",
  );
});
