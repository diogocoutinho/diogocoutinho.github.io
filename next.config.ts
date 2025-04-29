import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "media.licdn.com",
      },
    ],
  },
};

export default nextConfig;
