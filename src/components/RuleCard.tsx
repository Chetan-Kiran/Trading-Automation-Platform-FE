import { motion } from "framer-motion";

export default function RuleCard({ rule }: { rule: any }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      className="
      bg-white/5
      border
      border-white/10
      backdrop-blur-xl
      rounded-3xl
      p-6
      "
    >
      <div className="flex justify-between">
        <h3
          className="
          text-xl
          font-bold
          text-white
          "
        >
          {rule.symbol}
        </h3>

        <span
          className={`
          px-3
          py-1
          rounded-full
          text-xs
          ${
            rule.active
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }
          `}
        >
          {rule.active ? "ACTIVE" : "INACTIVE"}
        </span>
      </div>

      <div className="mt-5 space-y-2">
        <p className="text-gray-300">Condition: {rule.conditionType}</p>

        <p className="text-gray-300">Threshold: {rule.threshold}</p>

        <p className="text-gray-300">Action: {rule.action}</p>

        <p className="text-gray-300">Qty: {rule.quantity}</p>

        <p className="text-gray-300">Strategy: {rule.strategy}</p>

        <p className="text-gray-300">Stop Loss: {rule.stopLoss}</p>

        <p className="text-gray-300">Take Profit: {rule.takeProfit}</p>
      </div>
    </motion.div>
  );
}
