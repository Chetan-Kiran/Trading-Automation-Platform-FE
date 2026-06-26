import PageWrapper from "../components/PageWrapper";
import GlassCard from "../components/GlassCard";

const Dashboard = () => {
  return (
    <PageWrapper>
      <h1 className="text-5xl text-gold font-bold mb-10">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <GlassCard>
          <h3 className="text-gray-300">Wallet Balance</h3>

          <p className="text-4xl font-bold mt-4 text-white">$97,575</p>
        </GlassCard>

        <GlassCard>
          <h3 className="text-gray-300">Portfolio Value</h3>

          <p className="text-4xl font-bold mt-4 text-green-400">$104,125</p>
        </GlassCard>

        <GlassCard>
          <h3 className="text-gray-300">Daily PnL</h3>

          <p className="text-4xl font-bold mt-4 text-red-400">-$882</p>
        </GlassCard>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
