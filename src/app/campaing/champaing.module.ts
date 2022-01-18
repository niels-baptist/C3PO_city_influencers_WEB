import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampagneListComponent } from './campagne-list/campagne-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CampagneListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ChampaingModule { }
