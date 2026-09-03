import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { footerNav, site } from "@/lib/site";
import { industryList } from "@/lib/industries";

export function Footer() {
  return (
    <footer className="overflow-x-clip border-t border-line bg-surface">
      {/* Intent: a ledger footer — product facts and a door, not a fake sitemap of empty pages. */}
      <div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo size="lg" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mute">
            Hisaar Solutions is a B2B software company. We build our own SaaS
            and custom software. Omni Ledger is our multi-sector POS.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block font-logo text-[11px] font-semibold uppercase tracking-[0.18em] text-hisaar hover:text-paper"
          >
            hisaarsolutions.com
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-3">
          <nav aria-label="Quick links">
            <p className="eyebrow">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-mute hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Industry solutions">
            <p className="eyebrow">Floors</p>
            <ul className="mt-4 space-y-2 text-sm">
              {industryList.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/floors/${i.slug}`}
                    className="text-mute hover:text-paper"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="min-w-0 col-span-2 lg:col-span-1" aria-label="Contact">
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-mute">
              <li>
                <a
                  href={site.phoneHref}
                  className="whitespace-nowrap hover:text-paper"
                  aria-label={`Call Hisaar Solutions at ${site.phone}`}
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="break-all hover:text-paper sm:break-normal"
                  aria-label={`Email Hisaar Solutions at ${site.email}`}
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  className="hover:text-paper"
                  aria-label="Chat with Hisaar Solutions on WhatsApp (opens in a new tab)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link href="/" className="hover:text-paper">
                  hisaarsolutions.com
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-2 px-5 py-6 text-xs text-mute lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Hisaar Solutions. B2B SaaS and custom software.</p>
          <p className="font-mono uppercase tracking-[0.12em] lg:tracking-[0.18em]">
            PKR · Mobile from Rs 1,999 · we set up your shop
          </p>
        </div>
      </div>
    </footer>
  );
}
