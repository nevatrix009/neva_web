import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en-IN">
            <Head>
                {/* ── Favicon ── */}
                <link rel="icon" href="/favicon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
                <link rel="apple-touch-icon" href="/favicon.png" />

                {/* ── PWA manifest ── */}
                <link rel="manifest" href="/manifest.json" />

                {/* ── Theme colour (Chrome address bar on Android) ── */}
                <meta name="theme-color" content="#0f172a" />

                {/* ── Geographic & language targeting ── */}
                <meta name="geo.region" content="IN-TG" />
                <meta name="geo.placename" content="Warangal, Telangana, India" />
                <meta name="geo.position" content="17.9689;79.5941" />
                <meta name="ICBM" content="17.9689, 79.5941" />
                <meta httpEquiv="content-language" content="en-IN" />

                {/* ── Performance: Google Fonts preconnect ── */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* ── DNS prefetch for external resources ── */}
                <link rel="dns-prefetch" href="https://www.google.com" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

                {/* ── Google Search Console site verification ── */}
                {/* <meta name="google-site-verification" content="YOUR_GSC_VERIFICATION_CODE" /> */}

                {/*
                    Google Analytics is loaded by _app.tsx via Next.js Script component
                    (strategy="afterInteractive") — do NOT add GA here to avoid
                    duplicate tracking and inflated pageview counts.
                */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
