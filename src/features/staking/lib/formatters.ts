import type { Coin } from "@cosmjs/stargate";
import BigNumber from "bignumber.js";

import { minDisplayedXion, minDisplayedXionDecs, xionToUSD } from "@/constants";

import { getEmptyXionCoin, normaliseCoin } from "./core/coins";

export const formatCoin = (
  coin: Coin,
  compact?: boolean,
  noDenom?: boolean,
) => {
  const resolved = normaliseCoin(coin);
  const amount = new BigNumber(resolved.amount);
  const denomSuffix = noDenom ? "" : ` ${resolved.denom}`;

  if (amount.eq(0)) {
    return `${amount.toFormat()}${denomSuffix}`;
  }

  if (amount.lt(minDisplayedXion)) {
    return `<${minDisplayedXion}${denomSuffix}`;
  }

  if (compact) {
    const formatter = Intl.NumberFormat("en", {
      notation: "compact",
    });

    return `${formatter.format(amount.toNumber())}${denomSuffix}`;
  }

  return `${amount.toFormat(Math.min(minDisplayedXionDecs, amount.decimalPlaces() || Infinity))}${denomSuffix}`;
};

export const formatVotingPowerPerc = (perc: null | number) => {
  if (typeof perc !== "number" || Number.isNaN(perc)) {
    return null;
  }

  const percNum = perc < 0.0001 ? "<0.1" : (perc * 100).toFixed(1);

  return `${percNum}%`;
};

export const formatToSmallDisplay = (
  num: BigNumber,
  minNumber?: number,
  maxDecimals?: number,
) => {
  if (minNumber && num.lt(minNumber)) {
    return `<${minNumber}`;
  }

  if (maxDecimals) {
    return num.toFormat(Math.min(maxDecimals, num.decimalPlaces() || Infinity));
  }

  return Intl.NumberFormat("en", { notation: "compact" }).format(
    num.toNumber(),
  );
};

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

  const month = new Date(completionTimestamp).toLocaleString("en-US", {
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
