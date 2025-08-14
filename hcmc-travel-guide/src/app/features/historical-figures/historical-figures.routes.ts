import { Routes } from '@angular/router';
import { HistoricalFiguresComponent } from './historical-figures.component';
import { FigureDetailComponent } from './figure-detail/figure-detail.component';

export const HISTORICAL_FIGURES_ROUTES: Routes = [
  {
    path: '',
    component: HistoricalFiguresComponent
  },
  {
    path: ':id',
    component: FigureDetailComponent
  }
]; 