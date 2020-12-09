import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../@providers/service-interfaces';



@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  isLoading = false;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  hide = true;

  errmsg: string;
  showMsg = false;

  constructor(private router: Router, public userAuth: AuthService) { }

  signUp() {
    this.userAuth.signup(this.email, this.password, this.firstname, this.lastname);
  }

}
