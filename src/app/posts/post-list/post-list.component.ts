import { Component, OnInit, Inject } from '@angular/core';
import {Post} from '../post.model';
import { PostsService } from '../posts.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.css']
})

export class PostListComponent implements OnInit{
  posts: Post[] = [];

  constructor(public postsService: PostsService, public dialog: MatDialog) {}  //#1

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
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

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
  /* // #1 is same as
  postsService: PostsService;

  constructor(postService: PostsService) {
    this.postsService = postService;
  }
  */
