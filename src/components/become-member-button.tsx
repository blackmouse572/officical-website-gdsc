import { Icons } from '@components/icons';
import { Button, ButtonProps } from '@nextui-org/button';
import Link from 'next/link';

type Props = ButtonProps & {
  withSparkles?: boolean;
};

function BecomeAMemberButton({ className, withSparkles, ...props }: Props) {
  return (
    <>
      <Button
        as={Link}
        href="/auth/register"
        variant="solid"
        startContent={<Icons.sparkle className="w-4 h-4" />}
        className={
          'bg-gradient-to-tr text-white from-purple-500 via-pink-500 to-rose-500 bg-bottom hover:bg-left-top transition-all duration-100 bg-size-200 bg-no-repeat peer'
        }
        {...props}
      >
        Become a member
      </Button>
      {withSparkles && (
        <>
          <Icons.sparkle className="w-4 h-4 text-purple-500 absolute -bottom-2 left-4 fill-purple-500 animate-ping opacity-0 scale-0 group-hover:scale-100 duration-500 delay-75 rotate-12 ease-out paused group-hover:running group-hover:opacity-100" />
          <Icons.sparkle className="w-6 h-6 text-purple-500 absolute left-5 -top-4 fill-purple-500 animate-ping opacity-0 scale-0 rotate-45 group-hover:scale-100 delay-150 duration-700 ease-out group-hover:running group-hover:opacity-100" />
          <Icons.sparkle className="w-2 h-4 text-purple-500 absolute -top-4 right-3 fill-purple-500 animate-ping opacity-0 scale-0 group-hover:scale-100 delay-200 rotate-45 direction-reverse duration-700 ease-out group-hover:running group-hover:opacity-100" />
          <Icons.sparkle className="w-4 h-4 text-purple-500 absolute -top-2 left-2 fill-purple-500 animate-ping opacity-0 scale-0 group-hover:scale-100 delay-100 duration-500 ease-out group-hover:running group-hover:opacity-100" />
          <Icons.sparkle className="w-6 h-6 text-purple-500 absolute right-0 -top-2 fill-purple-500 duration-700 opcaity-0 animate-ping opacity-0 scale-0 rotate-6 group-hover:scale-100  ease-out group-hover:running group-hover:opacity-100" />
        </>
      )}
    </>
  );
}

export default BecomeAMemberButton;
