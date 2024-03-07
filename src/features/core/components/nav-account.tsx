"use client";

import {
  useAbstraxionAccount,
  useAbstraxionSigningClient,
  useModal,
} from "@burnt-labs/abstraxion";
import { Button } from "@burnt-labs/ui";

import { isTestnet } from "@/constants";

import { wallet } from "../lib/icons";
import { ButtonPill, FloatingDropdown } from "./base";

const Account = () => (
  <span className="flex flex-row items-center gap-[8px] rounded-[8px] bg-bg-600 px-[16px] py-[18px]">
    <span dangerouslySetInnerHTML={{ __html: wallet }} />
    <span className="font-bold">Account</span>{" "}
    <span className="rounded-[4px] bg-successBg p-[4px] text-[12px] uppercase text-success">
      {isTestnet ? "Testnet" : "Mainnet"}
    </span>
  </span>
);

const NavAccount = () => {
  const [, setShowAbstraxion] = useModal();
  const { isConnected } = useAbstraxionAccount();
  const { logout } = useAbstraxionSigningClient();

  return (
    <div className="cursor-pointer">
      {isConnected ? (
        <FloatingDropdown Trigger={Account} id="nav-account">
          <div className="flex items-center justify-center rounded-[16px] bg-bg-600 px-[24px] py-[12px]">
            <ButtonPill
              className="bg-transparent"
              onClick={() => {
                logout?.();
              }}
              variant="danger"
            >
              Log out
            </ButtonPill>
          </div>
        </FloatingDropdown>
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
