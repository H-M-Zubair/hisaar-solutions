import { OwnerAnalytics } from "@/components/mockups/owner-analytics";
import { ShopPhoto } from "@/components/ui/shop-photo";
import { AwesomeSlide } from "@/components/motion/awesome-reveal";

export function OwnerBrain({ photo = true }: { photo?: boolean }) {
  return (
    <section className="overflow-x-clip border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <p className="eyebrow text-teal">Dashboard · reports</p>
        <h2 className="display mt-3 max-w-2xl text-4xl sm:text-5xl">
          See the shop from home. Profit stays with you.
        </h2>
        <p className="mt-4 max-w-xl text-mute">
          Today’s sales. What sold most. How much you made. Mobile and Starter
          keep today. Pro unlocks the rest. The cashier never sees this screen.
        </p>
        {photo ? (
          <div className="mt-12 grid min-w-0 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <AwesomeSlide direction="left">
              <ShopPhoto
                src="/photos/owner-at-home.jpg"
                alt="Shop owner checking today’s sales from home on a phone"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
            </AwesomeSlide>
            <AwesomeSlide direction="right">
              <OwnerAnalytics />
            </AwesomeSlide>
          </div>
        ) : (
          <AwesomeSlide direction="right">
            <div className="mt-12">
              <OwnerAnalytics />
            </div>
          </AwesomeSlide>
        )}
        <ul className="mt-8 grid gap-3 text-sm text-mute sm:grid-cols-3">
          <li className="rounded-xl border border-line px-4 py-3">
            Sales, products, customers, staff, stock — the reports an owner actually opens.
          </li>
          <li className="rounded-xl border border-line px-4 py-3">
            Export for the accountant. Profit columns only if you are the owner.
          </li>
          <li className="rounded-xl border border-line px-4 py-3">
            Night cash count on Starter. Pro filters by cashier and date. WhatsApp night report is extra on Pro.
          </li>
        </ul>
      </div>
    </section>
  );
}
