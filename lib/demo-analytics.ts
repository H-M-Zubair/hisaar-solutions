export type DemoPeriod = "daily" | "weekly" | "monthly" | "yearly";

export const demoPeriods: { id: DemoPeriod; label: string; range: string }[] = [
  { id: "daily", label: "Today", range: "Mobile & Starter keep this pane" },
  { id: "weekly", label: "Week", range: "Pro · vs last week" },
  { id: "monthly", label: "Month", range: "Pro · vs last month" },
  { id: "yearly", label: "Year", range: "Pro · vs last year" },
];

export const demoKpis: Record<
  DemoPeriod,
  {
    revenue: string;
    orders: string;
    profit: string;
    customers: string;
    aov: string;
    margin: string;
    revTrend: string;
    profitTrend: string;
  }
> = {
  daily: {
    revenue: "84,220",
    orders: "61",
    profit: "16,840",
    customers: "38",
    aov: "1,380",
    margin: "20.0%",
    revTrend: "+8.4%",
    profitTrend: "+3.1%",
  },
  weekly: {
    revenue: "5,12,400",
    orders: "348",
    profit: "1,04,880",
    customers: "191",
    aov: "1,472",
    margin: "20.5%",
    revTrend: "+11.2%",
    profitTrend: "+6.8%",
  },
  monthly: {
    revenue: "19,32,000",
    orders: "1,204",
    profit: "5,28,000",
    customers: "412",
    aov: "1,605",
    margin: "27.3%",
    revTrend: "+14.6%",
    profitTrend: "+9.4%",
  },
  yearly: {
    revenue: "2,14,80,000",
    orders: "14,110",
    profit: "48,90,000",
    customers: "1,086",
    aov: "1,522",
    margin: "22.8%",
    revTrend: "+18.0%",
    profitTrend: "+12.1%",
  },
};

export const demoTrend: Record<DemoPeriod, { label: string; revenue: number; profit: number }[]> = {
  daily: [
    { label: "8a", revenue: 42, profit: 9 },
    { label: "10a", revenue: 58, profit: 12 },
    { label: "12p", revenue: 71, profit: 16 },
    { label: "2p", revenue: 54, profit: 11 },
    { label: "4p", revenue: 63, profit: 13 },
    { label: "6p", revenue: 88, profit: 19 },
    { label: "8p", revenue: 96, profit: 22 },
  ],
  weekly: [
    { label: "Mon", revenue: 58, profit: 12 },
    { label: "Tue", revenue: 61, profit: 13 },
    { label: "Wed", revenue: 54, profit: 11 },
    { label: "Thu", revenue: 72, profit: 16 },
    { label: "Fri", revenue: 81, profit: 18 },
    { label: "Sat", revenue: 96, profit: 24 },
    { label: "Sun", revenue: 70, profit: 15 },
  ],
  monthly: [
    { label: "W1", revenue: 48, profit: 10 },
    { label: "W2", revenue: 62, profit: 14 },
    { label: "W3", revenue: 71, profit: 18 },
    { label: "W4", revenue: 88, profit: 24 },
  ],
  yearly: [
    { label: "Q1", revenue: 52, profit: 11 },
    { label: "Q2", revenue: 61, profit: 14 },
    { label: "Q3", revenue: 70, profit: 16 },
    { label: "Q4", revenue: 92, profit: 24 },
  ],
};

export const demoHourly = [
  { h: "8", v: 22 },
  { h: "10", v: 41 },
  { h: "12", v: 63 },
  { h: "14", v: 48 },
  { h: "16", v: 55 },
  { h: "18", v: 86 },
  { h: "20", v: 94 },
  { h: "22", v: 37 },
];

export const demoPayments = [
  { type: "Cash", share: 58, amount: "11,20,560" },
  { type: "Card", share: 22, amount: "4,25,040" },
  { type: "Credit", share: 14, amount: "2,70,480" },
  { type: "Partial", share: 6, amount: "1,15,920" },
];

export const demoTopSkus = [
  { name: "Atta 10kg", sku: "ATTA-10", sold: "186", revenue: "3,44,100" },
  { name: "Oil 5L", sku: "OIL-5L", sold: "142", revenue: "4,60,080" },
  { name: "Milk 1.5L", sku: "MILK-15", sold: "310", revenue: "1,95,300" },
  { name: "Tea 475g", sku: "TEA-475", sold: "97", revenue: "86,330" },
];

export const demoInventory = {
  skus: "486",
  value: "18,40,000",
  low: "7",
  out: "2",
};
