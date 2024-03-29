export const isTestnet = true;

// // For local testing
// export const dashboardUrl =
//   process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";

export const dashboardUrl = undefined;

// export const rpcEndpoint = "https://rpc.xion-testnet-1.burnt.com:443";
export const rpcEndpoint = "https://rpc.xion-testnet.forbole.com";

// This only exists on testnet.
export const faucetContractAddress =
  "xion1z8gr3jn7rd5leyvz7z3zmelxmrz6q8lv7flc3a4u8kltwj6leags8u64qx";

export const basePath =
  process.env.NEXT_PUBLIC_IS_DEPLOYMENT === "true" ? "/xion-staking" : "";

export const xionToUSD = 10;

export const defaultAvatar = `${basePath}/default-avatar.svg`;

// // Even if this can be retrieved from the params, hardcode it to avoid an
// // extra request. It can be retrieved with this:
// const params = await queryClient.staking.params();
export const unbondingDays = isTestnet ? 3 : 21;

// Arbitrary value to avoid using a bigger fee than the actual reward
export const minClaimableXion = 0.00001;

export const minDisplayedXion = 0.001;
