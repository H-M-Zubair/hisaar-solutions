"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AwesomeFade } from "@/components/motion/awesome-reveal";

export function PageHero({
  kicker,
  title,
  lede,
  accent,
  children,
  className,
}: {
  kicker: string;
  title: string;
  lede: string;
  accent?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden border-b border-line bg-mesh", className)}>
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
        <AwesomeFade cascade damping={0.2} direction="up" duration={700} fraction={0}>
          <p className="eyebrow" style={accent ? { color: accent } : undefined}>
            {kicker}
          </p>
          <h1 className="display mt-4 max-w-4xl text-[clamp(2.4rem,6vw,4.8rem)]">{title}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg">{lede}</p>
        </AwesomeFade>
        {children}
      </div>
    </section>
  );
}
