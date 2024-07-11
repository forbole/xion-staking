import type { Coin } from "@cosmjs/stargate";
import BigNumber from "bignumber.js";
import {
  BondStatus,
  type Validator,
} from "cosmjs-types/cosmos/staking/v1beta1/staking";
import { memo, useEffect, useState } from "react";

import {
  ButtonLink,
  ButtonPill,
  FloatingDropdown,
} from "@/features/core/components/base";
import {
  HeaderTitleBase,
  ValidatorLogo,
} from "@/features/core/components/table";
import { menu, pointer } from "@/features/core/lib/icons";
import { sortUtil } from "@/features/core/utils";

import { getAndSetValidatorAction } from "../context/actions";
import { useStaking } from "../context/hooks";
import { setModalOpened } from "../context/reducer";
import {
  getAllValidators,
  getTotalDelegation,
  getTotalUnbonding,
} from "../context/selectors";
import type { StakingContextType, StakingState } from "../context/state";
import { useValidatorLogo } from "../hooks";
import { coinIsPositive } from "../lib/core/coins";
import { getCanClaimRewards } from "../lib/core/tx";
import {
  formatCoin,
  formatCommission,
  formatUnbondingCompletionTime,
} from "../lib/formatters";
import AddressShort from "./address-short";
import TokenColors from "./token-colors";

export const getCanShowDetails = (state: StakingState) => {
  const userTotalUnbondings = getTotalUnbonding(state, null);
  const userTotalDelegation = getTotalDelegation(state, null);

  return (
    coinIsPositive(userTotalUnbondings) || coinIsPositive(userTotalDelegation)
  );
};

type Props = {
  isShowingDetails: boolean;
  setIsShowingDetails: (isShowingDetails: boolean) => void;
};

export const DetailsTrigger = ({
  isShowingDetails,
  setIsShowingDetails,
}: Props) => (
  <button
    className="text-primary-500 flex flex-row items-center gap-2 text-[14px]"
    onClick={() => {
      setIsShowingDetails(!isShowingDetails);
    }}
  >
    {isShowingDetails ? "Hide details" : "View details"}
    <div
      dangerouslySetInnerHTML={{ __html: pointer }}
      style={{
        transform: `rotate(${isShowingDetails ? "0deg" : "180deg"})`,
      }}
    />
  </button>
);

const gridStyle = {
  gap: "16px",
  gridTemplateColumns: "1.5fr repeat(4, 1.05fr)",
  overflow: "auto",
};

const rowStyle =
  "w-full items-center justify-between gap-2 p-2 mb-[16px] last:mb-[0px] bg-black rounded-[8px]";

const wrapperStyle =
  "w-full overflow-auto rounded-[24px] bg-bg-600 pb-4 text-typo-100 px-[16px]";

const Menu = () => (
  <span
    className="hover:bg-bg-500"
    dangerouslySetInnerHTML={{ __html: menu }}
  />
);

type DelegationRowProps = {
  delegation: NonNullable<StakingState["delegations"]>["items"][number];
  disabled?: boolean;
  index: number;
  staking: StakingContextType;
  validator?: Validator;
};

