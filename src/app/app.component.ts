import { Component } from '@angular/core';
import { ItemData } from './@shared/data-models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech-support-project';
  storedItems: ItemData[] = [];

  onItemAdded(item) {
    this.storedItems.push(item);
  }
}


