"use client";

import { Abstraxion, useModal } from "@burnt-labs/abstraxion";

import { useStaking } from "../context/hooks";
import LoggedIn from "./logged-in";
import LoggedOut from "./logged-out";

export default function StakingPage() {
  const { isConnected } = useStaking();
  const [showAbstraction, setShowAbstraxion] = useModal();

  return (
    <>
      {isConnected ? <LoggedIn /> : <LoggedOut />}
      {showAbstraction && (
        <Abstraxion
          onClose={() => {
            setShowAbstraxion(false);
          }}
        />
      )}
    </>
  );
}
