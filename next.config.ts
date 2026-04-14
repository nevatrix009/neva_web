import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/contact",
        permanent: true,
      },
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