import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  ...(isGithubActions && {
    output: 'export',
    basePath: '/HyperCleaner',
    trailingSlash: true,
  }),
  images: {
    unoptimized: isGithubActions,
  },
};

export default nextConfig;
