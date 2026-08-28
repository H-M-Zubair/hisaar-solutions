import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticCta } from "@/components/layout/magnetic-cta";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Fourteen days of the real ledger.",
  body = "We create the shop and hand you an owner code. Fourteen days Pro-shaped, then Lite, Standard, Pro, or Pro+. WhatsApp is the door.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-line">
      {/* Intent: a single amber ask — book a provisioned trial, never a fake signup form. */}
      <div className="bg-mesh relative overflow-hidden">
        <div className="mx-auto flex max-w-[1120px] flex-col items-start gap-6 px-5 py-20 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0 max-w-xl">
            <p className="eyebrow text-amber">Provisioned trial</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">{title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-mute sm:text-base">{body}</p>
          </div>
          <MagneticCta className="shrink-0">
            <Button asChild size="lg">
              <a href={site.trialMessage} target="_blank" rel="noopener noreferrer">
                WhatsApp the desk
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </MagneticCta>
        </div>
      </div>
    </section>
  );
}
