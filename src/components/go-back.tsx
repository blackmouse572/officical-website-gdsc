'use client';
import { Icons } from '@components/icons';
import { Button, ButtonProps } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

type Props = ButtonProps & {
  href?: string;
};

function GoBackButton({ href, ...props }: Props) {
  const router = useRouter();
  const goBack = () => {
    href ? router.push(href) : router.back();
  };
  return (
    <Button variant="flat" onClick={goBack} {...props}>
      <Icons.chevronLeft className="w-5 h-5 mr-1" />
      Back
    </Button>
  );
}

export default GoBackButton;
