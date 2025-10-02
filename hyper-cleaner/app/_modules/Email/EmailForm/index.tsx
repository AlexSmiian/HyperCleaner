"use client";

import { useEffect, useState } from 'react';
import styles from './emailForm.module.scss';
import { LinkButton } from "@/app/_ui/Button";
import useEmail from "@/app/_hooks/useEmail";

const emailDomains = ['@gmail.com', '@outlook.com', '@yahoo.com'];

export default function EmailForm() {
  const {
    register,
    errors,
    handleSubmit,
    watch,
    setValue,
    onSubmit,
  } = useEmail();

  const emailValue = watch('email') || '';
  const [showSuggestions, setShowSuggestions] = useState(false);
  const showError = Boolean(errors)

  useEffect(() => {
    setShowSuggestions(emailValue.trim() !== '' && !emailValue.includes('@'));
  }, [emailValue]);

  const handleSuggestionClick = (domain: string) => {
    const newValue = emailValue + domain;
    setValue('email', newValue, { shouldValidate: true, shouldDirty: true });
    setShowSuggestions(false);
  };

  const handleFormSubmit = handleSubmit(
    (data) => {
      onSubmit(data);
    },
    () => {
      const url = new URL(window.location.href);
      if (emailValue) {
        url.searchParams.set('email', emailValue);
      }
    },
  );

  return (
    <form className={styles.form} onSubmit={handleFormSubmit} noValidate>
      <label htmlFor="email"
             className={styles.label}>
        <input
          id="email"
          type="email"
          className={styles.input}
          placeholder="Email"
          autoComplete="email"
          {...register('email')}
          required
        />
        {showError && (
          <span className={styles.error}>{errors.email?.message || ''}</span>
        )}
      </label>

      {showSuggestions && (
        <div className={styles.suggestionsWrapper}>
          <div className={styles.suggestions}>
            {emailDomains.map((domain) => (
              <div
                key={domain}
                className={styles.suggestionItem}
                onClick={() => handleSuggestionClick(domain)}
              >
                {domain}
              </div>
            ))}
          </div>
        </div>
      )}
        <LinkButton classModifier={styles.button} href={'/prices'}>
          Continue
        </LinkButton>
    </form>
  );
}
