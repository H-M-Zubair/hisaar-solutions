import { OwnerAnalytics } from "@/components/mockups/owner-analytics";
import { AwesomeFade, AwesomeSlide } from "@/components/motion/awesome-reveal";

export function OwnerBrain() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      {/* Intent: the owner pane as a live instrument, not a paragraph about analytics. */}
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <AwesomeFade direction="left">
          <p className="eyebrow text-teal">Dashboard · reports</p>
          <h2 className="display mt-3 max-w-2xl text-4xl sm:text-5xl">
            The shop from home. Profit on the owner’s screen.
          </h2>
          <p className="mt-4 max-w-xl text-mute">
            Same KPIs the product ships: revenue, sales, profit, customers, AOV,
            margin, hourly rush, tender mix, hot SKUs, inventory health. Starter
            keeps today. Pro unlocks the rest. The cashier never sees this screen.
          </p>
        </AwesomeFade>
        <AwesomeSlide direction="right" delay={120}>
          <div className="mt-12">
            <OwnerAnalytics />
          </div>
        </AwesomeSlide>
        <div className="mt-8 grid gap-3 text-sm text-mute sm:grid-cols-3">
          {[
            "Overview, sales, products, customers, staff, inventory — the report tabs.",
            "CSV export for the accountant. Profit columns only if you can view financials.",
            "Shift closing logs on Starter: expected drawer versus counted cash. Pro filters by cashier and date.",
          ].map((text, i) => (
            <AwesomeFade key={text} direction="up" delay={i * 90}>
              <p className="rounded-xl border border-line px-4 py-3">{text}</p>
            </AwesomeFade>
          ))}
        </div>
      </div>
    </section>
  );
}
