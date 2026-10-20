// @vitest-environment jsdom
import type { UIMessage } from "@tanstack/ai-react";
import { render } from "@testing-library/react";
import { expect, test } from "vite-plus/test";

import { AssistantMessage, UserMessage } from "./chat-message";

test("UserMessage renders content without modification", () => {
  const message: UIMessage = {
    id: "msg-1",
    role: "user",
    parts: [{ type: "text", content: "I believe in free markets." }],
  };

  const { container } = render(<UserMessage message={message} />);
  expect(container.textContent).toContain("I believe in free markets.");
});

test("AssistantMessage strips raw suggestion blocks from rendered text", () => {
  const rawContent = `Which dimension should we explore next?

\`\`\`suggestions
- Civil liberties
- Economic policy
\`\`\``;

  const message: UIMessage = {
    id: "msg-2",
    role: "assistant",
    parts: [{ type: "text", content: rawContent }],
  };

  const { container } = render(<AssistantMessage message={message} streaming={false} />);

  expect(container.textContent).toContain("Which dimension should we explore next?");
  expect(container.textContent).not.toContain("```suggestions");
  expect(container.textContent).not.toContain("Civil liberties");
});
