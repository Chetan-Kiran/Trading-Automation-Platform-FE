import { useEffect, useState } from "react";

import { getTransactions } from "../services/transactionApi";

import type { Transaction } from "../types/transaction";

export function useTransactions(userId: number) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTransactions(userId)
      .then(setTransactions)
      .finally(() => setLoading(false));
  }, [userId]);

  return {
    transactions,
    loading,
  };
}
