import * as functions from 'firebase-functions';
import * as init from '../utils/admin';
init.initAdmin();
import { sendEmailMessage } from '../utils/send-email';
import * as admin from 'firebase-admin';


export const createNewAccount = functions.https.onCall(
  (data, context) => {
    if (!context?.auth && data && !!data['email'] && !!data['pw'] && !!data['firstName'] && !!data['lastName]']) {
      // validation
      return new functions.https.HttpsError('invalid-argument', 'Invalid request');
    }
    return admin.auth().createUser({
      email: data.email,
      emailVerified: false,
      password: data.pw,
      displayName: `${ data.firstName }`,
      // phoneNumber: '+11234567890',
      // photoURL: 'http://www.example.com/12345678/photo.png',
      disabled: false,
    })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully created new user:', userRecord.uid);
      })
      .catch((error) => {
        console.log('Error creating new user:', error);
      });


  });

export const sendRentalConfirmation = functions.https.onCall(
  (data, context) => {
    if (!context || !context.auth || !context.auth.token) {
      return new functions.https.HttpsError('unauthenticated', 'You must be logged in to your account');
    }
    // other validation errors
    const itemName: string = data.itemName || '';
    const uid: string = context.auth.uid || '';
    const email: string = data.auth.token.email;
    const userName: string = data.userName || '';
    const ownerName: string = data.ownerName || '';

    return sendEmailMessage('confirm', email, uid, userName, itemName, ownerName)
      .catch((e) => {
        console.error(e);
        return new functions.https.HttpsError('cancelled', 'An error occurred while sending the confirmation email');
      });
  });
