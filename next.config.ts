import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Agar aapko base path set karna ho toh yeh use kar sakte hain
  // basePath: '/my-app',
  // images configuration agar aap external images use karte ho toh
  images: {
    domains: ["your-image-domain.com"],
  },
};

export default nextConfig;
