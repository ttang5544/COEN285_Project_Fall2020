import { Component, OnInit, Inject } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

import { reserveDataService } from './reserveData.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

import { Item } from '../posts.mock-data';
import { mockData } from '../mock-data.service';
//import { format } from 'path';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { NgForm } from '@angular/forms';

export interface DialogData {
  enddate: Date;
  startdate: Date;
  postData: Item;
}

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.css']
})

export class PostListComponent implements OnInit {
  posts: Item[] = []; //CHANGED

  startdate: Date;
  enddate: Date;

  constructor(public postsService: PostsService, public dialog: MatDialog) { }  //#1

  ngOnInit() {
    this.posts = mockData; //CHANGED
    this.startdate =new Date();
    this.enddate =new Date();
  }


  openDialog(index: number): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: {
        postData: this.posts[index],
        startdate: this.startdate,
        enddate: this.enddate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  reserve: Item;
  title: string;
  startdate: Date;
  enddate: Date;
  estimatedprice: number;
  // content: string;
  // imgurl: string;
  // cate: string;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public reserveDataService: reserveDataService
  ) {
    if (data && data.postData) {
      this.title = data.postData.name || '(no title)'; //CHANGED
      this.startdate = data.startdate;
      this.enddate = data.enddate;
      this.reserve = data.postData;
      const daydiff = Math.abs(this.parseDate(this.enddate).getTime() - this.parseDate(this.startdate).getTime());
      this.estimatedprice = Math.ceil(daydiff / (1000 * 3600 * 24)) * this.reserve.dailyPrice;

      //this.content = data.postData.content || '(no content)';
      //this.imgurl = data.postData.imgurl || '';
      //this.cate = data.postData.cate || '';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  parseDate(input) {
    var parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
  }

  /**
  reserveData:{
    startdate: Date;
    enddate: Date;
    itemID: string;
    itemDailyPrice: number;
    ownerID: string;
    renterID: string;
  }
  */

  confirmReserveClick(){
    this.reserveDataService.addReserveData(this.startdate, this.enddate, this.reserve.itemId, this.reserve.dailyPrice,this.reserve.ownerId, "NULL renter ID" );
    this.dialogRef.close();
  }

}

