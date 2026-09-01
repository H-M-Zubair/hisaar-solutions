import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { AwesomeFade } from "@/components/motion/awesome-reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[720px] px-5 py-32 text-center sm:px-8">
      <AwesomeFade direction="up" duration={700} fraction={0}>
        <div className="mb-10 flex justify-center">
          <Logo />
        </div>
        <p className="eyebrow">404</p>
        <h1 className="display mt-4 text-5xl">This page is not in the ledger.</h1>
        <p className="mt-4 text-mute">It may have moved, or it was never a route.</p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/">Back to Hisaar</Link>
          </Button>
        </div>
      </AwesomeFade>
    </section>
  );
}
