import { siteConfig } from '../configs/siteconfig';

export const absoluteUrl = (path: string) => {
  return `${siteConfig.url}${path}`;
};
