import { useState, useEffect } from 'react';

interface UseEmailAutocompleteProps {
  watch: (callback: (value: { email:string }, { name }: { name: string }) => void) => { unsubscribe: () => void };
  clearErrors: () => void;
  setValue: (name: "email", value: string) => void;
}

export const useEmailAutocomplete = ({ watch, clearErrors, setValue }: UseEmailAutocompleteProps) => {
  const [isAutocomplete, setIsAutocomplete] = useState<boolean>(false);
  const [autocompleteEmail, setAutocompleteEmail] = useState<string | undefined>('');

  useEffect(() => {
    const subscription = watch((value: { email: string }, { name }: { name: string }) => {
      if (name === "email" && value.email) {
        setIsAutocomplete(true);
        clearErrors();
      } else {
        setIsAutocomplete(false);
      }

      setAutocompleteEmail(value.email);
    });
    return () => subscription.unsubscribe();
  }, [watch, clearErrors]);

  const handleClose = () => {
    setIsAutocomplete(false);
    clearErrors();
  };

  const handleClearErrors = () => {
    clearErrors();
  }

  const setInputEmailValue = (value: string) => {
    setValue('email', value);
    setAutocompleteEmail(value);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      const activeElement = e.target as HTMLInputElement;
      if (activeElement) {
        handleClose();
      }
    }, 1000);
  };

  return {
    isAutocomplete,
    autocompleteEmail,
    setInputEmailValue,
    onBlur,
    handleClose,
    handleClearErrors,
  };
}
