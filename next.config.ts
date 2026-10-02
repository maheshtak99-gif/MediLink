import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/yajna',
        destination: '/divya-yajna.html',
      },
    ];
  },
};

export default nextConfig;
