"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import {
  type BillingCycle,
  displayPlanPrice,
  plans,
} from "@/lib/pricing";
import { cn, formatPkr } from "@/lib/utils";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { AwesomeFade } from "@/components/motion/awesome-reveal";

function BillingToggle({
  cycle,
  onChange,
}: {
  cycle: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
}) {
  return (
    <div className="mb-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-mute">
        Annual is one transfer. Mobile 5% · Starter 6% · Pro 8% off twelve months.
      </p>
      <div
        className="inline-flex rounded-full border border-line bg-ink p-1"
        role="group"
        aria-label="Billing cycle"
      >
        <button
          type="button"
          onClick={() => onChange("monthly")}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm transition-colors",
            cycle === "monthly"
              ? "bg-paper text-ink"
              : "text-mute hover:text-paper",
          )}
          aria-pressed={cycle === "monthly"}
          aria-label="Show monthly prices"
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => onChange("annual")}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm transition-colors",
            cycle === "annual"
              ? "bg-teal text-ink"
              : "text-mute hover:text-paper",
          )}
          aria-pressed={cycle === "annual"}
          aria-label="Show annual prices, save 5 to 8 percent"
        >
          Annual
          <span className="ml-1.5 font-mono text-[10px] uppercase tracking-[0.12em]">
            save 5–8%
          </span>
        </button>
      </div>
    </div>
  );
}

export function PricingBoard() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <div>
      <BillingToggle cycle={cycle} onChange={setCycle} />
      <div className="grid min-w-0 items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((p, i) => {
          const isStandard = p.id === "standard";
          const isPlus = p.id === "proplus";
          const isLite = p.id === "lite";
          const isPro = p.id === "pro";
          const shown = displayPlanPrice(p, cycle);

          return (
            <AwesomeFade key={p.id} direction="up" delay={i * 100} className="h-full min-h-0 min-w-0">
              <article
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-2xl border p-6",
                  isStandard && "border-amber bg-surface shadow-cta xl:-translate-y-2",
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

                <h3 className="relative mt-3 font-display text-2xl tracking-tight">{p.name}</h3>
                <div className="relative mt-3 flex flex-wrap items-end gap-2">
                  {cycle === "annual" && !p.quoted ? (
                    <span className="mb-1 font-sans text-base text-mute line-through">
                      {formatPkr(p.monthlyPrice)}
                    </span>
                  ) : null}
                  <p className="font-display text-4xl tracking-tight text-paper">{shown.amount}</p>
                  {shown.savePct > 0 ? (
                    <span className="mb-1 rounded-full bg-teal/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-teal">
                      save {shown.savePct}%
                    </span>
                  ) : null}
                </div>
                <p className="relative text-xs text-mute">{shown.period}</p>
                {shown.yearly ? (
                  <p className="relative mt-1 text-xs text-teal">
                    {formatPkr(shown.yearly)} billed once a year
                  </p>
                ) : null}
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
                          aria-hidden
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
                  <a
                    href={site.trialMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.cta} — WhatsApp Hisaar Solutions (opens in a new tab)`}
                  >
                    {p.cta}
                  </a>
                </Button>
              </article>
            </AwesomeFade>
          );
        })}
      </div>
    </div>
  );
}
