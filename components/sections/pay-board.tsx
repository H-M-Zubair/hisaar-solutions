"use client";

import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";
import {
  amountFor,
  paymentProofMessage,
  paymentWhatsAppHref,
  payablePlans,
  quoteWhatsAppHref,
  type BillingAccounts,
  type PayIntent,
  type SitePlanId,
} from "@/lib/billing";
import { displayPlanPrice, type BillingCycle, type Plan } from "@/lib/pricing";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const METHODS = [
  { id: "JazzCash", label: "JazzCash" },
  { id: "EasyPaisa", label: "EasyPaisa" },
  { id: "SadaPay", label: "SadaPay" },
  { id: "Bank Alfalah", label: "Bank transfer" },
] as const;

function WhatsAppMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CopyRow({
  label,
  value,
  copyValue,
  hint,
}: {
  label: string;
  value: string;
  copyValue?: string;
  hint?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const text = copyValue ?? value;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex items-start justify-between gap-3 border-t border-line py-3 first:border-t-0 first:pt-0">
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute">{label}</p>
        <p className="mt-1 break-all font-display text-lg tracking-tight text-paper">{value}</p>
        {hint ? <p className="mt-1 text-xs text-mute">{hint}</p> : null}
      </div>
      <button
        type="button"
        onClick={copy}
        className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-line px-3 text-xs text-paper hover:border-teal hover:text-teal"
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check className="h-3.5 w-3.5 text-teal" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export function PayBoard({
  accounts,
  shop,
  initialPlan,
  initialIntent,
  initialCycle,
}: {
  accounts: BillingAccounts;
  shop: string;
  initialPlan: SitePlanId;
  initialIntent: PayIntent;
  initialCycle: BillingCycle;
}) {
  const [planId, setPlanId] = useState<SitePlanId>(
    initialPlan === "proplus" ? "pro" : initialPlan,
  );
  const [cycle, setCycle] = useState<BillingCycle>(initialCycle);
  const [method, setMethod] = useState<(typeof METHODS)[number]["id"]>("JazzCash");

  const plan = useMemo(
    () => payablePlans().find((p) => p.id === planId) as Plan,
    [planId],
  );
  const amount = amountFor(plan, cycle);
  const proof = paymentProofMessage({
    shop,
    plan,
    cycle,
    method,
  });
  const waHref = paymentWhatsAppHref(proof, accounts.whatsappDigits);
  const changing = initialIntent === "change";

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
      <div>
        {shop ? (
          <p className="rounded-full border border-teal/30 bg-teal/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-teal">
            Paying for {shop}
          </p>
        ) : (
          <p className="text-sm text-mute">
            Paying for an existing Omni Ledger shop. Name the shop in the WhatsApp you send.
          </p>
        )}

        <h2 className="display mt-5 text-3xl sm:text-4xl">
          {changing ? "Pick the plan, then send the amount." : "Send the amount, then send the proof."}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-mute">
          JazzCash, EasyPaisa, SadaPay, or Bank Alfalah. Screenshot or SMS goes to WhatsApp{" "}
          {accounts.walletDisplay}. Access continues after Hisaar allots the plan — payment
          does not unlock the till by itself.
        </p>

        <div
          className="mt-8 inline-flex rounded-full border border-line bg-ink p-1"
          role="group"
          aria-label="Billing cycle"
        >
          <button
            type="button"
            onClick={() => setCycle("monthly")}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm transition-colors",
              cycle === "monthly" ? "bg-paper text-ink" : "text-mute hover:text-paper",
            )}
            aria-pressed={cycle === "monthly"}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setCycle("annual")}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm transition-colors",
              cycle === "annual" ? "bg-teal text-ink" : "text-mute hover:text-paper",
            )}
            aria-pressed={cycle === "annual"}
          >
            Annual
            <span className="ml-1.5 font-mono text-[10px] uppercase tracking-[0.12em]">
              save 5–8%
            </span>
          </button>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {payablePlans().map((p) => {
            const shown = displayPlanPrice(p, cycle);
            const selected = p.id === planId;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlanId(p.id as SitePlanId)}
                className={cn(
                  "rounded-2xl border p-4 text-left transition-colors",
                  selected
                    ? "border-amber bg-surface shadow-cta"
                    : "border-line bg-ink hover:border-paper/30",
                )}
                aria-pressed={selected}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
                  {p.eyebrow}
                </p>
                <p className="mt-2 font-display text-xl tracking-tight">{p.name}</p>
                <p className="mt-2 font-display text-2xl tracking-tight text-paper">
                  {shown.amount}
                </p>
                <p className="text-xs text-mute">{shown.period}</p>
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-sm text-mute">
          Need Pro+ Custom?{" "}
          <a
            href={quoteWhatsAppHref(shop)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:underline"
          >
            WhatsApp a quote
          </a>
          .
        </p>
      </div>

      <aside className="space-y-4">
        <div className="rounded-2xl border border-amber/35 bg-surface p-6">
          <p className="eyebrow text-amber">To send</p>
          <p className="mt-3 font-display text-3xl tracking-tight">{amount.label}</p>
          <p className="mt-1 text-sm text-mute">
            {plan.name}
            {shop ? ` · ${shop}` : ""}
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-ink p-6">
          <p className="eyebrow text-teal">Wallets · same number</p>
          <p className="mt-2 text-sm text-mute">
            JazzCash, EasyPaisa, and SadaPay all land on this number.
          </p>
          <div className="mt-4">
            <CopyRow
              label="JazzCash / EasyPaisa / SadaPay"
              value={accounts.walletDisplay}
              copyValue={accounts.wallet}
              hint="Title on the account: Hisaar / Muhammad Zubair Rafiq"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-ink p-6">
          <p className="eyebrow">Bank Alfalah</p>
          <CopyRow label="Account title" value={accounts.accountTitle} />
          <CopyRow
            label="IBAN"
            value={accounts.ibanDisplay}
            copyValue={accounts.iban}
          />
          <CopyRow label="Account number" value={accounts.accountNumber} />
          <CopyRow label="Bank" value={accounts.bankName} />
        </div>

        <div className="rounded-2xl border border-line bg-surface p-6">
          <p className="eyebrow">How you sent it</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {METHODS.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMethod(m.id)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm",
                  method === m.id
                    ? "border-teal bg-teal/15 text-teal"
                    : "border-line text-mute hover:text-paper",
                )}
                aria-pressed={method === m.id}
              >
                {m.label}
              </button>
            ))}
          </div>

          <ol className="mt-5 space-y-2 text-sm text-mute">
            <li>1. Send {amount.label} on {method}.</li>
            <li>2. Open WhatsApp and attach the screenshot or SMS.</li>
            <li>3. Hisaar allots Mobile, Starter, or Pro. Then Omni Ledger continues.</li>
          </ol>

          <Button asChild variant="teal" className="mt-6 w-full">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="I have paid — WhatsApp screenshot to Hisaar Solutions"
            >
              <WhatsAppMark className="h-4 w-4" />
              I have paid — send screenshot
            </a>
          </Button>
          <p className="mt-3 text-xs leading-relaxed text-mute">
            WhatsApp opens to {accounts.walletDisplay} with shop, plan, and amount already
            written. Attach the proof before you hit send.
          </p>
        </div>
      </aside>
    </div>
  );
}
