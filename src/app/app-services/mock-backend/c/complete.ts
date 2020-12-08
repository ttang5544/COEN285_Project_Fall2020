import { ItemData } from '../../../@shared/data-models/item.model';
import { ReservationData } from '../../../@shared/data-models/reservation.model';
import { UserData } from '../../../@shared/data-models/user.model';




export const users: UserData[] = [
  {
    uid: '11111',  // uid = key
    email: '1@1.gmail.com',
    firstName: '111first',
    lastName: '111last',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Adele_Bloch-Bauer_%28detail_of_face%29.jpg',
    items: ['item_1a', 'item_1b'],
    reservations: {
      owner: ['res_1a_2', 'res_1b_3'],  //  string uid
      renter: ['res_3_1',]  //  string uid
    }
  },
  {
    uid: '22222',  // uid = key
    email: '2@2.gmail.com',
    firstName: '222first',
    lastName: '222last',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Friedrich_Kellner_1914_face_on_white_background.jpg',
    items: ['item_2'],
    reservations: {
      owner: ['res_2_3'],
      renter: ['res_3_2']
    }
  },
  {
    uid: '33333',  // uid = key
    email: '3@3.gmail.com',
    firstName: '333first',
    lastName: '333last',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Marguerite_De_La_Motte_Face_detail%2C_from-_The_Nut_1921_%28cropped%29.jpg',
    items: ['item_3'],
    reservations: {
      owner: ['res_3_1', 'res_3_2'],
      renter: ['res_1b_3', 'res_2_3']
    }
  }
];


export const items: ItemData[] = [
  {
    itemId: 'item_1a',
    ownerId: '11111',
    category: 'yard',
    name: 'shovel',
    description: 'it moves dirt. i\'s a shovel',
    reservationIds: ['res_1a_2',],
    dailyPrice: 11.11,
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Shovel.svg/120px-Shovel.svg.png',

  },
  {
    itemId: 'item_1b',
    ownerId: '11111',
    category: 'kitchen',
    name: 'scissors',
    description: 'mama said not to run with sharp stuff in my mouth',
    reservationIds: ['res_1b_3'],
    dailyPrice: 22.22,
    picture: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Surgical_scissors_Orem.jpg',
  },
  {
    itemId: 'item_2',
    ownerId: '22222',
    category: 'other',
    name: 'shovel',
    description: 'tape measure it love you long time',
    reservationIds: ['res_2_3'],
    dailyPrice: 33.33,
    picture: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Power-Tape-Measure_42674-480x360_%284904403467%29.jpg',
  },
  {
    itemId: 'item_3',
    ownerId: '33333',
    category: 'other',
    name: 'Toilet plunger',
    description: 'it moves poop. i\'s not a shovel',
    reservationIds: ['res_3_2', 'res_3_1'],
    dailyPrice: 444.44,
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Plunger_08.jpg/120px-Plunger_08.jpg',
  },
];


export const reservations: ReservationData[] = [
  {
    reservationId: 'res_1a_2',
    startDate: new Date('2020-12-03T00:00:00'),
    endDate: new Date('2020-12-04T00:00:00'),
    itemId: 'item_1a',
    dailyPrice: 11.11,
    ownerId: '11111',
    renterId: '22222'
  },
  {
    reservationId: 'res_1b_3',
    startDate: new Date('2020-12-05T00:00:00'),
    endDate: new Date('2020-12-09T00:00:00'),
    itemId: 'item_1b',
    dailyPrice: 1.11,
    ownerId: '11111',
    renterId: '33333'
  },
  {
    reservationId: 'res_2_3',
    startDate: new Date('2020-12-05T00:00:00'),
    endDate: new Date('2020-12-09T00:00:00'),
    itemId: 'item_2',
    dailyPrice: 11.1,
    ownerId: '22222',
    renterId: '33333'
  },
  {
    reservationId: 'res_3_1',
    startDate: new Date('2020-12-05T00:00:00'),
    endDate: new Date('2020-12-09T00:00:00'),
    itemId: 'item_3',
    dailyPrice: 100.00,
    ownerId: '33333',
    renterId: '11111'
  },
  {
    reservationId: 'res_3_2',
    startDate: new Date('2020-12-05T00:00:00'),
    endDate: new Date('2020-12-09T00:00:00'),
    itemId: 'item_3',
    dailyPrice: 100.00,
    ownerId: '33333',
    renterId: '22222'
  }

];
