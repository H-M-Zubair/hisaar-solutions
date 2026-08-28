import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { site } from "@/lib/site";
import { AwesomeFade, AwesomeSlide } from "@/components/motion/awesome-reveal";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Book an Omni Ledger demo or 14-day trial with Hisaar Solutions, Lahore Cantt. WhatsApp +92 303 0609872. Trials are provisioned — no self-serve signup.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Desk"
        title="WhatsApp is the front door."
        lede="Tell us grocery, pharmacy, restaurant, or garments. We create the organisation and send an owner access code. There is no public signup, on purpose."
      />
      <section className="mx-auto grid max-w-[1120px] gap-16 px-5 py-16 sm:px-8 lg:grid-cols-2">
        {/* Intent: form that exits to WhatsApp — honest about provisioning, not a fake CRM. */}
        <AwesomeFade direction="left">
          <ContactForm />
        </AwesomeFade>
        <AwesomeSlide direction="right" delay={140}>
          <aside className="space-y-8">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <p className="eyebrow">Direct</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a href={site.phoneHref} className="text-paper hover:text-teal">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a href={site.emailHref} className="text-paper hover:text-teal">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.whatsapp} className="text-paper hover:text-teal">
                    wa.me/923030609872
                  </a>
                </li>
                <li className="text-mute">
                  {site.city}, {site.country}
                </li>
              </ul>
            </div>
            <div
              className="relative overflow-hidden rounded-2xl border border-line bg-ink p-6"
              aria-hidden
            >
              <div className="bg-grid absolute inset-0 opacity-50" />
              <div className="relative">
                <p className="eyebrow">Map, abstract</p>
                <p className="display mt-6 text-4xl">Lahore Cantt</p>
                <p className="mt-3 max-w-xs text-sm text-mute">
                  A studio, not a showroom. Demos run on your counter or on a seeded
                  till we bring.
                </p>
                <div className="mt-8 h-24 rounded-xl border border-dashed border-line" />
              </div>
            </div>
          </aside>
        </AwesomeSlide>
      </section>
    </>
  );
}
