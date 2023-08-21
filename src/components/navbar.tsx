'use client';
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';
import { MainNavItem } from '../types';
import { Icons } from './icons';

type Props = {
  items: MainNavItem[];
  children?: React.ReactNode;
};

function MainNavbar({ items, children }: Props) {
  const segments = useSelectedLayoutSegment();
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
        <NavbarItem className="hidden lg:flex font-medium">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default MainNavbar;
