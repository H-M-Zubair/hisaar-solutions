import Link from "next/link";
import { HisaarMark } from "@/components/brand/hisaar-mark";
import { cn } from "@/lib/utils";

const SIZE = {
  sm: { mark: 28, word: "text-[11px] tracking-[0.16em]" },
  md: { mark: 34, word: "text-[12.5px] tracking-[0.15em]" },
  lg: { mark: 44, word: "text-[15px] tracking-[0.14em]" },
} as const;

export function Logo({
  className,
  markOnly = false,
  size = "md",
  href = "/",
}: {
  className?: string;
  markOnly?: boolean;
  size?: keyof typeof SIZE;
  href?: string;
}) {
  const s = SIZE[size];

  return (
    <Link
      href={href}
      className={cn(
        "group flex shrink-0 items-center gap-2.5 text-paper transition-opacity hover:opacity-80",
        className,
      )}
      aria-label="Hisaar Solutions home"
    >
      {!markOnly && (
        <span className="flex flex-col items-end justify-center whitespace-nowrap leading-none">
          <span
            className={cn(
              "font-logo font-semibold uppercase",
              s.word,
            )}
          >
            Hisaar
          </span>
          <span
            className={cn(
              "mt-[0.22em] font-logo font-semibold uppercase",
              s.word,
            )}
          >
            Solutions
          </span>
        </span>
      )}
      <HisaarMark
        size={s.mark}
        className="transition-transform duration-300 group-hover:scale-[1.04]"
      />
    </Link>
  );
}
