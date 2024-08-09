import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home/home.component';
import { AProposComponent } from './public/a-propos/a-propos/a-propos.component';

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
