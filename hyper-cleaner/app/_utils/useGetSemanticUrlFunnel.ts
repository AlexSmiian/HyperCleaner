'use client'

import { MouseEventHandler } from "react";
import { useSearchParams } from "next/navigation";

export default function useGetSemanticUrlFunnel() {
  const search = useSearchParams();

  return function (
    url: string,
    additionalParams?: Record<string, string>,
    redirect?: boolean
  ) {
    // Формуємо параметри
    const query = new URLSearchParams();
    if (search.size) {
      search.forEach((value, key) => query.append(key, value));
    }

    if (additionalParams) {
      Object.entries(additionalParams).forEach(([key, value]) => {
        query.set(key, value);
      });
    }

    const fullUrl = `${url}${query.toString() ? `?${query.toString()}` : ''}`;

    const onClick: MouseEventHandler<HTMLElement> = (event) => {
      event.preventDefault();
      window.location.href = fullUrl;
    };

    // Якщо потрібен редірект одразу
    if (redirect) {
      window.location.href = fullUrl;
    }

    return {
      hrefWithQuery: fullUrl,
      href: `${url}`,
      onClick,
    };
  }
}
