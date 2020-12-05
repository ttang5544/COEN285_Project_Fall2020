import { Injectable, Inject } from '@angular/core';
import { RecordService, RecordType } from './fb-utilities';
import { User } from '../../../@shared/data-models/auth-data.model';
import { Item } from '../../../@shared/data-models/item.model';
import { Reservation } from '../../../@shared/data-models/reservation.model';
import { Observable } from 'rxjs';
import { ResultResponse } from '../../../@shared/data-models/message-result.modle';
import { AngularFirestore } from '@angular/fire/firestore';
import { USER_ID } from '../provider-facades/fb-providers';


// export abstract class FirebaseFirestoreService<T extends RecordService<RecordType>> {
// export abstract class FirebaseFirestoreService implements RecordService<T extends RecordType> {

//   abstract getRecord(itemId: string): RecordType;
//   abstract setRecord(itemId: string, record: RecordType);
//   abstract updateRecord(itemId: string, updates: RecordType);
//     // abstract deleteRecord(itemId: string);
// }


@Injectable({
  providedIn: 'root'
})
export class UserRecordService extends RecordService<User> {

  constructor(protected firestore: AngularFirestore, @Inject(USER_ID) private userId: string) {
    super(firestore);
  }

  getRecord(id: string): Observable<User> {
    return;
  }

  getRecords(idList: string[]) { // : Observable<User[]> {
    if (idList && idList.length > 0) {

    }
  }
  setRecord(id: string, record: User): Observable<ResultResponse> {

    return;
  }
  updateRecord(id: string, updates: Partial<User>): Observable<ResultResponse> {

    return;
  }
  // deleteRecord(itemId: string);
}






@Injectable({
  providedIn: 'root'
})
export class ItemRecordService extends RecordService<Item> {

  constructor(protected firestore: AngularFirestore) { super(firestore); }

  getRecord(id: string): Observable<Item> {
    return;
  }
  setRecord(id: string, record: Item): Observable<ResultResponse> {

    return;
  }
  updateRecord(id: string, updates: Partial<Item>): Observable<ResultResponse> {

    return;
  }
  deleteRecord(id: string) { // : Observable<ResultResponse> {

  }
}





@Injectable({
  providedIn: 'root'
})
export class ReservationRecordService extends RecordService<Reservation> {

  constructor(protected firestore: AngularFirestore) { super(firestore); }

  getRecord(id: string): Observable<Reservation> {
    return;
  }
  setRecord(id: string, record: Reservation): Observable<ResultResponse> {

    return;
  }
  updateRecord(id: string, updates: Partial<Reservation>): Observable<ResultResponse> {

    return;
  }
}
