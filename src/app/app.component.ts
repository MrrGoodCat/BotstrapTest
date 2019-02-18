import { Component, OnChanges } from '@angular/core';
import { ColorThemes } from './shared/color-themes';
import { DashboardService } from './dashboard/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnChanges {
  constructor(public color: ColorThemes,
              private dashboardService: DashboardService) {
  }
  value: string;
  viewValue: string;
  themes = [ { value: 'main', viewValue: 'Main'}, {value: 'secondary', viewValue: 'Secondary'}, { value: 'third', viewValue: 'Monocai'} ];

  public selected: 'main';

  public selectTheme(theme: string): void {
    // this.color.selectTheme(theme);
    ColorThemes.themeName = theme;
    console.log('Color is: ', ColorThemes.themeName);
  }

  ngOnChanges() {
    this.color.selectTheme(this.selected);
    console.log('Color is: ', ColorThemes.themeName);
  }
}
