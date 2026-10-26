// @vitest-environment jsdom
import { fireEvent, render } from "@testing-library/react";
import type { ComponentProps } from "react";
import { expect, test, vi } from "vite-plus/test";

vi.mock("@tanstack/react-router", () => ({
  Link: ({
    children,
    to,
    ...props
  }: ComponentProps<"a"> & {
    to?: string;
  }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

import { chatStore } from "./chat/chat-context";
import Header from "./header";

test("Header does not render New chat button when canReset is false", () => {
  chatStore.setActions({
    canReset: false,
    busy: false,
    reset: () => {},
  });

  const { queryByRole } = render(<Header />);

  expect(queryByRole("button", { name: "New chat" })).toBeNull();
});

test("Header renders New chat button when canReset is true and triggers reset on click", () => {
  const resetFn = vi.fn();
  chatStore.setActions({
    canReset: true,
    busy: false,
    reset: resetFn,
  });

  const { getAllByRole } = render(<Header />);

  const button = getAllByRole("button", { name: "New chat" })[0];
  expect(button).toBeDefined();
  expect(button.getAttribute("disabled")).toBeNull();

  fireEvent.click(button);
  expect(resetFn).toHaveBeenCalledTimes(1);
});

test("Header disables New chat button when busy is true", () => {
  chatStore.setActions({
    canReset: true,
    busy: true,
    reset: () => {},
  });

  const { getAllByRole } = render(<Header />);

  const button = getAllByRole("button", { name: "New chat" })[0];
  expect(button).toBeDefined();
  expect(button.hasAttribute("disabled")).toBe(true);
});

test("Header does not render Use your own AI button", () => {
  const { queryByText } = render(<Header />);
  expect(queryByText("Use your own AI")).toBeNull();
});
