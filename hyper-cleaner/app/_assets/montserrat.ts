import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ['normal'],
  display: "swap",
  variable: "--font-montserrat",
  adjustFontFallback: false,
  fallback: ['sans-serif']
});