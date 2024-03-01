"use client";

import {
  Abstraxion,
  useAbstraxionAccount,
  useModal,
} from "@burnt-labs/abstraxion";

import LoggedOut from "./logged-out";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isConnected } = useAbstraxionAccount();
  const [showAbstraction, setShowAbstraxion] = useModal();

  return (
    <main className="m-auto flex min-h-screen max-w-xs flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold tracking-tighter text-black dark:text-white">
        XION Staking
      </h1>
      {isConnected ? children : <LoggedOut />}
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
