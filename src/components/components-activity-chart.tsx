import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const data = Array.from({ length: 30 }, (_, i) => ({
  date: `2024-${(i + 1).toString().padStart(2, "0")}-01`,
  purchases: Math.floor(Math.random() * 100) + 20,
}));

export function ActivityChart() {
  return (
    <div className="space-y-4 overflow-auto">
      <h3 className="text-lg font-medium">Development Activity</h3>
      <hr />
      <ChartContainer
        config={{
          purchases: {
            label: "Purchases",
            color: "blue",
          },
        }}
        className="h-[300px] !max-sm:w-[50%]"
      >
        <ResponsiveContainer
          width="100%"
          height="100%"
          // className={""}
        >
          <LineChart data={data}>
            <XAxis
              dataKey="date"
              tickFormatter={(value) => new Date(value).toLocaleDateString()}
            />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="purchases"
              stroke="var(--color-purchases)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
