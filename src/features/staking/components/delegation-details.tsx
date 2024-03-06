import type { useAbstraxionSigningClient } from "@burnt-labs/abstraxion";
import type { Validator } from "cosmjs-types/cosmos/staking/v1beta1/staking";
import { memo, useEffect, useState } from "react";

import {
  ButtonLink,
  ButtonPill,
  FloatingDropdown,
} from "@/features/core/components/base";
import { HeaderTitleBase } from "@/features/core/components/table";
import { useCore } from "@/features/core/context/hooks";
import { setIsLoadingBlocking } from "@/features/core/context/reducer";
import type { CoreContextType } from "@/features/core/context/state";
import { sortUtil } from "@/features/core/utils";

import {
  claimRewardsAction,
  getAndSetValidatorAction,
} from "../context/actions";
import { useStaking } from "../context/hooks";
import { setModalOpened } from "../context/reducer";
import { getTotalDelegation, getTotalUnbonding } from "../context/selectors";
import type { StakingContextType, StakingState } from "../context/state";
import { useValidatorLogo } from "../hooks";
import { coinIsPositive } from "../lib/core/coins";
import { menu, pointer } from "../lib/core/icons";
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
  gridTemplateColumns: "60px 1.5fr repeat(4, 1fr)",
};

const rowStyle =
  "grid w-full items-center justify-between gap-2 p-2 mb-[24px] last:mb-[0px] bg-black rounded-[8px]";

const wrapperStyle =
  "w-full overflow-hidden rounded-[24px] bg-bg-600 pb-4 text-typo-100 px-[16px]";

const Menu = () => <span dangerouslySetInnerHTML={{ __html: menu }} />;

type DelegationRowProps = {
  accountAddress: string;
  client: ReturnType<typeof useAbstraxionSigningClient>["client"];
  core: CoreContextType;
  delegation: NonNullable<StakingState["delegations"]>["items"][number];
  disabled?: boolean;
  index: number;
  staking: StakingContextType;
};

