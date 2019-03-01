import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,
        MatCheckboxModule,
        MatBadgeModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatSelectModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
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
    MatSelectModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [ColorThemes, ColorThemeMain],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSelectModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class SharedModule { }
