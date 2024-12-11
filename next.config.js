/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Matches any hostname
            },
        ],
    },
};

module.exports = nextConfig;
