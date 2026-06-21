import api from "./api";

import type { Transaction } from "../types/transaction";

export const getTransactions = async (
  userId: number,
): Promise<Transaction[]> => {
  const res = await api.get(`/trade/transactions/${userId}`);

  return res.data;
};
