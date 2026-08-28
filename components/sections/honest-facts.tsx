"use client";

import { facts } from "@/lib/site";
import { StatCounter } from "@/components/motion/stat-counter";

export function HonestFacts() {
  return (
    <section className="border-y border-line bg-surface">
      {/* Intent: proof without a fake logo wall — only numbers the product actually has. */}
      <div className="mx-auto grid max-w-[1120px] min-w-0 grid-cols-2 gap-px overflow-hidden bg-line md:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label} className="min-w-0 bg-surface px-4 py-8 sm:px-8">
            <p className="font-display text-4xl tracking-tight text-paper sm:text-5xl">
              <StatCounter value={f.value} suffix={f.suffix} />
            </p>
            <p className="mt-2 max-w-[12rem] text-sm text-mute">{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
