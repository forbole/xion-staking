import { useContext, useRef } from "react";

import { CoreContext } from "./state";
import type { CoreContextType } from "./state";

export const useCore = () => {
  const coreRef = useRef<CoreContextType>({} as CoreContextType);
  const core = useContext(CoreContext);

  // It is important to not override the `current` object reference so it
  // doesn't trigger more hooks than it should if it is added as a hook
  // dependency
  coreRef.current.state = core.state;
  coreRef.current.dispatch = core.dispatch;

  return {
    core: coreRef.current,
  };
};
