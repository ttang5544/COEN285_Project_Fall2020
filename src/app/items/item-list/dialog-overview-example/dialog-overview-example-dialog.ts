import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../dialog-data.model';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  category: 'exercise' | 'yard' | 'kitchen';
  name: string;
  description: string;
  picture: string;
  dailyPrice: number;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (data && data.itemData) {
      this.category = data.itemData.category || null;
      this.name = data.itemData.name || '(no title)';
      this.description = data.itemData.description || '(no content)';
      this.picture = data.itemData.picture || '';
      this.dailyPrice = data.itemData.dailyPrice || null;
    }
  }

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
