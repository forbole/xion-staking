import type { Coin } from "@cosmjs/stargate";
import BigNumber from "bignumber.js";

import { normaliseCoin } from "./core/coins";

export const formatCoin = (coin: Coin) => {
  const resolved = normaliseCoin(coin);
  const amount = new BigNumber(resolved.amount);

  return `${amount.toFormat()} ${resolved.denom}`;
};

export const formatVotingPowerPerc = (perc: null | number) => {
  if (typeof perc !== "number" || Number.isNaN(perc)) {
    return null;
  }

  const percNum = perc < 0.0001 ? "<0.1" : (perc * 100).toFixed(1);

  return `${percNum}%`;
};

export const formatCommission = (commissionRate: string) => {
  const comission = new BigNumber(commissionRate)
    .div(new BigNumber(10).pow(18))
    .toNumber();

  return `${(comission * 100).toFixed(0)}%`;
};
