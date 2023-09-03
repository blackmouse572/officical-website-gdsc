import slugify from 'slugify';
import { siteConfig } from '../configs/siteconfig';

export const absoluteUrl = (path: string) => {
  return `${siteConfig.url}${path}`;
};

export const removeBreakAndTrim = (text: string) => {
  return text.replace(/(\r\n|\n|\r)/gm, '').trim();
};

export function slugtify(text: string): string {
  return slugify(text, {
    replacement: '-',
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
}

export function toTitleCase(text: string): string {
  return text.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export function generateOgImage(text: string): string {
  return `${siteConfig.url}/api/og?title=${text}`;
}
