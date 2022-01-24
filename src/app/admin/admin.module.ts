import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from './user/user.module';
import {AdminRoutingModule} from './admin-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    UserModule
  ],
  exports:[
    UserModule
  ]
})
export class AdminModule { }
