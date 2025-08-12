import { Routes } from '@angular/router';
import { HistoricalSitesComponent } from './historical-sites.component';
import { SiteDetailComponent } from './site-detail/site-detail.component';

export const HISTORICAL_SITES_ROUTES: Routes = [
  {
    path: '',
    component: HistoricalSitesComponent
  },
  {
    path: ':id',
    component: SiteDetailComponent
  }
]; 