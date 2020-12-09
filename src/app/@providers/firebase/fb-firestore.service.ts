import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import { forkJoin, Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { isNilOrEmptyObject } from '../../@shared/object-utilities';
import { RecordType } from './fb-utilities';









export abstract class FirebaseFirestoreService<T extends RecordType> {

  protected readonly base: 'users' | 'items' | 'reservations';
  protected messagesSUBJ = new Subject<any>();

  get firestoreResults$(): Observable<any> {
    if (this.messagesSUBJ instanceof Subject) {
      return this.messagesSUBJ.asObservable();
    }
  }

  constructor(protected afs: AngularFirestore) { }

  // getRecordById(id: string, type: string): Observable<UserData>;
  // getRecordById(id: string, type: string): Observable<ItemData>;
  // getRecordById(id: string, type: string): Observable<ReservationData> {
  getRecordById(id: string): Observable<T> {

    this.messagesSUBJ.next();
    return this.afs.collection(this.base)
      .doc<T>(id)
      .get().pipe(
        take(1),
        map((snapshot: firebase.firestore.DocumentSnapshot) => {
          if (snapshot?.exists) {
            return snapshot.data() as T;
          } else {
            // emit error message off of responseObs$ on service for display???
            this.messagesSUBJ.next({ success: false, error: new Error('No record data was found') });
            console.log('ERR - invalid record data');
            return null;
          }
        }),
      );
  }

  getRecordsByIds(ids: string[]): Observable<T[]> {
    const arrayOfGets = ids?.length < 1 ? [] : ids.map((id) => this.getRecordById(id));
    return forkJoin(arrayOfGets);
  }

  setRecord(data: T) { // : Observable<any> {
    if (isNilOrEmptyObject(data) || this.base === 'users' || data.hasOwnProperty('email')) {
      // emit error msg
      this.messagesSUBJ.next({ success: false });
      console.log('WARNING.setRecord() - delete data request received   ||  tried to write user data');
      return;
    }
    return this.afs.collection(this.base).add(data);  // error handle returned promise
  }

  updateRecord(id: string, updates: any) {
    if (!id || isNilOrEmptyObject) {
      // emit error msg
      this.messagesSUBJ.next({ success: true });
      console.log('WARNING.updateRecord() - delete data request received   ||  tried to write user data');
      return;
    } else {

    }
  }

}

