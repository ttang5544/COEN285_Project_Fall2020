import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { from, Observable, of, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { UserData, UserInfo } from '../../../@shared/data-models/user.model';





@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService implements OnDestroy {
  private unsubOnDestroy = new Subject<void>();
  loggedIn = false;
  userInfo: UserInfo;
  currUserInfo$: Observable<UserInfo>;
  isAuthenticated$: Observable<boolean>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.user.pipe(takeUntil(this.unsubOnDestroy))
      .subscribe((user: firebase.User) => {
        if (user) {
          this.loggedIn = true;
          this.userInfo = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          };
        } else {
          this.loggedIn = false;
          this.userInfo = null;
        }
      });
    this.currUserInfo$ = this.afAuth.user.pipe(
      map((user: firebase.User) => {
        if (user) {
          const currUser = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          };
          return currUser;
        }
      }),
      shareReplay(1));
    this.isAuthenticated$ = this.afAuth.user.pipe(
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
    return this.afAuth.signOut()
      .catch((e) => { })
      .then(_ => this.router.navigate(['/login']));

  }

  signup(email: string, password: string, firstName: string, lastName: string) {
    // if (!email || !password || !firstName || !lastName) {
    //   return of({
    //     code: 'auth/argument-error',
    //     message: 'Received invalid argument for request'
    //   });
    // }
    // // TODO  functions service to call CreateNewAccount



    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((cred: firebase.auth.UserCredential) => {
        if (cred?.user) {
          return cred.user.updateProfile({ displayName: firstName + ' ' + lastName });
        }
      }).catch((e) => {
        // return e;
      }).then((_) => this.router.navigate(['/dashboard']));
  }
}
