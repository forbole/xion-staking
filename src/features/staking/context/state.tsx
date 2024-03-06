import type { Coin } from "@cosmjs/stargate";
import type {
  Pool,
  Validator,
} from "cosmjs-types/cosmos/staking/v1beta1/staking";
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

type ModalContent = {
  content: { delegations?: Delegation[]; validator?: Validator };
  type: "delegate" | "rewards" | "undelegate";
} | null;

export type ValidatorStatus = "bonded" | "unbonded" | "unbonding";

export type StakingState = {
  delegations: Paginated<Delegation>;
  extraValidators: Record<string, undefined | Validator>;
  inflation: null | string;
  isInfoLoading: boolean;
  modal: ModalContent | null;
  pool: null | Pool;
  tokens: Coin | null;
  unbondings: Paginated<Unbonding>;
  validatorDetails: null | Validator;
  validators: Record<ValidatorStatus, null | Paginated<Validator>>;
};

export type StakingContextType = {
  dispatch: Dispatch<StakingAction>;
  state: StakingState;
};

export const defaultState: StakingState = {
  delegations: null,
  extraValidators: {},
  inflation: null,
  isInfoLoading: false,
  modal: null,
  pool: null,
  tokens: null,
  unbondings: null,
  validatorDetails: null,
  validators: {
    bonded: null,
    unbonded: null,
    unbonding: null,
  },
};

export const StakingContext = createContext<StakingContextType>({
  dispatch: () => null,
  state: defaultState,
});
