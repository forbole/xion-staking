import { useEffect, useState } from "react";

import { defaultAvatar } from "./lib/core/constants";
import { keybaseClient } from "./lib/utils/keybase-client";

export const useValidatorLogo = (identity?: string) => {
  const [logo, setLogo] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      if (identity) {
        const logoResponse = await keybaseClient.getIdentityLogo(identity);

        setLogo(logoResponse);
      }
    })();
  }, [identity]);

  return logo || defaultAvatar;
};
