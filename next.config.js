/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/diogocoutinho.github.io",
  assetPrefix: "/diogocoutinho.github.io/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
