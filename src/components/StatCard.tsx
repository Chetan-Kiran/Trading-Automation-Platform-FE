import { motion } from "framer-motion";

interface Props {
  title: string;

  value: string;

  change: string;
}

export default function StatCard({ title, value, change }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -4,
      }}
      className="
 bg-white/10
 backdrop-blur-xl
 p-6
 rounded-3xl
 border
 border-white/10
 "
    >
      <p className="text-gray-400">{title}</p>

      <h2
        className="
 text-3xl
 font-bold
 text-white
 mt-3
 "
      >
        {value}
      </h2>

      <p
        className="
 text-[#D4AF37]
 mt-2
 "
      >
        {change}
      </p>
    </motion.div>
  );
}
