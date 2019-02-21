import { Component, OnInit} from '@angular/core';
import { Environment } from '../../environment';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-environment-info-card',
  templateUrl: './environment-info-card.component.html',
  styleUrls: ['./environment-info-card.component.sass']
})
export class EnvironmentInfoCardComponent implements OnInit {

  constructor( public dashboardServise: DashboardService ) {
    this.spinerValue = 0;
  }

  environments: Environment[];
  errorMessage: string;

  spinerColor = 'accent';
  spinerMode = 'determinate';
  spinerValue = 96;

  environmentName = 'Engage UHG Performanceeee'; // Some text for test more and more WWWWWWWWWWWWWW
  version = '6.6.5';
  lastAction = 'Snapshot';
  ciResult = 'none';
  operationStatus = 'Failed';


  ngOnInit() {
    this.dashboardServise.getEnvironments()
      .subscribe(envs => this.environments = envs,
                  error => this.errorMessage = error);
    console.log('Environments is: ', JSON.stringify(this.environments));
  }

}
