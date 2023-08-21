import React from 'react';
import MainNavbar from '../../components/navbar';
import { mainNav } from '../../configs/siteconfig';

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <main>
      <MainNavbar items={mainNav} />

      <section>{children}</section>
    </main>
  );
}

export default MainLayout;
