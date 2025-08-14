import { Place } from './place.model';

export interface TourStop {
  place: Place;
  duration: number; // in minutes
  notes: {
    en: string;
    vi: string;
  };
  transportToNext?: {
    method: 'walk' | 'taxi' | 'bus' | 'motorbike' | 'subway';
    duration: number; // in minutes
    cost?: number;
    instructions: {
      en: string;
      vi: string;
    };
  };
}

export interface Tour {
  id: string;
  name: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
  duration: number; // in hours
  difficulty: 'easy' | 'moderate' | 'challenging';
  bestTime: {
    en: string;
    vi: string;
  };
  stops: TourStop[];
  totalCost: {
    min: number;
    max: number;
    currency: 'VND' | 'USD';
  };
  tips: {
    en: string[];
    vi: string[];
  };
  categories: string[];
  rating: number;
  reviews: {
    id: string;
    rating: number;
    comment: string;
    author: string;
    date: Date;
    language: 'en' | 'vi';
  }[];
  images: string[];
  tags: string[];
} 