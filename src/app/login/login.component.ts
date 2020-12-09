import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../@providers/service-interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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
  constructor(private router: Router, private userAuth: AuthService) { }

  login(email: string, password: string) {
    this.userAuth.login(email, password)
      .catch((e) => {
        alert(e.message);
      });
  }

}
