import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManosPageRoutingModule } from './manos-routing.module';

import { ManosPage } from './manos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManosPageRoutingModule
  ],
  declarations: [ManosPage]
})
export class ManosPageModule {}
