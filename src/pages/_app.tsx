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
                src="https://www.googletagmanager.com/gtag/js?id=G-5CY0WRW3LQ"
                strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5CY0WRW3LQ');
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