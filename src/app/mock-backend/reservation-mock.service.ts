import { Reservation } from '../data-models/reservation.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ReservationDataService {

  private reservations: Reservation[] = [];

  constructor() {
    this.reservations = [];
  }

  addReserveData(startdate: Date, enddate: Date, itemID: string, itemDailyPrice: number, ownerID: string, renterID: string) {
    const tempt: Reservation = {
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
