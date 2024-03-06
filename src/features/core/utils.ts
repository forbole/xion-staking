export const sortUtil = (a: unknown, b: unknown, sorting: "asc" | "desc") => {
  if (typeof a !== typeof b) {
    return 0;
  }

  if (typeof a === "string") {
    return sorting === "asc"
      ? a.localeCompare(b as string)
      : (b as string).localeCompare(a);
  }

  if (typeof a === "number") {
    if (Number.isNaN(a) || Number.isNaN(b as number)) {
      return 0;
    }

    return sorting === "asc" ? a - (b as number) : (b as number) - a;
  }

  return 0;
};
