import { chainId } from "./constants";

export const getAccountExplorerLink = (address: string) =>
  `https://explorer.burnt.com/${chainId}/account/${address}`;

export const getValidatorExplorerLink = (address: string) =>
  `https://explorer.burnt.com/${chainId}/staking/${address}`;
