'use client';

import { useEffect, useState } from 'react';
import { HasOfferParams } from '../_types/offerParams';

export default function useGetHasOfferParams(): HasOfferParams {
  const [hasOfferParams, setHasOfferParams] = useState({} as HasOfferParams);

  useEffect(() => {
    fetch('/api/hasoffer')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result?.data) {
          setHasOfferParams(result.data);
        }
      });
  }, []);

  return hasOfferParams;
}
