"use client";

import BigNumber from "bignumber.js";
import type { PropsWithChildren } from "react";

import { ButtonPill, NavLink } from "@/features/core/components/base";

import { useStaking } from "../context/hooks";
import { setModalOpened } from "../context/reducer";
import { getVotingPowerPerc, hasStakedInValidator } from "../context/selectors";
import type { StakingContextType, StakingState } from "../context/state";
import { useValidatorLogo } from "../hooks";
import { getXionCoinFromUXion } from "../lib/core/coins";
import { chevron } from "../lib/core/icons";
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
            {hasStakedInValidator(validator.operatorAddress, staking.state) && (
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

type Props = PropsWithChildren;

const HeaderTitle = ({ children }: Props) => (
  <div className="text-[14px] font-normal leading-[14px] tracking-wider">
    <span className="relative">
      {children}{" "}
      <div
        className="absolute right-[-16px] top-[6px] cursor-pointer"
        dangerouslySetInnerHTML={{ __html: chevron }}
      />
    </span>
  </div>
);

const ValidatorsTable = () => {
  const { staking } = useStaking();

  const { validators } = staking.state;

  if (!validators?.items.length) return null;

  return (
    <div className="overflow-hidden rounded-[24px] bg-bg-600 pb-4 text-typo-100">
      <div
        className="grid w-full items-center justify-between gap-2 bg-bg-500 p-4 uppercase"
        style={gridStyle}
      >
        <div />
        <HeaderTitle>Validator</HeaderTitle>
        <HeaderTitle>
          <div className="text-right">Staked Amount</div>
        </HeaderTitle>
        <HeaderTitle>
          <div className="text-right">Commission</div>
        </HeaderTitle>
        <HeaderTitle>
          <div className="text-right">Voting Power</div>
        </HeaderTitle>
      </div>
      {validators.items.map((validator) => (
        <ValidatorRow
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

export default ValidatorsTable;
