import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManosPage } from './manos.page';

const routes: Routes = [
  {
    path: '',
    component: ManosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManosPageRoutingModule {}
