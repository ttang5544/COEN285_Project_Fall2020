"use strict";
//////////////       CALLABLE  INDEX.TS
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewAccount = void 0;
const functions = require("firebase-functions");
const admin_1 = require("../admin");
admin_1.initApp();
const admin = require("firebase-admin");
const send_email_1 = require("../utils/send-email");
exports.createNewAccount = functions.https.onCall((data, context) => {
    if (!data || !('email' in data) || !('password' in data) || !('firstName' in data) || !('lastName' in data)) {
        // validation
        throw new functions.https.HttpsError('invalid-argument', 'Invalid request');
    }
    const emailData = data.email;
    const passwordData = data.password;
    const firstName = data.firstName;
    const lastName = data.lastName;
    return admin.auth().createUser({
        email: emailData,
        password: passwordData,
        displayName: `${data.firstName} ${data.lastName}`,
    })
        .then((userRecord) => {
        console.log('Successfully created new user:', userRecord.uid);
        return setupUser(userRecord.uid, emailData, firstName, lastName);
    })
        .catch((error) => {
        console.error('Error creating new user:', error);
        throw new functions.https.HttpsError('failed-precondition', 'CreateNewAccount request encountered an error while setting up the account');
    });
});
function setupUser(uid, email, firstName, lastName) {
    return admin.firestore().collection('users')
        .doc(uid)
        .set({
        email,
        firstName,
        lastName,
        items: [],
        reservations: {
            owner: [],
            renter: []
        }
    })
        .catch((error) => {
        console.error('ERROR - setupUser - firestore dir writes failed');
        throw new functions.https.HttpsError('failed-precondition', 'Error - could not complete request');
    })
        .then((_) => {
        return send_email_1.sendWelcomeEmail(email, firstName, uid);
    });
}
//# sourceMappingURL=index.js.map