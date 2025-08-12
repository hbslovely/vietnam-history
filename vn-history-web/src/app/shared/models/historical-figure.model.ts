import { ImageItem } from './historical-period.model';

export interface HistoricalFigure {
  id: string;
  name: string;
  period: string;
  description: string;
  biography?: string;
  achievements?: string[];
  images?: ImageItem[];
}

export interface FigureCategory {
  id: string;
  name: string;
  figures: HistoricalFigure[];
} 