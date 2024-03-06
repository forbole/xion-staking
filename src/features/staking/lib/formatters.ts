import type { Coin } from "@cosmjs/stargate";
import BigNumber from "bignumber.js";

import { getEmptyXionCoin, normaliseCoin } from "./core/coins";
import { xionToUSD } from "./core/constants";

export const formatCoin = (coin: Coin, compact?: boolean) => {
  const resolved = normaliseCoin(coin);
  const amount = new BigNumber(resolved.amount);

  if (amount.eq(0)) {
    return `${amount.toFormat()} ${resolved.denom}`;
  }

  const minDisplayed = 0.0001;

  if (amount.lt(minDisplayed)) {
    return `<${minDisplayed} ${resolved.denom}`;
  }

  if (compact) {
    const formatter = Intl.NumberFormat("en", {
      notation: "compact",
    });

    return `${formatter.format(amount.toNumber())} ${resolved.denom}`;
  }

  return `${amount.toFormat(4)} ${resolved.denom}`;
};

export const formatVotingPowerPerc = (perc: null | number) => {
  if (typeof perc !== "number" || Number.isNaN(perc)) {
    return null;
  }

  const percNum = perc < 0.0001 ? "<0.1" : (perc * 100).toFixed(1);

  return `${percNum}%`;
};

export const formatToSmallDisplay = (num: BigNumber) =>
  Intl.NumberFormat("en", { notation: "compact" }).format(num.toNumber());

export const formatCommission = (commissionRate: string, decimals: number) => {
  const comission = new BigNumber(commissionRate)
    .div(new BigNumber(10).pow(18))
    .toNumber();

  return `${(comission * 100).toFixed(decimals)}%`;
};

export const formatXionToUSD = (coin: Coin | null, compact?: boolean) => {
  const normalised = normaliseCoin(coin || getEmptyXionCoin());
  const value = coin ? new BigNumber(normalised.amount) : new BigNumber(0);
  const usd = value.times(xionToUSD);

  if (usd.eq(0)) {
    return "$0";
  }

  if (!compact && usd.lt(0.01)) {
    return "<$0.01";
  }

  return `$${compact ? formatToSmallDisplay(usd) : usd.toFormat(2)}`;
};

export const formatUnbondingCompletionTime = (completionTime: number) => {
  const completionTimestamp = completionTime * 1000;

  const remainingDays = Math.floor(
    (completionTimestamp - Date.now()) / (1000 * 60 * 60 * 24),
  );

  const month = new Date(completionTimestamp).toLocaleString("default", {
    month: "short",
  });

  const day = new Date(completionTimestamp).getDate();
  const year = new Date(completionTimestamp).getFullYear();

  return `in ${remainingDays} day${remainingDays === 1 ? "" : "s"}, ${month} ${day} ${year}`;
};

export const formatAPR = (apr: BigNumber | null) => {
  if (!apr) {
    return "-";
  }

  return `${apr.times(100).toFixed(2)}%`;
};
