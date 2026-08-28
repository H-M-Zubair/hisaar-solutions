"use client";

import { Check } from "lucide-react";
import { plans } from "@/lib/pricing";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AwesomeFade } from "@/components/motion/awesome-reveal";

export function PricingBoard() {
  return (
    <div className="grid items-stretch gap-4 lg:grid-cols-4">
      {plans.map((p, i) => {
        const isStandard = p.id === "standard";
        const isPlus = p.id === "proplus";
        const isLite = p.id === "lite";
        const isPro = p.id === "pro";

        return (
          <AwesomeFade key={p.id} direction="up" delay={i * 100} className="h-full min-h-0">
            <article
              className={cn(
                "relative flex h-full flex-col overflow-hidden rounded-2xl border p-6",
                isStandard && "border-amber bg-surface shadow-cta lg:-translate-y-2",
                isLite && "border-line bg-ink",
                isPro && "border-line bg-ink",
                isPlus && "border-dashed border-line/80 bg-ink/80",
              )}
            >
              {isStandard ? (
                <>
                  <div className="bg-grid pointer-events-none absolute inset-0 opacity-25" />
                  <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber/15 blur-2xl" />
                </>
              ) : null}
              {isLite ? (
                <div className="pointer-events-none absolute -left-8 top-16 h-28 w-28 rounded-full bg-teal/10 blur-2xl" />
              ) : null}

              <div className="relative flex items-start justify-between gap-3">
                <p className={cn("eyebrow", isStandard && "text-amber", isLite && "text-teal")}>
                  {p.eyebrow}
                </p>
                <span className="font-mono text-[11px] text-mute">0{i + 1}</span>
              </div>

              {isStandard ? (
                <p className="relative mt-3 inline-flex w-fit rounded-full border border-amber/35 bg-ink/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-amber">
                  Most popular
                </p>
              ) : null}

              <h2 className="relative mt-3 font-display text-2xl tracking-tight">{p.name}</h2>
              <p className="relative mt-3 font-display text-4xl tracking-tight text-paper">
                {p.price}
              </p>
              <p className="relative text-xs text-mute">{p.period}</p>
              {p.priceAlt ? (
                <p className="relative mt-2 text-sm text-mute">
                  extra till{" "}
                  <span className="font-display text-lg tracking-tight text-paper">
                    {p.priceAlt}
                  </span>{" "}
                  {p.periodAlt}
                </p>
              ) : null}
              <p className="relative mt-4 text-sm leading-relaxed text-mute">{p.blurb}</p>

              <ul className="relative mt-6 flex-1 space-y-0 text-sm text-paper">
                {p.points.map((pt) => {
                  const eod = pt.toLowerCase().includes("whatsapp") || pt.toLowerCase().includes("eod");
                  const shift = p.id === "standard" && pt.toLowerCase().includes("shift close");
                  return (
                    <li
                      key={pt}
                      className="flex gap-2.5 border-t border-line py-2.5 first:border-t-0 first:pt-0"
                    >
                      <Check
                        className={cn(
                          "mt-0.5 h-3.5 w-3.5 shrink-0",
                          eod || shift ? "text-teal" : isStandard ? "text-amber" : "text-mute",
                        )}
                        strokeWidth={2.2}
                      />
                      <span className={eod || shift ? "text-teal" : undefined}>{pt}</span>
                    </li>
                  );
                })}
              </ul>

              <Button
                asChild
                variant={isStandard ? "amber" : isPlus ? "ghost" : "outline"}
                className="relative mt-8 w-full"
              >
                <a href={site.trialMessage} target="_blank" rel="noopener noreferrer">
                  {p.cta}
                </a>
              </Button>
            </article>
          </AwesomeFade>
        );
      })}
    </div>
  );
}
