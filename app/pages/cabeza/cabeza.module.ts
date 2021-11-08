import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabezaPageRoutingModule } from './cabeza-routing.module';

import { CabezaPage } from './cabeza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabezaPageRoutingModule
  ],
  declarations: [CabezaPage]
})
export class CabezaPageModule {}
