import Image from "next/image";
import { cn } from "@/lib/utils";

export function ShopPhoto({
  src,
  alt,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 720px, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure
      className={cn(
        "relative m-0 aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-surface",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        quality={85}
        priority={priority}
      />
    </figure>
  );
}
