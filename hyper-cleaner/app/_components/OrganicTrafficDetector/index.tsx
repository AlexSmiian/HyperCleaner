"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function OrganicTrafficDetector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const getSiteName = (hostname: string): string => {
      const hostnamePart = hostname.replace('www.', '').split('.');
      // Checking userspace subdomain
      return hostnamePart[0] === 'us' ? hostnamePart[1] : hostnamePart[0];
    };

    const initDetectionOrganicTraffic = () => {
      try {
        // Use actual referrer instead of hardcoded value
        const referrer = document.referrer;

        if (!referrer) return;

        // Add error handling for URL parsing
        let refererLink: URL;
        try {
          refererLink = new URL(referrer);
        } catch (error: unknown) {
          console.error(error)
          return;
        }

        // Check existing UTM parameters using searchParams
        const utmMedium = searchParams.get('utm_medium');
        const utmSource = searchParams.get('utm_source');
        const utmCampaign = searchParams.get('utm_campaign');
        const gclid = searchParams.get('gclid');

        const prevSiteName = getSiteName(refererLink.hostname);
        const currentSiteName = getSiteName(window.location.hostname);
        const searchingSystems = ['google', 'bing', 'yahoo', 'yandex', 'baidu', 'duckduckgo'];

        let referrerSiteName = '';

        // Early return if same site
        if (prevSiteName === currentSiteName) return;

        // Check if referrer is a search engine
        searchingSystems.forEach((searchingSystem) => {
          if (refererLink.hostname.includes(searchingSystem)) {
            referrerSiteName = searchingSystem;
          }
        });

        if (!referrerSiteName) return;

        // Return if UTM parameters already exist
        if (utmMedium || utmSource || utmCampaign || gclid) return;

        // Create new URLSearchParams with existing params
        const params = new URLSearchParams(searchParams.toString());
        params.set('utm_medium', 'organic');
        params.set('utm_source', referrerSiteName);

        // Update URL using Next.js router
        history.pushState({}, '', window.location.origin + window.location.pathname + `?${params.toString()}`);
        // router.replace(`?${params.toString()}`, { scroll: false });

      } catch (error: unknown) {
        console.error('Error in organic traffic detection:', error);
      }
    };

    // Only run on client side
    if (typeof window !== 'undefined') {
      initDetectionOrganicTraffic();
    }
  }, [router, searchParams]);

  return null;
}
