import type { useAbstraxionSigningClient } from "@burnt-labs/abstraxion";
import type { Registry } from "@cosmjs/proto-signing";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import type {
  DistributionExtension,
  IbcExtension,
  MintExtension,
  StakingExtension,
} from "@cosmjs/stargate";
import {
  QueryClient,
  SigningStargateClient,
  StargateClient,
  setupDistributionExtension,
  setupIbcExtension,
  setupMintExtension,
  setupStakingExtension,
} from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";



import { RPC_ENDPOINT } from "@/config";



export type AbstraxionSigningClient = NonNullable<
  ReturnType<typeof useAbstraxionSigningClient>["client"]
>;

let stakingQueryClientPromise:
  | Promise<
      QueryClient &
        StakingExtension &
        DistributionExtension &
        IbcExtension &
        MintExtension
    >
  | undefined = undefined;

export const getStakingQueryClient = () => {
  if (!stakingQueryClientPromise) {
    stakingQueryClientPromise = (async () => {
      const cometClient = await Tendermint34Client.connect(RPC_ENDPOINT);

      return QueryClient.withExtensions(
        cometClient,
        setupStakingExtension,
        setupDistributionExtension,
        setupMintExtension,
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
      const client = await StargateClient.connect(RPC_ENDPOINT);

      return client;
    })();
  }

  return stargateClientPromise;
};

// @TODO: Discuss
export const createLocalSigningClient = async (registry?: Registry) => {
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
    RPC_ENDPOINT,
    wallet,
    {
      registry,
    },
  );

  return { client, granteeAddress };
};