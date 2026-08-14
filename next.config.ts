import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // El distintivo flotante de desarrollo tapa la esquina en las capturas de
  // revisión. No afecta a producción.
  devIndicators: false,
};

export default nextConfig;
