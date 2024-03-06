import BigNumber from "bignumber.js";

export const sortUtil = (a: unknown, b: unknown, isAsc: boolean) => {
  if (typeof a !== typeof b) {
    return 0;
  }

  if (typeof a === "string") {
    return isAsc
      ? a.localeCompare(b as string)
      : (b as string).localeCompare(a);
  }

  if (typeof a === "number") {
    if (Number.isNaN(a) || Number.isNaN(b as number)) {
      return 0;
    }

    return isAsc ? a - (b as number) : (b as number) - a;
  }

  if (a instanceof BigNumber && b instanceof BigNumber) {
    return isAsc ? a.minus(b).toNumber() : b.minus(a).toNumber();
  }

  return 0;
};