const DelegationRowBase = ({
  delegation,
  disabled: disabledProp,
  index,
  staking,
  validator,
}: DelegationRowProps) => {
  const { validatorAddress } = delegation;

  useEffect(() => {
    if (validatorAddress) {
      getAndSetValidatorAction(validatorAddress, staking);
    }
  }, [validatorAddress, staking]);

  const logo = useValidatorLogo(
    validator?.description.identity,
    validator?.operatorAddress,
  );

  const floatingDropdown = (isMobile: boolean) => (
    <FloatingDropdown
      Trigger={Menu}
      id={`delegation-${index}-${isMobile.toString()}`}
      placement="bottom-end"
    >
      <div
        className={[
          "flex-col gap-[12px] rounded-[8px] bg-bg-600 py-[4px]",
          isMobile ? "flex md:hidden" : "hidden md:flex",
        ].join(" ")}
      >
        <ButtonLink
          onClick={() => {
            if (!validator) return;

            staking.dispatch(
              setModalOpened({
                content: { validator },
                type: "redelegate",
              }),
            );
          }}
        >
          Redelegate
        </ButtonLink>
        <ButtonLink
          disabled={!getCanClaimRewards(delegation?.rewards) || disabledProp}
          onClick={() => {
            if (!validator) return;

            staking.dispatch(
              setModalOpened({
                content: {
                  delegations: [delegation],
                },
                type: "rewards",
              }),
            );
          }}
        >
          Claim rewards
        </ButtonLink>
        <ButtonLink
          disabled={disabledProp}
          onClick={() => {
            if (!validator) return;

            staking.dispatch(
              setModalOpened({
                content: { validator },
                type: "undelegate",
              }),
            );
          }}
          variant="danger"
        >
          Undelegate
        </ButtonLink>
      </div>
    </FloatingDropdown>
  );

  const delegateButtonProps = {
    disabled:
      disabledProp || validator?.status !== BondStatus.BOND_STATUS_BONDED,
    onClick: () => {
      if (!validator) return;

      staking.dispatch(
        setModalOpened({
          content: { validator },
          type: "delegate",
        }),
      );
    },
  };

  return (
    <>
      <div
        className={[rowStyle, "hidden min-w-[1000px] md:grid"].join(" ")}
        style={gridStyle}
      >
        <div className="flex flex-1 flex-row justify-start gap-4">
          <ValidatorLogo logo={logo} />
          <div className="flex flex-col justify-center gap-[2px] text-left">
            <div className="max-w-[150px] overflow-hidden truncate text-[14px] font-bold leading-[20px] md:max-w-[250px]">
              {validator?.description.moniker || ""}
            </div>
            <AddressShort address={validator?.operatorAddress || ""} />
          </div>
        </div>
        <div className="text-right">
          <TokenColors text={formatCoin(delegation.balance)} />
        </div>
        <div className="text-right">
          {validator
            ? formatCommission(validator.commission.commissionRates.rate, 0)
            : ""}
        </div>
        <div className="text-right">
          <TokenColors text={formatCoin(delegation.rewards)} />
        </div>
        <div className="flex flex-row items-center justify-end gap-[8px]">
          <ButtonPill {...delegateButtonProps}>Delegate</ButtonPill>
          {floatingDropdown(false)}
        </div>
      </div>
      <div
        className={[rowStyle, "flex w-full flex-col px-[16px] md:hidden"].join(
          " ",
        )}
      >
        <div className="flex w-full flex-1 flex-row justify-start gap-4">
          <ValidatorLogo logo={logo} />
          <div className="flex flex-col justify-center gap-[2px] text-left">
            <div className="max-w-[150px] overflow-hidden truncate text-[14px] font-bold leading-[20px] md:max-w-[250px]">
              {validator?.description.moniker || ""}
            </div>
            <AddressShort address={validator?.operatorAddress || ""} />
          </div>
        </div>
        <div className="flex w-full flex-row justify-between">
          <span>Staked amount</span>
          <TokenColors text={formatCoin(delegation.balance)} />
        </div>
        {validator && (
          <div className="flex w-full flex-row justify-between">
            <span>Commission</span>
            <span>
              {formatCommission(validator.commission.commissionRates.rate, 0)}
            </span>
          </div>
        )}
        <div className="flex w-full flex-row justify-between">
          <span>Rewards</span>
          <TokenColors text={formatCoin(delegation.rewards)} />
        </div>
        <div className="flex w-full flex-row items-center justify-end gap-[8px] ">
          <ButtonPill {...delegateButtonProps}>Delegate</ButtonPill>
          {floatingDropdown(true)}
        </div>
      </div>
    </>
  );
};

const DelegationRow = memo(DelegationRowBase);

type UnbondingRedelegationRowProps = {
  balance: Coin;
  completionTime: number;
  isUnbonding: boolean;
  onCancel?: () => void;
  stakingRef: ReturnType<typeof useStaking>;
  validator?: Validator;
  validatorAddress: string;
};

