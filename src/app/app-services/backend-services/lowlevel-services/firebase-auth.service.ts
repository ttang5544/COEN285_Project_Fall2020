import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from, of } from 'rxjs';
import firebase from 'firebase';
import { SimpleResponse } from '../utilities/request-response.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private afAuth: AngularFireAuth) {

  }

  login() {

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
          throw { code: 'nocred', message: 'createUserWithEmail DID NOT RETURN USER CREDENTIAL' };
        }).catch((e: firebase.FirebaseError) => {
          return e;
        })
    );
  }
}
