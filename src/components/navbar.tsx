'use client';
import BecomeAMemberButton from '@components/become-member-button';
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
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
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary',
          'data-[active=true]:text-primary',
        ],
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
            <NavbarItem isActive={item.href === '/' + segments} key={item.href} className="flex items-center gap-2 ">
              <Link
                aria-current={'page'}
                href={item.href}
                color={item.href === '/' + segments ? 'primary' : 'foreground'}
              >
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
              <BecomeAMemberButton withSparkles />
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}

export default MainNavbar;
