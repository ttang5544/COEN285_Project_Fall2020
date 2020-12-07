import { Component, OnInit, ApplicationRef } from '@angular/core';
import { ItemData } from '../../@shared/data-models/item.model';
import { ItemsMockService } from '../../app-services/mock-backend/item-mock.service';

@Component({
  selector: 'owner-inventory',
  templateUrl: './owner-inventory.component.html',
  styleUrls: []
})
export class OwnerInventory implements OnInit {

  items: ItemData[] = [];

  constructor(public itemsService: ItemsMockService, public appRef: ApplicationRef) { }

  ngOnInit() {
    this.items = [...this.itemsService.getItems()];
  }

  removeRental(i) {

    let msger = `Are you sure you want to remove the ${ this.items[i].name }`;
    let remove = confirm(msger);

    if (remove) {
      this.itemsService.removeItem(i);
      this.appRef.tick();
    }

    //for testing
    console.log(this.items);
  }
}
