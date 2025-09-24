export function normalizeIso2(value?: string) {
  const v = (value || '').trim();
  return v ? v.toLowerCase() : undefined;
}
