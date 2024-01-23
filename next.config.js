const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const { withContentlayer  } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.literal.club'
            }
        ]
    }
}

module.exports = withContentlayer(withBundleAnalyzer(nextConfig));
