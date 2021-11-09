import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaderaPage } from './cadera.page';

const routes: Routes = [
  {
    path: '',
    component: CaderaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaderaPageRoutingModule {}
