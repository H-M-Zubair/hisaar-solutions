import Link from "next/link";
import { industries } from "@/lib/industries";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ShopPhoto } from "@/components/ui/shop-photo";
import { PosTerminal, LotBoard, TableFloor, RetailShelf } from "@/components/mockups/product-ui";
import { AwesomeSlide, AwesomeFade } from "@/components/motion/awesome-reveal";

const g = industries.grocery;

export function GroceryPage() {
  return (
    <>
      <PageHero
        kicker={g.kicker}
        title={g.headline}
        lede={g.lede}
        accent={g.accent}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions" },
          { name: "Grocery" },
        ]}
      >
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
          Accent · {g.accentName} · {g.feeling}
        </p>
      </PageHero>
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-8 sm:px-8">
          <ShopPhoto src={g.photo} alt={g.photoAlt} sizes="(min-width: 1120px) 1120px, 100vw" priority />
        </div>
      </section>
      <section className="relative">
        {/* Intent: sticky till beside a vertical rush narrative — grocery is a counter, not a dashboard. */}
        <div className="mx-auto grid max-w-[1120px] min-w-0 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <AwesomeSlide direction="left" className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <PosTerminal shop="Al Noor Kirana" accent={g.accent} />
          </AwesomeSlide>
          <div className="min-w-0 space-y-16">
            {g.pains.map((p, i) => (
              <div key={p.title}>
                <p className="font-mono text-[11px] text-grocery">0{i + 1}</p>
                <h2 className="display mt-2 text-3xl">{p.title}</h2>
                <p className="mt-3 max-w-md text-mute">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-line">
        <div className="mx-auto max-w-[1120px] px-5 pt-12 sm:px-8">
          <h2 className="display text-3xl sm:text-4xl">What ships on the kirana till.</h2>
        </div>
        <div className="mx-auto grid max-w-[1120px] min-w-0 md:grid-cols-3">
          {g.modules.map((m) => (
            <article key={m.title} className="border-b border-line p-8 md:border-b-0 md:border-r last:border-r-0">
              <h3 className="font-display text-2xl tracking-tight">{m.title}</h3>
              <p className="mt-3 text-sm text-mute">{m.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-[1120px] min-w-0 gap-6 px-5 py-20 sm:px-8 md:grid-cols-2">
        <div className="rounded-2xl border border-line p-8">
          <p className="eyebrow">Starter · Mobile</p>
          <p className="mt-4 text-paper">{g.starterFit}</p>
        </div>
        <div className="rounded-2xl border border-grocery/40 bg-surface p-8">
          <p className="eyebrow text-grocery">Pro</p>
          <p className="mt-4 text-paper">{g.proFit}</p>
        </div>
        <p className="text-sm text-mute md:col-span-2">{g.notSold}</p>
      </section>
      <CtaBand title="Trial a kirana with your own SKUs." />
    </>
  );
}

export function PharmacyPage() {
  const p = industries.pharmacy;
  const ticks = ["Receive lot", "FEFO pick", "Rx prompt", "Expiry block"];
  return (
    <>
      <PageHero
        kicker={p.kicker}
        title={p.headline}
        lede={p.lede}
        accent={p.accent}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions" },
          { name: "Pharmacy" },
        ]}
      />
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-8 sm:px-8">
          <ShopPhoto src={p.photo} alt={p.photoAlt} sizes="(min-width: 1120px) 1120px, 100vw" priority />
        </div>
      </section>
      <section className="overflow-x-clip py-20">
        {/* Intent: a vertical clinical timeline — pharmacy is lots moving through time, not a grid of tiles. */}
        <div className="mx-auto max-w-[720px] px-5 sm:px-8">
          <ol className="relative border-l border-pharmacy/40 pl-8">
            {ticks.map((t, i) => (
              <li key={t} className="relative mb-14 last:mb-0">
                <span className="absolute -left-[39px] top-1 h-3 w-3 rounded-full bg-pharmacy" />
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
                  Step 0{i + 1}
                </p>
                <h2 className="display mt-2 text-3xl">{t}</h2>
                <p className="mt-2 text-sm text-mute">
                  {p.modules[Math.min(i, p.modules.length - 1)]?.body}
                </p>
              </li>
            ))}
          </ol>
          <AwesomeFade direction="up">
            <div className="mt-16">
              <LotBoard />
            </div>
          </AwesomeFade>
        </div>
      </section>
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8">
          <h2 className="display mb-10 text-3xl sm:text-4xl">What the pack actually solves.</h2>
          <div className="grid min-w-0 gap-10 lg:grid-cols-2">
            {p.pains.map((item) => (
              <article key={item.title}>
                <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 text-mute">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-2xl rounded-xl border border-danger/30 bg-ink px-4 py-3 text-sm text-mute">
            If you legally need batch tracking, Starter is the wrong plan. We will say that
            before we set up the shop.
          </p>
        </div>
      </section>
      <CtaBand title="Show us a near-expiry shelf." />
    </>
  );
}

export function RestaurantPage() {
  const r = industries.restaurant;
  return (
    <>
      <PageHero
        kicker={r.kicker}
        title={r.headline}
        lede={r.lede}
        accent={r.accent}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions" },
          { name: "Restaurant" },
        ]}
      />
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-8 sm:px-8">
          <ShopPhoto src={r.photo} alt={r.photoAlt} sizes="(min-width: 1120px) 1120px, 100vw" priority />
        </div>
      </section>
      <section className="overflow-x-clip py-20">
        {/* Intent: split the floor — takeaway is a cart; dine-in is a table grid. Two products, honestly. */}
        <div className="mx-auto grid max-w-[1120px] min-w-0 gap-px overflow-hidden bg-line px-0 md:grid-cols-2">
          <article className="bg-ink p-8 sm:p-12">
            <p className="eyebrow">Starter · takeaway</p>
            <h2 className="display mt-4 text-4xl">Bill as you plate.</h2>
            <p className="mt-4 text-mute">{r.starterFit}</p>
            <ul className="mt-8 space-y-3 text-sm text-paper">
              <li>— Menu items, cash, today’s sale</li>
              <li>— One cashier</li>
              <li>— No table grid, no KOT</li>
            </ul>
          </article>
          <AwesomeSlide direction="right">
            <article className="bg-surface p-8 sm:p-12">
              <p className="eyebrow text-restaurant">Pro · dine-in</p>
              <h2 className="display mt-4 text-4xl">Open. Ticket. Settle.</h2>
              <p className="mt-4 text-mute">{r.proFit}</p>
              <ul className="mt-8 space-y-3 text-sm text-paper">
                {r.modules.map((m) => (
                  <li key={m.title}>— {m.title}: {m.body}</li>
                ))}
              </ul>
            </article>
          </AwesomeSlide>
        </div>
        <div className="mx-auto mt-10 max-w-[1120px] px-5 sm:px-8">
          <TableFloor />
        </div>
      </section>
      <section className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8">
        <h2 className="eyebrow">Not sold</h2>
        <p className="mt-4 max-w-2xl text-lg text-mute">{r.notSold}</p>
        <Link href="/work" className="mt-6 inline-block text-sm text-teal">
          Read the eight-table playbook →
        </Link>
      </section>
      <CtaBand title="If you have tables, trial Pro." />
    </>
  );
}

export function RetailPage() {
  const floor = industries.retail;
  const kinds = ["Clothes", "Mobile", "Cosmetics", "Hardware", "Gifts"];
  return (
    <>
      <PageHero
        kicker={floor.kicker}
        title={floor.headline}
        lede={floor.lede}
        accent={floor.accent}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions" },
          { name: "Retail" },
        ]}
      />
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-8 sm:px-8">
          <ShopPhoto
            src={floor.photo}
            alt={floor.photoAlt}
            sizes="(min-width: 1120px) 1120px, 100vw"
            priority
          />
        </div>
      </section>
      <section className="border-b border-line">
        <div className="flex flex-wrap">
          {kinds.map((k) => (
            <div
              key={k}
              className="flex h-16 min-w-[40%] flex-1 items-center justify-center border-b border-r border-line last:border-r-0 sm:h-20 sm:min-w-0 sm:border-b-0"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
                {k}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8">
        <div className="grid min-w-0 gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Any merchandise</p>
            <h2 className="display mt-3 text-4xl">
              Clothes, mobiles, cosmetics, hardware.
            </h2>
            <p className="mt-4 text-mute">{floor.modules[0].body}</p>
            <div className="mt-10 space-y-8">
              {floor.pains.map((p) => (
                <div key={p.title}>
                  <h3 className="font-display text-xl tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-mute">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
          <AwesomeSlide direction="right">
            <div className="rounded-2xl border border-retail/30 bg-surface p-6">
              <RetailShelf className="border-0 bg-transparent p-0" />
              <p className="mt-6 text-xs text-mute">
                Zero is leftover stock, named. Clothes use size and colour. A
                mobile shop uses model and storage. Same report. That is Pro.
              </p>
            </div>
          </AwesomeSlide>
        </div>
        <p className="mt-12 text-sm text-mute">{floor.notSold}</p>
      </section>
      <CtaBand title="Clothes shop or mobile counter. Tell us the floor." />
    </>
  );
}
