"use client";

import { AbstraxionProvider } from "@burnt-labs/abstraxion";
import "@burnt-labs/abstraxion/dist/index.css";
import "@burnt-labs/ui/dist/index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { dashboardUrl, faucetContractAddress, rpcEndpoint } from "@/constants";
import BaseWrapper from "@/features/core/components/base-wrapper";
import { CoreProvider } from "@/features/core/context/provider";
import { StakingProvider } from "@/features/staking/context/provider";

import "./globals.css";

const abstraxionConfig = {
  contracts: [
    faucetContractAddress
  ],
  dashboardUrl,
  rpcUrl: rpcEndpoint,
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
            </StakingProvider>
          </CoreProvider>
        </AbstraxionProvider>
        <ToastContainer closeOnClick />
      </body>
    </html>
  );
}
