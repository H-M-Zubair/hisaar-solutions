import { Mail, Phone } from "lucide-react";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { site } from "@/lib/site";
import { AwesomeSlide } from "@/components/motion/awesome-reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/schema";

const rowClass =
  "flex items-center gap-3 text-paper transition-colors hover:text-teal";
const iconClass =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-ink text-teal";

function WhatsAppMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export const metadata = pageMeta({
  title: "Contact",
  description:
    "WhatsApp Hisaar Solutions. Book an Omni Ledger demo or 14-day try on +92 303 0609872. We set up your shop.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <JsonLd data={contactPageJsonLd()} />
      <PageHero
        kicker="Talk to us"
        title="WhatsApp is the front door."
        lede="Tell us grocery, pharmacy, restaurant, or retail — clothes, mobile shop, cosmetics, hardware. We set up the shop and send you an owner code. There is no signup button, on purpose."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Contact" },
        ]}
      />
      <section className="mx-auto grid max-w-[1120px] min-w-0 gap-16 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <ContactForm />
        <AwesomeSlide direction="right">
          <aside className="space-y-8">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <p className="eyebrow">Direct</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a
                    href={site.phoneHref}
                    className={rowClass}
                    aria-label={`Call Hisaar Solutions at ${site.phone}`}
                  >
                    <span className={iconClass}>
                      <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                    </span>
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={site.emailHref}
                    className={rowClass}
                    aria-label={`Email Hisaar Solutions at ${site.email}`}
                  >
                    <span className={iconClass}>
                      <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                    </span>
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.whatsapp}
                    className={rowClass}
                    aria-label="Chat with Hisaar Solutions on WhatsApp (opens in a new tab)"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={iconClass}>
                      <WhatsAppMark className="h-4 w-4" />
                    </span>
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </AwesomeSlide>
      </section>
    </>
  );
}
