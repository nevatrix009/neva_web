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

                {/* ── Performance: Google Fonts preconnect ── */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* ── DNS prefetch for external resources ── */}
                <link rel="dns-prefetch" href="https://www.google.com" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

                {/* ── Theme colour (Chrome address bar on Android) ── */}
                <meta name="theme-color" content="#0f172a" />

                {/* ── PWA manifest (create /public/manifest.json when ready) ── */}
                {/* <link rel="manifest" href="/manifest.json" /> */}

                {/* ── Google Analytics ── */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RPKXBMVY42" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-RPKXBMVY42');
                        `,
                    }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
