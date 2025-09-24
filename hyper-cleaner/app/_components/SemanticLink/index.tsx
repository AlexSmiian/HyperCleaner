"use client"

import {MouseEventHandler, ReactNode} from "react";
import useGetSemanticUrl from "../../_utils/useGetSemanticUrl";

export default function SemanticLink({
    href,
    target,
    rel,
    children,
    className,
    onClick = () => {
    },
}: {
    href: string,
    target?: '_blank' | '_self' | '_parent' | '_top',
    rel?: string,
    children: ReactNode,
    className: string,
    onClick?: () => void,
}) {
    const getSemanticUrl = useGetSemanticUrl();

    const isExternalUrl = href.startsWith('http://') || href.startsWith('https://');

    const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();
        if (onClick) {
            onClick();
        }

        if (isExternalUrl) {
            let finalUrl = href;
            const currentSearch = typeof window !== 'undefined' ? window.location.search : '';
            if (currentSearch) {
                const separator = href.includes('?') ? '&' : '?';
                const cleanSearch = currentSearch.startsWith('?') ? currentSearch.substring(1) : currentSearch;
                finalUrl = `${href}${separator}${cleanSearch}`;
            }

            window.location.href = finalUrl;
        } else {
            const link = getSemanticUrl(href).hrefWithQuery;
            window.location.href = link;
        }
    }

    const displayHref = isExternalUrl ? href : getSemanticUrl(href).href;

    return (
        <a
            href={displayHref}
            className={className}
            onClick={handleClick}
            target={target}
            rel={rel}
        >
            {children}
        </a>
    )
}
