
// // import * as firebase from 'firebase-admin';
// // import * as functions from 'firebase-functions';
// import { BackendReservation, BackendItem, Timeblock } from '../utils/models';

// import { firestoreInstance } from '../firestore';



// /*
//  itemId -> ItemData
//             resIds[]  -> ReservationData
//                                    ----->  { start, end }[]


// */


// // get ItemData from itemId
// function itemIdToData(itemId: string): Promise<BackendItem> {
//   return firestoreInstance.doc(`items/${ itemId }`).get()
//     .then((snapshot) => {
//       if (snapshot.exists) {
//         return snapshot.data() as BackendItem;
//       } else {
//         throw new Error(`Item data for ${ itemId } does not exist`);
//       }
//     });
// }

// // get ReservationData from resId
// function reservationIdToData(resId: string): Promise<BackendReservation> {
//   return firestoreInstance.doc(`reservations/${ resId }`).get()
//     .then((snapshot) => {
//       if (snapshot.exists) {
//         return snapshot.data() as BackendReservation;
//       } else {
//         throw new Error(`Reservation data for ${ resId } does not exist`);
//       }
//     });
// }

// // [start end] from resId
// function getDatesOfReservation(resId: string): Promise<Timeblock> {
//   return reservationIdToData(resId)
//     .then((resData) => {
//       const timeblock: Timeblock = {
//         start: resData.start,
//         end: resData.end
//       };
//       return timeblock;
//     });
// }


// function getItemSchedule(itemId: string): Promise<Timeblock[]> {
//   itemIdToData(itemId)
//     .then((itemData) => {
//       if (itemData) {

//       }
//     });
//   return Promise.resolve([]);
// }


// export function itemIsAvailable(itemId: string, start: number, end: number) {
//   return Promise.resolve(true);
// };
