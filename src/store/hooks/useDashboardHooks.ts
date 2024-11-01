import { useDashboardStore } from "../store";

export const useStats = () => useDashboardStore((state) => state.stats);
export const useCommits = () => useDashboardStore((state) => state.commits);
export const useCharts = () => useDashboardStore((state) => state.charts);
export const useIsLoading = () => useDashboardStore((state) => state.isLoading);
export const useError = () => useDashboardStore((state) => state.error);

export const useStatsActions = () => {
  const { setStats, updateStat } = useDashboardStore();
  return { setStats, updateStat };
};

export const useCommitActions = () => {
  const { setCommits, addCommit } = useDashboardStore();
  return { setCommits, addCommit };
};

export const useChartActions = () => {
  const { setChartData, updateChartItem } = useDashboardStore();
  return { setChartData, updateChartItem };
};

export const useStoreActions = () => {
  const { setLoading, setError, reset } = useDashboardStore();
  return { setLoading, setError, reset };
};
