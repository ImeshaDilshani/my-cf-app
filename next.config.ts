import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // <--- Add this line
  },
};

export default nextConfig;