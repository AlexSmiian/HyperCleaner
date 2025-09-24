'use client';

import { useForm, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { object, bool, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const regExpEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export type CreateAccountData = {
  email: string;
  legal_agree: boolean; // Видалено знак питання - поле обов'язкове
};

const signUpSchema = object({
  email: string()
      .trim()
      .required('Your email is incomplete')
      .matches(regExpEmail, 'Your email is incomplete'),
  legal_agree: bool().required('Agree to the terms').oneOf([true], 'Agree to the terms'),
});

type UseCreateAccountReturn = {
  register: UseFormReturn<CreateAccountData>['register'];
  errors: UseFormReturn<CreateAccountData>['formState']['errors'];
  clearErrors: UseFormReturn<CreateAccountData>['clearErrors'];
  getValues: UseFormReturn<CreateAccountData>['getValues'];
  setValue: UseFormReturn<CreateAccountData>['setValue'];
  watch: UseFormReturn<CreateAccountData>['watch'];
  handleSubmit: (onSubmit: SubmitHandler<CreateAccountData>) => (e?: React.BaseSyntheticEvent) => Promise<void>;
};

export default function useCreateAccount(): UseCreateAccountReturn {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm<CreateAccountData>({
    shouldFocusError: false,
    mode: 'onSubmit',
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      legal_agree: true,
      email: '',
    },
  });

  return {
    register,
    errors,
    clearErrors,
    getValues,
    setValue,
    watch,
    handleSubmit,
  };
}