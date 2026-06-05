import { useEffect, useState } from "react";

import { AnimatedThemeToggler } from "@polytik/ui/components/animated-theme-toggler";
import { buttonVariants } from "@polytik/ui/components/button";

import { useTheme } from "@/components/theme-provider";

const toggleClassName = buttonVariants({ variant: "outline", size: "icon" });

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The resolved theme isn't known until the client reads the OS preference and
  // localStorage, so render a same-size shell on the server / first paint to
  // avoid a hydration mismatch (and a wrong-icon flash). The pre-hydration FOUC
  // script has already applied the correct page colors by this point.
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button type="button" className={toggleClassName} aria-hidden>
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  // Controlled: the provider stays the single source of truth (persistence,
  // colorScheme, system-preference listening). The toggler drives the triangle
  // View Transition and reports the new value back via onThemeChange. Because
  // `theme` is the resolved value, the first click flips to the opposite of
  // whatever "system" currently resolves to.
  return (
    <AnimatedThemeToggler
      variant="triangle"
      theme={resolvedTheme}
      onThemeChange={setTheme}
      className={toggleClassName}
    />
  );
}
