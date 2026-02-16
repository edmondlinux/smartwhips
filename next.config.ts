import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    clientSegmentCache: true,
    serverActions: {
      allowedOrigins: [
        '3fe061d6-f3ad-4603-8887-ad6711a53ab4-00-2bdskgdyamh6u.worf.replit.dev'
      ]
    }
  }
};

export default nextConfig;
