import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9090",
});

export const buyAsset = async (payload: {
  userId: number;
  assetId: number;
  quantity: number;
}) => {
  const res = await api.post("/trade/buy", payload);

  return res.data;
};

export const sellAsset = async (payload: {
  userId: number;
  assetId: number;
  quantity: number;
}) => {
  const res = await api.post("/trade/sell", payload);

  return res.data;
};
