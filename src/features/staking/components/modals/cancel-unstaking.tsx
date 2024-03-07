import { memo, useState } from "react";
import { toast } from "react-toastify";

import { Button, HeroText } from "@/features/core/components/base";
import CommonModal, {
  ModalDescription,
} from "@/features/core/components/common-modal";

import { fetchUserDataAction } from "../../context/actions";
import { useStaking } from "../../context/hooks";
import { setModalOpened } from "../../context/reducer";
import { type StakeAddresses, cancelUnbonding } from "../../lib/core/tx";

type Step = "completed" | "confirm";

const initialStep: Step = "confirm";

const CancelUnstakingModal = () => {
  const stakingRef = useStaking();
  const [currentStep, setStep] = useState<Step>(initialStep);
  const [isLoading, setIsLoading] = useState(false);

  const { account, client, staking } = stakingRef;

  const { modal } = staking.state;

  const isOpen = modal?.type === "cancel-unstaking";

  if (!isOpen) return null;

  const { unbondings } = modal?.content || {};

  if (!unbondings?.length) return null;

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

              unbondings
                .reduce(async (promise, unbonding) => {
                  await promise;

                  const addresses: StakeAddresses = {
                    delegator: account.bech32Address,
                    validator: unbonding.validator,
                  };

                  await cancelUnbonding(addresses, unbonding, client);
                }, Promise.resolve())
                .then(() => {
                  // Don't await for this so the button can be enabled earlier
                  fetchUserDataAction(account.bech32Address, staking);

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
      <div className="min-w-[90vw] md:min-w-[390px]">{content}</div>
    </CommonModal>
  );
};

export default memo(CancelUnstakingModal);
