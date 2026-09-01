export type Post = {
  slug: string;
  title: string;
  date: string;
  reading: string;
  excerpt: string;
  seoDescription: string;
  kicker: string;
  photo: string;
  photoAlt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "offline-is-pakistan",
    title: "Bijli gayi. The shop must still sell.",
    date: "2026-07-28",
    reading: "4 min",
    kicker: "Everyday shop",
    photo: "/photos/power-cut-shop.jpg",
    photoAlt: "A kirana still billing during a power cut",
    excerpt:
      "Lights go. Wifi dies. Customers are still at the counter. If the till dies with the lights, you go back to the copy book.",
    seoDescription:
      "When bijli or wifi dies, Omni Ledger still takes bills. Simple offline POS from Hisaar Solutions — on every plan, not a paid extra.",
    body: [
      "In summer, the lights go. The fan stops. The street is dark. Customers are still holding atta and oil. That is not a special day. That is most of the season.",
      "If your shop software needs the internet to work, you are back on paper. Paper is slow. Paper is easy to lose. Paper is how the drawer never matches.",
      "Omni Ledger keeps selling. The till still takes bills. When the power and wifi come back, every sale is still there. We put this on every plan — Mobile, Starter, and Pro — because gating it would make a shopkeeper angry at 8pm in August.",
      "We still will not promise a JazzCash machine inside the app. Cash or card is a mark on the bill. The story we can stand behind is simple: lights out, shop open, bills still print.",
    ],
  },
  {
    slug: "four-industry-packs",
    title: "Four kinds of shops. One easy system.",
    date: "2026-07-02",
    reading: "5 min",
    kicker: "Floors",
    photo: "/photos/retail-floor.jpg",
    photoAlt: "A mixed retail floor — clothes, bags, and other goods",
    excerpt:
      "Grocery wants a fast queue. Pharmacy wants expiry. Restaurants want tables. Retail is everything else — clothes, mobile shops, cosmetics, hardware. Pretending they are the same is how POS tools fail.",
    seoDescription:
      "Hisaar Solutions builds ERP for grocery, pharmacy, restaurant, and retail. Omni Ledger is the POS for each floor — simple, not one-size-fits-all.",
    body: [
      "Hisaar is a company that builds ERP for different kinds of shops. The heart of it is Omni Ledger — a POS that fits the floor you actually run.",
      "Grocery is the base: scan, udhaar, night cash count, stock. Pharmacy adds batches and expiry. Restaurant replaces the shopping cart with tables and a kitchen ticket. Retail is the rest: clothes, mobile shops, cosmetics, hardware — leftover kinds named, not only garments.",
      "A takeaway window does not need tables. A stall selling one cut of cloth does not need size and colour. A mobile counter does not need a kitchen ticket. We say this plainly because selling the wrong plan is how you lose the shop in month two.",
      "If you legally need expiry batches, we will tell you Starter is the wrong conversation. If you have eight tables, we trial Pro. If leftover sizes or leftover phone models are the pain, that report comes out on day one of the demo.",
    ],
  },
  {
    slug: "pos-is-table-stakes",
    title: "The scanner is not the product. Seeing your money is.",
    date: "2026-08-12",
    reading: "4 min",
    kicker: "Owner",
    photo: "/photos/owner-at-home.jpg",
    photoAlt: "A shop owner checking today’s sales from home",
    excerpt:
      "Every POS beeps. Shops pay to see munafa, who is on the till, and a drawer that matches — from the sofa, not only from the counter.",
    seoDescription:
      "Omni Ledger keeps billing simple and profit on the owner’s phone. Simple POS for Pakistan shops from Hisaar Solutions.",
    body: [
      "Every package in this country beeps. Money shows up when the owner can see the shop from home: today’s sales, what sold most, who is on the till, what ran short.",
      "That is why Omni Ledger keeps the counter complete on every paid plan. If you take the till away, the shopkeeper goes back to the copy book. The lock belongs on history, profit, extra seats, and the extras each floor needs — batches, tables, leftover kinds.",
      "The cashier lands on billing. They never see profit. The manager can run the floor and still not see munafa. Only the owner sees how much the shop made. That is not a slogan. That is the product.",
      "Try it for fourteen days. We set up the shop. You sell. Then you know if the copy book can go home.",
    ],
  },
  {
    slug: "provisioned-trial",
    title: "There is no signup button. We set up your shop.",
    date: "2026-06-18",
    reading: "3 min",
    kicker: "How we work",
    photo: "/photos/saas-meeting.jpg",
    photoAlt: "A working session — Hisaar sets up Omni Ledger after a WhatsApp conversation",
    excerpt:
      "You WhatsApp us. We create the shop. You try it for fourteen days. No credit-card form. No empty account.",
    seoDescription:
      "Hisaar Solutions sets up Omni Ledger for you on WhatsApp — no public signup. Fourteen days in your shop, then pick a plan.",
    body: [
      "You do not click Sign up. You message us. We create the shop, send you an owner code, and start the clock when you actually sell — not when you open an empty page.",
      "We would rather load fifty of your real items than a fake list of atta and soap. Dummy data does not create habit. Habit is the point.",
      "WhatsApp is the door: +92 303 0609872. Tell us grocery, pharmacy, restaurant, or retail — clothes, a mobile shop, cosmetics. Tell us a time. Billing, when you choose a plan, is a conversation — bank transfer, plan on our side.",
      "If that sounds small, it is. Hisaar ships one product well. We would rather set up twenty shops that run than print a fake “500+ clients” strip.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
