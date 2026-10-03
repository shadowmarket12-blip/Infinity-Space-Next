/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: false,
  devIndicators: false,
  productionBrowserSourceMaps: false,
  images: { unoptimized: true },
  experimental: {
    cpus: 1,
    webpackMemoryOptimizations: true,
  },
};

export default nextConfig;
