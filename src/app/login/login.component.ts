import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../app-services/backend/firebase/fb-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // email = new FormControl('', [Validators.required, Validators.email]);
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
  constructor(private router: Router, private userAuth: FirebaseAuthService) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    this.userAuth.login(email, password)
      .then((r) => {
        console.log('successfully logged in');
        this.router.navigate(['/item-list-path']);
      })
      .catch((e) => {
        console.error('invalid login', e);
      });
  }

}
