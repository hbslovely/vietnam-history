import { ImageItem } from './historical-period.model';

export interface VisitingInfo {
  address: string;
  openingHours: string;
  ticketPrice?: string;
  contact?: string;
  transportation?: string;
}

export interface HistoricalSite {
  id: string;
  name: string;
  location: {
    province: string;
    district?: string;
    address: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  type: 'monument' | 'temple' | 'palace' | 'citadel' | 'tomb' | 'other';
  period: {
    from: number;
    to?: number;
    dynasty?: string;
  };
  description: string;
  recognition: {
    level: 'national' | 'special-national' | 'world-heritage';
    year: number;
  };
  history?: string;
  architecture?: string;
  significance?: string;
  visitingInfo?: VisitingInfo;
  images: string[]; // Array of image URLs
} 