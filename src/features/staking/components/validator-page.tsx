"use client";

import BigNumber from "bignumber.js";
import { BondStatus } from "cosmjs-types/cosmos/staking/v1beta1/staking";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getValidatorDetailsAction } from "../context/actions";
import { useStaking } from "../context/hooks";
import { keybaseClient } from "../lib/utils/keybase-client";

export default function ValidatorPage() {
  const searchParams = useSearchParams();
  const address = searchParams.get("address");
  const stakingRef = useStaking();

  const { pool } = stakingRef.staking.state;

  const [logo, setLogo] = useState<null | string>(null);

  const [validatorDetails, setValidatorDetails] = useState<Awaited<
    ReturnType<typeof getValidatorDetailsAction>
  > | null>(null);

  useEffect(() => {
    (async () => {
      if (address) {
        const validatorDetailsResult = await getValidatorDetailsAction(
          address,
          stakingRef.staking,
        );

        setValidatorDetails(validatorDetailsResult);

        if (validatorDetailsResult?.description?.identity) {
          const logoResponse = await keybaseClient.getIdentityLogo(
            validatorDetailsResult.description.identity,
          );

          setLogo(logoResponse);
        }
      }
    })();
  }, [address, stakingRef]);

  if (!validatorDetails) {
    return <div>Loading ...</div>;
  }

  const parseCommissionRate = (commissionRate: string) => {
    const comission = new BigNumber(commissionRate)
      .div(new BigNumber(10).pow(18))
      .toNumber();

    return `${(comission * 100).toFixed(0)}%`;
  };

  const votingPowerPercentage = (() => {
    const validatorTokens = validatorDetails.tokens;

    if (!validatorTokens || typeof pool?.bondedTokens !== "string") {
      return null;
    }

    const perc = new BigNumber(validatorTokens)
      .div(new BigNumber(pool.bondedTokens))
      .toNumber();

    const percNum = perc < 0.0001 ? "<0.1" : (perc * 100).toFixed(1);

    return `${percNum}%`;
  })();

  return (
    <div>
      <div>{address}</div>
      {logo && (
        <div>
          <img alt="Validator logo" src={logo} />
        </div>
      )}
      <div>{validatorDetails.description.moniker}</div>
      <div>{validatorDetails.description.details}</div>
      <div>{validatorDetails.description.identity}</div>
      <div>{validatorDetails.description.securityContact}</div>
      <div>{validatorDetails.description.website}</div>
      <div>
        Commission:{" "}
        {parseCommissionRate(validatorDetails.commission.commissionRates.rate)}
      </div>
      <div>Jailed: {validatorDetails.jailed.toString()}</div>
      <div>
        Status:{" "}
        {validatorDetails.status === BondStatus.BOND_STATUS_BONDED
          ? "Bonded"
          : validatorDetails.status}
      </div>
      {votingPowerPercentage && (
        <div>Voting Power: {votingPowerPercentage}</div>
      )}
      <Link href="/">Back</Link>
    </div>
  );
}
