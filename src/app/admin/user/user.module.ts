import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {UserListComponent} from './user-list/user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserService } from './user.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    // UserListComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
