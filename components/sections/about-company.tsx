import Link from "next/link";
import { site } from "@/lib/site";
import { company } from "@/lib/company";
import { ShopPhoto } from "@/components/ui/shop-photo";
import { AwesomeSlide, AwesomeFade } from "@/components/motion/awesome-reveal";

export function AboutCompany() {
  return (
    <>
      <section className="mx-auto grid max-w-[1120px] min-w-0 gap-16 px-5 py-20 sm:px-8 lg:grid-cols-12">
        <article className="min-w-0 lg:col-span-7">
          {company.story.map((para, i) => (
            <p
              key={para.slice(0, 28)}
              className={
                i === 0
                  ? "text-lg leading-relaxed text-paper"
                  : "mt-6 leading-relaxed text-mute"
              }
            >
              {para}
            </p>
          ))}
        </article>
        <AwesomeSlide direction="right" className="min-w-0 lg:col-span-5">
          <aside className="space-y-6">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h2 className="eyebrow">Reach us</h2>
              <p className="mt-4 text-sm">
                <a
                  href={site.phoneHref}
                  className="text-teal"
                  aria-label={`Call Hisaar Solutions at ${site.phone}`}
                >
                  {site.phone}
                </a>
              </p>
              <p className="text-sm">
                <a
                  href={site.emailHref}
                  className="text-teal"
                  aria-label={`Email Hisaar Solutions at ${site.email}`}
                >
                  {site.email}
                </a>
              </p>
            </div>
            <div className="rounded-2xl border border-line p-6">
              <h2 className="eyebrow">Name</h2>
              <p className="mt-4 text-sm leading-relaxed text-mute">
                Hisaar means security. The systems we build are meant to
                protect the shop’s work — billing, stock, and reports — and we
                keep developing them. The mark is a circuit of nodes: products
                that talk to each other, built by one company.
              </p>
            </div>
          </aside>
        </AwesomeSlide>
      </section>

      <section className="border-y border-line bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <p className="eyebrow text-teal">What we do</p>
          <h2 className="display mt-3 max-w-2xl text-3xl sm:text-5xl">
            Three lines of work. One company.
          </h2>
          <p className="mt-4 max-w-xl text-mute">
            SaaS we own. Software we write for you. ERP shaped to the floor.
            That is the whole offer — not a catalogue of buzzwords.
          </p>
          <AwesomeFade direction="up">
            <div className="mt-12 grid min-w-0 gap-4 lg:grid-cols-3">
              {[
                {
                  photo: "/photos/saas-dashboard.jpg",
                  alt: "A SaaS analytics dashboard on a laptop — products we design and run",
                  item: company.whatWeDo[0],
                },
                {
                  photo: "/photos/saas-build.jpg",
                  alt: "Software being written — custom development for B2B clients",
                  item: company.whatWeDo[1],
                },
                {
                  photo: "/photos/saas-meeting.jpg",
                  alt: "A B2B working session — ERP shaped to the business in the room",
                  item: company.whatWeDo[2],
                },
              ].map(({ photo, alt, item }) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink"
                >
                  <ShopPhoto
                    src={photo}
                    alt={alt}
                    className="rounded-none border-0 border-b"
                    sizes="(min-width: 1024px) 360px, 100vw"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[11px] text-teal">{item.kicker}</p>
                    <h3 className="display mt-3 text-2xl">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </AwesomeFade>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow">What we can do</p>
        <h2 className="display mt-3 max-w-2xl text-3xl sm:text-5xl">
          Services behind the products.
        </h2>
        <p className="mt-4 max-w-xl text-mute">
          Whether you subscribe to Omni Ledger or ask us to build, this is the
          work we actually take on.
        </p>
        <ol className="mt-12 grid min-w-0 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {company.whatWeCan.map((s, i) => (
            <li key={s.title} className="bg-ink p-6 sm:p-8">
              <p className="font-mono text-[11px] text-teal">0{i + 1}</p>
              <h3 className="display mt-3 text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-[1120px] min-w-0 items-center lg:grid-cols-2">
          <ShopPhoto
            src="/photos/grocery-floor.jpg"
            alt="A supermarket floor — Omni Ledger is the multi-sector POS Hisaar built for shops like this"
            className="rounded-none border-0"
            sizes="(min-width: 1024px) 560px, 100vw"
          />
          <div className="px-5 py-12 sm:px-10 sm:py-16">
            <p className="eyebrow text-teal">{company.omni.kicker}</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl">{company.omni.title}</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mute sm:text-base">
              {company.omni.body}
            </p>
            <Link
              href="/products"
              className="mt-8 inline-block text-sm text-paper underline decoration-line underline-offset-8 hover:decoration-current"
            >
              Open Omni Ledger →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1120px] min-w-0 items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow">How we work</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl">
            WhatsApp is the front door. Provisioning is the product.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-mute">
            There is no self-serve signup for Omni Ledger. We create the
            organisation, load the floor, and hand you an owner code. Custom
            work starts the same way: a conversation, a scope, then software —
            not a form that dumps you into an empty account.
          </p>
        </div>
        <ShopPhoto
          src="/photos/saas-team.jpg"
          alt="Hisaar’s kind of room: people building software together"
          sizes="(min-width: 1024px) 540px, 100vw"
        />
      </section>
    </>
  );
}
