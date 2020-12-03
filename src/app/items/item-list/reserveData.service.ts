import { ReservationData } from './reserveData.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ReservationDataService {

  private reservations: ReservationData[] = [];

  constructor() {
    this.reservations = [];
  }

  addReserveData(startdate: Date, enddate: Date, itemID: string, itemDailyPrice: number, ownerID: string, renterID: string) {
    const tempt: ReservationData = {
      startdate,
      enddate,
      itemID,
      itemDailyPrice,
      ownerID,
      renterID
    };
    this.reservations.push(tempt);
    console.log(this.reservations);
  }
}
