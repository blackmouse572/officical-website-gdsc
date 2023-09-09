'use client';
import { Icons } from '@components/icons';
import { Button, ButtonProps } from '@nextui-org/react';
import { signOut } from 'next-auth/react';

type Props = ButtonProps;

function LogoutButton({ ...props }: Props) {
  return (
    <Button
      onClick={() => signOut({ redirect: true })}
      startContent={<Icons.signOut className="w-4 h-4" />}
      color="danger"
      {...props}
    >
      <p className="font-medium">Logout</p>
    </Button>
  );
}

export default LogoutButton;
