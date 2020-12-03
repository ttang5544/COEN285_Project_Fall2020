import { Injectable } from '@angular/core';
import { FirebaseAuthService } from './lowlevel-services/firebase-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthFacadeService {

  constructor(private fbAuth: FirebaseAuthService) {

  }

  login(email: string, password: string) {

  }

  logout() {

  }

  registerWithEmail(email: string, password: string) {

  }

}
