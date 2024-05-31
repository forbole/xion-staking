import { useAbstraxionAccount, useModal } from "@burnt-labs/abstraxion";
import BigNumber from "bignumber.js";
import { memo } from "react";

import { basePath } from "@/constants";
import {
  BodyMedium,
  Button,
  ButtonPill,
  Heading2,
  Heading8,
  HeroText,
} from "@/features/core/components/base";

import { useStaking } from "../context/hooks";
import { setModalOpened } from "../context/reducer";
import {
  getAPR,
  getCanClaimAnyRewards,
  getTotalDelegation,
  getTotalRewards,
} from "../context/selectors";
import { getEmptyXionCoin, normaliseCoin } from "../lib/core/coins";
import {
  formatAPR,
  formatCoin,
  formatToSmallDisplay,
  formatXionToUSD,
} from "../lib/formatters";
import { DivisorHorizontal, DivisorVertical } from "./divisor";

const columnStyle =
  "relative flex w-full h-full flex-col items-start gap-3 p-[24px]";

const Divisor = () => (
  <>
    <div className="absolute bottom-[24px] right-[-8px] top-[24px] hidden md:block">
      <DivisorVertical />
    </div>
    <div className="w-full translate-y-[24px] md:hidden">
      <DivisorHorizontal />
    </div>
  </>
);

const StakingOverview = () => {
  const { isConnected } = useAbstraxionAccount();
  const { staking } = useStaking();
  const [, setShowAbstraxion] = useModal();

  if (!isConnected) {
    return (
      <div
        className="flex min-h-[212px] flex-col items-center justify-center gap-[8px] px-[12px] uppercase"
        style={{
          backgroundImage: `url(${basePath}/overview-bg.png)`,
          borderRadius: 24,
        }}
      >
        <HeroText className="text-center">Please Log In To View</HeroText>
        <div>
          <Button
            className="min-w-[150px]"
            onClick={() => {
              setShowAbstraxion(true);
            }}
          >
            Log In
          </Button>
        </div>
      </div>
    );
  }

  const totalDelegation =
    getTotalDelegation(staking.state, null) || getEmptyXionCoin();

  const totalRewards =
    getTotalRewards(null, staking.state) || getEmptyXionCoin();

  const apr = getAPR(staking.state);

  const availableDelegation = staking.state.tokens
    ? normaliseCoin(staking.state.tokens)
    : getEmptyXionCoin();

  return (
    <div
      className="flex min-h-[144px] flex-col items-center justify-center gap-[8px] overflow-auto md:grid"
      style={{
        backgroundImage: `url(${basePath}/overview-bg.png)`,
        backgroundSize: "cover",
        borderRadius: 24,
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      }}
    >
      <div className={columnStyle}>
        <Heading8>Claimable Rewards (XION)</Heading8>
        <div className="flex flex-row flex-wrap items-center gap-4">
          <Heading2 title={[totalRewards.amount, "XION"].join(" ")}>
            {formatToSmallDisplay(new BigNumber(totalRewards.amount), 0.001, 3)}
          </Heading2>
          {getCanClaimAnyRewards(staking.state) && (
            <ButtonPill
              onClick={() => {
                staking.dispatch(
                  setModalOpened({
                    content: {
                      delegations: staking.state.delegations?.items || [],
                    },
                    type: "rewards",
                  }),
                );
              }}
            >
              Claim
            </ButtonPill>
          )}
        </div>
        <BodyMedium>{formatXionToUSD(totalRewards)}</BodyMedium>
        <Divisor />
      </div>
      <div className={columnStyle}>
        <Heading8>APR</Heading8>
        <Heading2>{formatAPR(apr)}</Heading2>
        <Divisor />
      </div>
      <div className={columnStyle}>
        <Heading8>Delegated Amount (XION)</Heading8>
        <Heading2 title={formatCoin(totalDelegation)}>
          {formatToSmallDisplay(
            new BigNumber(totalDelegation.amount),
            undefined,
            2,
          )}
        </Heading2>
        <BodyMedium>{formatXionToUSD(totalDelegation)}</BodyMedium>
        <Divisor />
      </div>
      <div className={columnStyle}>
        <Heading8>Available For Delegation (XION)</Heading8>
        <Heading2 title={formatCoin(availableDelegation)}>
          {formatToSmallDisplay(new BigNumber(availableDelegation.amount))}
        </Heading2>
        <BodyMedium>{formatXionToUSD(availableDelegation)}</BodyMedium>
      </div>
    </div>
  );
};

export default memo(StakingOverview);
