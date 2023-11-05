'use client';
import { Icons } from '@components/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Textarea } from '@nextui-org/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type Props = {};
const FormData = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(10).max(10),
  desciption: z.string().optional(),
  ask: z.string().optional(),
});

function BecomeAMemberForm({}: Props) {
  const { formState, register, handleSubmit } = useForm({
    resolver: zodResolver(FormData),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      description: '',
      ask: '',
    },
  });

  const [submissionError, setSubmissionError] = useState<string | null>(null); // State to handle submission error

  const onSubmit = async (data: any) => {
    try {
      // Send the form data to your server or handle the submission logic here
      // You can use a fetch or Axios to make an API call
      // Replace the following line with your actual submission logic
      console.log('Form Data:', data);
      setSubmissionError(null); // Clear any previous submission error
    } catch (error) {
      // Handle submission error
      setSubmissionError('An error occurred while submitting the form.');
    }
  };

  return (
    <form className="mx-auto space-y-4 min-w-[240px] max-w-md" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <Input isRequired className="w-full" label="Name" placeholder="John Doe" {...register('name')} />
        {formState.errors.name && <p className="text-red-500 text-xs pl-2">{formState.errors.name.message}</p>}
      </div>
      <div className="w-full">
        <Input isRequired className="w-full" label="Email" placeholder="john@example.com" {...register('email')} />
        {formState.errors.email && <p className="text-red-500 text-xs pl-2">{formState.errors.email.message}</p>}
      </div>
      <div className="w-full">
        <Input isRequired className="w-full" label="Phone" placeholder="1234567890" {...register('phone')} />
        {formState.errors.phone && <p className="text-red-500 text-xs pl-2">{formState.errors.phone.message}</p>}
      </div>
      <div className="w-full">
        <Textarea
          className="w-full"
          label="Description"
          placeholder="Tell us about yourself..."
          {...register('description')}
        />
        {formState.errors.description && (
          <p className="text-red-500 text-xs pl-2">{formState.errors.description.message}</p>
        )}
      </div>
      <div className="w-full">
        <Textarea className="w-full" label="Ask" placeholder="What would you like to ask?" {...register('ask')} />
        {formState.errors.ask && <p className="text-red-500 text-xs pl-2">{formState.errors.ask.message}</p>}
      </div>
      {submissionError && <p className="text-red-500 text-xs pl-2">{submissionError}</p>}
      <Button
        type="submit"
        disabled={formState.isSubmitting}
        color={'primary'}
        startContent={<Icons.sparkle className="w-4 h-4" />}
      >
        Enroll
      </Button>
    </form>
  );
}

export default BecomeAMemberForm;
