import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { PricingBoard } from "@/components/sections/pricing-board";
import { PricingMatrix } from "@/components/sections/pricing-matrix";
import { faqs } from "@/lib/pricing";
import { site } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = pageMeta({
  title: "Pricing",
  description:
    "Omni Ledger pricing for Lahore retail: Lite Rs 1,499 Android, Standard Rs 3,499 (most popular), Pro Rs 7,499, Pro+ from Rs 12,000. WhatsApp daily EOD, extra tills, FBR on Pro+.",
  path: "/pricing",
});

const fbrNotes = [
  {
    n: "01",
    title: "Lite / Standard / Pro",
    body: "Cash vs card tax rates on the ticket. No FBR push. White-label headers are not in these bands.",
  },
  {
    n: "02",
    title: "Included on Pro+",
    body: "FBR / PRA digital invoicing and branded thermal headers sit in the Rs 12,000+ band.",
  },
  {
    n: "03",
    title: "No fake demo",
    body: "We will not walk an integration that is not live for your shop and province.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Pricing"
        title="Lite on the phone. Standard at the counter."
        lede="Four paid bands for Pakistan retail. Standard is the single-desktop shop most kiranas buy. Pro is the owner’s brain and extra tills. Pro+ is chains, FBR, and daily WhatsApp EOD included. Trial is still provisioned — no self-serve signup."
      />

      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1120px] px-5 py-16 sm:px-8 lg:py-20">
          <p className="eyebrow text-teal">Lahore · device-based</p>
          <h2 className="display mt-3 max-w-xl text-3xl sm:text-4xl">
            Pick the till you actually run.
          </h2>
          <p className="mt-3 max-w-lg text-sm text-mute">
            Standard is marked most popular on purpose. Lite is the Android door.
            Extra tills and WhatsApp EOD are how Pro earns more than a second counter.
          </p>
          <div className="mt-10">
            <PricingBoard />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <p className="eyebrow text-teal">Killer add-on · Pro</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl">
              WhatsApp daily EOD.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-mute">
              The owner who is not at the counter still needs tonight’s hisaab. A PDF
              of the day’s ledger to WhatsApp or email at close — Rs 999 / month on
              Pro, included on Pro+. Locked on Lite and Standard so the upgrade has
              a reason.
            </p>
          </div>
          <ul className="space-y-3 self-center text-sm">
            <li className="rounded-xl border border-line bg-ink px-4 py-3 text-mute">
              Lite / Standard: locked. You close the drawer yourself.
            </li>
            <li className="rounded-xl border border-teal/30 bg-ink px-4 py-3 text-paper">
              Pro add-on: Rs 999 / mo · PDF to the owner at 10pm.
            </li>
            <li className="rounded-xl border border-amber/35 bg-ink px-4 py-3 text-paper">
              Pro+: included free with FBR, branches, and white-label.
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-line bg-ink">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:py-20">
          <div>
            <p className="eyebrow text-amber">Pro+ · included</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl">
              FBR / PRA digital invoicing
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-mute">
              Tax compliance and branded receipts live on Pro+, not inside Lite,
              Standard, or Pro. When the integration is live for your province, it
              is in the Rs 12,000+ band — same as unlimited tills and stock transfer.
            </p>
          </div>
          <ol className="space-y-0 self-center">
            {fbrNotes.map((item) => (
              <li
                key={item.n}
                className="border-t border-line py-5 first:border-t-0 first:pt-0 last:pb-0"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
                  {item.n}
                </p>
                <p className="mt-2 font-display text-xl tracking-tight">{item.title}</p>
                <p className="mt-1.5 text-sm text-mute">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 lg:py-20">
          <p className="eyebrow">The switchboard</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl">Where each switch lives.</h2>
          <p className="mt-3 max-w-xl text-sm text-mute">
            Locked means upgrade. Add-on means a rupee line, not a fake checkbox.
            FBR and white-label are Pro+ included — we still will not demo a push
            that is not live.
          </p>
          <div className="mt-10">
            <PricingMatrix />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[720px] px-5 py-16 sm:px-8 lg:py-20">
        <p className="eyebrow">Desk</p>
        <h2 className="display mt-3 text-3xl sm:text-4xl">Questions we actually get.</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CtaBand
        title="Fourteen days, then pick a band."
        body={`Lite Rs 1,499 · Standard Rs 3,499 · Pro Rs 7,499 · Pro+ from Rs 12,000. We provision the shop on WhatsApp ${site.phone}.`}
      />
    </>
  );
}
