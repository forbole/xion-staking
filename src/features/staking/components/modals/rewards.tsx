import { Button } from "@/features/core/components/base";
import CommonModal from "@/features/core/components/common-modal";

import { useStaking } from "../../context/hooks";
import { setModalOpened } from "../../context/reducer";

const RewardsModal = () => {
  const stakingRef = useStaking();

  const { staking } = stakingRef;
  const { modal } = staking.state;

  const isOpen = modal?.type === "rewards";

  if (!isOpen) return null;

  return (
    <CommonModal
      isOpen={isOpen}
      onRequestClose={() => {
        stakingRef.staking.dispatch(setModalOpened(null));
      }}
    >
      <div>Success!</div>
      <div>You have claimed your staking rewards successfully.</div>
      <Button>CLOSE</Button>
    </CommonModal>
  );
};

export default RewardsModal;
