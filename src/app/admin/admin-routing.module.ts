import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {path: 'user', component: UserListComponent},
  // {path: 'category/form', component: CategoryFormComponent},
  // {path: 'status', component: StatusListComponent},
  // {path: 'status/form', component: StatusFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
