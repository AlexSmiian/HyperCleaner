export default function getServerSemanticUrl(
    url: string,
    searchParams: Record<string, string | number | boolean> = {}
) {
  const urlSearchParams = new URLSearchParams(
      Object.entries(searchParams).reduce((acc, [key, value]) => {
        if (value !== undefined && value !== null) {
          acc[key] = String(value);
        }
        return acc;
      }, {} as Record<string, string>)
  ).toString();

  const localeUrlWithSearchParams = urlSearchParams ? `${url}?${urlSearchParams}` : url;

  return {
    href: localeUrlWithSearchParams,
    pathname: url,
  };
}
