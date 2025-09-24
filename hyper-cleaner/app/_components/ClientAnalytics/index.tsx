"use client"

import qs from 'qs';
import { initDetectionReferrerTraffic } from './initDetectionReferrerTraffic';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function ClientAnalytics() {
    const search = useSearchParams();
    const searchParams = Object.fromEntries(search.entries());
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        try {
            fetch('/api/hasoffer', {
                method: 'POST',
                body: JSON.stringify(searchParams)
            })
        } catch (error) {
            console.error(error)
        }

        initDetectionReferrerTraffic();
        const shopRefferDomain = sessionStorage.getItem('shop_referrer_domain');
        const shopRefferUrl = sessionStorage.getItem('shop_referrer_url');

        if (shopRefferDomain) {
            searchParams["shop_referrer_domain"] = shopRefferDomain;
            searchParams["shop_referrer_url"] = shopRefferUrl || '';
            router.replace(`${pathname}?${qs.stringify(searchParams)}`)
        }
    }, [pathname, router, searchParams])

    return null;
}