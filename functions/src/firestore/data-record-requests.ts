
// // import * as functions from 'firebase-functions';
// import { initApp } from '../admin';
// initApp();
// import * as admin from 'firebase-admin';
// import { BackendReservation, BackendItem, Timeblock, BackendUser } from '../utils/models';

// const firestoreInstance = admin.firestore();


// // get user names
// function userIdToUserData(uid: string): Promise<BackendUser> {
//   return;
// }


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
// export function getDatesOfReservation(resId: string): Promise<Timeblock> {
//   return reservationIdToData(resId)
//     .then((resData) => {
//       const timeblock: Timeblock = {
//         start: resData.startDate,
//         end: resData.endDate
//       };
//       return timeblock;
//     });
// }


// export function getItemSchedule(itemId: string): Promise<Timeblock[]> {
//   itemIdToData(itemId)
//     .then((itemData) => {
//       if (itemData) {

//       }
//     });
//   return Promise.resolve([]);
// }


// export function itemIsAvailable(itemId: string, start: number, end: number) {
//   return Promise.resolve(true);
// }
