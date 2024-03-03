"use client";

import { useModal } from "@burnt-labs/abstraxion";
import { Button } from "@burnt-labs/ui";
import { useCallback } from "react";

// eslint-disable-next-line
function LoggedOut() {
  const [, setShowAbstraxion] = useModal();

  const onViewAccount = useCallback(() => {
    setShowAbstraxion(true);
  }, [setShowAbstraxion]);

  return (
    <div className="w-max">
      <Button fullWidth onClick={onViewAccount} structure="base">
        CONNECT
      </Button>
    </div>
  );
}
