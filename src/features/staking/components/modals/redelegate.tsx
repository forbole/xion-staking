import type { SelectOption } from "@mui/base";
import { Option, Select } from "@mui/base";
import BigNumber from "bignumber.js";
import type { Validator } from "cosmjs-types/cosmos/staking/v1beta1/staking";
import type { FormEventHandler } from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { unbondingDays, xionToUSD } from "@/constants";
import {
  Button,
  FormError,
  Heading2,
  Heading8,
  HeroText,
  InputBox,
  OpenInput,
} from "@/features/core/components/base";
import CommonModal, {
  ModalDescription,
} from "@/features/core/components/common-modal";
import { ValidatorLogo } from "@/features/core/components/table";
import { chevron } from "@/features/core/lib/icons";
import AddressShort from "@/features/staking/components/address-short";
import { useValidatorLogo } from "@/features/staking/hooks";

import { redelegateAction } from "../../context/actions";
import { useStaking } from "../../context/hooks";
import { setModalOpened } from "../../context/reducer";
import { getTotalDelegation } from "../../context/selectors";
import { getXionCoin } from "../../lib/core/coins";
import {
  formatCoin,
  formatToSmallDisplay,
  formatXionToUSD,
} from "../../lib/formatters";

type Step = "completed" | "input" | "review";

const initialStep: Step = "input";

const ValidatorOption = ({
  validator: {
    description: { identity, moniker },
    operatorAddress,
  },
}: {
  validator: Validator;
}) => {
  const logo = useValidatorLogo(identity, operatorAddress);

  return (
    <Option value={operatorAddress}>
      <div className="flex cursor-pointer gap-2 bg-black py-2 pl-6 lg:min-w-[390px]">
        <ValidatorLogo height={24} logo={logo} width={24} />
        <span>{moniker}</span>
      </div>
    </Option>
  );
};

const NoValidatorSelected = () => (
  <div className="flex gap-2 bg-black">
    <ValidatorLogo logo={null} />
    <div className="flex flex-col items-start gap-1 bg-black p-2">
      <span>Select Validator</span>
      <span className="text-typo-200">XION Address</span>
    </div>
    <span
      className="ml-auto self-center"
      dangerouslySetInnerHTML={{ __html: chevron }}
    />
  </div>
);

const ValidatorSelected = ({ validator }: { validator: Validator }) => {
  const logo = useValidatorLogo(
    validator.description.identity,
    validator.operatorAddress,
  );

  return (
    <div className="flex gap-2 bg-black ">
      <ValidatorLogo logo={logo} />
      <div className="flex flex-col items-start gap-1 bg-black p-2">
        <span>{validator.description.moniker}</span>
        <AddressShort address={validator.operatorAddress} />
      </div>
      <span
        className="ml-auto self-center"
        dangerouslySetInnerHTML={{ __html: chevron }}
      />
    </div>
  );
};

