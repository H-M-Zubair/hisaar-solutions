import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  markOnly = false,
}: {
  className?: string;
  markOnly?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5 text-paper", className)}
      aria-label="Hisaar Solutions home"
    >
      <span className="relative grid h-8 w-8 place-items-center" aria-hidden>
        <svg viewBox="0 0 32 32" className="h-8 w-8">
          <rect x="4" y="4" width="8" height="24" rx="1.5" fill="currentColor" />
          <rect x="20" y="4" width="8" height="24" rx="1.5" fill="currentColor" />
          <rect x="4" y="13" width="24" height="3" rx="1" fill="var(--teal)" />
          <rect x="14" y="22" width="4" height="6" rx="1" fill="var(--amber)" />
        </svg>
      </span>
      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] tracking-tight">Hisaar</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-mute">
            Solutions
          </span>
        </span>
      )}
    </Link>
  );
}
