import { ShopPhoto } from "@/components/ui/shop-photo";
import { AwesomeSlide } from "@/components/motion/awesome-reveal";

export function OfflineBand() {
  return (
    <section className="overflow-x-clip border-y border-line py-20 sm:py-28">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <p className="eyebrow text-teal">Omni Ledger · offline</p>
        <h2 className="display mt-3 max-w-2xl text-3xl sm:text-5xl">
          Bijli gayi. Internet nahi. Shop still sells.
        </h2>
        <p className="mt-4 max-w-xl text-mute">
          Pakistan shops lose power. They also lose internet. Omni Ledger does
          not stop for either. You keep taking bills. When the line comes back,
          every sale is still there.
        </p>
        <div className="mt-12 grid min-w-0 items-center gap-8 lg:grid-cols-2">
          <AwesomeSlide direction="left">
            <ShopPhoto
              src="/photos/power-cut-shop.jpg"
              alt="A kirana still billing when the lights and internet are down"
              sizes="(min-width: 1024px) 540px, 100vw"
            />
          </AwesomeSlide>
          <ul className="grid gap-4">
            <li className="rounded-2xl border border-line bg-surface p-6">
              <p className="eyebrow text-amber">When bijli goes</p>
              <h3 className="display mt-3 text-2xl">Lights out. Till still on.</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                The street is dark. The UPS is humming. Your cashier is still
                taking bills. No copy book.
              </p>
            </li>
            <li className="rounded-2xl border border-line bg-surface p-6">
              <p className="eyebrow text-teal">When internet nahi hai</p>
              <h3 className="display mt-3 text-2xl">Wifi dead. Sales still count.</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                Fibre cuts. Mobile data fails. You still sell. When internet
                returns, nothing is lost — every bill lands in the shop.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
