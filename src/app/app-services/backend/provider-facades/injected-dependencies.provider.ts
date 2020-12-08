import { InjectionToken, inject, Provider } from '@angular/core';
import { UserInfo } from '../../../@shared/data-models/user.model';
import { FirebaseAuthService } from '../firebase/fb-auth.service';

export const USER_ID = new InjectionToken<string>('Token.UserID');
export const USER_INFO = new InjectionToken<UserInfo>('Token.UserID');

const USER_ID_PROV: Provider = {
  provide: USER_ID,
  useFactory: (auth: FirebaseAuthService) => auth.userInfo.uid,
  deps: [FirebaseAuthService]
};

const USER_INFO_PROV: Provider = {
  provide: USER_INFO,
  useFactory: (auth: FirebaseAuthService) => auth.userInfo,
  deps: [FirebaseAuthService]
};





export const PROVIDERS: Provider[] = [
  USER_ID_PROV,
  USER_INFO_PROV
];
