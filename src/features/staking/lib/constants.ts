import { testnetChainInfo } from "@burnt-labs/constants";

export const { chainId } = testnetChainInfo;

export const dashboardUrl =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";

export const rpcEndpoint =
  typeof window === "undefined"
    ? "https://rpc.xion-testnet-1.burnt.com:443"
    : `${window.location.origin}/rpc`;
