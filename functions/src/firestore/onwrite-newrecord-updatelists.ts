////////////// FIRESTORE  INDEX.TS
import * as functions from 'firebase-functions';
import { initApp } from '../admin';
initApp();

import * as admin from 'firebase-admin';

import { BackendItem, BackendReservation, BackendUser } from '../utils/models';
let firestoreInstance: admin.firestore.Firestore;
import * as sendEmail from '../utils/send-email';


export const syncItemStatusToOwnerInventory = functions.firestore
  .document('items/{itemId}')
  .onWrite(async (change, context) => {
    if (!firestoreInstance) {
      firestoreInstance = admin.firestore();
    }
    let ownerId;
    const itemId = context.params.itemId as string;
    // onCreate - add itemId to owner's Items[]
    if (!change.before.exists && change.after.exists && (change.after.data() as BackendItem).ownerId) {
      ownerId = (change.after.data() as BackendItem).ownerId;
      await firestoreInstance.doc(`users/${ ownerId }`).update({
        items: admin.firestore.FieldValue.arrayUnion(itemId)
      });
      console.log(`${ itemId } has been Added to ${ ownerId }'s Item list`);
    }
    // onDelete - remove itemId from owner's Items[]
    else if (change.before.exists && !change.after.exists) {
      ownerId = (change.before.data() as BackendItem).ownerId;
      await firestoreInstance.doc(`users/${ ownerId }`).update({
        items: admin.firestore.FieldValue.arrayRemove(itemId)
      });
      console.log(`${ itemId } has been Removed to ${ ownerId }'s Item list`);
    }
    return;
  });



export const syncNewReservationToLists = functions.firestore
  .document('reservations/{reservationId}')
  .onCreate(async (change, context) => {
    if (change.exists) {
      const reservationId = context.params.reservationId as string;
      const resData = change.data() as BackendReservation;
      // const price = resData.dailyPrice;
      // const start = resData.startDate;
      // const end = resData.endDate;

      const ownerId = resData.ownerId;
      const renterId = resData.renterId;
      const itemId = resData.itemId;

      const ownerData: BackendUser = (await firestoreInstance.doc(`users/${ ownerId }`)
        .get()
        .then((docSnap) => (docSnap.exists) ? docSnap.data() : null)) as BackendUser;

      const renterData: BackendUser = (await firestoreInstance.doc(`users/${ renterId }`)
        .get()
        .then((docSnap) => (docSnap.exists) ? docSnap.data() : null)) as BackendUser;

      const itemData: BackendItem = (await firestoreInstance.doc(`items/${ itemId }`)
        .get()
        .then((docSnap) => (docSnap.exists) ? docSnap.data() : null)) as BackendItem;


      // add to owner's reservations-owner list
      await firestoreInstance.doc(`users/${ ownerId }`).update({
        owner: admin.firestore.FieldValue.arrayUnion(reservationId)
      });
      console.log(`${ reservationId } has been Added to ${ ownerId }'s Reservation-Owner list`);

      // add to renter's reservations-renter list
      await firestoreInstance.doc(`users/${ renterId }`).update({
        renter: admin.firestore.FieldValue.arrayUnion(reservationId)
      });
      console.log(`${ reservationId } has been Added to ${ ownerId }'s Reservation-Owner list`);

      // add to item's reservations list
      await firestoreInstance.doc(`items/${ itemId }`).update({
        reservations: admin.firestore.FieldValue.arrayUnion(reservationId)
      });
      console.log(`${ reservationId } has been Added to ${ itemId }'s reservations list`);

      // send rental confirmations to owner + renter
      await sendEmail.sendConfirmationEmails(
        resData,
        { name: itemData.name, picture: itemData.picture ?? '' },
        { email: ownerData.email, firstName: ownerData.firstName, uid: ownerId, picture: ownerData.picture },
        { email: renterData.email, firstName: renterData.firstName, uid: renterId, picture: renterData.picture ?? '' })
        .catch((e) => {
          console.error(e);
          return new functions.https.HttpsError('cancelled', 'An error occurred while sending the confirmation email');
        });
    }
    return;
  });
