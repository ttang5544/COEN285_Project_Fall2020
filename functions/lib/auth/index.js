"use strict";
// import * as admin from 'firebase-admin';
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendConfirmationEmail = exports.setupNewAccount = void 0;
const functions = require("firebase-functions");
const init = require("../utils/admin");
init.initAdmin();
const firestore_1 = require("../firestore");
const emailer = require("../utils/send-email");
exports.setupNewAccount = functions.auth.user().onCreate(async (user, context) => {
    const userid = user.uid;
    const uemail = user.email;
    const uname = user.displayName || null;
    // init firestore/users
    const userRef = firestore_1.firestoreInstance.collection('users').doc(userid);
    try {
        await userRef.set({
            profile: {
                name: uname,
                email: uemail
            },
            items: [],
            reservations: []
        });
    }
    catch (e) {
        console.error('ERROR - setupNewAccount - firestore dir writes failed');
        return e;
    }
    try {
        await emailer.sendEmailMessage(uemail, userid, user.displayName || '', 'signup');
    }
    catch (e) {
        console.error('ERROR - setupNewAccount - sending mail failed');
    }
});
exports.sendConfirmationEmail = functions.https
    .onCall((data, context) => {
    let item;
    let user;
    let owner;
    if (context && context.hasOwnProperty('auth') && context.auth) {
        // tslint:disable: no-string-literal
        item = data['itemName'] ? data.itemName : 'tool';
        user = data['userName'] ? data.userName : '';
        owner = data['ownerName'] ? data.ownerName : '';
        return emailer.sendEmailMessage(context.auth.token.email, context.auth.uid, user, 'confirm', item, owner)
            .then((r) => null)
            .catch(e => {
            return new functions.https.HttpsError('aborted', `Error sending email message - ${e}`);
        });
    }
    return new functions.https.HttpsError('permission-denied', 'You must be logged in');
});
//# sourceMappingURL=index.js.map