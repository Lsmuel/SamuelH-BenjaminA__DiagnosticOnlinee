import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabezaPage } from './cabeza.page';

const routes: Routes = [
  {
    path: '',
    component: CabezaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabezaPageRoutingModule {}
