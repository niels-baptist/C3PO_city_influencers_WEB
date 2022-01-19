import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security/security.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule }   from '@angular/forms';



@NgModule({
  declarations: [
    SecurityComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports:[
    SecurityComponent
  ]
})
export class SecurityModule { }
