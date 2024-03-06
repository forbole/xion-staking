"use client";

import { Abstraxion, useModal } from "@burnt-labs/abstraxion";
import Head from "next/head";
import Link from "next/link";

import { basePath } from "@/features/staking/lib/core/constants";

import NavAccount from "./nav-account";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [, setShowAbstraxion] = useModal();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Head>
        <title>XION Staking</title>
      </Head>
      <nav
        className="flex w-full flex-row"
        style={{ borderBottom: "1px solid #333" }}
      >
        <div className="page-container m-auto flex h-[80px] flex-row items-center justify-between px-[16px]">
          <div>
            <Link className="cursor-pointer" href="/">
              <img alt="Xion Logo" src={`${basePath}/xion-logo.svg`} />
            </Link>
          </div>
          <NavAccount />
        </div>
      </nav>
      {children}
      <Abstraxion
        onClose={() => {
          setShowAbstraxion(false);
        }}
      />
    </main>
  );
}
