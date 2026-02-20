import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* Google Analytics 4 (GA4) */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-ES4KHTK875"
                strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ES4KHTK875');
        `}
            </Script>

            {/* Website Layout */}
            <TopBar />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}