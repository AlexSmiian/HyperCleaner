"use client";

import { useState, useEffect } from "react";

export function useLoadOnUserInteraction() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    window?.addEventListener("onUser", function () {
      setIsReady(true);
    });
  }, []);

  return isReady;
}
