import { useAbstraxionAccount, useModal } from "@burnt-labs/abstraxion";
import { memo } from "react";

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
  getTotalDelegation,
  getTotalRewards,
} from "../context/selectors";
import { getEmptyXionCoin } from "../lib/core/coins";
import { basePath } from "../lib/core/constants";
import { getIsMinimumClaimable } from "../lib/core/tx";
import { formatAPR, formatCoin, formatXionToUSD } from "../lib/formatters";
import { DivisorVertical } from "./divisor";

const divisorStyle = "absolute bottom-[24px] right-[10px] top-[24px]";
const columnStyle = "relative flex h-full flex-col items-start gap-3 p-[24px]";

const StakingOverview = () => {
  const { isConnected } = useAbstraxionAccount();
  const { staking } = useStaking();
  const [, setShowAbstraxion] = useModal();

  if (!isConnected) {
    return (
      <div
        className="flex min-h-[212px] flex-col items-center justify-center gap-[32px] px-[12px] uppercase"
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

  const availableDelegation = staking.state.tokens || getEmptyXionCoin();

  return (
    <div
      className="grid min-h-[144px] flex-col items-center justify-center gap-[32px] overflow-auto"
      style={{
        backgroundImage: `url(${basePath}/overview-bg.png)`,
        borderRadius: 24,
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      }}
    >
      <div className={columnStyle}>
        <Heading8>Claimable Rewards</Heading8>
        <div className="flex flex-row items-center gap-4">
          <Heading2>{formatXionToUSD(totalRewards)}</Heading2>
          {getIsMinimumClaimable(totalRewards) && (
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
        <BodyMedium>{formatCoin(totalRewards)}</BodyMedium>
        <div className={divisorStyle}>
          <DivisorVertical />
        </div>
      </div>
      <div className={columnStyle}>
        <Heading8>APR</Heading8>
        <Heading2>{formatAPR(apr)}</Heading2>
        <div className={divisorStyle}>
          <DivisorVertical />
        </div>
      </div>
      <div className={columnStyle}>
        <Heading8>Delegated Amount</Heading8>
        <Heading2>{formatXionToUSD(totalDelegation)}</Heading2>
        <BodyMedium>{formatCoin(totalDelegation)}</BodyMedium>
        <div className={divisorStyle}>
          <DivisorVertical />
        </div>
      </div>
      <div className={columnStyle}>
        <Heading8>Available For Delegation</Heading8>
        <Heading2>{formatXionToUSD(availableDelegation)}</Heading2>
        <BodyMedium>{formatCoin(availableDelegation)}</BodyMedium>
      </div>
    </div>
  );
};

export default memo(StakingOverview);