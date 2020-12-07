import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';


export type FirebaseCallable = (data: any) => Observable<any>;


@Injectable({
  providedIn: 'root'
})
export class FirebaseFunctionsService {

  // TODO-icing separate config from code -> list of callables names' in a JSON imported + read @ runtime
  private readonly callables: ReadonlyArray<string> = [
    'CreateNewAccount',
    'SendConfirmationEmail',
  ];

  constructor(private fxn: AngularFireFunctions) { }

  getCallable(name: string): FirebaseCallable {
    if (!this.callables.includes(name)) {
      // throw error to global handler
      return null;
    }
    return this.fxn.httpsCallable(name);
  }
}
