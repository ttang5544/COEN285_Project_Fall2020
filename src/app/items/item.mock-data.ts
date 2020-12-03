import { Item } from './item.model';


export const mockData: Item[] = [
  {
    itemId: 'ITEM-UserA-0',
    ownerId: 'someOwnerId',
    category: 'yard',
    name: 'hammer',
    description: 'bbbbb',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Tools-hammer.svg/120px-Tools-hammer.svg.png',
    dailyPrice: 5.5
  },
  {
    itemId: 'ITEM-BB-10',
    ownerId: 'someOwnerId-B',
    category: 'yard',
    name: 'shovel',
    description: 'post2post2post2post2',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Shovel.svg/120px-Shovel.svg.png',
    dailyPrice: 55.75
  },
  {
    itemId: 'ITEM-CCC-999',
    ownerId: 'someOwnerId-C',
    category: 'kitchen',
    name: 'drill',
    description: '33bbb',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Battdrill.jpg/150px-Battdrill.jpg',
    dailyPrice: 125.99
  }
];

