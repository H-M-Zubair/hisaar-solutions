export const industrySlugs = [
  "grocery",
  "pharmacy",
  "restaurant",
  "retail",
] as const;

export type IndustrySlug = (typeof industrySlugs)[number];

export type Industry = {
  slug: IndustrySlug;
  name: string;
  kicker: string;
  headline: string;
  lede: string;
  seoDescription: string;
  accent: string;
  accentName: string;
  feeling: string;
  photo: string;
  photoAlt: string;
  starterFit: string;
  proFit: string;
  notSold: string;
  pains: { title: string; body: string }[];
  modules: { title: string; body: string }[];
};

export const industries: Record<IndustrySlug, Industry> = {
  grocery: {
    slug: "grocery",
    name: "Grocery",
    kicker: "Kirana · general shop",
    headline: "The copy book can go home.",
    lede: "Queue at 7pm. Udhaar for regulars. A drawer that never quite matches. Omni Ledger keeps the counter fast and the night count honest.",
    seoDescription:
      "Simple grocery POS for Pakistan kiranas: fast billing, udhaar, works when bijli or wifi dies, honest night cash count. Hisaar Solutions.",
    accent: "#FF8A3D",
    accentName: "Amber",
    feeling: "Warm counter",
    photo: "/photos/grocery-floor.jpg",
    photoAlt: "A large supermarket aisle with packed shelves — a real grocery mart",
    starterFit:
      "Starter: you at the counter, one extra cashier, about 2,000 items, bulk import, full udhaar, this week’s sale, last seven nights of cash count. Mobile: phone only, you only, about 300 items.",
    proFit:
      "Two or more cashiers, extra tills, month-long profit, who sold what, whose drawer ran short.",
    notSold: "Many branches is extra on Pro (Rs 2,500 / branch) or included on Pro+ Custom. Supplier purchase orders are not in any plan yet.",
    pains: [
      {
        title: "The 7pm rush",
        body: "Scan, search, next customer. The queue moves. No second copy book.",
      },
      {
        title: "Udhaar that you can trust",
        body: "Credit and part-pay on the bill. When they settle, mark it paid. Starter keeps the full khata. Mobile is a simple udhaar list.",
      },
      {
        title: "Bijli gayi. Internet nahi. Shop nahi ruka.",
        body: "Lights off or wifi dead — you still sell. When both come back, every bill is saved. This is on every Omni Ledger plan, not a paid extra.",
      },
    ],
    modules: [
      { title: "Scan and bill", body: "Scanner, search, cashier discount capped at 5%." },
      { title: "Stock in / out", body: "New stock in. Low stock shows on the till." },
      { title: "Close the drawer", body: "Morning cash in. Night cash counted. Shortage is a fact, not a rumour." },
    ],
  },
  pharmacy: {
    slug: "pharmacy",
    name: "Pharmacy",
    kicker: "Medical store",
    headline: "The batch that should leave first.",
    lede: "A medicine is not just a name. Packs and strengths are different items. Every box has an expiry. Omni Ledger sells the one that expires first — so you do not throw money in the bin.",
    seoDescription:
      "Simple pharmacy POS with batches, expiry, and sell-oldest-first. Omni Ledger from Hisaar Solutions for medical stores in Pakistan.",
    accent: "#1EE0B0",
    accentName: "Teal",
    feeling: "Clean trust",
    photo: "/photos/pharmacy-floor.jpg",
    photoAlt: "A medical store counter with medicine shelves behind the pharmacist",
    starterFit:
      "Simple medical store: name, barcode, quantity, cash bill, today’s sale, one dispenser. A simple expiry warning — not full batch tracking.",
    proFit:
      "Packs and strengths, batches with expiry, sell-oldest-first, 30/60-day expiry list, prescription prompt, expired stock cannot be sold.",
    notSold:
      "Controlled-drug registers, e-prescription, and supplier purchase orders are not in any plan yet.",
    pains: [
      {
        title: "The near-expiry shelf",
        body: "Pro sells the batch that expires first. The screen flags 30 and 60 days. That is why a medical store pays for Pro.",
      },
      {
        title: "250mg and 500mg are not the same",
        body: "They sit under one medicine name, as two items. Starter is one barcode, one quantity.",
      },
      {
        title: "We will tell you the truth",
        body: "If the law needs batch tracking, Starter is the wrong plan. We will say so on the call.",
      },
    ],
    modules: [
      { title: "Batches & expiry", body: "Receive a batch with a date. Sale picks the nearest expiry first." },
      { title: "Expiry list", body: "30 / 60 day windows. Expired stock cannot leave the counter." },
      { title: "Prescription prompt", body: "Needed items ask for a prescription number before pay." },
    ],
  },
  restaurant: {
    slug: "restaurant",
    name: "Restaurant",
    kicker: "Floor · kitchen · counter",
    headline: "Open the table. Send to kitchen. Bill last.",
    lede: "A shop till is the wrong tool for dine-in. First you seat people. Then the kitchen cooks. Then you take the bill. Starter is takeaway. Pro is the floor.",
    seoDescription:
      "Simple restaurant POS for dine-in: tables, kitchen tickets, bill last. Omni Ledger Pro from Hisaar Solutions. Starter covers takeaway.",
    accent: "#FF5A2A",
    accentName: "Ember",
    feeling: "Heat, kitchen, floor",
    photo: "/photos/restaurant-floor.jpg",
    photoAlt: "A dine-in restaurant floor with tables set for guests",
    starterFit:
      "Dhaba, takeaway, one counter: menu items, cash, today’s sale. Order becomes a bill immediately. No table map.",
    proFit:
      "Table status, waiters, extra cheese / no onion, send to kitchen, settle when they ask for the bill, guest count, busy hours.",
    notSold:
      "Foodpanda / Careem, split one table by seat, and a drag-and-drop floor map are not in this phase.",
    pains: [
      {
        title: "Eight tables, one kitchen",
        body: "If the pain is the floor, do not buy Starter. Try Pro. Tables are the product.",
      },
      {
        title: "Extra cheese, no onion",
        body: "On the ticket. On the kitchen slip. Not shouted across the room.",
      },
      {
        title: "When the floor actually runs",
        body: "Pro shows busy hours. Mobile and Starter only know today.",
      },
    ],
    modules: [
      { title: "Table map", body: "Empty, seated, paying — the floor as a board, not a shopping cart." },
      { title: "Kitchen ticket", body: "Send to kitchen, then settle when they ask for the bill." },
      { title: "Waiters", body: "Seats on Pro. Owner still sees the drawer. Waiters do not see profit." },
    ],
  },
  retail: {
    slug: "retail",
    name: "Retail",
    kicker: "Clothes · mobile · the rest",
    headline: "Not grocery. Not pharmacy. Not a restaurant.",
    lede: "Clothes shops, mobile shops, cosmetics, hardware, gifts. If the floor sells items — not food, medicine, or a table — it is retail. Barcode, stock, discount. One till, not only garments.",
    seoDescription:
      "Retail POS for shops that are not grocery, pharmacy, or restaurant — clothes, mobile shops, cosmetics, hardware. Omni Ledger from Hisaar Solutions.",
    accent: "#C45B8A",
    accentName: "Wine",
    feeling: "Mixed merchandise",
    photo: "/photos/retail-floor.jpg",
    photoAlt:
      "A mixed retail floor — clothes, bags, shoes, and other goods in one shop",
    starterFit:
      "A small counter: one barcode per item, stock that goes down, discount typed on the till. Clothes stall, mobile accessories, gift shop.",
    proFit:
      "Variants when the item has kinds — size and colour for clothes, model and storage for phones — leftover stock named, saved discounts.",
    notSold: "An online store and a website shop are not in any plan.",
    pains: [
      {
        title: "Leftover kinds, named",
        body: "Pro tells you what is left: size and colour in a clothes shop, model and storage in a mobile shop. Not a guess in the back room.",
      },
      {
        title: "Discount without a spreadsheet",
        body: "Saved discount rules — the cashier is not typing 40% on every bill, whether it is a season sale or a phone bundle.",
      },
      {
        title: "Still one scan",
        body: "Many kinds of item does not mean a slow till. Each piece still has a barcode.",
      },
    ],
    modules: [
      {
        title: "Any item",
        body: "Clothes, phones, cosmetics, hardware, gifts. One barcode, one stock count, one till.",
      },
      {
        title: "Variants when you need them",
        body: "Size × colour for garments. Model × storage for mobiles. Same idea, different shop.",
      },
      {
        title: "Saved discounts",
        body: "Rules the cashier does not retype. Cashier cap still 5% unless the owner says otherwise.",
      },
    ],
  },
};

export const industryList = industrySlugs.map((slug) => industries[slug]);
