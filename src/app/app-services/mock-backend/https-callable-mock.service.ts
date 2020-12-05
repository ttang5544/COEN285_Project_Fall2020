import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root'
})
export class HttpsCallableMockService {
  private readonly callables: string[] = [''];

  constructor(private fxn: AngularFireFunctions) { }

  getCallable(name: string) {
    const callable = this.fxn.httpsCallable('');
  }
}
