import { Inject, Injectable, Optional } from '@angular/core';
import { ItemData } from '../../@shared/data-models/item.model';
import { ReservationData } from '../../@shared/data-models/reservation.model';
import { UserData, UserInfo } from '../../@shared/data-models/user.model';
import { USER_INFO } from '../injection-tokens';
import { users, items, reservations } from './complete';







@Injectable({ providedIn: 'root' })
export class CentralDataService {
  ucount = 1;
  icount = 2;
  rcount = 3;

  users: UserData[] = users;
  items: ItemData[] = items;
  reservations: ReservationData[] = reservations;



  currentUserData: UserData;

  // constructor(@Inject(USER_ID) private userId: string) {
  constructor(@Optional() @Inject(USER_INFO) private userInfo: UserInfo) {
    const udata: UserData = {
      uid: `${ userInfo?.uid ? userInfo.uid : '77777' }`,
      email: `${ userInfo?.email ? userInfo.email : 'bbbb@cccc.com' }`,
      firstName: `${ userInfo?.displayName ? userInfo.displayName : 'Jerry' }`,
      lastName: `${ userInfo?.displayName ? userInfo.displayName : 'Maguire' }`,
      picture: null,
      items: [],
      reservations: {
        owner: [],
        renter: []
      }
    };
    this.users.push(udata);
    this.currentUserData = { ...udata };
    // console.log(this.users);
  }




  getOwnerItems(): ItemData[] {
    const itemRefs = [...this.users[this.getIndexOfUser()].items];
    // let itemRefs = [...this.currentUserData.items];
    console.log('getOnwerItems ');
    console.log(itemRefs);

    if (itemRefs.length > 0) {
      let a = itemRefs.map((itemRef) => this.items.find(item => item.itemId === itemRef));
      console.log(a);
      return a;
    }
    return [];
  }







  // for display individual  SINGLE  data
  getReservation(uid: string): ReservationData {
    return this.reservations.find(res => res.reservationId);
  }

  getItem(itemId: string): ItemData {
    return this.items.find(item => item.itemId);
  }

  getUser(uid: string): UserData {
    return this.users.find(user => user.uid);
  }







  // fordisplay in marketplace
  getItems(): ItemData[] {
    return this.items;
  }






  // for display in marketplace

  getReservations(): ReservationData[] {
    return this.reservations;
  }




  // for submit rental request
  addReservation(startdate: Date, enddate: Date, itemID: string, itemDailyPrice: number, ownerID: string, renterID: string) {
    const tempt: ReservationData = {
      reservationId: this.makeId('res'),
      startDate: startdate,
      endDate: enddate,
      itemId: itemID,
      dailyPrice: itemDailyPrice,
      ownerId: ownerID,
      renterId: renterID
    };
    this.reservations.push(tempt);
    console.log(this.reservations);
  }



  // for owner add new item to inventory
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
      reservationIds: []   // for fixing compiling error
    };
    this.items.push(newItem);


    const userIndex = this.getIndexOfUser();
    if (userIndex >= 0) {
      this.users[userIndex].items.push(newItemId);
      // this.currentUserData.items.push(newItem.itemId);
    }
    console.log(`addItem -  userIndex: ${ userIndex }`);
    console.log(this.users);
    console.log(this.items);
    console.log(this.reservations);
  }

  // for owner remove item from marketplace   (takes out of items[] and user.items[])
  removeItem(itemId: string) {
    const userIndex = this.getIndexOfUser();
    // this.items.splice(index, 1);
    // this.currentUserData.items.splice(index);

    let itemIndex = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] && this.items[i].itemId == itemId) {
        itemIndex = i;
        break;
      }
    }
    if (itemIndex >= 0) {
      // remove from items
      this.items.splice(itemIndex, 1);

      // remove from user.items
      const userItems = [...this.users[userIndex].items];
      if (userItems?.length > 0) {
        userItems.filter((v, i) => v !== itemId);
        const userIndex = this.getIndexOfUser();
        this.users[userIndex].items = [...userItems, itemId];
        // const ind = userItems.indexOf(itemId);
        // this.currentUserData.items.splice(ind, 1);
      }
    }
    console.log('removeitem - item id' + itemId);
    console.log(this.users);
    console.log(this.items);
    console.log(this.reservations);

  }




  makeId(src: 'item' | 'res'): string {
    if (src === 'item') {
      this.icount++;
      return `${ src }_x_${ this.icount }`;
    } else {
      this.rcount++;
      return `${ src }_x_${ this.rcount }`;
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
