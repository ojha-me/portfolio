import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disable Lightning CSS to avoid native binary issues on Node 24
    optimizeCss: false,
  },
};

export default nextConfig;
