import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/HyperCleaner',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
