import { Lock } from "lucide-react";
import { matrix } from "@/lib/pricing";
import { cn } from "@/lib/utils";
import { AwesomeFade } from "@/components/motion/awesome-reveal";

type Col = "lite" | "standard" | "pro" | "proplus";

function cellTone(value: string, col: Col, feature: string) {
  const v = (value ?? "").toLowerCase();
  if (v.includes("locked") || v === "no") return "locked";
  if (v.includes("add-on")) return "addon";
  if (v.includes("included")) return "ok";
  if (col === "standard" && feature.toLowerCase().includes("shift close") && v === "full") {
    return "accent";
  }
  if (feature.toLowerCase().includes("whatsapp") && (v.includes("add-on") || v === "included")) {
    return "accent";
  }
  if (v === "full" || v === "yes" || v.startsWith("unlimited") || v.startsWith("desktop")) {
    return "ok";
  }
  return "plain";
}

function Cell({
  value,
  col,
  feature,
}: {
  value: string;
  col: Col;
  feature: string;
}) {
  const tone = cellTone(value, col, feature);
  return (
    <td
      className={cn(
        "px-3 py-3 sm:px-4",
        tone === "locked" && "text-mute/70",
        tone === "addon" && "text-amber",
        tone === "accent" && "text-teal",
        tone === "ok" && "text-paper",
        tone === "plain" && "text-mute",
      )}
    >
      {tone === "locked" ? (
        <span className="inline-flex items-center gap-1.5">
          <Lock className="h-3 w-3" aria-hidden />
          {value}
        </span>
      ) : (
        value
      )}
    </td>
  );
}

export function PricingMatrix() {
  return (
    <AwesomeFade direction="up" className="block min-w-0 max-w-full">
      <div className="min-w-0 max-w-full">
        <div className="flex flex-wrap gap-4 text-[11px] font-mono uppercase tracking-[0.14em] text-mute">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-paper" /> Full
          </span>
          <span className="inline-flex items-center gap-2">
            <Lock className="h-3 w-3" /> Locked
          </span>
          <span className="inline-flex items-center gap-2 text-amber">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" /> Add-on
          </span>
          <span className="inline-flex items-center gap-2 text-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" /> EOD / close
          </span>
        </div>
        <div className="mt-6 min-w-0 max-w-full overflow-x-auto overscroll-x-contain rounded-2xl border border-line">
          <table className="w-full min-w-[640px] text-left text-sm sm:min-w-[860px]">
            <thead className="bg-ink font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
              <tr>
                <th className="px-4 py-3 font-medium">Feature</th>
                <th className="px-4 py-3 font-medium">Mobile</th>
                <th className="px-4 py-3 font-medium text-amber">Starter</th>
                <th className="px-4 py-3 font-medium">Pro</th>
                <th className="px-4 py-3 font-medium">Pro+ Custom</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((row) => (
                <tr
                  key={row.feature}
                  className="border-t border-line transition-colors hover:bg-paper/[0.03]"
                >
                  <th className="px-4 py-3 font-sans font-normal text-paper">
                    {row.feature}
                  </th>
                  <Cell value={row.lite} col="lite" feature={row.feature} />
                  <Cell value={row.standard} col="standard" feature={row.feature} />
                  <Cell value={row.pro} col="pro" feature={row.feature} />
                  <Cell value={row.proplus} col="proplus" feature={row.feature} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AwesomeFade>
  );
}
