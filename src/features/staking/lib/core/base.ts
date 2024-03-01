import { StargateClient } from "@cosmjs/stargate";
import type {
  Coin,
  DeliverTxResponse,
  MsgBeginRedelegateEncodeObject,
  MsgDelegateEncodeObject,
  MsgUndelegateEncodeObject,
  MsgWithdrawDelegatorRewardEncodeObject,
} from "@cosmjs/stargate";
import BigNumber from "bignumber.js";
import { MsgWithdrawDelegatorReward } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import type { QueryValidatorsResponse } from "cosmjs-types/cosmos/staking/v1beta1/query";
import type {
  Pool,
  Validator,
} from "cosmjs-types/cosmos/staking/v1beta1/staking";
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

let validatorsRequest: null | Promise<QueryValidatorsResponse> = null;

export const getValidatorsList = async () => {
  if (validatorsRequest) return validatorsRequest;

  const queryClient = await getStakingQueryClient();

  validatorsRequest = queryClient.staking
    .validators("BOND_STATUS_BONDED")
    .then((res) => {
      validatorsRequest = null;

      return res;
    });

  return validatorsRequest;
};

let validatorDetailsRequest: [string, Promise<Validator>] | null = null;

export const getValidatorDetails = async (address: string) => {
  if (validatorDetailsRequest?.[0] === address) {
    return validatorDetailsRequest[1];
  }

  const queryClient = await getStakingQueryClient();

  const promise = queryClient.staking.validator(address).then((resp) => {
    validatorDetailsRequest = null;

    return resp.validator;
  });

  validatorDetailsRequest = [address, promise];

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
  const client = await StargateClient.connect(rpcEndpoint);

  return await client.getBalance(address, "uxion");
};

const getTxVerifier = (eventType: string) => (result: DeliverTxResponse) => {
  // @TODO
  // eslint-disable-next-line no-console
  console.log("debug: base.ts: result", result);

  if (!result.events.find((e) => e.type === eventType)) {
    console.error(result);
    throw new Error("Out of gas");
  }

  return result;
};

const handleTxError = (err: unknown) => {
  // eslint-disable-next-line no-console
  console.error(err);

  throw err;
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

  return await client
    .signAndBroadcast(addresses.delegator, [messageWrapper], fee)
    .then(getTxVerifier("delegate"))
    .catch(handleTxError);
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

  return await client
    .signAndBroadcast(addresses.delegator, [messageWrapper], fee)
    .then(getTxVerifier("unbond"))
    .catch(handleTxError);
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

  const messageWrapper = [
    {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      value: msg,
    } satisfies MsgWithdrawDelegatorRewardEncodeObject,
  ];

  const fee = await getCosmosFee({
    address: addresses.delegator,
    msgs: messageWrapper,
  });

  return await client
    .signAndBroadcast(addresses.delegator, messageWrapper, fee)
    .then(getTxVerifier("withdraw_rewards"))
    .catch(handleTxError);
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
