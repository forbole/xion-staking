import type { useAbstraxionSigningClient } from "@burnt-labs/abstraxion";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import {
  QueryClient,
  SigningStargateClient,
  setupDistributionExtension,
  setupIbcExtension,
  setupStakingExtension,
} from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

import { rpcEndpoint, wssEndpoint } from "./constants";

export type AbstraxionSigningClient = NonNullable<
  ReturnType<typeof useAbstraxionSigningClient>["client"]
>;

export const getStakingQueryClient = async () => {
  const cometClient = await Tendermint34Client.connect(rpcEndpoint);

  return QueryClient.withExtensions(
    cometClient,
    setupStakingExtension,
    setupDistributionExtension,
    setupIbcExtension,
  );
};

// @TODO: Discuss
export const createLocalSigningClient = async () => {
  const tempKeypair = localStorage.getItem("xion-authz-temp-account");

  if (!tempKeypair) return;

  const wallet = await DirectSecp256k1HdWallet.deserialize(
    tempKeypair,
    "abstraxion",
  );

  const granteeAddress = await wallet
    .getAccounts()
    .then((accounts) => accounts[0]?.address);

  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    wallet,
  );

  return { client, granteeAddress };
};

export const getWSClient = () => Tendermint34Client.connect(wssEndpoint);
