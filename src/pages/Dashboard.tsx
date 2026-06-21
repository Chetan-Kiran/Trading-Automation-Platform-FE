import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import PortfolioChart from "../components/PortfolioChart";
import { usePortfolio } from "../hooks/usePortfolio";


export default function Dashboard() {

  console.log("DASHBOARD LOADED");

  const { data, loading } = usePortfolio();

  console.log("loading =", loading);
  console.log("data =", data);

  const portfolioData = data as {
    currentPrice: number;
    quantity: number;
    pnl: number;
  }[];

  const portfolioValue =
    portfolioData?.reduce(
      (sum, item) => sum + item.currentPrice * item.quantity,
      0,
    ) ?? 0;

  const totalPnl = portfolioData?.reduce((sum, item) => sum + item.pnl, 0) ?? 0;


  if (loading) {
    return (
      <div className="flex bg-[#071120] min-h-screen">
        <Sidebar />
        <div className="ml-72 flex-1 p-8">
          <Topbar />
          <div className="text-white">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-[#071120] min-h-screen">
      <Sidebar />
      <div className="ml-72 flex-1 p-8">
        <Topbar />
        <div className="grid grid-cols-3 gap-6 mb-6">
          <StatCard
            title="Portfolio Value"
            value={`$${portfolioValue.toFixed(2)}`}
            change="Live"
          />
          <StatCard title="Cash Balance" value="$4,200" change="+1.2%" />
          <StatCard title="PnL" value={`$${totalPnl.toFixed(2)}`} change="Live" />
        </div>

        <PortfolioChart />
      </div>
    </div>
  );
}
