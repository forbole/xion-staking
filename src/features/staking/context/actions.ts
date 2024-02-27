import type { StakingContextType } from ".";
import type { SigningClient, StakeAddresses } from "../lib/core";
import {
  getBalance,
  getDelegations,
  getValidatorsList,
  stakeAmount,
} from "../lib/core";
import { addDelegations, setTokens, setValidators } from "./reducer";

export const fetchStakingData = async (
  address: string,
  staking: StakingContextType,
) => {
  try {
    const [balance, validators, delegations] = await Promise.all([
      getBalance(address),
      getValidatorsList(),
      getDelegations(address),
    ]);

    staking.dispatch(setTokens(balance));

    staking.dispatch(
      setValidators({ currentPage: 0, items: validators.validators }),
    );

    staking.dispatch(
      addDelegations({
        currentPage: 0,
        items: delegations.delegationResponses.map((del) => ({
          amount: del.balance,
          validatorAddress: del.delegation.validatorAddress,
        })),
      }),
    );
  } catch (error) {
    console.error("error fetching staking data:", error);
  }
};

export const stakeValidator = async (
  addressess: StakeAddresses,
  client: SigningClient,
  staking: StakingContextType,
) => {
  await stakeAmount(addressess, client, {
    amount: "1000",
    denom: "uxion",
  });

  await fetchStakingData(addressess.delegator, staking);
};
