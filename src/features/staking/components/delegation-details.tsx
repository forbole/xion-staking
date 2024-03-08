import BigNumber from "bignumber.js";
import type { Validator } from "cosmjs-types/cosmos/staking/v1beta1/staking";
import { memo, useEffect, useState } from "react";

import {
  ButtonLink,
  ButtonPill,
  FloatingDropdown,
} from "@/features/core/components/base";
import { HeaderTitleBase } from "@/features/core/components/table";
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
    className="text-primary-500 flex flex-row items-center gap-2"
    onClick={() => {
      setIsShowingDetails(!isShowingDetails);
    }}
  >
    {isShowingDetails ? "Hide details" : "Show details"}
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
  gridTemplateColumns: "2fr repeat(4, 1fr)",
  minWidth: 800,
  overflow: "auto",
};

const rowStyle =
  "grid w-full items-center justify-between gap-2 p-2 mb-[16px] last:mb-[0px] bg-black rounded-[8px]";

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
  disabled,
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

  const logo = useValidatorLogo(validator?.description.identity);

  return (
    <div className={rowStyle} style={gridStyle}>
      <div className="flex flex-1 flex-row justify-start gap-4">
        <div className="flex items-center justify-start">
          <img
            alt="Validator logo"
            className="block w-[50px] rounded-full"
            src={logo}
            style={{ height: 50, width: 50 }}
          />
        </div>
        <div className="flex flex-col justify-center gap-2 text-left">
          <div className="text-[14px] font-bold leading-[20px]">
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
        <ButtonPill
          disabled={disabled}
          onClick={() => {
            if (!validator) return;

            staking.dispatch(
              setModalOpened({
                content: { validator },
                type: "delegate",
              }),
            );
          }}
        >
          Delegate
        </ButtonPill>
        <FloatingDropdown Trigger={Menu} id={`delegation-${index}`}>
          <div className="flex flex-col gap-[12px] rounded-[8px] bg-bg-600 py-[4px]">
            <ButtonLink
              disabled={!getCanClaimRewards(delegation?.rewards) || disabled}
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
              disabled={disabled}
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
      </div>
    </div>
  );
};

const DelegationRow = memo(DelegationRowBase);

type UnbondingRowProps = {
  disabled?: boolean;
  stakingRef: ReturnType<typeof useStaking>;
  unbonding: NonNullable<StakingState["unbondings"]>["items"][number];
  validator?: Validator;
};

const UnbondingRow = ({
  disabled,
  stakingRef,
  unbonding,
  validator,
}: UnbondingRowProps) => {
  const { staking } = stakingRef;

  const logo = useValidatorLogo(validator?.description.identity);
  const validatorAddress = unbonding.validator;

  useEffect(() => {
    if (validatorAddress) {
      getAndSetValidatorAction(validatorAddress, staking);
    }
  }, [validatorAddress, staking]);

  return (
    <div className={rowStyle} style={gridStyle}>
      <div className="flex items-center justify-start">
        <img
          alt="Validator logo"
          className="block w-[50px] rounded-full"
          src={logo}
          style={{ height: 50, width: 50 }}
        />
      </div>
      <div className="flex flex-1 flex-row justify-start gap-4">
        <div className="flex flex-col justify-start gap-2 text-left">
          <div className="text-[14px] font-bold leading-[20px]">
            {validator?.description.moniker || ""}
          </div>
          <AddressShort address={validator?.operatorAddress || ""} />
        </div>
      </div>
      <div className="text-right">
        <TokenColors text={formatCoin(unbonding.balance)} />
      </div>
      <div className="text-right">Unbonding</div>
      <div className="text-right">
        {formatUnbondingCompletionTime(unbonding.completionTime)}
      </div>
      <div className="text-right">
        <ButtonPill
          disabled={disabled}
          onClick={() => {
            staking.dispatch(
              setModalOpened({
                content: { unbondings: [unbonding] },
                type: "cancel-unstaking",
              }),
            );
          }}
          variant="danger"
        >
          Cancel Unstake
        </ButtonPill>
      </div>
    </div>
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
  "grid w-full items-center justify-between gap-2 py-4 px-2 uppercase";

const DelegationDetails = () => {
  const stakingRef = useStaking();

  const { staking } = stakingRef;

  const [delegationsSortMethod, setDelegationsSortMethod] =
    useState<DelegationSortMethod>("none");

  const [unbondingsSortMethod, setUnbondingsSortMethod] =
    useState<SortMethod>("none");

  const validatorsMap = getAllValidators(staking.state);

  const { delegations, unbondings } = staking.state;

  const hasDelegations = !!delegations?.items.length;
  const hasUnbondings = !!unbondings?.items.length;

  if (!hasDelegations && !hasUnbondings) {
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
                <DelegationHeaderTitle>Delegations</DelegationHeaderTitle>
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
      {hasUnbondings &&
        (() => {
          const sortedUnbondings = unbondings.items.slice().sort((a, b) => {
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
                <UnbondingHeaderTitle rigthAlign>
                  Unstakings
                </UnbondingHeaderTitle>
                <UnbondingHeaderTitle
                  onSort={setUnbondingsSortMethod}
                  rigthAlign
                  sort={unbondingsSortMethod}
                  sorting={["staked-asc", "staked-desc"]}
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
                  sorting={["date-asc", "date-desc"]}
                >
                  <div className="text-right">Completion Time</div>
                </UnbondingHeaderTitle>
              </div>
              {sortedUnbondings.map((unbonding, index) => (
                <UnbondingRow
                  key={index}
                  stakingRef={stakingRef}
                  unbonding={unbonding}
                  validator={validatorsMap[unbonding.validator]}
                />
              ))}
            </div>
          );
        })()}
    </div>
  );
};

export default memo(DelegationDetails);
