"use client";

import { BondStatus } from "cosmjs-types/cosmos/staking/v1beta1/staking";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getValidatorDetailsAction } from "../context/actions";
import { useStaking } from "../context/hooks";

export default function ValidatorPage() {
  const searchParams = useSearchParams();
  const address = searchParams.get("address");
  const stakingRef = useStaking();

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
      }
    })();
  }, [address, stakingRef]);

  if (!validatorDetails) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <div>{address}</div>
      <div>{validatorDetails.description.moniker}</div>
      <div>{validatorDetails.description.details}</div>
      <div>{validatorDetails.description.identity}</div>
      <div>{validatorDetails.description.securityContact}</div>
      <div>{validatorDetails.description.website}</div>
      <div>Jailed: {validatorDetails.jailed.toString()}</div>
      <div>
        Status:{" "}
        {validatorDetails.status === BondStatus.BOND_STATUS_BONDED
          ? "Bonded"
          : validatorDetails.status}
      </div>
    </div>
  );
}
