export const isTestnet = true;

// export const dashboardUrl =
//   process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";
export const dashboardUrl = undefined;

// export const rpcEndpoint =
//   typeof window === "undefined"
//     ? "https://rpc.xion-testnet-1.burnt.com:443"
//     : `${window.location.origin}/rpc`;

// export const rpcEndpoint = "https://rpc.xion-testnet-1.burnt.com:443";
export const rpcEndpoint = "https://rpc.xion-testnet.forbole.com";

export const basePath =
  process.env.NEXT_PUBLIC_IS_DEPLOYMENT === "true" ? "/xion-staking" : "";

export const xionToUSD = 10;

export const defaultAvatar = `${basePath}/default-avatar.svg`;

// Even if this can be retrieved from the params, hardcode it to avoid and
// extra request
export const unbondingDays = isTestnet ? 3 : 21;
