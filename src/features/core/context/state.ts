import type { Dispatch } from "react";
import { createContext } from "react";

import type { CoreAction } from "./reducer";

export type CoreState = {
  popupOpenId: null | string;
};

export type CoreContextType = {
  dispatch: Dispatch<CoreAction>;
  state: CoreState;
};

export const defaultState: CoreState = {
  popupOpenId: null,
};

export const CoreContext = createContext<CoreContextType>({
  dispatch: () => null,
  state: defaultState,
});
