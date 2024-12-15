const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.literal.club",
      },
    ],
  },
  experimental: {
    ppr: "incremental",
  },
  transpilePackages: ["next-mdx-remote"],
  webpack: (config, options = {}) => {
    config.externals.push("sharp");
    const { webpack } = options;
    const regex = /^sharp$/;
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: regex,
      })
    );
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
