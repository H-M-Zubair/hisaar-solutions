import { waLink } from "./utils";

export const site = {
  name: "Hisaar Solutions",
  product: "Omni Ledger",
  url: "https://hisaarsolutions.com",
  tagline: "The shop’s brain, not just the scanner.",
  description:
    "Hisaar Solutions builds Omni Ledger — a provisioned SaaS POS and shop ERP for grocery, pharmacy, restaurant, and garments. Offline-first, owner-locked profit, 14-day trial.",
  city: "Lahore Cantt",
  country: "Pakistan",
  phone: "+92 303 0609872",
  phoneHref: "tel:+923030609872",
  email: "info@hisaarsolutions.com",
  emailHref: "mailto:info@hisaarsolutions.com",
  whatsapp: waLink(),
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
  "FBR / PRA digital invoicing is a quoted add-on — not in Starter or Pro today.",
  "Trial accounts are provisioned by us — there is no public signup.",
  "Profit and margin stay on the owner’s screen.",
] as const;
