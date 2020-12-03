import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { userAuth } from '../userAuth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //email = new FormControl('', [Validators.required, Validators.email]);
  email: string;
  password: string;
  hide = true;

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  constructor(private router:Router, public userAuth: userAuth) { }

  ngOnInit(): void {
  }

  login() {
    this.userAuth.loginWithEmail(this.email,this.password);
    this.router.navigate(['/dashboard'])
    //console.log(this.email+this.password+this.firstname+this.lastname)
  }

}
