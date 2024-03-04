import { useAbstraxionAccount } from "@burnt-labs/abstraxion";
import { memo } from "react";

import {
  BodyMedium,
  ButtonPill,
  Heading2,
  Heading8,
  HeroText,
} from "@/features/core/components/base";

import { useStaking } from "../context/hooks";
import { getTotalDelegation, getTotalRewards } from "../context/selectors";
import { getEmptyXionCoin } from "../lib/core/coins";
import { basePath } from "../lib/core/constants";
import { getIsMinimumClaimable } from "../lib/core/tx";
import { formatCoin, formatXionToUSD } from "../lib/formatters";

const StakingOverview = () => {
  const { isConnected } = useAbstraxionAccount();
  const { staking } = useStaking();

  if (!isConnected) {
    return (
      <div
        className="flex min-h-[212px] flex-col items-center justify-center gap-[32px] uppercase"
        style={{
          backgroundImage: `url(${basePath}/overview-bg.png)`,
          borderRadius: 24,
        }}
      >
        <HeroText>Please Log In To View</HeroText>
        <div>Log In</div>
      </div>
    );
  }

  const totalDelegation =
    getTotalDelegation(staking.state) || getEmptyXionCoin();

  const totalRewards =
    getTotalRewards(null, staking.state) || getEmptyXionCoin();

  const availableDelegation = staking.state.tokens || getEmptyXionCoin();

  return (
    <div
      className="grid min-h-[144px] flex-col items-center justify-center gap-[32px]"
      style={{
        backgroundImage: `url(${basePath}/overview-bg.png)`,
        borderRadius: 24,
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      }}
    >
      <div className="flex h-full flex-col items-start gap-3 p-[24px]">
        <Heading8>Claimable Rewards</Heading8>
        <div className="flex flex-row items-center gap-4">
          <Heading2>{formatXionToUSD(totalRewards)}</Heading2>
          {getIsMinimumClaimable(totalRewards) && (
            <ButtonPill>Claim</ButtonPill>
          )}
        </div>
        <BodyMedium>{formatCoin(totalRewards)}</BodyMedium>
      </div>
      <div className="flex h-full flex-col items-start gap-3 p-[24px]">
        <Heading8>APR</Heading8>
        <Heading2>15.57%</Heading2>
      </div>
      <div className="flex h-full flex-col items-start gap-3 p-[24px]">
        <Heading8>Delegated Amount</Heading8>
        <Heading2>{formatXionToUSD(totalDelegation)}</Heading2>
        <BodyMedium>{formatCoin(totalDelegation)}</BodyMedium>
      </div>
      <div className="flex h-full flex-col items-start gap-3 p-[24px]">
        <Heading8>Available For Delegation</Heading8>
        <Heading2>{formatXionToUSD(availableDelegation)}</Heading2>
        <BodyMedium>{formatCoin(availableDelegation)}</BodyMedium>
      </div>
    </div>
  );
};

export default memo(StakingOverview);
