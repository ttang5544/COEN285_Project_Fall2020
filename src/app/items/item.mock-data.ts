import { Item } from '../data-models/item.model';


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
    picture: 'trowel.jpg',
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

