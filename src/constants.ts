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
// extra request. It can be retrieved with this:
// const params = await queryClient.staking.params();
export const unbondingDays = isTestnet ? 3 : 21;

// Arbitrary value to avoid using a bigger fee than the actual reward
export const minClaimableXion = 0.00001;
