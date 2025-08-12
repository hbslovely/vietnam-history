export interface HistoricalPeriod {
  id: string;
  startYear: number;
  endYear: number | null;
  isBC?: boolean;
} 