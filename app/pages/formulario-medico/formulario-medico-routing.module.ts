import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioMedicoPage } from './formulario-medico.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioMedicoPageRoutingModule {}
