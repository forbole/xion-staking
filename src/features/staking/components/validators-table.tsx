"use client";

import BigNumber from "bignumber.js";
import { BondStatus } from "cosmjs-types/cosmos/staking/v1beta1/staking";
import { memo, useState } from "react";

import {
  ButtonPill,
  LoadingBanner,
  NavLink,
  SearchInput,
  TabButton,
  Title,
} from "@/features/core/components/base";
import { HeaderTitleBase } from "@/features/core/components/table";
import { sortUtil } from "@/features/core/utils";

import { useStaking } from "../context/hooks";
import { setModalOpened } from "../context/reducer";
import {
  getHasStakedInValidator,
  getVotingPowerPerc,
} from "../context/selectors";
import type { StakingContextType, StakingState } from "../context/state";
import { useValidatorLogo } from "../hooks";
import { getXionCoinFromUXion } from "../lib/core/coins";
import {
  formatCoin,
  formatCommission,
  formatVotingPowerPerc,
} from "../lib/formatters";
import AddressShort from "./address-short";
import TokenColors from "./token-colors";

const minGridWidth = 800;

const gridStyle = {
  gap: "16px",
  gridTemplateColumns: "350px repeat(3, 1fr) 80px 100px",
  minWidth: minGridWidth,
};

type ValidatorItemProps = {
  disabled?: boolean;
  onStake: (() => void) | null;
  staking: StakingContextType;
  validator: NonNullable<StakingState["validators"]["bonded"]>["items"][number];
};

const ValidatorRow = ({
  disabled,
  onStake,
  staking,
  validator,
}: ValidatorItemProps) => {
  const { identity } = validator.description;
  const logo = useValidatorLogo(identity);

  const votingPowerPerc = getVotingPowerPerc(validator?.tokens, staking.state);
  const votingPowerPercStr = formatVotingPowerPerc(votingPowerPerc);

  return (
    <div
      className="flex w-full flex-col items-center justify-between gap-0"
      style={{
        minWidth: minGridWidth,
      }}
    >
      <div
        className="grid w-full items-center justify-between gap-2 p-4"
        style={gridStyle}
      >
        <div className="flex flex-1 flex-row justify-start gap-4">
          <div className="flex items-center justify-start">
            <img
              alt="Validator logo"
              className="block w-[50px] rounded-full"
              src={logo}
              style={{ height: 50, minHeight: 50, minWidth: 50, width: 50 }}
            />
          </div>
          <div className="flex flex-col justify-start gap-2 text-left">
            <div className="max-w-[300px] overflow-hidden truncate text-[14px] font-bold leading-[20px]">
              {validator.description.moniker}
            </div>
            <AddressShort address={validator.operatorAddress} />
          </div>
          <div className="flex min-w-max flex-col items-center justify-center">
            {getHasStakedInValidator(
              validator.operatorAddress,
              staking.state,
            ) && (
              <div className="rounded-[2px] bg-successBg px-[8px] py-[2px] text-[11px] font-medium leading-[16px] tracking-normal text-success">
                You staked
              </div>
            )}
          </div>
        </div>
        <div className="text-right">
          <TokenColors
            text={formatCoin(
              getXionCoinFromUXion(new BigNumber(validator.tokens)),
              true,
            )}
          />
        </div>
        <div className="text-right">
          {formatCommission(validator.commission.commissionRates.rate, 2)}
        </div>
        {votingPowerPerc && (
          <div className="text-right">{votingPowerPercStr}</div>
        )}
        <div className="text-right">
          <NavLink href={`/validator?address=${validator.operatorAddress}`}>
            Details
          </NavLink>
        </div>
        {onStake && (
          <div>
            <ButtonPill disabled={disabled} onClick={onStake}>
              Delegate
            </ButtonPill>
          </div>
        )}
      </div>
      <div
        className="box-content h-[1px] bg-bg-500"
        style={{ width: "calc(100% - 48px)" }}
      />
    </div>
  );
};

type SortMethod =
  | "commission-asc"
  | "commission-desc"
  | "name-asc"
  | "name-desc"
  | "none"
  | "staked-asc"
  | "staked-desc"
  | "voting-power-asc"
  | "voting-power-desc";

const HeaderTitle = HeaderTitleBase<SortMethod>;

