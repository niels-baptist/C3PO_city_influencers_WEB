import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from './user/user.module';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserModule
  ],
  exports:[
    UserModule
  ]
})
export class AdminModule { }
