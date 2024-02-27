const nextConfig = {
  basePath: "/xion-staking",
  eslint: {
    ignoreDuringBuilds: process.env.QUICK_BUILD === "true",
  },
  output: "export",
  typescript: {
    ignoreBuildErrors: process.env.QUICK_BUILD === "true",
  },
};

export default nextConfig;
