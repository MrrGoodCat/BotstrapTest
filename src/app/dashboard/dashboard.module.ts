import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { EnvironmentInfoCardComponent } from './card/environment-info-card/environment-info-card.component';
import {RoundProgressModule, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [DashboardComponent, EnvironmentInfoCardComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    RoundProgressModule
  ],
  providers: [{
    provide: ROUND_PROGRESS_DEFAULTS,
    useValue: {
      color: '#f00',
      background: '#0f0',
      current: 30,
      max: 100
    }
  }],
  exports: []
})
export class DashboardModule { }
