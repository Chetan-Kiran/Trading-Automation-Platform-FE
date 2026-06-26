import { useEffect, useState } from "react";
import axios from "axios";

interface Trade {
  id: number;
  type: string;
  quantity: number;
  price: number;
  timestamp: string;

  asset: {
    symbol: string;
  };
}

export default function RecentTransactions() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:9090/trade/transactions/1")
      .then((res) => {
        // latest 5 transactions
        setTrades(res.data.reverse().slice(0, 5));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <div className="glass-card p-6">Loading Transactions...</div>;

  return (
    <div className="glass-card p-6 mt-8">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6">
        Recent Transactions
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/20">
              <th className="p-3">Type</th>

              <th className="p-3">Symbol</th>

              <th className="p-3">Qty</th>

              <th className="p-3">Price</th>

              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {trades.map((trade) => (
              <tr
                key={trade.id}
                className="
                border-b
                border-white/10
                hover:bg-white/10
                transition
                "
              >
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-bold
                    ${
                      trade.type === "BUY"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-red-500/20 text-red-300"
                    }`}
                  >
                    {trade.type}
                  </span>
                </td>

                <td className="p-3">{trade.asset.symbol}</td>

                <td className="p-3">{trade.quantity}</td>

                <td className="p-3">${trade.price.toFixed(2)}</td>

                <td className="p-3">
                  {new Date(trade.timestamp).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
