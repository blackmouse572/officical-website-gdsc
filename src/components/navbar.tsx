'use client';
import BecomeAMemberButton from '@components/become-member-button';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';
import { MainNavItem } from '../types';
import { Icons } from './icons';
import LoginButton from './login-button';
import UserDropdown from './user-dropdown';

type Props = {
  items: MainNavItem[];
  children?: React.ReactNode;
};

function MainNavbar({ items, children }: Props) {
  const segments = useSelectedLayoutSegment();
  const { status, data } = useSession();
  return (
    <Navbar
      classNames={{
        item: 'hover:text-primary-500 actived:text-primary-500',
      }}
      isBlurred
      isBordered
    >
      <NavbarBrand>
        <Link href="/" className="cursor-pointer flex items-center justify-center">
          <Icons.logo className="mr-2" />
          <p className="font-bold text-xl">GDSC</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4">
        {items.map((item) => {
          return (
            <NavbarItem isActive={item.href === segments} key={item.href} className="flex items-center gap-2">
              <Link aria-current={'page'} href={item.href}>
                {item.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent className="flex gap-4" justify="end">
        {status === 'authenticated' ? (
          <UserDropdown />
        ) : (
          <>
            <NavbarItem className="hidden lg:flex font-medium">
              <LoginButton variant="flat" />
            </NavbarItem>
            <NavbarItem className="relative group">
              <BecomeAMemberButton />
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}

export default MainNavbar;
