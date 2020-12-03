"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupNewAccount = exports.auth = void 0;
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const firestore_1 = require("../firestore");
exports.auth = admin.auth();
exports.setupNewAccount = functions.auth.user().onCreate(async (user, context) => {
    const uid = user.uid;
    const uemail = user.email;
    const uname = user.displayName || null;
    // init firestore/users
    const userRef = firestore_1.firestoreInstance.collection('users').doc(uid);
    await userRef.set({
        profile: {
            name: uname,
            email: uemail
        },
        items: [],
        reservations: []
    });
    return;
});
//# sourceMappingURL=index.js.map