import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES)
  },
  {
    path: 'historical-periods',
    loadChildren: () => import('./features/historical-periods/historical-periods.routes').then(m => m.HISTORICAL_PERIODS_ROUTES)
  },
  {
    path: 'historical-figures',
    loadChildren: () => import('./features/historical-figures/historical-figures.routes').then(m => m.HISTORICAL_FIGURES_ROUTES)
  },
  {
    path: 'historical-sites',
    loadChildren: () => import('./features/historical-sites/historical-sites.routes').then(m => m.HISTORICAL_SITES_ROUTES)
  },
  {
    path: 'culture',
    loadChildren: () => import('./features/culture/culture.routes').then(m => m.CULTURE_ROUTES)
  },
  {
    path: 'virtual-museum',
    loadChildren: () => import('./features/virtual-museum/virtual-museum.routes').then(m => m.VIRTUAL_MUSEUM_ROUTES)
  },
  {
    path: 'historical-maps',
    loadChildren: () => import('./features/historical-maps/historical-maps.routes').then(m => m.HISTORICAL_MAPS_ROUTES)
  },
  {
    path: 'news',
    loadChildren: () => import('./features/news/news.routes').then(m => m.NEWS_ROUTES)
  },
  { path: '**', redirectTo: '' }
];
