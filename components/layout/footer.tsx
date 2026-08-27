import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { nav, site } from "@/lib/site";
import { industryList } from "@/lib/industries";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      {/* Intent: a ledger footer — product facts and a door, not a fake sitemap of empty pages. */}
      <div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mute">
            We ship Omni Ledger — a provisioned POS and shop ERP. One store per
            organisation. Four industry packs. No invented client count.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
          <div>
            <p className="eyebrow">Product</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-mute hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Floors</p>
            <ul className="mt-4 space-y-2 text-sm">
              {industryList.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/solutions/${i.slug}`}
                    className="text-mute hover:text-paper"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Desk</p>
            <ul className="mt-4 space-y-2 text-sm text-mute">
              <li>
                <Link href="/contact" className="hover:text-paper">
                  Contact
                </Link>
              </li>
              <li>
                <a href={site.phoneHref} className="hover:text-paper">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="hover:text-paper">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.whatsapp} className="hover:text-paper">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-2 px-5 py-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Hisaar Solutions. Omni Ledger is a product, not a marketplace.</p>
          <p className="font-mono uppercase tracking-[0.18em]">PKR · 14-day trial · provisioned</p>
        </div>
      </div>
    </footer>
  );
}
