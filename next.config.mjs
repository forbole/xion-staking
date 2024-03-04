const useProxy = false;

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: process.env.QUICK_BUILD === "true",
  },
  typescript: {
    ignoreBuildErrors: process.env.QUICK_BUILD === "true",
  },
  ...(useProxy
    ? {
        rewrites: async () => [
          {
            destination: "https://rpc.xion-testnet-1.burnt.com:443",
            source: "/rpc",
          },
        ],
      }
    : {
        basePath:
          process.env.NEXT_PUBLIC_IS_DEPLOYMENT === "true"
            ? "/xion-staking"
            : undefined,
        output: "export",
      }),
};

export default nextConfig;
