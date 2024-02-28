import { useAbstraxionAccount } from "@burnt-labs/abstraxion";
import { useContext, useEffect, useRef } from "react";

import type { StakingContextType } from ".";
import { StakingContext } from ".";
import { fetchStakingDataAction } from "./actions";

export const useStaking = () => {
  const stakingRef = useRef<StakingContextType>({} as StakingContextType);
  const staking = useContext(StakingContext);

  // It is important to not override the `current` object reference so it
  // doesn't trigger more hooks than it should
  stakingRef.current.state = staking.state;
  stakingRef.current.dispatch = staking.dispatch;

  const { data: account } = useAbstraxionAccount();

  const address = account?.bech32Address;

  return {
    account,
    address,
    isLoggedIn: !!account?.bech32Address,
    staking: stakingRef.current,
  };
};

export const useStakingSync = () => {
  const { address, isLoggedIn, staking } = useStaking();

  useEffect(() => {
    if (isLoggedIn && address) {
      fetchStakingDataAction(address, staking);
    }
  }, [isLoggedIn, address, staking]);
};
