import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * Official lockup crop from the 500×500 artboards:
 * 11.png = black on white · 1.png = white on #191919
 * Content box measured from the files (includes ESTD 2026).
 */
const FRAME = { src: 500, x: 58, y: 196, w: 323, h: 222 } as const;

export const LOCKUP_HEIGHT = {
  sm: 40,
  md: 48,
  lg: 64,
  xl: 84,
} as const;

export type LockupSize = keyof typeof LOCKUP_HEIGHT;
export type LockupTone = "onDark" | "onLight" | "auto";

export function HisaarLockupImage({
  size = "md",
  tone = "auto",
  className,
}: {
  size?: LockupSize;
  tone?: LockupTone;
  className?: string;
}) {
  const height = LOCKUP_HEIGHT[size];
  const scale = height / FRAME.h;
  const img = FRAME.src * scale;
  const crop: CSSProperties = {
    width: img,
    height: img,
    left: -FRAME.x * scale,
    top: -FRAME.y * scale,
    maxWidth: "none",
  };

  const showBlack = tone === "onLight" || tone === "auto";
  const showWhite = tone === "onDark" || tone === "auto";

  return (
    <span
      className={cn("relative block overflow-hidden", className)}
      style={{ height, width: FRAME.w * scale }}
    >
      {showBlack ? (
        <img
          src="/brand/11.png"
          alt=""
          className={cn(
            "pointer-events-none absolute select-none mix-blend-multiply",
            tone === "auto" && "dark:hidden",
          )}
          style={crop}
          draggable={false}
        />
      ) : null}
      {showWhite ? (
        <img
          src="/brand/1.png"
          alt=""
          className={cn(
            "pointer-events-none absolute select-none mix-blend-screen",
            tone === "auto" && "hidden dark:block",
          )}
          style={crop}
          draggable={false}
        />
      ) : null}
    </span>
  );
}
