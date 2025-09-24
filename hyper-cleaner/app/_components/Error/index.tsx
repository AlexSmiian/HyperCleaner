"use client"

import cln from 'classnames';
import { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';

export const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    style: ['normal'],
    display: "swap",
    variable: "--font-montserrat",
    adjustFontFallback: false,
    fallback: ['sans-serif']
});
interface ErrorProps {
    error?: Error & { digest?: string };
}

export default function Error({ error }: ErrorProps) {
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(window.location.origin);

        // Логування помилки тільки в development
        if (process.env.NODE_ENV === 'development') {
            console.error(error);
        }
    }, [error]);

    return (
        <>
            <style>
                {`
                body {
                    font-size: 18px;
                }
                
                .container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    margin: 0;
                    min-height: 100vh;
                    max-width: 100vw;
                    width: 100vw;
                    z-index: 100;
                    background-image: url("/images/500.webp");
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    padding: 0 16px;
                    text-align: center;
                    color: #fff;
                    line-height: 1.5;
                }
                
                .title {
                    font-size: 2.8rem;
                    font-weight: 600;
                    padding-top: 10vh;
                    margin-top: 0;
                    margin-bottom: 0;
                }
                
                .subtitle {
                    font-size: 2rem;
                    font-weight: 400;
                    margin-bottom: 60px;
                    margin-top: 20px;
                    line-height: 1.5;
                }
                
                .button {
                    text-decoration: none;
                    display: block;
                    padding: 12px 60px;
                    background-color: #cf255e;
                    border-radius: 20px;
                    color: #fff;
                }
                
                .support {
                    font-size: 1.4rem;
                    margin-top: 20px;
                }
                
                .support-tel {
                    color: #fff;
                }
                
                @media screen and (min-width: 360px) {
                    .title {
                        padding-top: 15vh;
                    }
                }
                
                @media screen and (min-width: 375px) {
                    .title {
                        padding-top: 20vh;
                    }
                
                    .button {
                        display: inline-block;
                        margin: 0 auto;
                    }
                }
                
                @media screen and (min-width: 600px) {
                    .container {
                        padding: 0 64px;
                    }
                
                    .title {
                        padding-top: 25vh;
                    }
                
                    .title-line {
                        display: inline-block;
                        width: 100%;
                        text-align: center;
                    }
                }
                
                @media screen and (min-width: 1280px) {
                    .title {
                        font-size: 3.6rem;
                    }
                
                    .subtitle {
                        font-size: 2.4rem;
                    }
                
                    .button:hover {
                        background-color: #ec477e;
                    }
                }
                `
                }
            </style>
            <div className={cln("container", poppins.className)}>
                <h1 className="title">
                    <span className="title-line">
                        Oops. Something went wrong.
                    </span>
                    <span className="title-line">
                        We are working to fix the problem.
                    </span>
                </h1>
                <p className="subtitle">
                    You could return to the homepage
                </p>
                <a href={url} className="button">
                    Go to Home page
                </a>
            </div>
        </>
    );
}