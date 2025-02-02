import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CasesResolverGuard } from './../../guards/cases-resolver.guard';

const routes: Routes = [
  //
  {
    path: '', component: HomeComponent,
    resolve: {
      cases: CasesResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
