import { Observable } from 'rxjs';
import { User } from '../../../@shared/data-models/auth-data.model';
import { Item } from '../../../@shared/data-models/item.model';
import { ResultResponse } from '../../../@shared/data-models/message-result.modle';
import { Reservation } from '../../../@shared/data-models/reservation.model';
import { AngularFirestore } from '@angular/fire/firestore';


export type RecordType = User | Item | Reservation;


// RECORD TYPES: user   item     reservation
// export abstract class RecordService<T extends RecordType> {
//   abstract getRecord(itemId: string): T;
//   abstract setRecord(itemId: string, record: T);
//   abstract updateRecord(itemId: string, updates: T);
//   // abstract deleteRecord(itemId: string);
// }

export abstract class RecordService<T = RecordType> {
  // export interface RecordService<T = User | Item | Reservation> {
  constructor(protected firestore: AngularFirestore) { }

  abstract getRecord(id: string): Observable<T>;
  abstract setRecord(id: string, record: T): Observable<ResultResponse>;
  abstract updateRecord(id: string, updates: T): Observable<ResultResponse>;
  // abstract deleteRecord(itemId: string);
}





// custom FIrestore objects
// https://firebase.google.com/docs/firestore/manage-data/add-data#web_3
// define a FirestoreDataConverter function for the class ===================================
// class City {
//   constructor (name, state, country ) {
//       this.name = name;
//       this.state = state;
//       this.country = country;
//   }
//   toString() {
//       return this.name + ', ' + this.state + ', ' + this.country;
//   }
// }

// =================================== // Firestore data converter FUNCTION
// const cityConverter = {
//   toFirestore: ((city) => {
//       return {
//         name: city.name,
//         state: city.state,
//         country: city.country
//       };
//   }),
//   fromFirestore: ((snapshot, options) => {
//     const data = snapshot.data(options);
//     return new City(data.name, data.state, data.country);
//   })
// };

// call data converter with write operation ===================================
/*
  // Set with cityConverter
  db.collection("cities").doc("LA")
    .withConverter(cityConverter)
    .set(new City("Los Angeles", "CA", "USA"));
*/
