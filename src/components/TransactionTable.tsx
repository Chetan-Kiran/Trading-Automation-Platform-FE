export default function TransactionTable({
  transactions,
}: {
  transactions: any[];
}) {
  return (
    <table className="w-full">
      <thead className="bg bg-white/5">
        <tr>
          <th>Symbol</th>
          <th>Type</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Time Stamp</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((trade) => (
          <tr key={trade.id} className="hover:bg-white/5">
            <td>{trade.asset.symbol}</td>
            <td>{trade.type}</td>
            <td>{trade.quantity}</td>
            <td>${trade.price.toFixed(2)}</td>
            <td>{new Date(trade.timestamp).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
