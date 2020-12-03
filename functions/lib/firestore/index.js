"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addReservationToLists = exports.manageItemOnLists = exports.firestoreInstance = void 0;
////////////// FIRESTORE  INDEX.TS
const admin = require("firebase-admin");
const functions = require("firebase-functions");
// admin.initializeApp(functions.config().firebase);
// import {COMMENT_EVENT, LIKE_EVENT} from "./constants";
// import * as notificationFunctions from './notifications/index'
// import * as atomicFunctions from './atomic-operations/index'
exports.firestoreInstance = admin.firestore();
exports.manageItemOnLists = functions.firestore
    .document('items/{itemId}')
    .onWrite(async (change, context) => {
    let ownerId;
    const itemId = context.params.itemId;
    // onCreate
    if (change.after.exists && change.after.data().ownerId) {
        // add itemId to owner's Items[]
        ownerId = change.after.data().ownerId;
        await exports.firestoreInstance.doc(`/users/${ownerId}`).update({
            items: admin.firestore.FieldValue.arrayUnion(itemId)
        });
        console.log(`${itemId} has been Added to ${ownerId}'s Item list`);
    }
    // onDelete
    else if (change.before.exists && !change.after.exists) {
        // remove itemId from owner's Items[]
        ownerId = change.before.data().ownerId;
        await exports.firestoreInstance.doc(`/users/${ownerId}`).update({
            items: admin.firestore.FieldValue.arrayRemove(itemId)
        });
        console.log(`${itemId} has been Removed to ${ownerId}'s Item list`);
    }
    return;
});
exports.addReservationToLists = functions.firestore
    .document('/reservations/{resId}')
    .onWrite(async (change, context) => {
    if (change.after.exists) {
        const resId = context.params.resId;
        const resData = change.after.data();
        const ownerId = resData.ownerId;
        const renterId = resData.renterId;
        const itemId = resData.itemId;
        // add to owner's reservations-owner list
        await exports.firestoreInstance.doc(`/users/${ownerId}/reservations`).update({
            owner: admin.firestore.FieldValue.arrayUnion(resId)
        });
        console.log(`${resId} has been Added to ${ownerId}'s Reservation-Owner list`);
        // add to renter's reservations-renter list
        await exports.firestoreInstance.doc(`/users/${renterId}/reservations`).update({
            renter: admin.firestore.FieldValue.arrayUnion(resId)
        });
        console.log(`${resId} has been Added to ${ownerId}'s Reservation-Owner list`);
        // add to item's reservations list
        await exports.firestoreInstance.doc(`/items/${itemId}`).update({
            reservations: admin.firestore.FieldValue.arrayUnion(resId)
        });
        console.log(`${resId} has been Added to ${itemId}'s reservations list`);
    }
    else if (change.before.exists && !change.after.exists) {
        // ERR - deleting a Reservation entry
    }
    return;
});
//# sourceMappingURL=index.js.map