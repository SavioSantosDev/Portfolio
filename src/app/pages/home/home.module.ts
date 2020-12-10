import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopComponent } from './top/top.component';
import { ContactComponent } from './contact/contact.component';
import { CasesComponent } from './cases/cases.component';


@NgModule({
  declarations: [
    HomeComponent,
    TopComponent,
    ContactComponent,
    CasesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
