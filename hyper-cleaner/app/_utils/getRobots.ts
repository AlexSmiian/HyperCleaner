export default function getRobots() {
  return {
    robots: {
      index: process.env.NEXT_PUBLIC_PRODUCT_ENV === 'production',
      follow: process.env.NEXT_PUBLIC_PRODUCT_ENV === 'production',
    },
  };
}
