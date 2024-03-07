import { memo, useState } from "react";
import { toast } from "react-toastify";

import { Button, HeroText } from "@/features/core/components/base";
import CommonModal, {
  ModalDescription,
} from "@/features/core/components/common-modal";

import { cancelUnstakingAction } from "../../context/actions";
import { useStaking } from "../../context/hooks";
import { setModalOpened } from "../../context/reducer";
import type { StakeAddresses } from "../../lib/core/tx";

type Step = "completed" | "confirm";

const initialStep: Step = "confirm";

const CancelUnstakingModal = () => {
  const stakingRef = useStaking();
  const [currentStep, setStep] = useState<Step>(initialStep);
  const [isLoading, setIsLoading] = useState(false);

  const { account, client, staking } = stakingRef;

  const { modal } = staking.state;

  const isOpen = modal?.type === "cancel-staking";

  if (!isOpen) return null;

  const { unbonding } = modal?.content || {};

  if (!unbonding) return null;

  const content = (() => {
    if (currentStep === "confirm") {
      return (
        <div className="w-full text-center">
          <div className="mb-[35px] text-center uppercase">
            <HeroText>Are you sure?</HeroText>
          </div>
          <ModalDescription>
            We are currently completing the unstaking process.
            <br />
            Are you sure you want to cancel the process?
          </ModalDescription>
          <Button
            className="mt-[25px]"
            isLoading={isLoading}
            onClick={() => {
              if (!client) return;

              setIsLoading(true);

              const addresses: StakeAddresses = {
                delegator: account.bech32Address,
                validator: unbonding.validator,
              };

              cancelUnstakingAction(addresses, unbonding, client, staking)
                .then((fetchFn) => {
                  fetchFn();
                  setStep("completed");
                })
                .catch(() => {
                  toast(
                    "There was an unexpected error canceling your unstaking. Please try again later.",
                    {
                      type: "error",
                    },
                  );
                })
                .finally(() => {
                  setIsLoading(false);
                });
            }}
          >
            CONFIRM
          </Button>
        </div>
      );
    }

    return (
      <>
        <div className="text-center">
          <div className="mb-[35px] text-center uppercase">
            <HeroText>Success!</HeroText>
          </div>
          <ModalDescription>
            You have successfully cancel the unstaking process, and you are now
            contributing to the security of the XION network again.
          </ModalDescription>
        </div>
        <Button
          className="mt-[25px]"
          onClick={() => {
            stakingRef.staking.dispatch(setModalOpened(null));
          }}
        >
          CLOSE
        </Button>
      </>
    );
  })();

  return (
    <CommonModal
      isOpen={isOpen}
      onRequestClose={() => {
        if (isLoading) return;

        stakingRef.staking.dispatch(setModalOpened(null));
      }}
    >
      <div className="min-w-[390px]">{content}</div>
    </CommonModal>
  );
};

export default memo(CancelUnstakingModal);
