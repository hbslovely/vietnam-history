import { ImageItem } from './historical-period.model';

export interface HistoricalMap {
  id: string;
  name: string;
  period: string;
  description: string;
  mapUrl: string;
  details?: string;
  significance?: string;
  regions?: MapRegion[];
  images?: ImageItem[];
}

export interface MapRegion {
  id: string;
  name: string;
  description: string;
  coordinates: string; // SVG path or coordinates
  highlights?: MapHighlight[];
}

export interface MapHighlight {
  id: string;
  title: string;
  description: string;
  coordinates: string;
  type: 'point' | 'area';
} 