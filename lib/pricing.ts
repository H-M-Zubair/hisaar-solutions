import { formatPkr } from "./utils";

export type BillingCycle = "monthly" | "annual";

export const plans = [
  {
    id: "lite",
    name: "Mobile",
    monthlyPrice: 1999,
    annualDiscountPct: 5,
    quoted: false,
    period: "/ month · Android only",
    priceAlt: "",
    periodAlt: "",
    eyebrow: "Phone · tablet",
    blurb:
      "One phone. One small shop. Today’s sales. That is it — no computer at the counter.",
    cta: "Start on Mobile",
    featured: false,
    points: [
      "Android / tablet only — one till",
      "Scan, bill, print, works without internet",
      "Up to ~300 items",
      "Basic udhaar",
      "Today’s sales only — no week / month charts",
      "Owner only (no cashier seat)",
    ],
  },
  {
    id: "standard",
    name: "Starter",
    monthlyPrice: 3499,
    annualDiscountPct: 6,
    quoted: false,
    period: "/ month · desktop + Android",
    priceAlt: "",
    periodAlt: "",
    eyebrow: "Counter",
    blurb:
      "A computer at the counter, phone as backup. Full udhaar. This week’s hisaab. One extra cashier. Night cash count.",
    cta: "Talk Starter",
    featured: true,
    points: [
      "Desktop + Android — 1 till / counter",
      "Full POS, offline, receipts, returns, void",
      "Up to ~2,000 items · bulk import to start",
      "Full udhaar + wasooli",
      "Shift close + last 7 nights of cash audit",
      "Today and this week — month is Pro",
      "Owner + 1 cashier (no Manager)",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 7499,
    annualDiscountPct: 8,
    quoted: false,
    period: "/ month · up to 3 tills",
    priceAlt: "Rs 1,000",
    periodAlt: "/ extra till",
    eyebrow: "From home",
    blurb:
      "More counters, a manager, complete profit reports, supplier hisaab, loyalty, and optional WhatsApp EOD.",
    cta: "Talk Pro",
    featured: false,
    points: [
      "Desktop + Android — up to 3 tills",
      "Owner + manager + ~10 staff",
      "Up to ~10,000 items · import + CSV export",
      "Day, week, month, year, custom dates + profit",
      "Full udhaar · supplier ledger · loyalty",
      "Complete cash-audit / shift history",
      "Industry pack: lots / tables / leftover kinds",
      "WhatsApp / email EOD add-on · Rs 999",
      "Extra till · Rs 1,000 / month",
    ],
  },
  {
    id: "proplus",
    name: "Pro+ Custom",
    monthlyPrice: 12500,
    annualDiscountPct: 0,
    quoted: true,
    period: "/ month · quoted",
    priceAlt: "",
    periodAlt: "",
    eyebrow: "Chains · compliance",
    blurb:
      "Many tills, many shops, tax bills, your logo on receipts, and tonight’s hisaab on WhatsApp. We quote this when you need it.",
    cta: "Ask about Pro+ Custom",
    featured: false,
    points: [
      "All platforms · multi-device · up to 99 staff",
      "Custom staff hierarchy",
      "Up to ~100,000 items",
      "FBR / PRA digital invoicing included",
      "White-label receipts & branded header",
      "Multi-branch + stock transfer included",
      "WhatsApp / email EOD included",
      "Custom date ranges across branches",
      "Dedicated onboarding",
    ],
  },
] as const;

export type Plan = (typeof plans)[number];

export const priceLineMonthly =
  "Mobile Rs 1,999 · Starter Rs 3,499 · Pro Rs 7,499 · Pro+ Custom from Rs 12,500";

export function annualYearlyTotal(monthly: number, discountPct: number) {
  return Math.round(monthly * 12 * (1 - discountPct / 100));
}

export function annualPerMonth(monthly: number, discountPct: number) {
  return Math.round(annualYearlyTotal(monthly, discountPct) / 12);
}

export function displayPlanPrice(plan: Plan, cycle: BillingCycle) {
  if (plan.quoted) {
    return {
      amount: `${formatPkr(plan.monthlyPrice)}+`,
      period: plan.period,
      yearly: null as number | null,
      savePct: 0,
    };
  }
  if (cycle === "annual" && plan.annualDiscountPct > 0) {
    const yearly = annualYearlyTotal(plan.monthlyPrice, plan.annualDiscountPct);
    return {
      amount: formatPkr(annualPerMonth(plan.monthlyPrice, plan.annualDiscountPct)),
      period: "/ month · billed annually",
      yearly,
      savePct: plan.annualDiscountPct,
    };
  }
  return {
    amount: formatPkr(plan.monthlyPrice),
    period: plan.period,
    yearly: null as number | null,
    savePct: 0,
  };
}

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
  { feature: "Billing + works without internet", lite: "Full", standard: "Full", pro: "Full", proplus: "Full" },
  { feature: "How many items", lite: "~300", standard: "~2,000", pro: "~10,000", proplus: "~100,000" },
  { feature: "Customers + udhaar (credit)", lite: "Basic", standard: "Full + wasooli", pro: "Full + credit reports", proplus: "Advanced ledger" },
  { feature: "Night cash count", lite: "Tonight’s close", standard: "Last 7 nights", pro: "Full + history", proplus: "Full + history" },
  { feature: "Sales reports", lite: "Today only", standard: "Today + this week", pro: "Day / week / month / year + custom dates", proplus: "Custom dates across branches" },
  { feature: "Profit & margin", lite: "Locked", standard: "Locked", pro: "Full", proplus: "Full" },
  { feature: "Bulk import", lite: "Locked", standard: "Full", pro: "Full", proplus: "Full" },
  { feature: "CSV export", lite: "Locked", standard: "Locked", pro: "Full", proplus: "Full" },
  { feature: "Supplier ledger", lite: "Locked", standard: "Locked", pro: "Full", proplus: "Full" },
  { feature: "Customer loyalty", lite: "Locked", standard: "Locked", pro: "Full", proplus: "Full" },
  { feature: "Shop extras", lite: "Simple items", standard: "Simple items", pro: "Included", proplus: "Included" },
  { feature: "WhatsApp / email daily EOD", lite: "Locked", standard: "Locked", pro: "Add-on Rs 999", proplus: "Included" },
  { feature: "Extra till", lite: "—", standard: "—", pro: "Rs 1,000 / till", proplus: "Included" },
  { feature: "Multi-branch + stock transfer", lite: "No", standard: "No", pro: "Add-on Rs 2,500 / br", proplus: "Included" },
  { feature: "FBR + white-label receipt", lite: "No", standard: "No", pro: "No", proplus: "Included" },
];

