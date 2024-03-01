const logosMap: Record<string, Promise<null | string> | undefined> = {};

const getIdentityLogo = (identity: string) => {
  if (logosMap[identity]) return logosMap[identity];

  const promise = fetch(
    `https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=${identity}`,
  )
    .then((r) => r.json())
    .then((id) => {
      const url = id?.them?.[0]?.pictures?.primary?.url;

      return url || null;
    })
    .catch(() => null);

  logosMap[identity] = promise;

  return promise;
};

export const keybaseClient = {
  getIdentityLogo,
};
