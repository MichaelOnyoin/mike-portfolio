import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    esmExternals: "loose", // required for the canvas to work
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }]; // required for the canvas to work
    return config;
  },
};

export default nextConfig;
