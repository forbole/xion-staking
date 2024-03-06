import BigNumber from "bignumber.js";
import type { FormEventHandler } from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  Button,
  FormError,
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
import { getTokensAvailableBG } from "../../context/selectors";
import { getXionCoin } from "../../lib/core/coins";
import { xionToUSD } from "../../lib/core/constants";
import type { StakeAddresses } from "../../lib/core/tx";
import { formatToSmallDisplay } from "../../lib/formatters";

type Step = "completed" | "input" | "review";

const initialStep: Step = "input";

const StakingModal = () => {
  const stakingRef = useStaking();
  const { client } = stakingRef;
  const [step, setStep] = useState<Step>(initialStep);
  const [isLoading, setIsLoading] = useState(false);

  const [amountXION, setAmount] = useState("");
  const [memo, setMemo] = useState("");

  const [formError, setFormError] = useState<
    Record<string, string | undefined>
  >({ amount: undefined, memo: undefined });

  const { account, staking } = stakingRef;
  const { modal } = staking.state;
  const isOpen = modal?.type === "delegate";

  useEffect(
    () => () => {
      setStep(initialStep);
      setFormError({});
      setAmount("");
      setMemo("");
    },
    [isOpen],
  );

  if (!isOpen) return null;

  const { validator } = modal?.content;

  const amountXIONParsed = new BigNumber(amountXION);

  const amountUSD = (() => {
    if (amountXIONParsed.isNaN()) return "";

    return amountXIONParsed.times(xionToUSD);
  })();

  const hasErrors = Object.values(formError).some((v) => !!v);

  const availableTokens = getTokensAvailableBG(staking.state);

  return (
    <CommonModal
      isOpen={isOpen}
      onRequestClose={() => {
        if (isLoading) return;

        stakingRef.staking.dispatch(setModalOpened(null));
      }}
    >
      <div className="min-w-[390px]">
        {(() => {
          const getStakingSummary = () => (
            <>
              <div className="mb-[32px] mt-[32px] flex w-full flex-col items-center justify-center gap-[12px]">
                <Heading8>Staked Amount (XION)</Heading8>
                <Heading2>{amountXIONParsed.toString()}</Heading2>
                {amountUSD && (
                  <Heading8>${formatToSmallDisplay(amountUSD)}</Heading8>
                )}
              </div>
              {!!memo && (
                <div className="mb-[32px] text-center italic">
                  <div>{memo}</div>
                </div>
              )}
            </>
          );

          if (step === "completed") {
            return (
              <>
                <div className="text-center">
                  <div className="mb-[16px]">
                    <HeroText>SUCCESS!</HeroText>
                  </div>
                  <div>
                    You have successfully staked on{" "}
                    {validator.description.moniker}. Thank you for contributing
                    in securing the XION network.
                  </div>
                </div>
                {getStakingSummary()}
                <Button
                  disabled={isLoading}
                  onClick={() => {
                    stakingRef.staking.dispatch(setModalOpened(null));
                  }}
                >
                  CLOSE
                </Button>
              </>
            );
          }

          if (step === "review") {
            return (
              <>
                <div className="text-center">
                  <div className="mb-[16px]">
                    <HeroText>REVIEW</HeroText>
                  </div>
                  <div>
                    Get ready to stake your XION token with{" "}
                    {validator.description.moniker}. Press 'Confirm' to proceed.
                  </div>
                </div>
                {getStakingSummary()}
                <Button
                  isLoading={isLoading}
                  onClick={() => {
                    if (!client) return;

                    setIsLoading(true);

                    const addresses: StakeAddresses = {
                      delegator: account.bech32Address,
                      validator: validator.operatorAddress,
                    };

                    stakeValidatorAction(
                      addresses,
                      getXionCoin(amountXIONParsed),
                      memo,
                      client,
                      staking,
                    )
                      .then((fetchDataFn) => {
                        setStep("completed");

                        return fetchDataFn();
                      })
                      .catch(() => {
                        toast("Staking error", {
                          type: "error",
                        });
                      })
                      .finally(() => {
                        setIsLoading(false);
                      });
                  }}
                >
                  CONFIRM
                </Button>
              </>
            );
          }

          const getHasAmountError = () =>
            !amountUSD ||
            !availableTokens ||
            amountXIONParsed.isNaN() ||
            amountXIONParsed.gt(availableTokens);

          const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
            e?.stopPropagation();
            e?.preventDefault();

            if (
              !client ||
              hasErrors ||
              getHasAmountError() ||
              amountXIONParsed.lt(0)
            )
              return;

            setStep("review");
          };

          return (
            <>
              <div className="text-center uppercase">
                <HeroText>Delegate To {validator.description.moniker}</HeroText>
              </div>
              {availableTokens &&
                (() => {
                  const availableUSD = availableTokens.times(xionToUSD);

                  return (
                    <div className="mt-[40px] flex w-full flex-col items-center justify-center gap-[12px] uppercase">
                      <Heading8>Available for delegation (XION)</Heading8>
                      <Heading2>
                        {formatToSmallDisplay(availableTokens)}
                      </Heading2>
                      <Heading8>${formatToSmallDisplay(availableUSD)}</Heading8>
                    </div>
                  );
                })()}
              <div className="mt-[40px] flex w-full flex-row justify-between">
                <div>Amount</div>
                {!!amountUSD && (
                  <Heading8>= ${formatToSmallDisplay(amountUSD)}</Heading8>
                )}
              </div>
              <form onSubmit={onSubmit}>
                <div className="mt-[8px]">
                  <InputBox
                    disabled={isLoading}
                    error={!!formError.amount}
                    onBlur={() => {
                      if (getHasAmountError()) {
                        setFormError({
                          ...formError,
                          amount: "Invalid amount",
                        });
                      }
                    }}
                    onChange={(e) => {
                      if (formError.amount) {
                        setFormError({ ...formError, amount: undefined });
                      }

                      setAmount(e.target.value);
                    }}
                    value={amountXION}
                  />
                  {formError.amount && (
                    <div>
                      <FormError>{formError.amount}</FormError>
                    </div>
                  )}
                </div>
                <div className="mt-[40px] w-full">
                  <OpenInput
                    disabled={isLoading}
                    onChange={(e) => {
                      setMemo(e.target.value);
                    }}
                    placeholder="Memo (Optional)"
                    value={memo}
                  />
                </div>
                <div className="mt-[48px] w-full">
                  <Button disabled={isLoading || hasErrors} type="submit">
                    Delegate Now
                  </Button>
                </div>
              </form>
            </>
          );
        })()}
      </div>
    </CommonModal>
  );
};

export default StakingModal;
