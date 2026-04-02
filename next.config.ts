import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - Ignoring type error to force Next.js 15+ to hide the build activity indicator
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
};

export default nextConfig;
