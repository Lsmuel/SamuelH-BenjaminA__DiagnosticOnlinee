import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaderaPageRoutingModule } from './cadera-routing.module';

import { CaderaPage } from './cadera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaderaPageRoutingModule
  ],
  declarations: [CaderaPage]
})
export class CaderaPageModule {}
