import LoginForm from '@components/login-form';
import { Divider } from '@nextui-org/divider';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params?: {};
  searchParams?: { [key: string]: string | string[] | undefined };
};
export const metadata: Metadata = {
  title: 'Login',
};
function LoginPage({ searchParams }: Props) {
  const { email } = searchParams || {};
  return (
    <div
      className="container mx-auto gap-5 grid h-[calc(100vh-4.5rem)]
      md:grid-cols-[minmax(0,1fr),minmax(0,1fr)]
    "
    >
      <section className="h-full flex justify-center items-center">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-3xl mb-5">
              Welcome back fellow <span className="text-primary-500">GDSC</span> member
            </h3>
            <p className="text-stone-500">
              Login to your account to access the member-only features. If you don&lsquo;t have an account yet, please
              contanct the <span className="font-medium">core team</span>
            </p>
          </div>
          <div>
            <Divider className="mb-8" />
            <LoginForm
              defaultValues={{
                email: email as string,
              }}
            />
          </div>
        </div>
      </section>
      <section className="relative w-full h-full hidden md:block">
        <Image src={'/images/recap.jpg'} fill alt={'recap image'} objectFit="cover" />
        {/* Image */}
      </section>
    </div>
  );
}

export default LoginPage;
