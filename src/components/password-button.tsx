'use client';
import { toast } from '@hooks/useToast';
import { Input, InputProps } from '@nextui-org/react';
import { customAlphabet } from 'nanoid';

type Props = InputProps;

function PasswordInput({ ...props }: Props) {
  const generateStrongPassword = () => {
    const length = 16;
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*()_+';
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    let password = '';
    while (!regex.test(password)) {
      password = customAlphabet(chars, length)();
    }

    navigator.clipboard.writeText(password);
    props.value = password;
    toast({
      variant: 'success',
      title: 'Password generated',
      description: 'Password copied to clipboard',
    });
  };

  return (
    <Input
      description={
        props.description || (
          <p className="text-primary-500 font-medium hover:underline cursor-pointer" onClick={generateStrongPassword}>
            Generate a strong password and copy it to clipboard
          </p>
        )
      }
      //   onChange={onChange}
      //   value={password}
      {...props}
    />
  );
}

export default PasswordInput;
