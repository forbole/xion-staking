import type { Coin } from "@cosmjs/stargate";
import type { Validator } from "cosmjs-types/cosmos/staking/v1beta1/staking";
import type { Dispatch } from "react";
import { createContext } from "react";

import type { StakingAction } from "./reducer";

type Paginated<T> = {
  items: T[];
  nextKey: null | Uint8Array;
  total: bigint | null;
} | null;

export type Unbonding = {
  balance: Coin;
  completionTime: number;
  completionTimeNanos: number;
  id: string;
  validator: string;
};

type Delegation = {
  balance: Coin;
  rewards: Coin;
  validatorAddress: string;
};

export type StakingState = {
  delegations: Paginated<Delegation>;
  isInfoLoading: boolean;
  tokens: Coin | null;
  unbondings: Paginated<Unbonding>;
  validatorDetails: null | Validator;
  validators: Paginated<Validator>;
};

export type StakingContextType = {
  dispatch: Dispatch<StakingAction>;
  state: StakingState;
};

export const defaultState: StakingState = {
  delegations: null,
  isInfoLoading: false,
  tokens: null,
  unbondings: null,
  validatorDetails: null,
  validators: null,
};

export const StakingContext = createContext<StakingContextType>({
  dispatch: () => null,
  state: defaultState,
});