const RedelegateModal = () => {
  const stakingRef = useStaking();
  const { client } = stakingRef;
  const [step, setStep] = useState<Step>(initialStep);
  const [isLoading, setIsLoading] = useState(false);

  const [formError, setFormError] = useState<
    Record<string, string | undefined>
  >({ amount: undefined, memo: undefined });

  const [dstValidator, setDstValidator] = useState<Validator>();
  const [amountXION, setAmount] = useState("");
  const [memo, setMemo] = useState("");

  const { account, staking } = stakingRef;
  const { modal } = staking.state;
  const isOpen = modal?.type === "redelegate";

  useEffect(
    () => () => {
      setStep(initialStep);
      setAmount("");
      setFormError({});
      setMemo("");
    },
    [isOpen],
  );

  const { validators: validatorsObj } = staking.state;

  const validators = [
    validatorsObj.bonded?.items,
    validatorsObj.unbonded?.items,
  ]
    .flat(1)
    .filter((v): v is Validator => !!v);

  const validatorsPerAddress = validators.reduce<Record<string, Validator>>(
    (acc, v) => ({
      ...acc,
      [v.operatorAddress]: v,
    }),
    {},
  );

  if (!isOpen) return null;

  const { validator } = modal?.content;

  if (!validator) return null;

  const amountXIONParsed = new BigNumber(amountXION);

  const amountUSD = (() => {
    if (amountXIONParsed.isNaN()) return "";

    return amountXIONParsed.times(xionToUSD);
  })();

  const delegatedTokens = getTotalDelegation(
    staking.state,
    validator.operatorAddress,
  );

  const validateAmount = () => {
    if (
      !amountUSD ||
      !delegatedTokens ||
      amountXIONParsed.lte(0) ||
      amountXIONParsed.gt(new BigNumber(delegatedTokens.amount))
    ) {
      setFormError({
        ...formError,
        amount: "Invalid amount",
      });

      return true;
    }
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e?.stopPropagation();
    e?.preventDefault();

    if (validateAmount()) return;

    if (!client || !amountXIONParsed.gt(0)) return;

    setStep("review");
  };

  return (
    <CommonModal
      isOpen={isOpen}
      onRequestClose={() => {
        if (isLoading) return;

        stakingRef.staking.dispatch(setModalOpened(null));
      }}
    >
      <div className="flex min-h-full min-w-[90vw] grow flex-col md:min-w-[390px]">
        {(() => {
          const getUnstakingSummary = () => (
            <>
              <div className="mb-[32px] mt-[32px] flex w-full flex-col items-center justify-center gap-[12px]">
                <Heading8>Redelegation Amount (XION)</Heading8>
                <Heading2>{formatToSmallDisplay(amountXIONParsed)}</Heading2>
                <Heading8>
                  {formatXionToUSD(getXionCoin(amountXIONParsed))}
                </Heading8>
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
                  <div className="mb-[35px] text-center uppercase">
                    <HeroText>SUCCESS!</HeroText>
                  </div>
                  <ModalDescription>
                    You have successfully redelegate from{" "}
                    {validator.description.moniker}
                    to {dstValidator?.description.moniker}
                  </ModalDescription>
                </div>
                {getUnstakingSummary()}
                <Button
                  className="mt-auto"
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
                  <div className="mb-[35px] text-center uppercase">
                    <HeroText>REVIEW</HeroText>
                  </div>
                  <ModalDescription>
                    You are about to redelegate your token from{" "}
                    {validator.description.moniker} to
                    {dstValidator?.description.moniker}. Remember, you will not
                    able to redelegate these token within {unbondingDays} days.
                  </ModalDescription>
                </div>
                {getUnstakingSummary()}
                <Button
                  className="mt-auto"
                  isLoading={isLoading}
                  onClick={() => {
                    if (!client || !dstValidator) return;

                    setIsLoading(true);

                    redelegateAction(
                      {
                        amount: getXionCoin(amountXIONParsed),
                        client,
                        delegatorAddress: account.bech32Address,
                        memo,
                        validatorDstAddress: dstValidator?.operatorAddress,
                        validatorSrcAddress: validator.operatorAddress,
                      },
                      staking,
                    )
                      .then((fetchDataFn) => {
                        setStep("completed");

                        return fetchDataFn();
                      })
                      .catch(() => {
                        toast("Redelegation error", { type: "error" });
                      })
                      .finally(() => setIsLoading(false));
                  }}
                >
                  PROCEED
                </Button>
              </>
            );
          }

          return (
            <>
              <div className="mb-[35px] text-center uppercase">
                <HeroText>
                  Redelegate From {validator.description.moniker}
                </HeroText>
              </div>
              <div className="mb-4 flex justify-between">
                <span>To</span>
                <div>
                  Available:{" "}
                  {!!delegatedTokens &&
                    formatCoin(delegatedTokens, undefined, true)}{" "}
                  <span className="opacity-40">XION</span>
                </div>
              </div>
              <Select
                className="w-full rounded-lg border border-white border-opacity-10 bg-black px-[20px] py-[20px]"
                id="validator"
                onChange={(_, validatorAddress) => {
                  if (!!validatorAddress) {
                    setDstValidator(validatorsPerAddress[validatorAddress]);
                  }
                }}
                renderValue={(option: null | SelectOption<string>) =>
                  option == null ? (
                    <NoValidatorSelected />
                  ) : (
                    <ValidatorSelected
                      validator={validatorsPerAddress[option.value]}
                    />
                  )
                }
              >
                <div className="max-h-96 overflow-x-visible overflow-y-scroll rounded-lg border border-white border-opacity-10 bg-black">
                  {Object.values(validators).map((v) => (
                    <ValidatorOption key={v.operatorAddress} validator={v} />
                  ))}
                </div>
              </Select>
              <div className="mt-[40px] flex w-full flex-row justify-between">
                <div>Amount</div>
                {!!amountUSD && (
                  <Heading8>=${formatToSmallDisplay(amountUSD)}</Heading8>
                )}
              </div>
              <form onSubmit={onSubmit}>
                <div className="mt-[8px]">
                  <InputBox
                    disabled={isLoading}
                    error={!!formError.amount}
                    onBlur={() => {
                      validateAmount();
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
                    <FormError>{formError.amount}</FormError>
                  )}
                </div>
                <div className="mt-[40px] w-full">
                  <OpenInput
                    className="placeholder:text-[#6C6A6A]"
                    disabled={isLoading}
                    onChange={(e) => {
                      setMemo(e.target.value);
                    }}
                    placeholder="Memo (Optional)"
                    value={memo}
                  />
                </div>
                <div className="mt-[48px] w-full">
                  <Button disabled={isLoading} type="submit">
                    Redelegate now
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

export default RedelegateModal;
