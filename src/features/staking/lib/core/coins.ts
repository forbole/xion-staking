import type { Coin } from "@cosmjs/stargate";
import BigNumber from "bignumber.js";

export const normaliseCoin = (coin: Coin) => {
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

  return {
    ...coin,
    denom: coin.denom?.toUpperCase(),
  };
};

export const formatCoin = (coin: Coin) => {
  const resolved = normaliseCoin(coin);
  const amount = new BigNumber(resolved.amount);

  return `${amount.toFormat()} ${resolved.denom}`;
};

export const getEmptyXionCoin = () => ({ amount: "0", denom: "xion" });

export const sumAllCoins = (coins: Coin[]) =>
  coins.reduce(
    (acc, coin) => ({
      amount: (
        parseFloat(acc.amount) + parseFloat(normaliseCoin(coin).amount)
      ).toString(),
      denom: coin.denom,
    }),
    getEmptyXionCoin(),
  );
