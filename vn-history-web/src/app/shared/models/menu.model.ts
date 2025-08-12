import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface MenuItem {
  path: string;
  labelKey: string; // Translation key
  icon: IconDefinition;
} 