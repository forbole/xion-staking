import { StargateClient } from "@cosmjs/stargate";
import type {
  Coin,
  MsgBeginRedelegateEncodeObject,
  MsgDelegateEncodeObject,
  MsgUndelegateEncodeObject,
  MsgWithdrawDelegatorRewardEncodeObject,
} from "@cosmjs/stargate";
import BigNumber from "bignumber.js";
import { MsgWithdrawDelegatorReward } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import {
  MsgBeginRedelegate,
  MsgDelegate,
  MsgUndelegate,
} from "cosmjs-types/cosmos/staking/v1beta1/tx";

import type { AbstraxionSigningClient } from "./client";
import { getStakingQueryClient } from "./client";
import { normaliseCoin } from "./coins";
import { rpcEndpoint } from "./constants";
import { getCosmosFee } from "./fee";

export const getValidatorsList = async () => {
  const queryClient = await getStakingQueryClient();

  return await queryClient.staking.validators("BOND_STATUS_BONDED");
};

export const getBalance = async (address: string) => {
  const client = await StargateClient.connect(rpcEndpoint);

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

export type StakeAddresses = {
  delegator: string;
  validator: string;
};

export const stakeAmount = async (
  addresses: StakeAddresses,
  client: NonNullable<AbstraxionSigningClient>,
  amount: Coin,
) => {
  const msg = MsgDelegate.fromPartial({
    amount,
    delegatorAddress: addresses.delegator,
    validatorAddress: addresses.validator,
  });

  const messageWrapper: MsgDelegateEncodeObject = {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
    value: msg,
  };

  const fee = await getCosmosFee({
    address: addresses.delegator,
    msgs: [messageWrapper],
  });

  return await client.signAndBroadcast(
    addresses.delegator,
    [messageWrapper],
    fee,
  );
};

export const unstakeAmount = async (
  addresses: StakeAddresses,
  client: NonNullable<AbstraxionSigningClient>,
  amount: Coin,
) => {
  const msg = MsgUndelegate.fromPartial({
    amount,
    delegatorAddress: addresses.delegator,
    validatorAddress: addresses.validator,
  });

  const messageWrapper: MsgUndelegateEncodeObject = {
    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
    value: msg,
  };

  const fee = await getCosmosFee({
    address: addresses.delegator,
    msgs: [messageWrapper],
  });

  return await client.signAndBroadcast(
    addresses.delegator,
    [messageWrapper],
    fee,
  );
};

export const getUnbonding = async (
  address: string,
  validatorAddress: string,
) => {
  const queryClient = await getStakingQueryClient();

  return queryClient.staking.unbondingDelegation(address, validatorAddress);
};

export const claimRewards = async (
  addresses: StakeAddresses,
  client: NonNullable<AbstraxionSigningClient>,
) => {
  const msg = MsgWithdrawDelegatorReward.fromPartial({
    delegatorAddress: addresses.delegator,
    validatorAddress: addresses.validator,
  });

  const messageWrapper: MsgWithdrawDelegatorRewardEncodeObject = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
    value: msg,
  };

  const fee = await getCosmosFee({
    address: addresses.delegator,
    msgs: [messageWrapper],
  });

  return await client.signAndBroadcast(
    addresses.delegator,
    [messageWrapper],
    fee,
  );
};

// @TODO: Pass the target delegator
export const setRedelegate = async (
  delegatorAddress: string,
  client: NonNullable<AbstraxionSigningClient>,
) => {
  const msg = MsgBeginRedelegate.fromPartial({
    delegatorAddress,
  });

  const messageWrapper: MsgBeginRedelegateEncodeObject = {
    typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
    value: msg,
  };

  const fee = await getCosmosFee({
    address: delegatorAddress,
    msgs: [messageWrapper],
  });

  return await client.signAndBroadcast(delegatorAddress, [messageWrapper], fee);
};
