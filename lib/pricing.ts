export const plans = [
  {
    id: "trial",
    name: "14-day trial",
    price: "Rs 0",
    period: "full Pro access",
    priceAlt: "",
    periodAlt: "",
    eyebrow: "Provisioned",
    blurb:
      "Fourteen days of the whole ledger, including your industry pack. Clock starts on the first sale. We create the organisation — you do not sign up.",
    cta: "Request a trial",
    featured: false,
    points: [
      "POS, stock, udhaar, offline, print",
      "Week / month / year reports + profit",
      "Shift close + your industry Pro extras",
      "Unlimited staff during trial",
      "3-day grace after day 14",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    price: "Rs 2,999",
    period: "/ month / shop",
    priceAlt: "",
    periodAlt: "",
    eyebrow: "Counter",
    blurb:
      "One till, today’s hisaab, one extra cashier — and a close that names the shortage. Built for the owner who still stands at the counter.",
    cta: "Start from trial",
    featured: false,
    points: [
      "Full POS, offline, receipts, returns, void",
      "Products, stock in/out, ~500 SKU",
      "Customers + udhaar + wasooli",
      "Shift close: cash in drawer vs POS sales",
      "Today’s sale — no week/month charts",
      "Owner + 1 cashier (no Manager role)",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "Rs 4,999",
    period: "/ mo · billed annually",
    priceAlt: "Rs 6,999",
    periodAlt: "/ mo paid monthly",
    eyebrow: "Owner’s brain",
    blurb:
      "Starter is today. Pro is twelve months of profit and every cashier’s drawer. Annual locks the rate; monthly stays flexible.",
    cta: "Talk Pro",
    featured: true,
    points: [
      "Daily / weekly / monthly / yearly + CSV",
      "Owner-only profit, margin, rush hours",
      "Manager role + ~10 staff seats",
      "Loyalty, bulk import, shift-log history",
      "Industry pack: lots / tables / matrix",
      "Save ~Rs 24,000 / year vs monthly",
    ],
  },
  {
    id: "proplus",
    name: "Pro+",
    price: "Custom",
    period: "quoted",
    priceAlt: "",
    periodAlt: "",
    eyebrow: "Add-ons · chains",
    blurb:
      "Multi-branch and FBR / PRA digital invoicing live here as quoted add-ons — not inside Starter or Pro. We do not sell a chain SKU to a single kirana.",
    cta: "Ask about add-ons",
    featured: false,
    points: [
      "FBR / local tax digital invoicing (add-on)",
      "Branches + stock transfer (planned)",
      "Central reports (planned)",
      "Dedicated onboarding",
      "Quoted per shop when the work is real",
    ],
  },
] as const;

export const matrix: { feature: string; trial: string; starter: string; pro: string }[] = [
  { feature: "POS scan, cart, cash/card, print", trial: "Full", starter: "Full", pro: "Full" },
  { feature: "Offline sale + sync", trial: "Full", starter: "Full", pro: "Full" },
  { feature: "Products + stock in/out", trial: "Full", starter: "SKU cap", pro: "Unlimited" },
  { feature: "Invoices, return, void", trial: "Full", starter: "Full", pro: "Full" },
  { feature: "Customers + udhaar", trial: "Full", starter: "Full", pro: "Full + credit reports" },
  { feature: "Today’s summary", trial: "Full", starter: "Today only", pro: "Full" },
  { feature: "Week / month / year + charts", trial: "Full", starter: "Locked", pro: "Full" },
  { feature: "Profit / margin (owner)", trial: "Full", starter: "Locked", pro: "Full" },
  { feature: "CSV export / bulk import", trial: "Full", starter: "Locked", pro: "Full" },
  { feature: "Loyalty points", trial: "Full", starter: "Locked", pro: "Full" },
  { feature: "Staff seats", trial: "Unlimited", starter: "Owner + 1", pro: "Owner + manager + ~10" },
  { feature: "Manager role", trial: "Yes", starter: "No", pro: "Yes" },
  { feature: "Shift close — cash vs POS", trial: "Full", starter: "Full", pro: "Full" },
  { feature: "Shift logs history", trial: "Yes", starter: "Locked", pro: "Yes" },
  { feature: "Industry extras", trial: "Your Pro pack", starter: "Simple SKU", pro: "Included" },
  { feature: "FBR / PRA digital invoicing", trial: "Add-on", starter: "Add-on", pro: "Add-on · Pro+" },
  { feature: "Multi-branch", trial: "No", starter: "No", pro: "No (Pro+)" },
];

export const faqs = [
  {
    q: "Can I click a button and start the trial?",
    a: "No. Signup is off. We create the organisation, load a starter catalogue if you want, and hand you an owner access code plus one cashier. WhatsApp is the door.",
  },
  {
    q: "Is the trial a cut-down app?",
    a: "No. Fourteen days of full Pro — including your industry pack. The clock starts on the first sale, not on an empty login. After that you choose Starter or Pro. Data is not deleted on downgrade. Three days of grace, then new sales lock.",
  },
  {
    q: "Why is POS — and shift close — on Starter?",
    a: "If we lock the till, you go back to the register copy. If we lock tonight’s drawer count, cashier fraud has nowhere to show. History, profit, extra staff, loyalty, and industry extras are the Pro upsell. The close that names the shortage is table-stakes.",
  },
  {
    q: "Pro monthly or annually?",
    a: "Rs 6,999 / month if you pay month to month. Rs 4,999 / month if you bill the year up front — same Pro, cashflow lock-in. Starter stays Rs 2,999 / month per shop.",
  },
  {
    q: "Do you take cards or JazzCash inside Omni Ledger?",
    a: "Card is a payment type label on the ticket, not a machine integration. Billing you for the SaaS is currently a bank transfer / WhatsApp conversation. We do not pretend otherwise.",
  },
  {
    q: "FBR / PRA digital invoicing?",
    a: "Pakistan retail needs it. It is not inside Starter or Pro today. We list it as a quoted add-on on Pro+ — when the integration is real for your province, we sell that work, not a checkbox.",
  },
  {
    q: "One login for many branches?",
    a: "Not today. One organisation is one store. Pro+ is the slot for chains. We will not demo fifty branches from one account.",
  },
];
