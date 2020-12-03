////////////// FIRESTORE  INDEX.TS
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { BackendReservation, BackendItem } from '../utils/models';

// admin.initializeApp(functions.config().firebase);
// import {COMMENT_EVENT, LIKE_EVENT} from "./constants";
// import * as notificationFunctions from './notifications/index'
// import * as atomicFunctions from './atomic-operations/index'
export const firestoreInstance = admin.firestore();


export const manageItemOnLists = functions.firestore
  .document('items/{itemId}')
  .onWrite(async (change, context) => {
    let ownerId;
    const itemId = context.params.itemId as string;
    // onCreate
    if (change.after.exists && (change.after.data() as BackendItem).ownerId) {
      // add itemId to owner's Items[]
      ownerId = (change.after.data() as BackendItem).ownerId;
      await firestoreInstance.doc(`users/${ ownerId }`).update({
        items: admin.firestore.FieldValue.arrayUnion(itemId)
      });
      console.log(`${ itemId } has been Added to ${ ownerId }'s Item list`);
    }
    // onDelete
    else if (change.before.exists && !change.after.exists) {
      // remove itemId from owner's Items[]
      ownerId = (change.before.data() as BackendItem).ownerId;
      await firestoreInstance.doc(`users/${ ownerId }`).update({
        items: admin.firestore.FieldValue.arrayRemove(itemId)
      });
      console.log(`${ itemId } has been Removed to ${ ownerId }'s Item list`);
    }
    return;
  });

export const addReservationToLists = functions.firestore
  .document('reservations/{resId}')
  .onWrite(async (change, context) => {
    if (change.after.exists) {
      const resId = context.params.resId as string;
      const resData = change.after.data() as BackendReservation;
      const ownerId = resData.ownerId;
      const renterId = resData.renterId;
      const itemId = resData.itemId;

      // add to owner's reservations-owner list
      await firestoreInstance.doc(`users/${ ownerId }/reservations`).update({
        owner: admin.firestore.FieldValue.arrayUnion(resId)
      });
      console.log(`${ resId } has been Added to ${ ownerId }'s Reservation-Owner list`);
      // add to renter's reservations-renter list
      await firestoreInstance.doc(`users/${ renterId }/reservations`).update({
        renter: admin.firestore.FieldValue.arrayUnion(resId)
      });
      console.log(`${ resId } has been Added to ${ ownerId }'s Reservation-Owner list`);
      // add to item's reservations list
      await firestoreInstance.doc(`items/${ itemId }`).update({
        reservations: admin.firestore.FieldValue.arrayUnion(resId)
      });
      console.log(`${ resId } has been Added to ${ itemId }'s reservations list`);
    } else if (change.before.exists && !change.after.exists) {
      // ERR - deleting a Reservation entry
    }
    return;
  });
