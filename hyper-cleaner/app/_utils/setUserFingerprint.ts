import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { FINGERPRINT } from '../constants/cookies';

export async function ensureUserFingerprint(): Promise<{ fingerprint: string }> {
  function getRootDomain(hostname: string): string {
    const parts = hostname.split('.');
    if (parts.length >= 2) {
      return '.' + parts.slice(-2).join('.');
    }
    return hostname;
  }

  function getCookieValue(name: string): string | null {
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
  }

  const existing = getCookieValue(FINGERPRINT);

  const fingerprint = existing || (await (async () => {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    return result.visitorId;
  })());

  if (!existing) {
    const rootDomain = getRootDomain(window.location.hostname);
    document.cookie = `${FINGERPRINT}=${fingerprint}; path=/; domain=${rootDomain}; secure; samesite=Lax`;
  }

  return { fingerprint };
}
