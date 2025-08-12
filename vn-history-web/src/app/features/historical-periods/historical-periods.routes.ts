import { Routes } from '@angular/router';
import { HistoricalPeriodsComponent } from './historical-periods.component';
import { PeriodDetailComponent } from './period-detail/period-detail.component';

export const HISTORICAL_PERIODS_ROUTES: Routes = [
  {
    path: '',
    component: HistoricalPeriodsComponent
  },
  {
    path: ':id',
    component: PeriodDetailComponent
  }
]; 