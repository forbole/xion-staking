import type { Metadata } from "next";

import StakingPage from "@/features/staking/components/main-page";

export const metadata: Metadata = {
  title: "XION Staking",
};

export default function Page() {
  return <StakingPage />;
}
