import { ImageItem } from './historical-period.model';

export interface CultureItem {
  id: string;
  name: string;
  description: string;
  details?: string;
  origin?: string;
  significance?: string;
  images?: ImageItem[];
}

export interface CultureCategory {
  id: string;
  name: string;
  description: string;
  items: CultureItem[];
} 