import type { StakeAddresses } from "../lib/core/base";
import {
  claimRewards,
  getBalance,
  getDelegations,
  getPool,
  getRewards,
  getUnbondingDelegations,
  getValidatorDetails,
  getValidatorsList,
  setRedelegate,
  stakeAmount,
  unstakeAmount,
} from "../lib/core/base";
import type { AbstraxionSigningClient } from "../lib/core/client";
import { sumAllCoins } from "../lib/core/coins";
import {
  addDelegations,
  addUnbondings,
  setIsInfoLoading,
  setPool,
  setTokens,
  setValidatorDetails,
  setValidators,
} from "./reducer";
import type { StakingContextType, Unbonding } from "./state";

export const fetchStakingDataAction = async (
  address: string,
  staking: StakingContextType,
) => {
  try {
    staking.dispatch(setIsInfoLoading(true));

    const [balance, validators, pool, delegations, unbondings] =
      await Promise.all([
        getBalance(address),
        getValidatorsList(),
        getPool(),
        getDelegations(address).then(async (newDelegations) => ({
          items: await Promise.all(
            newDelegations.delegationResponses.map(async (del) => ({
              balance: del.balance,
              rewards: await getRewards(
                address,
                del.delegation.validatorAddress,
              ).then((rewards) => sumAllCoins(rewards)),
              validatorAddress: del.delegation.validatorAddress,
            })),
          ),
          pagination: newDelegations.pagination,
        })),
        getUnbondingDelegations(address)
          .then((unbondingResponse) => ({
            items: unbondingResponse.unbondingResponses.reduce((acc, res) => {
              acc.push(
                ...res.entries.map((entry) => ({
                  balance: { amount: entry.balance, denom: "uxion" },
                  completionTime: Number(entry.completionTime.seconds),
                  completionTimeNanos: entry.completionTime.nanos,
                  id: entry.unbondingId.toString(),
                  validator: res.validatorAddress,
                })),
              );

              return acc;
            }, [] as Unbonding[]),
            pagination: unbondingResponse.pagination,
          }))
          .catch(() =>
            // It is expected that this will throw when there are no unbondings
            ({ items: [], pagination: null }),
          )
          .then((result) => ({
            items: result.items,
            pagination: result.pagination,
          })),
      ]);

    staking.dispatch(setTokens(balance));

    staking.dispatch(
      setValidators(
        {
          items: validators.validators,
          nextKey: validators.pagination?.nextKey || null,
          total: validators.pagination?.total || null,
        },
        true,
      ),
    );

    staking.dispatch(
      addDelegations(
        {
          items: delegations.items,
          nextKey: delegations.pagination?.nextKey || null,
          total: delegations.pagination?.total || null,
        },
        true,
      ),
    );

    staking.dispatch(
      addUnbondings(
        {
          items: unbondings.items,
          nextKey: unbondings.pagination?.nextKey || null,
          total: unbondings.pagination?.total || null,
        },
        true,
      ),
    );

    staking.dispatch(setPool(pool));

    staking.dispatch(setIsInfoLoading(false));
  } catch (error) {
    console.error("error fetching staking data:", error);
  }
};

export const stakeValidatorAction = async (
  addresses: StakeAddresses,
  client: AbstraxionSigningClient,
  staking: StakingContextType,
) => {
  await stakeAmount(addresses, client, {
    amount: "1000",
    denom: "uxion",
  });

  await fetchStakingDataAction(addresses.delegator, staking);
};

export const unstakeValidatorAction = async (
  addresses: StakeAddresses,
  client: AbstraxionSigningClient,
  staking: StakingContextType,
) => {
  await unstakeAmount(addresses, client, {
    amount: "1000",
    denom: "uxion",
  });

  await fetchStakingDataAction(addresses.delegator, staking);
};

export const claimRewardsAction = async (
  addresses: StakeAddresses,
  client: AbstraxionSigningClient,
  staking: StakingContextType,
) => {
  await claimRewards(addresses, client);

  await fetchStakingDataAction(addresses.delegator, staking);
};

export const setRedelegateAction = async (
  delegatorAddress: string,
  client: AbstraxionSigningClient,
  staking: StakingContextType,
) => {
  await setRedelegate(delegatorAddress, client);

  await fetchStakingDataAction(delegatorAddress, staking);
};

export const getValidatorDetailsAction = async (
  validatorAddress: string,
  staking: StakingContextType,
) => {
  if (staking.state.validatorDetails?.operatorAddress === validatorAddress) {
    return staking.state.validatorDetails;
  }

  const details = await getValidatorDetails(validatorAddress);

  staking.dispatch(setValidatorDetails(details));

  return details;
};
