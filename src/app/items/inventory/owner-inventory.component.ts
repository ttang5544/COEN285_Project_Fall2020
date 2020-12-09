import { Component, OnInit, ApplicationRef, DoCheck } from '@angular/core';
import { ItemData } from '../../@shared/data-models/item.model';
import { CentralDataService } from '../../app-services/mock-backend/c/central-data.service';

@Component({
  selector: 'owner-inventory',
  templateUrl: './owner-inventory.component.html',
  styleUrls: []
})
export class OwnerInventory implements OnInit, DoCheck {

  items: ItemData[] = [];

  constructor(public cds: CentralDataService) { }
  // constructor(public itemsService: ItemsMockService, public appRef: ApplicationRef) { }

  ngOnInit() {
    this.items = [...this.cds.getOwnerItems()];
  }
  ngDoCheck() {
    this.items = [...this.cds.getOwnerItems()];
  }



  removeItem(index) {
    const item = this.items[index];
    let msger = `Are you sure you want to remove the ${ this.items[index].name }`;
    let remove = confirm(msger);

    if (remove) {
      // this.cds.removeItem(index);
      this.cds.removeItem(item.itemId);
      // this.appRef.tick();
    }

    //for testing
    console.log('OWNER INVENTORY  ' + item.name + '  ' + item.itemId);
  }
}
