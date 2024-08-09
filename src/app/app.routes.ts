import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home/home.component';
import { AProposComponent } from './public/a-propos/a-propos/a-propos.component';
import { CategoriesComponent } from './public/categories/categories.component';

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
    path: 'categories',
    title: 'Cat&eacute;gories',
    component: CategoriesComponent,
  },

];
