import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import { useAssets } from "../hooks/useAssets";

import { buyAsset, sellAsset } from "../services/tradeApi";

export default function Trading() {
  const assets = useAssets();

  const [selectedAssetId, setSelectedAssetId] = useState<number>(0);

  const [quantity, setQuantity] = useState<number>(1);

  const [loading, setLoading] = useState(false);

  const [tradeResult, setTradeResult] = useState<any>(null);

  const executeTrade = async (type: "BUY" | "SELL") => {
    try {
      setLoading(true);

      const payload = {
        userId: 1, // replace later with logged in user
        assetId: selectedAssetId,
        quantity,
      };

      const result =
        type === "BUY" ? await buyAsset(payload) : await sellAsset(payload);

      setTradeResult(result);
    } catch (error) {
      console.error(error);

      alert("Trade failed");
    } finally {
      setLoading(false);
    }
  };

  const selectedAsset = assets.find((asset) => asset.id === selectedAssetId);

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
          Trading
        </h1>

        <div
          className="
          max-w-2xl
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-8
          "
        >
          <h2
            className="
            text-xl
            text-white
            font-semibold
            mb-6
            "
          >
            Place Order
          </h2>

          {/* Asset Dropdown */}

          <label className="text-gray-400">Asset</label>

          <select
            value={selectedAssetId}
            onChange={(e) => setSelectedAssetId(Number(e.target.value))}
            className="
            w-full
            mt-2
            mb-6
            p-4
            rounded-xl
            bg-white/10
            text-white
            border
            border-white/10
            outline-none
            "
          >
            <option value={0}>Select Asset</option>

            {assets.map((asset) => (
              <option key={asset.id} value={asset.id}>
                {asset.symbol}
                {" - "}
                {asset.name}
              </option>
            ))}
          </select>

          {/* Asset Info */}

          {selectedAsset && (
            <div
              className="
              mb-6
              bg-white/5
              rounded-2xl
              p-4
              "
            >
              <p className="text-white">Symbol: {selectedAsset.symbol}</p>

              <p className="text-gray-400">Market: {selectedAsset.market}</p>

              <p className="text-[#D4AF37]">Price: ${selectedAsset.price}</p>
            </div>
          )}

          {/* Quantity */}

          <label className="text-gray-400">Quantity</label>

          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="
            w-full
            mt-2
            p-4
            rounded-xl
            bg-white/10
            text-white
            border
            border-white/10
            outline-none
            "
          />

          {/* Buttons */}

          <div
            className="
            flex
            gap-4
            mt-8
            "
          >
            <button
              disabled={loading || !selectedAssetId}
              onClick={() => executeTrade("BUY")}
              className="
              flex-1
              bg-green-600
              hover:bg-green-500
              text-white
              font-semibold
              p-4
              rounded-xl
              "
            >
              BUY
            </button>

            <button
              disabled={loading || !selectedAssetId}
              onClick={() => executeTrade("SELL")}
              className="
              flex-1
              bg-red-600
              hover:bg-red-500
              text-white
              font-semibold
              p-4
              rounded-xl
              "
            >
              SELL
            </button>
          </div>
        </div>

        {/* Trade Result */}

        {tradeResult && (
          <div
            className="
            mt-8
            max-w-2xl
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-6
            "
          >
            <h3
              className="
              text-xl
              font-bold
              text-[#D4AF37]
              mb-4
              "
            >
              Trade Executed
            </h3>

            <p className="text-white">Asset: {tradeResult.asset.symbol}</p>

            <p className="text-white">Type: {tradeResult.type}</p>

            <p className="text-white">Quantity: {tradeResult.quantity}</p>

            <p className="text-white">Price: ${tradeResult.price}</p>

            <p className="text-gray-400">
              {new Date(tradeResult.timestamp).toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
