import { Button } from '@nextui-org/react';
import { signIn } from 'next-auth/react';

type Props = {};

function LoginButton({}: Props) {
  return (
    <Button variant="ghost" onClick={() => signIn('github')}>
      Sign In
    </Button>
  );
}

export default LoginButton;
