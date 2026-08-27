import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[720px] px-5 py-32 text-center sm:px-8">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-5xl">This page is not in the ledger.</h1>
      <p className="mt-4 text-mute">It may have moved, or it was never a route.</p>
      <Button asChild className="mt-8">
        <Link href="/">Back to Hisaar</Link>
      </Button>
    </section>
  );
}
