import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

import { ChampaingModule } from './campaing/champaing.module';
import { InfluencerModule } from './influencer/influencer.module';

import {SharedModule} from './shared/shared.module';
import {AdminModule} from './admin/admin.module';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SecurityModule } from './security/security.module';
import { SecurityComponent } from './security/security/security.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    ChampaingModule,
    InfluencerModule,
    SharedModule,
    // AdminModule,

    FormsModule,
    ReactiveFormsModule,


    SecurityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
