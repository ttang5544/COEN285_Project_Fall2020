import { Component, OnInit } from '@angular/core';
import { Item } from '../../data-models/item.model';
import { mockData } from '../../mock-backend/item.mock-data';

@Component({
  selector: 'owner-inventory',
  templateUrl: './owner-inventory.component.html',
  styleUrls: []
})
export class OwnerInventory implements OnInit {

  items: Item[] = [];

  ngOnInit() {
    this.items = mockData;
  }

  removeRental(i) {

    let msger = `Are you sure you want to remove the ${ mockData[i].name }`;
    let remove = confirm(msger);

    if (remove)
      mockData.splice(i, 1);
    //for testing
    console.log(mockData);
  }
}
