export const industrySlugs = [
  "grocery",
  "pharmacy",
  "restaurant",
  "garments",
] as const;

export type IndustrySlug = (typeof industrySlugs)[number];

export type Industry = {
  slug: IndustrySlug;
  name: string;
  kicker: string;
  headline: string;
  lede: string;
  accent: string;
  accentName: string;
  feeling: string;
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
    kicker: "Kirana · general retail",
    headline: "The copy book, retired at close.",
    lede: "Queue, stock-outs, udhaar, and a drawer that never quite matches. Omni Ledger keeps the counter fast and the evening count honest.",
    accent: "#FF8A3D",
    accentName: "Amber",
    feeling: "Counter warmth",
    starterFit:
      "Owner on the till, one extra cashier, ~500 SKUs, udhaar khata, today’s sale, shift close.",
    proFit:
      "Two or more cashiers, loyalty for regulars, bulk import, month-long profit, who sold what, whose drawer ran short.",
    notSold: "Multi-branch and supplier POs are Pro+ roadmap — not this plan.",
    pains: [
      {
        title: "The 7pm rush",
        body: "Barcode, search, and Next Order so the queue moves without a second register copy.",
      },
      {
        title: "Udhaar that actually posts",
        body: "Credit and partial pay on the ticket, then Record Payment when they settle — Starter keeps khata.",
      },
      {
        title: "Fibre cut, still selling",
        body: "Offline queue on the till. Sync when the line comes back. This is not gated to Pro.",
      },
    ],
    modules: [
      { title: "Scan & cart", body: "Keyboard-wedge scanner, search, cashier 5% discount cap." },
      { title: "Stock in / out", body: "Receive against a GRN note. Low-stock badge on the till." },
      { title: "Close shift", body: "Float in, cash counted, shortage visible to the owner." },
    ],
  },
  pharmacy: {
    slug: "pharmacy",
    name: "Pharmacy",
    kicker: "Medical store · dispensing",
    headline: "Lots first. Guesswork never.",
    lede: "A medicine is a parent. Packs and strengths are SKUs. Every inbound is a batch with an expiry. Without lots, pharmacy POS is a grocery skin.",
    accent: "#1EE0B0",
    accentName: "Teal",
    feeling: "Clinical trust",
    starterFit:
      "Simple medical store: name, barcode, qty, cash bill, today’s sale, one dispenser. Optional expiry warn on the product — not lot FEFO.",
    proFit:
      "Variants, inventory lots, FEFO, 30/60-day expiry board, Rx-required prompt, expired lot blocked at sale.",
    notSold:
      "Controlled-drug registers, e-prescription, and supplier POs are not in any tier yet.",
    pains: [
      {
        title: "The near-expiry shelf",
        body: "Pro serves the batch that expires first. The dashboard flags 30 and 60 days — that is the reason to pay.",
      },
      {
        title: "Strength is not a note",
        body: "Tablet 250 and 500 are different SKUs under one parent. Starter is one barcode, one qty.",
      },
      {
        title: "Honest plan advice",
        body: "If you legally need lot tracking, Starter is the wrong plan. We will say so on the call.",
      },
    ],
    modules: [
      { title: "Lots & FEFO", body: "Receive batch + expiry. Sale picks the nearest expiry first." },
      { title: "Expiry board", body: "30 / 60 day windows. Expired lots cannot leave the counter." },
      { title: "Rx prompt", body: "Required items ask for a prescription number before pay." },
    ],
  },
  restaurant: {
    slug: "restaurant",
    name: "Restaurant",
    kicker: "Floor · kitchen · counter",
    headline: "Open the table. Ticket the kitchen. Bill last.",
    lede: "Retail POS is the wrong model for dine-in. The real loop is table → KOT → settle. Starter is takeaway. Pro is the floor.",
    accent: "#FF5A2A",
    accentName: "Ember",
    feeling: "Heat, kitchen, floor",
    starterFit:
      "Dhaba, takeaway, one counter: menu items, cash, today’s sale. Order becomes an invoice immediately. No table grid.",
    proFit:
      "Table status, waiter staff, modifiers, Send to Kitchen, lite KOT, settle-to-invoice, guest count, hourly rush.",
    notSold:
      "Foodpanda/Careem aggregation, split-by-seat, and a visual floor-plan editor are out of phase.",
    pains: [
      {
        title: "Eight tables, one kitchen",
        body: "If the pain is the floor, do not buy Starter. Trial Pro. Table status is the product.",
      },
      {
        title: "Modifiers without chaos",
        body: "Extra cheese, no onion — on the ticket, on the KOT, not on a shouted note.",
      },
      {
        title: "Rush by the hour",
        body: "Pro reports show when the floor actually runs. Starter only knows today.",
      },
    ],
    modules: [
      { title: "Table grid", body: "Empty, occupied, settling — the floor as a board, not a cart." },
      { title: "Lite KOT", body: "Send to kitchen, estimated ready, settle when they ask for the bill." },
      { title: "Waiter staff", body: "Seats on Pro. Owner still sees the drawer; waiters do not see profit." },
    ],
  },
  garments: {
    slug: "garments",
    name: "Garments",
    kicker: "Boutique · size × color",
    headline: "One shirt is not one SKU.",
    lede: "Size × color × fabric is the stock. A stall can live on a single barcode. A proper shop cannot. Matrix is the Pro pack — we will not pretend otherwise.",
    accent: "#C45B8A",
    accentName: "Wine",
    feeling: "Fabric, boutique",
    starterFit:
      "Khokha / simple garment: one product, one barcode, one stock. Manual discount on the till.",
    proFit:
      "Parent + variant matrix, auto SKU, per-size price, stock per cell, size/color chips on POS, saved season discounts.",
    notSold: "Website sync and an online fashion store are not in any tier.",
    pains: [
      {
        title: "Dead stock in the back",
        body: "Pro tells you which size and color is left. That is the report a boutique actually pays for.",
      },
      {
        title: "Season without a spreadsheet",
        body: "Saved discount rules on category or season — not a cashier typing 40% on every ticket.",
      },
      {
        title: "Still one scan",
        body: "The matrix does not mean a slow till. Each cell still has a barcode.",
      },
    ],
    modules: [
      { title: "Variant matrix", body: "S–XXL × colours × fabric. Stock lives in the cell." },
      { title: "POS chips", body: "Pick size and colour, then scan or tap. Price can differ by size." },
      { title: "Season rules", body: "Saved discounts. Cashier cap still 5% unless the owner overrides." },
    ],
  },
};

export const industryList = industrySlugs.map((slug) => industries[slug]);
