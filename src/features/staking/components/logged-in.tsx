"use client";

import { useAbstraxionSigningClient } from "@burnt-labs/abstraxion";
import { Button } from "@burnt-labs/ui";
import type { Validator } from "cosmjs-types/cosmos/staking/v1beta1/staking";
import Link from "next/link";
import { memo, useState } from "react";

import type { StakingState } from "../context";
import { stakeValidator } from "../context/actions";
import { useStaking } from "../context/hooks";
import { formatCoin } from "../lib/coins";
import { chainId } from "../lib/constants";
import type { StakeAddresses } from "../lib/core";
import DebugAccount from "./debug-account";

type ValidatorItemProps = {
  disabled?: boolean;
  onStake: () => void;
  validator: NonNullable<StakingState["validators"]>["items"][number];
};

const ValidatorItem = ({
  disabled,
  onStake,
  validator,
}: ValidatorItemProps) => {
  const { website } = validator.description;

  return (
    <div style={{ border: "solid 1ps white", marginBottom: 10 }}>
      <div>
        <b>{validator.description.moniker}</b>
      </div>
      <div>{validator.operatorAddress}</div>
      <div>
        <Button disabled={disabled} onClick={onStake} structure="naked">
          Stake here
        </Button>
      </div>
      {website && (
        <div>
          <Link href={website} target="_blank">
            {website}
          </Link>
        </div>
      )}
    </div>
  );
};

function StakingPage() {
  const { account, staking } = useStaking();
  const [isLoading, setIsLoading] = useState(false);
  const { delegations, tokens, validators } = staking.state;
  const { client } = useAbstraxionSigningClient();

  const validatorsMap: Record<string, Validator> =
    validators?.items.reduce<Record<string, Validator>>((acc, validator) => {
      acc[validator.operatorAddress] = validator;

      return acc;
    }, {}) || {};

  return (
    <>
      <div className="flex flex-col gap-2">
        <div>Account</div>
        <div>
          <b>{account.bech32Address}</b>
        </div>
        {tokens && (
          <div>
            Tokens: <b>{formatCoin(tokens)}</b>
          </div>
        )}
      </div>
      {delegations && (
        <div>
          <div>Delegations:</div>
          {delegations.items.map((delegation) => {
            const validator = validatorsMap[delegation.validatorAddress];
            const moniker = validator?.description.moniker;

            return (
              <div key={delegation.validatorAddress}>
                <div>{formatCoin(delegation.amount)}</div>
                <div>{moniker || delegation.validatorAddress}</div>
                <Button
                  onClick={() => {
                    setIsLoading(true);
                  }}
                >
                  Undelegate
                </Button>
              </div>
            );
          })}
        </div>
      )}
      <div className="flex items-center justify-center gap-4">
        <Link
          href={`https://explorer.burnt.com/${chainId}/account/${account.bech32Address}`}
          target="_blank"
        >
          <Button onClick={() => {}}>VIEW ACCOUNT</Button>
        </Link>
        <DebugAccount />
      </div>
      {validators && (
        <div>
          <div>Validators:</div>
          <div className="max-h-[200px] max-w-max overflow-auto">
            {validators.items.map((validator) => (
              <ValidatorItem
                disabled={isLoading}
                key={validator.operatorAddress}
                onStake={() => {
                  if (!client) return;

                  setIsLoading(true);

                  const addresses: StakeAddresses = {
                    delegator: account.bech32Address,
                    validator: validator.operatorAddress,
                  };

                  stakeValidator(addresses, client, staking).then(() => {
                    setIsLoading(false);
                  });
                }}
                validator={validator}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default memo(StakingPage);
