//////////////       CALLABLE  INDEX.TS

import * as functions from 'firebase-functions';
import { initApp } from '../admin';
initApp();
import * as admin from 'firebase-admin';

import { sendWelcomeEmail } from '../utils/send-email';



export const createNewAccount = functions.https.onCall(
  (data, context) => {
    if (!data || !('email' in data) || !('password' in data) || !('firstName' in data) || !('lastName' in data)) {
      // validation
      throw new functions.https.HttpsError('invalid-argument', 'Invalid request');
    }
    const emailData = data.email as string;
    const passwordData = data.password as string;
    const firstName = data.firstName as string;
    const lastName = data.lastName as string;
    return admin.auth().createUser({
      email: emailData,
      password: passwordData,
      displayName: `${ data.firstName } ${ data.lastName }`,
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




function setupUser(uid: string, email: string, firstName: string, lastName: string): Promise<any> {
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
      return sendWelcomeEmail(email, firstName, uid);
    });


}

