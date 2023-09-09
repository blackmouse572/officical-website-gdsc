import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
        'size-400': '400% 400%',
      },
    },
  },
  plugins: [
    nextui({
      themes: {},
    }),
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('tailwindcss-hero-patterns'),
  ],
};
export default config;
