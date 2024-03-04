import type { useAbstraxionSigningClient } from "@burnt-labs/abstraxion";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import type {
  DistributionExtension,
  IbcExtension,
  StakingExtension,
} from "@cosmjs/stargate";
import {
  QueryClient,
  SigningStargateClient,
  StargateClient,
  setupDistributionExtension,
  setupIbcExtension,
  setupStakingExtension,
} from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

import { rpcEndpoint } from "./constants";

export type AbstraxionSigningClient = NonNullable<
  ReturnType<typeof useAbstraxionSigningClient>["client"]
>;

let stakingQueryClientPromise:
  | Promise<
      QueryClient & StakingExtension & DistributionExtension & IbcExtension
    >
  | undefined = undefined;

export const getStakingQueryClient = () => {
  if (!stakingQueryClientPromise) {
    stakingQueryClientPromise = (async () => {
      const cometClient = await Tendermint34Client.connect(rpcEndpoint);

      return QueryClient.withExtensions(
        cometClient,
        setupStakingExtension,
        setupDistributionExtension,
        setupIbcExtension,
      );
    })();
  }

  return stakingQueryClientPromise;
};

let stargateClientPromise: Promise<StargateClient> | undefined = undefined;

export const getStargateClient = () => {
  if (!stargateClientPromise) {
    stargateClientPromise = (async () => {
      const client = await StargateClient.connect(rpcEndpoint);

      return client;
    })();
  }

  return stargateClientPromise;
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
