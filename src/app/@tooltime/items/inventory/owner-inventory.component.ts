import { Component, OnInit, DoCheck } from '@angular/core';
import { ItemData } from 'src/app/@shared/data-models/item.model';
import { CentralDataService } from '../../../@shared/mock-backend/test-data.service';
import { AppServiceFacade } from '../../service-facade.service';

@Component({
  selector: 'owner-inventory',
  templateUrl: './owner-inventory.component.html',
  styleUrls: []
})
export class OwnerInventory implements OnInit, DoCheck {

  items: ItemData[] = [];

  constructor(public sf: AppServiceFacade) { }

  ngOnInit() {
    this.items = [...this.sf.getOwnerItems()];
  }
  ngDoCheck() {
    this.items = [...this.sf.getOwnerItems()];
  }



  removeItem(index) {
    const item = this.items[index];
    let msger = `Are you sure you want to remove the ${ this.items[index].name }`;
    let remove = confirm(msger);

    if (remove) {
      this.sf.removeItem(item.itemId);
    }

    //for testing
    console.log('OWNER INVENTORY  ' + item.name + '  ' + item.itemId);
  }
}
