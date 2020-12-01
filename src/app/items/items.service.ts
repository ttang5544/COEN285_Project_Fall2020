import { Item } from './item.model';
import { Injectable } from '@angular/core';
import { mockData } from './item.mock-data';

@Injectable({ providedIn: 'root' })

export class ItemsService {
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
      ownerId: 'GET FROM AUTH SERVICE',
      category,
      name,
      description,
      picture,
      dailyPrice
    };
    this.items.push(newItem);

  }
}
