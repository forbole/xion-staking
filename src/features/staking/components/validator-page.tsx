"use client";

import { Button } from "@burnt-labs/ui";
import BigNumber from "bignumber.js";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import {
  ClipboardCopy,
  Heading2,
  Heading8,
  NavLink,
} from "@/features/core/components/base";
import { useCore } from "@/features/core/context/hooks";

import { getValidatorDetailsAction } from "../context/actions";
import { useStaking } from "../context/hooks";
import { setModalOpened } from "../context/reducer";
import {
  getHasStakedInValidator,
  getTotalDelegation,
  getVotingPowerPerc,
} from "../context/selectors";
import { useValidatorLogo } from "../hooks";
import { getXionCoin, normaliseCoin } from "../lib/core/coins";
import { basePath, defaultAvatar } from "../lib/core/constants";
import {
  formatCommission,
  formatToSmallDisplay,
  formatVotingPowerPerc,
  formatXionToUSD,
} from "../lib/formatters";
import { DivisorHorizontal, DivisorVertical } from "./divisor";
import StakingModals from "./staking-modals";
import ValidatorDelegation from "./validator-delegation";

export default function ValidatorPage() {
  const searchParams = useSearchParams();
  const address = searchParams.get("address");
  const stakingRef = useStaking();
  const { core } = useCore();
  const { isLoadingBlocking } = core.state;

  const [validatorDetails, setValidatorDetails] = useState<Awaited<
    ReturnType<typeof getValidatorDetailsAction>
  > | null>(null);

  const logo = useValidatorLogo(validatorDetails?.description.identity);

  useEffect(() => {
    (async () => {
      if (address) {
        const validatorDetailsResult = await getValidatorDetailsAction(
          address,
          stakingRef.staking,
        );

        setValidatorDetails(validatorDetailsResult);
      }
    })();
  }, [address, stakingRef]);

  if (!validatorDetails) {
    return <div>Loading ...</div>;
  }

  const votingPowerPerc = getVotingPowerPerc(
    validatorDetails.tokens,
    stakingRef.staking.state,
  );

  const votingPowerPercStr = formatVotingPowerPerc(votingPowerPerc);

  const totalStakeBN = new BigNumber(validatorDetails.tokens).div(
    new BigNumber(10).pow(6),
  );

  const myDelegationToValidator = getTotalDelegation(
    stakingRef.staking.state,
    validatorDetails.operatorAddress,
  );

  const hasStakedInValidator = getHasStakedInValidator(
    validatorDetails.operatorAddress,
    stakingRef.staking.state,
  );

  return (
    <>
      <div className="page-container flex w-full flex-col gap-[16px] px-[16px] pb-[32px]">
        <div className="mb-[32px] mt-[40px]">
          <NavLink href="/">STAKING</NavLink> {"> "}
          <span>{validatorDetails.description.moniker}</span>
        </div>
        <div
          className="flex flex-col gap-[24px] p-[24px]"
          style={{
            backgroundImage: `url(${basePath}/overview-bg.png)`,
            backgroundSize: "cover",
            borderRadius: 16,
          }}
        >
          <div className="flex flex-row items-center gap-[16px]">
            <img
              alt="Validator logo"
              className="block w-[80px] rounded-full"
              src={logo || defaultAvatar}
            />
            <div className="flex flex-1 items-center gap-[16px]">
              <div className="typo-validator-name">
                {validatorDetails.description.moniker || ""}
              </div>
              {hasStakedInValidator && (
                <div className="rounded-[4px] bg-successBg px-[8px] py-[4px] text-[11px] text-success">
                  You staked
                </div>
              )}
            </div>
            <div>
              <Button
                disabled={!stakingRef.isConnected || isLoadingBlocking}
                onClick={() => {
                  stakingRef.staking.dispatch(
                    setModalOpened({
                      content: { validator: validatorDetails },
                      type: "delegate",
                    }),
                  );
                }}
              >
                DELEGATE NOW
              </Button>
            </div>
          </div>
          <DivisorHorizontal />
          <div className="grid grid-cols-4">
            <div className="relative">
              <Heading8>Total Stake (XION)</Heading8>
              <div className="mb-[8px] mt-[12px]">
                <Heading2>{formatToSmallDisplay(totalStakeBN)}</Heading2>
              </div>
              <Heading8>{formatXionToUSD(getXionCoin(totalStakeBN))}</Heading8>
              <div className="absolute bottom-0 right-[20px] top-0">
                <DivisorVertical />
              </div>
            </div>
            <div className="relative">
              <Heading8>Commission Rate</Heading8>
              <div className="mb-[8px] mt-[12px]">
                <Heading2>
                  {formatCommission(
                    validatorDetails.commission.commissionRates.rate,
                    2,
                  )}
                </Heading2>
              </div>
              <div className="absolute bottom-0 right-[20px] top-0">
                <DivisorVertical />
              </div>
            </div>
            <div className="relative">
              <Heading8>Voting Power</Heading8>
              <div className="mb-[8px] mt-[12px]">
                <Heading2>{votingPowerPercStr}</Heading2>
              </div>
              <div className="absolute bottom-0 right-[20px] top-0">
                <DivisorVertical />
              </div>
            </div>
            <div className="relative">
              <Heading8>My Delegation (XION)</Heading8>
              <div className="mb-[8px] mt-[12px]">
                <Heading2>
                  {myDelegationToValidator
                    ? formatToSmallDisplay(
                        new BigNumber(
                          normaliseCoin(myDelegationToValidator).amount,
                        ),
                      )
                    : "-"}
                </Heading2>
              </div>
              <Heading8>{formatXionToUSD(myDelegationToValidator)}</Heading8>
            </div>
          </div>
          <DivisorHorizontal />
          <div className="grid grid-cols-4">
            <div className="col-span-2">
              <Heading8 color="text-white">XION Address</Heading8>
              <div className="inline-flex flex-row gap-2 break-all">
                {validatorDetails.operatorAddress}{" "}
                <ClipboardCopy textToCopy={validatorDetails.operatorAddress} />
              </div>
            </div>
            {validatorDetails.description.website && (
              <div>
                <Heading8 color="text-white">Website</Heading8>
                <Link
                  href={validatorDetails.description.website}
                  target="_blank"
                >
                  {validatorDetails.description.website}
                </Link>
              </div>
            )}
            {validatorDetails.description.securityContact && (
              <div>
                <Heading8 color="text-white">Security Contact</Heading8>
                <Link
                  href={`mailto:${validatorDetails.description.securityContact}`}
                >
                  {validatorDetails.description.securityContact}
                </Link>
              </div>
            )}
          </div>
          <div>
            <Heading8 color="text-white">Details</Heading8>
            <div>
              <div>{validatorDetails.description.details}</div>
              <div>
                Max Commission Rate:{" "}
                {formatCommission(
                  validatorDetails.commission.commissionRates.maxRate,
                  0,
                )}
              </div>
              <div>
                Max commission Change Rate:{" "}
                {formatCommission(
                  validatorDetails.commission.commissionRates.maxChangeRate,
                  0,
                )}
              </div>
            </div>
          </div>
        </div>
        <ValidatorDelegation />
      </div>
      <StakingModals />
    </>
  );
}
