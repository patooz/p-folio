import type { NextConfig } from "next";


console.log('Vercel build env check:', {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
});
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
