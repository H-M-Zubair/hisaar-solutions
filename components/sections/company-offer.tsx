import Link from "next/link";
import { company } from "@/lib/company";
import { ShopPhoto } from "@/components/ui/shop-photo";
import { TiltCard } from "@/components/motion/tilt-card";
import { AwesomeSlide, AwesomeFade } from "@/components/motion/awesome-reveal";

const tiles = [
  {
    photo: "/photos/saas-build.jpg",
    photoAlt: "Custom software being written for a B2B client",
    kicker: "Custom software",
    title: "If a product is not enough, we build yours.",
    body: "Discovery, screens, and a system that matches one operation. Same craft as our SaaS — written for you, not sold as a box.",
  },
  {
    photo: "/photos/saas-meeting.jpg",
    photoAlt: "B2B working session with a software team",
    kicker: "B2B",
    title: "We sell to businesses, not to app stores.",
    body: "Shops, stores, operators. We provision, we train, we stay. WhatsApp is the door — not a credit-card form.",
  },
] as const;

export function CompanyOffer() {
  return (
    <section className="overflow-x-clip py-24 sm:py-32">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <p className="eyebrow text-teal">The company</p>
        <h2 className="display mt-3 max-w-2xl text-4xl sm:text-5xl">
          SaaS we own. Software we write. ERP that fits.
        </h2>
        <p className="mt-4 max-w-xl text-mute">{company.lede}</p>

        <div className="mt-14 grid min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <AwesomeSlide direction="left">
            <ShopPhoto
              src="/photos/saas-dashboard.jpg"
              alt="A SaaS product dashboard — Hisaar designs and runs its own software"
              sizes="(min-width: 1024px) 540px, 100vw"
            />
          </AwesomeSlide>
          <div className="min-w-0">
            <p className="eyebrow" style={{ color: "var(--amber)" }}>
              Self-developed SaaS
            </p>
            <h3 className="display mt-3 text-3xl sm:text-4xl">
              We do not resell someone else’s stack.
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-mute">
              Hisaar invents the product, hosts it, and stands behind it. You
              subscribe. We ship updates. That is a software company — not an
              integrator with a brochure.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm text-paper underline decoration-line underline-offset-8 hover:decoration-current"
            >
              Read about Hisaar →
            </Link>
          </div>
        </div>

        <AwesomeFade direction="up">
          <div className="mt-10 grid min-w-0 gap-4 sm:grid-cols-2">
            {tiles.map((s) => (
              <TiltCard key={s.title} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface">
                  <ShopPhoto
                    src={s.photo}
                    alt={s.photoAlt}
                    className="rounded-none border-0 border-b"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="eyebrow text-teal">{s.kicker}</p>
                    <h3 className="display mt-2 text-2xl">{s.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">
                      {s.body}
                    </p>
                  </div>
                </article>
              </TiltCard>
            ))}
          </div>
        </AwesomeFade>

        <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-surface">
          <div className="grid min-w-0 items-center gap-0 lg:grid-cols-2">
            <ShopPhoto
              src="/photos/grocery-floor.jpg"
              alt="A supermarket floor — Omni Ledger is Hisaar’s multi-sector POS"
              className="rounded-none border-0"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <div className="p-6 sm:p-10">
              <p className="eyebrow text-teal">{company.omni.kicker}</p>
              <h3 className="display mt-3 text-3xl sm:text-4xl">
                {company.omni.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-mute sm:text-base">
                {company.omni.body}
              </p>
              <Link
                href="/omni-ledger"
                className="mt-6 inline-block text-sm text-paper underline decoration-line underline-offset-8 hover:decoration-current"
              >
                Open Omni Ledger →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
