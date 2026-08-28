import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { plans, matrix, faqs } from "@/lib/pricing";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AwesomeFade, AwesomeSlide } from "@/components/motion/awesome-reveal";

export const metadata = pageMeta({
  title: "Pricing",
  description:
    "Omni Ledger pricing: 14-day full trial at Rs 0, Starter Rs 2,999, Pro Rs 4,999 billed annually or Rs 6,999 monthly. Shift close on Starter. FBR invoicing as a Pro+ add-on.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Pricing"
        title="Fourteen days full. Then two plans."
        lede="Trial is Pro-shaped, including your industry pack. After that: Starter for the counter — with a real shift close — or Pro for the owner’s brain. FBR is an add-on, not a checkbox we fake. Billing is a conversation."
      />
      <section className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8">
        {/* Intent: four bands; Pro shows annual lock-in first, monthly as the flexible rate. */}
        <div className="grid gap-4 lg:grid-cols-4">
          {plans.map((p, i) => (
            <AwesomeFade key={p.id} direction="up" delay={i * 90} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-6",
                  p.featured
                    ? "border-amber bg-surface"
                    : p.id === "proplus"
                      ? "border-line/70 opacity-90"
                      : "border-line bg-ink",
                )}
              >
                <p className="eyebrow">{p.eyebrow}</p>
                <h2 className="display mt-3 text-2xl">{p.name}</h2>
                <p className="mt-2 font-display text-3xl tracking-tight">{p.price}</p>
                <p className="text-xs text-mute">{p.period}</p>
                {p.priceAlt ? (
                  <p className="mt-2 text-sm text-mute">
                    <span className="font-display text-lg tracking-tight text-paper">
                      {p.priceAlt}
                    </span>{" "}
                    {p.periodAlt}
                  </p>
                ) : null}
                <p className="mt-4 text-sm text-mute">{p.blurb}</p>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-paper">
                  {p.points.map((pt) => (
                    <li key={pt} className="border-t border-line pt-2">
                      {pt}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={p.featured ? "amber" : "outline"} className="mt-8">
                  <a href={site.trialMessage} target="_blank" rel="noopener noreferrer">
                    {p.cta}
                  </a>
                </Button>
              </article>
            </AwesomeFade>
          ))}
        </div>
      </section>
      <section className="border-y border-line bg-ink">
        <div className="mx-auto grid max-w-[1120px] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Intent: name the Pakistan tax pain without selling a feature that is not built. */}
          <AwesomeFade direction="left">
            <p className="eyebrow text-amber">Add-on · not in the till today</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl">
              FBR / PRA digital invoicing
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-mute">
              Local tax compliance is a real retail pain. Omni Ledger does not
              pretend the base POS is an FBR machine. When digital invoicing is
              ready for your province, it is quoted as a Pro+ add-on — same as
              branches. Starter and Pro stay the counter and the owner’s brain.
            </p>
          </AwesomeFade>
          <AwesomeSlide direction="right" delay={140}>
            <ul className="space-y-3 self-center text-sm text-mute">
              <li className="rounded-xl border border-line bg-surface px-4 py-3">
                Starter / Pro: cash vs card tax rates on the ticket. No FBR push.
              </li>
              <li className="rounded-xl border border-line bg-surface px-4 py-3">
                Add-on: FBR / local tax digital invoicing, scoped and quoted.
              </li>
              <li className="rounded-xl border border-line bg-surface px-4 py-3">
                We will not demo an integration that is not live for your shop.
              </li>
            </ul>
          </AwesomeSlide>
        </div>
      </section>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8">
          <AwesomeFade direction="up">
            <h2 className="display text-3xl">Where each switch lives.</h2>
            <p className="mt-3 max-w-xl text-sm text-mute">
              Locked means upgrade, not missing forever. Shift closing logs (cash in
              drawer vs POS) are Full on Starter. FBR is an add-on row, not a silent
              omission.
            </p>
          </AwesomeFade>
          <AwesomeFade direction="up" delay={120}>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-ink font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
                  <tr>
                    <th className="px-4 py-3">Feature</th>
                    <th className="px-4 py-3">Trial</th>
                    <th className="px-4 py-3">Starter</th>
                    <th className="px-4 py-3">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {matrix.map((row) => (
                    <tr key={row.feature} className="border-t border-line">
                      <td className="px-4 py-3 text-paper">{row.feature}</td>
                      <td className="px-4 py-3 text-mute">{row.trial}</td>
                      <td
                        className={cn(
                          "px-4 py-3",
                          row.starter === "Full" &&
                            row.feature.toLowerCase().includes("shift closing")
                            ? "text-teal"
                            : "text-mute",
                        )}
                      >
                        {row.starter}
                      </td>
                      <td className="px-4 py-3 text-mute">{row.pro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AwesomeFade>
        </div>
      </section>
      <section className="mx-auto max-w-[720px] px-5 py-16 sm:px-8">
        <AwesomeFade direction="up">
          <h2 className="display text-3xl">Questions we actually get.</h2>
        </AwesomeFade>
        <AwesomeFade direction="up" delay={100}>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AwesomeFade>
      </section>
      <CtaBand
        title="Fourteen days of the real ledger."
        body="We create the shop, hand you an owner code, and leave Pro unlocked — including your industry pack. Then you choose Starter or Pro. WhatsApp is the door."
      />
    </>
  );
}
