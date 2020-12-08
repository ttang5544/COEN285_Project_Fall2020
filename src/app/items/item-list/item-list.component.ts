import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './dialog-overview-example/dialog-overview-example-dialog';
import { ItemsMockService } from '../../app-services/mock-backend/item-mock.service';
import { ItemData } from '../../@shared/data-models/item.model';


@Component({
  selector: 'app-item-list',
  templateUrl: 'item-list.component.html',
  styleUrls: ['item-list.component.css']
})

export class ItemListComponent implements OnInit {
  items: ItemData[] = [];

  startdate: Date;
  enddate: Date;

  constructor(public itemsService: ItemsMockService, public dialog: MatDialog) { }  // #1

  ngOnInit() {
    this.items = [...this.itemsService.getItems()];
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
