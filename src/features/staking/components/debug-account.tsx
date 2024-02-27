import { Button } from "@burnt-labs/ui";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import Link from "next/link";
import { useEffect, useState } from "react";

import { chainId } from "../lib/constants";

const DebugAccount = () => {
  const [address, setAddress] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      const debugAccountObj = localStorage.getItem("xion-authz-temp-account");

      if (!debugAccountObj) return;

      const fullAccount = await DirectSecp256k1HdWallet.deserialize(
        debugAccountObj,
        "abstraxion",
      );

      const accounts = await fullAccount.getAccounts();
      const newAddress = accounts?.[0]?.address;

      if (!newAddress) return;

      setAddress(newAddress);
    })();
  }, []);

  if (!address) return null;

  return (
    <Link
      href={`https://explorer.burnt.com/${chainId}/account/${address}`}
      target="_blank"
    >
      <Button onClick={() => {}}>DEBUG ACCOUNT</Button>
    </Link>
  );
};

export default DebugAccount;
