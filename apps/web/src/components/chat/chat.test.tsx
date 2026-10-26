// @vitest-environment jsdom
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vite-plus/test";

import { Chat } from "./chat";

test("Chat composer shows send button only when input has text", async () => {
  render(<Chat />);

  // Wait for hydration to complete (skeleton to disappear and textarea to appear)
  const textarea = await screen.findByRole("textbox", { name: "Message" });

  // Initially, there should be no Send button
  expect(screen.queryByRole("button", { name: "Send" })).toBeNull();

  // Type some spaces only - still should not show send button
  fireEvent.change(textarea, { target: { value: "   " } });
  expect(screen.queryByRole("button", { name: "Send" })).toBeNull();

  // Type actual text - send button should appear
  fireEvent.change(textarea, { target: { value: "Hello Polytic" } });
  expect(screen.getByRole("button", { name: "Send" })).toBeDefined();

  // Clear text - send button should disappear
  fireEvent.change(textarea, { target: { value: "" } });
  expect(screen.queryByRole("button", { name: "Send" })).toBeNull();
});
