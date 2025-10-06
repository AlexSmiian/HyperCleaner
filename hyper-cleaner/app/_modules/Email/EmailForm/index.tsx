"use client";

import {useEffect, useRef, useState} from 'react';
import styles from './emailForm.module.scss';
import { Button } from "@/app/_ui/Button";
import useEmail from "@/app/_hooks/useEmail";
import cln from "classnames";

const emailDomains = ['@gmail.com', '@outlook.com', '@yahoo.com'];
const emailDomainsDropdowns = [
  '@gmail.com','@hotmail.com','@yahoo.com', '@outlook.com', '@aol.com',
  '@icloud.com', '@live.com', '@msn.com', '@me.com', '@mac.com',
  '@facebook.com', '@verizon.net', '@rediffmail.com', '@zohomail.com',
  '@zoho.com', '@mail.com', '@google.com', '@comcast.com', '@hotmail.co.uk',
  '@yahoo.co.uk', "@att.net", '@gmz.com'
];

export default function EmailForm({searchParams} : {searchParams: object | string}) {
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
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownLocked, setDropdownLocked] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const emailError = Boolean(errors?.email);
  const isValid = emailValue.trim() !== '' && !emailError;

  useEffect(() => {
    if (emailValue.trim() === '') {
      setShowSuggestions(false);
      setShowDropdown(false);
      setDropdownLocked(false);
      return;
    }

    if (!dropdownLocked) {
      if (emailValue.includes('@')) {
        setShowSuggestions(false);
        setShowDropdown(true);
      } else {
        setShowSuggestions(true);
        setShowDropdown(false);
      }
    }
  }, [emailValue, dropdownLocked]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedOutsideSuggestions =
          suggestionsRef.current && !suggestionsRef.current.contains(target);
      const clickedOutsideDropdown =
          !dropdownRef.current || !dropdownRef.current.contains(target);

      if (clickedOutsideSuggestions && clickedOutsideDropdown) {
        setShowSuggestions(false);
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isValid) {
      setShowDropdown(false);
    }
  }, [isValid]);

  const handleSuggestionClick = (domain: string) => {
    let newValue: string;

    if (emailValue.includes('@')) {
      newValue = emailValue.split('@')[0] + domain;
    } else {
      newValue = emailValue + domain;
    }

    setValue('email', newValue, { shouldValidate: true, shouldDirty: true });
    setShowSuggestions(false);
    setShowDropdown(false);
    setDropdownLocked(true);
  };

  const handleFormSubmit = handleSubmit(
      (data) => {
        onSubmit(data);

        if (data.email) {
          const currentParams = new URLSearchParams(window.location.search);
          currentParams.set('email', data.email);

          window.location.href = `/prices?${currentParams.toString()}`;
        }
      },
      (errors) => {
        console.warn("Validation errors:", errors);
      }
  );

  return (
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <label htmlFor="email" className={styles.label}>
          <input
              id="email"
              type="email"
              className={cln(styles.input, emailError && styles.inputError)}
              placeholder="Email"
              autoComplete="email"
              {...register('email')}
              required
          />
          {emailError && (
              <span className={styles.error}>
            The email doesn’t look valid. Please, check again
          </span>
          )}
        </label>
        <div ref={suggestionsRef} className={styles.suggestionsWrapper}>
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

        {showDropdown && (
            <div className={styles.dropdownWrapper}>
              <ul className={styles.dropdownList}>
                {emailDomainsDropdowns.map((domain) => (
                    <li key={domain} className={styles.dropdownItem}>
                      <button
                          type="button"
                          className={styles.dropdownButton}
                          onClick={() => handleSuggestionClick(domain)}
                      >
                        {domain}
                      </button>
                    </li>
                ))}
              </ul>
            </div>
        )}

        <Button
            disabled={!isValid}
            classModifier={styles.button}
            type="submit"
        >
          Continue
        </Button>
      </form>
  );
}
