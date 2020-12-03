import { Component, OnInit } from '@angular/core';
import { userAuth } from '../userAuth.service';
import { Router } from '@angular/router';

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

  constructor(private router:Router, public userAuth: userAuth){}

  ngOnInit(): void {
  }

  signUp() {
    this.userAuth.registerWithEmail(this.email,this.password,this.firstname,this.lastname);
    this.router.navigate(['/item-list-path'])
    //console.log(this.email+this.password+this.firstname+this.lastname)
  }

}
