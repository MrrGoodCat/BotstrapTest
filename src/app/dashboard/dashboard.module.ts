import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { EnvironmentInfoCardComponent } from './card/environment-info-card/environment-info-card.component';
import { SystemDetailsComponent } from './card/environment-info-card/system-details.component';
import { DashboardService } from './dashboard.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DashboardComponent, EnvironmentInfoCardComponent, SystemDetailsComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    CommonModule
  ],
  providers: [DashboardService],
  exports: []
})
export class DashboardModule { }
