import { StateCreator } from "zustand";
import { DashboardState } from "../../types/dashboard";
import {
  initialStatsData,
  initialCommitData,
  initialChartData,
} from "../../data/mockData";

export const createDashboardSlice: StateCreator<DashboardState> = (set) => ({
  // Initial state
  stats: initialStatsData,
  commits: initialCommitData,
  charts: initialChartData,
  isLoading: false,
  error: null,

  // Actions
  setStats: (stats) => set({ stats }),
  updateStat: (index, stat) =>
    set((state) => ({
      stats: state.stats.map((s, i) => (i === index ? { ...s, ...stat } : s)),
    })),

  setCommits: (commits) => set({ commits }),
  addCommit: (commit) =>
    set((state) => ({
      commits: [commit, ...state.commits],
    })),

  setChartData: (charts) => set({ charts }),
  updateChartItem: (chartKey, index, item) =>
    set((state) => ({
      charts: {
        ...state.charts,
        [chartKey]: state.charts[chartKey].map((c, i) =>
          i === index ? { ...c, ...item } : c
        ),
      },
    })),

  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  reset: () =>
    set({
      stats: initialStatsData,
      commits: initialCommitData,
      charts: initialChartData,
      isLoading: false,
      error: null,
    }),
});

