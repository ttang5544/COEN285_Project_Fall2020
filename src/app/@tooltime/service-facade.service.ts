import { Inject, Injectable, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseFirestoreService } from '../@providers/firebase/fb-database-fs.service';
import { ItemData } from '../@shared/data-models/item.model';
import { ReservationData } from '../@shared/data-models/reservation.model';
import { UserData, UserInfo } from '../@shared/data-models/user.model';
import { USER_INFO } from '../@shared/injection-tokens';
import { users, items, reservations } from '../@shared/mock-backend/test-data';




@Injectable({
  providedIn: 'root'
})
export class AppServiceFacade {
  users: UserData[] = users;
  items: ItemData[] = items;
  reservations: ReservationData[] = reservations;
  seed: number;
  currentUserData: UserData;

  constructor(@Optional() @Inject(USER_INFO) userInfo: UserInfo, private itemsDb: FirebaseFirestoreService, private reservDb: FirebaseFirestoreService, initRoute: ActivatedRoute) {

    const udata: UserData = initRoute.snapshot.data.udata;
    // {
    //   uid: `${ userInfo.uid }`,
    //   email: `${ userInfo.email }`,
    //   firstName: `${ userInfo.displayName }`,
    //   lastName: `${ userInfo.displayName }`,
    //   picture: `${ userInfo.picture }`,
    //   items: [],
    //   reservations: {
    //     owner: [],
    //     renter: []
    //   }
    // };
    this.users.push(udata);
    this.currentUserData = { ...udata };
  }

  getOwnerItems(): ItemData[] {
    const itemRefs = [...this.users[this.getIndexOfUser()].items];
    console.log('getOnwerItems ');
    console.log(itemRefs);

    if (itemRefs.length > 0) {
      let a = itemRefs.map((itemRef) => this.items.find(item => item.itemId === itemRef));
      console.log(a);
      return a;
    }
    return [];
  }

  getReservation(uid: string): ReservationData {
    return this.reservations.find(res => res.reservationId);
  }

  getItem(itemId: string): ItemData {
    return this.items.find(item => item.itemId);
  }

  getUser(uid: string): UserData {
    return this.users.find(user => user.uid);
  }
  getItems(): ItemData[] {
    return this.items;
  }

  getReservations(ids: string[]): ReservationData[] | Observable<ReservationData[]> {
    return this.reservDb.getRecords(ids, 'reservations');
  }
  addReservation(startdate: Date, enddate: Date, itemID: string, itemDailyPrice: number, ownerID: string, renterID: string) {
    const newId = this.makeId('res');
    const tempt: ReservationData = {
      reservationId: this.makeId('res'),
      startDate: startdate,
      endDate: enddate,
      itemId: itemID,
      dailyPrice: itemDailyPrice,
      ownerId: ownerID,
      renterId: renterID
    };
    this.reservDb.setRecord(tempt, 'reservations', newId);
  }
  addItem(category: 'music' | 'kitchen' | 'sports' | 'electronics' | 'yard' | 'other', name: string, description: string, picture: string, dailyPrice: number) {
    const newItemId = this.makeId('item');
    const newItem: ItemData = {
      itemId: newItemId,
      ownerId: this.currentUserData.uid,
      category,
      name,
      description,
      picture,
      dailyPrice,
      reservationIds: []
    };
    this.itemsDb.setRecord(newItem, 'items', newItemId);
    // cloud function triggers for Firestore adds the item ID to owner's list on DB write
  }

  removeItem(itemId: string) {
    this.itemsDb.deleteRecord(itemId, 'item');
  }

  makeId(src: 'item' | 'res'): string {
    if (src === 'item') {
      this.seed *= 2;
      return `${ src }_x_${ this.seed }`;
    } else {
      this.seed *= 13;
      return `${ src }_x_${ this.seed }`;
    }
  }

  getIndexOfUser() {
    for (let [ind, user] of this.users.entries()) {
      if (user.uid === this.currentUserData.uid) {
        return ind;
      }
    }
    return;
  }

}
