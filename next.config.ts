import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'Thai-Nippon-Sushi-Bar';
const basePath = isGithubPages ? `/${repoName}` : '';
const siteUrl = isGithubPages ? `https://derprofikappa.github.io/${repoName}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  ...(isGithubPages
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  trailingSlash: true,
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;
