import { useAbstraxionAccount } from "@burnt-labs/abstraxion";
import { memo, useCallback, useEffect, useState } from "react";

import { isTestnet } from "@/constants";
import { Button } from "@/features/core/components/base";
import { fetchUserDataAction } from "@/features/staking/context/actions";
import { normaliseCoin } from "@/features/staking/lib/core/coins";

import { useStaking } from "../context/hooks";
import type { AddressLastFaucetStatus } from "../lib/core/tx";
import { faucetFunds, getAddressLastFaucetTimestamp } from "../lib/core/tx";

const Faucet = () => {
  const { isConnected } = useAbstraxionAccount();
  const { address, client, staking } = useStaking();

  const [lastFaucetStatus, setLastFaucetStatus] =
    useState<AddressLastFaucetStatus>({
      canFaucet: false,
      denom: "",
      lastFaucetTimestamp: 0,
      maxBalance: 0,
      nextFaucetTimestamp: 0,
    });

  const [isFauceting, setIsFauceting] = useState(false);

  const updateFaucetStatus = useCallback(async () => {
    if (isConnected && address && client) {
      const result = await getAddressLastFaucetTimestamp(address, client);

      // We need to hide this when not on testnet.
      if (staking.state.tokens?.denom !== result.denom || !isTestnet) {
        return;
      }

      if (parseInt(staking.state.tokens?.amount) >= result.maxBalance) {
        setLastFaucetStatus({
          ...result,

          canFaucet: false,
        });
      } else {
        setLastFaucetStatus(result);
      }
    }
  }, [isConnected, address, client, staking.state.tokens]);

  useEffect(() => {
    updateFaucetStatus();
  }, [isConnected, address, client, updateFaucetStatus]);

  if (!isConnected || !lastFaucetStatus.canFaucet) {
    return null;
  }

  const normalizedFaucetInfo = normaliseCoin({
    amount: lastFaucetStatus.maxBalance.toString(),
    denom: lastFaucetStatus.denom,
  });

  return (
    <div
      className="grid min-h-[144px] flex-col items-center justify-center gap-[8px] overflow-auto"
      style={{
        gridTemplateColumns: "1fr",
      }}
    >
      {lastFaucetStatus.canFaucet && (
        <Button
          isLoading={isFauceting}
          onClick={async () => {
            if (!client) return;

            try {
              setIsFauceting(true);
              await faucetFunds(address, client);
            } catch (e) {
              console.error(e);
            } finally {
              await fetchUserDataAction(address, staking);
              setIsFauceting(false);
            }
          }}
        >
          Faucet {normalizedFaucetInfo.amount} {normalizedFaucetInfo.denom}
        </Button>
      )}
    </div>
  );
};

export default memo(Faucet);
