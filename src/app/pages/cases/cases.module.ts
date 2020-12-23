import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { CasesComponent } from './cases.component';


@NgModule({
  declarations: [CasesComponent],
  imports: [
    CommonModule,
    CasesRoutingModule
  ]
})
export class CasesModule { }
