"use client";

import { memo } from "react";

import { Title } from "@/features/core/components/base";

import StakingModals from "./staking-modals";
import StakingOverview from "./staking-overview";
import ValidatorsTable from "./validators-table";

function StakingPage() {
  return (
    <>
      <div className="page-container flex flex-col gap-6 px-[24px] pb-[24px]">
        <div className="mt-[40px] text-left">
          <Title>Your Staking Overview</Title>
        </div>
        <StakingOverview />
        <Title>Validators</Title>
        <ValidatorsTable />
      </div>
      <StakingModals />
    </>
  );
}

export default memo(StakingPage);
