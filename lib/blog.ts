export type Post = {
  slug: string;
  title: string;
  date: string;
  reading: string;
  excerpt: string;
  kicker: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "pos-is-table-stakes",
    title: "The scanner is not the product. The owner’s brain is.",
    date: "2026-08-12",
    reading: "6 min",
    kicker: "Product",
    excerpt:
      "Every POS scans. Shops pay for munafa, staff control, and a drawer that matches — and they only feel it after fourteen days of the real thing.",
    body: [
      "High-end POS is not expensive because a barcode leaves a beep. Every package in this country beeps. Money shows up when the owner can see the shop from home: profit, who is on the till, what ran short, which batch is about to expire.",
      "That is why Omni Ledger keeps the counter complete on Lite, Standard, and Pro. If you take the till away, the shopkeeper goes back to the copy book and never converts. The lock belongs on history, margin, extra seats, WhatsApp EOD, and the industry extras — lots, tables, the size×color matrix.",
      "The trial is fourteen days of the whole ledger, including the pack for grocery, pharmacy, restaurant, or garments. We provision the organisation. There is no public signup button, on purpose. A half-featured trial teaches the wrong lesson: that the software is thin. A full trial teaches the right one: that going back to paper is expensive.",
      "When we say “owner-only profit,” we mean it as a role rule, not a marketing line. Cashiers land on POS. They never see the dashboard’s margin. Managers can run the floor and still not see munafa. That is the product a Pakistani counter actually needs, and it is already in the build.",
    ],
  },
  {
    slug: "offline-is-pakistan",
    title: "Offline is not a feature. It is how Lahore sells.",
    date: "2026-07-28",
    reading: "5 min",
    kicker: "Engineering",
    excerpt:
      "Load-shedding and a cut fibre are not edge cases. The queue on the till is the product. We do not gate it to Pro.",
    body: [
      "A grocery demo that only works on office Wi‑Fi is a slide deck. The story we tell on the shop floor is simpler: disconnect the network, sell anyway, reconnect, tap Sync. The invoices that sat in the outbox land in the ledger. The drawer still has to match.",
      "That queue is on Lite and Standard. Gating offline to Pro would be a good way to make a shopkeeper angry at 8pm in August. Pakistan’s internet is not a SLA. The till cannot be.",
      "Logout wipes that tenant’s offline cache — a fact we tell owners during onboarding, because a mid-shift logout is how you lose the afternoon. The PWA install is the other half of the same idea: the app should feel like it lives on the phone and the counter PC, not in a browser tab someone closed.",
      "We still will not promise a card terminal talking to JazzCash. Card on the ticket is a payment type. The fibre can drop; the story we can stand behind is the one we ship.",
    ],
  },
  {
    slug: "four-industry-packs",
    title: "Four floors. One ledger. Different skins.",
    date: "2026-07-02",
    reading: "7 min",
    kicker: "Industries",
    excerpt:
      "Grocery wants the rush. Pharmacy wants FEFO. Restaurants want the table. Garments want the matrix. Pretending they share a SKU model is how POS tools fail.",
    body: [
      "Omni Ledger is one multi-tenant product with industry skins — the same trick the live POS already does. Grocery is the base: barcode, udhaar, shifts, stock. Pharmacy adds lots and FEFO. Restaurant replaces the cart-first loop with tables and a kitchen ticket. Garments turns one shirt into a size×color×fabric matrix.",
      "Lite is the phone. Standard is deliberately simple SKU. A takeaway counter does not need a table grid. A stall selling one cut of cloth does not need a matrix. A small medical store can bill by name. We say this on the industry pages because selling the wrong plan is how you lose the shop in month two.",
      "Pro is where the pack lives. If you legally need expiry lots, Standard is the wrong conversation — we will tell you on WhatsApp before we provision. If you have eight tables, we trial Pro, not a grocery skin. If your rail is S–XXL in four colours, the matrix comes out on day one of the demo.",
      "What we will not do is stitch a second industry into the same organisation. Chains, FBR, white-label receipts, and unlimited tills are Pro+ — from Rs 12,000 / month, quoted when the work is real. Honest product pages convert better than a logo wall of shops we do not have.",
    ],
  },
  {
    slug: "provisioned-trial",
    title: "There is no signup button. That is the trial.",
    date: "2026-06-18",
    reading: "4 min",
    kicker: "How we work",
    excerpt:
      "Self-serve is off. We create the shop, load your items if you send them, and start the clock when you actually sell — not when you create an empty account.",
    body: [
      "The register page in older builds looked like a signup. It is not. Omni Ledger organisations are created by us (or a super-admin). You get an owner access code and one cashier. The 14-day clock is meant to start on the first sale, not on an abandoned login, because empty trials teach nothing and waste the fortnight.",
      "We would rather load fifty of your real SKUs than a demo catalogue of atta and soap. Dummy data does not create habit. Habit is the point: the trial is Pro-shaped so that Standard’s locked month tab hurts in the right way, and Pro feels like keeping the lights on.",
      "WhatsApp is the booking desk: +92 303 0609872. Tell us grocery, pharmacy, restaurant, or garments. Tell us a window. We will not send you a credit-card form. Billing, when you choose a plan, is a conversation — bank transfer, plan flag on our side.",
      "If that sounds small, it is. Hisaar Solutions ships one product. We would rather provision twenty shops that run than publish a fake “500+ clients” strip.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
