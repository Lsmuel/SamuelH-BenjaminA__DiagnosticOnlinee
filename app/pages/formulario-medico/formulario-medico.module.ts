import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioMedicoPageRoutingModule } from './formulario-medico-routing.module';

import { FormularioMedicoPage } from './formulario-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioMedicoPageRoutingModule
  ],
  declarations: [FormularioMedicoPage]
})
export class FormularioMedicoPageModule {}
