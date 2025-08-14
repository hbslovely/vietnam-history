import { Routes } from '@angular/router';
import { VirtualMuseumComponent } from './virtual-museum.component';
import { ExhibitDetailComponent } from './exhibit-detail/exhibit-detail.component';

export const VIRTUAL_MUSEUM_ROUTES: Routes = [
  {
    path: '',
    component: VirtualMuseumComponent
  },
  {
    path: ':id',
    component: ExhibitDetailComponent
  }
]; 