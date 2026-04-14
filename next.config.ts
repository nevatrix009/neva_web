import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",   // generates static HTML — works on GitHub Pages
  trailingSlash: true, // creates contact/index.html instead of contact.html

  async redirects() {
    return [
      // Fix: /Contact (old capital-C URL indexed by Google) → /contact
      {
        source: "/Contact",
        destination: "/contact",
        permanent: true, // 301 — passes SEO link equity to the correct URL
      },
    ];
  },
};

export default nextConfig;
