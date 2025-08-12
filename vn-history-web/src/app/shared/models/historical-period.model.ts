export interface TimeRange {
  from: number;
  to: number;
  display: string;
}

export interface HistoricalEvent {
  title: string;
  date: string;
  description: string;
}

export interface ImageItem {
  url: string;
  caption: string;
  alt: string;
}

export interface HistoricalPeriod {
  id: string;
  name: string;
  nameEn: string;
  timeRange: TimeRange;
  description: string;
  significance: string;
  significanceEn: string;
  location?: string;
  events: HistoricalEvent[];
  images: ImageItem[];
  dynasties?: {
    name: string;
    period: string;
    rulers: string[];
  }[];
}
