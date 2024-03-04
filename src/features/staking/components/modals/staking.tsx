import { useAbstraxionSigningClient } from "@burnt-labs/abstraxion";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  Button,
  Heading2,
  Heading8,
  HeroText,
  InputBox,
  OpenInput,
} from "@/features/core/components/base";
import CommonModal from "@/features/core/components/common-modal";

import { stakeValidatorAction } from "../../context/actions";
import { useStaking } from "../../context/hooks";
import { setModalOpened } from "../../context/reducer";
import type { StakeAddresses } from "../../lib/core/tx";

const StakingModal = () => {
  const stakingRef = useStaking();
  const { client } = useAbstraxionSigningClient();
  const [step, setStep] = useState<"completed" | "input">("input");
  const [isLoading, setIsLoading] = useState(false);

  const { account, staking } = stakingRef;
  const { modal } = staking.state;
  const isOpen = modal?.type === "delegate";

  useEffect(
    () => () => {
      setStep("input");
    },
    [isOpen],
  );

  if (!isOpen) return null;

  const { validator } = modal?.content;

  const onStake = () => {
    if (!client) return;

    setIsLoading(true);

    const addresses: StakeAddresses = {
      delegator: account.bech32Address,
      validator: validator.operatorAddress,
    };

    stakeValidatorAction(addresses, client, staking)
      .then(() => {
        toast("Staking successful", {
          type: "success",
        });
      })
      .catch(() => {
        toast("Staking error", {
          type: "error",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
                You have successfully staked on {validator.description.moniker}.
                Thank you for contributing in securing the XION network.
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
          <div className="min-w-[390px]">
            <div className="text-center uppercase">
              <HeroText>Delegate To {validator.description.moniker}</HeroText>
            </div>
            <div className="mt-[40px] flex w-full flex-col items-center justify-center gap-[12px] uppercase">
              <Heading8>Available for delegation</Heading8>
              <Heading2>$240.00</Heading2>
              <Heading8>24 XION</Heading8>
            </div>
            <div className="mt-[40px] flex w-full flex-row justify-between">
              <div>Amount</div>
              <Heading8>=24 XION</Heading8>
            </div>
            <div className="mt-[8px]">
              <InputBox />
            </div>
            <div className="mt-[40px] w-full">
              <OpenInput placeholder="Memo (Optional)" />
            </div>
            <div className="mt-[48px] w-full">
              <Button disabled={isLoading} onClick={onStake}>
                Delegate Now
              </Button>
            </div>
          </div>
        );
      })()}
    </CommonModal>
  );
};

export default StakingModal;
