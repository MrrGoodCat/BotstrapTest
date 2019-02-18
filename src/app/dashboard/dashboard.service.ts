import { Injectable } from '@angular/core';
import { ColorThemes } from "../shared/color-themes";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor() { }
  //public colorSet: BehaviorSubject<string> = new BehaviorSubject('main');
}
