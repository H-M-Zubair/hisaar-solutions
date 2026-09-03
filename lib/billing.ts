import {
  annualYearlyTotal,
  displayPlanPrice,
  plans,
  type BillingCycle,
  type Plan,
} from "./pricing";
import { formatPkr, waLink } from "./utils";

export type SitePlanId = "lite" | "standard" | "pro" | "proplus";
export type PayIntent = "pay" | "change";

export type BillingAccounts = {
  accountTitle: string;
  wallet: string;
  walletDisplay: string;
  bankName: string;
  iban: string;
  ibanDisplay: string;
  accountNumber: string;
  whatsappDigits: string;
};

const DEFAULT_WALLET = "03030609872";
const DEFAULT_IBAN = "PK76BAHL5515182300959401";

export function compactDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function formatPkMobile(raw: string) {
  const d = compactDigits(raw);
  if (d.length === 11 && d.startsWith("03")) {
    return `${d.slice(0, 4)} ${d.slice(4)}`;
  }
  if (d.length === 12 && d.startsWith("92")) {
    return `0${d.slice(2, 5)} ${d.slice(5)}`;
  }
  return raw.trim();
}

export function formatIban(raw: string) {
  const compact = raw.replace(/\s/g, "").toUpperCase();
  return compact.replace(/(.{4})/g, "$1 ").trim();
}

export function getBillingAccounts(): BillingAccounts {
  const wallet = compactDigits(process.env.HISAAR_JAZZCASH || process.env.HISAAR_EASYPAISA || process.env.HISAAR_SADAPAY || DEFAULT_WALLET) || DEFAULT_WALLET;
  const iban = (process.env.HISAAR_IBAN || DEFAULT_IBAN).replace(/\s/g, "").toUpperCase();
  const wa = compactDigits(process.env.HISAAR_WHATSAPP || "923030609872") || "923030609872";

  return {
    accountTitle: process.env.HISAAR_ACCOUNT_TITLE || "Muhammad Zubair Rafiq",
    wallet,
    walletDisplay: formatPkMobile(wallet),
    bankName: process.env.HISAAR_BANK_NAME || "Bank Alfalah",
    iban,
    ibanDisplay: formatIban(iban),
    accountNumber: process.env.HISAAR_ACCOUNT_NUMBER || "5515-1823-009594-01-0",
    whatsappDigits: wa.startsWith("92") ? wa : `92${wa.replace(/^0/, "")}`,
  };
}

export function sanitizeShopName(raw?: string | null) {
  if (!raw) return "";
  return raw.replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, 80);
}

export function parseSitePlan(raw?: string | null): SitePlanId {
  const key = (raw || "").trim().toLowerCase().replace(/[\s+]/g, "_");
  if (key === "lite" || key === "mobile" || key === "l") return "lite";
  if (key === "standard" || key === "starter" || key === "s") return "standard";
  if (key === "proplus" || key === "pro_plus" || key === "plus") return "proplus";
  if (key === "pro") return "pro";
  return "standard";
}

export function parsePayIntent(raw?: string | null): PayIntent {
  const key = (raw || "").trim().toLowerCase();
  if (key === "change" || key === "upgrade") return "change";
  return "pay";
}

export function parseBillingCycle(raw?: string | null): BillingCycle {
  return (raw || "").trim().toLowerCase() === "annual" ? "annual" : "monthly";
}

export function sitePlanById(id: SitePlanId): Plan {
  return plans.find((p) => p.id === id) ?? plans[1];
}

export function payablePlans() {
  return plans.filter((p) => !p.quoted);
}

export function amountFor(plan: Plan, cycle: BillingCycle) {
  if (plan.quoted) {
    return {
      label: `${formatPkr(plan.monthlyPrice)}+ / month (quoted)`,
      copyAmount: "",
    };
  }
  if (cycle === "annual") {
    const yearly = annualYearlyTotal(plan.monthlyPrice, plan.annualDiscountPct);
    const shown = displayPlanPrice(plan, cycle);
    return {
      label: `${shown.amount} / month · ${formatPkr(yearly)} once a year`,
      copyAmount: String(yearly),
    };
  }
  return {
    label: `${formatPkr(plan.monthlyPrice)} / month`,
    copyAmount: String(plan.monthlyPrice),
  };
}

export function paymentProofMessage({
  shop,
  plan,
  cycle,
  method,
}: {
  shop: string;
  plan: Plan;
  cycle: BillingCycle;
  method: string;
}) {
  const amount = amountFor(plan, cycle);
  const shopLine = shop || "(shop name)";
  return [
    "Hi Hisaar — Omni Ledger payment.",
    "",
    `Shop: ${shopLine}`,
    `Plan: ${plan.name}`,
    `Amount: ${amount.label}`,
    `Sent via: ${method}`,
    "",
    "I am attaching the payment screenshot / SMS on this chat.",
    "Please allot access so the shop can continue.",
  ].join("\n");
}

export function paymentWhatsAppHref(message: string, digits: string) {
  const base = `https://wa.me/${digits}`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function quoteWhatsAppHref(shop: string) {
  return waLink(
    `Hi Hisaar — I want Pro+ Custom for ${shop || "my shop"}. Please quote.`,
  );
}
