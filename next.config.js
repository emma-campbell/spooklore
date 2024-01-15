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

module.exports = nextConfig
