export const paths = {
  product: "/omni-ledger",
  floors: "/floors",
  floor: (slug: string) => `/floors/${slug}`,
} as const;
