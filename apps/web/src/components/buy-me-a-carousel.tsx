import { useEffect, useMemo, useState } from "react";

import { cn } from "@polytik/ui/lib/utils";

import { Link } from "@/components/link";
import { useServerSeed } from "@/hooks/use-server-seed";
import { seededShuffle } from "@/lib/seeded-random";

const BUY_ME_A_COFFEE_URL = "https://buymeacoffee.com/procka";

const TREATS = [
  { emoji: "🍺", prefix: "Buy me a", label: "beer" },
  { emoji: "🍡", prefix: "Buy me some", label: "mochi" },
  { emoji: "🍔", prefix: "Buy me a", label: "burger" },
  { emoji: "☕", prefix: "Buy me a", label: "coffee" },
  { emoji: "🍕", prefix: "Buy me a", label: "slice" },
  { emoji: "🥟", prefix: "Buy me some", label: "dumplings" },
  { emoji: "🍦", prefix: "Buy me some", label: "ice cream" },
  { emoji: "🧋", prefix: "Buy me a", label: "bubble tea" },
  { emoji: "🌮", prefix: "Buy me a", label: "taco" },
  { emoji: "🍩", prefix: "Buy me a", label: "donut" },
] as const;

const ROTATE_MS = 3200;

function TreatSlot({
  treats,
  index,
  motionOk,
}: {
  treats: (typeof TREATS)[number][];
  index: number;
  motionOk: boolean;
}) {
  const treat = treats[index] ?? treats[0]!;

  if (!motionOk) {
    return (
      <span className="inline-flex flex-wrap items-baseline gap-x-1">
        <span className="text-muted-foreground">{treat.prefix}</span>
        <span className="inline-flex items-center gap-1">
          <span aria-hidden>{treat.emoji}</span>
          {treat.label}
        </span>
      </span>
    );
  }

  return (
    <span className="inline-grid [&>*]:col-start-1 [&>*]:row-start-1">
      {treats.map((item, i) => (
        <span
          key={item.label}
          className={cn(
            "inline-flex flex-wrap items-baseline gap-x-1 whitespace-nowrap transition-opacity duration-500",
            i === index ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={i !== index}
        >
          <span className="text-muted-foreground">{item.prefix}</span>
          <span className="inline-flex items-center gap-1">
            <span aria-hidden>{item.emoji}</span>
            {item.label}
          </span>
        </span>
      ))}
    </span>
  );
}

export function BuyMeACarousel() {
  const serverSeed = useServerSeed();
  const treats = useMemo(() => seededShuffle(TREATS, serverSeed), [serverSeed]);

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
      setIndex((i) => (i + 1) % treats.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [motionOk, treats.length]);

  return (
    <Link
      href={BUY_ME_A_COFFEE_URL}
      className="buy-me-a-pulse inline-flex flex-wrap items-baseline"
      aria-label="Buy me a treat on Buy Me a Coffee"
    >
      <TreatSlot treats={treats} index={index} motionOk={motionOk} />
    </Link>
  );
}
