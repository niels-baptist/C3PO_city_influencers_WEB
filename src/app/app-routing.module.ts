import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { CampagneListComponent } from './campaing/campagne-list/campagne-list.component';
import { UserListComponent } from './admin/user/user-list/user-list.component';
import { InfluencerListComponent } from './influencer/influencer-list/influencer-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'campagnes', component: CampagneListComponent },
  { path: 'gebruikers', component: UserListComponent },
  { path: 'influencers', component: InfluencerListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
