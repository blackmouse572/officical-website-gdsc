'use client';
import { Icons } from '@components/icons';
import { Button, ButtonProps } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

type Props = ButtonProps;

function GoBackButton({ ...props }: Props) {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <Button variant="flat" onClick={goBack} {...props}>
      <Icons.chevronLeft className="w-5 h-5 mr-1" />
      Back
    </Button>
  );
}

export default GoBackButton;
