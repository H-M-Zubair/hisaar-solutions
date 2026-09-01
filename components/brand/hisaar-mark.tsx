import { cn } from "@/lib/utils";

export const HISAAR_GREEN = "#17D492";
export const HISAAR_INK = "#22323C";

/** Official Hisaar Solutions mark — circuit nodes forming a connected H. */
export function HisaarMark({
  className,
  size = 36,
  title,
}: {
  className?: string;
  size?: number;
  title?: string;
}) {
  const height = size;
  const width = (114 / 130) * size;

  return (
    <svg
      viewBox="0 0 114 130"
      width={width}
      height={height}
      className={cn("shrink-0", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={!title}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <HisaarMarkPaths />
    </svg>
  );
}

export function HisaarMarkPaths({ color = HISAAR_GREEN }: { color?: string }) {
  return (
    <g fill={color}>
      <path
        d="M29 18h19v22M52 54H22v18M22 98v12h38v8M97 94v16H60"
        fill="none"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="17" y="1" width="22" height="20" rx="6" />
      <rect x="42" y="27" width="34" height="32" rx="8" />
      <rect x="0" y="63" width="44" height="38" rx="10" />
      <rect x="81" y="65" width="32" height="32" rx="8" />
      <rect x="48" y="109" width="22" height="20" rx="6" />
    </g>
  );
}
