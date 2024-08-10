import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Accueil',
    component: HomeComponent,
  },
  {
    path: 'a-propos',
    loadChildren: () => import('./public/a-propos-module/a-propos.module')
      .then(m => m.AProposModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./public/categories-module/categories.module')
      .then(m => m.CategoriesModule)

  }
];
