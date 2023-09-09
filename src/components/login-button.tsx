'use client';
import { Button, ButtonProps } from '@nextui-org/react';
import { signIn } from 'next-auth/react';

type Props = ButtonProps;

function LoginButton({ ...props }: Props) {
  return (
    <Button variant="ghost" onClick={() => signIn('github')} {...props}>
      Sign In
    </Button>
  );
}

export default LoginButton;
