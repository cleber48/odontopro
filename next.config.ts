import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    // @ts-ignore - Ignorando o erro de tipo da propriedade appIsrStatus no Next.js 15+
    appIsrStatus: false,
    buildActivity: false,
  },
};

export default nextConfig;
