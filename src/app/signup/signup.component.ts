import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../app-services/backend/firebase/fb-auth.service';

@Component({
  selector: 'app-signup',
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

  constructor(private router: Router, public userAuth: FirebaseAuthService) { }

  signUp() {
    this.userAuth.signup(this.email, this.password, this.firstname, this.lastname);
    this.router.navigate(['/item-list-path']);
    // console.log(this.email+this.password+this.firstname+this.lastname)
  }

}
