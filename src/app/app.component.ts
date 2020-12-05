import { Component } from '@angular/core';
import { Item } from './data-models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech-support-project';
  storedItems: Item[] = [];

  onItemAdded(item) {
    this.storedItems.push(item);
  }
}


