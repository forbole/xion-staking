"use client";

import { BondStatus } from "cosmjs-types/cosmos/staking/v1beta1/staking";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getValidatorDetailsAction } from "../context/actions";
import { useStaking } from "../context/hooks";
import { getVotingPowerPerc } from "../context/selectors";
import { formatCommission, formatVotingPowerPerc } from "../lib/formatters";
import { keybaseClient } from "../lib/utils/keybase-client";

export default function ValidatorPage() {
  const searchParams = useSearchParams();
  const address = searchParams.get("address");
  const stakingRef = useStaking();

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

  const votingPowerPerc = getVotingPowerPerc(
    validatorDetails.tokens,
    stakingRef.staking.state,
  );

  const votingPowerPercStr = formatVotingPowerPerc(votingPowerPerc);

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
        {formatCommission(validatorDetails.commission.commissionRates.rate)}
      </div>
      <div>
        Max commission:{" "}
        {formatCommission(validatorDetails.commission.commissionRates.maxRate)}
      </div>
      <div>
        Max commission change:{" "}
        {formatCommission(
          validatorDetails.commission.commissionRates.maxChangeRate,
        )}
      </div>
      <div>Jailed: {validatorDetails.jailed.toString()}</div>
      <div>
        Status:{" "}
        {validatorDetails.status === BondStatus.BOND_STATUS_BONDED
          ? "Bonded"
          : validatorDetails.status}
      </div>
      {votingPowerPercStr && <div>Voting Power: {votingPowerPercStr}</div>}
      <Link href="/">Back</Link>
    </div>
  );
}
