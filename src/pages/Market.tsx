import { useEffect, useState } from "react";
import axios from "axios";

function Market() {
  const [symbol, setSymbol] = useState("AAPL");
  const [price, setPrice] = useState<number>();

  useEffect(() => {
    axios
      .get(`http://localhost:9090/basket/price?symbol=${symbol}`)
      .then((res) => setPrice(res.data));
  }, [symbol]);

  return (
    <div className="p-8">
      <div className="glass-card p-8">
        <h1 className="text-4xl font-bold text-gold">{symbol}</h1>

        <h2 className="text-3xl mt-4">${price}</h2>
      </div>
    </div>
  );
}

export default Market;
