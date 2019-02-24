import { Component, OnInit } from '@angular/core';
import { Environment } from '../../environment';
import { Params, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-system-details',
  templateUrl: './system-details.component.html',
  styleUrls: ['./system-details.component.sass']
})
export class SystemDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private dashboardService: DashboardService) { }

  environment: Environment = null;

  save() {
  }

  ngOnInit() {
    let id: number;
    this.activatedRoute.params.forEach((params: Params) => {
      id = params.id;
    });
    console.log('The Id is: ', id);

    this.dashboardService.getEnvironment(id).subscribe((data: any) => {
      this.environment = data;
      console.log(data);
    });
  }

}
