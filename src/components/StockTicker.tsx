import { useEffect, useState } from "react";
import axios from "axios";

interface Ticker {
  symbol: string;
  price: number;
}

export default function StockTicker() {
  const [stocks, setStocks] = useState<Ticker[]>([]);

  useEffect(() => {
    fetchPrices();

    const timer = setInterval(fetchPrices, 30000);

    return () => clearInterval(timer);
  }, []);

  const fetchPrices = async () => {
    const symbols = ["AAPL", "MSFT", "GOOGL"];

    const data = await Promise.all(
      symbols.map(async (symbol) => {
        const res = await axios.get(
          `http://localhost:9090/basket/price?symbol=${symbol}`,
        );

        return {
          symbol,
          price: res.data,
        };
      }),
    );

    setStocks(data);
  };

  return (
    <div className="overflow-hidden border-b border-yellow-400/20 bg-black/20 backdrop-blur-xl">
      <div className="flex gap-20 animate-[marquee_20s_linear_infinite] whitespace-nowrap py-3">
        {stocks.map((stock) => (
          <div key={stock.symbol} className="text-white text-lg font-semibold">
            <span className="text-yellow-400">{stock.symbol}</span>
            {"  "}${stock.price}
          </div>
        ))}
      </div>
    </div>
  );
}
