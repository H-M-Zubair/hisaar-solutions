import Link from "next/link";
import { displayPlanPrice, plans } from "@/lib/pricing";
import { cn } from "@/lib/utils";

export function PricingTeaser() {
  const shown = plans.filter((p) => p.id !== "proplus");
  return (
    <section className="border-t border-line bg-surface py-24">
      {/* Intent: three paid doors — phone, counter, owner’s brain. Pro+ Custom stays a quote. */}
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <p className="eyebrow">Plans</p>
        <h2 className="display mt-3 text-4xl sm:text-5xl">
          Mobile, Starter, or Pro.
        </h2>
        <p className="mt-4 max-w-lg text-mute">
          Starter is the desktop kirana most shops buy. Mobile is Android-only.
          Pro is extra tills and the owner’s brain. Pro+ Custom is a quote.
          Pay annually and save 5–8%.
        </p>
        <div className="mt-12 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => {
            const price = displayPlanPrice(p, "monthly");
            return (
              <article
                key={p.id}
                className={cn(
                  "rounded-2xl border bg-ink p-6",
                  p.featured ? "border-amber" : "border-line",
                )}
              >
                <p className="eyebrow">{p.eyebrow}</p>
                <h3 className="display mt-3 text-3xl">{p.name}</h3>
                <p className="mt-2 font-display text-2xl tracking-tight">
                  {price.amount}
                  <span className="ml-2 font-sans text-sm font-normal text-mute">
                    {price.period}
                  </span>
                </p>
                {p.annualDiscountPct > 0 ? (
                  <p className="mt-1 text-xs text-teal">
                    Annual save {p.annualDiscountPct}%
                  </p>
                ) : null}
                {p.priceAlt ? (
                  <p className="mt-1 text-sm text-mute">
                    {p.priceAlt} {p.periodAlt}
                  </p>
                ) : null}
                <p className="mt-4 text-sm text-mute">{p.blurb}</p>
              </article>
            );
          })}
        </div>
        <Link href="/pricing" className="mt-8 inline-block text-sm text-teal">
          Feature matrix, annual billing, and FAQs →
        </Link>
      </div>
    </section>
  );
}
