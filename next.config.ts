import type { NextConfig } from "next";

// NEXT_PUBLIC_GITHUB_PAGES=true is only set during manual gh-pages builds.
// Vercel builds never set this — so basePath/output are Vercel-safe.
const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/diamond9-athletics" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
