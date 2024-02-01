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
    },
    webpack: (config, options = {}) => {
        config.externals.push('sharp');
        const { webpack } = options;
        const regex = /^sharp$/
        config.plugins.push(new webpack.IgnorePlugin({
          resourceRegExp: regex,
        }));
        return config;
    }
}

module.exports = withContentlayer(withBundleAnalyzer(nextConfig));
