"use client";

import { useModal } from "@burnt-labs/abstraxion";
import BigNumber from "bignumber.js";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";



import { MIN_DISPLAYED_XION } from "@/constants";
import {
  BodyMedium,
  Button,
  ButtonPill,
  Heading2,
  Heading8,
  HeroText,
  Title,
} from "@/features/core/components/base";

import { getValidatorDetailsAction } from "../context/actions";
import { useStaking } from "../context/hooks";
import { setModalOpened } from "../context/reducer";
import {
  getCanClaimAnyRewards,
  getTokensAvailableBG,
  getTotalDelegation,
  getTotalRewards,
  getTotalUnbonding,
} from "../context/selectors";
import { getXionCoin } from "../lib/core/coins";
import { formatToSmallDisplay, formatXionToUSD } from "../lib/formatters";
import DelegationDetails, {
  DetailsTrigger,
  getCanShowDetails,
} from "./delegation-details";
import { DivisorHorizontal, DivisorVertical } from "./divisor";

const Divisor = () => (
  <>
    <div className="absolute bottom-0 right-[20px] top-0 hidden md:block">
      <DivisorVertical />
    </div>
    <div className="block w-full translate-y-[12px] md:hidden">
      <DivisorHorizontal />
    </div>
  </>
);

export default function ValidatorDelegation() {
  const searchParams = useSearchParams();
  const address = searchParams.get("address");
  const stakingRef = useStaking();
  const [, setShowAbstraxion] = useModal();
  const [isShowingDetails, setIsShowingDetails] = useState(true);

  const { isConnected, staking } = stakingRef;

  const [validatorDetails, setValidatorDetails] = useState<Awaited<
    ReturnType<typeof getValidatorDetailsAction>
  > | null>(null);

  useEffect(() => {
    (async () => {
      if (address) {
        const validatorDetailsResult = await getValidatorDetailsAction(
          address,
          staking,
        );

        setValidatorDetails(validatorDetailsResult);
      }
    })();
  }, [address, staking]);

  if (!validatorDetails) {
    return <div>Loading ...</div>;
  }

  const availableToStakeBN = getTokensAvailableBG(staking.state);

  const userTotalDelegation = getTotalDelegation(staking.state, null);

  const userTotalUnbondings = getTotalUnbonding(staking.state, null);

  const totalRewards = getTotalRewards(null, staking.state);

  const canShowDetail = getCanShowDetails(staking.state);
  const unbondings = staking.state.unbondings?.items || [];

  const content = !isConnected ? (
    <div className="flex h-[220px] min-w-[1000px] flex-col items-center justify-center gap-[32px] rounded-[24px] bg-bg-600 uppercase">
      <HeroText>Please log in to view</HeroText>
      <div>
        <Button
          className="[&]:min-w-[150px]"
          onClick={() => {
            setShowAbstraxion(true);
          }}
        >
          Log in
        </Button>
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-[32px] rounded-[24px] bg-bg-600 p-[24px] md:grid md:grid-cols-4 md:gap-0">
      <div className="relative">
        <Heading8>Claimable Rewards (XION)</Heading8>
        <div className="mb-[8px] mt-[12px] flex flex-row items-center gap-[8px]">
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-row flex-wrap items-center gap-[12px]">
              {totalRewards && (
                <Heading2 title={[totalRewards.amount, "XION"].join(" ")}>
                  {formatToSmallDisplay(
                    new BigNumber(totalRewards.amount),
                    MIN_DISPLAYED_XION,
                  )}
                </Heading2>
              )}
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
          </div>
        </div>
        <Divisor />
      </div>
      <div className="relative">
        <Heading8>My Delegation (XION)</Heading8>
        <div className="mb-[8px] mt-[12px]">
          {userTotalDelegation && (
            <Heading2>
              {formatToSmallDisplay(new BigNumber(userTotalDelegation.amount))}
            </Heading2>
          )}
        </div>
        <BodyMedium>{formatXionToUSD(userTotalDelegation)}</BodyMedium>
        <Divisor />
      </div>
      <div className="flex flex-row gap-[16px]">
        <div className="relative w-full">
          <Heading8>Available For Delegation (XION)</Heading8>
          <div className="mb-[8px] mt-[12px]">
            <Heading2>
              {availableToStakeBN
                ? formatToSmallDisplay(availableToStakeBN)
                : "-"}
            </Heading2>
          </div>
          <BodyMedium>
            {availableToStakeBN
              ? formatXionToUSD(getXionCoin(availableToStakeBN))
              : "-"}
          </BodyMedium>
          <Divisor />
        </div>
      </div>
      <div className="flex flex-row gap-[16px]">
        <div>
          <Heading8>Unstakings (XION)</Heading8>
          <div className="mb-[8px] mt-[12px]">
            <div className="flex flex-row items-center gap-[12px]">
              <Heading2>
                {userTotalUnbondings
                  ? formatToSmallDisplay(
                      new BigNumber(userTotalUnbondings.amount),
                    )
                  : "-"}
              </Heading2>
              {!!unbondings?.length && (
                <div className="flex h-full flex-row items-end justify-end text-right">
                  <span>
                    <ButtonPill
                      className="text-[14px]"
                      onClick={() => {
                        staking.dispatch(
                          setModalOpened({
                            content: {
                              unbondings,
                            },
                            type: "cancel-unstaking",
                          }),
                        );
                      }}
                      variant="danger"
                    >
                      Cancel Unstake
                    </ButtonPill>
                  </span>
                </div>
              )}
            </div>
          </div>
          <BodyMedium>
            {userTotalUnbondings ? formatXionToUSD(userTotalUnbondings) : "-"}
          </BodyMedium>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="mb-[24px] mt-[32px] flex flex-row items-center justify-between">
        <Title>My Delegations</Title>
        {canShowDetail && (
          <DetailsTrigger
            isShowingDetails={isShowingDetails}
            setIsShowingDetails={setIsShowingDetails}
          />
        )}
      </div>
      <div className="w-full overflow-auto">{content}</div>
      {canShowDetail && isShowingDetails && <DelegationDetails />}
    </>
  );
}