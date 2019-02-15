import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-environment-info-card',
  templateUrl: './environment-info-card.component.html',
  styleUrls: ['./environment-info-card.component.sass']
})
export class EnvironmentInfoCardComponent implements OnInit {

  constructor() { }
  current = 30;
  max = 100;

  environmentName = 'Engage UHG Performance';

  doSomethingWithCurrentValue(value: number) {

  }
  ngOnInit() {
  }

}
