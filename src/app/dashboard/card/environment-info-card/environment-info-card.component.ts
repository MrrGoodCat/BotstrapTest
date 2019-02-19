import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-environment-info-card',
  templateUrl: './environment-info-card.component.html',
  styleUrls: ['./environment-info-card.component.sass']
})
export class EnvironmentInfoCardComponent implements OnInit {

  constructor() {
  }

  spinerColor = 'accent';
  spinerMode = 'determinate';
  spinerValue = 96;

  environmentName = 'Engage UHG Performanceeee'; // Some text for test more and more WWWWWWWWWWWWWW
  version = '6.6.5';
  lastAction = 'Snapshot';
  ciResult = 'none';
  operationStatus = 'Failed';


  ngOnInit() {
  }

}
