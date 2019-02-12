import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DropdownBasicComponent } from '../app/dropdown-basic.component';

import { AppComponent } from './app.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownBasicComponent,
    NavbarMenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
