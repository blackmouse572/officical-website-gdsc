import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '../components/providers';
import TailwindIndicator from '../components/tailwind-indicator';
import { Toaster } from '../components/ui/toaster';
import { siteConfig } from '../configs/siteconfig';
import './styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: {
    icon: 'images/small-logo.webp',
    apple: 'images/small-logo.webp',
  },
  title: {
    default: 'GDSC FPTU DN',
    template: '%s | GDSC FPTU DN',
  },
  description: 'Website of GDSC FPTU DN',
  authors: [
    {
      name: 'Nguyen Tuan Ngoc',
      url: 'ngocnt.jobs@gmail.com',
    },
  ],
  category: 'Technology',
  manifest: `${siteConfig.url}site.webmanifest`,
  keywords: [
    'GDSC',
    'FPTU',
    'DN',
    'Google',
    'Developer',
    'Student',
    'Club',
    'Technology',
    'Blog',
    'Event',
    'Workshop',
    'Hackathon',
    'Community',
    'Công nghệ',
    'Đại học FPT',
    'Google Developer Student Club Da Nang',
  ],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: siteConfig.url,
    siteName: 'GDSC FPTU DN',
    title: 'GDSC FPTU DN',
    description: 'Website of GDSC FPTU DN',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'min-h-screen bg-background font-sans antialiased')}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>{children}</Providers>
        <TailwindIndicator />
        <Toaster />
      </body>
    </html>
  );
}
