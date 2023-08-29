'use client';
import {
  Button,
  Divider,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Link from 'next/link';
import { useMemo } from 'react';
import { Icons } from './icons';
import UserDropdown from './user-control';

function EditorNavbar() {
  const MenuToggleItem = useMemo(() => {
    return (
      <>
        <NavbarMenuItem>
          <UserDropdown />
        </NavbarMenuItem>
        <Divider />
      </>
    );
  }, []);

  const NavbarMiddleItems = useMemo(() => {
    return (
      <>
        <NavbarItem>
          <Link href="#">Features</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </>
    );
  }, []);

  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Button variant="flat">
          <Icons.chevronLeft className="w-5 h-5 mr-1" />
          Back
        </Button>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {NavbarMiddleItems}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarMenu className="flex lg:hidden">{MenuToggleItem}</NavbarMenu>
        <NavbarItem className="hidden lg:flex">
          <UserDropdown />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default EditorNavbar;
