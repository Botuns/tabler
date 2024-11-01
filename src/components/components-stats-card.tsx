import { Card } from "@/components/ui/card";
import { ChevronUp, ChevronDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
}

export function StatsCard({ title, value, change }: StatsCardProps) {
  const isPositive = change > 0;

  return (
    <Card className="p-4 text-center">
      <div className="flex items-center justify-end ">
        <span
          className={`text-xs font-bold ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? "+" : "-"}
          {Math.abs(change)}%
          {isPositive ? (
            <ChevronUp className="h-4 w-4 inline" />
          ) : (
            <ChevronDown className="h-4 w-4 inline" />
          )}
        </span>
      </div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{title}</div>
    </Card>
  );
}
