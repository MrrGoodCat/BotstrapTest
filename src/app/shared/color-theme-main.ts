import { IColor } from './i-color';

export class ColorThemeMain implements IColor {
  public primary = 'red';

  public getPrimaryColor(themeName: string): string {
    // if (themeName === 'main') {
    //   return 'blue';
    // } else {
    //   return 'orange';
    // }

    switch (themeName) {
      case 'main':
        return 'blue';
        break;
      case 'secondary':
        return 'violet';
        break;
      case 'third':
        return 'gray';
        break;
      default:
        return 'crimson';
        break;
    }
  }

}
