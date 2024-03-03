"use client";

import { useAbstraxionAccount, useModal } from "@burnt-labs/abstraxion";
import { Button } from "@burnt-labs/ui";

import { isTestnet } from "@/features/staking/lib/core/constants";
import { wallet } from "@/features/staking/lib/core/icons";

const NavAccount = () => {
  const [, setShowAbstraxion] = useModal();
  const { isConnected } = useAbstraxionAccount();

  return (
    <div className="cursor-pointer">
      {isConnected ? (
        <button
          className="flex flex-row items-center gap-[8px] rounded-[8px] bg-bg-600 px-[16px] py-[18px]"
          onClick={() => {
            setShowAbstraxion(true);
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: wallet }} />
          <span className="font-bold">Account</span>{" "}
          <span className="text-[10px] uppercase">
            {isTestnet ? "Testnet" : "Mainnet"}
          </span>
        </button>
      ) : (
        <Button
          onClick={() => {
            setShowAbstraxion(true);
          }}
        >
          Log in
        </Button>
      )}
    </div>
  );
};

export default NavAccount;
