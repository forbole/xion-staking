import { Button } from "@burnt-labs/ui";
import { useEffect, useState } from "react";

import CommonModal from "@/features/core/components/common-modal";

import { useStaking } from "../../context/hooks";
import { setModalOpened } from "../../context/reducer";

const StakingModal = () => {
  const stakingRef = useStaking();
  const [step, setStep] = useState<"completed" | "input">("input");

  const isOpen = stakingRef.staking.state.modalOpened === "delegate";

  useEffect(
    () => () => {
      setStep("input");
    },
    [isOpen],
  );

  if (!isOpen) return null;

  // @TODO
  const validatorName = "ValidatorName";

  return (
    <CommonModal
      isOpen={isOpen}
      onRequestClose={() => {
        stakingRef.staking.dispatch(setModalOpened(null));
      }}
    >
      {(() => {
        if (step === "completed") {
          return (
            <>
              <div>CONGRATS!</div>
              <div>
                You have successfully staked on {validatorName}. Thank you for
                contributing in securing the XION network.
              </div>
              <Button
                onClick={() => {
                  stakingRef.staking.dispatch(setModalOpened(null));
                }}
              >
                Awesome
              </Button>
            </>
          );
        }

        return (
          <>
            <div className="uppercase">Delegate To {validatorName}</div>
            <div className="uppercase">Available for delegation</div>
            <div>$240.00</div>
            <div>24 XION</div>
            <div>Amount</div>
            <div>
              <input />
            </div>
            <div>Memo (Optional)</div>
            <div>
              <input />
            </div>
            <div>
              <Button>Delegate Now</Button>
            </div>
          </>
        );
      })()}
    </CommonModal>
  );
};

export default StakingModal;
