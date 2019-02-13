import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatBadgeModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatBadgeModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule]
})
export class SharedModule { }
