'use client' // Error components must be Client Components

import { useEffect } from 'react'
import ErrorPage from './_components/Error'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <ErrorPage error={error} />
}