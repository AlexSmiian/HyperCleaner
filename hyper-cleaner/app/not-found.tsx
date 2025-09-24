'use client';

import { useParams, useSearchParams } from 'next/navigation';
import ErrorNotFoundBase from './_components/ErrorNotFoundBase';

export default function NotFound() {
  const params = useParams();
  const searchParams = useSearchParams();
    console.log(params)
    console.log(searchParams)

  return (
    <>
      <ErrorNotFoundBase
        title={"Oops. The page you were looking for doesn`t exist."}
        text={"Error (404). You may have mistyped the address or the page may have moved."}
        button={"Go home"}
      />

    </>
  );
}
