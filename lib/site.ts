import { waLink } from "./utils";

export const site = {
  name: "Hisaar Solutions",
  product: "Omni Ledger",
  url: "https://hisaarsolutions.com",
  title: "Hisaar Solutions | B2B SaaS & custom software",
  tagline: "A custom software company that ships its own SaaS.",
  /** 153 chars — primary meta description. */
  description:
    "Hisaar Solutions is a B2B software company. We build SaaS products and custom software. Omni Ledger is our multi-sector POS for grocery, pharmacy, restaurant, and retail — clothes, mobile shops, and more.",
  logo: "/brand/hisaar-logo.png",
  /** Square mark for Google favicon / Knowledge Graph (multiple of 48px). */
  mark: "/icon-192.png",
  ogImage: "/opengraph-image",
  locale: "en_PK",
  phone: "+92 303 0609872",
  phoneHref: "tel:+923030609872",
  email: "info@hisaarsolutions.com",
  emailHref: "mailto:info@hisaarsolutions.com",
  whatsapp: waLink(),
  sameAs: ["https://wa.me/923030609872"] as const,
  keywords: [
    "Hisaar Solutions",
    "B2B SaaS Pakistan",
    "custom software development",
    "ERP Pakistan",
    "multi-sector POS",
    "Omni Ledger",
    "grocery POS",
    "pharmacy POS",
    "restaurant POS",
    "retail POS",
  ],
  trialMessage: waLink(
    "Hi Hisaar — I’d like a 14-day Omni Ledger trial. Shop type: (grocery / pharmacy / restaurant / retail — clothes, mobile, etc.). Shop name:",
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
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/products", label: "Omni Ledger" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Stories" },
  { href: "/contact", label: "Contact" },
] as const;

export const facts = [
  { value: 2, suffix: "", label: "Kinds of work: our SaaS, and custom software" },
  { value: 4, suffix: "", label: "Sectors on Omni Ledger — grocery, pharmacy, restaurant, retail" },
  { value: 14, suffix: "d", label: "Free try of Omni Ledger" },
  { value: 1, suffix: "", label: "B2B company — SaaS and custom software" },
] as const;

export const honest = [
  "We do not take JazzCash or bank cards inside the app. You just mark cash or card on the bill.",
  "Government tax filing (FBR) is only on the biggest plan — not on Mobile, Starter, or Pro.",
  "We set up your shop ourselves. There is no signup button.",
  "Only the owner can see profit. The cashier never sees it.",
] as const;
