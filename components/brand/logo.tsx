import Link from "next/link";
import { cn } from "@/lib/utils";

const SRC = "/brand/Hisaar-removebg-preview.png";
const ART = 500;

/** Tight crops from the transparent 500×500 artboard. */
const WORD = { x: 60, y: 207, w: 219, h: 78 } as const;
const ICON = { x: 294, y: 188, w: 119, h: 135 } as const;
const GAP_RATIO = 20 / 135;

const HEIGHT = {
  sm: 30,
  md: 40,
  lg: 52,
  xl: 72,
} as const;

function BrandCrop({
  box,
  height,
  className,
  alt,
  loading = "lazy",
  priority = false,
}: {
  box: { x: number; y: number; w: number; h: number };
  height: number;
  className?: string;
  alt: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
}) {
  const scale = height / box.h;
  const img = ART * scale;

  return (
    <span
      className={cn("relative block overflow-hidden", className)}
      style={{ height, width: box.w * scale }}
    >
      <img
        src={SRC}
        alt={alt}
        width={ART}
        height={ART}
        loading={priority ? "eager" : loading}
        decoding="async"
        fetchPriority={priority ? "high" : "low"}
        draggable={false}
        className="pointer-events-none absolute max-w-none select-none"
        style={{
          width: img,
          height: img,
          left: -box.x * scale,
          top: -box.y * scale,
        }}
      />
    </span>
  );
}

export function Logo({
  className,
  markOnly = false,
  size = "md",
  href = "/",
  priority = false,
}: {
  className?: string;
  markOnly?: boolean;
  size?: keyof typeof HEIGHT;
  href?: string;
  priority?: boolean;
}) {
  const iconH = HEIGHT[size];
  const wordH = iconH * (WORD.h / ICON.h);

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex shrink-0 items-center transition-opacity hover:opacity-80",
        className,
      )}
      style={{ gap: iconH * GAP_RATIO }}
      aria-label="Hisaar Solutions home"
    >
      {!markOnly ? (
        <BrandCrop
          box={WORD}
          height={wordH}
          alt="Hisaar Solutions"
          priority={priority}
          className="brightness-[0.1] dark:brightness-100"
        />
      ) : null}
      <BrandCrop
        box={ICON}
        height={iconH}
        alt={markOnly ? "Hisaar Solutions" : ""}
        priority={priority}
      />
    </Link>
  );
}
