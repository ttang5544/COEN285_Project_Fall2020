
import * as admin from 'firebase-admin';


var isInit: boolean;
var defaultApp: admin.app.App;

export function initApp(): admin.app.App {
  if (!isInit) {
    try {
      defaultApp = admin.initializeApp();
      isInit = true;
    } catch (e) {
      // console.error(e);
    }
  }
  return defaultApp;
}



// import * as admin from 'firebase-admin';
// import { firestore, auth } from 'firebase-admin';

// let isInit: boolean;

// let adminFirestore: firestore.Firestore;
// let adminAuth: auth.Auth;

// export const addApp = admin.initializeApp();

// export async function initAdmin() {
// if (!admin) {
//   admin = await import('firebase-admin');
// }

// export function initAdmin() {
//   if (!isInit) {
//     try {
//       admin.initializeApp();
//       // let adminFirestore = adminApp.firestore()
//       // adminApp.firestore().
//       isInit = true;
//     } catch (e) {
//       // console.error(e);
//     }
//   }
//   return admin.app().;
// }

// export function getFirestore(): firestore.Firestore {
//   if (!adminFirestore) {
//     adminFirestore = admin.firestore();
//   }
//   return adminFirestore;
// }

// export function getAuth(): auth.Auth {
//   if (!adminAuth) {
//     adminAuth = admin.auth();
//   }
//   return adminAuth;
// }
