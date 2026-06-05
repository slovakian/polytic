import { useEffect, useState } from "react";

import { cn } from "@polytik/ui/lib/utils";

import { Link } from "@/components/link";

const BUY_ME_A_COFFEE_URL = "https://buymeacoffee.com/procka";

const TREATS = [
  { emoji: "🍺", label: "beer" },
  { emoji: "🍡", label: "some mochi" },
  { emoji: "🍔", label: "a burger" },
  { emoji: "☕", label: "a coffee" },
  { emoji: "🍕", label: "a slice" },
  { emoji: "🥟", label: "dumplings" },
  { emoji: "🍦", label: "ice cream" },
  { emoji: "🧋", label: "bubble tea" },
  { emoji: "🌮", label: "a taco" },
  { emoji: "🍩", label: "a donut" },
] as const;

const ROTATE_MS = 3200;

export function BuyMeACarousel() {
  const [index, setIndex] = useState(0);
  const [motionOk, setMotionOk] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionOk(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!motionOk) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % TREATS.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [motionOk]);

  const treat = TREATS[index];

  return (
    <Link
      href={BUY_ME_A_COFFEE_URL}
      className="group block rounded-xl bg-card px-5 py-4 text-center no-underline ring-1 ring-foreground/10 transition-colors hover:bg-muted/40 hover:no-underline"
      aria-label="Support Polytik on Buy Me a Coffee"
    >
      <p className="text-sm text-muted-foreground">Enjoying Polytik?</p>
      <p className="mt-1 font-heading text-xl text-foreground sm:text-2xl">
        Buy me a{" "}
        <span className="relative inline-flex min-w-[9ch] justify-center">
          {motionOk ? (
            TREATS.map((item, i) => (
              <span
                key={item.label}
                className={cn(
                  "absolute left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap transition-opacity duration-500",
                  i === index ? "opacity-100" : "opacity-0",
                )}
                aria-hidden={i !== index}
              >
                <span aria-hidden>{item.emoji}</span>
                {item.label}
              </span>
            ))
          ) : (
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden>{treat.emoji}</span>
              {treat.label}
            </span>
          )}
          <span className="invisible inline-flex items-center gap-1.5 whitespace-nowrap">
            <span aria-hidden>{TREATS[0].emoji}</span>
            {TREATS[0].label}
          </span>
        </span>
      </p>
      <p className="mt-2 text-xs text-muted-foreground group-hover:text-foreground">
        buymeacoffee.com/procka →
      </p>
    </Link>
  );
}
