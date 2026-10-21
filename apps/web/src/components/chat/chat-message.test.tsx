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

test("AssistantMessage renders custom succinct label for get_creator_info tool call", () => {
  const message: UIMessage = {
    id: "msg-5",
    role: "assistant",
    parts: [
      {
        type: "tool-call",
        id: "call-1",
        name: "get_creator_info",
        arguments: JSON.stringify({ category: "overview" }),
        state: "complete",
      },
    ],
  };

  const { container } = render(<AssistantMessage message={message} streaming={false} />);

  expect(container.textContent).toContain("Ran creator info");
  expect(container.textContent).not.toContain("get_creator_info");
});

test("AssistantMessage renders running status with custom label while streaming tool call", () => {
  const message: UIMessage = {
    id: "msg-6",
    role: "assistant",
    parts: [
      {
        type: "tool-call",
        id: "call-2",
        name: "get_creator_info",
        arguments: "{}",
        state: "input-complete",
      },
    ],
  };

  const { container } = render(<AssistantMessage message={message} streaming={true} />);

  expect(container.textContent).toContain("Running creator info");
  expect(container.textContent).not.toContain("get_creator_info");
});

test("AssistantMessage formats fallback tool name without underscores", () => {
  const message: UIMessage = {
    id: "msg-7",
    role: "assistant",
    parts: [
      {
        type: "tool-call",
        id: "call-3",
        name: "search_public_records",
        arguments: "{}",
        state: "complete",
      },
    ],
  };

  const { container } = render(<AssistantMessage message={message} streaming={false} />);

  expect(container.textContent).toContain("Ran search public records");
  expect(container.textContent).not.toContain("search_public_records");
});

test("AssistantMessage renders approval confirmation with user-friendly tool label", () => {
  const message: UIMessage = {
    id: "msg-8",
    role: "assistant",
    parts: [
      {
        type: "tool-call",
        id: "call-4",
        name: "get_creator_info",
        arguments: "{}",
        state: "approval-requested",
        approval: {
          id: "appr-1",
          needsApproval: true,
          approved: undefined,
        },
      },
    ],
  };

  const { container } = render(<AssistantMessage message={message} streaming={false} />);

  expect(container.textContent).toContain("Run creator info?");
  expect(container.textContent).toContain(
    'The tool "creator info" requires your confirmation to execute.',
  );
  expect(container.textContent).not.toContain("get_creator_info");
});
