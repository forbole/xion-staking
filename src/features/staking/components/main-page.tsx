"use client";

import { useAbstraxionSigningClient, useModal } from "@burnt-labs/abstraxion";
import { Button } from "@burnt-labs/ui";
import type { Validator } from "cosmjs-types/cosmos/staking/v1beta1/staking";
import Link from "next/link";
import { memo, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

import {
  claimRewardsAction,
  setRedelegateAction,
  stakeValidatorAction,
  unstakeValidatorAction,
} from "../context/actions";
import { useStaking } from "../context/hooks";
import type { StakingState } from "../context/state";
import type { StakeAddresses } from "../lib/core/base";
import { formatCoin } from "../lib/core/coins";
import { chainId } from "../lib/core/constants";
import { keybaseClient } from "../lib/utils/keybase-client";
import DebugAccount from "./debug-account";

type ValidatorItemProps = {
  disabled?: boolean;
  onStake: () => void;
  validator: NonNullable<StakingState["validators"]>["items"][number];
};

const ValidatorRow = ({ disabled, onStake, validator }: ValidatorItemProps) => {
  const { website } = validator.description;
  const [logo, setLogo] = useState<null | string>(null);

  const { identity } = validator.description;

  useEffect(() => {
    (async () => {
      if (identity) {
        const logoResponse = await keybaseClient.getIdentityLogo(identity);

        setLogo(logoResponse);
      }
    })();
  }, [identity]);

  return (
    <div style={{ border: "solid 1px white", marginBottom: 10 }}>
      {logo && (
        <div>
          <img
            alt="Validator logo"
            src={logo}
            style={{ height: 50, width: 50 }}
          />
        </div>
      )}
      <Link href={`/validator?address=${validator.operatorAddress}`}>
        <div>
          <b>{validator.description.moniker}</b>
        </div>
        <div>{validator.operatorAddress}</div>
      </Link>
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

  const { delegations, isInfoLoading, tokens, unbondings, validators } =
    staking.state;

  const { client } = useAbstraxionSigningClient();
  const [, setShowAbstraxion] = useModal();

  const validatorsMap: Record<string, undefined | Validator> = useMemo(
    () =>
      validators?.items.reduce<Record<string, undefined | Validator>>(
        (acc, validator) => {
          acc[validator.operatorAddress] = validator;

          return acc;
        },
        {},
      ) || {},
    [validators],
  );

  return (
    <>
      <div className="flex flex-col gap-2">
        <div>Account</div>
        <div>
          <b>{account.bech32Address}</b>
        </div>
        <div>
          <Button
            onClick={() => {
              setShowAbstraxion(true);
            }}
          >
            Open Settings
          </Button>
        </div>
        {tokens && (
          <div>
            Tokens: <b>{formatCoin(tokens)}</b>
          </div>
        )}
      </div>
      {isInfoLoading && <div>Loading ...</div>}
      {!!delegations?.items.length && (
        <div>
          <div>Delegations:</div>
          {delegations.items.map((delegation) => {
            const validator = validatorsMap[delegation.validatorAddress];
            const moniker = validator?.description.moniker;

            return (
              <div
                key={delegation.validatorAddress}
                style={{ border: "1px solid #fff", marginBottom: 20 }}
              >
                <div>Delegated: {formatCoin(delegation.balance)}</div>
                {delegation.rewards && (
                  <div>Rewards: {formatCoin(delegation.rewards)}</div>
                )}
                <div>Validator: {moniker || delegation.validatorAddress}</div>
                <div className="flex flex-row gap-4">
                  <Button
                    disabled={isLoading}
                    onClick={() => {
                      if (!client || !validator) return;

                      setIsLoading(true);

                      const addresses: StakeAddresses = {
                        delegator: account.bech32Address,
                        validator: validator.operatorAddress,
                      };

                      unstakeValidatorAction(addresses, client, staking)
                        .then(() => {
                          toast("Unstake successful", {
                            type: "success",
                          });
                        })
                        .catch(() => {
                          toast("Unstake error", {
                            type: "error",
                          });
                        })
                        .finally(() => {
                          setIsLoading(false);
                        });
                    }}
                  >
                    Undelegate
                  </Button>
                  {delegation.rewards && (
                    <Button
                      disabled={isLoading || delegation.rewards.amount === "0"}
                      onClick={() => {
                        if (!client) return;

                        setIsLoading(true);

                        const addresses: StakeAddresses = {
                          delegator: account.bech32Address,
                          validator: delegation.validatorAddress,
                        };

                        claimRewardsAction(addresses, client, staking)
                          .then(() => {
                            toast("Claim success", { type: "success" });
                          })
                          .catch(() => {
                            toast("Claim error", { type: "error" });
                          })
                          .finally(() => {
                            setIsLoading(false);
                          });
                      }}
                    >
                      Claim rewards
                    </Button>
                  )}
                  <Button
                    disabled={isLoading}
                    onClick={() => {
                      if (!client) return;

                      setIsLoading(true);

                      setRedelegateAction(
                        account.bech32Address,
                        client,
                        staking,
                      ).finally(() => {
                        setIsLoading(false);
                      });
                    }}
                  >
                    Redelelegate
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {!!unbondings?.items.length && (
        <div>
          <div>Unbondings:</div>
          <div>
            {unbondings?.items.map((unbondingItem) => {
              const validator = validatorsMap[unbondingItem.validator];

              return (
                <div
                  key={`${unbondingItem.completionTime}-${unbondingItem.completionTimeNanos}`}
                  style={{ border: "1px solid #fff" }}
                >
                  <div>
                    Unbonding tokens: {formatCoin(unbondingItem.balance)}
                  </div>
                  <div>
                    Completed by:{" "}
                    {new Date(unbondingItem.completionTime).toString()}
                  </div>
                  <div>
                    Validator:{" "}
                    {validator?.description.moniker || unbondingItem.validator}
                  </div>
                </div>
              );
            })}
          </div>
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
      {!!validators?.items.length && (
        <div>
          <div>Validators:</div>
          <div className="max-h-[200px] max-w-max overflow-auto">
            {validators.items.map((validator) => (
              <ValidatorRow
                disabled={isLoading}
                key={validator.operatorAddress}
                onStake={() => {
                  if (!client) return;

                  setIsLoading(true);

                  const addresses: StakeAddresses = {
                    delegator: account.bech32Address,
                    validator: validator.operatorAddress,
                  };

                  stakeValidatorAction(addresses, client, staking)
                    .then(() => {
                      toast("Staking successful", {
                        type: "success",
                      });
                    })
                    .catch(() => {
                      toast("Staking error", {
                        type: "error",
                      });
                    })
                    .finally(() => {
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
