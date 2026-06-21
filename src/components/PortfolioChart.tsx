import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";

const data = [
  { day: "Mon", value: 10000 },
  { day: "Tue", value: 11000 },
  { day: "Wed", value: 10500 },
  { day: "Thu", value: 13000 },
  { day: "Fri", value: 15000 },
];

export default function PortfolioChart() {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      rounded-3xl
      p-6
      border
      border-white/10
      h-[400px]
      "
    >
      <h2 className="text-white text-xl mb-6">Portfolio Growth</h2>

      <ResponsiveContainer width="100%" height= {300}>
        <AreaChart data={data}>
          <XAxis dataKey="day" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#D4AF37"
            fill="#D4AF37"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
