"use client"

import Script from "next/script";

declare global {
    interface Window {
        botDetect: {
            onUser: (callback: () => void) => void;
        };
    }
}

export function UserInteractionScript() {
    const onLoadHandler = function() {
        if (typeof window !== 'undefined') {
            window.botDetect.onUser(function () {
                window.dispatchEvent(new Event('onUser'));
            })
        }
    }

   return <Script src="/js/botDetect.js" onLoad={onLoadHandler} />
}
