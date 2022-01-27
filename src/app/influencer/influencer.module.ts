import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { InfluencerListComponent } from './influencer-list/influencer-list.component';
import { InfluencerDetailComponent } from './influencer-detail/influencer-detail.component';




@NgModule({
  declarations: [
    InfluencerListComponent,
    InfluencerDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    SharedModule
  ]
})
export class InfluencerModule { }
