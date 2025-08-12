import { ImageItem } from './historical-period.model';

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  author?: string;
  category: string;
  tags?: string[];
  images?: ImageItem[];
}

export interface NewsCategory {
  id: string;
  name: string;
  description: string;
} 