/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["react-awesome-reveal"],
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1200],
    imageSizes: [256, 384],
    minimumCacheTTL: 60 * 60 * 24,
  },
  async redirects() {
    return [
      {
        source: "/solutions/garments",
        destination: "/floors/retail",
        permanent: true,
      },
      {
        source: "/solutions/:slug",
        destination: "/floors/:slug",
        permanent: true,
      },
      {
        source: "/solutions",
        destination: "/floors",
        permanent: true,
      },
      {
        source: "/products/omni-ledger",
        destination: "/omni-ledger",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/omni-ledger",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
