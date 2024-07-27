import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AProposComponent } from './pages/util/a-propos/a-propos.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Accueil',
    component: HomeComponent,
  },
  {
    path: 'a-propos',
    title: 'A propos',
    component: AProposComponent,
  },
];
