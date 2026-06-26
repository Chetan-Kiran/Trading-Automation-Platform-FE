import { useEffect, useState } from "react";
import axios from "axios";
import GlassCard from "../components/GlassCard";
import PageWrapper from "../components/PageWrapper";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import RecentTransactions from "../components/RecentTransactions";

interface Stock {
  symbol: string;
  price: number;
}

const symbols = ["AAPL", "MSFT", "GOOGL"];

export default function Market() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if(!search.trim()) return;
    navigate(`/market?symbol=${search.toUpperCase()}`)
  }

  useEffect(() => {
    loadPrices();

    const timer = setInterval(loadPrices, 30000);

    return () => clearInterval(timer);
  }, []);

  const loadPrices = async () => {
    const result = await Promise.all(
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

    setStocks(result);
  };

  const filtered = stocks.filter((s) =>
    s.symbol.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <PageWrapper>
      <div className="p-10 text-white">
        <h1
          className="
          text-5xl
          font-bold
          mb-10
          bg-gradient-to-r
          from-yellow-300
          to-white
          bg-clip-text
          text-transparent
        "
        >
          Live Market
        </h1>

        <div
          className="
          flex items-center
          gap-4
          mb-10

          rounded-2xl
          bg-white/5
          backdrop-blur-xl

          border border-white/10

          p-4
        "
        >
          <Search className="text-yellow-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search AAPL, MSFT..."
            className="
              bg-transparent
              outline-none
              w-full
            "
          />

          <button onClick={handleSearch}>
            Search
          </button>
        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
        "
        >
          {filtered.map((stock) => (
            <GlassCard key={stock.symbol}>
              <h2
                className="
                text-3xl
                font-bold
                text-yellow-400
              "
              >
                {stock.symbol}
              </h2>

              <p
                className="
                text-4xl
                mt-5
                font-bold
              "
              >
                ${stock.price}
              </p>

              <div
                className="
                flex gap-4 mt-8
              "
              >
                <button
                  className="
                    flex-1

                    bg-green-500
                    hover:bg-green-600

                    rounded-xl

                    py-3

                    font-bold

                    transition
                  "
                >
                  Buy
                </button>

                <button
                  className="
                    flex-1

                    bg-red-500
                    hover:bg-red-600

                    rounded-xl

                    py-3

                    font-bold

                    transition
                  "
                >
                  Sell
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
      <RecentTransactions/>
    </PageWrapper>
  );
}
