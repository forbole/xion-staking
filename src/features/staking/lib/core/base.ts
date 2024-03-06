import type { BondStatusString } from "@cosmjs/stargate/build/modules/staking/queries";
import BigNumber from "bignumber.js";
import type { QueryValidatorsResponse } from "cosmjs-types/cosmos/staking/v1beta1/query";
import type {
  Pool,
  Validator,
} from "cosmjs-types/cosmos/staking/v1beta1/staking";

import { getStakingQueryClient, getStargateClient } from "./client";
import { normaliseCoin } from "./coins";

let validatorsRequest: null | Promise<QueryValidatorsResponse> = null;

export const getValidatorsList = async (bondStatus: BondStatusString) => {
  if (validatorsRequest) return validatorsRequest;

  const queryClient = await getStakingQueryClient();

  validatorsRequest = queryClient.staking.validators(bondStatus).then((res) => {
    validatorsRequest = null;

    return res;
  });

  return validatorsRequest;
};

const validatorDetailsRequests: {
  [id: string]: Promise<Validator> | undefined;
} = {};

export const getValidatorDetails = async (address: string) => {
  const existingRequest = validatorDetailsRequests[address];

  if (existingRequest) return existingRequest;

  const queryClient = await getStakingQueryClient();

  const promise = queryClient.staking.validator(address).then((resp) => {
    validatorDetailsRequests[address] = undefined;

    return resp.validator;
  });

  validatorDetailsRequests[address] = promise;

  return promise;
};

let poolRequest: null | Promise<Pool> = null;

export const getPool = async () => {
  if (poolRequest) return poolRequest;

  const queryClient = await getStakingQueryClient();

  poolRequest = queryClient.staking.pool().then((res) => {
    poolRequest = null;

    return res.pool;
  });

  return poolRequest;
};

export const getBalance = async (address: string) => {
  const client = await getStargateClient();

  return await client.getBalance(address, "uxion");
};

export const getDelegations = async (address: string) => {
  const queryClient = await getStakingQueryClient();

  return await queryClient.staking.delegatorDelegations(address);
};

export const getUnbondingDelegations = async (address: string) => {
  const queryClient = await getStakingQueryClient();

  return await queryClient.staking.delegatorUnbondingDelegations(address);
};

export const getRewards = async (address: string, validatorAddress: string) => {
  const queryClient = await getStakingQueryClient();

  const rewards = await queryClient.distribution.delegationRewards(
    address,
    validatorAddress,
  );

  const rewardsData = await Promise.all(
    rewards.rewards.map(async (reward) => {
      if (reward.denom.indexOf("ibc/") == 0) {
        const coin = await queryClient.ibc.transfer.denomTrace(
          reward.denom.substring(4),
        );

        reward.denom = coin.denomTrace?.baseDenom || reward.denom;
      }

      return reward;
    }),
  );

  return rewardsData
    .filter((reward) => reward.denom?.toUpperCase() === "UXION")
    .map((reward) => ({
      amount: new BigNumber(reward.amount)
        .div(new BigNumber(10).pow(18)) // Rewards with cosmjs have 18 decimal places
        .toString(),
      denom: reward.denom,
    }))
    .map((r) => normaliseCoin(r));
};

export const getInflation = async () => {
  const queryClient = await getStakingQueryClient();

  const params = await queryClient.mint.params().catch(() => null);

  return params?.inflationMax || 0.2;
};
