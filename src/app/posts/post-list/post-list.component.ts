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
  price: number;
  // content: string;
  // imgurl: string;
  // cate: string;
  public reserveDataService: reserveDataService;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (data && data.postData) {
      this.title = data.postData.name || '(no title)'; //CHANGED
      this.startdate = data.startdate;
      this.enddate = data.enddate;
      this.price = 100;
      this.reserve = data.postData;

      //this.content = data.postData.content || '(no content)';
      //this.imgurl = data.postData.imgurl || '';
      //this.cate = data.postData.cate || '';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  /**
   *   startdate: Date;
  enddate: Date;
  itemID: string;
  itemDailyPrice: number;
  ownerID: string;
  renterID: string;
   */

  confirmReserveClick(){
    //this.reserveDataService.addReserveData(this.startdate, this.enddate, this.reserve.itemId, this.reserve.dailyPrice,this.reserve.ownerId, "NULL renter ID" );
    this.reserveDataService.addReserveData(this.startdate, this.enddate, "3",20,"1", "NULL renter ID" );
    this.dialogRef.close();
  }

}
  /* // #1 is same as
postsService: PostsService;

constructor(postService: PostsService) {
  this.postsService = postService;
}
*/
