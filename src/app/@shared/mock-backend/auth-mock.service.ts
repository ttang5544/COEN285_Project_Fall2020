import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class AuthMockService {
  private count: number;
  private users: any[] = [
    //   {
    //     uid: 'uid1uid1uid1',
    //     email: 'abc@gmail.com',
    //     displayName: 'John Doe1'
    //   },
    //   {
    //     uid: 'uid-2',
    //     email: 'twoa@gmail.com',
    //     displayName: 'Jane Doe2'
    //   },
    //   {
    //     uid: 'uid-333',
    //     email: 'three@gmail.com',
    //     displayName: 'John Doe3'
    //   },
  ];

  loggedIn = false;
  currentUser: any;

  constructor() {
    this.count = this.users.length;
  }

  login(email: string, password: string): boolean {
    if (email && this.emails.includes(email)) {
      const userIndex = this.emails.indexOf(email);
      const userid = this.uids[userIndex];
      const userName = this.names[this.emails.indexOf(email)[userIndex]];
      this.currentUser = {
        email,
        uid: userid,
        displayName: userName
      };
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser = null;
    this.loggedIn = false;
    return true;
  }

  signup(email: string, password: string, firstName: string, lastName: string) {
    if (email && password && firstName && lastName) {
      const newUser: any = {
        email,
        uid: `uid-${ this.count }`,
        displayName: `${ firstName } ${ lastName }`
      };
      this.users.push(newUser);
      return true;
    } else {
      return false;
    }
  }

  isLoggedIn(): boolean {
    return this.loggedIn && this.currentUser && !!this.currentUser.email;
  }

  getCurrentUserUid(): string {
    if (this.isLoggedIn()) {
      return this.currentUser.uid;
    }
    return '';
  }

  getCurrentUserName(): string {
    if (this.isLoggedIn()) {
      return this.currentUser.displayName;
    }
    return '';
  }

  getCurrentUserEmail(): string {
    if (this.isLoggedIn()) {
      return this.currentUser.email;
    }
    return '';
  }


  private getUidByEmail(email: string): string {
    if (email && this.emails.includes(email)) {
      const ind: number = this.emails.indexOf(email);
      return this.uids[ind];
    }
  }

  private getNameByEmail(email: string): string {
    if (email && this.emails.includes(email)) {
      const ind: number = this.emails.indexOf(email);
      return this.names[ind];
    }
  }

  get emails(): string[] {
    if (this.users) {
      return this.users.map((user) => user.email);
    }
  }

  get uids(): string[] {
    if (this.users) {
      return this.users.map((user) => user.uid);
    }
  }

  get names(): string[] {
    if (this.users) {
      return this.users.map((user) => user.displayName);
    }
  }
}
