// import * as functions from 'firebase-functions';
// import * as init from '../utils/admin';
// init.initAdmin();

// import { firestoreInstance } from '../firestore';
// import * as emailer from '../utils/send-email';

// export const setupNewAccount = functions.auth.user().onCreate(
//   async (user, context) => {
//     if (!user || !user.email || !context?.auth?.uid) {
//       // functions error
//     }

//     // init firestore/users
//     const userDocRef = firestoreInstance.collection('users').doc(user.uid);
//     try {
//       await userDocRef.set({
//         profile: {
//           name: NAME,
//           email: uemail
//         },
//         items: [],
//         reservations: []
//       });
//     } catch (e) {
//       console.error('ERROR - setupNewAccount - firestore dir writes failed');
//       return e;
//     }
//     try {
//       await emailer.sendEmailMessage(uemail, userid, user.displayName || '', 'signup');
//     } catch (e) {
//       console.error('ERROR - setupNewAccount - sending mail failed');
//     }
//   }
// );


// export const sendConfirmationEmail = functions.https
//   .onCall((data, context) => {
//     let item: string;
//     let renterName: string;
//     let ownerName: string;
//     if (context && context.hasOwnProperty('auth') && context.auth) {
//       // tslint:disable: no-string-literal
//       item = data['itemName'] ? data.itemName as string : 'tool';
//       renterName = data['userName'] ? data.userName as string : '';
//       ownerName = data['ownerName'] ? data.ownerName as string : '';
//       return emailer.sendEmailMessage('confirm', context.auth., context.auth.uid, renterName, item, ownerName)
//         .then((r) => null)
//         .catch(e => {
//           return new functions.https.HttpsError('aborted', `Error sending email message - ${ e }`);
//         });
//     }
//     return new functions.https.HttpsError('permission-denied', 'You must be logged in');
//   });
