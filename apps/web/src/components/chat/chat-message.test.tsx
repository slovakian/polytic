// @vitest-environment jsdom
import type { UIMessage } from "@tanstack/ai-react";
import { render } from "@testing-library/react";
import { expect, test } from "vite-plus/test";

import { AssistantMessage, PendingMessage, UserMessage } from "./chat-message";

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

test("AssistantMessage renders running compaction status when compacting without visible parts", () => {
  const message: UIMessage = {
    id: "msg-3",
    role: "assistant",
    parts: [],
  };

  const { container } = render(
    <AssistantMessage
      message={message}
      streaming={true}
      compaction={{
        status: "running",
        before: 14000,
        messagesBefore: 20,
      }}
    />,
  );

  const title = container.querySelector("[data-slot=trace-title]");
  expect(title?.textContent).toBe("Compacting conversation…");
  expect(title?.classList.contains("shimmer")).toBe(true);
});

test("AssistantMessage renders completed compaction trace alongside text", () => {
  const message: UIMessage = {
    id: "msg-4",
    role: "assistant",
    parts: [{ type: "text", content: "Let's continue our conversation." }],
  };

  const { container } = render(
    <AssistantMessage
      message={message}
      streaming={false}
      compaction={{
        status: "done",
        before: 15000,
        after: 8000,
        messagesBefore: 24,
        messagesAfter: 12,
        tokensSaved: 7000,
        strategyKey: "clear-tool-results:2:evict-oldest",
      }}
    />,
  );

  expect(container.textContent).toContain("Compacted context");
  expect(container.textContent).toContain("-7,000 tokens");
  expect(container.textContent).toContain("Let's continue our conversation.");
});

test("PendingMessage switches to compaction line when compacting", () => {
  const { container, rerender } = render(<PendingMessage isCompacting={true} />);

  const title = container.querySelector("[data-slot=trace-title]");
  expect(title?.textContent).toBe("Compacting conversation…");
  expect(title?.classList.contains("shimmer")).toBe(true);

  rerender(<PendingMessage isCompacting={false} />);
  expect(container.querySelector("[data-slot=trace-title]")?.textContent).toBe("Thinking…");
});
