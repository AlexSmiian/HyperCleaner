import cln from 'classnames';

import { Suspense } from "react";
import { UserInteractionScript } from 'packages/UserInteractionScript';
import ClientAnalytics from "./_components/ClientAnalytics";
import './_assets/global.css';
import OrganicTrafficDetector from './_components/OrganicTrafficDetector';
import {openSans} from "@/app/_assets/openSans";

export function generateViewport() {
    return {
        initialScale: 1,
        maximumScale: 1,
        width: 'device-width',
    }
}

export default function LangLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
        <head>
            <link rel="dns-prefetch" href="https://code.jivosite.com" />
            <link rel="preload" href="https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js" as="script" />
            <link rel="manifest" href="/site.webmanifest" />
            <UserInteractionScript />
        </head>
        <body className={cln(openSans.className, openSans.variable)}>
        <ClientAnalytics />
        {children}
        <Suspense fallback={null}>
            <OrganicTrafficDetector />
        </Suspense>
        </body>
        </html>
    );
}