// import * as admin from 'firebase-admin';

import * as functions from 'firebase-functions';
import * as init from '../utils/admin';
init.initAdmin();

import { firestoreInstance } from '../firestore';
import * as emailer from '../utils/send-email';

export const setupNewAccount = functions.auth.user().onCreate(
  async (user, context) => {
    const userid = user.uid as string;
    const uemail = user.email as string;
    const uname = user.displayName || null;

    // init firestore/users
    const userRef = firestoreInstance.collection('users').doc(userid);
    try {
      await userRef.set({
        profile: {
          name: uname,
          email: uemail
        },
        items: [],
        reservations: []
      });
    } catch (e) {
      console.error('ERROR - setupNewAccount - firestore dir writes failed');
      return e;
    }
    try {
      await emailer.sendEmailMessage(uemail, userid, user.displayName || '', 'signup');
    } catch (e) {
      console.error('ERROR - setupNewAccount - sending mail failed');
    }
  }
);


export const sendConfirmationEmail = functions.https
  .onCall((data, context) => {
    let item: string;
    let user: string;
    let owner: string;
    if (context && context.hasOwnProperty('auth') && context.auth) {
      // tslint:disable: no-string-literal
      item = data['itemName'] ? data.itemName as string : 'tool';
      user = data['userName'] ? data.userName as string : '';
      owner = data['ownerName'] ? data.ownerName as string : '';
      return emailer.sendEmailMessage(context.auth.token.email as string, context.auth.uid, user, 'confirm', item, owner)
        .then((r) => null)
        .catch(e => {
          return new functions.https.HttpsError('aborted', `Error sending email message - ${ e }`);
        });
    }
    return new functions.https.HttpsError('permission-denied', 'You must be logged in');
  });
