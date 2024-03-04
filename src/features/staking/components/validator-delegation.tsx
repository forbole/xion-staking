"use client";

import { useAbstraxionSigningClient, useModal } from "@burnt-labs/abstraxion";
import BigNumber from "bignumber.js";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Button,
  ButtonPill,
  Heading2,
  Heading8,
  HeroText,
  Title,
} from "@/features/core/components/base";

import {
  claimRewardsAction,
  getValidatorDetailsAction,
} from "../context/actions";
import { useStaking } from "../context/hooks";
import { setModalOpened } from "../context/reducer";
import {
  getTokensAvailableBG,
  getTotalDelegation,
  getTotalRewards,
} from "../context/selectors";
import { getXionCoin } from "../lib/core/coins";
import { formatToSmallDisplay, formatXionToUSD } from "../lib/formatters";
import { DivisorVertical } from "./divisor";

export default function ValidatorDelegation() {
  const searchParams = useSearchParams();
  const address = searchParams.get("address");
  const stakingRef = useStaking();
  const [, setShowAbstraxion] = useModal();

  const { isConnected, staking } = stakingRef;

  const [validatorDetails, setValidatorDetails] = useState<Awaited<
    ReturnType<typeof getValidatorDetailsAction>
  > | null>(null);

  const { client } = useAbstraxionSigningClient();

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

  const availableToStakeBN = getTokensAvailableBG(stakingRef.staking.state);

  const userTotalDelegation = getTotalDelegation(
    stakingRef.staking.state,
    null,
  );

  const userDelegationToValidator = getTotalDelegation(
    stakingRef.staking.state,
    validatorDetails.operatorAddress,
  );

  const totalRewards = getTotalRewards(
    validatorDetails.operatorAddress,
    stakingRef.staking.state,
  );

  const content = !isConnected ? (
    <div className="flex h-[220px] flex-col items-center justify-center gap-[32px] rounded-[24px] bg-bg-600 uppercase">
      <HeroText>Please log in to view</HeroText>
      <Button
        onClick={() => {
          setShowAbstraxion(true);
        }}
      >
        Log in
      </Button>
    </div>
  ) : (
    <div className="grid grid-cols-4 rounded-[24px] bg-bg-600 p-[24px]">
      <div className="relative">
        <Heading8>Claimable Rewards</Heading8>
        <div className="mb-[8px] mt-[12px] flex flex-row items-center gap-[8px]">
          <Heading2>{formatXionToUSD(totalRewards)}</Heading2>
          {totalRewards && totalRewards?.amount !== "0" && (
            <ButtonPill
              onClick={() => {
                if (!client) return;

                const addresses = {
                  delegator: stakingRef.account.bech32Address,
                  validator: validatorDetails.operatorAddress,
                };

                claimRewardsAction(addresses, client, stakingRef.staking);
              }}
            >
              Claim
            </ButtonPill>
          )}
        </div>
        <div className="absolute bottom-0 right-[20px] top-0">
          <DivisorVertical />
        </div>
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
        <Heading8>{formatXionToUSD(userTotalDelegation)}</Heading8>
        <div className="absolute bottom-0 right-[20px] top-0">
          <DivisorVertical />
        </div>
      </div>
      <div className="col-span-2 flex flex-row gap-[16px]">
        <div>
          <Heading8>Available For Delegation (XION)</Heading8>
          <div className="mb-[8px] mt-[12px]">
            <Heading2>
              {availableToStakeBN
                ? formatToSmallDisplay(availableToStakeBN)
                : "-"}
            </Heading2>
          </div>
          <Heading8>
            {availableToStakeBN
              ? formatXionToUSD(getXionCoin(availableToStakeBN))
              : "-"}
          </Heading8>
        </div>
        <div className="flex h-full flex-row items-end gap-[16px]">
          <div>
            <Button
              disabled={!stakingRef.isConnected}
              onClick={() => {
                staking.dispatch(
                  setModalOpened({
                    content: { validator: validatorDetails },
                    type: "delegate",
                  }),
                );
              }}
              variant="success"
            >
              Delegate
            </Button>
          </div>
          <div>
            <Button
              disabled={
                !stakingRef.isConnected ||
                !userDelegationToValidator ||
                userDelegationToValidator?.amount === "0"
              }
              onClick={() => {
                staking.dispatch(
                  setModalOpened({
                    content: { validator: validatorDetails },
                    type: "undelegate",
                  }),
                );
              }}
              variant="danger"
            >
              Unstake
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="mb-[24px] mt-[32px]">
        <Title>My Delegations</Title>
      </div>
      {content}
    </>
  );
}
