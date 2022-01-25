import { InfluencerModule } from './../influencer/influencer.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuComponent } from './../menu/menu.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InfluencerModule
  ]
})
export class DashboardModuleModule { }
