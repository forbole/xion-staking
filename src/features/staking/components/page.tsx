"use client";

import { Abstraxion, useModal } from "@burnt-labs/abstraxion";

import { useStaking } from "../context/hooks";
import LoggedIn from "./logged-in";
import LoggedOut from "./logged-out";

export default function StakingPage() {
  const { isLoggedIn } = useStaking();
  const [showAbstraction, setShowAbstraxion] = useModal();

  return (
    <main className="m-auto flex min-h-screen max-w-xs flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold tracking-tighter text-black dark:text-white">
        XION Staking
      </h1>
      {isLoggedIn ? <LoggedIn /> : <LoggedOut />}
      {showAbstraction && (
        <Abstraxion
          onClose={() => {
            setShowAbstraxion(false);
          }}
        />
      )}
    </main>
  );
}
