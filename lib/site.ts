import { waLink } from "./utils";

export const site = {
  name: "Hisaar Solutions",
  product: "Omni Ledger",
  url: "https://hisaarsolutions.com",
  title: "Hisaar Solutions | Custom Software & Tech Solutions",
  tagline: "The shop’s brain, not just the scanner.",
  /** 153 chars — primary meta description. */
  description:
    "Hisaar Solutions delivers custom software, web solutions, and tech consulting. We build Omni Ledger POS for Pakistan grocery, pharmacy, and retail shops.",
  logo: "/brand/hisaar-logo.png",
  ogImage: "/opengraph-image",
  locale: "en_PK",
  city: "Lahore Cantt",
  country: "Pakistan",
  countryCode: "PK",
  phone: "+92 303 0609872",
  phoneHref: "tel:+923030609872",
  email: "info@hisaarsolutions.com",
  emailHref: "mailto:info@hisaarsolutions.com",
  whatsapp: waLink(),
  sameAs: ["https://wa.me/923030609872"] as const,
  keywords: [
    "Hisaar Solutions",
    "custom software development",
    "web solutions",
    "tech consulting",
    "software company Pakistan",
    "Omni Ledger",
    "POS Pakistan",
    "grocery POS",
    "pharmacy POS",
    "restaurant POS",
    "garments POS",
    "Lahore",
  ],
  trialMessage: waLink(
    "Hi Hisaar — I’d like a 14-day Omni Ledger trial. Shop type: (grocery / pharmacy / restaurant / garments). Shop name:",
  ),
  demoMessage: waLink(
    "Hi Hisaar — I’d like to book an Omni Ledger demo. Shop type and preferred time:",
  ),
} as const;

export const nav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/products", label: "Omni Ledger" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;

export const facts = [
  { value: 4, suffix: "", label: "Industry packs in the same ledger" },
  { value: 14, suffix: "d", label: "Full trial — provisioned, not self-serve" },
  { value: 3, suffix: "", label: "Roles: owner, manager, cashier" },
  { value: 1, suffix: "", label: "Store per organisation, today" },
] as const;

export const honest = [
  "No JazzCash or Stripe machine inside the app.",
  "FBR / PRA digital invoicing is included on Pro+ Custom — not on Mobile, Starter, or Pro.",
  "Trial accounts are provisioned by us — there is no public signup.",
  "Profit and margin stay on the owner’s screen.",
] as const;
