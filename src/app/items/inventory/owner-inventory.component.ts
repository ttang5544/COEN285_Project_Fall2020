import { Component } from '@angular/core';
//import { Post } from '../post.model';
//import { PostsService } from '../posts.service';
import { mockData } from '../mock-data.service';
import { Item } from '../posts.mock-data';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
    selector: 'owner-inventory',
    templateUrl: './owner-inventory.component.html',
    styleUrls: [ ]
})
export class OwnerInventory {

  posts: Item[] = [];

  ngOnInit() {
    this.posts = mockData; //CHANGED
  }

  removeRental(i) {

    let msger =  `Are you sure you want to remove the ${mockData[i].name}`;
    let remove = confirm(msger);

    if(remove)
      mockData.splice(i, 1);
    //for testing
    console.log(mockData);
  }
}
