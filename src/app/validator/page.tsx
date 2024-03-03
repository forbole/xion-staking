import { Suspense } from "react";

import ValidatorPage from "@/features/staking/components/validator-page";

export default function Page() {
  return (
    <Suspense>
      <ValidatorPage />
    </Suspense>
  );
}
