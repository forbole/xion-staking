"use client";

import BigNumber from "bignumber.js";
import { memo, useState } from "react";

import { ButtonPill, NavLink } from "@/features/core/components/base";
import { HeaderTitleBase } from "@/features/core/components/table";

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

const gridStyle = {
  gap: "16px",
  gridTemplateColumns: "60px 1.5fr repeat(3, 1fr) 80px 80px",
};

type ValidatorItemProps = {
  disabled?: boolean;
  onStake: () => void;
  staking: StakingContextType;
  validator: NonNullable<StakingState["validators"]>["items"][number];
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
    <div className="flex w-full flex-col items-center justify-between gap-2">
      <div
        className="grid w-full items-center justify-between gap-2 p-4"
        style={gridStyle}
      >
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
              {validator.description.moniker}
            </div>
            <AddressShort address={validator.operatorAddress} />
          </div>
          <div className="flex min-w-max flex-col items-center justify-center">
            {getHasStakedInValidator(
              validator.operatorAddress,
              staking.state,
            ) && (
              <div className="rounded-[2px] bg-successBg p-[2px] text-[11px] font-medium leading-[16px] tracking-normal text-success">
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
        <div>
          <ButtonPill disabled={disabled} onClick={onStake}>
            Delegate
          </ButtonPill>
        </div>
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

  const { validators } = staking.state;

  if (!validators?.items.length) return null;

  const sortedItems = validators.items.slice().sort((a, b) => {
    if (sortMethod === "none") return 0;

    if (["voting-power-asc", "voting-power-desc"].includes(sortMethod)) {
      const votingPowerA = getVotingPowerPerc(a.tokens, staking.state);
      const votingPowerB = getVotingPowerPerc(b.tokens, staking.state);

      if (!votingPowerA || !votingPowerB) return 0;

      return sortMethod === "voting-power-asc"
        ? votingPowerA - votingPowerB
        : votingPowerB - votingPowerA;
    }

    if (["commission-asc", "commission-desc"].includes(sortMethod)) {
      const commissionA = parseFloat(a.commission.commissionRates.rate);
      const commissionB = parseFloat(b.commission.commissionRates.rate);

      if (!commissionA || !commissionB) return 0;

      return sortMethod === "commission-asc"
        ? commissionA - commissionB
        : commissionB - commissionA;
    }

    if (["name-asc", "name-desc"].includes(sortMethod)) {
      const nameA = a.description.moniker.toLowerCase();
      const nameB = b.description.moniker.toLowerCase();

      if (!nameA || !nameB) return 0;

      return sortMethod === "name-asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    }

    if (["staked-asc", "staked-desc"].includes(sortMethod)) {
      const aTokens = new BigNumber(a.tokens);
      const bTokens = new BigNumber(b.tokens);

      return sortMethod === "staked-asc"
        ? aTokens.minus(bTokens).toNumber()
        : bTokens.minus(aTokens).toNumber();
    }

    return 0;
  });

  return (
    <div className="overflow-hidden rounded-[24px] bg-bg-600 pb-4 text-typo-100">
      <div
        className="grid w-full items-center justify-between gap-2 bg-bg-500 p-4 uppercase"
        style={gridStyle}
      >
        <div />
        <HeaderTitle
          onSort={setSortMethod}
          sort={sortMethod}
          sorting={["name-asc", "name-desc"]}
        >
          Validator
        </HeaderTitle>
        <HeaderTitle
          onSort={setSortMethod}
          sort={sortMethod}
          sorting={["staked-asc", "staked-desc"]}
        >
          <div className="text-right">Staked Amount</div>
        </HeaderTitle>
        <HeaderTitle
          onSort={setSortMethod}
          sort={sortMethod}
          sorting={["commission-asc", "commission-desc"]}
        >
          <div className="text-right">Commission</div>
        </HeaderTitle>
        <HeaderTitle
          onSort={setSortMethod}
          sort={sortMethod}
          sorting={["voting-power-asc", "voting-power-desc"]}
        >
          <div className="text-right">Voting Power</div>
        </HeaderTitle>
      </div>
      {sortedItems.map((validator) => (
        <ValidatorRow
          disabled={!isConnected}
          key={validator.operatorAddress}
          onStake={() => {
            staking.dispatch(
              setModalOpened({
                content: { validator },
                type: "delegate",
              }),
            );
          }}
          staking={staking}
          validator={validator}
        />
      ))}
    </div>
  );
};

export default memo(ValidatorsTable);
