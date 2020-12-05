import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from, of } from 'rxjs';
import firebase from 'firebase';
import { User } from '../../../data-models/auth-data.model';
import { map, switchMap, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  loggedIn = false;
  currUser$: Observable<User>;
  isAuthenticated$: Observable<boolean>;

  constructor(private afAuth: AngularFireAuth) {
    this.currUser$ = this.afAuth.user.pipe(
      // switchMap((user: firebase.User) => {
      //   if (user) {
      //     const appUser: User = {
      //       uid: user.uid,
      //       email: user.email,
      //       displayName: user.displayName
      //     };
      //     return appUser;
      //   }
      // })
      share()
    );
  }

  login(email: string, password: string) {
    if (email && password) {
      this.afAuth.signInWithEmailAndPassword(email, password);
    }
  }

  logout() {

  }

  registerByEmail(email: string, password: string, firstName: string, lastName: string): Observable<any> {
    if (!email || !password || !firstName || !lastName) {
      return of({
        code: 'auth/argument-error',
        message: 'Received invalid argument for request'
      });
    }
    return from(
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then((cred: firebase.auth.UserCredential) => {
          if (cred && cred.user) {
            return cred.user.updateProfile({ displayName: firstName + ' ' + lastName });
          }
          throw { code: 'auth/invalid-argument', message: 'Error creating user account' };
        }).catch((e: firebase.FirebaseError) => {
          return e;
        })
    );
  }
}
