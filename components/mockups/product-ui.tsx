import { cn } from "@/lib/utils";

export function PosTerminal({
  accent = "var(--amber)",
  shop = "Cantt Kirana",
  offline = true,
  lines = [
    { name: "Ata 10kg", qty: 1, price: "1,850" },
    { name: "Oil 5L", qty: 2, price: "3,240" },
    { name: "Milk 1.5L", qty: 3, price: "630" },
  ],
  total = "5,720",
  className,
}: {
  accent?: string;
  shop?: string;
  offline?: boolean;
  lines?: { name: string; qty: number; price: string }[];
  total?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-surface",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: accent }}
          />
          <span className="text-xs text-paper">{shop}</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-mute">
          {offline && (
            <span className="rounded-full border border-line px-2 py-0.5 text-amber">
              Offline · queued
            </span>
          )}
          <span>Shift open</span>
        </div>
      </div>
      <div className="grid gap-px bg-line md:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-surface p-4">
          <div className="rounded-lg border border-line bg-ink px-3 py-2 font-mono text-xs text-mute">
            Scan or search…
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["Atta", "Oil", "Soap", "Tea", "Sugar", "Eggs"].map((p) => (
              <div
                key={p}
                className="rounded-lg border border-line bg-ink px-2 py-3 text-center text-[11px] text-paper"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-ink p-4">
          <p className="eyebrow">Cart</p>
          <ul className="mt-3 space-y-2">
            {lines.map((l) => (
              <li
                key={l.name}
                className="flex items-baseline justify-between text-sm"
              >
                <span className="text-paper">
                  {l.name}
                  <span className="ml-2 font-mono text-[10px] text-mute">
                    ×{l.qty}
                  </span>
                </span>
                <span className="font-mono text-xs text-mute">{l.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between border-t border-line pt-3">
            <span className="text-xs text-mute">Due</span>
            <span className="font-display text-2xl tracking-tight">{total}</span>
          </div>
          <div
            className="mt-3 grid place-items-center rounded-full py-2.5 text-sm font-medium text-[#1a0d04]"
            style={{ background: accent }}
          >
            Pay cash
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardMock({ className }: { className?: string }) {
  const bars = [40, 65, 52, 88, 70, 95, 60];
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-surface p-5",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <p className="eyebrow">Owner · today</p>
        <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] text-teal">
          Profit locked
        </span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          ["Sale", "84,220"],
          ["Bills", "61"],
          ["Expected", "12,400"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-line bg-ink p-3">
            <p className="font-mono text-[10px] uppercase tracking-wider text-mute">
              {k}
            </p>
            <p className="mt-1 font-display text-xl tracking-tight">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex h-24 items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-teal/80"
            style={{ height: `${h}%`, opacity: 0.35 + i * 0.08 }}
          />
        ))}
      </div>
      <p className="mt-3 text-[11px] text-mute">
        Cashier never sees this pane. Manager neither. Role rule, not a plan rule.
      </p>
    </div>
  );
}

export function LotBoard({ className }: { className?: string }) {
  const rows = [
    { lot: "L-204", name: "Amox 250", exp: "18d", qty: "42", hot: true },
    { lot: "L-188", name: "Amox 250", exp: "61d", qty: "120", hot: false },
    { lot: "L-311", name: "Syrup 60ml", exp: "29d", qty: "18", hot: true },
    { lot: "L-090", name: "ORS", exp: "140d", qty: "200", hot: false },
  ];
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-line bg-surface", className)}>
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="eyebrow">Lots · FEFO</p>
        <span className="font-mono text-[10px] text-pharmacy">30 / 60 day</span>
      </div>
      <table className="w-full text-left text-sm">
        <thead className="font-mono text-[10px] uppercase tracking-wider text-mute">
          <tr>
            <th className="px-4 py-2">Lot</th>
            <th className="px-2 py-2">SKU</th>
            <th className="px-2 py-2">Expiry</th>
            <th className="px-4 py-2 text-right">Qty</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.lot} className="border-t border-line">
              <td className="px-4 py-2.5 font-mono text-xs">{r.lot}</td>
              <td className="px-2 py-2.5">{r.name}</td>
              <td className={cn("px-2 py-2.5 font-mono text-xs", r.hot && "text-danger")}>
                {r.exp}
              </td>
              <td className="px-4 py-2.5 text-right font-mono text-xs">{r.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TableFloor({ className }: { className?: string }) {
  const tables = [
    { n: 1, s: "free" },
    { n: 2, s: "bill" },
    { n: 3, s: "busy" },
    { n: 4, s: "busy" },
    { n: 5, s: "free" },
    { n: 6, s: "busy" },
    { n: 7, s: "free" },
    { n: 8, s: "kot" },
  ];
  return (
    <div className={cn("rounded-2xl border border-line bg-surface p-5", className)}>
      <p className="eyebrow">Floor · dine-in</p>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {tables.map((t) => (
          <div
            key={t.n}
            className="aspect-square rounded-xl border border-line grid place-items-center"
            style={{
              background:
                t.s === "free"
                  ? "transparent"
                  : t.s === "bill"
                    ? "color-mix(in srgb, var(--gold) 18%, transparent)"
                    : "color-mix(in srgb, var(--restaurant) 22%, transparent)",
              boxShadow:
                t.s === "busy" || t.s === "kot"
                  ? "inset 0 0 0 1px var(--restaurant)"
                  : undefined,
            }}
          >
            <div className="text-center">
              <p className="font-display text-xl tracking-tight">{t.n}</p>
              <p className="font-mono text-[9px] uppercase tracking-wider text-mute">
                {t.s}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GarmentMatrix({ className }: { className?: string }) {
  const sizes = ["S", "M", "L", "XL"];
  const colors = [
    { n: "Ink", c: "#1B2436" },
    { n: "Wine", c: "#C45B8A" },
    { n: "Sand", c: "#D4A017" },
  ];
  const stock = [
    [4, 0, 6, 8],
    [2, 1, 0, 3],
    [5, 7, 4, 2],
  ];
  return (
    <div className={cn("rounded-2xl border border-line bg-surface p-5", className)}>
      <p className="eyebrow">Parent · Oxford shirt</p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-center text-xs">
          <thead>
            <tr>
              <th className="pb-2 text-left font-mono text-[10px] text-mute"> </th>
              {sizes.map((s) => (
                <th key={s} className="pb-2 font-mono text-[10px] text-mute">
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {colors.map((col, i) => (
              <tr key={col.n}>
                <td className="py-1.5 text-left">
                  <span className="inline-flex items-center gap-2">
                    <i
                      className="inline-block h-3 w-3 rounded-full"
                      style={{ background: col.c }}
                    />
                    {col.n}
                  </span>
                </td>
                {sizes.map((s, j) => (
                  <td key={s} className="py-1.5">
                    <span
                      className={cn(
                        "inline-grid h-9 w-9 place-items-center rounded-md border font-mono",
                        stock[i][j] === 0
                          ? "border-danger/40 text-danger"
                          : "border-line text-paper",
                      )}
                    >
                      {stock[i][j]}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
