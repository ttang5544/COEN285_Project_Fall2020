import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../app-services/backend/firebase/fb-auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';


export interface FRes {
  error: {
    message: string;
    status: string;
    details: { [key: string]: any; };
  };
}

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


  fxnObs: Observable<FRes>;
  errmsg: string;
  showMsg = false;

  // constructor(private router: Router, public userAuth: FirebaseAuthService) { }
  constructor(private router: Router, private fxns: AngularFireFunctions) { }

  signUp() {
    // this.userAuth.signup(this.email, this.password, this.firstname, this.lastname);
    // this.router.navigate(['/item-list-path']);
    console.log(this.email + this.password + this.firstname + this.lastname);
    const CreateNewAccount = this.fxns.httpsCallable('CreateNewAccount');
    const fxnObs = CreateNewAccount({
      data: {
        email: 'deepfrydktns@gmail.com',
        password: '123456aa',
        firstName: 'butt',
        lastName: 'muncher'
      }
    });
    this.fxnObs = fxnObs;
    console.log('EXECUTING CLOUD FXN');
    const sub = fxnObs.subscribe(
      (result) => {
        console.log(`   GOT  RESULT: `);
        console.log(result);
      },
      (error) => {
        console.log(`   GOT ERROR:  ${ error.message }  ${ error.code ?? error.status }`);
        console.log(error);
        this.errmsg = error.message;
      }
    );
  }

}
