import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../../@shared/data-models/dialog-data.model';
import { ReservationDataService } from '../../../app-services/mock-backend/reservation-mock.service';


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  reserve: any;
  category: 'exercise' | 'yard' | 'kitchen';
  name: string;
  description: string;
  picture: string;
  dailyPrice: number;
  startdate: Date;
  enddate: Date;
  estimatedprice: number;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public reserveDataService: ReservationDataService
    ) {

      if (data && data.itemData) {
        this.category = data.itemData.category || null;
        this.name = data.itemData.name || '(no title)';
        this.description = data.itemData.description || '(no content)';
        this.picture = data.itemData.picture || '';
        this.dailyPrice = data.itemData.dailyPrice || null;
        this.startdate = data.startDate ;
        this.enddate = data.endDate ;
        this.reserve = data.itemData;
        const daydiff = Math.abs(this.parseDate(this.enddate).getTime() - this.parseDate(this.startdate).getTime());
        this.estimatedprice = Math.ceil(daydiff / (1000 * 3600 * 24)) * this.reserve.dailyPrice;
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.startdate);
  }

  confirmReserveClick() {
    this.reserveDataService.addReserveData(this.startdate, this.enddate, this.reserve.itemId, this.reserve.dailyPrice, this.reserve.ownerId, "NULL renter ID");
    this.dialogRef.close();
  }

  private numberToDate(val: number): Date {
    return new Date(val);
  }

  private dateToNumber(date: Date): number {
    if (date) {
      return date.valueOf();
    }
  }
  parseDate(input) {
    var parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
  }
}
