import RedelegateModal from "@/features/staking/components/modals/redelegate";

import CancelUnstakingModal from "./modals/cancel-unstaking";
import RewardsModal from "./modals/rewards";
import StakingModal from "./modals/staking";
import UnstakingModal from "./modals/unstaking";

const StakingModals = () => (
  <>
    <StakingModal />
    <UnstakingModal />
    <RewardsModal />
    <CancelUnstakingModal />
    <RedelegateModal />
  </>
);

export default StakingModals;
