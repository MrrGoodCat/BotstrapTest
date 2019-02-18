import { Component, OnInit } from '@angular/core';
import { ColorThemeMain } from 'src/app/shared/color-theme-main';
import { ColorThemes } from 'src/app/shared/color-themes';

@Component({
  selector: 'app-environment-info-card',
  templateUrl: './environment-info-card.component.html',
  styleUrls: ['./environment-info-card.component.sass']
})
export class EnvironmentInfoCardComponent implements OnInit {

  constructor(public color: ColorThemeMain,
              private colorSet: ColorThemes) {
  }

  spinerColor = 'accent';
  spinerMode = 'determinate';
  spinerValue = 96;

  environmentName = 'Engage UHG Performanceeee'; // Some text for test more and more WWWWWWWWWWWWWW
  version = '6.6.5';
  lastAction = 'Snapshot';
  ciResult = 'none';
  operationStatus = 'Failed';
  isMainTheme = false;
  themeName = ColorThemes.themeName;

  // primary = '#9E3F78';

      // color = new ColorThemeMain();
      // console.log('color is: ', this.color.primary);
      // this.color.primary = 'orange';

  ngOnInit() {
    // if (this.isMainTheme) {
    //   this.color = new ColorThemeMain();
       console.log('color is: ', this.color.primary);
    //   this.color.primary = 'orange';
    // } else {
    //   this.color = new ColorThemes();
    //   console.log('color is: ', this.color.primary);
    //   this.color.primary = 'violet';
    // }
  }

}
