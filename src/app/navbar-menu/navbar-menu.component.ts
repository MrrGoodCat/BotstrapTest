import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../user/authentication.service';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.sass']
})
export class NavbarMenuComponent implements OnInit {

  title = 'Dashboard';
  notification = 15;
  menuList: string[];
  constructor(private router: Router,
              protected auth: AuthenticationService) {
    this.menuList = ['Environments', 'Installation', 'Help'];
  }

  ngOnInit() {
  }

}
