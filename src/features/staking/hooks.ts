import type { NewBlockHeaderEvent } from "@cosmjs/tendermint-rpc/build/tendermint34/responses";
import { useEffect, useState } from "react";

import { subscribeToLastBlockHeader } from "./lib/core/base";

export const useSubscribeLastBlockHeader = () => {
  const [lastBlockHeader, setLastBlockHeader] =
    useState<NewBlockHeaderEvent | null>(null);

  useEffect(() => {
    let unsubscribe = () => {};
    let unmounted = false;

    subscribeToLastBlockHeader(
      (newLastBlockHeader) => {
        setLastBlockHeader(newLastBlockHeader);
      },
      (err: unknown) => {
        // eslint-disable-next-line no-console
        console.log("debug: hooks.ts: err", err);
      },
      () => {
        // eslint-disable-next-line no-console
        console.log("Subscription Completed");
        setLastBlockHeader(null);
      },
    ).then((fn) => {
      if (unmounted) {
        fn();
      } else {
        unsubscribe = fn;
      }
    });

    return () => {
      unsubscribe();
      unmounted = true;
    };
  }, []);

  return lastBlockHeader;
};
