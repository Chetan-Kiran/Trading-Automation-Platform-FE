export interface Transaction {
  id: number;

  asset: {
    id: number;
    symbol: string;
    name: string;
    market: string;
    price: number;
  };

  quantity: number;

  price: number;

  type: string;

  timestamp: string;
}
