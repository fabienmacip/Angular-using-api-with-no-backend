import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home/home.component';
import { AProposComponent } from './public/a-propos/a-propos/a-propos.component';
import { StarwarsHomeComponent } from './public/starwars/starwars-home/starwars-home.component';
import { ApiCallComponent } from './public/sandbox/api-call/api-call.component';

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
  {
    path: 'starwars',
    title: 'Star Wars',
    component: StarwarsHomeComponent,
  },
  {
    path: 'sandbox',
    title: 'Sand Box',
    component: ApiCallComponent,
  },
];
