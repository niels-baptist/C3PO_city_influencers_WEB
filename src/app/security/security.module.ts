import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SecurityComponent } from './security/security.component';



@NgModule({
  declarations: [
    SecurityComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    SharedModule
  ]
})
export class SecurityModule { }
