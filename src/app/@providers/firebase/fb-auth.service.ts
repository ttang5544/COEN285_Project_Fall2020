import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { UserInfo } from '../../@shared/data-models/user.model';
import { AuthService } from '../service-interfaces';





@Injectable()
export class FirebaseAuthService extends AuthService implements OnDestroy {
  private unsubOnDestroy = new Subject<void>();
  loggedIn = false;
  userInfo: UserInfo;
  currUserInfo$: Observable<UserInfo>;
  isAuthenticated$: Observable<boolean>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    super();
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

  login(email: string, password: string) {
    if (email && password) {
      return this.afAuth.signInWithEmailAndPassword(email, password)
        .then((r) => {
          console.log('successfully logged in');
          this.router.navigate(['/dashboard']);
        })
        .catch((e) => {
          alert(e.message);
        });
    } else {
      return Promise.reject(new Error('You must enter a valid email and password'));
    }
  }

  logout() {
    return this.afAuth.signOut()
      .catch((e) => { })
      .then(_ => this.router.navigate(['/login']));

  }

  signup(email: string, password: string, firstName: string, lastName: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((cred: firebase.auth.UserCredential) => {
        if (cred?.user) {
          console.log('profile updated');
          return cred.user.updateProfile({ displayName: firstName + ' ' + lastName });
        }
      }).then((_) => this.router.navigate(['/dashboard']))
      .catch((e) => {
        alert(e.message);
      });
  }
}
