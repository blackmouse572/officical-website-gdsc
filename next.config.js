const { createContentlayerPlugin } = require('next-contentlayer');
const bcrypt = require('bcrypt');

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcrypt'],
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
      {
        hostname: 'gdsc-fptudn.vercel.app',
        protocol: 'https',
        pathname: '/**/*',
      },
    ],
    domains: ['images.unsplash.com', 'localhost', 'gdsc-fptudn.vercel.app'],
  },
};

const withContentLayer = createContentlayerPlugin({
  // ...
});

module.exports = withContentLayer(config);
