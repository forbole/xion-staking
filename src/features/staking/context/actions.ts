import type { Coin } from "@cosmjs/stargate";

import {
  getBalance,
  getDelegations,
  getInflation,
  getPool,
  getRedelegation,
  getRewards,
  getUnbondingDelegations,
  getValidatorDetails,
  getValidatorsList,
} from "../lib/core/base";
import type { AbstraxionSigningClient } from "../lib/core/client";
import { sumAllCoins } from "../lib/core/coins";
import type { RedelegateParams, StakeAddresses } from "../lib/core/tx";
import { redelegate, stakeAmount, unstakeAmount } from "../lib/core/tx";
import {
  addDelegations,
  addRedelegations,
  addUnbondings,
  setExtraValidators,
  setInflation,
  setIsInfoLoading,
  setPool,
  setTokens,
  setValidatorDetails,
  setValidators,
} from "./reducer";
import { getAllValidators } from "./selectors";
import type { Redelegation, StakingContextType, Unbonding } from "./state";

export const fetchStakingDataAction = async (staking: StakingContextType) => {
  try {
    staking.dispatch(setIsInfoLoading(true));

    const [
      validatorsBonded,
      validatorsUnbonded,
      validatorsUnbonding,
      inflation,
      pool,
    ] = await Promise.all([
      getValidatorsList("BOND_STATUS_BONDED"),
      getValidatorsList("BOND_STATUS_UNBONDED"),
      getValidatorsList("BOND_STATUS_UNBONDING"),
      getInflation(),
      getPool(),
    ]);

    (
      [
        [validatorsBonded, "bonded"],
        [validatorsUnbonded, "unbonded"],
        [validatorsUnbonding, "unbonding"],
      ] as const
    ).forEach(([validators, status]) => {
      staking.dispatch(
        setValidators(
          {
            items: validators.validators,
            nextKey: validators.pagination?.nextKey || null,
            total: validators.pagination?.total || null,
          },
          true,
          status,
        ),
      );
    });

    staking.dispatch(setPool(pool));
    staking.dispatch(setInflation(inflation.toString()));

    staking.dispatch(setIsInfoLoading(false));
  } catch (error) {
    console.error("error fetching staking data:", error);
  }
};

export const fetchUserDataAction = async (
  address: string,
  staking: StakingContextType,
) => {
  try {
    staking.dispatch(setIsInfoLoading(true));

    const [balance, delegations, unbondings, redelegations] = await Promise.all(
      [
        getBalance(address),
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
                ...res.entries.map(
                  (entry) =>
                    ({
                      balance: { amount: entry.balance, denom: "uxion" },
                      completionTime: Number(entry.completionTime.seconds),
                      completionTimeNanos: entry.completionTime.nanos,
                      creationHeight: entry.creationHeight,
                      id: entry.unbondingId.toString(),
                      validator: res.validatorAddress,
                    }) satisfies Unbonding,
                ),
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
        getRedelegation(address)
          .then((redelegationsResponses) => ({
            items: redelegationsResponses.redelegationResponses
              .map((res) =>
                res.entries.map(
                  (entry): Redelegation => ({
                    balance: { amount: entry.balance, denom: "uxion" },
                    completionTime: Number(
                      entry.redelegationEntry.completionTime.seconds,
                    ),
                    completionTimeNanos:
                      entry.redelegationEntry.completionTime.nanos,
                    creationHeight: entry.redelegationEntry.creationHeight,
                    delegatorAddress: res.redelegation.delegatorAddress,
                    dstValidator: res.redelegation.validatorDstAddress,
                    id: entry.redelegationEntry.unbondingId.toString(),
                    srcValidator: res.redelegation.validatorSrcAddress,
                  }),
                ),
              )
              .flat(1),
            pagination: redelegationsResponses.pagination,
          }))
          .catch(() =>
            // It is expected that this will throw when there are no redeledations
            ({ items: [], pagination: null }),
          ),
      ],
    );

    staking.dispatch(setTokens(balance));

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

    staking.dispatch(
      addRedelegations(
        {
          items: redelegations.items,
          nextKey: redelegations.pagination?.nextKey || null,
          total: redelegations.pagination?.total || null,
        },
        true,
      ),
    );

    staking.dispatch(setIsInfoLoading(false));
  } catch (error) {
    console.error("error fetching staking data:", error);
  }
};

export const stakeValidatorAction = async (
  addresses: StakeAddresses,
  amount: Coin,
  memo: string,
  client: AbstraxionSigningClient,
  staking: StakingContextType,
) => {
  await stakeAmount(addresses, client, amount, memo);

  return async () => {
    await fetchUserDataAction(addresses.delegator, staking);
  };
};

export const unstakeValidatorAction = async (
  addresses: StakeAddresses,
  amount: Coin,
  memo: string,
  client: AbstraxionSigningClient,
  staking: StakingContextType,
) => {
  await unstakeAmount(addresses, client, amount, memo);

  return async () => {
    await fetchUserDataAction(addresses.delegator, staking);
  };
};

export const redelegateAction = async (
  redelegateParams: RedelegateParams,
  staking: StakingContextType,
) => {
  await redelegate(redelegateParams);

  return async () => {
    await fetchUserDataAction(redelegateParams.delegatorAddress, staking);
  };
};

export const getValidatorDetailsAction = async (
  validatorAddress: string,
  staking: StakingContextType,
) => {
  if (staking.state.validatorDetails?.operatorAddress === validatorAddress) {
    return staking.state.validatorDetails;
  }

  const details =
    getAllValidators(staking.state)[validatorAddress] ||
    (await getValidatorDetails(validatorAddress));

  staking.dispatch(setValidatorDetails(details));

  return details;
};

export const getAndSetValidatorAction = async (
  validatorAddress: string,
  staking: StakingContextType,
) => {
  const details = getAllValidators(staking.state)[validatorAddress];

  if (details) {
    return details;
  }

  const newDetails = await getValidatorDetails(validatorAddress);

  staking.dispatch(
    setExtraValidators({
      [validatorAddress]: newDetails,
      ...staking.state.extraValidators,
    }),
  );

  return newDetails;
};
