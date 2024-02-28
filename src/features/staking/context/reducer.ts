import type { StakingState } from "./state";

export type StakingAction =
  | {
      content: NonNullable<StakingState["delegations"]>;
      reset: boolean;
      type: "ADD_DELEGATIONS";
    }
  | {
      content: NonNullable<StakingState["unbondings"]>;
      reset: boolean;
      type: "ADD_UNBONDINGS";
    }
  | {
      content: NonNullable<StakingState["validators"]>;
      reset: boolean;
      type: "ADD_VALIDATORS";
    }
  | {
      content: StakingState["isInfoLoading"];
      type: "SET_IS_INFO_LOADING";
    }
  | {
      content: StakingState["tokens"];
      type: "SET_TOKENS";
    };

type Content<T extends StakingAction["type"]> = Extract<
  StakingAction,
  { type: T }
>["content"];

export const setTokens = (tokens: Content<"SET_TOKENS">): StakingAction => ({
  content: tokens,
  type: "SET_TOKENS",
});

export const setIsInfoLoading = (
  isInfoLoading: Content<"SET_IS_INFO_LOADING">,
): StakingAction => ({
  content: isInfoLoading,
  type: "SET_IS_INFO_LOADING",
});

export const setValidators = (
  validators: Content<"ADD_VALIDATORS">,
  reset: boolean,
): StakingAction => ({
  content: validators,
  reset,
  type: "ADD_VALIDATORS",
});

export const addDelegations = (
  delegations: Content<"ADD_DELEGATIONS">,
  reset: boolean,
): StakingAction => ({
  content: delegations,
  reset,
  type: "ADD_DELEGATIONS",
});

export const addUnbondings = (
  unbondings: Content<"ADD_UNBONDINGS">,
  reset: boolean,
): StakingAction => ({
  content: unbondings,
  reset,
  type: "ADD_UNBONDINGS",
});

// Used for pagination
const getUniqueValidators = (
  validators: NonNullable<StakingState["validators"]>["items"],
) => {
  const validatorIds = new Set<string>();

  return validators.filter((validator) => {
    if (validatorIds.has(validator.operatorAddress)) {
      return false;
    }

    validatorIds.add(validator.operatorAddress);

    return true;
  });
};

const getUniqueDelegations = (
  delegations: NonNullable<StakingState["delegations"]>["items"],
) => {
  const validatorIds = new Set<string>();

  return delegations.filter((delegation) => {
    if (validatorIds.has(delegation.validatorAddress)) {
      return false;
    }

    validatorIds.add(delegation.validatorAddress);

    return true;
  });
};

const getUniqueUnbondings = (
  unbondings: NonNullable<StakingState["unbondings"]>["items"],
) => {
  const validatorIds = new Set<string>();

  return unbondings.filter((unbonding) => {
    const key = unbonding.id;

    if (validatorIds.has(key)) {
      return false;
    }

    validatorIds.add(key);

    return true;
  });
};

export const reducer = (state: StakingState, action: StakingAction) => {
  switch (action.type) {
    case "SET_TOKENS":
      return { ...state, tokens: action.content };

    case "ADD_VALIDATORS": {
      const currentValidators = (!action.reset && state.validators) || {
        items: [],
        nextKey: null,
        total: null,
      };

      currentValidators.total = action.content.total;
      currentValidators.nextKey = action.content.nextKey;

      currentValidators.items = getUniqueValidators(
        currentValidators.items.concat(action.content.items),
      );

      return {
        ...state,
        validators: currentValidators,
      };
    }

    case "ADD_DELEGATIONS": {
      const currentDelegations = (!action.reset && state.delegations) || {
        items: [],
        nextKey: null,
        total: null,
      };

      currentDelegations.total = action.content.total;
      currentDelegations.nextKey = action.content.nextKey;

      currentDelegations.items = getUniqueDelegations(
        action.content.items.concat(currentDelegations.items),
      );

      return {
        ...state,
        delegations: currentDelegations,
      };
    }

    case "ADD_UNBONDINGS": {
      const currentUnbondings = (!action.reset && state.unbondings) || {
        items: [],
        nextKey: null,
        total: null,
      };

      currentUnbondings.total = action.content.total;
      currentUnbondings.nextKey = action.content.nextKey;

      currentUnbondings.items = getUniqueUnbondings(
        action.content.items.concat(currentUnbondings.items),
      );

      return {
        ...state,
        unbondings: currentUnbondings,
      };
    }

    case "SET_IS_INFO_LOADING": {
      return {
        ...state,
        isInfoLoading: action.content,
      };
    }

    default:
      action satisfies never;

      return state;
  }
};