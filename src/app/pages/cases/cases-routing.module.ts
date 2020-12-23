import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasesComponent } from './cases.component';

const routes: Routes = [
  // cases
  { path: '', component: CasesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
