import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasesComponent } from './cases.component';
import { CasePreviewComponent } from './case-preview/case-preview.component';
import { CasesListComponent } from './cases-list/cases-list.component';
import { CasesResolverGuard } from 'src/app/guards/cases-resolver.guard';

const routes: Routes = [
  // cases
  {
    path: '', component: CasesComponent,
    children: [
      {
        path: ':id', component: CasePreviewComponent,
        resolve: {
          case: CasesResolverGuard
        }
      },
      {
        path: '', component: CasesListComponent,
        resolve: {
          cases: CasesResolverGuard
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
