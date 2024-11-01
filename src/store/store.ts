import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { DashboardState } from "../types/dashboard";
import { createDashboardSlice } from "./slices/dashboardSlice";

export const useDashboardStore = create<DashboardState>()(
  devtools(
    persist(createDashboardSlice, {
      name: "dashboard-storage",
      partialize: (state) => ({
        stats: state.stats,
        commits: state.commits,
        charts: state.charts,
      }),
    })
  )
);
