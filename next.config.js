const { createContentlayerPlugin } = require('next-contentlayer');
const bcrypt = require('bcrypt');

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcrypt'],
  },
  images: {
    domains: ['images.unsplash.com', 'localhost', 'gdsc-fptudn.vercel.app'],
  },
};

const withContentLayer = createContentlayerPlugin({
  // ...
});

module.exports = withContentLayer(config);