const UnbondingRedelegationRow = ({
  balance,
  completionTime,
  isUnbonding,
  onCancel,
  stakingRef,
  validator,
  validatorAddress,
}: UnbondingRedelegationRowProps) => {
  const { staking } = stakingRef;

  const logo = useValidatorLogo(
    validator?.description.identity,
    validator?.operatorAddress,
  );

  useEffect(() => {
    if (validatorAddress) {
      getAndSetValidatorAction(validatorAddress, staking);
    }
  }, [validatorAddress, staking]);

  const cancelProps = {
    disabled: !onCancel,
    onClick: onCancel,
  };

  return (
    <>
      <div
        className={[rowStyle, "hidden min-w-[1000px] md:grid"].join(" ")}
        style={gridStyle}
      >
        <div className="flex flex-1 flex-row justify-start gap-4">
          <ValidatorLogo logo={logo} />
          <div className="flex flex-col justify-start gap-2 text-left">
            <div className="text-[14px] font-bold leading-[20px]">
              {validator?.description.moniker || ""}
            </div>
            <AddressShort address={validator?.operatorAddress || ""} />
          </div>
        </div>
        <div className="text-right">
          <TokenColors text={formatCoin(balance)} />
        </div>
        <div className="text-right">
          {isUnbonding ? "Unbonding" : "Redelegation"}
        </div>
        <div className="text-right">
          {formatUnbondingCompletionTime(completionTime)}
        </div>
        <div className="text-right">
          {!!onCancel && (
            <ButtonPill {...cancelProps} variant="danger">
              Cancel unbonding
            </ButtonPill>
          )}
        </div>
      </div>
      <div
        className={[rowStyle, "flex w-full flex-col px-[16px] md:hidden"].join(
          " ",
        )}
      >
        <div className="flex w-full flex-1 flex-row justify-start gap-4">
          <ValidatorLogo logo={logo} />
          <div className="flex flex-col justify-start gap-2 text-left">
            <div className="text-[14px] font-bold leading-[20px]">
              {validator?.description.moniker || ""}
            </div>
            <AddressShort address={validator?.operatorAddress || ""} />
          </div>
        </div>
        <div className="flex w-full flex-row justify-between">
          <span>Amount</span>
          <TokenColors text={formatCoin(balance)} />
        </div>
        <div className="flex w-full flex-row justify-between">
          <span>Status</span>
          <span>{isUnbonding ? "Unbonding" : "Redelegation"}</span>
        </div>
        <div className="flex w-full flex-row justify-between">
          <span>Completion</span>
          {formatUnbondingCompletionTime(completionTime)}
        </div>
        {!!onCancel && (
          <div className="flex w-full flex-row justify-end">
            <ButtonPill {...cancelProps} variant="danger">
              Cancel unbonding
            </ButtonPill>
          </div>
        )}
      </div>
    </>
  );
};

type DelegationSortMethod =
  | "commission-asc"
  | "commission-desc"
  | "none"
  | "rewards-asc"
  | "rewards-desc"
  | "staked-asc"
  | "staked-desc";

type SortMethod =
  | "amount-asc"
  | "amount-desc"
  | "completion-asc"
  | "completion-desc"
  | "none";

const DelegationHeaderTitle = HeaderTitleBase<DelegationSortMethod>;
const UnbondingHeaderTitle = HeaderTitleBase<SortMethod>;

const headerStyle =
  "grid w-full items-center justify-between gap-2 py-4 px-2 uppercase md:min-w-[1000px]";

