import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
import { FormDeactivateGuard } from './../../guards/form-deactivate.guard';

const routes: Routes = [
  // contato
  {
    path: '', component: ContactComponent,
    canDeactivate: [ FormDeactivateGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
