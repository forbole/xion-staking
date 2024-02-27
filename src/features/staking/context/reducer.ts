import type { StakingState } from ".";

export type StakingAction =
  | {
      content: NonNullable<StakingState["delegations"]>;
      type: "ADD_DELEGATIONS";
    }
  | {
      content: NonNullable<StakingState["validators"]>;
      type: "ADD_VALIDATORS";
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

export const setValidators = (
  validators: Content<"ADD_VALIDATORS">,
): StakingAction => ({
  content: validators,
  type: "ADD_VALIDATORS",
});

export const addDelegations = (
  delegations: Content<"ADD_DELEGATIONS">,
): StakingAction => ({
  content: delegations,
  type: "ADD_DELEGATIONS",
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

// @TODO
const getUniqueDelegations = (
  delegations: NonNullable<StakingState["delegations"]>["items"],
) => delegations;

export const reducer = (state: StakingState, action: StakingAction) => {
  switch (action.type) {
    case "SET_TOKENS":
      return { ...state, tokens: action.content };

    case "ADD_VALIDATORS": {
      const currentValidators = state.validators || {
        currentPage: 0,
        items: [],
      };

      currentValidators.currentPage += 1;

      currentValidators.items = getUniqueValidators(
        currentValidators.items.concat(action.content.items),
      );

      return {
        ...state,
        validators: currentValidators,
      };
    }

    case "ADD_DELEGATIONS": {
      const currentDelegations = state.delegations || {
        currentPage: 0,
        items: [],
      };

      currentDelegations.currentPage += 1;

      currentDelegations.items = getUniqueDelegations(
        currentDelegations.items.concat(action.content.items),
      );

      return {
        ...state,
        delegations: currentDelegations,
      };
    }

    default:
      action satisfies never;

      return state;
  }
};
