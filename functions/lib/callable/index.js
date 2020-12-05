"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRentalConfirmation = void 0;
const functions = require("firebase-functions");
const send_email_1 = require("../utils/send-email");
exports.sendRentalConfirmation = functions.https.onCall((data, context) => {
    if (!context || !context.auth || !context.auth.token) {
        return new functions.https.HttpsError('unauthenticated', 'You must be logged in to your account');
    }
    // other validation errors
    const uid = context.auth.uid || '';
    const email = data.auth.token.email;
    const userName = data.userName || '';
    const itemName = data.itemName || '';
    const ownerName = data.ownerName || '';
    return send_email_1.sendEmailMessage(email, uid, userName, 'confirm', itemName, ownerName)
        .catch((e) => {
        console.error(e);
        return new functions.https.HttpsError('cancelled', 'An error occurred while sending the confirmation email');
    });
});
//# sourceMappingURL=index.js.map