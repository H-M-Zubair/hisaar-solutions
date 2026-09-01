"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = {
  name: string;
  href?: string;
};

export function PageCrumbs({
  items,
  className,
}: {
  items: Crumb[];
  className?: string;
}) {
  if (items.length < 2) return null;

  return (
    <nav aria-label="Breadcrumb" className={cn("mb-6", className)}>
      <ol className="flex min-w-0 flex-wrap items-center gap-1 text-[13px] text-mute">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.name}-${i}`} className="flex min-w-0 items-center gap-1">
              {i > 0 ? (
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-line" aria-hidden />
              ) : null}
              {last || !item.href ? (
                <span
                  className="truncate text-paper"
                  aria-current={last ? "page" : undefined}
                >
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="truncate hover:text-paper">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
