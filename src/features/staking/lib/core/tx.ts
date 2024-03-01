import type {
  Coin,
  DeliverTxResponse,
  MsgBeginRedelegateEncodeObject,
  MsgDelegateEncodeObject,
  MsgUndelegateEncodeObject,
  MsgWithdrawDelegatorRewardEncodeObject,
} from "@cosmjs/stargate";
import { MsgWithdrawDelegatorReward } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import {
  MsgBeginRedelegate,
  MsgDelegate,
  MsgUndelegate,
} from "cosmjs-types/cosmos/staking/v1beta1/tx";

import type { AbstraxionSigningClient } from "./client";
import { getCosmosFee } from "./fee";

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
