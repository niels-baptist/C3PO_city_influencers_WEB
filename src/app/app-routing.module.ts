import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { CampagneListComponent } from './campaing/campagne-list/campagne-list.component';
// import { UserListComponent } from './admin/user/user-list/user-list.component';
import { InfluencerListComponent } from './influencer/influencer-list/influencer-list.component';

import { SecurityComponent } from './security/security/security.component';

import { LocationListComponent } from './location/location-list/location-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'campagnes', component: CampagneListComponent },
  // { path: 'gebruikers', component: UserListComponent },
  { path: 'influencers', component: InfluencerListComponent },
  { path: 'login', component: SecurityComponent},
  { path: 'logout', component: SecurityComponent},

  { path: 'locations', component: LocationListComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
