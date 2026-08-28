import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full min-w-0 max-w-[1120px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}
