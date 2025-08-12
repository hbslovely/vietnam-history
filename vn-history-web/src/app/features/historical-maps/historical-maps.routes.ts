import { Routes } from '@angular/router';
import { HistoricalMapsComponent } from './historical-maps.component';
import { MapDetailComponent } from './map-detail/map-detail.component';

export const HISTORICAL_MAPS_ROUTES: Routes = [
  {
    path: '',
    component: HistoricalMapsComponent
  },
  {
    path: ':id',
    component: MapDetailComponent
  }
]; 