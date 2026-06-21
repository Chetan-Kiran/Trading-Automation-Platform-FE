import api from "./api";

export interface Asset {
  id: number;
  symbol: string;
  name: string;
  market: string;
  price: number;
}

export const getAssets = async () => {
  const res = await api.get<Asset[]>("/asset");
  return res.data;
};
