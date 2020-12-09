import { Injectable } from '@angular/core';
import { ReservationData } from '../../@shared/data-models/reservation.model';

@Injectable({ providedIn: 'root' })

export class ReservationDataService {

  private reservations: ReservationData[] = [];

  constructor() {
    this.reservations = [];
  }

  addReserveData(startdate: Date, enddate: Date, itemID: string, itemDailyPrice: number, ownerID: string, renterID: string) {
    const tempt: ReservationData = {
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
}
