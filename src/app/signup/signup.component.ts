import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthMockService } from '../mock-backend/auth-mock.service';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private router: Router, public userAuth: AuthMockService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  signUp() {
    this.userAuth.signup(this.email, this.password, this.firstname, this.lastname);
    this.userAuth.login(this.email, this.password);
    this.router.navigate(['/item-list-path']);
    //console.log(this.email+this.password+this.firstname+this.lastname)
  }

}
