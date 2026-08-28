export const plans = [
  {
    id: "lite",
    name: "Lite",
    price: "Rs 1,499",
    period: "/ month · Android only",
    priceAlt: "",
    periodAlt: "",
    eyebrow: "Phone · tablet",
    blurb:
      "One mobile till for hawkers and micro-kiranas. Owner on the device. Today’s sale. No desktop counter.",
    cta: "Start on Lite",
    featured: false,
    points: [
      "Android / tablet only — one till",
      "POS scan, cart, print, offline sync",
      "Up to ~300 SKUs",
      "Basic udhaar",
      "Today’s summary — no week charts",
      "Owner only (no cashier seat)",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "Rs 3,499",
    period: "/ month · desktop + Android",
    priceAlt: "",
    periodAlt: "",
    eyebrow: "Counter",
    blurb:
      "The single-counter shop: PC at the till, phone as backup. Full udhaar and wasooli. Today’s hisaab. One extra cashier.",
    cta: "Talk Standard",
    featured: true,
    points: [
      "Desktop + Android — 1 till / counter",
      "Full POS, offline, receipts, returns, void",
      "Up to ~1,000 SKUs",
      "Full udhaar + wasooli",
      "Shift close: cash in drawer vs POS sales",
      "Today’s sale — no week/month charts",
      "Owner + 1 cashier (no Manager)",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "Rs 7,499",
    period: "/ month · up to 3 tills",
    priceAlt: "Rs 1,000",
    periodAlt: "/ extra till",
    eyebrow: "Owner’s brain",
    blurb:
      "Multi-counter, manager seat, full profit, shift logs, CSV. WhatsApp daily EOD is the add-on owners actually feel from home.",
    cta: "Talk Pro",
    featured: false,
    points: [
      "Desktop + Android — up to 3 tills",
      "Owner + manager + ~10 staff",
      "Unlimited SKUs",
      "Daily / weekly / monthly + profit + CSV",
      "Udhaar + credit reports · shift-log history",
      "Industry pack: lots / tables / matrix",
      "WhatsApp / email EOD add-on · Rs 999",
      "Extra till · Rs 1,000 / month",
    ],
  },
  {
    id: "proplus",
    name: "Pro+",
    price: "Rs 12,000+",
    period: "/ month · quoted",
    priceAlt: "",
    periodAlt: "",
    eyebrow: "Chains · compliance",
    blurb:
      "Unlimited tills, custom roles, FBR invoicing, white-label receipts, multi-branch stock, and daily EOD included. Quoted when the chain is real.",
    cta: "Ask about Pro+",
    featured: false,
    points: [
      "All platforms · unlimited tills",
      "Custom staff hierarchy",
      "FBR / PRA digital invoicing included",
      "White-label receipts & branded header",
      "Multi-branch + stock transfer included",
      "WhatsApp / email EOD included",
      "Custom date-range reports",
      "Dedicated onboarding",
    ],
  },
] as const;

export const matrix: {
  feature: string;
  lite: string;
  standard: string;
  pro: string;
  proplus: string;
}[] = [
  { feature: "Supported device", lite: "Android only", standard: "Desktop + Android", pro: "Desktop + Android", proplus: "All platforms" },
  { feature: "Counters / tills", lite: "1 (mobile)", standard: "1 till", pro: "Up to 3", proplus: "Unlimited" },
  { feature: "Staff seats & roles", lite: "Owner only", standard: "Owner + 1 cashier", pro: "Owner + manager + ~10", proplus: "Custom hierarchy" },
  { feature: "POS scan, cart, print, offline", lite: "Full", standard: "Full", pro: "Full", proplus: "Full" },
  { feature: "SKU / product cap", lite: "~300", standard: "~1,000", pro: "Unlimited", proplus: "Unlimited" },
  { feature: "Customers + udhaar", lite: "Basic", standard: "Full + wasooli", pro: "Full + credit reports", proplus: "Advanced ledger" },
  { feature: "Shift close — cash vs POS", lite: "Tonight’s close", standard: "Full", pro: "Full + log history", proplus: "Full + log history" },
  { feature: "Sales & profit reports", lite: "Today only", standard: "Today only", pro: "Day / week / month", proplus: "Custom date ranges" },
  { feature: "CSV export / bulk import", lite: "Locked", standard: "Locked", pro: "Full", proplus: "Full" },
  { feature: "Industry extras", lite: "Simple SKU", standard: "Simple SKU", pro: "Included", proplus: "Included" },
  { feature: "WhatsApp / email daily EOD", lite: "Locked", standard: "Locked", pro: "Add-on Rs 999", proplus: "Included" },
  { feature: "Extra till", lite: "—", standard: "—", pro: "Rs 1,000 / till", proplus: "Included" },
  { feature: "Multi-branch + stock transfer", lite: "No", standard: "No", pro: "Add-on Rs 2,500 / br", proplus: "Included" },
  { feature: "FBR + white-label receipt", lite: "No", standard: "No", pro: "No", proplus: "Included" },
];

export const faqs = [
  {
    q: "Can I click a button and start?",
    a: "No. Signup is off. We create the organisation and hand you an owner code. WhatsApp is the door. Fourteen days of Pro-shaped access first, then you pick Lite, Standard, Pro, or Pro+.",
  },
  {
    q: "Lite or Standard?",
    a: "Lite is Android / tablet only — one till, owner, ~300 SKUs, today’s sale. Standard is the desktop counter plus Android, one till, owner + one cashier, ~1,000 SKUs, full udhaar and shift close. Most single kiranas land on Standard.",
  },
  {
    q: "What is the WhatsApp daily EOD?",
    a: "A PDF of the day’s ledger to the owner’s WhatsApp or email at close — built for the owner who is not always at the counter. Locked on Lite and Standard. Rs 999 / month add-on on Pro. Included on Pro+.",
  },
  {
    q: "How many tills on Pro?",
    a: "Three tills in the Rs 7,499 band. Each extra till is Rs 1,000 / month. Unlimited tills live on Pro+.",
  },
  {
    q: "Is shift closing on Standard?",
    a: "Yes. Standard includes cash in the drawer versus POS cash sales. Lite has tonight’s close on the phone. Pro adds date and cashier filters across many closes.",
  },
  {
    q: "Do you take cards or JazzCash inside Omni Ledger?",
    a: "Card is a payment type label on the ticket, not a machine integration. Billing you for the SaaS is a bank transfer / WhatsApp conversation.",
  },
  {
    q: "FBR / PRA digital invoicing?",
    a: "Not on Lite, Standard, or Pro. It is included on Pro+ — with white-label receipts — when the integration is real for your province. We will not demo a push that is not live.",
  },
  {
    q: "One login for many branches?",
    a: "Not on Lite or Standard. Pro can add a branch at Rs 2,500 / month per branch. Unlimited branches and stock transfer are included on Pro+.",
  },
];
