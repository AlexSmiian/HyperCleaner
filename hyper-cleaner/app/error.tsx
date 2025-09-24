'use client' // Error components must be Client Components

import ErrorPage from './_components/Error'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {

  return <ErrorPage error={error} />
}
