import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualDeUsoPage } from './manual-de-uso.page';

const routes: Routes = [
  {
    path: '',
    component: ManualDeUsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualDeUsoPageRoutingModule {}
