import { AppProps } from "next/app";
import "../styles/index.css";

import LocalFont from "next/font/local";

export const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
