import { Card } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
}

export function StatsCard({ title, value, change }: StatsCardProps) {
  const isPositive = change > 0;

  return (
    <Card className="p-4 text-center">
      <div className="flex items-center justify-between ">
        <span
          className={`text-xs  ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? (
            <ArrowUpIcon className="h-4 w-4 inline" />
          ) : (
            <ArrowDownIcon className="h-4 w-4 inline" />
          )}
          {Math.abs(change)}%
        </span>
      </div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{title}</div>
    </Card>
  );
}
