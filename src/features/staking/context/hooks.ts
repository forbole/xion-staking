import {
  useAbstraxionAccount,
  useAbstraxionSigningClient,
} from "@burnt-labs/abstraxion";
import { useContext, useEffect, useRef } from "react";

import { fetchStakingDataAction, fetchUserDataAction } from "./actions";
import { logout } from "./reducer";
import { StakingContext } from "./state";
import type { StakingContextType } from "./state";

let cachedClient: ReturnType<typeof useAbstraxionSigningClient>["client"];

export const useStaking = () => {
  const stakingRef = useRef<StakingContextType>({} as StakingContextType);
  const staking = useContext(StakingContext);

  // It is important to not override the `current` object reference so it
  // doesn't trigger more hooks than it should if it is added as a hook
  // dependency
  stakingRef.current.state = staking.state;
  stakingRef.current.dispatch = staking.dispatch;

  const { data: account, isConnected } = useAbstraxionAccount();

  const address = account?.bech32Address;

  return {
    account,
    address,
    client: isConnected ? cachedClient : undefined,
    isConnected,
    staking: stakingRef.current,
  };
};

export const useStakingSync = () => {
  const { client } = useAbstraxionSigningClient();

  const { address, isConnected, staking } = useStaking();

  cachedClient = isConnected ? client : undefined;

  useEffect(() => {
    fetchStakingDataAction(staking);
  }, [staking]);

  useEffect(() => {
    if (isConnected && address) {
      fetchUserDataAction(address, staking);

      return () => {
        staking.dispatch(logout());
      };
    }
  }, [isConnected, address, staking]);
};
