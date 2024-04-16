import { useEffect, useState } from "react";

import { basePath, defaultAvatar } from "@/constants";

import { keybaseClient } from "./lib/utils/keybase-client";

const fallbackLogoMap: Record<string, string | undefined> = {
  xionvaloper1mq85keggvh67m37035mnncsqjnpkmunl6s2w56: "/chains/bonus-block.png",
  xionvaloper1sprpvyqln2vxshq8c5jt3dshn480rfeelupqrj: "/chains/inf-stones.png",
  xionvaloper1t4yes7c20hhga3nhqylnyq9kn5ja8t7c6ay45c: "/chains/mech-cap.png",
  xionvaloper1ypwfnfuldmlp9u8asqzz6qx29p0utqzer5678k: "/chains/stake-lab.png",
};

export const useValidatorLogo = (
  identity?: string,
  operatorAddress?: string,
) => {
  const [logo, setLogo] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      if (identity) {
        const logoResponse = await keybaseClient.getIdentityLogo(identity);

        if (logoResponse) {
          setLogo(logoResponse);

          return;
        }
      }

      if (operatorAddress) {
        const fallbackLogo = fallbackLogoMap[operatorAddress];

        if (fallbackLogo) {
          setLogo(basePath + fallbackLogo);
        }
      }
    })();
  }, [identity, operatorAddress]);

  return logo || defaultAvatar;
};
