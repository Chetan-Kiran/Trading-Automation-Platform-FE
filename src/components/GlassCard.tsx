import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className={`
        relative overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_8px_32px_rgba(0,0,0,0.37)]
        p-6
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-blue-500/5" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}