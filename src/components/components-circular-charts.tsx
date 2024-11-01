import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

interface ChartData {
  pieChart1: Array<{ name: string; value: number; color: string }>;
  pieChart2: Array<{ name: string; value: number; color: string }>;
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

export function CircularCharts({ data }: { data: ChartData }) {
  const defaultData1 = [
    { name: "Segment 1", value: 37.0, color: "#82c91e" },
    { name: "Segment 2", value: 63.0, color: "#94d82d" },
  ];

  const defaultData2 = [
    { name: "Segment 1", value: 47.4, color: "#1e3a8a" },
    { name: "Segment 2", value: 33.1, color: "#3b82f6" },
    { name: "Segment 3", value: 10.0, color: "#93c5fd" },
    { name: "Segment 4", value: 9.5, color: "#dbeafe" },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <Card className="p-4 items-center">
        <h3 className="mb-3 text-lg font-medium ">Chart title</h3>
        <hr className="mb-2" />
        <ChartContainer className=" " config={{}}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data?.pieChart1 || defaultData1}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
                label={renderCustomizedLabel}
                labelLine={false}
              >
                {(data?.pieChart1 || defaultData1).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ paddingTop: "0px" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Card>
      <Card className="p-4 items-center">
        <h3 className="mb-3 text-lg font-medium">Chart title</h3>
        <hr className="mb-2" />
        <ChartContainer className="" config={{}}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data?.pieChart2 || defaultData2}
                innerRadius={0}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
                label={renderCustomizedLabel}
                labelLine={false}
              >
                {(data?.pieChart2 || defaultData2).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ paddingTop: "0px" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Card>
    </div>
  );
}
