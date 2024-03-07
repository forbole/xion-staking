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
  </>
);

export default StakingModals;
