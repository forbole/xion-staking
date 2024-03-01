"use client";

import { Button } from "@burnt-labs/ui";
import Link from "next/link";
import { memo, useEffect, useState } from "react";

import { getVotingPowerPerc } from "../context/selectors";
import type { StakingContextType, StakingState } from "../context/state";
import { formatVotingPowerPerc } from "../lib/formatters";
import { keybaseClient } from "../lib/utils/keybase-client";

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
  const { website } = validator.description;
  const [logo, setLogo] = useState<null | string>(null);

  const { identity } = validator.description;

  useEffect(() => {
    (async () => {
      if (identity) {
        const logoResponse = await keybaseClient.getIdentityLogo(identity);

        setLogo(logoResponse);
      }
    })();
  }, [identity]);

  const votingPowerPerc = getVotingPowerPerc(validator?.tokens, staking.state);
  const votingPowerPercStr = formatVotingPowerPerc(votingPowerPerc);

  return (
    <div style={{ border: "solid 1px white", marginBottom: 10 }}>
      {logo && (
        <div>
          <img
            alt="Validator logo"
            src={logo}
            style={{ height: 50, width: 50 }}
          />
        </div>
      )}
      <Link href={`/validator?address=${validator.operatorAddress}`}>
        <div>
          <b>{validator.description.moniker}</b>
        </div>
        <div>{validator.operatorAddress}</div>
      </Link>
      {votingPowerPerc && <div>Voting power: {votingPowerPercStr}</div>}
      <div>
        <Button disabled={disabled} onClick={onStake} structure="naked">
          Stake here
        </Button>
      </div>
      {website && (
        <div>
          <Link href={website} target="_blank">
            {website}
          </Link>
        </div>
      )}
    </div>
  );
};

export default memo(ValidatorRow);
