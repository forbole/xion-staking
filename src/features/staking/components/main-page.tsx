"use client";

import { useAbstraxionSigningClient, useModal } from "@burnt-labs/abstraxion";
import { Button } from "@burnt-labs/ui";
import type { Coin } from "@cosmjs/stargate";
import type { Validator } from "cosmjs-types/cosmos/staking/v1beta1/staking";
import Link from "next/link";
import { memo, useMemo, useState } from "react";
import { toast } from "react-toastify";

import {
  claimRewardsAction,
  stakeValidatorAction,
  unstakeValidatorAction,
} from "../context/actions";
import { useStaking } from "../context/hooks";
import { getTotalDelegation, getTotalUnbonding } from "../context/selectors";
import { useSubscribeLastBlockHeader } from "../hooks";
import { sumAllCoins } from "../lib/core/coins";
import {
  getAccountExplorerLink,
  getBlockExplorerLink,
} from "../lib/core/explorer";
import type { StakeAddresses } from "../lib/core/tx";
import { formatCoin, formatLastBlockTime } from "../lib/formatters";
import DebugAccount from "./debug-account";
import ValidatorRow from "./validator-row";

function StakingPage() {
  const { account, staking } = useStaking();
  const [isLoading, setIsLoading] = useState(false);

  const { delegations, isInfoLoading, tokens, unbondings, validators } =
    staking.state;

  const { client } = useAbstraxionSigningClient();
  const [, setShowAbstraxion] = useModal();
  const lastBlockHeader = useSubscribeLastBlockHeader();

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

  const totalDelegation = getTotalDelegation(staking.state);
  const totalUnbonding = getTotalUnbonding(staking.state);

  const totalOwned = sumAllCoins(
    [tokens, totalUnbonding, totalDelegation].filter((c): c is Coin => !!c),
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
        {!!lastBlockHeader && (
          <>
            <div>
              Last block time: {formatLastBlockTime(lastBlockHeader.time)}
            </div>
            <div>
              Block:{" "}
              <Link
                href={getBlockExplorerLink(lastBlockHeader.height)}
                style={{ textDecoration: "underline" }}
                target="_blank"
              >
                #{lastBlockHeader.height}
              </Link>
            </div>
          </>
        )}
        {tokens && (
          <div>
            Tokens: <b>{formatCoin(tokens)}</b>
          </div>
        )}
        {totalDelegation && (
          <div>
            Total delegation: <b>{formatCoin(totalDelegation)}</b>
          </div>
        )}
        {totalUnbonding && (
          <div>
            Total unbonding: <b>{formatCoin(totalUnbonding)}</b>
          </div>
        )}
        {totalOwned && (
          <div>
            Total owned: <b>{formatCoin(totalOwned)}</b>
          </div>
        )}
      </div>
      {isInfoLoading && <div>Loading ...</div>}
      <div className="flex items-center justify-center gap-4">
        <Link
          href={getAccountExplorerLink(account.bech32Address)}
          target="_blank"
        >
          <Button onClick={() => {}}>VIEW ACCOUNT</Button>
        </Link>
        <DebugAccount />
      </div>
      <div className="flex flex-row gap-5">
        {!!validators?.items.length && (
          <div>
            <div>Validators:</div>
            <div className="max-h-[500px] max-w-max overflow-auto">
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
                  staking={staking}
                  validator={validator}
                />
              ))}
            </div>
          </div>
        )}
        <div className="max-h-[500px] overflow-auto">
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
                    <div>
                      Validator: {moniker || delegation.validatorAddress}
                    </div>
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
                          disabled={
                            isLoading || delegation.rewards.amount === "0"
                          }
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
                        {validator?.description.moniker ||
                          unbondingItem.validator}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default memo(StakingPage);
