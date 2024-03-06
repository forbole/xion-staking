import type { Metadata } from "next";
import { Suspense } from "react";

import ValidatorPage from "@/features/staking/components/validator-page";

export const metadata: Metadata = {
  title: "XION Validator Details",
};

export default function Page() {
  return (
    <Suspense>
      <ValidatorPage />
    </Suspense>
  );
}
