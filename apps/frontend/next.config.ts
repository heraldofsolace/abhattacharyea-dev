import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("http://localhost:1337/uploads/*"),
      new URL("https://strapi-production-410d.up.railway.app/uploads/*"),
      new URL("https://strapi.abhattacharyea.dev/uploads/*")
    ]
  }
};

export default nextConfig;
