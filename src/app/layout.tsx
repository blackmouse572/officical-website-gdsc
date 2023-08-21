import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { siteConfig } from '../configs/siteconfig';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
