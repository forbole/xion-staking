import type { useAbstraxionSigningClient } from "@burnt-labs/abstraxion";
import type {
  Coin,
  MsgDelegateEncodeObject,
  MsgUndelegateEncodeObject,
  StdFee,
} from "@cosmjs/stargate";
import {
  QueryClient,
  StargateClient,
  setupStakingExtension,
} from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import {
  MsgDelegate,
  MsgUndelegate,
} from "cosmjs-types/cosmos/staking/v1beta1/tx";

import { rpcEndpoint } from "./constants";

export type SigningClient = NonNullable<
  ReturnType<typeof useAbstraxionSigningClient>["client"]
>;

const getStakingQueryClient = async () => {
  const cometClient = await Tendermint34Client.connect(rpcEndpoint);

  return QueryClient.withExtensions(cometClient, setupStakingExtension);
};

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

export type StakeAddresses = {
  delegator: string;
  validator: string;
};

export const stakeAmount = async (
  addresses: StakeAddresses,
  client: NonNullable<SigningClient>,
  amount: Coin,
) => {
  const msg = MsgDelegate.fromPartial({
    amount,
    delegatorAddress: addresses.delegator,
    validatorAddress: addresses.validator,
  });

  const msgAny: MsgDelegateEncodeObject = {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
    value: msg,
  };

  const fee: StdFee = {
    amount: [
      {
        amount: "1000",
        denom: "uxion",
      },
    ],
    gas: "200000",
    granter: addresses.delegator,
  };

  return await client.signAndBroadcast(addresses.delegator, [msgAny], fee);
};

export const unstakeAmount = async (
  addresses: StakeAddresses,
  client: NonNullable<SigningClient>,
  amount: Coin,
) => {
  const msg = MsgUndelegate.fromPartial({
    amount,
    delegatorAddress: addresses.delegator,
    validatorAddress: addresses.validator,
  });

  const msgAny: MsgUndelegateEncodeObject = {
    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
    value: msg,
  };

  const fee: StdFee = {
    amount: [
      {
        amount: "1000",
        denom: "uxion",
      },
    ],
    gas: "200000",
    granter: addresses.delegator,
  };

  return await client.signAndBroadcast(addresses.delegator, [msgAny], fee);
};
