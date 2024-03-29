import { signupData } from './signupData.model';
import { loginData } from './loginData.model';
import { Injectable } from '@angular/core';
//import { mockData } from './posts.mock-data';

@Injectable({ providedIn: 'root' })

export class userAuth {

  private signupDatas: signupData[] = [];
  private loginDatas: loginData[] = [];

  constructor() {
    this.signupDatas = [];
    this.loginDatas = [];
  }

  registerWithEmail( email: string, password: string, firstname: string, lastname: string) {
    const tempt: signupData = {
      email,
      password,
      firstname,
      lastname
    };
    this.signupDatas.push(tempt);
    console.log(this.signupDatas);
  }

  loginWithEmail( email: string, password: string) {
    const tempt: loginData = {
      email,
      password
    };
    this.loginDatas.push(tempt);
    console.log(this.loginDatas);
  }
}
