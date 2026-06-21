import { useEffect, useState } from "react";
import { getAssets } from "../services/assetApi";
import type { Asset } from "../services/assetApi";

export function useAssets() {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    getAssets().then(setAssets);
  }, []);

  return assets;
}
