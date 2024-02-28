import type { EncodeObject } from "@cosmjs/proto-signing";
import type { Coin, StdFee } from "@cosmjs/stargate";
import { MsgExec } from "cosmjs-types/cosmos/authz/v1beta1/tx";

import { createLocalSigningClient } from "./client";

const simulateMsgsWithExec = async (msgs: EncodeObject[], memo: string) => {
  const { client, granteeAddress } = (await createLocalSigningClient()) || {};

  if (!client || !granteeAddress) return null;

  const messages = [
    {
      typeUrl: "/cosmos.authz.v1beta1.MsgExec",
      value: MsgExec.fromPartial({
        grantee: granteeAddress,
        msgs: msgs.map((m) => client.registry.encodeAsAny(m)),
      }),
    },
  ];

  return await client
    .simulate(granteeAddress, messages, memo)
    .then((estimate) => {
      // This is a factor to increase the gas fee, since the estimate can be a
      // bit short in some cases (especially for the last events)
      const gasFeeFactor = 2;

      return Math.ceil(estimate * gasFeeFactor).toString();
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log("debug: core/base.ts: Estimate error", err);

      return null;
    });
};

type FeeOpts = {
  address: string;
  amount?: Coin[];
  gasLimit?: string;
  memo?: string;
  msgs: EncodeObject[];
};

export const getCosmosFee = async ({
  address,
  // @TODO: review
  amount = [{ amount: "1000", denom: "uxion" }],
  gasLimit = "400000",
  memo = "",
  msgs,
}: FeeOpts): Promise<StdFee> => {
  const gasEstimate = await simulateMsgsWithExec(msgs, memo);

  const fee: StdFee = {
    amount,
    gas: gasEstimate || gasLimit,
    granter: address,
  };

  return fee;
};
