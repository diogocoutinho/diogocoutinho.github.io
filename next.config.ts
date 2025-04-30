import type { NextConfig } from "next";
const isGithubPages = process.env.DEPLOY_TARGET === "gh-pages";
const repo = "diogocoutinho.github.io";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath:
    isGithubPages && process.env.NODE_ENV === "production" ? `/${repo}` : "",
  assetPrefix:
    isGithubPages && process.env.NODE_ENV === "production" ? `/${repo}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "media.licdn.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["tailwindcss"],
  },
};

export default nextConfig;
