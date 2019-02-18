import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,
        MatCheckboxModule,
        MatBadgeModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatSelectModule
        } from '@angular/material';
import { ColorThemes } from './color-themes';
import { ColorThemeMain } from './color-theme-main';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSelectModule
  ],
  providers: [ColorThemes, ColorThemeMain],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSelectModule
  ]
})
export class SharedModule { }
