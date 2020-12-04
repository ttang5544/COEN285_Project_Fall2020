import { Injectable } from '@angular/core';
import { Item } from '../data-models/item.model';


export const mockData1: Item[] = [
  {
    itemId: 'ITEM-UserA-0',
    ownerId: 'someOwnerId',
    category: 'yard',
    name: 'hammer',
    description: 'A ten year old hammer. Still study and good to use.',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Tools-hammer.svg/120px-Tools-hammer.svg.png',
    dailyPrice: 5.5
  },
  {
    itemId: 'ITEM-BB-10',
    ownerId: 'someOwnerId-B',
    category: 'yard',
    name: 'shovel',
    description: 'A brand new shovel, lightly used. Good for clearing snow.',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Shovel.svg/120px-Shovel.svg.png',
    dailyPrice: 55.75
  },
  {
    itemId: 'ITEM-CCC-999',
    ownerId: 'someOwnerId-C',
    category: 'kitchen',
    name: 'blender',
    description: 'A high powered blender with multiple settings.',
    picture: 'https://i.imgur.com/HD4wfe9.png',
    dailyPrice: 125.99
  }
];

const mockData2: Item[] = [
  {
    itemId: 'xxxx111',
    ownerId: 'friendwf@gmail.com',
    category: 'yard',
    name: 'shovel',
    description: 'this is a good shovel',
    picture: 'shovel.jpg',
    dailyPrice: 20
  },
  {
    itemId: 'xxxx000',
    ownerId: 'fewf@gmail.com',
    category: 'kitchen',
    name: 'hammer',
    description: 'this is a good hammer',
    picture: 'hammer.png',
    dailyPrice: 10
  }
];



@Injectable({ providedIn: 'root' })

export class ItemsMockService {
  private items: Item[] = [];

  constructor() {
    this.items = [...mockData1]; // use mock data
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
