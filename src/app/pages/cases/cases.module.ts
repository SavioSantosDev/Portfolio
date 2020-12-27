import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CasesRoutingModule } from './cases-routing.module';
import { CasesComponent } from './cases.component';
import { CasePreviewComponent } from './case-preview/case-preview.component';
import { CasesListComponent } from './cases-list/cases-list.component';


@NgModule({
  declarations: [
    CasesComponent,
    CasePreviewComponent,
    CasesListComponent
  ],
  imports: [
    CommonModule,
    CasesRoutingModule,
    RouterModule
  ]
})
export class CasesModule { }
