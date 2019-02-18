import { DashboardService } from '../dashboard/dashboard.service';

export class ColorThemes {
  // constructor(private dashboardServise: DashboardService) {
  //   this.dashboardServise.colorSet.subscribe( value => {
  //     ColorThemes.themeName = value;
  //   });
  // }
  public static themeName = 'secondary';

  public selectTheme(theme: string): void {
    ColorThemes.themeName = theme;
  }
}