const DelegationDetails = () => {
  const stakingRef = useStaking();

  const { staking } = stakingRef;

  const [delegationsSortMethod, setDelegationsSortMethod] =
    useState<DelegationSortMethod>("none");

  const [unbondingsSortMethod, setUnbondingsSortMethod] =
    useState<SortMethod>("none");

  const validatorsMap = getAllValidators(staking.state);

  const { delegations, redelegations, unbondings } = staking.state;

  const hasDelegations = !!delegations?.items.length;
  const hasUnbondings = !!unbondings?.items.length;
  const hasRedelegations = !!redelegations?.items.length;

  if (!hasDelegations && !hasUnbondings && !hasRedelegations) {
    return null;
  }

  return (
    <div className="flex h-full flex-1 flex-col items-end gap-[16px]">
      {hasDelegations &&
        (() => {
          const sortedDelegations = delegations.items.slice().sort((a, b) => {
            switch (delegationsSortMethod) {
              case "staked-asc":
              case "staked-desc":
                return sortUtil(
                  new BigNumber(a.balance.amount),
                  new BigNumber(b.balance.amount),
                  delegationsSortMethod === "staked-asc",
                );

              case "rewards-asc":
              case "rewards-desc":
                return sortUtil(
                  new BigNumber(a.rewards.amount),
                  new BigNumber(b.rewards.amount),
                  delegationsSortMethod === "rewards-asc",
                );

              case "commission-asc":

              case "commission-desc": {
                const validatorA = validatorsMap[a.validatorAddress];
                const validatorB = validatorsMap[b.validatorAddress];

                return sortUtil(
                  Number(validatorA?.commission.commissionRates.rate),
                  Number(validatorB?.commission.commissionRates.rate),
                  delegationsSortMethod === "commission-asc",
                );
              }

              default:
                delegationsSortMethod satisfies "none";

                return 0;
            }
          });

          return (
            <div className={wrapperStyle}>
              <div className={headerStyle} style={gridStyle}>
                <DelegationHeaderTitle mobile>
                  Delegations
                </DelegationHeaderTitle>
                <DelegationHeaderTitle
                  onSort={setDelegationsSortMethod}
                  rigthAlign
                  sort={delegationsSortMethod}
                  sorting={["staked-asc", "staked-desc"]}
                >
                  Staked Amount
                </DelegationHeaderTitle>
                <DelegationHeaderTitle
                  onSort={setDelegationsSortMethod}
                  rigthAlign
                  sort={delegationsSortMethod}
                  sorting={["commission-asc", "commission-desc"]}
                >
                  <div className="text-right">Commission</div>
                </DelegationHeaderTitle>
                <DelegationHeaderTitle
                  onSort={setDelegationsSortMethod}
                  rigthAlign
                  sort={delegationsSortMethod}
                  sorting={["rewards-asc", "rewards-desc"]}
                >
                  <div className="text-right">Rewards</div>
                </DelegationHeaderTitle>
              </div>
              {sortedDelegations.map((delegation, index) => (
                <DelegationRow
                  delegation={delegation}
                  index={index}
                  key={index}
                  staking={staking}
                  validator={validatorsMap[delegation.validatorAddress]}
                />
              ))}
            </div>
          );
        })()}
      {(hasUnbondings || hasRedelegations) &&
        (() => {
          const sortedUnbondings = [
            ...(unbondings?.items ?? []),
            ...(redelegations?.items ?? []),
          ].sort((a, b) => {
            switch (unbondingsSortMethod) {
              case "amount-asc":
              case "amount-desc":
                return sortUtil(
                  Number(a.balance.amount),
                  Number(b.balance.amount),
                  unbondingsSortMethod === "amount-asc",
                );

              case "completion-asc":
              case "completion-desc":
                return sortUtil(
                  a.completionTime,
                  b.completionTime,
                  unbondingsSortMethod === "completion-asc",
                );

              default:
                unbondingsSortMethod satisfies "none";

                return 0;
            }
          });

          return (
            <div className={wrapperStyle}>
              <div className={headerStyle} style={gridStyle}>
                <UnbondingHeaderTitle mobile>
                  Unbondings/Redelegations
                </UnbondingHeaderTitle>
                <UnbondingHeaderTitle
                  onSort={setUnbondingsSortMethod}
                  rigthAlign
                  sort={unbondingsSortMethod}
                  sorting={["amount-asc", "amount-desc"]}
                >
                  <div className="text-right">Staked Amount</div>
                </UnbondingHeaderTitle>
                <UnbondingHeaderTitle rigthAlign>
                  <div className="text-right">Status</div>
                </UnbondingHeaderTitle>
                <UnbondingHeaderTitle
                  onSort={setUnbondingsSortMethod}
                  rigthAlign
                  sort={unbondingsSortMethod}
                  sorting={["completion-asc", "completion-desc"]}
                >
                  <div className="text-right">Completion Time</div>
                </UnbondingHeaderTitle>
              </div>
              {sortedUnbondings.map((unbondingRedelegation, index) => {
                const isUnbonding = "validator" in unbondingRedelegation;

                const validatorAddress = isUnbonding
                  ? unbondingRedelegation.validator
                  : unbondingRedelegation.dstValidator;

                const onCancel = isUnbonding
                  ? () => {
                      staking.dispatch(
                        setModalOpened({
                          content: { unbondings: [unbondingRedelegation] },
                          type: "cancel-unstaking",
                        }),
                      );
                    }
                  : undefined;

                return (
                  <UnbondingRedelegationRow
                    balance={unbondingRedelegation.balance}
                    completionTime={unbondingRedelegation.completionTime}
                    isUnbonding={isUnbonding}
                    key={index}
                    onCancel={onCancel}
                    stakingRef={stakingRef}
                    validator={validatorsMap[validatorAddress]}
                    validatorAddress={validatorAddress}
                  />
                );
              })}
            </div>
          );
        })()}
    </div>
  );
};

export default memo(DelegationDetails);
