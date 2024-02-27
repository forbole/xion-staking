"use client";

import type { PropsWithChildren } from "react";
import { useEffect, useReducer } from "react";

import { StakingContext, defaultState } from ".";
import { useStakingSync } from "./hooks";
import { reducer } from "./reducer";

export const Wrapper = ({ children }: PropsWithChildren) => {
  useStakingSync();

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

declare global {
  interface Window {
    stakingContext: {
      state: typeof defaultState;
    };
  }
}

export const StakingProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    window.stakingContext = { state };
  }, [state]);

  return (
    <StakingContext.Provider value={{ dispatch, state }}>
      <Wrapper>{children}</Wrapper>
    </StakingContext.Provider>
  );
};
