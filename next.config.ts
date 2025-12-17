import type { NextConfig } from 'next';

const repo = 'next.js-1';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: `/${repo}`,
    // trailingSlash: true,
};

export default nextConfig;
