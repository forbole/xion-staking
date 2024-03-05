"use client";

import type { PropsWithChildren } from "react";
import { useReducer } from "react";

import { reducer } from "./reducer";
import { CoreContext, defaultState } from "./state";

export const CoreProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <CoreContext.Provider value={{ dispatch, state }}>
      {children}
    </CoreContext.Provider>
  );
};