export const faqs = [
  {
    q: "Can I sign up myself?",
    a: "No. You WhatsApp us. We set up the shop and send you an owner code. Fourteen days to try, then you pick Mobile, Starter, Pro, or Pro+ Custom.",
  },
  {
    q: "Phone only, or a computer at the counter?",
    a: "Mobile is phone / tablet only — one till, owner, about 300 items, today’s sale. Starter is a computer at the counter plus the phone, one till, owner + one cashier, about 2,000 items, bulk import to get your list in, full udhaar, and this week’s sale with the last seven nights of cash count. Most single kiranas land on Starter.",
  },
  {
    q: "What if I pay for a year?",
    a: "Versus twelve monthly payments: Mobile saves 5%, Starter 6%, Pro 8%. You still see a monthly figure; you pay once a year. Pro+ Custom is quoted — yearly is part of that talk.",
  },
  {
    q: "What is the WhatsApp night report?",
    a: "A PDF of today’s hisaab to the owner’s WhatsApp or email at close — for the owner who is not always at the counter. Not on Mobile or Starter. Rs 999 / month extra on Pro. Included on Pro+ Custom.",
  },
  {
    q: "How many counters on Pro?",
    a: "Three tills in the Rs 7,499 band. Each extra till is Rs 1,000 / month. Every login ID stays limited to one device; multi-device sessions are Pro+ Custom.",
  },
  {
    q: "Can I close the drawer on Starter?",
    a: "Yes. Starter counts cash in the drawer versus POS cash sales. Mobile has tonight’s close on the phone. Pro adds date and cashier filters across many nights.",
  },
  {
    q: "Do you take cards or JazzCash inside Omni Ledger?",
    a: "Inside the till, card is only a mark on the bill — not a JazzCash machine. To pay Hisaar for the software: JazzCash, EasyPaisa, or SadaPay to 0303 0609872, or Bank Alfalah (Muhammad Zubair Rafiq). WhatsApp the screenshot to the same number. Access continues after we allot the plan.",
  },
  {
    q: "How do I pay for Omni Ledger?",
    a: "Open hisaarsolutions.com/pay. Send JazzCash, EasyPaisa, SadaPay, or a Bank Alfalah transfer, then WhatsApp the screenshot. Payment does not unlock the shop by itself — Hisaar allots Mobile / Starter / Pro after seeing the proof.",
  },
  {
    q: "Government tax bills (FBR / PRA)?",
    a: "Not on Mobile, Starter, or Pro. Included on Pro+ Custom — with your logo on receipts — when it is live for your province. We will not show a demo of a push that is not real.",
  },
  {
    q: "One login for many shops?",
    a: "Not on Mobile or Starter. Pro can add a branch at Rs 2,500 / month per branch. Unlimited shops and stock transfer are included on Pro+ Custom.",
  },
];
