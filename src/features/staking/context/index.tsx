import type { Coin } from "@cosmjs/stargate";
import type { Validator } from "cosmjs-types/cosmos/staking/v1beta1/staking";
import type { Dispatch } from "react";
import { createContext } from "react";

import type { StakingAction } from "./reducer";

type Paginated<T> = {
  currentPage: number;
  items: T[];
} | null;

type Delegation = {
  balance: Coin;
  rewards: Coin;
  validatorAddress: string;
};

export type StakingState = {
  delegations: Paginated<Delegation>;
  tokens: Coin | null;
  validators: Paginated<Validator>;
};

export type StakingContextType = {
  dispatch: Dispatch<StakingAction>;
  state: StakingState;
};

export const defaultState: StakingState = {
  delegations: null,
  tokens: null,
  validators: null,
};

export const StakingContext = createContext<StakingContextType>({
  dispatch: () => null,
  state: defaultState,
});
