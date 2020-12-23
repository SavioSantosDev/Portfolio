import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {
        path: 'cases',
        loadChildren: () => import('./cases/cases.module').then(mod => mod.CasesModule)
      },
      {
        path: 'contato',
        loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule)
      },
      {
        path: '',
        loadChildren: () => import ('./home/home.module').then(mod => mod.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
