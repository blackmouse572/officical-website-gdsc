export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = Pick<NavItem, 'title' | 'disabled'> &
  (
    | {
        href: string;
        items: never;
      }
    | {
        href?: string;
        items: NavItem[];
      }
  );

declare module '@editorjs/header';
declare module '@editorjs/list';
declare module '@editorjs/checklist';
declare module '@editorjs/quote';
declare module '@editorjs/image';
declare module '@editorjs/code';
declare module '@editorjs/embed';
declare module '@editorjs/link';
declare module '@editorjs/marker';
declare module '@editorjs/raw';
declare module '@editorjs/paragraph';
declare module '@editorjs/simple-image';
declare module '@editorjs/warning';
declare module '@editorjs/image';
