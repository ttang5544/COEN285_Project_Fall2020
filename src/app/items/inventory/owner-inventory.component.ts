import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Item } from '../../data-models/item.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'owner-inventory',
  templateUrl: './owner-inventory.component.html',
  styleUrls: []
})
export class OwnerInventory implements OnInit {

  items: Item[] = [];

  constructor(public itemsService: ItemsService, public appRef: ApplicationRef){}

  ngOnInit() {
    this.items = [...this.itemsService.getItems()];
  }

  removeRental(i) {

    let msger = `Are you sure you want to remove the ${ this.items[i].name }`;
    let remove = confirm(msger);

    if (remove){
      this.itemsService.removeItem(i);
      this.appRef.tick();
    }

    //for testing
    console.log(this.items);
  }
}
