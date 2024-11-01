import { BellIcon, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";

import { statsData, commitData, chartData } from "../data/mockData";
import { StatsCard } from "../components/components-stats-card";
import { ActivityChart } from "../components/components-activity-chart";
import { CommitHistory } from "../components/components-commit-history";
import { CircularCharts } from "../components/components-circular-charts";
import SubNav from "../components/sub-nav";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-blue-50 overflow-hidden">
      {/* Navigation */}
      <nav className="border-b bg-white px-4 py-3 md:px-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="rounded bg-blue-500 p-1 text-white">
                <Terminal />
              </div>
              <span className="text-lg font-semibold">tabler</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="rounded border px-4 py-1 text-sm border-blue-500 text-blue-500">
              Source code
            </button>
            <button className="relative">
              <BellIcon className="h-5 w-5 text-gray-600" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                5
              </span>
            </button>
            <div className="flex items-center space-x-2">
              <img
                src="https://randomuser.me/api/portraits/women/30.jpg"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <div className="hidden md:block">
                <div className="text-sm font-medium">Jane Pearson</div>
                <div className="text-xs text-gray-500">Administrator</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* sub-nav */}
      <SubNav />
      {/* Main Content */}
      <main className="p-6 md:px-12">
        <h1 className="mb-6 text-2xl font-semibold">Dashboard</h1>

        {/* Stats Grid */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {statsData.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Activity Chart */}
          <Card className="p-6">
            <ActivityChart />
            <CommitHistory commits={commitData} />
          </Card>

          {/* Right Column */}
          <div className="space-y-6">
            <Card className="p-4 bg-blue-100">
              <div className=" text-sm text-gray-600 items-center">
                <a className="font-bold" href="#">
                  {" "}
                  Read our documentation
                </a>{" "}
                with code samples.
              </div>
            </Card>
            <CircularCharts data={chartData} />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card className="p-6">
                <h3 className="mb-4 text-lg font-medium text-center">
                  New feedback
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/40.jpg"
                      alt="User Avatar"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">Alice Johnson</p>
                      <p className="text-sm text-gray-500">
                        Great product! Easy to use and very intuitive.
                      </p>
                      <div className="mt-1 flex items-center space-x-2">
                        <span className="text-xs text-gray-400">
                          2 hours ago
                        </span>
                        <span className="text-xs text-blue-500">Reply</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/30.jpg"
                      alt="User Avatar"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">Bob Smith</p>
                      <p className="text-sm text-gray-500">
                        Could use some improvements in the checkout process.
                      </p>
                      <div className="mt-1 flex items-center space-x-2">
                        <span className="text-xs text-gray-400">
                          5 hours ago
                        </span>
                        <span className="text-xs text-blue-500">Reply</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="mb-4 text-lg font-medium text-center">
                  Today profit
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Total Sales</span>
                    <span className="text-sm font-medium">$12,426</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Total Profit</span>
                    <span className="text-sm font-medium">$5,210</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Profit Margin</span>
                    <span className="text-sm font-medium">41.93%</span>
                  </div>
                  <div className="mt-4">
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-green-500 rounded-full"
                        style={{ width: "41.93%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
