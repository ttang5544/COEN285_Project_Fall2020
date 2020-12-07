import { InjectionToken, inject, Provider } from '@angular/core';
import { FirebaseAuthService } from '../firebase/fb-auth.service';

export const USER_ID = new InjectionToken<string>('Token.UserID');

const USER_ID_PROV: Provider = {
  provide: USER_ID,
  useFactory: (auth: FirebaseAuthService) => auth.user.uid,
  deps: [FirebaseAuthService]
};





export const PROVIDERS: Provider[] = [
  USER_ID_PROV,

];
