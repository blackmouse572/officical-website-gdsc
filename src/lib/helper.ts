import { siteConfig } from '../configs/siteconfig';

export const absoluteUrl = (path: string) => {
  return `${siteConfig.url}${path}`;
};

export const removeBreakAndTrim = (text: string) => {
  return text.replace(/(\r\n|\n|\r)/gm, '').trim();
};

export function slugtify(text: string): string {
  // Lowercase the string.
  text = text.toLowerCase();

  // Replace any characters that are not alphanumeric, dashes, or underscores with dashes.
  text = text.replace(/[^\w\-_]/g, '-');

  // Remove any consecutive dashes.
  text = text.replace(/-+/g, '-');

  // Trim the dashes from the beginning and end of the string.
  text = text.replace(/^-+/, '').replace(/-+$/, '');

  return text;
}

export function toTitleCase(text: string): string {
  return text.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
