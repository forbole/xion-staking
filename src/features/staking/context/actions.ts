import type { StakingContextType } from ".";
import { normaliseCoin } from "../lib/coins";
import type { SigningClient, StakeAddresses } from "../lib/core";
import {
  getBalance,
  getDelegations,
  getRewards,
  getValidatorsList,
  stakeAmount,
  unstakeAmount,
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
      getDelegations(address).then((newDelegations) =>
        Promise.all(
          newDelegations.delegationResponses.map(async (del) => ({
            balance: del.balance,
            rewards: await getRewards(
              address,
              del.delegation.validatorAddress,
            ).then((rewards) =>
              rewards.reduce(
                (acc, reward) => ({
                  amount: (
                    parseFloat(acc.amount) +
                    parseFloat(normaliseCoin(reward).amount)
                  ).toString(),
                  denom: reward.denom,
                }),
                { amount: "0", denom: "xion" },
              ),
            ),
            validatorAddress: del.delegation.validatorAddress,
          })),
        ),
      ),
    ]);

    staking.dispatch(setTokens(balance));

    staking.dispatch(
      setValidators({ currentPage: 0, items: validators.validators }),
    );

    staking.dispatch(
      addDelegations({
        currentPage: 0,
        items: delegations,
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

export const unstakeValidator = async (
  addressess: StakeAddresses,
  client: SigningClient,
  staking: StakingContextType,
) => {
  await unstakeAmount(addressess, client, {
    amount: "1000",
    denom: "uxion",
  });

  await fetchStakingData(addressess.delegator, staking);
};
