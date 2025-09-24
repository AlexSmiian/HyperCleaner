import { normalizeIso2 } from './normalizeIso2';

type MaybeCountryObj = { iso2?: string; name?: string };

export function parseCountry(input: unknown): MaybeCountryObj {
  if (!input) return {};
  if (typeof input === 'string') {
    const trimmed = input.trim();
    try {
      const obj = JSON.parse(trimmed) as MaybeCountryObj;
      if (obj && (obj.iso2 || obj.name)) {
        return { iso2: normalizeIso2(obj.iso2), name: obj.name };
      }
    } catch {
      // not JSON — fall through to heuristics
    }
    if (/^[a-z]{2}$/i.test(trimmed)) return { iso2: trimmed.toLowerCase() };
    return { name: trimmed };
  }
  if (typeof input === 'object') {
    const anyObj = input as Record<string, unknown>;
    const iso2 = normalizeIso2(
      (anyObj.iso2 as string) || (anyObj.code as string) || (anyObj.countryCode as string),
    );
    const name =
      typeof anyObj.name === 'string'
        ? anyObj.name
        : (anyObj.countryName as string | undefined);
    return { iso2, name };
  }
  return {};
}
