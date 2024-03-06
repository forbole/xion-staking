import type {
  Coin,
  DeliverTxResponse,
  MsgDelegateEncodeObject,
  MsgUndelegateEncodeObject,
  MsgWithdrawDelegatorRewardEncodeObject,
} from "@cosmjs/stargate";
import BigNumber from "bignumber.js";
import { MsgWithdrawDelegatorReward } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import {
  MsgCancelUnbondingDelegation,
  MsgDelegate,
  MsgUndelegate,
} from "cosmjs-types/cosmos/staking/v1beta1/tx";

import type { AbstraxionSigningClient } from "./client";
import { getUXionCoinFromXion, normaliseCoin } from "./coins";
import { getCosmosFee } from "./fee";

const getTxCoin = (coin: Coin) => ({
  amount: coin.amount,
  denom: ["UXION", "XION"].includes(coin.denom.toUpperCase())
    ? coin.denom.toLowerCase() // Transactions expect lower case
    : coin.denom,
});

const getUxionAmount = (coin: Coin) => {
  if (coin.denom.toUpperCase() === "UXION") {
    return getTxCoin(coin);
  }

  if (coin.denom.toUpperCase() === "XION") {
    return getTxCoin(getUXionCoinFromXion(new BigNumber(coin.amount)));
  }

  throw new Error("Invalid coin denom");
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

export type StakeAddresses = {
  delegator: string;
  validator: string;
};

export const stakeAmount = async (
  addresses: StakeAddresses,
  client: NonNullable<AbstraxionSigningClient>,
  initialAmount: Coin,
  memo: string,
) => {
  const amount = getUxionAmount(initialAmount);

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
    memo,
    msgs: [messageWrapper],
  });

  return await client
    .signAndBroadcast(addresses.delegator, [messageWrapper], fee, memo)
    .then(getTxVerifier("delegate"))
    .catch(handleTxError);
};

export const unstakeAmount = async (
  addresses: StakeAddresses,
  client: NonNullable<AbstraxionSigningClient>,
  initialAmount: Coin,
  memo: string,
) => {
  const amount = getUxionAmount(initialAmount);

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
    memo,
    msgs: [messageWrapper],
  });

  return await client
    .signAndBroadcast(addresses.delegator, [messageWrapper], fee, memo)
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

export const getIsMinimumClaimable = (amount: Coin) => {
  const minClaimableXion = 0.0001;
  const normalised = normaliseCoin(amount);

  return new BigNumber(normalised.amount).gte(minClaimableXion);
};

export const cancelUnstake = async (
  addresses: StakeAddresses,
  client: NonNullable<AbstraxionSigningClient>,
) => {
  const msg = MsgCancelUnbondingDelegation.fromPartial({
    delegatorAddress: addresses.delegator,
    validatorAddress: addresses.validator,
  });

  const messageWrapper = {
    typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation" as string,
    value: msg,
  } as MsgUndelegateEncodeObject; // cosmjs doesn't have yet this encode object

  const fee = await getCosmosFee({
    address: addresses.delegator,
    msgs: [messageWrapper],
  });

  return await client
    .signAndBroadcast(addresses.delegator, [messageWrapper], fee)
    .then((result) => {
      // @TODO
      // eslint-disable-next-line no-console
      console.log("debug: tx.ts: cancelUnstake: result", result);

      return result;
    })
    .catch(handleTxError);
};
