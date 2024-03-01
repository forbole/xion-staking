import BigNumber from "bignumber.js";

import { sumAllCoins } from "../lib/core/coins";
import type { StakingState } from "./state";

export const getTotalDelegation = (state: StakingState) => {
  const { delegations } = state;

  if (!delegations?.items.length) {
    return null;
  }

  const delegationCoins = delegations.items.map((d) => d.balance);

  return sumAllCoins(delegationCoins);
};

export const getTotalUnbonding = (state: StakingState) => {
  const { unbondings } = state;

  if (!unbondings?.items.length) {
    return null;
  }

  const unbondingCoins = unbondings.items.map((d) => d.balance);

  return sumAllCoins(unbondingCoins);
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
