import { IS_TESTNET } from "./config";


const MAINNET_RPC_URL="https://rpc.xion-mainnet-1.burnt.com:443";
const MAINNET_REST_URL="https://api.xion-mainnet-1.burnt.com:443";
const TESTNET_RPC_URL="https://testnet-rpc.xion-api.com:443";
const TESTNET_REST_URL="https://testnet-api.xion-api.com:443";

export const RPC_URL = IS_TESTNET ? TESTNET_RPC_URL : MAINNET_RPC_URL;
export const REST_URL = IS_TESTNET ? TESTNET_REST_URL : MAINNET_REST_URL;

export const XION_TO_USD = 10;

// // Even if this can be retrieved from the params, hardcode it to avoid an
// // extra request. It can be retrieved with this:
// const params = await queryClient.staking.params();
export const UNBONDING_DAYS = IS_TESTNET ? 3 : 21;

// Arbitrary value to avoid using a bigger fee than the actual reward
export const MIN_CLAIMABLE_XION = 0.00001;
export const MIN_DISPLAYED_XION_DECIMALS = 6;
export const MIN_DISPLAYED_XION = 10 ** -MIN_DISPLAYED_XION_DECIMALS;
