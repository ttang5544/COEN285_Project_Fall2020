import { Component, OnInit } from '@angular/core';
//import { userAuth } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  signUp() {
    //userAuth.registerWithEmail(this.email,this.password,this.firstname,this.lastname);
    console.log(this.email+this.password+this.firstname+this.lastname)
  }

}
