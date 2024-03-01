"use client";

import { AbstraxionProvider } from "@burnt-labs/abstraxion";
import "@burnt-labs/abstraxion/dist/index.css";
import "@burnt-labs/ui/dist/index.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BaseWrapper from "@/features/core/components/base-wrapper";
import { StakingProvider } from "@/features/staking/context/provider";
import {
  dashboardUrl,
  rpcEndpoint,
} from "@/features/staking/lib/core/constants";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const abstraxionConfig = {
  contracts: [],
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
      <body className={inter.className}>
        <AbstraxionProvider config={abstraxionConfig}>
          <StakingProvider>
            <BaseWrapper>{children}</BaseWrapper>
          </StakingProvider>
        </AbstraxionProvider>
        <ToastContainer closeOnClick />
      </body>
    </html>
  );
}
