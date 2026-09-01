/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["react-awesome-reveal"],
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
