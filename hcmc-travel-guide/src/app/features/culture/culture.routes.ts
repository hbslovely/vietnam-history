import { Routes } from '@angular/router';
import { CultureComponent } from './culture.component';
import { CultureDetailComponent } from './culture-detail/culture-detail.component';

export const CULTURE_ROUTES: Routes = [
  {
    path: '',
    component: CultureComponent
  },
  {
    path: ':id',
    component: CultureDetailComponent
  }
]; 