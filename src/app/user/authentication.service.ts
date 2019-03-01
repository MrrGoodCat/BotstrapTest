import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) { }

  logedin = false;

  login() {
    this.logedin = true;
  }

  signOut() {
    this.router.navigateByUrl('/welcome');
    this.logedin = false;
  }
}
