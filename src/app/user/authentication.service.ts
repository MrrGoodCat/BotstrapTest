import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  logedin = false;

  login() {
    this.logedin = true;
  }
}
