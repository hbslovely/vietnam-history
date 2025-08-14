import { ImageItem } from './historical-period.model';

export interface Exhibit {
  id: string;
  name: string;
  period: string;
  description: string;
  details?: string;
  origin?: string;
  significance?: string;
  model3D?: string; // URL to 3D model
  images?: ImageItem[];
  virtualTour?: VirtualTour;
}

export interface VirtualTour {
  url: string;
  description: string;
  instructions?: string;
  requirements?: string[];
} 