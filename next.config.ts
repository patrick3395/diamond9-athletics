import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/diamond9-athletics",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
