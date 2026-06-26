import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "AAPL", value: 60 },
  { name: "MSFT", value: 25 },
  { name: "GOOGL", value: 15 },
];

const COLORS = ["#FFD700", "#00C2FF", "#4ADE80"];

export default function PortfolioChart() {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={130}>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
