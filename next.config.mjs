const useProxy = false;

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: process.env.QUICK_BUILD === "true",
  },
  trailingSlash: true, // This is important when deploying in GH pages
  typescript: {
    ignoreBuildErrors: process.env.QUICK_BUILD === "true",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '**',
      },
    ],
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
      }),
};

export default nextConfig;
