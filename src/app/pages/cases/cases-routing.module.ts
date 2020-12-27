import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasesComponent } from './cases.component';
import { CasePreviewComponent } from './case-preview/case-preview.component';
import { CasesListComponent } from './cases-list/cases-list.component';

const routes: Routes = [
  // cases
  {
    path: '', component: CasesComponent,
    children: [
      { path: 'teste', component: CasePreviewComponent },
      { path: '', component: CasesListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
