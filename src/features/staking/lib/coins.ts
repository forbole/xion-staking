import type { Coin } from "@cosmjs/stargate";
import BigNumber from "bignumber.js";

const resolveCoin = (coin: Coin) => {
  if (coin.denom?.toUpperCase() === "UXION") {
    const num = new BigNumber(coin.amount);

    return {
      amount: num.div(new BigNumber(10).pow(6)).toString(),
      denom: "XION",
    };
  }

  if (coin.denom?.toUpperCase() === "XION") {
    return {
      amount: coin.amount,
      denom: "XION",
    };
  }

  return coin;
};

export const formatCoin = (coin: Coin) => {
  const resolved = resolveCoin(coin);
  const amount = new BigNumber(resolved.amount);

  return `${amount.toFormat()} ${resolved.denom}`;
};
