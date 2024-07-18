function getEnvStringOrThrow(key: string, value?: string): string {
  if (!value) {
    throw new Error(`Environment variable ${key} must be defined`);
  }

  return value;
}

// Write helper function to get boolean environment variable
function getEnvBooleanOrThrow(key: string, value?: string): boolean {
  if (!value) {
    throw new Error(`Environment variable ${key} must be defined`);
  }

  return value === "true";
}

// The base path for the deployment
export const BASE_PATH = getEnvBooleanOrThrow(
  "NEXT_PUBLIC_IS_DEPLOYMENT",
  process.env.NEXT_PUBLIC_IS_DEPLOYMENT,
)
  ? "/xion-staking"
  : "";

// The contract address for the faucet
export const FAUCET_CONTRACT_ADDRESS =
  "xion132dxh4k3dpyalq6tfq7006h8kpk3m30f4mwc5dgqefy6akudm50s96mn6q";

const NETWORK_TYPE = getEnvStringOrThrow(
  "NEXT_PUBLIC_NETWORK_TYPE",
  process.env.NEXT_PUBLIC_NETWORK_TYPE,
);

export const IS_TESTNET = NETWORK_TYPE === "testnet";
