import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { from, Observable, of, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { User } from '../../../@shared/data-models/auth-data.model';





@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService implements OnDestroy {
  private unsubOnDestroy = new Subject<void>();
  loggedIn = false;
  user: User;
  currUser$: Observable<User>;
  isAuthenticated$: Observable<boolean>;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.user.pipe(takeUntil(this.unsubOnDestroy))
      .subscribe((user: firebase.User) => {
        if (user) {
          this.loggedIn = true;
          this.user = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName
          };
        } else {
          this.loggedIn = false;
          this.user = null;
        }
      });
    this.currUser$ = this.afAuth.user.pipe(
      map((user: firebase.User) => {
        if (user) {
          const currUser = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            // claims:
          };
          return currUser;
        }
      }),
      shareReplay(1));
    this.isAuthenticated$ = this.currUser$.pipe(
      map((user: firebase.User) => !!user),
      shareReplay(1));
  }

  ngOnDestroy() {
    this.unsubOnDestroy.next();
    this.unsubOnDestroy.complete();
  }

  login(email: string, password: string): Promise<any> {
    if (email && password) {
      return this.afAuth.signInWithEmailAndPassword(email, password);
      // .catch((e) => {
      //   console.error('Error logging in - ' + e.code + '  ' + e.message);
      // });
    } else {
      return Promise.resolve(null);
    }
  }

  logout() {
    return this.afAuth.signOut();
  }

  signup(email: string, password: string, firstName: string, lastName: string): Observable<any> {
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
