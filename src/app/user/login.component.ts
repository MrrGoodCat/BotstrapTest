import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl  } from '@angular/forms';

function passwordChecker(password: string) {
  return (c: AbstractControl): {[key: string]: boolean} | null => {
    if (c.value !== null && (isNaN(c.value) || c.value !== password)) {
      return {'passwordMatch': true};
    }
    return null;
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(protected auth: AuthenticationService,
              private router: Router,
              private fb: FormBuilder) {
  }

  loginForm: FormGroup;
  // email = new FormControl('', [Validators.required, Validators.email]);
  // name = new FormControl('', [Validators.minLength(3)]);
  firstName: string;
  password: string;
  hide = true;

  getEmailErrorMessage() {
    // return this.email.hasError('required') ? 'You must enter a value' :
    //     this.email.hasError('email') ? 'Not a valid email' :
    //         'Some error';
  }

  getNameErrorMessage() {
    // return this.name.hasError('required') ? 'You must enter a value' :
    //         'First Name is required, and must be at least 3 characters.';
  }
  signIn(loginForm: NgForm) {

  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, passwordChecker('1111')]]
    });
  }

}
