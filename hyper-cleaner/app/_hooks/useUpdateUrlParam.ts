'use client';

import { useCallback } from 'react';

export function useUpdateUrlParam() {
  return useCallback((key: string, value?: string) => {
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    const currentValue = url.searchParams.get(key) || '';

    if ((value || '') === currentValue) return;

    if (!value) {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, value);
    }

    window.history.replaceState({}, '', url.toString());
  }, []);
}
