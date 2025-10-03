import cln from 'classnames';
import {MouseEventHandler} from 'react';
import styles from './button.module.scss';
import useGetSemanticUrl from "@/app/_utils/useGetSemanticUrl";

export function Button({
    type = 'button',
    onClick,
    children,
    disabled,
    classModifier
}: {
    type?: 'button' | 'submit',
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode,
    classModifier?: string
    disabled?:boolean
}) {
    return (
        <button type={type} onClick={onClick} disabled={disabled} className={cln(styles.btn, classModifier)}>
            {children}
        </button>
    );
}

export function LinkButton({
    href,
    onClick,
    children,
    classModifier,
    rel
}: {
    href: string,
    onClick?: MouseEventHandler<HTMLAnchorElement>,
    children: React.ReactNode,
    classModifier?: string,
    rel?: string
}) {
    const getSemanticUrl = useGetSemanticUrl();

    const isExternalUrl = href.startsWith('http://') || href.startsWith('https://');

    const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();

        if (onClick) {
            onClick(event);
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
            window.location.href = getSemanticUrl(href).hrefWithQuery;
        }
    }

    return (
        <a href={href} onClick={handleClick} className={cln(styles.btn, classModifier)} rel={rel}>
            {children}
        </a>
    );
}
