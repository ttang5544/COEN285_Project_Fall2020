import { Injectable, Inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ResultResponse } from '../../../@shared/data-models/message-result.modle';
import { UserData } from '../../../@shared/data-models/user.model';
import { FirebaseFirestoreService } from '../firebase/fb-firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { USER_ID } from '../provider-facades/injected-dependencies.provider';
import { MutableUserData } from '../firebase/fb-utilities';
import firebase from 'firebase';
import { map, pluck } from 'rxjs/operators';
import { UserReservationsInfo } from '../../../@shared/data-models/reservation.model';
import { ItemData, ItemInfo } from '../../../@shared/data-models/item.model';






@Injectable({
  providedIn: 'root'
})
export class UserDataRecordService extends FirebaseFirestoreService<UserData> {

  constructor(protected afs: AngularFirestore, @Inject(USER_ID) private userId: string
  ) {
    super(afs);
  }

  updateRecord(id: string, updates: MutableUserData): Observable<ResultResponse> {

    return;
  }

  getUserReservationsInfo(id: string): Observable<UserReservationsInfo> {
    const reservations$: Observable<{ owner: string[], renter: string[]; }> = this.afs.collection('users').doc<UserData>(id).get().pipe(
      map((dsnapshot) => dsnapshot.exists
        ? dsnapshot.data().reservations : { owner: [], renter: [] }),
    );
    // const ownerReservations$ = reservations$.pipe(pluck('owner'));
    // const renterReservations$ = reservations$.pipe(pluck('renter'));
    return reservations$;
  }

  getUserItemsInfo(id: string): Observable<ItemInfo[]> {
    const items$: Observable<ItemInfo[]> = this.afs.collection('users').doc<UserData>(id).get()
      .pipe(
        map((dsnapshot) => dsnapshot.exists
          ? dsnapshot.data().items : []),

      );
    return items$;
    // return items$;
    // from(this.afs.collection('users').doc<.ref.where('ownerId', '==', id).
    // .get()).pipe(
    //   map((qsnapshot) => {
    //     (qsnapshot && qsnapshot.query.)
    //       ? qsnapshot.
    //       :
    //   })

    // );
  }

}


