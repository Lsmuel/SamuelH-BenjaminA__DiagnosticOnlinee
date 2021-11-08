import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualDeUsoPageRoutingModule } from './manual-de-uso-routing.module';

import { ManualDeUsoPage } from './manual-de-uso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualDeUsoPageRoutingModule
  ],
  declarations: [ManualDeUsoPage]
})
export class ManualDeUsoPageModule {}
