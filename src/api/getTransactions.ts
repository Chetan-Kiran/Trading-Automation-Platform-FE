import axios from "axios";

export async function getTransactions(userId: number) {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    `http://localhost:9090/trade/transactions/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
}
