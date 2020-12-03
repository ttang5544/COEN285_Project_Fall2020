import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Item } from '../item.model';
import { ItemsService } from '../items.service';
import { DialogOverviewExampleDialog } from './dialog-overview-example/dialog-overview-example-dialog';


@Component({
  selector: 'app-item-list',
  templateUrl: 'item-list.component.html',
  styleUrls: ['item-list.component.css']
})

export class ItemListComponent implements OnInit {
  items: Item[] = [];

  startdate: Date;
  enddate: Date;

  constructor(public itemsService: ItemsService, public dialog: MatDialog) { }  // #1

  ngOnInit() {
    this.items = [...this.itemsService.getItems()];
    this.posts = mockData; //CHANGED
   this.startdate =new Date();
   this.enddate =new Date();
  }

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: {
        itemData: this.items[index],
        startdate: this.startdate,
        enddate: this.enddate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
