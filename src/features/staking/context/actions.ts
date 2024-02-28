import type { StakingContextType, Unbonding } from ".";
import type { SigningClient, StakeAddresses } from "../lib/core/base";
import {
  getBalance,
  getDelegations,
  getRewards,
  getUnbondingDelegations,
  getValidatorsList,
  stakeAmount,
  unstakeAmount,
} from "../lib/core/base";
import { sumAllCoins } from "../lib/core/coins";
import {
  addDelegations,
  addUnbondings,
  setTokens,
  setValidators,
} from "./reducer";

export const fetchStakingData = async (
  address: string,
  staking: StakingContextType,
) => {
  try {
    const [balance, validators, delegations, unbondings] = await Promise.all([
      getBalance(address),
      getValidatorsList(),
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
  const result = await unstakeAmount(addressess, client, {
    amount: "1000",
    denom: "uxion",
  });

  // eslint-disable-next-line no-console
  console.log("debug: actions.ts: result", result);

  await fetchStakingData(addressess.delegator, staking);
};
