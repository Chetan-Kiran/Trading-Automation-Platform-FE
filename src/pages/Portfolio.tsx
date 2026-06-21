import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import PortfolioHoldingCard from "../components/PortfolioHoldingCard";

import { usePortfolio } from "../hooks/usePortfolio";

export default function Portfolio() {
  const { data, loading } = usePortfolio();

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  const portfolioValue = data.reduce(
    (sum, item) => sum + item.currentPrice * item.quantity,
    0,
  );

  const pnl = data.reduce((sum, item) => sum + item.pnl, 0);

  return (
    <div className="flex bg-[#071120] min-h-screen">
      <Sidebar />

      <div className="ml-72 flex-1 p-8">
        <Topbar />

        <div className="grid grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Portfolio Value"
            value={`$${portfolioValue.toFixed(2)}`}
            change="Live"
          />

          <StatCard
            title="Total Holdings"
            value={`${data.length}`}
            change="Assets"
          />

          <StatCard title="PnL" value={`$${pnl.toFixed(2)}`} change="Live" />
        </div>

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
          "
        >
          {data.map((item) => (
            <PortfolioHoldingCard
              key={item.symbol}
              symbol={item.symbol}
              quantity={item.quantity}
              currentPrice={item.currentPrice}
              pnl={item.pnl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
