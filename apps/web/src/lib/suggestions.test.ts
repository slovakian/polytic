import { describe, expect, it } from "vite-plus/test";

import { parseMessageSuggestions } from "./suggestions";

describe("parseMessageSuggestions", () => {
  it("returns unchanged text when no suggestions block is present", () => {
    const raw = "What principle justifies state coercion in taxation?";
    const result = parseMessageSuggestions(raw);
    expect(result.text).toBe(raw);
    expect(result.suggestions).toEqual([]);
  });

  it("extracts markdown bullet suggestions and strips the code block", () => {
    const raw = `We have completed our sweep of economic principles. Which domain should we explore next?

\`\`\`suggestions
- Civil liberties & privacy
- Foreign policy & defense
- Environmental governance
\`\`\``;

    const result = parseMessageSuggestions(raw);
    expect(result.text).toBe(
      "We have completed our sweep of economic principles. Which domain should we explore next?",
    );
    expect(result.suggestions).toEqual([
      "Civil liberties & privacy",
      "Foreign policy & defense",
      "Environmental governance",
    ]);
  });

  it("extracts numbered list suggestions", () => {
    const raw = `Here are follow-up directions:

\`\`\`suggestions
1. Steelman the strongest counter-argument
2. Stress-test my view on property rights
3. Start over with a new grill
\`\`\``;

    const result = parseMessageSuggestions(raw);
    expect(result.text).toBe("Here are follow-up directions:");
    expect(result.suggestions).toEqual([
      "Steelman the strongest counter-argument",
      "Stress-test my view on property rights",
      "Start over with a new grill",
    ]);
  });

  it("extracts JSON array suggestions", () => {
    const raw = `Which option fits best?

\`\`\`suggestions
["Option Alpha", "Option Beta", "Option Gamma"]
\`\`\``;

    const result = parseMessageSuggestions(raw);
    expect(result.text).toBe("Which option fits best?");
    expect(result.suggestions).toEqual(["Option Alpha", "Option Beta", "Option Gamma"]);
  });

  it("extracts XML formatted suggestions", () => {
    const raw = `Choose your next step:

<suggestions>
  <suggestion>Drill deeper</suggestion>
  <suggestion>Next topic</suggestion>
</suggestions>`;

    const result = parseMessageSuggestions(raw);
    expect(result.text).toBe("Choose your next step:");
    expect(result.suggestions).toEqual(["Drill deeper", "Next topic"]);
  });

  it("handles streaming unclosed code blocks by hiding syntax and extracting current items", () => {
    const streamingRaw = `Which territory should we visit next?

\`\`\`suggestions
- Free speech & expression
- Surveillance state`;

    const result = parseMessageSuggestions(streamingRaw);
    expect(result.text).toBe("Which territory should we visit next?");
    expect(result.suggestions).toEqual(["Free speech & expression", "Surveillance state"]);
  });

  it("caps suggestions to a maximum of 4 items and deduplicates", () => {
    const raw = `Choices:

\`\`\`suggestions
- Option 1
- Option 2
- Option 2
- Option 3
- Option 4
- Option 5
\`\`\``;

    const result = parseMessageSuggestions(raw);
    expect(result.suggestions).toEqual(["Option 1", "Option 2", "Option 3", "Option 4"]);
  });

  it("cleans smart quotes and bullets", () => {
    const raw = `Options:

\`\`\`suggestions
- “First Choice”
* 'Second Choice'
\`\`\``;

    const result = parseMessageSuggestions(raw);
    expect(result.suggestions).toEqual(["First Choice", "Second Choice"]);
  });
});
