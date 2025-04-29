/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/diogocoutinho.github.io",
  assetPrefix: "/diogocoutinho.github.io/",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"],
    });
    return config;
  },
};

module.exports = nextConfig;
