import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import { useTransactions } from "../hooks/useTransactions";

export default function Transactions() {
  const { transactions, loading } = useTransactions(1);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="flex bg-[#071120] min-h-screen">
      <Sidebar />

      <div className="ml-72 flex-1 p-8">
        <Topbar />

        <h1
          className="
          text-3xl
          font-bold
          text-white
          mb-8
          "
        >
          Transaction History
        </h1>

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          overflow-hidden
          "
        >
          <table className="w-full">
            <thead>
              <tr
                className="
                border-b
                border-white/10
                "
              >
                <th className="p-5 text-left text-gray-400">Asset</th>

                <th className="p-5 text-left text-gray-400">Type</th>

                <th className="p-5 text-left text-gray-400">Quantity</th>

                <th className="p-5 text-left text-gray-400">Price</th>

                <th className="p-5 text-left text-gray-400">Date</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((trade) => (
                <tr
                  key={trade.id}
                  className="
                  border-b
                  border-white/5
                  hover:bg-white/5
                  "
                >
                  <td className="p-5 text-white">{trade.asset.symbol}</td>

                  <td
                    className={`p-5 font-semibold ${
                      trade.type === "BUY" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {trade.type}
                  </td>

                  <td className="p-5 text-white">{trade.quantity}</td>

                  <td className="p-5 text-white">${trade.price.toFixed(2)}</td>

                  <td className="p-5 text-gray-400">
                    {new Date(trade.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
