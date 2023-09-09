'use client';
import { Icons } from '@components/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@hooks/useToast';
import { Button, Input } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type Props = {
  defaultValues?: Omit<LoginData, 'password'>;
} & React.HTMLAttributes<HTMLFormElement>;
const LoginSchema = z.object({
  email: z
    .string()
    .email('Invalid email address. Please enter a valid email address (e.g. example@gmail.com')
    .toLowerCase(),
  password: z
    .string()
    .min(6)
    .max(255)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      'Minimum six characters, at least one uppercase letter, one lowercase letter and one number'
    ),
});
type LoginData = z.infer<typeof LoginSchema>;
function LoginForm({ defaultValues }: Props) {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, formState, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

  const onSubmit = async (data: LoginData) => {
    setIsSubmitting(true);
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: searchParams?.get('from') || '/',
    }).finally(() => {
      setIsSubmitting(false);
    });

    if (result?.ok) {
      toast({
        variant: 'success',
        title: 'Success',
        description: 'Logged in successfully',
      });
    } else {
      toast({
        variant: 'danger',
        title: 'Error',
        description: 'Invalid credentials',
      });
    }
  };

  return (
    <form className="space-y-4 max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Input {...register('email')} label="Email" placeholder="Email" isDisabled={isSubmitting} />
        {formState.errors.email && <p className="text-red-500 text-xs">{formState.errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <Input
          {...register('password')}
          label="Password"
          isDisabled={isSubmitting}
          placeholder="Password"
          type="password"
        />
        {formState.errors.password && <p className="text-red-500 text-xs">{formState.errors.password.message}</p>}
      </div>
      <Button
        className="w-full"
        type="submit"
        color="primary"
        variant="solid"
        startContent={<Icons.sparkle className="w-4 h-4" />}
        isLoading={isSubmitting}
      >
        Let&rsquo;s go
      </Button>
    </form>
  );
}

export default LoginForm;
