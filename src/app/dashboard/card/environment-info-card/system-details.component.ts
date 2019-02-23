import { Component, OnInit } from '@angular/core';
import { Environment } from '../../environment';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-system-details',
  templateUrl: './system-details.component.html',
  styleUrls: ['./system-details.component.sass']
})
export class SystemDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private dashboardService: DashboardService) { }

  environment: Environment;

  ngOnInit() {
    // this.environment = this.dashboardService.getEnvironment()
    this.activatedRoute.parent.data.subscribe(data => {
      this.environment = data.environment;
    });
    // this.environment = this.activatedRoute.snapshot.data['environment'];
  }

}
