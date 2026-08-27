"use client";

import { facts } from "@/lib/site";
import { StatCounter } from "@/components/motion/stat-counter";
import { Reveal } from "@/components/motion/reveal";

export function HonestFacts() {
  return (
    <section className="border-y border-line bg-surface">
      {/* Intent: proof without a fake logo wall — only numbers the product actually has. */}
      <div className="mx-auto grid max-w-[1120px] grid-cols-2 gap-px bg-line md:grid-cols-4">
        {facts.map((f, i) => (
          <Reveal key={f.label} delay={i * 0.06} className="bg-surface px-5 py-8 sm:px-8">
            <p className="font-display text-4xl tracking-tight text-paper sm:text-5xl">
              <StatCounter value={f.value} suffix={f.suffix} />
            </p>
            <p className="mt-2 max-w-[12rem] text-sm text-mute">{f.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
