import cln from 'classnames';

import ServiceWorker from "./_components/ServiceWorker";
import { Suspense } from "react";
import { UserInteractionScript } from 'packages/UserInteractionScript';
import { montserrat } from "./_assets/montserrat";
import ClientAnalytics from "./_components/ClientAnalytics";
import './_assets/global.css';
import OrganicTrafficDetector from './_components/OrganicTrafficDetector';
import { getCountryCode } from './actions';

export function generateViewport() {
    return {
        initialScale: 1,
        maximumScale: 1,
        width: 'device-width',
    }
}

export default async function LangLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const countryCode = await getCountryCode();
    console.log(countryCode)

    return (
        <html lang='en'>
        <head>
            <link rel="dns-prefetch" href="https://code.jivosite.com" />
            <link rel="preload" href="https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js" as="script" />
            <ServiceWorker />
            <link rel="manifest" href="/site.webmanifest" />
            <UserInteractionScript />
        </head>
        <body className={cln(montserrat.className, montserrat.variable)}>
        <ClientAnalytics />
        {children}
        <Suspense fallback={null}>
            <OrganicTrafficDetector />
        </Suspense>
        </body>
        </html>
    );
}