"use client";

import { memo, useState } from "react";

import { Title } from "@/features/core/components/base";

import { useStaking } from "../context/hooks";
import DelegationDetails, {
  DetailsTrigger,
  getCanShowDetails,
} from "./delegation-details";
import Faucet from "./faucet";
import StakingModals from "./staking-modals";
import StakingOverview from "./staking-overview";
import ValidatorsTable from "./validators-table";

function StakingPage() {
  const { staking } = useStaking();
  const [isShowingDetails, setIsShowingDetails] = useState(false);

  const canShowDetail = getCanShowDetails(staking.state);

  return (
    <>
      <div className="page-container flex flex-col gap-6 px-[12px] pb-[24px] md:px-[24px]">
        <div className="mt-[40px] flex flex-row justify-between text-left">
          <Title>Your Staking Overview</Title>
          {canShowDetail && (
            <DetailsTrigger
              isShowingDetails={isShowingDetails}
              setIsShowingDetails={setIsShowingDetails}
            />
          )}
        </div>
        <Faucet />
        <StakingOverview />
        {isShowingDetails && canShowDetail && <DelegationDetails />}
        <ValidatorsTable />
      </div>
      <StakingModals />
    </>
  );
}

export default memo(StakingPage);
