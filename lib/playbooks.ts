export const playbooks = [
  {
    slug: "kirana-rush",
    industry: "Grocery",
    accent: "#FF8A3D",
    title: "Evening rush without a second copy book",
    setting: "A single kirana, owner on the till, one cashier on weekends.",
    scene:
      "Seven o’clock. The queue is atta, oil, and a regular who still has udhaar. The fibre is sulking. The drawer opened with five thousand.",
    moves: [
      "Shift already open — float is on the ticket, not in a notebook.",
      "Scan three barcodes, search the fourth. Cashier discount capped at 5%.",
      "Regular on the customer pane: credit limit, outstanding, partial pay.",
      "Wi‑Fi down: two more sales. It comes back: Sync. Queued badge clears.",
      "Close shift. Counted cash versus expected. Shortage is an owner fact, not a rumour.",
    ],
    proof: "Offline queue + udhaar + shift close ship on Starter. Month charts do not — that is the Pro conversation after the rush is calm.",
  },
  {
    slug: "expiry-window",
    industry: "Pharmacy",
    accent: "#1EE0B0",
    title: "The batch that should have left first",
    setting: "A medical store that already tracks expiry on paper, badly.",
    scene:
      "A syrup comes in with two lots. One expires in 28 days. The dispenser would have grabbed the fuller bottle.",
    moves: [
      "Receive as lots, not as a pile of quantity.",
      "FEFO picks the 28-day batch at the till.",
      "Expiry board: 30 / 60 day windows before they become dump.",
      "Rx-required SKU asks for a prescription number.",
      "An expired lot cannot complete. That is the block, not a warning toast.",
    ],
    proof: "Lots, FEFO, and the expiry board are the pharmacy Pro pack. Starter will not pretend to be that product.",
  },
  {
    slug: "eight-tables",
    industry: "Restaurant",
    accent: "#FF5A2A",
    title: "Eight tables, one kitchen, bill last",
    setting: "A small dine-in, not a takeaway window.",
    scene:
      "Table 4 is occupied. Table 2 wants the bill. The kitchen is two tickets behind. A retail cart would have invoiced them twenty minutes ago.",
    moves: [
      "Open table, guest count, waiter on the ticket.",
      "Modifiers: extra cheese, no onion — printed on the KOT.",
      "Send to kitchen. The floor stays open; nothing is a final invoice yet.",
      "Settle table 2 to an invoice when they ask.",
      "Owner later: hourly rush, not just today’s lump sum.",
    ],
    proof: "If the pain is tables, we trial Pro. Starter is takeaway on purpose — we will not sell a KOT that is not there.",
  },
  {
    slug: "dead-stock-rail",
    industry: "Garments",
    accent: "#C45B8A",
    title: "The mediums that never left the rail",
    setting: "A boutique with a real size×color wall, not a stall.",
    scene:
      "The black shirt in M is gone. XL in the same dye is a pile. Season is about to end and the discount still lives in someone’s head.",
    moves: [
      "Parent shirt, matrix of size × colour. Stock in the cell, not a note.",
      "POS chips: colour, then size. Barcode still one scan.",
      "Saved season rule on the category — cashier is not typing 40%.",
      "Pro report: which size/colour is left. That is dead stock, named.",
      "Staff sales if more than one person is on the floor.",
    ],
    proof: "Without the matrix, garments Pro is a grocery skin. Trial shows the grid on day one; we recommend Pro when the wall is real.",
  },
] as const;
