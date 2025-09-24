export function getSiteName(hostname: string) {
    const hostnamePart = hostname.replace('www.', '').split('.');
    // Checking userspace subdomain
    return hostnamePart[0] === 'us' ? hostnamePart[1] : hostnamePart[0];
}


export const initDetectionReferrerTraffic = () => {
    // VARS
    const referrer = document.referrer;
    if (!referrer) return;
    const refererLink = new URL(referrer);
    const prevSiteName = getSiteName(refererLink.hostname);
    const currentSiteName = getSiteName(window.location.hostname);

    // INITS
    // Checking our website or userspace
    if (prevSiteName === currentSiteName) return;

    // set items to sessionStorage
    const referrerUrl = refererLink.pathname.length > 1 ? refererLink.hostname + refererLink.pathname : '';

    sessionStorage.setItem('shop_referrer_domain', refererLink.hostname);
    sessionStorage.setItem('shop_referrer_url', referrerUrl);
};
