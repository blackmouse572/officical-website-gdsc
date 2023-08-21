import { withContentlayer } from 'next-contentlayer';
/** @type {import('next').NextConfig} */

export default withContentlayer({
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {
        // Option format
        '.md': [
          {
            loader: '@mdx-js/loader',
            options: {
              format: 'md',
            },
          },
        ],
        // Option-less format
        '.mdx': ['@mdx-js/loader'],
      },
    },
  },
});
