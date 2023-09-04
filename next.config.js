const { createContentlayerPlugin } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const config = {
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
};

const withContentLayer = createContentlayerPlugin({
  // ...
});

module.exports = withContentLayer(config);