const ValidatorsTable = () => {
  const { isConnected, staking } = useStaking();
  const [sortMethod, setSortMethod] = useState<SortMethod>("none");
  const [currentTab, setCurrentTab] = useState<"active" | "inactive">("active");
  const [searchValue, setSearchValue] = useState<string>("");

  const { validators: validatorsObj } = staking.state;

  const activeValidators = validatorsObj.bonded?.items || [];

  const inactiveValidators = (validatorsObj.unbonded?.items || []).concat(
    validatorsObj.unbonding?.items || [],
  );

  const isInitialLoading =
    !staking.state.validators.bonded ||
    !staking.state.validators.unbonding ||
    !staking.state.validators.bonded;

  const validators =
    currentTab === "active" ? activeValidators : inactiveValidators;

  const sortedItems = validators
    .filter(
      currentTab === "active"
        ? (v) => v.status === BondStatus.BOND_STATUS_BONDED
        : (v) =>
            v.status ===
            (BondStatus.BOND_STATUS_UNBONDED ||
              BondStatus.BOND_STATUS_UNBONDING),
    )
    .slice()
    .sort((a, b) => {
      if (sortMethod === "none") return 0;

      if (["voting-power-asc", "voting-power-desc"].includes(sortMethod)) {
        const votingPowerA = getVotingPowerPerc(a.tokens, staking.state);
        const votingPowerB = getVotingPowerPerc(b.tokens, staking.state);

        return sortUtil(
          votingPowerA,
          votingPowerB,
          sortMethod === "voting-power-asc",
        );
      }

      if (["commission-asc", "commission-desc"].includes(sortMethod)) {
        const commissionA = parseFloat(a.commission.commissionRates.rate);
        const commissionB = parseFloat(b.commission.commissionRates.rate);

        return sortUtil(
          commissionA,
          commissionB,
          sortMethod === "commission-asc",
        );
      }

      if (["name-asc", "name-desc"].includes(sortMethod)) {
        const nameA = a.description.moniker.toLowerCase();
        const nameB = b.description.moniker.toLowerCase();

        return sortUtil(nameA, nameB, sortMethod === "name-asc");
      }

      if (["staked-asc", "staked-desc"].includes(sortMethod)) {
        const aTokens = new BigNumber(a.tokens);
        const bTokens = new BigNumber(b.tokens);

        return sortUtil(aTokens, bTokens, sortMethod === "staked-asc");
      }

      return 0;
    })
    .filter((validator) => {
      if (!searchValue) return true;

      const moniker = validator.description.moniker.toLowerCase();
      const operatorAddress = validator.operatorAddress.toLowerCase();

      return (
        moniker.includes(searchValue.toLowerCase()) ||
        operatorAddress.includes(searchValue.toLowerCase())
      );
    });

  return (
    <>
      <div className="flex flex-col  md:grid md:grid-cols-3">
        <div className="flex w-full flex-col justify-start gap-[32px] md:flex-row md:gap-[16px]">
          <Title>Validators</Title>
          <SearchInput
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </div>
        <div className="mt-[12px] flex flex-row items-center justify-center gap-[40px] uppercase md:mt-0">
          <TabButton
            active={currentTab === "active"}
            onClick={() => {
              setCurrentTab("active");
            }}
          >
            Active ({activeValidators.length})
          </TabButton>
          <TabButton
            active={currentTab === "inactive"}
            onClick={() => {
              setCurrentTab("inactive");
            }}
          >
            Inactive ({inactiveValidators.length})
          </TabButton>
        </div>
      </div>
      <div className="min-h-[100px] overflow-auto rounded-[24px] bg-bg-600 pb-4 text-typo-100">
        <div
          className="grid w-full items-center justify-between gap-2 bg-bg-500 p-4 uppercase"
          style={gridStyle}
        >
          <HeaderTitle
            onSort={setSortMethod}
            sort={sortMethod}
            sorting={["name-asc", "name-desc"]}
          >
            Validator
          </HeaderTitle>
          <HeaderTitle
            onSort={setSortMethod}
            rigthAlign
            sort={sortMethod}
            sorting={["staked-asc", "staked-desc"]}
          >
            <div className="text-right">Staked Amount</div>
          </HeaderTitle>
          <HeaderTitle
            onSort={setSortMethod}
            rigthAlign
            sort={sortMethod}
            sorting={["commission-asc", "commission-desc"]}
          >
            <div className="text-right">Commission</div>
          </HeaderTitle>
          <HeaderTitle
            onSort={setSortMethod}
            rigthAlign
            sort={sortMethod}
            sorting={["voting-power-asc", "voting-power-desc"]}
          >
            <div className="text-right">Voting Power</div>
          </HeaderTitle>
        </div>
        {isInitialLoading && <LoadingBanner />}
        {sortedItems.map((validator) => (
          <ValidatorRow
            disabled={!isConnected}
            key={validator.operatorAddress}
            onStake={
              currentTab === "active"
                ? () => {
                    staking.dispatch(
                      setModalOpened({
                        content: { validator },
                        type: "delegate",
                      }),
                    );
                  }
                : null
            }
            staking={staking}
            validator={validator}
          />
        ))}
      </div>
    </>
  );
};

export default memo(ValidatorsTable);
