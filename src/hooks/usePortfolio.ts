import { useEffect, useState } from "react";

import { getPortfolio } from "../api/tradingApi";
import type { PortfolioItem } from "../types/portfolio";

export function usePortfolio() {
  const [data, setData] = useState<PortfolioItem[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    console.log("HOOK RUNNING");

    async function load() {
      console.log("calling api")
      try {
        const result = await getPortfolio();

         console.log("API RESULT", result);

        setData(result);
      }catch(e){
        console.log("API error :", e)
      } finally {
        console.log("Loading false")
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    data,
    loading,
  };
}
