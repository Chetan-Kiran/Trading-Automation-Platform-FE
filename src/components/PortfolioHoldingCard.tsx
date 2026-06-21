interface Props {
  symbol: string;
  quantity: number;
  currentPrice: number;
  pnl: number;
}

export default function PortfolioHoldingCard({
  symbol,
  quantity,
  currentPrice,
  pnl,
}: Props) {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-6
      "
    >
      <h3 className="text-xl text-white font-bold">{symbol}</h3>

      <div className="mt-4 space-y-2">
        <p className="text-gray-400">Quantity: {quantity}</p>

        <p className="text-gray-400">Price: ${currentPrice}</p>

        <p className={pnl >= 0 ? "text-green-400" : "text-red-400"}>
          PnL: ${pnl}
        </p>
      </div>
    </div>
  );
}
