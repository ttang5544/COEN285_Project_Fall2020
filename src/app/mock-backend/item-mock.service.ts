import { Injectable } from '@angular/core';
import { mockData } from './item.mock-data';
import { Item } from '../data-models/item.model';

@Injectable({ providedIn: 'root' })

export class ItemDataMockService {
  private items: Item[] = [];

  constructor() {
    this.items = [...mockData]; // use mock data
  }

  getItems(): Item[] {
    return this.items;
  }

  addItem(category: 'kitchen' | 'yard' | 'exercise', name: string, description: string, picture: string, dailyPrice: number) {
    const newItem: Item = {
      itemId: null,
      ownerId: '',
      category,
      name,
      description,
      picture,
      dailyPrice
    };
    this.items.push(newItem);
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }
}
