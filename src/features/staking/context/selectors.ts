import BigNumber from "bignumber.js";
import type { Validator } from "cosmjs-types/cosmos/staking/v1beta1/staking";

import { normaliseCoin, sumAllCoins } from "../lib/core/coins";
import { getCanClaimRewards } from "../lib/core/tx";
import type { StakingState } from "./state";

export const getTotalDelegation = (
  state: StakingState,
  validatorAddress: null | string,
) => {
  const { delegations } = state;

  if (!delegations?.items.length) {
    return null;
  }

  const delegationCoins = delegations.items
    .filter((d) => !validatorAddress || d.validatorAddress === validatorAddress)
    .map((d) => d.balance);

  return sumAllCoins(delegationCoins);
};

export const getTotalUnbonding = (
  state: StakingState,
  validatorAddress: null | string,
) => {
  const { unbondings } = state;

  if (!unbondings?.items.length) {
    return null;
  }

  const unbondingCoins = unbondings.items
    .filter((d) => !validatorAddress || d.validator === validatorAddress)
    .map((d) => d.balance);

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

export const getHasStakedInValidator = (
  validatorAddress: string,
  state: StakingState,
) =>
  !!state.delegations?.items.some(
    (d) => d.validatorAddress === validatorAddress,
  );

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

export const getCanClaimAnyRewards = (state: StakingState) => {
  const { delegations } = state;

  if (!delegations?.items.length) {
    return false;
  }

  return delegations.items.some((d) => getCanClaimRewards(d?.rewards));
};

export const getAllValidators = (
  state: StakingState,
): Record<string, undefined | Validator> =>
  Object.values(state.validators)
    .map((v) => v?.items)
    .flat()
    .reduce((acc, v) => {
      if (!v) {
        return acc;
      }

      return {
        ...acc,
        [v.operatorAddress]: v,
      };
    }, state.extraValidators);

// As discussed internally, in XION the APR is the same as the inflation
export const getAPR = (state: StakingState) =>
  state.inflation ? new BigNumber(state.inflation) : null;
