import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { EnvironmentInfoCardComponent } from './card/environment-info-card/environment-info-card.component';
import { SystemDetailsComponent } from './card/environment-info-card/system-details.component';

@NgModule({
  declarations: [DashboardComponent, EnvironmentInfoCardComponent, SystemDetailsComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  providers: [],
  exports: []
})
export class DashboardModule { }