const DelegationRowBase = ({
  accountAddress,
  client,
  core,
  delegation,
  disabled,
  index,
  staking,
}: DelegationRowProps) => {
  const [validator, setValidator] = useState<null | Validator>(null);
  const { validatorAddress } = delegation;

  useEffect(() => {
    (async () => {
      if (validatorAddress) {
        const newValidator = await getAndSetValidatorAction(
          validatorAddress,
          staking,
        );

        setValidator(newValidator);
      }
    })();
  }, [validatorAddress, staking]);

  const logo = useValidatorLogo(validator?.description.identity);

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
      <div className="flex flex-row items-center justify-start gap-[8px]">
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
              disabled={disabled}
              onClick={() => {
                if (!client) return;

                const addresses = {
                  delegator: accountAddress,
                  validator: delegation.validatorAddress,
                };

                core.dispatch(setIsLoadingBlocking(true));

                claimRewardsAction(addresses, client, staking).finally(() => {
                  core.dispatch(setIsLoadingBlocking(false));
                });
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
  staking: StakingContextType;
  unbonding: NonNullable<StakingState["unbondings"]>["items"][number];
};

const UnbondingRow = ({ disabled, staking, unbonding }: UnbondingRowProps) => {
  const validator = (staking.state.validators?.items || []).find(
    (v) => v.operatorAddress === unbonding.validator,
  );

  const logo = useValidatorLogo(validator?.description.identity);

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
      <div>
        <ButtonPill
          disabled={disabled}
          onClick={() => {
            // @TODO
          }}
        >
          Cancel
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
  "grid w-full items-center justify-between gap-2 p-4 uppercase";

const DelegationDetails = () => {
  const stakingRef = useStaking();
  const { core } = useCore();

  const { client, staking } = stakingRef;

  const [delegationsSortMethod, setDelegationsSortMethod] =
    useState<DelegationSortMethod>("none");

  const [unbondingsSortMethod, setUnbondingsSortMethod] =
    useState<SortMethod>("none");

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
          const validatorIdToValidator =
            staking.state.validators?.items.reduce(
              (acc, v) => {
                acc[v.operatorAddress] = v;

                return acc;
              },
              { ...staking.state.extraValidators },
            ) || {};

          const sortedDelegations = delegations.items.slice().sort((a, b) => {
            switch (delegationsSortMethod) {
              case "staked-asc":
              case "staked-desc":
                return sortUtil(
                  a.balance.amount,
                  b.balance.amount,
                  delegationsSortMethod === "staked-asc" ? "asc" : "desc",
                );

              case "rewards-asc":
              case "rewards-desc":
                return sortUtil(
                  a.rewards.amount,
                  b.rewards.amount,
                  delegationsSortMethod === "rewards-asc" ? "asc" : "desc",
                );

              case "commission-asc":

              case "commission-desc": {
                const validatorA = validatorIdToValidator[a.validatorAddress];
                const validatorB = validatorIdToValidator[b.validatorAddress];

                return sortUtil(
                  Number(validatorA?.commission.commissionRates.rate),
                  Number(validatorB?.commission.commissionRates.rate),
                  delegationsSortMethod === "commission-asc" ? "asc" : "desc",
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
                <div />
                <DelegationHeaderTitle>Delegations</DelegationHeaderTitle>
                <DelegationHeaderTitle
                  onSort={setDelegationsSortMethod}
                  sort={delegationsSortMethod}
                  sorting={["staked-asc", "staked-desc"]}
                >
                  <div className="text-right">Staked Amount</div>
                </DelegationHeaderTitle>
                <DelegationHeaderTitle
                  onSort={setDelegationsSortMethod}
                  sort={delegationsSortMethod}
                  sorting={["commission-asc", "commission-desc"]}
                >
                  <div className="text-right">Commission</div>
                </DelegationHeaderTitle>
                <DelegationHeaderTitle
                  onSort={setDelegationsSortMethod}
                  sort={delegationsSortMethod}
                  sorting={["rewards-asc", "rewards-desc"]}
                >
                  <div className="text-right">Rewards</div>
                </DelegationHeaderTitle>
              </div>
              {sortedDelegations.map((delegation, index) => (
                <DelegationRow
                  accountAddress={stakingRef.account.bech32Address}
                  client={client}
                  core={core}
                  delegation={delegation}
                  index={index}
                  key={index}
                  staking={staking}
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
                  unbondingsSortMethod === "amount-asc" ? "asc" : "desc",
                );

              case "completion-asc":
              case "completion-desc":
                return sortUtil(
                  a.completionTime,
                  b.completionTime,
                  unbondingsSortMethod === "completion-asc" ? "asc" : "desc",
                );

              default:
                unbondingsSortMethod satisfies "none";

                return 0;
            }
          });

          return (
            <div className={wrapperStyle}>
              <div className={headerStyle} style={gridStyle}>
                <div />
                <UnbondingHeaderTitle>Unstakings</UnbondingHeaderTitle>
                <UnbondingHeaderTitle
                  onSort={setUnbondingsSortMethod}
                  sort={unbondingsSortMethod}
                  sorting={["staked-asc", "staked-desc"]}
                >
                  <div className="text-right">Staked Amount</div>
                </UnbondingHeaderTitle>
                <UnbondingHeaderTitle>
                  <div className="text-right">Status</div>
                </UnbondingHeaderTitle>
                <UnbondingHeaderTitle
                  onSort={setUnbondingsSortMethod}
                  sort={unbondingsSortMethod}
                  sorting={["date-asc", "date-desc"]}
                >
                  <div className="text-right">Completion Time</div>
                </UnbondingHeaderTitle>
              </div>
              {sortedUnbondings.map((unbonding, index) => (
                <UnbondingRow
                  key={index}
                  staking={staking}
                  unbonding={unbonding}
                />
              ))}
            </div>
          );
        })()}
    </div>
  );
};

export default memo(DelegationDetails);
