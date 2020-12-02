import { Item } from './posts.mock-data';

/**
  export interface Item {
  itemId: string;
  ownerId: string;
  category: 'kitchen' | 'yard' | 'exercise';
  name: string;
  description: string;
  pictureFilename: string;
  dailyPrice: number;
}
*/
export const mockData: Item[] = [
  {
    itemId: "xxxx111",
    ownerId: "friendwf@gmail.com,",
    category: "yard",
    name: "shovel",
    description: "this is a good shovel",
    pictureFilename: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Shovel.svg/120px-Shovel.svg.png',
    dailyPrice: 20
  },
  {
    itemId: "xxxx000",
    ownerId: "fewf@gmail.co,",
    category: "kitchen",
    name: "hammer",
    description: "this is a good hammer",
    pictureFilename: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Tools-hammer.svg/120px-Tools-hammer.svg.png',
    dailyPrice: 10
  }
]
