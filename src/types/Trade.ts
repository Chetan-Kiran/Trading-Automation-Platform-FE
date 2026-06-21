export interface Asset {
  id: number;
  symbol: string;
  name: string;
  market: string;
  price: number;
}

export interface TradeRequest {
  userId: number;
  assetId: number;
  quantity: number;
}

export interface TradeResponse {
  id: number;

  asset: Asset;

  quantity: number;

  price: number;

  type: string;

  timestamp: string;
}
