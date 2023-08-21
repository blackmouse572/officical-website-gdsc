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
