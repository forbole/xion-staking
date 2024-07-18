"use client";

import { AbstraxionProvider } from "@burnt-labs/abstraxion";
import "@burnt-labs/abstraxion/dist/index.css";
import "@burnt-labs/ui/dist/index.css";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FAUCET_CONTRACT_ADDRESS } from "@/config";
import BaseWrapper from "@/features/core/components/base-wrapper";
import { CoreProvider } from "@/features/core/context/provider";
import { StakingProvider } from "@/features/staking/context/provider";

import "./globals.css";
import { REST_URL, RPC_URL } from "@/constants";

const abstraxionConfig = {
  contracts: [FAUCET_CONTRACT_ADDRESS],
  restUrl: REST_URL,
  rpcUrl: RPC_URL,
  stake: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AbstraxionProvider config={abstraxionConfig}>
          <CoreProvider>
            <StakingProvider>
              <BaseWrapper>{children}</BaseWrapper>
              <Analytics />
            </StakingProvider>
          </CoreProvider>
        </AbstraxionProvider>
        <ToastContainer closeOnClick />
      </body>
    </html>
  );
}
