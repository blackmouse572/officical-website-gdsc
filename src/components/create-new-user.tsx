'use client';

import { RegisterSchema, RegisterSchemaType } from '@/validations/auth.validator';
import { Icons } from '@components/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@hooks/useToast';
import { toTitleCase } from '@lib/helper';
import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import { Role } from '@prisma/client';
import { customAlphabet } from 'nanoid';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

function CreateNewUserForm() {
  const [roles, setRoles] = useState<Role[]>([]);

  const getRoles = useCallback(async () => {
    const res = await fetch('/api/admin/roles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json() as unknown as Role[];
    });
    setRoles(res);
  }, [setRoles]);

  useEffect(() => {
    getRoles();
  }, [getRoles, setRoles]);
  const { register, formState, handleSubmit, setValue } = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: '',
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: RegisterSchemaType) => {
    console.log(data);
    setIsSubmitting(true);
    const res = fetch('/api/admin/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (!res.success) {
          throw new Error(res.message);
        } else {
          toast({
            variant: 'success',
            title: 'Success',
            description: 'New user created successfully',
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast({
          variant: 'danger',
          title: 'Error',
          description: err.message,
        });
      });

    setIsSubmitting(false);
  };

  const RoleSelection = useMemo(() => {
    if (!roles) return <></>;
    return roles.map((role: Role) => {
      return (
        <SelectItem key={role.id} value={role.id}>
          {toTitleCase(role.title)}
        </SelectItem>
      );
    });
  }, [roles]);

  const generateStrongPassword = () => {
    const length = 12;
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*()_+';
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    let password = '';
    while (!regex.test(password)) {
      password = customAlphabet(chars, length)();
    }
    navigator.clipboard.writeText(password);

    setValue('password', password as never);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-xs mx-auto">
      <div className="space-y-2">
        <Input
          {...register('name')}
          placeholder="name"
          label="Member Name"
          className="w-full"
          labelPlacement="outside-left"
          description="Enter full name of the member, this name will be displayed on the website."
        />
        {formState.errors.name && <span className="text-danger-500 text-xs pl-4">{formState.errors.name.message}</span>}
      </div>

      <div className="space-y-2">
        <Input
          {...register('email')}
          placeholder="ngocvlqt1995"
          label="Email"
          className="w-full data-[has-helper=true]:justify-between"
          labelPlacement="outside-left"
          description="The email will be used to login to the system."
        />
        {formState.errors.email && (
          <span className="text-danger-500 text-xs pl-4">{formState.errors.email.message}</span>
        )}
      </div>

      <div className="space-y-2">
        <Input
          {...register('password')}
          placeholder="password"
          type="password"
          className="w-full data-[has-helper=true]:justify-between"
          classNames={{
            input: 'w-full',
            mainWrapper: 'w-full',
          }}
          labelPlacement="outside-left"
          label="Password"
          description={
            <p className="text-primary-500 font-medium hover:underline cursor-pointer" onClick={generateStrongPassword}>
              Generate a strong password and copy it to clipboard
            </p>
          }
        />
        {formState.errors.password && (
          <span className="text-danger-500 text-xs pl-4">{formState.errors.password.message}</span>
        )}
      </div>

      <div className="space-y-2">
        <Select
          className="w-full data-[has-helper=true]:justify-between"
          label="User role"
          {...register('role')}
          placeholder="User role"
          labelPlacement="outside-left"
          // defaultSelectedKeys={roles?[0}
        >
          {RoleSelection}
        </Select>

        {formState.errors.role && <span className="text-danger-500 text-xs pl-4">{formState.errors.role.message}</span>}
      </div>
      <Button
        type="submit"
        className="w-full text-white"
        startContent={<Icons.add className="w-4 h-4" />}
        color="success"
        isLoading={isSubmitting}
      >
        Create new user
      </Button>
    </form>
  );
}

export default CreateNewUserForm;
