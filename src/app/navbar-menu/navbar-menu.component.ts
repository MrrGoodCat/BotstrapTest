import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.sass']
})
export class NavbarMenuComponent implements OnInit {

  title = 'Dashboard';
  notification = 15;
  menuList: string[];
  constructor() {
    this.menuList = ['Some', 'Anything'];
   }

  ngOnInit() {
  }

}
