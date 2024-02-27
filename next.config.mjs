const nextConfig = {
  eslint: {
    ignoreDuringBuilds: process.env.QUICK_BUILD === "true",
  },
  rewrites: async () => [
    {
      destination: "https://rpc.xion-testnet-1.burnt.com:443",
      source: "/rpc",
    },
  ],
  typescript: {
    ignoreBuildErrors: process.env.QUICK_BUILD === "true",
  },
};

export default nextConfig;
