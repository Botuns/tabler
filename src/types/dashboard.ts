export interface User {
    name: string;
    avatar: string;
  }
  
  export interface Commit {
    user: User;
    message: string;
    date: string;
  }
  
  export interface StatsItem {
    title: string;
    value: string;
    change: number;
  }
  
  export interface ChartItem {
    name: string;
    value: number;
    color: string;
  }
  
  export interface ChartData {
    pieChart1: ChartItem[];
    pieChart2: ChartItem[];
  }
  
  export interface DashboardState {
    stats: StatsItem[];
    commits: Commit[];
    charts: ChartData;
    isLoading: boolean;
    error: string | null;
    
    setStats: (stats: StatsItem[]) => void;
    updateStat: (index: number, stat: Partial<StatsItem>) => void;
    setCommits: (commits: Commit[]) => void;
    addCommit: (commit: Commit) => void;
    setChartData: (charts: ChartData) => void;
    updateChartItem: (
      chartKey: keyof ChartData,
      index: number,
      item: Partial<ChartItem>
    ) => void;
    setLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;
    reset: () => void;
  }