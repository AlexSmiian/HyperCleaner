"use client"

import { MouseEventHandler } from "react";
import { useSearchParams} from "next/navigation"

export default function useGetSemanticUrl() {
  const search = useSearchParams();

  return function (url: string) {
    let queryParams = '';
    try {
      if (search && typeof search.toString === 'function') {
        const qs = search.toString();
        queryParams = qs ? `?${qs}` : '';
      }
    } catch (e) {
      console.warn('Failed to read search params:', e);
    }


    const handleClick: MouseEventHandler<HTMLElement> = (event) => {
      event.preventDefault();
      window.location.href = `${url}${queryParams}`;
    }

    return {
      hrefWithQuery: `${url}${queryParams}`,
      href: url,
      onClick: handleClick,
    };
  }
}
