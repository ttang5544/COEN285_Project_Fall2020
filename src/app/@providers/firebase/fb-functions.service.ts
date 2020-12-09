import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';
import { CallableService } from '../service-interfaces';


export type FirebaseCallable = (data: any) => Observable<any>;


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class FirebaseFunctionsService extends CallableService {

  private readonly callables: ReadonlyArray<string> = [
    'CreateNewAccount',
    'SendConfirmationEmail',
  ];

  constructor(private fxn: AngularFireFunctions) {
    super();
  }

  getCallable(name: string): FirebaseCallable {
    if (!this.callables.includes(name)) {
      // throw error to global handler
      return null;
    }
    return this.fxn.httpsCallable(name);
  }
}
