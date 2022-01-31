import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { InfluencerListComponent } from './influencer-list/influencer-list.component';
import { InfluencerDetailComponent } from './influencer-detail/influencer-detail.component';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import {MatIconModule} from '@angular/material/icon';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InfluencerCardComponent } from './influencer-card/influencer-card.component';
import { HeaderComponent } from './header/header.component';
import { InfluencerPostComponent } from './influencer-post/influencer-post.component';



@NgModule({
  declarations: [
    InfluencerListComponent,
    InfluencerDetailComponent,
    InfluencerCardComponent,
    HeaderComponent,
    InfluencerPostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    SharedModule
  ]
})
export class InfluencerModule { }
