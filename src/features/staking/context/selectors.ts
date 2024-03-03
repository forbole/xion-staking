import BigNumber from "bignumber.js";

import { normaliseCoin, sumAllCoins } from "../lib/core/coins";
import type { StakingState } from "./state";

export const getTotalDelegation = (state: StakingState) => {
  const { delegations } = state;

  if (!delegations?.items.length) {
    return null;
  }

  const delegationCoins = delegations.items.map((d) => d.balance);

  return sumAllCoins(delegationCoins);
};

// @TODO: Should this be included in the delegation total or displayed sepparately?
// eslint-disable-next-line
const getTotalUnbonding = (state: StakingState) => {
  const { unbondings } = state;

  if (!unbondings?.items.length) {
    return null;
  }

  const unbondingCoins = unbondings.items.map((d) => d.balance);

  return sumAllCoins(unbondingCoins);
};

export const getTotalRewards = (
  validatorAddress: null | string,
  state: StakingState,
) => {
  const { delegations } = state;

  if (!delegations?.items.length) {
    return null;
  }

  const rewardsCoins = delegations.items
    .filter((d) => !validatorAddress || d.validatorAddress === validatorAddress)
    .map((d) => d.rewards);

  return sumAllCoins(rewardsCoins);
};

export const getTokensAvailableBG = (state: StakingState) => {
  const { tokens } = state;

  if (!tokens) {
    return null;
  }

  return new BigNumber(normaliseCoin(tokens).amount);
};

export const hasStakedInValidator = (
  validatorAddress: string,
  state: StakingState,
) =>
  !!state.delegations?.items.some(
    (d) => d.validatorAddress === validatorAddress,
  );

export const getDelegationToValidator = (
  validatorAddress: string,
  state: StakingState,
) => {
  const delegations = state.delegations?.items.filter(
    (d) => d.validatorAddress === validatorAddress,
  );

  if (!delegations?.length) {
    return new BigNumber(0);
  }

  const total = sumAllCoins(delegations.map((d) => d.balance));

  return new BigNumber(total.amount);
};

export const getVotingPowerPerc = (
  validatorTokens: string,
  state: StakingState,
) => {
  const { pool } = state;

  if (!validatorTokens || typeof pool?.bondedTokens !== "string") {
    return null;
  }

  return new BigNumber(validatorTokens)
    .div(new BigNumber(pool.bondedTokens))
    .toNumber();
};
