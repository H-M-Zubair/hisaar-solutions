"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  demoHourly,
  demoInventory,
  demoKpis,
  demoPayments,
  demoPeriods,
  demoTopSkus,
  demoTrend,
  type DemoPeriod,
} from "@/lib/demo-analytics";

function linePath(points: number[], w: number, h: number) {
  const max = Math.max(...points, 1);
  const step = w / Math.max(points.length - 1, 1);
  return points
    .map((p, i) => {
      const x = i * step;
      const y = h - (p / max) * (h - 8) - 4;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

export function OwnerAnalytics({ className }: { className?: string }) {
  const [period, setPeriod] = React.useState<DemoPeriod>("monthly");
  const k = demoKpis[period];
  const trend = demoTrend[period];
  const rev = trend.map((t) => t.revenue);
  const profit = trend.map((t) => t.profit);
  const locked = period !== "daily";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-surface",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
        <div>
          <p className="eyebrow">Owner · reports</p>
          <p className="mt-1 text-sm text-mute">
            Same charts as the live dashboard. Profit stays off the cashier screen.
          </p>
        </div>
        <div className="flex flex-wrap gap-1 rounded-full border border-line p-1">
          {demoPeriods.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPeriod(p.id)}
              className={cn(
                "rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors",
                period === p.id
                  ? "bg-amber text-[#1a0d04]"
                  : "text-mute hover:text-paper",
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {locked && (
        <p className="border-b border-line bg-ink px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-amber sm:px-5">
          Lite and Standard keep today. Pro unlocks week / month / year.
        </p>
      )}

      <div className="grid gap-px bg-line sm:grid-cols-3 lg:grid-cols-6">
        {(
          [
            ["Revenue", k.revenue, k.revTrend],
            ["Sales", k.orders, k.revTrend],
            ["Profit", k.profit, k.profitTrend],
            ["Customers", k.customers, "+4.2%"],
            ["AOV", k.aov, "+2.1%"],
            ["Margin", k.margin, k.profitTrend],
          ] as const
        ).map(([label, value, trendLabel]) => (
          <div key={label} className="bg-surface p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-mute">
              {label}
            </p>
            <p className="mt-1 font-display text-xl tracking-tight sm:text-2xl">
              {label === "Revenue" || label === "Profit" || label === "AOV"
                ? `Rs ${value}`
                : value}
            </p>
            <p className="mt-1 font-mono text-[10px] text-teal">{trendLabel}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-px bg-line lg:grid-cols-[1.4fr_0.8fr]">
        <div className="bg-ink p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-paper">Revenue & profit</p>
            <div className="flex gap-3 font-mono text-[10px] uppercase tracking-wider text-mute">
              <span className="flex items-center gap-1.5">
                <i className="h-1.5 w-3 rounded-full bg-amber" /> Rev
              </span>
              <span className="flex items-center gap-1.5">
                <i className="h-1.5 w-3 rounded-full bg-teal" /> Profit
              </span>
            </div>
          </div>
          <svg
            viewBox="0 0 400 140"
            className="mt-4 h-36 w-full overflow-visible"
            aria-hidden
          >
            <path
              d={linePath(rev, 400, 140)}
              fill="none"
              stroke="var(--amber)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={linePath(profit, 400, 140)}
              fill="none"
              stroke="var(--teal)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="mt-1 flex justify-between font-mono text-[10px] text-mute">
            {trend.map((t) => (
              <span key={t.label}>{t.label}</span>
            ))}
          </div>
        </div>

        <div className="bg-surface p-4 sm:p-5">
          <p className="text-sm text-paper">Tender mix</p>
          <ul className="mt-4 space-y-3">
            {demoPayments.map((p) => (
              <li key={p.type}>
                <div className="flex justify-between text-xs">
                  <span className="text-mute">{p.type}</span>
                  <span className="font-mono text-paper">{p.share}%</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-ink">
                  <div
                    className="h-full rounded-full bg-amber"
                    style={{ width: `${p.share}%`, opacity: 0.45 + p.share / 120 }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-px bg-line lg:grid-cols-3">
        <div className="bg-surface p-4 sm:p-5">
          <p className="text-sm text-paper">Hourly rush</p>
          <div className="mt-4 flex h-28 items-end gap-1.5">
            {demoHourly.map((b) => (
              <div key={b.h} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded-sm bg-teal/80"
                  style={{ height: `${b.v}%` }}
                />
                <span className="font-mono text-[9px] text-mute">{b.h}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-ink p-4 sm:p-5">
          <p className="text-sm text-paper">Hot SKUs</p>
          <ul className="mt-3 space-y-2">
            {demoTopSkus.map((s, i) => (
              <li key={s.sku} className="flex items-baseline justify-between gap-3 text-xs">
                <span className="truncate text-paper">
                  <span className="mr-2 font-mono text-teal">0{i + 1}</span>
                  {s.name}
                </span>
                <span className="shrink-0 font-mono text-mute">{s.sold}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-surface p-4 sm:p-5">
          <p className="text-sm text-paper">Inventory health</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {[
              ["SKUs", demoInventory.skus, false],
              ["Value", demoInventory.value, false],
              ["Low stock", demoInventory.low, true],
              ["Out", demoInventory.out, true],
            ].map(([label, value, hot]) => (
              <div key={String(label)} className="rounded-xl border border-line bg-ink p-3">
                <p className="font-mono text-[10px] uppercase tracking-wider text-mute">
                  {label}
                </p>
                <p
                  className={cn(
                    "mt-1 font-display text-lg tracking-tight",
                    hot && "text-amber",
                  )}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
