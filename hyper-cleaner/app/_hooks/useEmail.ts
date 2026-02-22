'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const regExpEmail = /^[_a-zA-Z0-9]+([._%+-]*[_a-zA-Z0-9])*@(?:[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])*\.[a-z]{2,}|(([0-9]{1,3}\.){3}[0-9]{1,3}|[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])*(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])*)*\.[a-z]{2,}))$/;

type Data = {
  email: string;
};

const signUpSchema = object({
  email: string()
    .trim()
    .required('Required')
    .matches(regExpEmail, 'Please, enter valid email'),
});

export default function useEmail() {
  const {
    register,
    getValues,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<{
    email: string;
  }>({
    shouldFocusError: false,
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<Data> = async (data) => {
    const { email } = data;
    localStorage.setItem("email", email);
  }

  return {
    register,
    errors,
    clearErrors,
    getValues,
    watch,
    setValue,
    handleSubmit,
    onSubmit,
  };
}
