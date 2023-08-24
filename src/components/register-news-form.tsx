'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Card, CardBody, CardProps, Input } from '@nextui-org/react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from '../hooks/useToast';
import { registerNewsSchema } from '../validations/news.validator';

type FormData = z.infer<typeof registerNewsSchema>;
function RegisterNewsForm({ className, ...props }: CardProps) {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(registerNewsSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log({ data });
    toast({
      title: 'Register News',
      description: 'Register News Success',
      vocab: 'success',
      variant: 'default',
    });
  };

  return (
    <Card className={clsx('', className)} {...props}>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h1 className="text-primary-500 font-medium text-center">Register News Form</h1>
          <div>
            <Input placeholder="Email" {...register('email')} />
            {formState.errors.email && <p className="text-red-500 text-xs">{formState.errors.email.message}</p>}
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </CardBody>
    </Card>
  );
}

export default RegisterNewsForm;
