// import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DropdownBasicComponent } from '../app/dropdown-basic.component';

import { AppComponent } from './app.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpModule } from '@angular/http';
import { EnvironmentData } from './dashboard/environment-data';

@NgModule({
  declarations: [
    AppComponent,
    DropdownBasicComponent,
    NavbarMenuComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    // BrowserModule,
    NgbModule,
    SharedModule,
    HttpClientModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(EnvironmentData, { delay: 1000 }),
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
