import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampagneListComponent } from './campagne-list/campagne-list.component';
import { SharedModule } from '../shared/shared.module';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';



@NgModule({
  declarations: [
    CampagneListComponent,
    CampaignFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ChampaingModule { }
