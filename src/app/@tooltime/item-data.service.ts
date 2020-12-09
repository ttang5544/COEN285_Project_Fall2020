// import { Injectable } from '@angular/core';
// import { ItemData } from '../../../@shared/data-models/item.model';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import { FirebaseFirestoreService } from '../firebase/fb-firestore.service';
// import { Timeblock } from '../../../../../functions/src/utils/models';
// import { map } from 'rxjs/operators';
// import { ReservationData } from '../../../@shared/data-models/reservation.model';



// @Injectable({
//   providedIn: 'root'
// })
// export class ItemDataRecordService extends FirebaseFirestoreService<ItemData> {

//   protected readonly base = 'items';

//   constructor(protected afs: AngularFirestore) {
//     super(afs);
//   }

//   deleteRecord(id: string) { // : Observable<ResultResponse> {
//     console.log('delete record');
//   }

//   // getUserItemsByCategory(category: string) {

//   // }

//   getItemReservationsData(itemId: string): Observable<ReservationData[]> {
//     const itemReservationsInfo: ReservationData[] = this.afs.collection('items').doc<ItemData>(itemId).get().pipe(
//       map((dsnapshot) => dsnapshot.exists ? dsnapshot.data().reservationIds : []),
//       map((resIds: string[]) => )
//     );
//     const scheduledRentalTimeblocks: Observable<Timeblock[]> = this.afs.collection('items').doc<ItemData>(itemId).get().pipe(
//       map((snapshot) => snapshot.exists ? snapshot.data().reservationIds),

//     );


//   }
// }

