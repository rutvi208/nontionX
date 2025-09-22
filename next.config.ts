import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // this enables `next export`
  images: {
    unoptimized: true, // required for static export when using next/image
  },
};

export default nextConfig;
