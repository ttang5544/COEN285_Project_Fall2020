// import { Injectable } from '@angular/core';
// import { ItemData } from '../../@shared/data-models/item.model';


// export const mockData1: ItemData[] = [
//   {
//     reservationIds: '113',
//     itemId: 'ITEM-UserA-0',
//     ownerId: 'someOwnerId',
//     category: 'yard',
//     name: 'hammer',
//     description: 'A wooden Craftsman hammer from 1990. Very solid.',
//     picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Tools-hammer.svg/120px-Tools-hammer.svg.png',
//     dailyPrice: 4
//   },
//   {
//     reservationIds: '112',
//     itemId: 'ITEM-BB-10',
//     ownerId: 'someOwnerId-B',
//     category: 'yard',
//     name: 'shovel',
//     description: 'A shovel that is good for dirt. Not a show shovel.',
//     picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Shovel.svg/120px-Shovel.svg.png',
//     dailyPrice: 8
//   },
//   {
//     reservationIds: '111',
//     itemId: 'ITEM-CCC-999',
//     ownerId: 'someOwnerId-C',
//     category: 'kitchen',
//     name: 'drill',
//     description: 'An electric drill. Battery life 5 hours. Drill bits and battery included in rental.',
//     picture: 'https://i.imgur.com/YjVmgQX.jpeg',
//     dailyPrice: 40.99
//   }
// ];

// // const mockData2: ItemData[] = [
// //   {
// //     itemId: 'xxxx111',
// //     ownerId: 'friendwf@gmail.com',
// //     category: 'yard',
// //     name: 'shovel',
// //     description: 'this is a good shovel',
// //     picture: 'shovel.jpg',
// //     dailyPrice: 20
// //   },
// //   {
// //     itemId: 'xxxx000',
// //     ownerId: 'fewf@gmail.com',
// //     category: 'kitchen',
// //     name: 'hammer',
// //     description: 'this is a good hammer',
// //     picture: 'hammer.png',
// //     dailyPrice: 10
// //   }
// // ];



// @Injectable({ providedIn: 'root' })

// export class ItemsMockService {
//   private items: ItemData[] = [];

//   constructor() {
//     this.items = [...mockData1]; // use mock data
//   }

//   getItems(): ItemData[] {
//     return this.items;
//   }

//   addItem(category: 'kitchen' | 'yard' | 'exercise', name: string, description: string, picture: string, dailyPrice: number) {
//     const newItem: ItemData = {
//       itemId: null,
//       ownerId: '',
//       category,
//       name,
//       description,
//       picture,
//       dailyPrice,
//       reservationIds: null   // for fixing compiling error
//     };
//     this.items.push(newItem);
//   }

//   removeItem(index) {
//     this.items.splice(index, 1);
//   }
// }
