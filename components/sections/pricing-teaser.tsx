import Link from "next/link";
import { plans } from "@/lib/pricing";
import { AwesomeFade } from "@/components/motion/awesome-reveal";
import { cn } from "@/lib/utils";

export function PricingTeaser() {
  const shown = plans.filter((p) => p.id !== "proplus");
  return (
    <section className="border-t border-line bg-surface py-24">
      {/* Intent: three honest bands — trial, counter, owner’s brain. Pro+ stays off-stage. */}
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <AwesomeFade direction="up">
          <p className="eyebrow">Plans</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl">
            Pehle 14 din muft. Then Starter or Pro.
          </h2>
          <p className="mt-4 max-w-lg text-mute">
            We do not list four paid packages. Pro+ is a roadmap slot, not a checkout.
          </p>
        </AwesomeFade>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {shown.map((p, i) => (
            <AwesomeFade key={p.id} direction="up" delay={i * 100} className="h-full">
              <article
                className={cn(
                  "h-full rounded-2xl border bg-ink p-6",
                  p.featured ? "border-amber" : "border-line",
                )}
              >
                <p className="eyebrow">{p.eyebrow}</p>
                <h3 className="display mt-3 text-3xl">{p.name}</h3>
                <p className="mt-2 font-display text-2xl tracking-tight">
                  {p.price}
                  <span className="ml-2 font-sans text-sm font-normal text-mute">
                    {p.period}
                  </span>
                </p>
                {p.priceAlt ? (
                  <p className="mt-1 text-sm text-mute">
                    {p.priceAlt} {p.periodAlt}
                  </p>
                ) : null}
                <p className="mt-4 text-sm text-mute">{p.blurb}</p>
              </article>
            </AwesomeFade>
          ))}
        </div>
        <Link href="/pricing" className="mt-8 inline-block text-sm text-teal">
          Feature matrix and FAQs →
        </Link>
      </div>
    </section>
  );
}
