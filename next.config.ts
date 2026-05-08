import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  compress: true,

  // ── Image optimisation ──────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400, // 1 day
  },

  // ── HTTP headers ────────────────────────────────────────────────
  // Adds security + SEO-friendly headers to every response.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Tell search engines to index all pages (override per-page with noindex)
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
          // Prevent MIME sniffing — security best practice
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Block clickjacking
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Enable HTTPS-only (HSTS) for improved Core Web Vitals & trust
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Referrer policy — keeps analytics accurate while protecting privacy
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Basic Content Security Policy — prevents XSS
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Permissions policy — disable unused browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
          },
        ],
      },
      // ── Aggressive caching for static assets ──────────────────────
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|css|js)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ── Redirects ───────────────────────────────────────────────────
  // Canonical redirect: www → non-www (handled at CDN level ideally,
  // but this acts as a fallback in case the CDN isn't configured)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nevatrix.com" }],
        destination: "https://nevatrix.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
