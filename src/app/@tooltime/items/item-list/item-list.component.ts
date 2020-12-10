import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemData } from '../../../@shared/data-models/item.model';
import { CentralDataService } from '../../../@shared/mock-backend/test-data.service';
import { AppServiceFacade } from '../../service-facade.service';
import { DialogOverviewExampleDialog } from './dialog-overview-example/dialog-overview-example-dialog';


@Component({
  selector: 'item-list',
  templateUrl: 'item-list.component.html',
  styleUrls: ['item-list.component.css']
})

export class ItemListComponent implements OnInit {
  items: ItemData[] = [];

  startdate: Date;
  enddate: Date;

  constructor(public sf: AppServiceFacade, public dialog: MatDialog) { }  // #1

  ngOnInit() {
    this.items = [...this.sf.getItems()];
    this.startdate = new Date();
    this.enddate = new Date();
  }

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: {
        itemData: this.items[index],
        startDate: this.startdate,
        endDate: this.enddate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
