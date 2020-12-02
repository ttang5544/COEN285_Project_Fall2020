import { reserveData } from './reserveData.model';
import { Injectable } from '@angular/core';
//import { mockData } from './posts.mock-data';

@Injectable({ providedIn: 'root' })

export class reserveDataService {

  private reserveDatas: reserveData[] = [];

  constructor() {
    this.reserveDatas = [];
  }

  addReserveData( startdate: Date, enddate: Date, itemID: string, itemDailyPrice: number, ownerID: string, renterID: string) {
    const tempt: reserveData = {
      startdate,
      enddate,
      itemID,
      itemDailyPrice,
      ownerID,
      renterID
    };
    this.reserveDatas.push(tempt);
    //console.log(this.reserveDatas.length);
  }
}
