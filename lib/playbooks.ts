export const playbooks = [
  {
    slug: "kirana-rush",
    industry: "Grocery",
    floor: "grocery",
    accent: "#FF8A3D",
    photo: "/photos/grocery-floor.jpg",
    photoAlt: "Evening rush at a kirana counter",
    title: "Evening rush. No second copy book.",
    setting: "One kirana. Owner on the till. One extra cashier on weekends.",
    scene:
      "Seven o’clock. Atta, oil, and a regular who still has udhaar. Wifi is sulking. The drawer opened with five thousand.",
    moves: [
      "Shift already open — morning cash is on the screen, not in a notebook.",
      "Scan three items, search the fourth. Cashier discount cannot go above 5%.",
      "Regular on the customer screen: how much they owe, part-pay today.",
      "Wifi down: two more sales. It comes back: everything is saved.",
      "Close the drawer. Counted cash versus expected. Shortage is a fact, not a rumour.",
    ],
    proof: "Offline selling, udhaar, bulk import, this week’s sale, and seven nights of cash count ship on Starter. Month charts and profit do not — that is the Pro talk after the rush is calm.",
  },
  {
    slug: "expiry-window",
    industry: "Pharmacy",
    floor: "pharmacy",
    accent: "#1EE0B0",
    photo: "/photos/pharmacy-floor.jpg",
    photoAlt: "A medical store shelf of medicines",
    title: "The bottle that should have left first",
    setting: "A medical store that tracks expiry on paper — badly.",
    scene:
      "A syrup comes in with two batches. One expires in 28 days. The dispenser would have grabbed the fuller bottle.",
    moves: [
      "Receive as batches, not as a pile of quantity.",
      "The till picks the 28-day batch first.",
      "Expiry list: 30 / 60 days before they become dump.",
      "A medicine that needs a prescription asks for the number.",
      "An expired batch cannot complete. That is a stop, not a warning.",
    ],
    proof: "Batches, sell-oldest-first, and the expiry list are the pharmacy Pro pack. Starter will not pretend to be that product.",
  },
  {
    slug: "eight-tables",
    industry: "Restaurant",
    floor: "restaurant",
    accent: "#FF5A2A",
    photo: "/photos/restaurant-floor.jpg",
    photoAlt: "A small restaurant floor with tables",
    title: "Eight tables, one kitchen, bill last",
    setting: "A small dine-in, not a takeaway window.",
    scene:
      "Table 4 is seated. Table 2 wants the bill. The kitchen is two tickets behind. A shop cart would have billed them twenty minutes ago.",
    moves: [
      "Open table, guest count, waiter on the ticket.",
      "Extra cheese, no onion — printed on the kitchen slip.",
      "Send to kitchen. The table stays open. Nothing is a final bill yet.",
      "Settle table 2 when they ask.",
      "Owner later: busy hours, not just today’s lump sum.",
    ],
    proof: "If the pain is tables, we trial Pro. Starter is takeaway on purpose — we will not sell a kitchen ticket that is not there.",
  },
  {
    slug: "leftover-stock",
    industry: "Retail",
    floor: "retail",
    accent: "#C45B8A",
    photo: "/photos/retail-floor.jpg",
    photoAlt: "A mixed retail floor with clothes, bags, and other goods",
    title: "The items that never left the shelf",
    setting:
      "A clothes shop, a mobile shop, a cosmetics counter — any retail floor that is not grocery, pharmacy, or a restaurant.",
    scene:
      "The black shirt in M is gone. XL is a pile. Across the street a Redmi 13 in 128GB is sold out and 256GB sits. Season is about to end and the discount still lives in someone’s head.",
    moves: [
      "Each kind of item has its own stock: size and colour for clothes, model and storage for phones.",
      "Scan still one barcode. The till knows which kind it was.",
      "Saved discount on the category — cashier is not typing 40%.",
      "Pro report: which kinds are left. That is leftover stock, named.",
      "Staff sales if more than one person is on the floor.",
    ],
    proof:
      "Without kinds, retail Pro is just a grocery till. Clothes get size and colour. Mobile shops get model and storage. The demo shows leftover stock on day one.",
  },
] as const;
