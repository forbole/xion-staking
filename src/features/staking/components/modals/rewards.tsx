import BigNumber from "bignumber.js";
import { memo, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { minClaimableXion } from "@/constants";
import { Button, HeroText } from "@/features/core/components/base";
import CommonModal, {
  ModalDescription,
} from "@/features/core/components/common-modal";

import { fetchUserDataAction } from "../../context/actions";
import { useStaking } from "../../context/hooks";
import { setModalOpened } from "../../context/reducer";
import { normaliseCoin } from "../../lib/core/coins";
import { claimRewards } from "../../lib/core/tx";

type Step = "completed" | "loading";

const initialStep: Step = "loading";

const claimRewardsLoop = async (
  stakingRef: ReturnType<typeof useStaking>,
  setStep: (step: Step) => void,
) => {
  const { client, staking } = stakingRef;
  const { modal } = staking.state;

  if (modal?.type !== "rewards") return;

  const { delegations } = modal?.content || {};

  if (!client || !delegations?.length) return;

  const delegatorAddress = stakingRef.account.bech32Address;

  delegations
    .reduce(async (promise, delegation) => {
      await promise;

      const normalised = normaliseCoin(delegation.rewards);

      if (new BigNumber(normalised.amount).lt(minClaimableXion)) {
        return;
      }

      const addresses = {
        delegator: delegatorAddress,
        validator: delegation.validatorAddress,
      };

      await claimRewards(addresses, client);
    }, Promise.resolve())
    .then(() => fetchUserDataAction(delegatorAddress, staking))
    .then(() => {
      setStep("completed");
    })
    .catch(() => {
      toast(
        "There was an unexpected error claiming your rewards. Please try again later.",
        {
          type: "error",
        },
      );
    });
};

const RewardsModal = () => {
  const stakingRef = useStaking();
  const [currentStep, setStep] = useState<Step>(initialStep);
  const requested = useRef(false);

  const { staking } = stakingRef;
  const { modal } = staking.state;

  const isOpen = modal?.type === "rewards";

  useEffect(() => {
    if (isOpen) {
      if (requested.current) return;

      requested.current = true;
      claimRewardsLoop(stakingRef, setStep);
    }
  }, [isOpen, stakingRef]);

  if (!isOpen) return null;

  const content = (() => {
    if (currentStep === "loading") {
      return (
        <div className="w-full text-center">
          <div className="mb-[35px] text-center uppercase">
            <HeroText>CLAIMING</HeroText>
          </div>
          <ModalDescription>
            Wait until your rewards are withdrawn.
          </ModalDescription>
          <Button className="mt-[25px]" isLoading />
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
            You have claimed your staking rewards successfully.
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
        if (currentStep === "loading") return;

        stakingRef.staking.dispatch(setModalOpened(null));
      }}
    >
      <div className="min-w-[90vw] md:min-w-[390px]">{content}</div>
    </CommonModal>
  );
};

export default memo(RewardsModal);
