import { Open_Sans } from "next/font/google";

export const openSans = Open_Sans({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    style: ['normal'],
    display: "swap",
    variable: "--font-open-sans",
    adjustFontFallback: false,
    fallback: ['sans-serif']
});