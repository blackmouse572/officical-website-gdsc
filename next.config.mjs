const { createContentlayerPlugin } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
export default withContentlayer({
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
        pathname: '/**/*',
      },
      {
        hostname: 'localhost',
        protocol: 'http',
        pathname: '/**/*',
      },
    ],
    domains: ['images.unsplash.com', 'localhost'],
  },
});
