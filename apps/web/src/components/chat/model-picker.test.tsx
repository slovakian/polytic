// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { expect, test } from "vite-plus/test";

import { ModelPicker } from "./model-picker";

test("ModelPicker renders model name without sparkles icon or free models label", () => {
  const { container } = render(
    <ModelPicker value="minimax/minimax-m3.1-flash:free" onValueChange={() => {}} />,
  );

  // Model name should be displayed
  expect(screen.getByText("MiniMax M3.1 Flash")).toBeDefined();

  // Free models label should not be present
  expect(screen.queryByText("Free models")).toBeNull();

  // Sparkles icon should not be present in the trigger button
  const svgs = container.querySelectorAll("svg");
  // Only the ChevronDownIcon should be present (1 svg)
  expect(svgs.length).toBe(1);
});
