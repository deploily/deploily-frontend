import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        WEB_SITE_URL: "https://deploily.cloud",
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'deploily.cloud',
                pathname: '**',
            },
        ],
    },};

export default withNextIntl(nextConfig);

