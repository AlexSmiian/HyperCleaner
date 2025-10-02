'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { object, bool, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const regExpEmail = /^[_a-zA-Z0-9]+([._%+-]*[_a-zA-Z0-9])*@(?:[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])*\.[a-z]{2,}|(([0-9]{1,3}\.){3}[0-9]{1,3}|[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])*(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])*)*\.[a-z]{2,}))$/;

type Data = {
  email: string;
  password: string;
  create_password: boolean;
  legal_agree: boolean;
};

const signUpSchema = object({
  email: string()
    .trim()
    .required('Required')
    .matches(regExpEmail, 'Please, enter valid email'),
  create_password: bool(),
  password: string()
    .trim()
    .when('create_password', ([create_password], schema) => {
      return !create_password
        ? schema
          .min(6, 'The length of the password must be at least 6 characters')
          .max(
            256,
            'The length of the password must be less then 256 characters'
          )
        : schema.min(0);
    }),
  legal_agree: bool().oneOf([true], 'Please, select chekbox'),
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
    legal_agree: boolean;
    create_password: boolean;
    email: string;
    password: string;
  }>({
    shouldFocusError: false,
    mode: 'onChange',
    reValidateMode: 'onChange',
    //@ts-ignore
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      create_password: true,
      legal_agree: true,
    },
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
