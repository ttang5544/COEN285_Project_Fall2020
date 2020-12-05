import * as functions from 'firebase-functions';
import { sendEmailMessage } from '../utils/send-email';

export const sendRentalConfirmation = functions.https.onCall(
  (data, context) => {
    if (!context || !context.auth || !context.auth.token) {
      return new functions.https.HttpsError('unauthenticated', 'You must be logged in to your account');
    }
    // other validation errors
    const uid: string = context.auth.uid || '';
    const email: string = data.auth.token.email;
    const userName: string = data.userName || '';
    const itemName: string = data.itemName || '';
    const ownerName: string = data.ownerName || '';

    return sendEmailMessage(email, uid, userName, 'confirm', itemName, ownerName)
      .catch((e) => {
        console.error(e);
        return new functions.https.HttpsError('cancelled', 'An error occurred while sending the confirmation email');
      });
  });
