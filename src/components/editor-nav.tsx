'use client';
import GoBackButton from '@components/go-back';
import {
  Divider,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Image from 'next/image';
import { useMemo } from 'react';
import UserDropdown from './user-dropdown';

function EditorNavbar() {
  const MenuToggleItem = useMemo(() => {
    return (
      <>
        <div className="w-1/2 relative h-12 mx-auto">
          <Image src="/images/logo_color_long.png" alt="logo" fill objectFit="contain" />
        </div>
        <Divider />
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
          <div className="w-80 relative aspect-video">
            <Image src="/images/logo_color_long.png" alt="logo" fill objectFit="contain" />
          </div>
        </NavbarItem>
      </>
    );
  }, []);

  return (
    <Navbar isBordered>
      <NavbarBrand>
        <GoBackButton variant="flat" color="warning" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {NavbarMiddleItems}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarMenu className="flex lg:hidden">{MenuToggleItem}</NavbarMenu>
        <NavbarItem className="hidden sm:flex">
          <UserDropdown />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default EditorNavbar;
